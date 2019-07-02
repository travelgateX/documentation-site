{
  "title": "PluginsInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "PluginType!",
      "name": "type",
      "url": "/hotel-x/reference/enums/plugintype",
      "description": "type of the plugins to execute",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/hotel-x/reference/scalars/string",
      "description": "name of plugin to execute",
      "args": null
    },
    {
      "typeString": "[ParameterInput!]",
      "name": "parameters",
      "url": "/hotel-x/reference/inputobjects/parameterinput",
      "description": "Plugin's parameters",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "PluginsInput",
  "hideGithubLink": true
}
Plugin to execute.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
