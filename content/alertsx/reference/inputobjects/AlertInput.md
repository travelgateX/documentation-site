{
  "title": "AlertInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "name",
      "url": "/alertsx/reference/scalars/string",
      "description": "Alert name",
      "args": null
    },
    {
      "typeString": "String",
      "name": "description",
      "url": "/alertsx/reference/scalars/string",
      "description": "Alert description",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputNoTraffic",
      "name": "configurationNoTraffic",
      "url": "/alertsx/reference/inputobjects/alertconfigurationinputnotraffic",
      "description": "No traffic configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputErrorRate",
      "name": "configurationErrorRate",
      "url": "/alertsx/reference/inputobjects/alertconfigurationinputerrorrate",
      "description": "Error rate configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputAverageTime",
      "name": "configurationAverageTime",
      "url": "/alertsx/reference/inputobjects/alertconfigurationinputaveragetime",
      "description": "Average time configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputPeakTraffic",
      "name": "configurationPeakTraffic",
      "url": "/alertsx/reference/inputobjects/alertconfigurationinputpeaktraffic",
      "description": "Peak traffic configuration ",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/alertsx/reference/scalars/boolean",
      "description": "To set alert active or not",
      "args": null
    },
    {
      "typeString": "Email!",
      "name": "editor",
      "url": "/alertsx/reference/scalars/email",
      "description": "Member editor",
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
