{
  "title": "AccessSupplierInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "supplier code",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "dll",
      "url": "/travelgatex/reference/scalars/string",
      "description": "supplier instance",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the supplier is active.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[SupplierGroupInput!]",
      "name": "groups",
      "url": "/travelgatex/reference/inputobjects/suppliergroupinput",
      "description": "groups related to this supplier",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "AccessSupplierInput"
}
Supplier input for data access management API
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
