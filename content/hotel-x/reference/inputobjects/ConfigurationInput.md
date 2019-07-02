{
  "title": "ConfigurationInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "username",
      "url": "/hotel-x/reference/scalars/string",
      "description": "User name for the connection.",
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Password for the connection",
      "args": null
    },
    {
      "typeString": "UrlsInput!",
      "name": "urls",
      "url": "/hotel-x/reference/inputobjects/urlsinput",
      "description": "URL or endpoint for the connection.",
      "args": null
    },
    {
      "typeString": "[ParameterInput!]",
      "name": "parameters",
      "url": "/hotel-x/reference/inputobjects/parameterinput",
      "description": "List of parameters with additional required information.",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Source Markets allowed for the Access",
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/hotel-x/reference/enums/raterulestype",
      "description": "RateRules allowed for the access.",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXAccessInput",
      "description": "AccessInput overwrites an existent access in our Back Office or creates a new\none to be used in this search query only. An access object contains its own code, configuration and settings.",
      "url": "/hotel-x/reference/inputobjects/hotelxaccessinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ConfigurationInput",
  "hideGithubLink": true
}
The information and credentials required to access the supplier’s system.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
