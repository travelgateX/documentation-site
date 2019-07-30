{
  "title": "OperationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/alertsx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[OperationType!]!",
      "name": "types",
      "url": "/alertsx/reference/enums/operationtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "API",
      "name": "api",
      "url": "/alertsx/reference/objects/api",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Operation",
      "description": null,
      "url": "/alertsx/reference/objects/operation"
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
