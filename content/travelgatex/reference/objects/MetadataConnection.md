{
  "title": "MetadataConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[MetadataEdge]",
      "name": "edges",
      "url": "/travelgatex/reference/objects/metadataedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/travelgatex/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXQuery",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelxquery"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "MetadataConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
