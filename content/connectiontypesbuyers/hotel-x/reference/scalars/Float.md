{
  "title": "Float",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Coordinates",
      "description": null,
      "url": "/hotel-x/reference/objects/coordinates"
    },
    {
      "name": "PriceStatic",
      "description": null,
      "url": "/hotel-x/reference/objects/pricestatic"
    },
    {
      "name": "AuditData",
      "description": null,
      "url": "/hotel-x/reference/objects/auditdata"
    },
    {
      "name": "Stat",
      "description": null,
      "url": "/hotel-x/reference/objects/stat"
    },
    {
      "name": "Price",
      "description": null,
      "url": "/hotel-x/reference/objects/price"
    },
    {
      "name": "Exchange",
      "description": null,
      "url": "/hotel-x/reference/objects/exchange"
    },
    {
      "name": "Markup",
      "description": null,
      "url": "/hotel-x/reference/objects/markup"
    },
    {
      "name": "Priceable",
      "description": null,
      "url": "/hotel-x/reference/interfaces/priceable"
    },
    {
      "name": "Rule",
      "description": null,
      "url": "/hotel-x/reference/objects/rule"
    },
    {
      "name": "CancelPenalty",
      "description": null,
      "url": "/hotel-x/reference/objects/cancelpenalty"
    },
    {
      "name": "PriceChange",
      "description": null,
      "url": "/hotel-x/reference/objects/pricechange"
    },
    {
      "name": "DeltaPriceInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/deltapriceinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Float",
  "hideGithubLink": true
}
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
