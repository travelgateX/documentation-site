{
  "title": "ProfileData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/paymentx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[ProfileType!]!",
      "name": "type",
      "url": "/paymentx/reference/enums/profiletype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EntityConnection",
      "name": "entities",
      "url": "/paymentx/reference/objects/entityconnection",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "group",
      "url": "/paymentx/reference/objects/group",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/paymentx/reference/objects/organization",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isActive",
      "url": "/paymentx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isPublished",
      "url": "/paymentx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Profile",
      "description": null,
      "url": "/paymentx/reference/objects/profile"
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
