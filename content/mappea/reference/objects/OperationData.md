{
  "title": "OperationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/mappea/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/mappea/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/mappea/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[OperationType!]!",
      "name": "types",
      "url": "/mappea/reference/enums/operationtype",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "API",
      "name": "api",
      "url": "/mappea/reference/objects/api",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Operation",
      "description": "",
      "url": "/mappea/reference/objects/operation"
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
