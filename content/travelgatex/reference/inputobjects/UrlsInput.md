{
  "title": "UrlsInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "URI",
      "name": "search",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Specific URL for Availability method.",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "quote",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Specific URL for Reservation method.",
      "args": null
    },
    {
      "typeString": "URI",
      "name": "book",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Specific URL for Valuation method.",
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
