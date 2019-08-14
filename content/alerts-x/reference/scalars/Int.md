{
  "title": "Int",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "RelayInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/relayinput"
    },
    {
      "name": "AlertConnection",
      "description": "Alert list",
      "url": "/alerts-x/reference/objects/alertconnection"
    },
    {
      "name": "AlertConfiguration",
      "description": null,
      "url": "/alerts-x/reference/objects/alertconfiguration"
    },
    {
      "name": "EventConnection",
      "description": "Events list",
      "url": "/alerts-x/reference/objects/eventconnection"
    },
    {
      "name": "AlertTypeConfiguration",
      "description": "Depending on the talert type, typeConfiguration will use some fields ",
      "url": "/alerts-x/reference/objects/alerttypeconfiguration"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/alerts-x/reference/objects/groupdata"
    },
    {
      "name": "AccessData",
      "description": null,
      "url": "/alerts-x/reference/objects/accessdata"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/alerts-x/reference/objects/supplierdata"
    },
    {
      "name": "SupplierFilter",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/supplierfilter"
    },
    {
      "name": "AlertConfigurationInputNoTraffic",
      "description": "Configuration for NO_TRAFFIC alert type. \nNo traffic alert is used to verify if there is traffic according to the parameters of the alert.",
      "url": "/alerts-x/reference/inputobjects/alertconfigurationinputnotraffic"
    },
    {
      "name": "AlertConfigurationInputErrorRate",
      "description": "Configuration for ERROR_RATE alert type. \nError rate alert is used to verify traffic comparing its error codes. \nTher are two options. \n- OPTION 1: Can verify traffic of a time frame. Must set window field higher than 0.\n- OPTION 2: Can verify traffic of a specific number of requests. Must set window field as 0 and minNumRequest higher than 0.",
      "url": "/alerts-x/reference/inputobjects/alertconfigurationinputerrorrate"
    },
    {
      "name": "AlertConfigurationInputAverageTime",
      "description": "Configuration for AVERAGE_TIME. \nAverage time is used to verify requests times.\nThere are 3 options:\n- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.\n- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.\n- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.",
      "url": "/alerts-x/reference/inputobjects/alertconfigurationinputaveragetime"
    },
    {
      "name": "AlertConfigurationInputPeakTraffic",
      "description": "Configuration for PEAK_TRAFFIC alert type. \nPeak traffic is used to verify traffic comparing volum of requests between to time frame (window and historical window) . ",
      "url": "/alerts-x/reference/inputobjects/alertconfigurationinputpeaktraffic"
    },
    {
      "name": "ErrorCodeInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/errorcodeinput"
    },
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
  "operator": "scalar",
  "typename": "Int",
  "hideGithubLink": true
}
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
