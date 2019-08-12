{
  "title": "PaymentCardInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "cardType",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "PaymentCardType",
      "name": "type",
      "url": "/travelgatex/reference/enums/paymentcardtype",
      "description": null,
      "args": null
    },
    {
      "typeString": "HolderInput!",
      "name": "holder",
      "url": "/travelgatex/reference/inputobjects/holderinput",
      "description": null,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "number",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "CVC",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "ExpireDateInput!",
      "name": "expire",
      "url": "/travelgatex/reference/inputobjects/expiredateinput",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookInput",
      "description": null,
      "url": "/travelgatex/reference/inputobjects/hotelbookinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentCardInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
