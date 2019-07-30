{
  "title": "Group",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupData",
      "name": "groupData",
      "url": "/paymentx/reference/objects/groupdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/paymentx/reference/objects/advisemessage",
      "description": "List of advise messages.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/paymentx/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentXStoredCardData",
      "description": "",
      "url": "/paymentx/reference/objects/paymentxstoredcarddata"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/paymentx/reference/objects/groupdata"
    },
    {
      "name": "GroupEdge",
      "description": "",
      "url": "/paymentx/reference/objects/groupedge"
    },
    {
      "name": "ManagedGroupData",
      "description": "",
      "url": "/paymentx/reference/objects/managedgroupdata"
    },
    {
      "name": "ClientData",
      "description": "",
      "url": "/paymentx/reference/objects/clientdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Group",
  "hideGithubLink": true
}
Groups are organized hierarchically.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
