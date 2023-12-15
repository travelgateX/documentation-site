{
  "title": "FlightSurcharge",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AmountType",
      "name": "totalAmount",
      "url": "/flight-x/reference/objects/amounttype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Fee]",
      "name": "breakdown",
      "url": "/flight-x/reference/objects/fee",
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
  "typename": "FlightSurcharge",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
