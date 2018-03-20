{
  "title": "Board",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Board ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BoardData",
      "name": "boardData",
      "url": "/travelgatex/reference/objects/boarddata",
      "description": "Board data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Create date",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Update date",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "BoardEdge",
      "description": "BoardList Edge definition",
      "url": "/travelgatex/reference/objects/boardedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Board"
}
Board Type
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
