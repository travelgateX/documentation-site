{
  "title": "MappingContext",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "contextCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Code of the context",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "hotels",
      "url": "/travelgatex/reference/objects/mappingentity",
      "description": "Mapping of hotels. Filter by hotel code.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "hotelCodes",
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
      "description": "Mapping of rooms. Filter by room code.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "roomCodes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "rates",
      "url": "/travelgatex/reference/objects/mappingentity",
      "description": "Mapping of rates. Filter by rate code.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "rateCodes",
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
      "description": "Mapping of boards. Filter by board code.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "BoardCodes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
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
