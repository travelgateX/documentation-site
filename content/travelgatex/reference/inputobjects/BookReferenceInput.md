{
  "title": "BookReferenceInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "client",
      "url": "/travelgatex/reference/scalars/string",
      "description": "The client's reference",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "supplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "The Supplier's reference",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCancelInput",
      "description": "Cancellation Criteria.",
      "url": "/travelgatex/reference/inputobjects/hotelcancelinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "BookReferenceInput"
}
Reference object that contains the client reference and/or supplier reference.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
