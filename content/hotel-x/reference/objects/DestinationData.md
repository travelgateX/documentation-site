{
  "title": "DestinationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotelx/reference/scalars/id",
      "description": "Destination Code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "available",
      "url": "/hotelx/reference/scalars/boolean",
      "description": "Indicates if you can search by destination",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "destinationLeaf",
      "url": "/hotelx/reference/scalars/string",
      "description": "Returns destination leafs of the destination.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]!",
      "name": "texts",
      "url": "/hotelx/reference/objects/text",
      "description": "Contains the destination name",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/hotelx/reference/scalars/language",
          "description": ""
        }
      ]
    },
    {
      "typeString": "[String!]",
      "name": "closestDestinations",
      "url": "/hotelx/reference/scalars/string",
      "description": "Closest destinations, indicates destinations in proximity",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "parent",
      "url": "/hotelx/reference/scalars/string",
      "description": "Parent destination code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationType",
      "name": "type",
      "url": "/hotelx/reference/enums/destinationtype",
      "description": "Indicates destination type, zone or city",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Location",
      "description": "Indicates the location of the hotel",
      "url": "/hotelx/reference/objects/location"
    },
    {
      "name": "Destination",
      "description": "Destination Type",
      "url": "/hotelx/reference/objects/destination"
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
