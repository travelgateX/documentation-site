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
      "args": null
    },
    {
      "typeString": "URI",
      "name": "quote",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Specific Url for Reservation method.",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "book",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Specific Url for Valuation method.",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "generic",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Supplier URL used for multiple methods.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "ConfigurationInput",
      "description": "The information and credentials required to access the supplier’s system.",
      "url": "/travelgatex/reference/inputobjects/configurationinput"
    },
    {
      "name": "AccessInput",
      "description": "Access input",
      "url": "/travelgatex/reference/inputobjects/accessinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "UrlsInput"
}
Urls Input
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
