{
  "title": "PageInfo",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "hasNextPage",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "hasPreviousPage",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "startCursor",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "endCursor",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "BoardConnection",
      "description": null,
      "url": "/hotel-x/reference/objects/boardconnection"
    },
    {
      "name": "CategoryConnection",
      "description": null,
      "url": "/hotel-x/reference/objects/categoryconnection"
    },
    {
      "name": "HotelConnection",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelconnection"
    },
    {
      "name": "RoomConnection",
      "description": null,
      "url": "/hotel-x/reference/objects/roomconnection"
    },
    {
      "name": "DestinationConnection",
      "description": null,
      "url": "/hotel-x/reference/objects/destinationconnection"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PageInfo",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
