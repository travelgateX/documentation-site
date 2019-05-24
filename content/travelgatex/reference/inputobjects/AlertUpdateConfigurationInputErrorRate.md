{
  "title": "AlertUpdateConfigurationInputErrorRate",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[Int!]",
      "name": "toCheck",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Error codes to be Checked. By default  all error codes excepts 0",
      "args": null
    },
    {
      "typeString": "[Int!]",
      "name": "toCompare",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Error codes to be Compared with Checked codes. By default all error codes",
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
      "description": "The time frame in minutes",
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
      "description": "OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert. \nOPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "percentageToAlert",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Minimum percentage of traffic with error codes(toCheck) compared to error codes(toCompare) in the window time frame to be considered status ALERTING",
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
      "description": "Possibility to filter traffic by suppliers (hub provider)",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "client",
      "url": "/travelgatex/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by clients (hub user)",
      "args": null
    },
    {
      "typeString": "[AlertGroupInput!]",
      "name": "group",
      "url": "/travelgatex/reference/inputobjects/alertgroupinput",
      "description": "Possibility to filter traffic by groups. It is mandatory to set an ORG group type. Only ORG, FOLDER and PRODUCT group types are allowed",
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
  "typename": "AlertUpdateConfigurationInputErrorRate",
  "hideGithubLink": true
}
Configuration update for error rate alert type. 
Error rate alert is used to verify traffic comparing its error codes. 
Ther are to options. 
- OPTION 1: Can verify traffic of a time frame. Set window field higher than 0.
- OPTION 2: Can verify traffic of a specific number of requests. Set window fild as 0 and minNumRequest higher than 0.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
