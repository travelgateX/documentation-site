{
  "title": "AdviseMessageLevel",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "AdviseMessage",
      "description": "List of advise messages.",
      "url": "/hotel-x/reference/objects/advisemessage"
    }
  ],
  "enumValues": [
    {
      "name": "WARN",
      "description": "Waringn message.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "ERROR",
      "description": "Error message.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "INFO",
      "description": "Info message.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "AdviseMessageLevel",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
