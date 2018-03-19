{
  "title": "Exchange",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": "Informs about the currency of origin.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "rate",
      "url": "/travelgatex/reference/scalars/float",
      "description": "Informs about the rate applied over result.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Price",
      "description": "Price indicates the value of the room/option.\nSupplements and/or surcharges could be or not included into the price, will be verified with the nodes Supplements/Surcharges.",
      "url": "/travelgatex/reference/objects/price"
    },
    {
      "name": "Priceable",
      "description": "",
      "url": "/travelgatex/reference/interfaces/priceable"
    },
    {
      "name": "Markup",
      "description": "Informs markup applied over supplier price.",
      "url": "/travelgatex/reference/objects/markup"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Exchange"
}
Informs about the currency of origin, and the rate applied over result returned by the supplier.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
