{
  "title": "PageInfo",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "hasNextPage",
      "url": "/hotelx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "hasPreviousPage",
      "url": "/hotelx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "startCursor",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "endCursor",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "BoardConnection",
      "description": null,
      "url": "/hotelx/reference/objects/boardconnection"
    },
    {
      "name": "CategoryConnection",
      "description": null,
      "url": "/hotelx/reference/objects/categoryconnection"
    },
    {
      "name": "HotelConnection",
      "description": null,
      "url": "/hotelx/reference/objects/hotelconnection"
    },
    {
      "name": "RoomConnection",
      "description": null,
      "url": "/hotelx/reference/objects/roomconnection"
    },
    {
      "name": "DestinationConnection",
      "description": null,
      "url": "/hotelx/reference/objects/destinationconnection"
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
