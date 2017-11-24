{
  "title": "SupplierInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "SettingsBaseInput",
      "name": "settings",
      "url": "/travelgatex/reference/inputobjects/settingsbaseinput",
      "description": "You can configure an special settings for any supplier. This level overwrites the avail settings level but not the\naccess settings level.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Code that represents a supplier in our system.\nThis information is mandatory.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[AccessInput!]",
      "name": "accesses",
      "url": "/travelgatex/reference/inputobjects/accessinput",
      "description": "Array of accesses that can overwrite an existing access information or include a new access for this avail.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "SupplierInput"
}
Supplier object. Contains its own settings, code and access.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
