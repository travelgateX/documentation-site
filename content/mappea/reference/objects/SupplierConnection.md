{
  "title": "SupplierConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[SupplierEdge]",
      "name": "edges",
      "url": "/mappea/reference/objects/supplieredge",
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
  "typename": "SupplierConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
