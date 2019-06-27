{
  "title": "BusinessRules",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "optionsQuota",
      "url": "/hotelx/reference/scalars/int",
      "description": "Options quota per availability; numbers of options based on availability",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BusinessRulesType!",
      "name": "businessRulesType",
      "url": "/hotelx/reference/enums/businessrulestype",
      "description": "Different business rules for filtering options that you are interested in",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXDefaultSettingsData",
      "description": "",
      "url": "/hotelx/reference/objects/hotelxdefaultsettingsdata"
    },
    {
      "name": "HotelXCommonSettingsData",
      "description": "",
      "url": "/hotelx/reference/objects/hotelxcommonsettingsdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "BusinessRules",
  "hideGithubLink": true
}
List of business rules for filtering options based on your interests.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
