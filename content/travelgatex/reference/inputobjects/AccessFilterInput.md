{
  "title": "AccessFilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ID!]",
      "name": "includes",
      "url": "/travelgatex/reference/scalars/id",
      "description": "These Access IDs will overwrite the default configuration. Only the IDs on this list will be used in the search query.",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "excludes",
      "url": "/travelgatex/reference/scalars/id",
      "description": "These Access IDs will overwrite the default configuration. The IDs on this list will be excluded from the search query.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "FilterInput",
      "description": "Filter that selects the filter criteria which will be used in this availability. Currently you can only choose the accesses.\nYou must choose one of them, include or exclude, or the other alternative isn't specified anything.\nIf input both, you will receive a validation error that indicates this error.",
      "url": "/travelgatex/reference/inputobjects/filterinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AccessFilterInput"
}
Include *OR* exclude accesses in this specific search query. If not specified, default accesses will be used.
Only one list (includes or excludes) *MUST* be used.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
