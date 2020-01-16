{
  "title": "AccessConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[AccessEdge]",
      "name": "edges",
      "url": "/hotel-x/reference/objects/accessedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/hotel-x/reference/objects/pageinfo",
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
      "typeString": "Int!",
      "name": "totalCount",
      "url": "/hotel-x/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "SupplierData",
      "description": null,
      "url": "/hotel-x/reference/objects/supplierdata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/hotel-x/reference/objects/groupdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/hotel-x/reference/interfaces/groupcommondata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/hotel-x/reference/objects/organizationdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AccessConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
