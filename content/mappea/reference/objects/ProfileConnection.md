{
  "title": "ProfileConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ProfileEdge]",
      "name": "edges",
      "url": "/mappea/reference/objects/profileedge",
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
      "name": "GroupData",
      "description": null,
      "url": "/mappea/reference/objects/groupdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ProfileConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
