{
  "title": "AlertInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Alert name",
      "args": null
    },
    {
      "typeString": "String",
      "name": "description",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Alert description",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputNoTraffic",
      "name": "configurationNoTraffic",
      "url": "/travelgatex/reference/inputobjects/alertconfigurationinputnotraffic",
      "description": "No traffic configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputErrorRate",
      "name": "configurationErrorRate",
      "url": "/travelgatex/reference/inputobjects/alertconfigurationinputerrorrate",
      "description": "Error rate configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputAverageTime",
      "name": "configurationAverageTime",
      "url": "/travelgatex/reference/inputobjects/alertconfigurationinputaveragetime",
      "description": "Average time configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputPeakTraffic",
      "name": "configurationPeakTraffic",
      "url": "/travelgatex/reference/inputobjects/alertconfigurationinputpeaktraffic",
      "description": "Peak traffic configuration ",
      "args": null
    },
    {
      "typeString": "AlertConfigurationInputPrice",
      "name": "configurationPrice",
      "url": "/travelgatex/reference/inputobjects/alertconfigurationinputprice",
      "description": "Price Configuration",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "To set alert active or not",
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "group",
      "url": "/travelgatex/reference/scalars/id",
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
