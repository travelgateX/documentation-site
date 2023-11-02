{
  "title": "DomainData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/mappea/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DomainName!",
      "name": "name",
      "url": "/mappea/reference/scalars/domainname",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization!",
      "name": "organization",
      "url": "/mappea/reference/objects/organization",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Domain",
      "description": null,
      "url": "/mappea/reference/objects/domain"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "DomainData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
