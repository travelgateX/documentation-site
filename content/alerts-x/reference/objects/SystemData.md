{
  "title": "SystemData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "name",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/alerts-x/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "group",
      "url": "/alerts-x/reference/objects/group",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/alerts-x/reference/objects/organization",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Supplier]!",
      "name": "suppliers",
      "url": "/alerts-x/reference/objects/supplier",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "SupplierFilter",
          "name": "filter",
          "url": "/alerts-x/reference/inputobjects/supplierfilter",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "System",
      "description": null,
      "url": "/alerts-x/reference/objects/system"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "SystemData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
