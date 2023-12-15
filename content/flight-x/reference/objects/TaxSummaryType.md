{
  "title": "TaxSummaryType",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AmountType",
      "name": "totalTaxAmount",
      "url": "/flight-x/reference/objects/amounttype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[TaxType]",
      "name": "tax",
      "url": "/flight-x/reference/objects/taxtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FlightPrice",
      "description": null,
      "url": "/flight-x/reference/objects/flightprice"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "TaxSummaryType",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
