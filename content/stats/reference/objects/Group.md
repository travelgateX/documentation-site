{
  "title": "Group",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupData",
      "name": "groupData",
      "url": "/stats/reference/objects/groupdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/stats/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/stats/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/stats/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/stats/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "SystemData",
      "description": null,
      "url": "/stats/reference/objects/systemdata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/stats/reference/objects/groupdata"
    },
    {
      "name": "ManagedGroupData",
      "description": null,
      "url": "/stats/reference/objects/managedgroupdata"
    },
    {
      "name": "ProfileData",
      "description": null,
      "url": "/stats/reference/objects/profiledata"
    },
    {
      "name": "GroupEdge",
      "description": null,
      "url": "/stats/reference/objects/groupedge"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/stats/reference/objects/clientdata"
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
