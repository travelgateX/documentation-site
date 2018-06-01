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
      "args": null
    },
    {
      "typeString": "String!",
      "name": "dll",
      "url": "/travelgatex/reference/scalars/string",
      "description": "supplier instance",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the supplier is active.",
      "args": null
    },
    {
      "typeString": "[SupplierGroupInput!]",
      "name": "groups",
      "url": "/travelgatex/reference/inputobjects/suppliergroupinput",
      "description": "groups related to this supplier",
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
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
