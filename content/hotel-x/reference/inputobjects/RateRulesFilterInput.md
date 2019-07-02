{
  "title": "RateRulesFilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[RateRulesType!]",
      "name": "includes",
      "url": "/hotel-x/reference/enums/raterulestype",
      "description": "if includes not nil: only options without rate rules and options with rate rules found in includes will be returned",
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "excludes",
      "url": "/hotel-x/reference/enums/raterulestype",
      "description": "if excludes not nil: only options without rate rules and options with rate rules that haven't been sent in excludes will be returned",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FilterInput",
      "description": " Filter that selects the filter criteria which will be used in this availability. Currently you can only choose the accesses.\n You must choose one of them, include or exclude, or the other alternative isn't specified anything.\n If input both, you will receive a validation error that indicates this error.\n@deprecated(reason: \"deprecated from 2018-08-20. Please, use filterSearch\")",
      "url": "/hotel-x/reference/inputobjects/filterinput"
    },
    {
      "name": "HotelXFilterSearchInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxfiltersearchinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RateRulesFilterInput",
  "hideGithubLink": true
}
If requested, only options with the specified rateRules will be returned
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
