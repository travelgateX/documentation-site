{
  "title": "AlertUpdateConfigurationInputNoTraffic",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int",
      "name": "periodicity",
      "url": "/alertsx/reference/scalars/int",
      "description": "Frequency of time in which the alert will be reviewed",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "window",
      "url": "/alertsx/reference/scalars/int",
      "description": "The time frame in minutes to be used to check the alert status",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "timesToAlert",
      "url": "/alertsx/reference/scalars/int",
      "description": "The number of times the alert must be triggered in order to notify",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "noRecoveries",
      "url": "/alertsx/reference/scalars/boolean",
      "description": "To allow recoveries notifications",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "stateChangesOnly",
      "url": "/alertsx/reference/scalars/boolean",
      "description": "To allow notifications only if the status change",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "minNumberRequests",
      "url": "/alertsx/reference/scalars/int",
      "description": "Minimum number of requests should be in the window to consider that there is no traffic",
      "args": null
    },
    {
      "typeString": "[EmailInput]",
      "name": "email",
      "url": "/alertsx/reference/inputobjects/emailinput",
      "description": "Email addresses to send notifications",
      "args": null
    },
    {
      "typeString": "[HubStatusInput!]",
      "name": "hubStatus",
      "url": "/alertsx/reference/inputobjects/hubstatusinput",
      "description": "Possibility to filter traffic by hubStatus",
      "args": null
    },
    {
      "typeString": "[ErrorCodeInput!]",
      "name": "errorCode",
      "url": "/alertsx/reference/inputobjects/errorcodeinput",
      "description": "Possibility to filter traffic by errorCodes",
      "args": null
    },
    {
      "typeString": "[ErrorTypeInput!]",
      "name": "errorType",
      "url": "/alertsx/reference/inputobjects/errortypeinput",
      "description": "Possibility to filter traffic by errorTypes",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "supplier",
      "url": "/alertsx/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by suppliers (hub provider)",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "client",
      "url": "/alertsx/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by clients (hub user)",
      "args": null
    },
    {
      "typeString": "[AlertGroupInput!]",
      "name": "group",
      "url": "/alertsx/reference/inputobjects/alertgroupinput",
      "description": "Must filter traffic by group. Only PRODUCT group type is allowed",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "access",
      "url": "/alertsx/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by accesses",
      "args": null
    },
    {
      "typeString": "[AlertObjectInput!]",
      "name": "operation",
      "url": "/alertsx/reference/inputobjects/alertobjectinput",
      "description": "Possibility to filter traffic by operations",
      "args": null
    },
    {
      "typeString": "[AlertGroups!]",
      "name": "groupBy",
      "url": "/alertsx/reference/enums/alertgroups",
      "description": "Possibility to group by traffic and calculate its parameters separately ",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AlertUpdateInput",
      "description": null,
      "url": "/alertsx/reference/inputobjects/alertupdateinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AlertUpdateConfigurationInputNoTraffic",
  "hideGithubLink": true
}
Confiuration update for NO_TRAFFIC alert type. 
No traffic alert is used to verify if there is traffic according to the parameters of the alert.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
