{
  "title": "FilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AccessFilterInput",
      "name": "access",
      "url": "/travelgatex/reference/inputobjects/accessfilterinput",
      "description": "You can specify one of the filters or any of them. In this latter case, all the configurated accesses will be executed.",
      "args": null
    },
    {
      "typeString": "RateRulesFilterInput",
      "name": "rateRules",
      "url": "/travelgatex/reference/inputobjects/raterulesfilterinput",
      "description": "If requested, only options with the specified rateRules will be returned",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "FilterInput"
}
Filter that selects the filter criteria which will be used in this availability. Currently you can only choose the accesses.
You must choose one of them, include or exclude, or the other alternative isn't specified anything.
If input both, you will receive a validation error that indicates this error.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
