{
  "title": "ClientData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/mappea/reference/scalars/id",
      "description": "ID identifier of a Client",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "name",
      "url": "/mappea/reference/scalars/id",
      "description": "Client complete name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/mappea/reference/scalars/boolean",
      "description": "Indicates whether a Client is active or inactive",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "group",
      "url": "/mappea/reference/objects/group",
      "description": "Indicates the group where the Client belongs",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/mappea/reference/objects/organization",
      "description": "Client owner",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Client",
      "description": "Client identifies who is making the request and holds the configuration assigned to it.",
      "url": "/mappea/reference/objects/client"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ClientData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
