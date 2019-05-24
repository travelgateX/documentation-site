{
  "title": "PaymentCardInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "cardType",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "HolderInput!",
      "name": "holder",
      "url": "/hotelx/reference/inputobjects/holderinput",
      "description": null,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "number",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "CVC",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "ExpireDateInput!",
      "name": "expire",
      "url": "/hotelx/reference/inputobjects/expiredateinput",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelbookinput"
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
