{
  "title": "CreateProfileInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "label",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Label of the Profile",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "group",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Group where Profile has to be placed",
      "args": null
    },
    {
      "typeString": "ProfileType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/profiletype",
      "description": "Profile type",
      "args": null
    },
    {
      "typeString": "EntitiesInput",
      "name": "entities",
      "url": "/travelgatex/reference/inputobjects/entitiesinput",
      "description": "Entities of the Profile",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "owner",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Profile owner",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Active profile",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isPublished",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Profile is published",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "CreateProfileInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
