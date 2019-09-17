{
  "title": "AlertPrice",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ModePrice!",
      "name": "mode",
      "url": "/travelgatex/reference/enums/modeprice",
      "description": "UNIT: to be informed for each transaction that matches the amount / commission\nPERCENTAGE: to be advise if a percentage of traffic matches the amount / commission",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CheckPrice!",
      "name": "check",
      "url": "/travelgatex/reference/enums/checkprice",
      "description": "Specify which field is goinf to be checked. Amount, commission or both",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "RangePrice!",
      "name": "range",
      "url": "/travelgatex/reference/enums/rangeprice",
      "description": "Low or greater values of amount/commission (value included) ",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "amount",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Value of amount price",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "commission",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Value of commission price",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AlertTypeConfiguration",
      "description": "Depending on the talert type, typeConfiguration will use some fields ",
      "url": "/travelgatex/reference/objects/alerttypeconfiguration"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AlertPrice",
  "hideGithubLink": true
}
Price contains the specific configuration for Price alert Type
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
