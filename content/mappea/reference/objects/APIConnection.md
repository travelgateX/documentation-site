{
  "title": "APIConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[APIEdge]",
      "name": "edges",
      "url": "/mappea/reference/objects/apiedge",
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
      "name": "ResourceData",
      "description": "",
      "url": "/mappea/reference/objects/resourcedata"
    },
    {
      "name": "ProductData",
      "description": "",
      "url": "/mappea/reference/objects/productdata"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/mappea/reference/objects/groupdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "APIConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
