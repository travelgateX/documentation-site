{
  "title": "ApplicationAreaType",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Amenity",
      "description": "Something, such as a swimming pool or shopping centre, that is intended to make life more pleasant or comfortable for the people.",
      "url": "/travelgatex/reference/objects/amenity"
    },
    {
      "name": "Media",
      "description": "Contains media information.",
      "url": "/travelgatex/reference/objects/media"
    }
  ],
  "enumValues": [
    {
      "name": "HOTEL",
      "description": "Apply at the hotel.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "ROOM",
      "description": "Apply in the hotel.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "SERVICE",
      "description": "Applies to a service.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "GENERAL",
      "description": "Applies in general.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "ApplicationAreaType"
}
Indicates where it applies
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
