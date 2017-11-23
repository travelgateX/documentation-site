{
  "title": "IdAccessConfigurationInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/travelgatex/reference/scalars/id",
      "description": "access unique identifier",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the access is active.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Arbitrary not unique identifier",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "supplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Supplier to which this access belongs",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ConfigurationInput",
      "name": "configuration",
      "url": "/travelgatex/reference/inputobjects/configurationinput",
      "description": "Information required to access the supplier's system.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "IdAccessConfigurationInput"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
