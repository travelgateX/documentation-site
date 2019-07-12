{
  "title": "EventData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "groupBy",
      "url": "/alertsx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EventType!",
      "name": "status",
      "url": "/alertsx/reference/enums/eventtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "details",
      "url": "/alertsx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EventConnection!",
      "name": "history",
      "url": "/alertsx/reference/objects/eventconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "RelayInput",
          "name": "relay",
          "url": "/alertsx/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "AlertFilterInput",
          "name": "filter",
          "url": "/alertsx/reference/inputobjects/alertfilterinput",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Event",
      "description": "Event triggered",
      "url": "/alertsx/reference/objects/event"
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
