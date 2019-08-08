{
  "title": "AlertData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Alert name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "description",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Alert description",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AlertConfiguration!",
      "name": "configuration",
      "url": "/travelgatex/reference/objects/alertconfiguration",
      "description": "Alert configuration",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the alert is being checked by the service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AlertConnection!",
      "name": "history",
      "url": "/travelgatex/reference/objects/alertconnection",
      "description": "Records of each update made of the alert",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "RelayInput",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "AlertFilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/alertfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "Member!",
      "name": "editor",
      "url": "/travelgatex/reference/objects/member",
      "description": "Member has edit the actual alert data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EventConnection!",
      "name": "events",
      "url": "/travelgatex/reference/objects/eventconnection",
      "description": "Records of the last 10 events triggered",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "RelayInput",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "AlertFilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/alertfilterinput",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Alert",
      "description": " Alert node",
      "url": "/travelgatex/reference/objects/alert"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AlertData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
