{
  "title": "SupplierConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[SupplierEdge]",
      "name": "edges",
      "url": "/alerts-x/reference/objects/supplieredge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/alerts-x/reference/objects/pageinfo",
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
      "typeString": "Int!",
      "name": "totalCount",
      "url": "/alerts-x/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "GroupData",
      "description": null,
      "url": "/alerts-x/reference/objects/groupdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/alerts-x/reference/interfaces/groupcommondata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/alerts-x/reference/objects/organizationdata"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/alerts-x/reference/objects/clientdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "SupplierConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
