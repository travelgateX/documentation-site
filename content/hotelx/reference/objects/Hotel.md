{
  "title": "Hotel",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotelx/reference/scalars/id",
      "description": "Hotel ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelData",
      "name": "hotelData",
      "url": "/hotelx/reference/objects/hoteldata",
      "description": "Hotel data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "error",
      "url": "/hotelx/reference/objects/advisemessage",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelEdge",
      "description": "HotelList Edge definition",
      "url": "/hotelx/reference/objects/hoteledge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Hotel",
  "hideGithubLink": true
}
Hotel Type
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
