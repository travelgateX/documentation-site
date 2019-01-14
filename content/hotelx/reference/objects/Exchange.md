{
  "title": "Exchange",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotelx/reference/scalars/currency",
      "description": "Provide information about the currency of origin",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "rate",
      "url": "/hotelx/reference/scalars/float",
      "description": "Provides information about the rate applied over results",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Price",
      "description": "Price indicates the value of the room/option.\nSupplements and/or surcharges can be included into the price, and will be verified with nodes Supplements/Surcharges.",
      "url": "/hotelx/reference/objects/price"
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
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Exchange",
  "hideGithubLink": true
}
Provides information about the currency of original, and its rate applied over the results returned by the Supplier.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
