{
  "title": "FlightXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "FlightOfferConnection",
      "name": "search",
      "url": "/flight-x/reference/objects/flightofferconnection",
      "description": "Returns the flight offers available",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "FlightOfferWhereInput",
          "name": "where",
          "url": "/flight-x/reference/inputobjects/flightofferwhereinput",
          "description": null
        },
        {
          "typeString": "FlightSettingsInput",
          "name": "settings",
          "url": "/flight-x/reference/inputobjects/flightsettingsinput",
          "description": null
        },
        {
          "typeString": "FlightOfferOrderByInput",
          "name": "orderBy",
          "url": null,
          "description": "It has not been developed yet."
        }
      ]
    },
    {
      "typeString": "AuditData!",
      "name": "audit",
      "url": null,
      "description": "It has not been developed yet.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "code",
          "url": "/flight-x/reference/scalars/id",
          "description": null
        }
      ]
    },
    {
      "typeString": "FlightOffer",
      "name": "quote",
      "url": null,
      "description":  "It has not been developed yet.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "FlightXQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
