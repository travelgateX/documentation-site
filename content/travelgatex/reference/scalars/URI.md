{
  "title": "URI",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "UrlsInput",
      "description": "Url's",
      "url": "/travelgatex/reference/inputobjects/urlsinput"
    },
    {
      "name": "MediaData",
      "description": "",
      "url": "/travelgatex/reference/objects/mediadata"
    },
    {
      "name": "Contact",
      "description": "Contact type",
      "url": "/travelgatex/reference/objects/contact"
    },
    {
      "name": "Urls",
      "description": "Url's",
      "url": "/travelgatex/reference/objects/urls"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "URI"
}
The URI type represents a URI values. A good example mith be an Hotel Image URL.
In queries or mutations, URI fields have to be specified in RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string format with enclosing double quotes: "http:\www.travelgatex.com".
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
