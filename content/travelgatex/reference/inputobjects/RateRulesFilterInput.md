{
  "title": "RateRulesFilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[RateRulesType!]",
      "name": "includes",
      "url": "/travelgatex/reference/enums/raterulestype",
      "description": "if includes not nil: only options without rate rules and options with rate rules found in includes will be returned",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "excludes",
      "url": "/travelgatex/reference/enums/raterulestype",
      "description": "if excludes not nil: only options without rate rules and options with rate rules that haven't been sent in excludes will be returned",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "FilterInput",
      "description": "Filter that selects the filter criteria which will be used in this availability. Currently you can only choose the accesses.\nYou must choose one of them, include or exclude, or the other alternative isn't specified anything.\nIf input both, you will receive a validation error that indicates this error.",
      "url": "/travelgatex/reference/inputobjects/filterinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RateRulesFilterInput"
}
If requested, only options with the specified rateRules will be returned
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
