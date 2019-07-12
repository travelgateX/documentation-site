{
  "title": "APIConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[APIEdge]",
      "name": "edges",
      "url": "/alertsx/reference/objects/apiedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/alertsx/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "GroupData",
      "description": null,
      "url": "/alertsx/reference/objects/groupdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/alertsx/reference/interfaces/groupcommondata"
    },
    {
      "name": "ResourceData",
      "description": null,
      "url": "/alertsx/reference/objects/resourcedata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/alertsx/reference/objects/organizationdata"
    },
    {
      "name": "ProductData",
      "description": null,
      "url": "/alertsx/reference/objects/productdata"
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
