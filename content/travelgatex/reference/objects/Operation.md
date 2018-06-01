{
  "title": "Operation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OperationData",
      "name": "operationData",
      "url": "/travelgatex/reference/objects/operationdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "OperationEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/operationedge"
    },
    {
      "name": "OperationDetailed",
      "description": "",
      "url": "/travelgatex/reference/objects/operationdetailed"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Operation"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
