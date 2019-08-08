{
  "title": "SupplierConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[SupplierEdge]",
      "name": "edges",
      "url": "/mappea/reference/objects/supplieredge",
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
    }
  ],
  "requireby": [
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/mappea/reference/objects/organizationdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/mappea/reference/interfaces/groupcommondata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/mappea/reference/objects/groupdata"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/mappea/reference/objects/clientdata"
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
