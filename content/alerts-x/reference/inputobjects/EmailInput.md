{
  "title": "EmailInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "address",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "args": null
    },
    {
      "typeString": "EmailType!",
      "name": "type",
      "url": "/alerts-x/reference/enums/emailtype",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AlertUpdateConfigurationInputNoTraffic",
      "description": "Confiuration update for NO_TRAFFIC alert type. \nNo traffic alert is used to verify if there is traffic according to the parameters of the alert.",
      "url": "/alerts-x/reference/inputobjects/alertupdateconfigurationinputnotraffic"
    },
    {
      "name": "AlertUpdateConfigurationInputErrorRate",
      "description": "Configuration update for error rate alert type. \nError rate alert is used to verify traffic comparing its error codes. \nTher are to options. \n- OPTION 1: Can verify traffic of a time frame. Set window field higher than 0.\n- OPTION 2: Can verify traffic of a specific number of requests. Set window fild as 0 and minNumRequest higher than 0.",
      "url": "/alerts-x/reference/inputobjects/alertupdateconfigurationinputerrorrate"
    },
    {
      "name": "AlertUpdateConfigurationInputAverageTime",
      "description": "Configuration for AVERAGE_TIME. \nAverage time is used to verify requests times.\nThere are 3 options:\n- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.\n- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.\n- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.",
      "url": "/alerts-x/reference/inputobjects/alertupdateconfigurationinputaveragetime"
    },
    {
      "name": "AlertUpdateConfigurationInputPeakTraffic",
      "description": "Configuration update for PEAK_TRAFFIC alert type. Peak traffic is used to verify traffic comparing volum of requests between to time frame (window and historical window) . ",
      "url": "/alerts-x/reference/inputobjects/alertupdateconfigurationinputpeaktraffic"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "EmailInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
