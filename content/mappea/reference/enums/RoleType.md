{
  "title": "RoleType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "RoleData",
      "description": "",
      "url": "/mappea/reference/objects/roledata"
    }
  ],
  "enumValues": [
    {
      "name": "VIEWER",
      "description": "Allows a User to make Queries of resources, but not change any resource data",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "EDITOR",
      "description": "Allows a User to make Mutations (changes) to the resource data",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "ADMIN",
      "description": "Allows a User to make All (changes) to the resource",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "EXECUTOR",
      "description": "Allows a User to make use of reources only for extecutations queries.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "SPECIFIC",
      "description": "Allows a User to make othen kind of operation with the resource. Defined by API.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "RoleType",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
