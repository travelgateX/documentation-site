{
  "title": "BusinessRulesInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int",
      "name": "optionsQuota",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Options quota per search. Maximum numbers of options to be returned by the search query.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "BusinessRulesType",
      "name": "businessRulesType",
      "url": "/travelgatex/reference/enums/businessrulestype",
      "description": "Different business rules to filter the returned options.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelSettingsInput",
      "description": "Settings that you can edit for this avail. Values are loaded by default in our Back Office.",
      "url": "/travelgatex/reference/inputobjects/hotelsettingsinput"
    },
    {
      "name": "SettingsBaseInput",
      "description": "Contains the time out and business rules of a supplier or an access.",
      "url": "/travelgatex/reference/inputobjects/settingsbaseinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "BusinessRulesInput"
}
List of business rules to use as filter on the options.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
