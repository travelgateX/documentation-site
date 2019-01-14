{
  "title": "AccessConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[AccessEdge]",
      "name": "edges",
      "url": "/mappea/reference/objects/accessedge",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/mappea/reference/objects/pageinfo",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "SupplierData",
      "description": "",
      "url": "/mappea/reference/objects/supplierdata"
    },
    {
      "name": "OrganizationData",
      "description": "",
      "url": "/mappea/reference/objects/organizationdata"
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/mappea/reference/interfaces/groupcommondata"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/mappea/reference/objects/groupdata"
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
