{
  "title": "API",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "APIData",
      "name": "apiData",
      "url": "/travelgatex/reference/objects/apidata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Permission",
      "description": null,
      "url": "/travelgatex/reference/objects/permission"
    },
    {
      "name": "ManagedGroupData",
      "description": null,
      "url": "/travelgatex/reference/objects/managedgroupdata"
    },
    {
      "name": "APIEdge",
      "description": null,
      "url": "/travelgatex/reference/objects/apiedge"
    },
    {
      "name": "OperationData",
      "description": null,
      "url": "/travelgatex/reference/objects/operationdata"
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
