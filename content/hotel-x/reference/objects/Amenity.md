{
  "title": "Amenity",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ApplicationAreaType!",
      "name": "type",
      "url": "/hotel-x/reference/enums/applicationareatype",
      "description": "Indicates the type of Amenity.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]!",
      "name": "texts",
      "url": "/hotel-x/reference/objects/text",
      "description": "Contains the descriptive",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/hotel-x/reference/scalars/language",
          "description": ""
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Amenity",
  "hideGithubLink": true
}
An Amenity is defined as something intended to make life more pleasant or comfortable for people. Examples include: swimming pools, shopping centers, etc.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
