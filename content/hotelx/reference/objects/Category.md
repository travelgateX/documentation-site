{
  "title": "Category",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotelx/reference/scalars/id",
      "description": "Category ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CategoryData",
      "name": "categoryData",
      "url": "/hotelx/reference/objects/categorydata",
      "description": "Category data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/hotelx/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "CategoryEdge",
      "description": "CategoryList Edge definition",
      "url": "/hotelx/reference/objects/categoryedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Category",
  "hideGithubLink": true
}
Category Type
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
