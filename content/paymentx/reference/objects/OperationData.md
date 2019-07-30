{
  "title": "OperationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/paymentx/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/paymentx/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[OperationType!]!",
      "name": "types",
      "url": "/paymentx/reference/enums/operationtype",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "API",
      "name": "api",
      "url": "/paymentx/reference/objects/api",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Operation",
      "description": "",
      "url": "/paymentx/reference/objects/operation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "OperationData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
