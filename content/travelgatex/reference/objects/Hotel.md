{
  "title": "Hotel",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Hotel ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelData",
      "name": "hotelData",
      "url": "/travelgatex/reference/objects/hoteldata",
      "description": "Hotel data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will cause the service to abort",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelEdge",
      "description": "HotelList Edge definition",
      "url": "/travelgatex/reference/objects/hoteledge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Hotel"
}
Hotel type.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
