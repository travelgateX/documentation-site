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
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "HotelData",
      "name": "hotelData",
      "url": "/travelgatex/reference/objects/hoteldata",
      "description": "Hotel data",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Create date",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Update date",
      "isDeprecated": "",
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
Hotel Type
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
