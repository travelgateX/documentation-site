{
  "title": "HotelXRoomQueryInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "access",
      "url": "/hotelx/reference/scalars/id",
      "description": "Indicates the access that you want use.",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "roomCodes",
      "url": "/hotelx/reference/scalars/string",
      "description": "Indicates the room codes that you want filter.",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "maxSize",
      "url": "/hotelx/reference/scalars/int",
      "description": "Maxium number of items per page",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXRoomQueryInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
