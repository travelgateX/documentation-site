{
  "title": "PageInfo",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "hasNextPage",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "hasPreviousPage",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "startCursor",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "endCursor",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelConnection",
      "description": "HotelList definition",
      "url": "/travelgatex/reference/objects/hotelconnection"
    },
    {
      "name": "MediaConnection",
      "description": "",
      "url": "/travelgatex/reference/objects/mediaconnection"
    },
    {
      "name": "AmenityConnection",
      "description": "",
      "url": "/travelgatex/reference/objects/amenityconnection"
    },
    {
      "name": "AccessConnection",
      "description": "",
      "url": "/travelgatex/reference/objects/accessconnection"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PageInfo"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
