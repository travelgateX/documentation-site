{
  "title": "Media",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "order",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the order priority.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ApplicationAreaType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/applicationareatype",
      "description": "Indicates the type of the media.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Update date.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "URI!",
      "name": "url",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Url.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]",
      "name": "texts",
      "url": "/travelgatex/reference/interfaces/text",
      "description": "Contains the descriptive.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Media"
}
Contains media information.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
