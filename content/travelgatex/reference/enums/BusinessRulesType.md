{
  "title": "BusinessRulesType",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "BusinessRulesInput",
      "description": "List of business rules to use as filter on the options.",
      "url": "/travelgatex/reference/inputobjects/businessrulesinput"
    },
    {
      "name": "BusinessRules",
      "description": "List of business rules to filter the options that you are interested.",
      "url": "/travelgatex/reference/objects/businessrules"
    },
    {
      "name": "DefaultSettingsBusinessRulesInput",
      "description": "Input delta price, indicates the price variation permitted by the client before failing the booking.",
      "url": "/travelgatex/reference/inputobjects/defaultsettingsbusinessrulesinput"
    }
  ],
  "enumValues": [
    {
      "name": "CHEAPER_AMOUNT",
      "description": "The cheapest options is returned without exceeding the optionsQuota limit.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "ROOM_TYPE",
      "description": "Groups the option by room type without exceeding the optionsQuota limit.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "BusinessRulesType"
}
Business rules type
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
