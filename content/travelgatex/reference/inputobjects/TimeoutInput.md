{
  "title": "TimeoutInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "search",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Milliseconds before the search connection is closed.",
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "quote",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Milliseconds before the quote connection is closed.",
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "book",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Milliseconds before the book connection is closed.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "DefaultSettingsInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/defaultsettingsinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "TimeoutInput"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
