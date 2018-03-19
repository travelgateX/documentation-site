{
  "title": "DefaultSettingsBusinessRulesInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "optionsQuota",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Options quota per avail. Numbers of options wanted by avail.",
      "args": null
    },
    {
      "typeString": "BusinessRulesType!",
      "name": "businessRulesType",
      "url": "/travelgatex/reference/enums/businessrulestype",
      "description": "Different business rules to filter the options that you are interested.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "DefaultSettingsInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/defaultsettingsinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "DefaultSettingsBusinessRulesInput"
}
Input delta price, indicates the price variation permitted by the client before failing the booking.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
