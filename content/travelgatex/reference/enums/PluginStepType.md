{
  "title": "PluginStepType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "PluginStepInput",
      "description": "Plugin to execute.",
      "url": "/travelgatex/reference/inputobjects/pluginstepinput"
    }
  ],
  "enumValues": [
    {
      "name": "AGGREGATE_ACCESS",
      "description": "Aggregate Access Response.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "AGGREGATE",
      "description": "Aggregate Response.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "MAPPING_ROOM",
      "description": "Room code and descriptions mapping",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "MARKUP",
      "description": "Markup application",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "PluginStepType"
}
Plugin Step Type
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
