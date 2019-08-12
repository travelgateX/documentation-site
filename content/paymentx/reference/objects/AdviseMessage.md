{
  "title": "AdviseMessage",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "type",
      "url": "/paymentx/reference/scalars/string",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "",
      "descriptionSplitted": {
        "date": "2018-06-01",
        "first": "deprecated from",
        "second": ""
      },
      "deprecationDate": "2018-06-01",
      "typeName": "AdviseMessage"
    },
    {
      "typeString": "String!",
      "name": "description",
      "url": "/paymentx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AdviseMessageLevel!",
      "name": "level",
      "url": "/paymentx/reference/enums/advisemessagelevel",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ExternalMessage",
      "name": "external",
      "url": "/paymentx/reference/objects/externalmessage",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "correlationID",
      "url": "/paymentx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentXQuery",
      "description": null,
      "url": "/paymentx/reference/objects/paymentxquery"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AdviseMessage",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
