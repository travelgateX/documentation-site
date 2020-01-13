{
  "title": "PaymentCardData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "PaymentCardType!",
      "name": "type",
      "url": "/hotel-x/reference/enums/paymentcardtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Holder!",
      "name": "holder",
      "url": "/hotel-x/reference/objects/holder",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CardNumber!",
      "name": "number",
      "url": "/hotel-x/reference/scalars/cardnumber",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CVC!",
      "name": "CVC",
      "url": "/hotel-x/reference/scalars/cvc",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Supplier!",
      "name": "supplier",
      "url": "/hotel-x/reference/objects/supplier",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "expire",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "active",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentCard",
      "description": null,
      "url": "/hotel-x/reference/objects/paymentcard"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentCardData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
