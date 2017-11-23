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
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "end",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "End UTC",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Float",
      "name": "duration",
      "url": "/travelgatex/reference/scalars/float",
      "description": "Difference between start and end in miliseconds",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "RequestStats",
      "description": "Contains internal information.",
      "url": "/travelgatex/reference/objects/requeststats"
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
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
