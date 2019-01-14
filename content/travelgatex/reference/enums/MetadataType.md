{
  "title": "MetadataType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelRuntimeParameter",
      "description": "template of all fields used by the supplier",
      "url": "/travelgatex/reference/objects/hotelruntimeparameter"
    }
  ],
  "enumValues": [
    {
      "name": "STRING",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "NUMERIC",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "BOOLEAN",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "XML",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "URI",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "MetadataType",
  "hideGithubLink": true
}
Indicates value type of current paramter
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
