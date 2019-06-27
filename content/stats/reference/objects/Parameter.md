{
  "title": "Parameter",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "key",
      "url": "/stats/reference/scalars/id",
      "description": "Contains the keyword/Id to identify a parameter.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "value",
      "url": "/stats/reference/scalars/string",
      "description": "Contains the parameter values.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AccessData",
      "description": "",
      "url": "/stats/reference/objects/accessdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Parameter",
  "hideGithubLink": true
}
Parameters for additional information for the supplier's configuration.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
