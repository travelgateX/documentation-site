{
  "title": "AlertConfiguration",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AlertType!",
      "name": "alertType",
      "url": "/travelgatex/reference/enums/alerttype",
      "description": "alert type",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "periodicity",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Frequency of time in which the alert will be reviewed",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "window",
      "url": "/travelgatex/reference/scalars/int",
      "description": "The time frame in minutes",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "timesToAlert",
      "url": "/travelgatex/reference/scalars/int",
      "description": "The number of times the alert must be triggered in order to notify",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "timesToRecovery",
      "url": "/travelgatex/reference/scalars/int",
      "description": "The number of times the alert must be recovered in order to notify",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AlertTypeConfiguration",
      "name": "typeConfiguration",
      "url": "/travelgatex/reference/objects/alerttypeconfiguration",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "noRecoveries",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "To allow recoveries notifications",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "stateChangesOnly",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "To allow notifications only if the status change",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "minNumberRequests",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Minimum number of requests should be in the window to check alert or Number of requests to be checked (According to configuration)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "percentageToAlert",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Minimum percentage to be considered status ALERTING ",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Email]!",
      "name": "email",
      "url": "/travelgatex/reference/scalars/email",
      "description": "Email addresses to send notifications",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "EmailType",
          "name": "type",
          "url": "/travelgatex/reference/enums/emailtype",
          "description": null
        }
      ]
    },
    {
      "typeString": "[HubStatus!]",
      "name": "hubStatus",
      "url": "/travelgatex/reference/enums/hubstatus",
      "description": "Filter of hub status",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Boolean!",
          "name": "isInclusive",
          "url": "/travelgatex/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "[Int!]",
      "name": "errorCode",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Filter of error code",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Boolean!",
          "name": "isInclusive",
          "url": "/travelgatex/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "[ErrorType!]",
      "name": "errorType",
      "url": "/travelgatex/reference/enums/errortype",
      "description": "Filter of error type",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Boolean!",
          "name": "isInclusive",
          "url": "/travelgatex/reference/scalars/boolean",
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
          "url": "/travelgatex/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "[AlertGroups!]",
      "name": "groupBy",
      "url": "/travelgatex/reference/enums/alertgroups",
      "description": "Group by traffic and calculate its parameters separately",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ComercialType",
      "name": "comercialType",
      "url": "/travelgatex/reference/enums/comercialtype",
      "description": "Indicates if the group configuration is SELLER OR BUYER",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AlertData",
      "description": null,
      "url": "/travelgatex/reference/objects/alertdata"
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
