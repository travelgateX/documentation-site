{
  "title": "AlertInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "name",
      "url": "/alerts-x/reference/scalars/string",
      "description": "Alert name",
      "args": null
    },
    {
      "typeString": "String",
      "name": "description",
      "url": "/alerts-x/reference/scalars/string",
      "description": "Alert description",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputNoTraffic",
      "name": "configurationNoTraffic",
      "url": "/alerts-x/reference/inputobjects/alertconfigurationinputnotraffic",
      "description": "No traffic configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputErrorRate",
      "name": "configurationErrorRate",
      "url": "/alerts-x/reference/inputobjects/alertconfigurationinputerrorrate",
      "description": "Error rate configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputAverageTime",
      "name": "configurationAverageTime",
      "url": "/alerts-x/reference/inputobjects/alertconfigurationinputaveragetime",
      "description": "Average time configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputPeakTraffic",
      "name": "configurationPeakTraffic",
      "url": "/alerts-x/reference/inputobjects/alertconfigurationinputpeaktraffic",
      "description": "Peak traffic configuration ",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/alerts-x/reference/scalars/boolean",
      "description": "To set alert active or not",
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "group",
      "url": "/alerts-x/reference/scalars/id",
      "description": "Alert location group",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "AlertInput",
  "hideGithubLink": true
}
Alert information. Only one configuration has to be set at once.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
