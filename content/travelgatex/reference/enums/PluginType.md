{
  "title": "PluginType",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "PluginsInput",
      "description": "Plugin to execute.",
      "url": "/travelgatex/reference/inputobjects/pluginsinput"
    }
  ],
  "enumValues": [
    {
      "name": "PRE_STEP",
      "description": "PRE_STEP is the first plugin that a step will execute, allows a full range of operations:\nsplit arrays, join arrays, modify object values, add or remove object instances",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "HOTEL_MAP",
      "description": "HOTEL_MAP allows to match Seller and Buyer hotel codes based on contexts",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "BOARD_MAP",
      "description": "BOARD_MAP allows to match Seller and Buyer board codes based on contexts",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "ROOM_MAP",
      "description": "ROOM_MAP allows to match Seller and Buyer room codes based on contexts",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "CURRENCY_CONVERSION",
      "description": "CURRENCY_CONVERSION allows to match Seller and Buyer hotel codes based on contexts",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "MARKUP",
      "description": "MARKUP allows to apply markup over price",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "AGGREGATION",
      "description": "AGGREGATION allows to aggregate multiple supplier options",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "POST_STEP",
      "description": "POST_STEP is the last plugin that a step will execute, allows a full range of operations:\nsplit arrays, join arrays, modify object values, add or remove object instances",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "PluginType"
}
Plugin Type
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
