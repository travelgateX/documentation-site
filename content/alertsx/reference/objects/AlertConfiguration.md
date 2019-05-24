{
  "title": "AlertConfiguration",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AlertType!",
      "name": "alertType",
      "url": "/alertsx/reference/enums/alerttype",
      "description": "alert type",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "periodicity",
      "url": "/alertsx/reference/scalars/int",
      "description": "Frequency of time in which the alert will be reviewed",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "window",
      "url": "/alertsx/reference/scalars/int",
      "description": "The time frame in minutes",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "timesToAlert",
      "url": "/alertsx/reference/scalars/int",
      "description": "The number of times the alert must be triggered in order to notify",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AlertTypeConfiguration",
      "name": "typeConfiguration",
      "url": "/alertsx/reference/objects/alerttypeconfiguration",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "noRecoveries",
      "url": "/alertsx/reference/scalars/boolean",
      "description": "To allow recoveries notifications",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "stateChangesOnly",
      "url": "/alertsx/reference/scalars/boolean",
      "description": "To allow notifications only if the status change",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "minNumberRequests",
      "url": "/alertsx/reference/scalars/int",
      "description": "Minimum number of requests should be in the window to check alert or Number of requests to be checked (According to configuration)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "percentageToAlert",
      "url": "/alertsx/reference/scalars/int",
      "description": "Minimum percentage to be considered status ALERTING ",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Email]!",
      "name": "email",
      "url": "/alertsx/reference/scalars/email",
      "description": "Email addresses to send notifications",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "EmailType",
          "name": "type",
          "url": "/alertsx/reference/enums/emailtype",
          "description": null
        }
      ]
    },
    {
      "typeString": "[HubStatus!]",
      "name": "hubStatus",
      "url": "/alertsx/reference/enums/hubstatus",
      "description": "Filter of hub status",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Boolean!",
          "name": "isInclusive",
          "url": "/alertsx/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "[Int!]",
      "name": "errorCode",
      "url": "/alertsx/reference/scalars/int",
      "description": "Filter of error code",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Boolean!",
          "name": "isInclusive",
          "url": "/alertsx/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "[ErrorType!]",
      "name": "errorType",
      "url": "/alertsx/reference/enums/errortype",
      "description": "Filter of error type",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Boolean!",
          "name": "isInclusive",
          "url": "/alertsx/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "[AlertObjectsUnion]",
      "name": "alertObjects",
      "url": "#",
      "description": "filter of Access|Client|Supplier|Operation|Group",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Boolean!",
          "name": "isInclusive",
          "url": "/alertsx/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "[AlertGroups!]",
      "name": "groupBy",
      "url": "/alertsx/reference/enums/alertgroups",
      "description": "Group by traffic and calculate its parameters separately ",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AlertData",
      "description": null,
      "url": "/alertsx/reference/objects/alertdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AlertConfiguration",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
