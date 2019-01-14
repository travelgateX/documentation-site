{
  "title": "HotelXBusinessRulesInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "optionsQuota",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Options quota per search. Maximum numbers of options to be returned by the search query.",
      "args": null
    },
    {
      "typeString": "BusinessRulesType!",
      "name": "businessRulesType",
      "url": "/travelgatex/reference/enums/businessrulestype",
      "description": "Different business rules to filter the returned options.",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXDefaultSettingsDataInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxdefaultsettingsdatainput"
    },
    {
      "name": "HotelXCommonSettingsDataInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxcommonsettingsdatainput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXBusinessRulesInput",
  "hideGithubLink": true
}
List of business rules to use as filter on the options.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
