{
  "title": "MappingEntity",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Client code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Map!]",
      "name": "contexts",
      "url": "/travelgatex/reference/objects/map",
      "description": "You can filter by output context.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "MappingEntity"
}
Mapping about client codes with the equivalence per supplier.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
