{
  "title": "ClientConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ClientEdge]",
      "name": "edges",
      "url": "/travelgatex/reference/objects/clientedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/travelgatex/reference/objects/pageinfo",
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
      "typeString": "Int!",
      "name": "totalCount",
      "url": "/travelgatex/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AdminQuery",
      "description": null,
      "url": "/travelgatex/reference/objects/adminquery"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/travelgatex/reference/objects/supplierdata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/travelgatex/reference/objects/groupdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/travelgatex/reference/interfaces/groupcommondata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/travelgatex/reference/objects/organizationdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ClientConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
