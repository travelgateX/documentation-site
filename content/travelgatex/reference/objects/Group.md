{
  "title": "Group",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupData",
      "name": "groupData",
      "url": "/travelgatex/reference/objects/groupdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": "List of advise messages.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "ClientData",
      "description": "",
      "url": "/travelgatex/reference/objects/clientdata"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/groupdata"
    },
    {
      "name": "ManagedGroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/managedgroupdata"
    },
    {
      "name": "ProfileData",
      "description": "Profile data",
      "url": "/travelgatex/reference/objects/profiledata"
    },
    {
      "name": "GroupEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/groupedge"
    },
    {
      "name": "PaymentXStoredCardData",
      "description": "",
      "url": "/travelgatex/reference/objects/paymentxstoredcarddata"
    },
    {
      "name": "AdminMutation",
      "description": "The admin query root of TravelgateX's for implementing GraphQL mutations.",
      "url": "/travelgatex/reference/objects/adminmutation"
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
