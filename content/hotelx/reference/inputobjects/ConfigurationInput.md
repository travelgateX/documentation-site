{
  "title": "ConfigurationInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "username",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "UrlsInput!",
      "name": "urls",
      "url": "/hotelx/reference/inputobjects/urlsinput",
      "description": null,
      "args": null
    },
    {
      "typeString": "[ParameterInput!]",
      "name": "parameters",
      "url": "/hotelx/reference/inputobjects/parameterinput",
      "description": null,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/hotelx/reference/enums/raterulestype",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXAccessInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxaccessinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ConfigurationInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
