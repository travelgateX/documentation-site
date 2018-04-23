{
  "title": "DestinationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Destination Code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "available",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if you can search by destination",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "destinationLeaf",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Returns destination leafs of the destination.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]!",
      "name": "texts",
      "url": "/travelgatex/reference/interfaces/text",
      "description": "Contains the destination name",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": ""
        }
      ]
    },
    {
      "typeString": "[String!]",
      "name": "closestDestinations",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Closest destinations, indicates destinations in proximity",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "parent",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Parent destination code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/destinationtype",
      "description": "Indicates destination type, zone or city",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Location",
      "description": "Indicates the location of the hotel",
      "url": "/travelgatex/reference/objects/location"
    },
    {
      "name": "Destination",
      "description": "Destination Type",
      "url": "/travelgatex/reference/objects/destination"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "DestinationData"
}
Information about destinantion
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
