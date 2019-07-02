{
  "title": "Category",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": "Category ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CategoryData",
      "name": "categoryData",
      "url": "/hotel-x/reference/objects/categorydata",
      "description": "Category data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/hotel-x/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "CategoryEdge",
      "description": "CategoryList Edge definition",
      "url": "/hotel-x/reference/objects/categoryedge"
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
