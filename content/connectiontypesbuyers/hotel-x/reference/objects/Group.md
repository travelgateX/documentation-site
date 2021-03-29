{
  "title": "Group",
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
      "typeString": "GroupData",
      "name": "groupData",
      "url": "/hotel-x/reference/objects/groupdata",
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
      "name": "ClientData",
      "description": null,
      "url": "/hotel-x/reference/objects/clientdata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/hotel-x/reference/objects/groupdata"
    },
    {
      "name": "ManagedGroupData",
      "description": null,
      "url": "/hotel-x/reference/objects/managedgroupdata"
    },
    {
      "name": "ProfileData",
      "description": null,
      "url": "/hotel-x/reference/objects/profiledata"
    },
    {
      "name": "GroupEdge",
      "description": null,
      "url": "/hotel-x/reference/objects/groupedge"
    },
    {
      "name": "SystemData",
      "description": null,
      "url": "/hotel-x/reference/objects/systemdata"
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
