{
  "title": "EventData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "groupBy",
      "url": "/alerts-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EventType!",
      "name": "status",
      "url": "/alerts-x/reference/enums/eventtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "details",
      "url": "/alerts-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EventConnection!",
      "name": "history",
      "url": "/alerts-x/reference/objects/eventconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "RelayInput",
          "name": "relay",
          "url": "/alerts-x/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "AlertFilterInput",
          "name": "filter",
          "url": "/alerts-x/reference/inputobjects/alertfilterinput",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Event",
      "description": "Event triggered",
      "url": "/alerts-x/reference/objects/event"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "EventData",
  "hideGithubLink": true
}
Event data
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
