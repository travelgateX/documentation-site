{
  "title": "BusinessRules",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "optionsQuota",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Options quota per avail. Numbers of options wanted by avail.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BusinessRulesType!",
      "name": "businessRulesType",
      "url": "/travelgatex/reference/enums/businessrulestype",
      "description": "Different business rules to filter the options that you are interested.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "DefaultSettings",
      "description": "",
      "url": "/travelgatex/reference/objects/defaultsettings"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "BusinessRules"
}
List of business rules to filter the options that you are interested.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
