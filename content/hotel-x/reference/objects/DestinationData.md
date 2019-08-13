{
  "title": "DestinationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "available",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "destinationLeaf",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]!",
      "name": "texts",
      "url": "/hotel-x/reference/objects/text",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/hotel-x/reference/scalars/language",
          "description": null
        }
      ]
    },
    {
      "typeString": "[String!]",
      "name": "closestDestinations",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "parent",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationType",
      "name": "type",
      "url": "/hotel-x/reference/enums/destinationtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Location",
      "description": null,
      "url": "/hotel-x/reference/objects/location"
    },
    {
      "name": "Destination",
      "description": null,
      "url": "/hotel-x/reference/objects/destination"
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
