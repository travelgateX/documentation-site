{
  "title": "RoleConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[RoleEdge]",
      "name": "edges",
      "url": "/mappea/reference/objects/roleedge",
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
      "name": "GroupData",
      "description": null,
      "url": "/mappea/reference/objects/groupdata"
    },
    {
      "name": "MemberData",
      "description": null,
      "url": "/mappea/reference/objects/memberdata"
    },
    {
      "name": "ResourceData",
      "description": null,
      "url": "/mappea/reference/objects/resourcedata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RoleConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
