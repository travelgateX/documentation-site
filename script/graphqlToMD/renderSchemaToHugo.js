"use strict";
var fs = require("fs");
var config = require("./config");

function sortBy(arr, property) {
  arr.sort((a, b) => {
    const aValue = a[property];
    const bValue = b[property];
    if (aValue > bValue) return 1;
    if (bValue > aValue) return -1;
    return 0;
  });
}

function renderType(type, ret) {
  if (type.kind === "NON_NULL") {
    return renderType(type.ofType, ret) + "!";
  }
  if (type.kind === "LIST") {
    return `[${renderType(type.ofType, ret)}]`;
  }
  ret.url = getTypeURL(type);
  ret.typeString = type.name;
  return type.name;
}

function newArgField(fieldOrArg) {
  let ret = {};
  return {
    typeString: renderType(fieldOrArg.type, ret),
    name: fieldOrArg.name,
    url: ret.url,
    description: fieldOrArg.description,
    isDeprecated: fieldOrArg.isDeprecated ? " ⚠️" : ""
  };
}

function parseFields(type) {
  let fields = [];
  if (type.fields) {
    fields = type.fields;
  } else if (type.inputFields) {
    fields = type.inputFields;
  }
  var fieldsList = [];
  fields.forEach(field => {
    var args = null;
    if (field.args && field.args.length) {
      args = [];
      field.args.forEach((arg, i) => {
        args.push(newArgField(arg));
      });
    }
    let newfield = newArgField(field);
    newfield.args = args;
    fieldsList.push(newfield);
  });
  return fieldsList.length ? fieldsList : null;
}

function renderObject(lines, type, types, template, operator = template) {
  let frontMatter = {
    title: type.name,
    description: "",
    weight: 1,
    fields: parseFields(type),
    requireby: parseRequiredBy(types, type.name),
    enumValues: type.enumValues,
    operator: operator,
    typename: type.name
  };

  lines.push(JSON.stringify(frontMatter, null, 2));
  if (type.description) {
    printer(lines, `${type.description}`);
  }

  printer(lines, `## ${config.SECTION1}\n`);
  printer(lines, `{{% graphql-schema-${template} %}}\n`);

  let fields = frontMatter.fields;
  if (fields && fields.length) {
    printer(lines, `## ${config.SECTION2}\n`);
    printer(lines, `{{% graphql-field %}}\n`);    
  }

  if (frontMatter.requireby && frontMatter.requireby.length) {
    printer(lines, `## ${config.SECTION3}\n`);
    printer(lines, `{{% graphql-require-by %}}\n`);
  }
}

function saveFile(lines, path) {
  fs.writeFile(`${config.LOCATION}/${path}.md`, lines, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}

function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;")
       .replace(/\n/g, " \\n ");;
}

function getTypeURL(type) {
  const url = `${config.relURL}`;
  const name = type.name.toLowerCase();
  switch (type.kind) {
    case "INPUT_OBJECT":
      return url + "/inputobjects/" + name;
      break;
    case "OBJECT":
      if (name === "mutation" || name === "query") {
        return url + "/schema/" + name;
      }
      return url + "/objects/" + name;
      break;
    case "SCALAR":
      return url + "/scalars/" + name;
      break;
    case "ENUM":
      return url + "/enums/" + name;
      break;
    case "INTERFACE":
      return url + "/interfaces/" + name;
      break;
    default:
      return "#";
      break;
  }
}

function renderSchema(schema) {
  if (schema.__schema) {
    schema = schema.__schema;
  }

  saveFile(config.frontmatters.INDEX, `_index`);

  const types = schema.types.filter(type => !type.name.startsWith("__"));

  const queryType = schema.queryType;
  const mutationType = schema.mutationType;

  const objects = types.filter(
    type =>
      type.kind === "OBJECT" &&
      type.name !== schema.mutationType.name &&
      type.name !== schema.queryType.name
  );
  render(objects, types, "objects", "type");

  const enums = types.filter(type => type.kind === "ENUM");
  render(enums, types, "enums", "enum");

  const inputObjects = types.filter(type => type.kind === "INPUT_OBJECT");
  render(inputObjects, types, "inputobjects", "type");

  const query =
    queryType && types.find(type => type.name === schema.queryType.name);
  if (query) {
    var lines = [];
    renderObject(lines, query, types, "type");
    saveFile(lines.join("\n"), `schema/query`);
  }

  const mutation =
    mutationType && types.find(type => type.name === schema.mutationType.name);
  if (mutation) {
    var lines = [];
    renderObject(lines, mutation, types, "type");
    saveFile(lines.join("\n"), `schema/mutation`);
  }

  saveFile(config.frontmatters.INDEXSCHEMA, `schema/_index`);

  const scalars = types.filter(type => type.kind === "SCALAR");
  render(scalars, types, "scalars", "scalar");

  const interfaces = types.filter(type => type.kind === "INTERFACE");
  render(interfaces, types, "interfaces", "type", "interface");
}

function printer(lines, s) {
  lines.push(s);
}

function render(objects, types, dirname, template, operator = template) {
  if (objects.length) {
    sortBy(objects, "name");
    objects.forEach(type => {
      var lines = [];
      renderObject(lines, type, types, template, operator);
      saveFile(lines.join("\n"), `${dirname}/${type.name}`);
    });
    saveFile(
      config.frontmatters[`INDEX${dirname.toUpperCase()}`],
      `${dirname}/_index`
    );
  }
}

function parseRequiredBy(types, name) {
  var filter = [];
  types.forEach(type => {
    var fields = [];
    if (type.fields) {
      fields = type.fields;
    } else if (type.inputFields) {
      fields = type.inputFields;
    }
    if (fields.length) {
      let f = fields.find(field => {
        let fieldName =
          field.type.kind === "NON_NULL" || field.type.kind === "LIST"
            ? field.type.ofType.name
            : field.type.name;
        if (fieldName === name) {
          return true;
        }
      });
      if (f) {
        filter.push({
          name: type.name,
          description: type.description,
          url: getTypeURL(type)
        });
      }
    }
  });
  return filter.length ? filter : null;
}

module.exports = renderSchema;
