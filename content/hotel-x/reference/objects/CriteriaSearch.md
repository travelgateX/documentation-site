{
  "title": "CriteriaSearch",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Date!",
      "name": "checkIn",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "checkOut",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]!",
      "name": "hotels",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[RoomCriteria!]!",
      "name": "occupancies",
      "url": "/hotel-x/reference/objects/roomcriteria",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Language",
      "name": "language",
      "url": "/hotel-x/reference/scalars/language",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Currency",
      "name": "currency",
      "url": "/hotel-x/reference/scalars/currency",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country",
      "name": "nationality",
      "url": "/hotel-x/reference/scalars/country",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "market",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelSearch",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelsearch"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CriteriaSearch",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
