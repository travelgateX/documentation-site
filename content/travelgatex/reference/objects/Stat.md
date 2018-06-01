{
  "title": "Stat",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "DateTime!",
      "name": "start",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Start UTC",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "end",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "End UTC",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float",
      "name": "duration",
      "url": "/travelgatex/reference/scalars/float",
      "description": "Difference between start and end in miliseconds",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "StatsRequest",
      "description": "Contains internal information.",
      "url": "/travelgatex/reference/objects/statsrequest"
    },
    {
      "name": "StatPlugin",
      "description": "",
      "url": "/travelgatex/reference/objects/statplugin"
    },
    {
      "name": "StatAccess",
      "description": "",
      "url": "/travelgatex/reference/objects/stataccess"
    },
    {
      "name": "StatTransaction",
      "description": "",
      "url": "/travelgatex/reference/objects/stattransaction"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Stat"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
