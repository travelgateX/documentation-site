{
  "title": "Float",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Coordinates",
      "description": "Geographical coordinates corresponding to a location.",
      "url": "/hotelx/reference/objects/coordinates"
    },
    {
      "name": "AuditData",
      "description": "Data sent and received in the supplier’s native format.",
      "url": "/hotelx/reference/objects/auditdata"
    },
    {
      "name": "Stat",
      "description": "",
      "url": "/hotelx/reference/objects/stat"
    },
    {
      "name": "Price",
      "description": "Price indicates the value of the room/option.\nSupplements and/or surcharges can be included into the price, and will be verified with nodes Supplements/Surcharges.",
      "url": "/hotelx/reference/objects/price"
    },
    {
      "name": "Exchange",
      "description": "Provides information about the currency of original, and its rate applied over the results returned by the Supplier.",
      "url": "/hotelx/reference/objects/exchange"
    },
    {
      "name": "Markup",
      "description": "Informs markup applied over supplier price.",
      "url": "/hotelx/reference/objects/markup"
    },
    {
      "name": "Priceable",
      "description": "",
      "url": "/hotelx/reference/interfaces/priceable"
    },
    {
      "name": "Rule",
      "description": "",
      "url": "/hotelx/reference/objects/rule"
    },
    {
      "name": "CancelPenalty",
      "description": "Contains information for cancellation penalities..",
      "url": "/hotelx/reference/objects/cancelpenalty"
    },
    {
      "name": "DeltaPriceInput",
      "description": "Input delta price, indicates price variation permitted by the client\nAn error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue \n(price is lower or equal to the price showed in valuation).\nThis field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation \nwill be done automatically in reservation method.",
      "url": "/hotelx/reference/inputobjects/deltapriceinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Float",
  "hideGithubLink": true
}
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
