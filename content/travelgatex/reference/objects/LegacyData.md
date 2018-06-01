{
  "title": "LegacyData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "isPublic",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Is supplier public?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "inDevelopment",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Is supplier in development?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "giataType",
      "url": "/travelgatex/reference/scalars/string",
      "description": "GiataType",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "giataCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Giata Code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isDirect",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Is suspplier deirect?",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "LegacyData"
}
The URI type represents a URI values. A good example mith be an Hotel Image URL.
In queries or mutations, URI fields have to be specified in RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string format with enclosing double quotes: "http:\www.travelgatex.com".
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
