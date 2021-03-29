{
  "title": "ConfigurationInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "username",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "UrlsInput!",
      "name": "urls",
      "url": "/hotel-x/reference/inputobjects/urlsinput",
      "description": null,
      "args": null
    },
    {
      "typeString": "[ParameterInput!]",
      "name": "parameters",
      "url": "/hotel-x/reference/inputobjects/parameterinput",
      "description": null,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/hotel-x/reference/enums/raterulestype",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXAccessInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelxaccessinput"
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
