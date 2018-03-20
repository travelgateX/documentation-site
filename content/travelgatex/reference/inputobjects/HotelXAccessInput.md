{
  "title": "HotelXAccessInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "accessId",
      "url": "/travelgatex/reference/scalars/id",
      "description": "The accessID used to identify the existing access in our Back Office in order to\noverwrite it. Acts as an identifier in this search. It can either exist or not.",
      "args": null
    },
    {
      "typeString": "ConfigurationInput",
      "name": "configuration",
      "url": "/travelgatex/reference/inputobjects/configurationinput",
      "description": "Information required to access the supplier's system.",
      "args": null
    },
    {
      "typeString": "SettingsBaseInput",
      "name": "settings",
      "url": "/travelgatex/reference/inputobjects/settingsbaseinput",
      "description": "You can configure an special settings for any access. This level overwrites the search and supplier settings levels.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXAccessInput"
}
AccessInput overwrites an existent access in our Back Office or creates a new
one to be used in this search query only. An access object contains its own code, configuration and settings.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
