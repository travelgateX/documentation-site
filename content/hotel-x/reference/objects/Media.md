{
  "title": "Media",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "code",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "order",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Indicates the order priority.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ApplicationAreaType!",
      "name": "type",
      "url": "/hotel-x/reference/enums/applicationareatype",
      "description": "Indicates the type of the media.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": "Date updated.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "URI!",
      "name": "url",
      "url": "/hotel-x/reference/scalars/uri",
      "description": "Url.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]",
      "name": "texts",
      "url": "/hotel-x/reference/objects/text",
      "description": "Contains the descriptive.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/hotel-x/reference/scalars/language",
          "description": ""
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Media",
  "hideGithubLink": true
}
Contains media information.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
