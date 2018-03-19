{
  "title": "MappingContext",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Code of the context",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "hotels",
      "url": "/travelgatex/reference/objects/mappingentity",
      "description": "Mapping of hotels, you can filter by hotel code.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "rooms",
      "url": "/travelgatex/reference/objects/mappingentity",
      "description": "Mapping of rooms, you can filter by room code.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "boards",
      "url": "/travelgatex/reference/objects/mappingentity",
      "description": "Mapping of boards, you can filter by board code.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "MappingContext"
}
Returns the differents group contexts
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
