{
  "title": "Stat",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "DateTime!",
      "name": "start",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": "Start UTC",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "end",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": "End UTC",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float",
      "name": "duration",
      "url": "/hotel-x/reference/scalars/float",
      "description": "Difference between start and end in miliseconds",
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
      "name": "StatPlugin",
      "description": "",
      "url": "/hotel-x/reference/objects/statplugin"
    },
    {
      "name": "StatAccess",
      "description": "",
      "url": "/hotel-x/reference/objects/stataccess"
    },
    {
      "name": "StatTransaction",
      "description": "",
      "url": "/hotel-x/reference/objects/stattransaction"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Stat",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
