{
  "title": "GroupConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[GroupEdge]",
      "name": "edges",
      "url": "/stats/reference/objects/groupedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/stats/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AccessData",
      "description": null,
      "url": "/stats/reference/objects/accessdata"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/stats/reference/objects/supplierdata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/stats/reference/objects/organizationdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/stats/reference/interfaces/groupcommondata"
    },
    {
      "name": "MemberData",
      "description": null,
      "url": "/stats/reference/objects/memberdata"
    },
    {
      "name": "APIData",
      "description": null,
      "url": "/stats/reference/objects/apidata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/stats/reference/objects/groupdata"
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
