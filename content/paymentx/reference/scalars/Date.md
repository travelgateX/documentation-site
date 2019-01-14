{
  "title": "Date",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "PaymentXStoredCardData",
      "description": "",
      "url": "/paymentx/reference/objects/paymentxstoredcarddata"
    },
    {
      "name": "PaymentXStoredCardInput",
      "description": "",
      "url": "/paymentx/reference/inputobjects/paymentxstoredcardinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Date",
  "hideGithubLink": true
}
The Date type represents Date values. A good example might be a Hotel CheckIn Date.
In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: "2017-10-22".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
