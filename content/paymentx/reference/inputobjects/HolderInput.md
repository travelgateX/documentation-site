{
  "title": "HolderInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/paymentx/reference/scalars/string",
      "description": "The card holder's name",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "surname",
      "url": "/paymentx/reference/scalars/string",
      "description": "The card holder's surname",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentXStoredCardFilterInput",
      "description": "",
      "url": "/paymentx/reference/inputobjects/paymentxstoredcardfilterinput"
    },
    {
      "name": "PaymentXStoredCardInput",
      "description": "",
      "url": "/paymentx/reference/inputobjects/paymentxstoredcardinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HolderInput",
  "hideGithubLink": true
}
Holder object that contains the occupant's (pax's) name and surname.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
