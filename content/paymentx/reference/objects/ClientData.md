{
  "title": "ClientData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "ID identifier of a Client",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "name",
      "url": "/paymentx/reference/scalars/id",
      "description": "Client complete name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Indicates whether a Client is active or inactive",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "group",
      "url": "/paymentx/reference/objects/group",
      "description": "Indicates the group where the Client belongs",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/paymentx/reference/objects/organization",
      "description": "Client owner",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Client",
      "description": "Client identifies who is making the request and holds the configuration assigned to it.",
      "url": "/paymentx/reference/objects/client"
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
