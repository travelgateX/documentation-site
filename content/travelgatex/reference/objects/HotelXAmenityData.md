{
  "title": "HotelXAmenityData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "amenityCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ApplicationAreaType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/applicationareatype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]!",
      "name": "texts",
      "url": "/travelgatex/reference/objects/text",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": null
        }
      ]
    },
    {
      "typeString": "[Text!]!",
      "name": "value",
      "url": "/travelgatex/reference/objects/text",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": null
        }
      ]
    },
    {
      "typeString": "[HotelXMappedCode!]",
      "name": "mappings",
      "url": "/travelgatex/reference/objects/hotelxmappedcode",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXAmenity",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelxamenity"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXAmenityData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
