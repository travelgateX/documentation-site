{
  "title": "PriceBreakdown",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Date!",
      "name": "effectiveDate",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Start date in which the price becomes effective.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "expireDate",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Expire date of price.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/travelgatex/reference/objects/price",
      "description": "Specifies the daily price.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "PriceBreakdown"
}
Information about daily price.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
