{
  "title": "MarkupRuleType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Rule",
      "description": "",
      "url": "/hotel-x/reference/objects/rule"
    }
  ],
  "enumValues": [
    {
      "name": "PERCENT",
      "description": "Indicates the percentage applied by a rule.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "IMPORT",
      "description": "Indicates the exact amount applied by a rule.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "MarkupRuleType",
  "hideGithubLink": true
}
Indicates what type of value is the markup, by percentage or is an import.
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
