{
  "title": "CategoryData",
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
      "name": "categoryCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Code of the hotel based on the Supplier selected",
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
      "name": "Category",
      "description": "Category Type",
      "url": "/hotel-x/reference/objects/category"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CategoryData",
  "hideGithubLink": true
}
Category data
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
