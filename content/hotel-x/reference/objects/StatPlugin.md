{
  "title": "StatPlugin",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Plugin name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "total",
      "url": "/hotel-x/reference/objects/stat",
      "description": "total plugin time",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "StatsRequest",
      "description": "Contains internal information.",
      "url": "/hotel-x/reference/objects/statsrequest"
    },
    {
      "name": "StatAccess",
      "description": "",
      "url": "/hotel-x/reference/objects/stataccess"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "StatPlugin",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
