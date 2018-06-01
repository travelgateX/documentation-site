{
  "title": "HotelEdge",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "cursor",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Hotel",
      "name": "node",
      "url": "/travelgatex/reference/objects/hotel",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelConnection",
      "description": "HotelList definition",
      "url": "/travelgatex/reference/objects/hotelconnection"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelEdge"
}
HotelList Edge definition
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
