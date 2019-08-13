{
  "title": "Exchange",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotel-x/reference/scalars/currency",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "rate",
      "url": "/hotel-x/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Price",
      "description": null,
      "url": "/hotel-x/reference/objects/price"
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
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Exchange",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
