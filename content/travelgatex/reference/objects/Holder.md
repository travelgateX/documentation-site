{
  "title": "Holder",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Holder's name",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "surname",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Holder's surname",
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
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Holder"
}
Holder object that contains the pax name and surname.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
