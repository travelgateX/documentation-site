{
  "title": "DestinationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotelx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "available",
      "url": "/hotelx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "destinationLeaf",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]!",
      "name": "texts",
      "url": "/hotelx/reference/objects/text",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/hotelx/reference/scalars/language",
          "description": null
        }
      ]
    },
    {
      "typeString": "[String!]",
      "name": "closestDestinations",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "parent",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationType",
      "name": "type",
      "url": "/hotelx/reference/enums/destinationtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Location",
      "description": null,
      "url": "/hotelx/reference/objects/location"
    },
    {
      "name": "Destination",
      "description": null,
      "url": "/hotelx/reference/objects/destination"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "DestinationData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
