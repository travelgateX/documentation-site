/**
 * CONSTANTS CONFIG
 */

var URL = "https://api.travelgatex.com";
var DIRNAME = "reference";
var PATH = "/travelgatex/";
var relURL = PATH + DIRNAME;
var LOCATION = __dirname + "/../../content" + relURL;
var BODY = {
  operationName: "IntrospectionQuery",
  query: require("./query").query,
  variable: null
};

var frontMatter = (title, description, weight) => `+++
title = "${title}"
description = "${description}"
weight = ${weight}
+++`;

var dirnameFrontMatter = {
  title: "Reference",
  pagetitle: "",
  description: "Reference Documentation",
  icon: "fa-book",
  weight: 4,
  alwaysopen: false
};

var INDEX = JSON.stringify(dirnameFrontMatter, null, 2);
var INDEXSCHEMA = frontMatter("Schema", "", 1);
var INDEXOBJECTS = frontMatter("Objects", "", 2);
var INDEXSCALARS = frontMatter("Scalars", "", 3);
var INDEXINTERFACES = frontMatter("Interfaces", "", 4);
var INDEXINPUTOBJECTS = frontMatter("Input objects", "", 5);
var INDEXENUMS = frontMatter("Enums", "", 5);

var QUERY = frontMatter("Query", "", 1);
var MUTATION = frontMatter("Mutation", "", 2);

var SECTION1 = "GraphQL Schema definition";
var SECTION2 = "Require by";

module.exports = {
  URL,
  LOCATION,
  DIRNAME,
  relURL,
  BODY,
  frontmatters: {
    frontMatter,
    INDEX,
    INDEXOBJECTS,
    INDEXSCHEMA,
    INDEXSCALARS,
    INDEXINTERFACES,
    INDEXINPUTOBJECTS,
    INDEXENUMS,
    QUERY,
    MUTATION
  },
  SECTION1,
  SECTION2
};
