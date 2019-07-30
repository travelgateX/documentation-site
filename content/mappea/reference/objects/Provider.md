{
  "title": "Provider",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/mappea/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/mappea/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isActive",
      "url": "/mappea/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isPublic",
      "url": "/mappea/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "SupplierData",
      "description": "",
      "url": "/mappea/reference/objects/supplierdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Provider",
  "hideGithubLink": true
}
Temporary type to use only during SQL server's lifetime
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
