{
  "title": "RoleConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[RoleEdge]",
      "name": "edges",
      "url": "/alerts-x/reference/objects/roleedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/alerts-x/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "MemberData",
      "description": null,
      "url": "/alerts-x/reference/objects/memberdata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/alerts-x/reference/objects/groupdata"
    },
    {
      "name": "ResourceData",
      "description": null,
      "url": "/alerts-x/reference/objects/resourcedata"
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
