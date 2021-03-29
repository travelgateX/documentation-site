{
  "title": "APIConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[APIEdge]",
      "name": "edges",
      "url": "/hotel-x/reference/objects/apiedge",
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
    }
  ],
  "requireby": [
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
      "name": "ResourceData",
      "description": null,
      "url": "/hotel-x/reference/objects/resourcedata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/hotel-x/reference/objects/organizationdata"
    },
    {
      "name": "ProductData",
      "description": null,
      "url": "/hotel-x/reference/objects/productdata"
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
