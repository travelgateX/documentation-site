{
  "title": "UrlsInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "URI",
      "name": "search",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Specific Url for Availability method.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "quote",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Specific Url for Reservation method.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "book",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Specific Url for Valuation method.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "generic",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Supplier URL used for multiple methods.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "ConfigurationInput",
      "description": "The information and credentials required to access the supplierâ€™s system.",
      "url": "/travelgatex/reference/inputobjects/configurationinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "UrlsInput"
}
Url's
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
