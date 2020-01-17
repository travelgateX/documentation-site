{
  "title": "PaymentCardData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "PaymentCardType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/paymentcardtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Holder!",
      "name": "holder",
      "url": "/travelgatex/reference/objects/holder",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CardNumber!",
      "name": "number",
      "url": "/travelgatex/reference/scalars/cardnumber",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CVC!",
      "name": "CVC",
      "url": "/travelgatex/reference/scalars/cvc",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Supplier!",
      "name": "supplier",
      "url": "/travelgatex/reference/objects/supplier",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "expire",
      "url": "/travelgatex/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "active",
      "url": "/travelgatex/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentCard",
      "description": null,
      "url": "/travelgatex/reference/objects/paymentcard"
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
