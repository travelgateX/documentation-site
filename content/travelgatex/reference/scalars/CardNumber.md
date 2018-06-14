{
  "title": "CardNumber",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "PaymentCard",
      "description": "Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information",
      "url": "/travelgatex/reference/objects/paymentcard"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "CardNumber"
}
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
