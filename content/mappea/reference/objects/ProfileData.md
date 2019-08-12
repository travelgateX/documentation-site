{
  "title": "ProfileData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/mappea/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/mappea/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[ProfileType!]!",
      "name": "type",
      "url": "/mappea/reference/enums/profiletype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EntityConnection",
      "name": "entities",
      "url": "/mappea/reference/objects/entityconnection",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "group",
      "url": "/mappea/reference/objects/group",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/mappea/reference/objects/organization",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isActive",
      "url": "/mappea/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isPublished",
      "url": "/mappea/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Profile",
      "description": null,
      "url": "/mappea/reference/objects/profile"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ProfileData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
