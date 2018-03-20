{
  "title": "AccessConfigurationInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the access is active.",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Arbitrary not unique identifier",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "supplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Supplier to which this access belongs",
      "args": null
    },
    {
      "typeString": "ConfigurationInput",
      "name": "configuration",
      "url": "/travelgatex/reference/inputobjects/configurationinput",
      "description": "Information required to access the supplier's system.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "AccessConfigurationInput"
}
The information required to access the supplier's system.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
