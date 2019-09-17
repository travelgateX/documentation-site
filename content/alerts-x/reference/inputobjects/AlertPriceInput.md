{
  "title": "AlertPriceInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ModePrice!",
      "name": "mode",
      "url": "/alerts-x/reference/enums/modeprice",
      "description": "UNIT: to be informed for each transaction that matches the amount / commission\nPERCENTAGE: to be advise if a percentage of traffic matches the amount / commission",
      "args": null
    },
    {
      "typeString": "CheckPrice!",
      "name": "check",
      "url": "/alerts-x/reference/enums/checkprice",
      "description": "Specify which field is going to be checked. Amount, commission or both",
      "args": null
    },
    {
      "typeString": "RangePrice!",
      "name": "range",
      "url": "/alerts-x/reference/enums/rangeprice",
      "description": "Low or greater values of amount/commission (value included) ",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "amount",
      "url": "/alerts-x/reference/scalars/int",
      "description": "Value of amount price",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "commission",
      "url": "/alerts-x/reference/scalars/int",
      "description": "Value of commission price",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AlertConfigurationInputPrice",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/alertconfigurationinputprice"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AlertPriceInput",
  "hideGithubLink": true
}
Price input
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
