{
  "title": "DestinationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": "Destination Code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "available",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": "Indicates if you can search by destination",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "destinationLeaf",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Returns destination leafs of the destination.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]!",
      "name": "texts",
      "url": "/hotel-x/reference/objects/text",
      "description": "Contains the destination name",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/hotel-x/reference/scalars/language",
          "description": ""
        }
      ]
    },
    {
      "typeString": "[String!]",
      "name": "closestDestinations",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Closest destinations, indicates destinations in proximity",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "parent",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Parent destination code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationType",
      "name": "type",
      "url": "/hotel-x/reference/enums/destinationtype",
      "description": "Indicates destination type, zone or city",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Location",
      "description": "Indicates the location of the hotel",
      "url": "/hotel-x/reference/objects/location"
    },
    {
      "name": "Destination",
      "description": "Destination Type",
      "url": "/hotel-x/reference/objects/destination"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "DestinationData",
  "hideGithubLink": true
}
Information about destinantion
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
