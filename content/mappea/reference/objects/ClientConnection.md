{
  "title": "ClientConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ClientEdge]",
      "name": "edges",
      "url": "/mappea/reference/objects/clientedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/mappea/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/mappea/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/mappea/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "Int!",
      "name": "totalCount",
      "url": "/mappea/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "SupplierData",
      "description": null,
      "url": "/mappea/reference/objects/supplierdata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/mappea/reference/objects/groupdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/mappea/reference/interfaces/groupcommondata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/mappea/reference/objects/organizationdata"
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
