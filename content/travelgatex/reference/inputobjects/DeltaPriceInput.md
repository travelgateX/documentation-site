{
  "title": "DeltaPriceInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Float",
      "name": "amount",
      "url": "/travelgatex/reference/scalars/float",
      "description": "The amount in the currency returned by the option that will be accepted by the client to be higher than the valuation price.",
      "args": null
    },
    {
      "typeString": "Float",
      "name": "percent",
      "url": "/travelgatex/reference/scalars/float",
      "description": "The percentage accepted by the client to be higher than the valuation price.",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "applyBoth",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates that the range between valuation price and the new price does not exceed the amount and/or porcentage indicated by the client.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelBookInput",
      "description": "Criteria of book.",
      "url": "/travelgatex/reference/inputobjects/hotelbookinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "DeltaPriceInput"
}
Input delta price, indicates price variation permitted by the client
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
