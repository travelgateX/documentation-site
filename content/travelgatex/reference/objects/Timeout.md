{
  "title": "Timeout",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "search",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Milliseconds before the search connection is closed.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "quote",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Milliseconds before the quote connection is closed.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "book",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Milliseconds before the book connection is closed.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "DefaultSettings",
      "description": "",
      "url": "/travelgatex/reference/objects/defaultsettings"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Timeout"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
