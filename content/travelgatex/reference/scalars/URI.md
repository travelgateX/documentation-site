{
  "title": "URI",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Urls",
      "description": "Url's",
      "url": "/travelgatex/reference/objects/urls"
    },
    {
      "name": "Contact",
      "description": "Contact Data.",
      "url": "/travelgatex/reference/objects/contact"
    },
    {
      "name": "Media",
      "description": "Contains media information.",
      "url": "/travelgatex/reference/objects/media"
    },
    {
      "name": "UrlsInput",
      "description": "URLs Input",
      "url": "/travelgatex/reference/inputobjects/urlsinput"
    },
    {
      "name": "StatsAssert",
      "description": "Assert of an specific error",
      "url": "/travelgatex/reference/objects/statsassert"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "URI"
}
The URI type represents a URI values. A good example mith be an Hotel Image URL.
In queries or mutations, URI fields have to be specified in RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string format with enclosing double quotes: "http:\www.travelgatex.com".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
