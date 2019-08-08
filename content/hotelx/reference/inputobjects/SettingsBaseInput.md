{
  "title": "SettingsBaseInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int",
      "name": "timeout",
      "url": "/hotelx/reference/scalars/int",
      "description": null,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "auditTransactions",
      "url": "/hotelx/reference/scalars/boolean",
      "description": null,
      "args": null
    },
    {
      "typeString": "BusinessRulesInput",
      "name": "businessRules",
      "url": "/hotelx/reference/inputobjects/businessrulesinput",
      "description": null,
      "args": null
    },
    {
      "typeString": "Currency",
      "name": "currency",
      "url": "/hotelx/reference/scalars/currency",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXSupplierInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxsupplierinput"
    },
    {
      "name": "HotelXAccessInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxaccessinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "SettingsBaseInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
