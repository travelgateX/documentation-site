{
  "title": "Stat",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "DateTime!",
      "name": "start",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Start UTC",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "end",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "End UTC",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float",
      "name": "duration",
      "url": "/hotelx/reference/scalars/float",
      "description": "Difference between start and end in miliseconds",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "StatsRequest",
      "description": "Contains internal information.",
      "url": "/hotelx/reference/objects/statsrequest"
    },
    {
      "name": "StatPlugin",
      "description": "",
      "url": "/hotelx/reference/objects/statplugin"
    },
    {
      "name": "StatAccess",
      "description": "",
      "url": "/hotelx/reference/objects/stataccess"
    },
    {
      "name": "StatTransaction",
      "description": "",
      "url": "/hotelx/reference/objects/stattransaction"
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
