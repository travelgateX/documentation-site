{
  "title": "PluginsInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "PluginType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/plugintype",
      "description": "type of the plugins to execute",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "name of plugin to execute",
      "args": null
    },
    {
      "typeString": "[ParameterInput!]",
      "name": "parameters",
      "url": "/travelgatex/reference/inputobjects/parameterinput",
      "description": "Plugin's parameters",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "PluginsInput"
}
Plugin to execute.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
