{
  "title": "ProfileConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ProfileEdge]",
      "name": "edges",
      "url": "/alertsx/reference/objects/profileedge",
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
      "name": "OrganizationData",
      "description": null,
      "url": "/alertsx/reference/objects/organizationdata"
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
