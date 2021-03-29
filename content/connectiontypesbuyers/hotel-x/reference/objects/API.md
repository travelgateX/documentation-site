{
  "title": "API",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "APIData",
      "name": "apiData",
      "url": "/hotel-x/reference/objects/apidata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/hotel-x/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/hotel-x/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Permission",
      "description": null,
      "url": "/hotel-x/reference/objects/permission"
    },
    {
      "name": "OperationData",
      "description": null,
      "url": "/hotel-x/reference/objects/operationdata"
    },
    {
      "name": "APIEdge",
      "description": null,
      "url": "/hotel-x/reference/objects/apiedge"
    },
    {
      "name": "ManagedGroupData",
      "description": null,
      "url": "/hotel-x/reference/objects/managedgroupdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "API",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
