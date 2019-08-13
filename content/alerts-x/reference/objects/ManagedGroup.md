{
  "title": "ManagedGroup",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ManagedGroupData",
      "name": "managedGroupData",
      "url": "/alerts-x/reference/objects/managedgroupdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/alerts-x/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/alerts-x/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/alerts-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/alerts-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "ManagedGroupEdge",
      "description": null,
      "url": "/alerts-x/reference/objects/managedgroupedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ManagedGroup",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
