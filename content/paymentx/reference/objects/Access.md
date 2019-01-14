{
  "title": "Access",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AccessData",
      "name": "accessData",
      "url": "/paymentx/reference/objects/accessdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/paymentx/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AccessEdge",
      "description": "",
      "url": "/paymentx/reference/objects/accessedge"
    },
    {
      "name": "AccessData",
      "description": "",
      "url": "/paymentx/reference/objects/accessdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Access",
  "hideGithubLink": true
}
An Access is a set of credentials and configuration in order to access the system of a Supplier.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
