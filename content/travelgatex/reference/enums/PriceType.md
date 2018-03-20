{
  "title": "PriceType",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": [
    {
      "name": "GROSS",
      "description": "Price without deductions.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "NET",
      "description": "Price after deducting all discounts and rebates.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "AMOUNT",
      "description": "Final quantity. Sum of multiple quantities.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "PriceType"
}
Price Type
## GraphQL Schema definition

{{% graphql-schema-enum %}}
