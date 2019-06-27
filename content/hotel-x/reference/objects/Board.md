{
  "title": "Board",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotelx/reference/scalars/id",
      "description": "Board ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BoardData",
      "name": "boardData",
      "url": "/hotelx/reference/objects/boarddata",
      "description": "Board data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/hotelx/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "BoardEdge",
      "description": "BoardList Edge definition",
      "url": "/hotelx/reference/objects/boardedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Board",
  "hideGithubLink": true
}
Board type.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
