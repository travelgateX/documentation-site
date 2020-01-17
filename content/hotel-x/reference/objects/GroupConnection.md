{
  "title": "GroupConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[GroupEdge]",
      "name": "edges",
      "url": "/hotel-x/reference/objects/groupedge",
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
      "name": "AccessData",
      "description": null,
      "url": "/hotel-x/reference/objects/accessdata"
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
      "name": "MemberData",
      "description": null,
      "url": "/hotel-x/reference/objects/memberdata"
    },
    {
      "name": "APIData",
      "description": null,
      "url": "/hotel-x/reference/objects/apidata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/hotel-x/reference/objects/organizationdata"
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
