{
  "title": "Reference",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "client",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Client reference booking",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "supplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Supplier reference booking",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking.",
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    },
    {
      "name": "HotelCancelDetail",
      "description": "Contains information about cancel",
      "url": "/travelgatex/reference/objects/hotelcanceldetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Reference"
}
Contains reference codes.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
