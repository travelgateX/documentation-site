{
  "title": "URI",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "GiataData",
      "description": "Hotel data obtained from Giata System.",
      "url": "/hotelx/reference/objects/giatadata"
    },
    {
      "name": "Contact",
      "description": "Contact Data.",
      "url": "/hotelx/reference/objects/contact"
    },
    {
      "name": "Media",
      "description": "Contains media information.",
      "url": "/hotelx/reference/objects/media"
    },
    {
      "name": "UrlsInput",
      "description": "URLs Input",
      "url": "/hotelx/reference/inputobjects/urlsinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "URI",
  "hideGithubLink": true
}
The URI type represents a URI values. A good example mith be an Hotel Image URL.
In queries or mutations, URI fields have to be specified in RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string format with enclosing double quotes: "http:\\www.travelgatex.com".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
