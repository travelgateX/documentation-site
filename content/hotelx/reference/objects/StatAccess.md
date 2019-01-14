{
  "title": "StatAccess",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/hotelx/reference/scalars/string",
      "description": "Access name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "total",
      "url": "/hotelx/reference/objects/stat",
      "description": "Total access time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat",
      "name": "staticConfiguration",
      "url": "/hotelx/reference/objects/stat",
      "description": "Static configuration time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "hotels",
      "url": "/hotelx/reference/scalars/int",
      "description": "Number of hotels",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "zones",
      "url": "/hotelx/reference/scalars/int",
      "description": "Number of zones",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "cities",
      "url": "/hotelx/reference/scalars/int",
      "description": "Number of cities",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatPlugin",
      "name": "requestAccess",
      "url": "/hotelx/reference/objects/statplugin",
      "description": "Access request time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatPlugin",
      "name": "responseAccess",
      "url": "/hotelx/reference/objects/statplugin",
      "description": "Access response time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatTransaction!]!",
      "name": "transactions",
      "url": "/hotelx/reference/objects/stattransaction",
      "description": "Detail transaction time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatPlugin!]",
      "name": "plugins",
      "url": "/hotelx/reference/objects/statplugin",
      "description": "Plugin execution time",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "StatAccess",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
