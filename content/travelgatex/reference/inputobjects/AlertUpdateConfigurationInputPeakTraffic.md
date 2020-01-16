{
  "title": "AlertUpdateConfigurationInputPeakTraffic",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int",
      "name": "historicalWindow",
      "url": "/travelgatex/reference/scalars/int",
      "description": "The time frame in minutes to be used to compare with the window time frame",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "offset",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Time frame in minutes to set the beginning of historicalWindow",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "periodicity",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Frequency of time in which the alert will be reviewed",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "window",
      "url": "/travelgatex/reference/scalars/int",
      "description": "The time frame in minutes to be used to check the alert status",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "timesToAlert",
      "url": "/travelgatex/reference/scalars/int",
      "description": "The number of times the alert must be triggered in order to notify",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "timesToRecovery",
      "url": "/travelgatex/reference/scalars/int",
      "description": "The number of times the alert must be recovered in order to notify",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "noRecoveries",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "To allow recoveries notifications",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "stateChangesOnly",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "To allow notifications only if the status change",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "minNumberRequests",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Minimum number of requests should be in the window to check alert",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "percentageToAlert",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Minimum percentage of difference between the window and the historical window to be considered status ALERTING ",
      "args": null
    },
    {
      "typeString": "[EmailInput]",
      "name": "email",
      "url": "/travelgatex/reference/inputobjects/emailinput",
      "description": "Email addresses to send notifications",
      "args": null
    },
    {
      "typeString": "[HubStatusInput!]",
      "name": "hubStatus",
      "url": "/travelgatex/reference/inputobjects/hubstatusinput",
      "description": "Possibility to filter traffic by hubStatus",
      "args": null
    },
    {
      "typeString": "[ErrorCodeInput!]",
      "name": "errorCode",
      "url": "/travelgatex/reference/inputobjects/errorcodeinput",
      "description": "Possibility to filter traffic by errorCodes",
      "args": null
    },
    {
      "typeString": "[ErrorTypeInput!]",
      "name": "errorType",
      "url": "/travelgatex/reference/inputobjects/errortypeinput",
      "description": "Possibility to filter traffic by errorTypes",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "supplier",
      "url": "/travelgatex/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by suppliers",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "client",
      "url": "/travelgatex/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by clients",
      "args": null
    },
    {
      "typeString": "[AlertGroupInput!]",
      "name": "group",
      "url": "/travelgatex/reference/inputobjects/alertgroupinput",
      "description": "Must filter traffic by group. Only PRODUCT group type is allowed",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "access",
      "url": "/travelgatex/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by accesses",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "operation",
      "url": "/travelgatex/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by operations",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "api",
      "url": "/travelgatex/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by apis",
      "args": null
    },
    {
      "typeString": "[AlertGroups!]",
      "name": "groupBy",
      "url": "/travelgatex/reference/enums/alertgroups",
      "description": "Possibility to group by traffic and calculate its parameters separately ",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AlertUpdateInput",
      "description": null,
      "url": "/travelgatex/reference/inputobjects/alertupdateinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AlertUpdateConfigurationInputPeakTraffic",
  "hideGithubLink": true
}
Configuration update for PEAK_TRAFFIC alert type. Peak traffic is used to verify traffic comparing volum of requests between to time frame (window and historical window) . 
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
