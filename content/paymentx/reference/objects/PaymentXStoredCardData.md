{
  "title": "PaymentXStoredCardData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Group!",
      "name": "instance",
      "url": "/paymentx/reference/objects/group",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PointOfSale!",
      "name": "pointOfSale",
      "url": "/paymentx/reference/objects/pointofsale",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "bookingReference",
      "url": "/paymentx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkOut",
      "url": "/paymentx/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkIn",
      "url": "/paymentx/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "cardType",
      "url": "/paymentx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Holder",
      "name": "holder",
      "url": "/paymentx/reference/objects/holder",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CardNumber",
      "name": "number",
      "url": "/paymentx/reference/scalars/cardnumber",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CVC",
      "name": "CVC",
      "url": "/paymentx/reference/scalars/cvc",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentXExpireDate",
      "name": "expire",
      "url": "/paymentx/reference/objects/paymentxexpiredate",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentXStoredCard",
      "description": null,
      "url": "/paymentx/reference/objects/paymentxstoredcard"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXStoredCardData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
