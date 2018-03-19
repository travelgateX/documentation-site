{
  "title": "Occupancy",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "id",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Unique ID room in this option.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Pax!]!",
      "name": "paxes",
      "url": "/travelgatex/reference/objects/pax",
      "description": "List of pax of this occupancy.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Occupancy"
}
Information about occupancy.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
