{
  "title": "UrlsInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "URI",
      "name": "search",
      "url": "/hotelx/reference/scalars/uri",
      "description": "Specific URL for Availability method.",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "quote",
      "url": "/hotelx/reference/scalars/uri",
      "description": "Specific URL for Reservation method.",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "book",
      "url": "/hotelx/reference/scalars/uri",
      "description": "Specific URL for Valuation method.",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "generic",
      "url": "/hotelx/reference/scalars/uri",
      "description": "Supplier URL used for multiple methods.",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "ConfigurationInput",
      "description": "The information and credentials required to access the supplier’s system.",
      "url": "/hotelx/reference/inputobjects/configurationinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "UrlsInput",
  "hideGithubLink": true
}
URLs Input
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
