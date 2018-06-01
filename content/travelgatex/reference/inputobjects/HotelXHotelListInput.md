{
  "title": "HotelXHotelListInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "access",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Indicates the access",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "hotelCodes",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Search by hotel codes",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "destinationCodes",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Search by destination codes, only search by minimal destinations",
      "args": null
    },
    {
      "typeString": "[Int!]",
      "name": "ranks",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Filter by supplier rank",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "maxSize",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Maxium number of items per page",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXHotelListInput"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
