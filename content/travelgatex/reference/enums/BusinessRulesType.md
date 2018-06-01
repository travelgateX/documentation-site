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
      "description": "LList of business rules for filtering options based on your interests.",
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
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
