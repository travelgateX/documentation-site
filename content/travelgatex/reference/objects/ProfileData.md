{
  "title": "ProfileData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Profile Identifier",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Profile label",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ProfileType",
      "name": "type",
      "url": "/travelgatex/reference/enums/profiletype",
      "description": "Profile type",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EntityConnection",
      "name": "entities",
      "url": "/travelgatex/reference/objects/entityconnection",
      "description": "Profile Entities (suppliers/clients)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "group",
      "url": "/travelgatex/reference/objects/group",
      "description": "Indicates the group where the Client belongs",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/travelgatex/reference/objects/organization",
      "description": "Profile owner",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Active profile",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isPublished",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Profile is published",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Profile",
      "description": "",
      "url": "/travelgatex/reference/objects/profile"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ProfileData",
  "hideGithubLink": true
}
Profile data
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
