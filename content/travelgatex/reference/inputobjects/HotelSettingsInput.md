{
  "title": "HotelSettingsInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "context",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the context of the I/O codes (hotel, board, room and rates)",
      "args": null
    }
  ],
  "deprecatedFields": [
    {
      "typeString": "Boolean",
      "name": "useContext",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if you want use context, or not, by default is true.\n@deprecated(reason: \"deprecated from 2017-12-12. Redundant.\")",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "deprecated from 2017-12-12. Redundant.",
      "descriptionSplitted": {
        "date": "2017-12-12",
        "first": "Indicates if you want use context, or not, by default is true.\n@deprecated(reason: \"deprecated from",
        "second": "Redundant.\")"
      }
    },
    {
      "typeString": "String",
      "name": "connectUser",
      "url": "/travelgatex/reference/scalars/string",
      "description": " This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.\n@deprecated(reason: \"deprecated from 2018-03-19. Redundant.\")",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "deprecated from 2018-03-19. Redundant.",
      "descriptionSplitted": {
        "date": "2018-03-19",
        "first": " This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.\n@deprecated(reason: \"deprecated from",
        "second": "Redundant.\")"
      }
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelSettingsInput"
}
Settings that you can edit for this avail. Values are loaded by default in our Back Office.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
