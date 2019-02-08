{
  "title": "AdviseMessage",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "AM code: The following codes can be returned:",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "type",
      "url": "/paymentx/reference/scalars/string",
      "description": "Error type: The following types are valid:",
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
      "description": "Error description",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AdviseMessageLevel!",
      "name": "level",
      "url": "/paymentx/reference/enums/advisemessagelevel",
      "description": "Indicates the level of importance of the message: Posible values ERROR WARN INFO",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ExternalMessage",
      "name": "external",
      "url": "/paymentx/reference/objects/externalmessage",
      "description": "Specify the external message.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "correlationID",
      "url": "/paymentx/reference/scalars/id",
      "description": "Identifier to be able to investigate the cause of the error",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentXQuery",
      "description": "",
      "url": "/paymentx/reference/objects/paymentxquery"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AdviseMessage",
  "hideGithubLink": true
}
List of advise messages.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
