{
  "title": "SettingsBaseInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int",
      "name": "timeout",
      "url": "/hotel-x/reference/scalars/int",
      "description": "Milliseconds before the connection is closed.",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "auditTransactions",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": "Specifies if transactions exchanged with the supplier have to be logged or not.",
      "args": null
    },
    {
      "typeString": "BusinessRulesInput",
      "name": "businessRules",
      "url": "/hotel-x/reference/inputobjects/businessrulesinput",
      "description": "Business rules",
      "args": null
    },
    {
      "typeString": "Currency",
      "name": "currency",
      "url": "/hotel-x/reference/scalars/currency",
      "description": "The currency",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXSupplierInput",
      "description": "Supplier object. Contains its own settings, code and access.",
      "url": "/hotel-x/reference/inputobjects/hotelxsupplierinput"
    },
    {
      "name": "HotelXAccessInput",
      "description": "AccessInput overwrites an existent access in our Back Office or creates a new\none to be used in this search query only. An access object contains its own code, configuration and settings.",
      "url": "/hotel-x/reference/inputobjects/hotelxaccessinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "SettingsBaseInput",
  "hideGithubLink": true
}
Contains the time out and business rules of a supplier or an access.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
