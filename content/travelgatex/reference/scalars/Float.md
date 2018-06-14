{
  "title": "Float",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Coordinates",
      "description": "Geographical coordinates corresponding to a location.",
      "url": "/travelgatex/reference/objects/coordinates"
    },
    {
      "name": "Stat",
      "description": "",
      "url": "/travelgatex/reference/objects/stat"
    },
    {
      "name": "AuditData",
      "description": "Data sent and received in the supplier’s native format.",
      "url": "/travelgatex/reference/objects/auditdata"
    },
    {
      "name": "Price",
      "description": "Price indicates the value of the room/option.\nSupplements and/or surcharges can be included into the price, and will be verified with nodes Supplements/Surcharges.",
      "url": "/travelgatex/reference/objects/price"
    },
    {
      "name": "Priceable",
      "description": "",
      "url": "/travelgatex/reference/interfaces/priceable"
    },
    {
      "name": "Exchange",
      "description": "Provides information about the currency of original, and its rate applied over the results returned by the Supplier.",
      "url": "/travelgatex/reference/objects/exchange"
    },
    {
      "name": "Markup",
      "description": "Informs markup applied over supplier price.",
      "url": "/travelgatex/reference/objects/markup"
    },
    {
      "name": "Rule",
      "description": "",
      "url": "/travelgatex/reference/objects/rule"
    },
    {
      "name": "CancelPenalty",
      "description": "Contains information for cancellation penalities..",
      "url": "/travelgatex/reference/objects/cancelpenalty"
    },
    {
      "name": "DeltaPriceInput",
      "description": "Input delta price, indicates price variation permitted by the client\nAn error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue \n(price is lower or equal to the price showed in valuation).\nThis field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation \nwill be done automatically in reservation method.",
      "url": "/travelgatex/reference/inputobjects/deltapriceinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Float"
}
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
