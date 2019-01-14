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
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "hotels",
      "url": "/travelgatex/reference/objects/mappingentity",
      "description": "Mapping of hotels, you can filter by hotel code.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "rooms",
      "url": "/travelgatex/reference/objects/mappingentity",
      "description": "Mapping of rooms, you can filter by room code.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "boards",
      "url": "/travelgatex/reference/objects/mappingentity",
      "description": "Mapping of boards, you can filter by board code.",
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
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "MappingContext",
  "hideGithubLink": true
}
Returns the differents group contexts
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
