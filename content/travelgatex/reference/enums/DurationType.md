{
  "title": "DurationType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/travelgatex/reference/objects/supplement"
    }
  ],
  "enumValues": [
    {
      "name": "RANGE",
      "description": "Date range is set.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "OPEN",
      "description": "Not restricted by date.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "DurationType"
}
Duration Type
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
