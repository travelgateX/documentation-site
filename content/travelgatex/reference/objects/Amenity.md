{
  "title": "Amenity",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Code",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ApplicationAreaType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/applicationareatype",
      "description": "Indicates the type of the amenity.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Text!]!",
      "name": "texts",
      "url": "/travelgatex/reference/interfaces/text",
      "description": "Contains the descriptive",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Amenity"
}
Something, such as a swimming pool or shopping centre, that is intended to make life more pleasant or comfortable for the people.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
