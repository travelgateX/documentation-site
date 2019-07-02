{
  "title": "Occupancy",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "id",
      "url": "/hotel-x/reference/scalars/int",
      "description": "Unique ID room in this option.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Pax!]!",
      "name": "paxes",
      "url": "/hotel-x/reference/objects/pax",
      "description": "List of pax of this occupancy.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Occupancy",
  "hideGithubLink": true
}
Information about occupancy.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
