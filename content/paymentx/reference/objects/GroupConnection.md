{
  "title": "GroupConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[GroupEdge]",
      "name": "edges",
      "url": "/paymentx/reference/objects/groupedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/paymentx/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/paymentx/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/paymentx/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "Int!",
      "name": "totalCount",
      "url": "/paymentx/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "GroupData",
      "description": null,
      "url": "/paymentx/reference/objects/groupdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/paymentx/reference/interfaces/groupcommondata"
    },
    {
      "name": "MemberData",
      "description": null,
      "url": "/paymentx/reference/objects/memberdata"
    },
    {
      "name": "APIData",
      "description": null,
      "url": "/paymentx/reference/objects/apidata"
    },
    {
      "name": "AccessData",
      "description": null,
      "url": "/paymentx/reference/objects/accessdata"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/paymentx/reference/objects/supplierdata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/paymentx/reference/objects/organizationdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "GroupConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
