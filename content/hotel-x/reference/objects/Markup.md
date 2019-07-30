{
  "title": "Markup",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "channel",
      "url": "/hotel-x/reference/scalars/string",
      "description": "channel of markup application.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotel-x/reference/scalars/currency",
      "description": "Currency code indicating which currency should be paid.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "binding",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": "It indicates if the price indicated in the gross must be respected.\nThat is, the customer can not sell the room / option at a price lower than that established by the supplier.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "net",
      "url": "/hotel-x/reference/scalars/float",
      "description": "Indicates the net price that the customer must pay to the supplier plus the markup.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float",
      "name": "gross",
      "url": "/hotel-x/reference/scalars/float",
      "description": "Indicates the retail price that the supplier sells to the customer plus the markup.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Exchange!",
      "name": "exchange",
      "url": "/hotel-x/reference/objects/exchange",
      "description": "Informs about the currency of origin, and the rate applied over result.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Rule!]!",
      "name": "rules",
      "url": "/hotel-x/reference/objects/rule",
      "description": "Breakdown of the applied rules for a markup",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Markup",
  "hideGithubLink": true
}
Informs markup applied over supplier price.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
