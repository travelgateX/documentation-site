{
  "title": "Boolean",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "AlertCriteriaInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/alertcriteriainput"
    },
    {
      "name": "PageInfo",
      "description": null,
      "url": "/alerts-x/reference/objects/pageinfo"
    },
    {
      "name": "AlertData",
      "description": null,
      "url": "/alerts-x/reference/objects/alertdata"
    },
    {
      "name": "AlertConfiguration",
      "description": null,
      "url": "/alerts-x/reference/objects/alertconfiguration"
    },
    {
      "name": "MemberData",
      "description": null,
      "url": "/alerts-x/reference/objects/memberdata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/alerts-x/reference/objects/groupdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/alerts-x/reference/interfaces/groupcommondata"
    },
    {
      "name": "APIData",
      "description": null,
      "url": "/alerts-x/reference/objects/apidata"
    },
    {
      "name": "ResourceData",
      "description": null,
      "url": "/alerts-x/reference/objects/resourcedata"
    },
    {
      "name": "RoleData",
      "description": null,
      "url": "/alerts-x/reference/objects/roledata"
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
      "name": "Provider",
      "description": null,
      "url": "/alerts-x/reference/objects/provider"
    },
    {
      "name": "ClientFilter",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/clientfilter"
    },
    {
      "name": "SystemData",
      "description": null,
      "url": "/alerts-x/reference/objects/systemdata"
    },
    {
      "name": "SupplierFilter",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/supplierfilter"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/alerts-x/reference/objects/organizationdata"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/alerts-x/reference/objects/clientdata"
    },
    {
      "name": "ProfileData",
      "description": null,
      "url": "/alerts-x/reference/objects/profiledata"
    },
    {
      "name": "AlertInput",
      "description": "Alert information. Only one configuration has to be set at once.",
      "url": "/alerts-x/reference/inputobjects/alertinput"
    },
    {
      "name": "AlertUpdateInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/alertupdateinput"
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
      "name": "HubStatusInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/hubstatusinput"
    },
    {
      "name": "ErrorCodeInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/errorcodeinput"
    },
    {
      "name": "ErrorTypeInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/errortypeinput"
    },
    {
      "name": "AlertObjectInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/alertobjectinput"
    },
    {
      "name": "AlertGroupInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/alertgroupinput"
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
  "typename": "Boolean",
  "hideGithubLink": true
}
The `Boolean` scalar type represents `true` or `false`.
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
