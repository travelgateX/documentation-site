{
  "title": "MappingContext",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "hotels",
      "url": "/hotel-x/reference/objects/mappingentity",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "rooms",
      "url": "/hotel-x/reference/objects/mappingentity",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "[MappingEntity!]",
      "name": "boards",
      "url": "/hotel-x/reference/objects/mappingentity",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
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
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
