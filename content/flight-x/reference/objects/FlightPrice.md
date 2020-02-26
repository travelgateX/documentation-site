{
  "title": "FlightPrice",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AmountType",
      "name": "baseAmount",
      "url": "/flight-x/reference/objects/amounttype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Fee]",
      "name": "fee",
      "url": "/flight-x/reference/objects/fee",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[FlightSurcharge]",
      "name": "surcharge",
      "url": "/flight-x/reference/objects/flightsurcharge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[TaxSummaryType]",
      "name": "taxSummary",
      "url": "/flight-x/reference/objects/taxsummarytype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AmountType",
      "name": "totalAmount",
      "url": "/flight-x/reference/objects/amounttype",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FlightOfferItemData",
      "description": null,
      "url": "/flight-x/reference/objects/flightofferitemdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "FlightPrice",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
