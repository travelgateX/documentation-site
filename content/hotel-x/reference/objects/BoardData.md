{
  "title": "BoardData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": "Internal code for checking availability",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "boardCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Code of the hotel in the Supplier selected",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]",
      "name": "texts",
      "url": "/hotel-x/reference/objects/text",
      "description": "Label",
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
  "requireby": [
    {
      "name": "Board",
      "description": "Board type.",
      "url": "/hotel-x/reference/objects/board"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "BoardData",
  "hideGithubLink": true
}
Board data
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
