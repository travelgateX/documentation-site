{
  "title": "AccessFilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ID!]",
      "name": "includes",
      "url": "/hotel-x/reference/scalars/id",
      "description": "These Access IDs will overwrite the default configuration. Only the IDs on this list will be used in the search query.",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "excludes",
      "url": "/hotel-x/reference/scalars/id",
      "description": "These Access IDs will overwrite the default configuration. The IDs on this list will be excluded from the search query.",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FilterInput",
      "description": " Filter that selects the filter criteria which will be used in this availability. Currently you can only choose the accesses.\n You must choose one of them, include or exclude, or the other alternative isn't specified anything.\n If input both, you will receive a validation error that indicates this error.\n@deprecated(reason: \"deprecated from 2018-08-20. Please, use filterSearch\")",
      "url": "/hotel-x/reference/inputobjects/filterinput"
    },
    {
      "name": "HotelXFilterSearchInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxfiltersearchinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AccessFilterInput",
  "hideGithubLink": true
}
Include *OR* exclude accesses in this specific search query. If not specified, default accesses will be used.
Only one list (includes or excludes) *MUST* be used.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
