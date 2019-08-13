{
  "title": "OperationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/alerts-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[OperationType!]!",
      "name": "types",
      "url": "/alerts-x/reference/enums/operationtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "API",
      "name": "api",
      "url": "/alerts-x/reference/objects/api",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Operation",
      "description": null,
      "url": "/alerts-x/reference/objects/operation"
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
