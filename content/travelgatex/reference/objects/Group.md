{
  "title": "Group",
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
      "typeString": "GroupData",
      "name": "groupData",
      "url": "/travelgatex/reference/objects/groupdata",
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
      "name": "SystemData",
      "description": null,
      "url": "/travelgatex/reference/objects/systemdata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/travelgatex/reference/objects/groupdata"
    },
    {
      "name": "ManagedGroupData",
      "description": null,
      "url": "/travelgatex/reference/objects/managedgroupdata"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/travelgatex/reference/objects/clientdata"
    },
    {
      "name": "ProfileData",
      "description": null,
      "url": "/travelgatex/reference/objects/profiledata"
    },
    {
      "name": "GroupEdge",
      "description": null,
      "url": "/travelgatex/reference/objects/groupedge"
    },
    {
      "name": "PaymentXStoredCardData",
      "description": null,
      "url": "/travelgatex/reference/objects/paymentxstoredcarddata"
    },
    {
      "name": "AdminMutation",
      "description": null,
      "url": "/travelgatex/reference/objects/adminmutation"
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
