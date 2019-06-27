{
  "title": "HotelXHotelListInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID",
      "name": "access",
      "url": "/hotelx/reference/scalars/id",
      "description": "Indicates the access",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "hotelCodes",
      "url": "/hotelx/reference/scalars/string",
      "description": "Search by hotel codes",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "destinationCodes",
      "url": "/hotelx/reference/scalars/string",
      "description": "Search by destination codes, only search by minimal destinations",
      "args": null
    },
    {
      "typeString": "[Country!]",
      "name": "countries",
      "url": "/hotelx/reference/scalars/country",
      "description": "Filter by country",
      "args": null
    },
    {
      "typeString": "[Int!]",
      "name": "ranks",
      "url": "/hotelx/reference/scalars/int",
      "description": "Filter by supplier rank",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "maxSize",
      "url": "/hotelx/reference/scalars/int",
      "description": "Maxium number of items per page",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "group",
      "url": "/hotelx/reference/scalars/id",
      "description": "The supplier's group. Only available if all permissions allowed",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXHotelListInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
