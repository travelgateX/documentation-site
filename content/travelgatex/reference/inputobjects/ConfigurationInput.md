{
  "title": "ConfigurationInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "username",
      "url": "/travelgatex/reference/scalars/string",
      "description": "User name for the connection.",
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Password for the connection.",
      "args": null
    },
    {
      "typeString": "UrlsInput!",
      "name": "urls",
      "url": "/travelgatex/reference/inputobjects/urlsinput",
      "description": "Url or endpoint for the connection.",
      "args": null
    },
    {
      "typeString": "[ParameterInput!]",
      "name": "parameters",
      "url": "/travelgatex/reference/inputobjects/parameterinput",
      "description": "List of parameters with additional required information.",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Source markets allowed for the access.",
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/travelgatex/reference/enums/raterulestype",
      "description": "RateRules allowed for the access.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelXAccessInput",
      "description": "AccessInput overwrites an existent access in our Back Office or creates a new\none to be used in this search query only. An access object contains its own code, configuration and settings.",
      "url": "/travelgatex/reference/inputobjects/hotelxaccessinput"
    },
    {
      "name": "AccessConfigurationInput",
      "description": "The information required to access the supplier's system.",
      "url": "/travelgatex/reference/inputobjects/accessconfigurationinput"
    },
    {
      "name": "IdAccessConfigurationInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/idaccessconfigurationinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ConfigurationInput"
}
The information and credentials required to access the supplier’s system.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
