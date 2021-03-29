{
  "title": "CategoryData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "categoryCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]",
      "name": "texts",
      "url": "/hotel-x/reference/objects/text",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/hotel-x/reference/scalars/language",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Category",
      "description": null,
      "url": "/hotel-x/reference/objects/category"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CategoryData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
