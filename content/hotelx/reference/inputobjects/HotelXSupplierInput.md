{
  "title": "HotelXSupplierInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "SettingsBaseInput",
      "name": "settings",
      "url": "/hotelx/reference/inputobjects/settingsbaseinput",
      "description": "You can configure an special settings for any supplier. This level overwrites the avail settings level but not the\naccess settings level.",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "code",
      "url": "/hotelx/reference/scalars/string",
      "description": "Code that represents a supplier in our system.\nThis information is mandatory.",
      "args": null
    },
    {
      "typeString": "[HotelXAccessInput!]",
      "name": "accesses",
      "url": "/hotelx/reference/inputobjects/hotelxaccessinput",
      "description": "Array of accesses that can overwrite an existing access information or include a new access for this avail.",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXSupplierInput",
  "hideGithubLink": true
}
Supplier object. Contains its own settings, code and access.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
