{
  "title": "RangePrice",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "AlertPrice",
      "description": "Price contains the specific configuration for Price alert Type",
      "url": "/alerts-x/reference/objects/alertprice"
    },
    {
      "name": "AlertPriceInput",
      "description": "Price input",
      "url": "/alerts-x/reference/inputobjects/alertpriceinput"
    },
    {
      "name": "AlertPriceUpdateInput",
      "description": "Price update",
      "url": "/alerts-x/reference/inputobjects/alertpriceupdateinput"
    }
  ],
  "enumValues": [
    {
      "name": "LESS",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "GREATER",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "RangePrice",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
