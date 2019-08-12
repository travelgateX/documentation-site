{
  "title": "ProfileData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/alertsx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[ProfileType!]!",
      "name": "type",
      "url": "/alertsx/reference/enums/profiletype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EntityConnection",
      "name": "entities",
      "url": "/alertsx/reference/objects/entityconnection",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "group",
      "url": "/alertsx/reference/objects/group",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/alertsx/reference/objects/organization",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isActive",
      "url": "/alertsx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isPublished",
      "url": "/alertsx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Profile",
      "description": null,
      "url": "/alertsx/reference/objects/profile"
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
