{
  "title": "PaymentCardInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "cardType",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "PaymentCardType",
      "name": "type",
      "url": "/hotel-x/reference/enums/paymentcardtype",
      "description": null,
      "args": null
    },
    {
      "typeString": "HolderInput!",
      "name": "holder",
      "url": "/hotel-x/reference/inputobjects/holderinput",
      "description": null,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "number",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "CVC",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "ExpireDateInput!",
      "name": "expire",
      "url": "/hotel-x/reference/inputobjects/expiredateinput",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelbookinput"
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
