{
  "title": "AccessData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Supplier!",
      "name": "suppliers",
      "url": "/travelgatex/reference/objects/supplier",
      "description": "code: ID!\nURL: Url!\nuser: String!",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the access is active.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Unique AccessConfiguration identifier",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Access code.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "supplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "supplier for this access.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "user",
      "url": "/travelgatex/reference/scalars/string",
      "description": "User code to connect to supplier.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Password for the connection.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Urls!",
      "name": "urls",
      "url": "/travelgatex/reference/objects/urls",
      "description": "Specific Urls",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Parameter!]",
      "name": "parameters",
      "url": "/travelgatex/reference/objects/parameter",
      "description": "List of parameters for additional information.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Markets allowed for the access.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Access",
      "description": "",
      "url": "/travelgatex/reference/objects/access"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AccessData"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
