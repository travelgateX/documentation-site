{
  "title": "DurationType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/hotel-x/reference/objects/supplement"
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
  "typename": "DurationType",
  "hideGithubLink": true
}
Duration Type
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
