{
  "title": "PaymentXExpireDate",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "month",
      "url": "/paymentx/reference/scalars/int",
      "description": "Month MM",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "year",
      "url": "/paymentx/reference/scalars/int",
      "description": "Year yy",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentXStoredCardData",
      "description": "",
      "url": "/paymentx/reference/objects/paymentxstoredcarddata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXExpireDate",
  "hideGithubLink": true
}
The card expiration date
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
