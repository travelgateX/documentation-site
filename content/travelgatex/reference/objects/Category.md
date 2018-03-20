{
  "title": "Category",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Category ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CategoryData",
      "name": "categoryData",
      "url": "/travelgatex/reference/objects/categorydata",
      "description": "Category data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Create date",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Update date",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "CategoryEdge",
      "description": "CategoryList Edge definition",
      "url": "/travelgatex/reference/objects/categoryedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Category"
}
Category Type
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
