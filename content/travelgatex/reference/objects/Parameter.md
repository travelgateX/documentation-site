{
  "title": "Parameter",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "key",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Contains the keyword/Id to identify a parameter.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "value",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains the parameter values.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "AccessData",
      "description": "",
      "url": "/travelgatex/reference/objects/accessdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Parameter"
}
Parameters for additional information for the supplier's configuration.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
