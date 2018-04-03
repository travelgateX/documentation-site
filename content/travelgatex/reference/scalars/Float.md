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
      "description": "Data sent & received in the supplier’s native format.",
      "url": "/travelgatex/reference/objects/auditdata"
    },
    {
      "name": "Price",
      "description": "Price indicates the value of the room/option.\nSupplements and/or surcharges could be or not included into the price, will be verified with the nodes Supplements/Surcharges.",
      "url": "/travelgatex/reference/objects/price"
    },
    {
      "name": "Priceable",
      "description": "",
      "url": "/travelgatex/reference/interfaces/priceable"
    },
    {
      "name": "Exchange",
      "description": "Informs about the currency of origin, and the rate applied over result returned by the supplier.",
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
      "description": "Contains information about a cancel penalty.",
      "url": "/travelgatex/reference/objects/cancelpenalty"
    },
    {
      "name": "DeltaPriceInput",
      "description": "Input delta price, indicates price variation permitted by the client",
      "url": "/travelgatex/reference/inputobjects/deltapriceinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Float"
}
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
