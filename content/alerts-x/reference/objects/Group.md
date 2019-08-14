{
  "title": "Group",
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
      "typeString": "GroupData",
      "name": "groupData",
      "url": "/alerts-x/reference/objects/groupdata",
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
      "name": "GroupEdge",
      "description": null,
      "url": "/alerts-x/reference/objects/groupedge"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/alerts-x/reference/objects/groupdata"
    },
    {
      "name": "ManagedGroupData",
      "description": null,
      "url": "/alerts-x/reference/objects/managedgroupdata"
    },
    {
      "name": "SystemData",
      "description": null,
      "url": "/alerts-x/reference/objects/systemdata"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/alerts-x/reference/objects/clientdata"
    },
    {
      "name": "ProfileData",
      "description": null,
      "url": "/alerts-x/reference/objects/profiledata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Group",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
