{
  "title": "ApplicationAreaType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Amenity",
      "description": "An Amenity is defined as something intended to make life more pleasant or comfortable for people. Examples include: swimming pools, shopping centers, etc.",
      "url": "/hotel-x/reference/objects/amenity"
    },
    {
      "name": "Media",
      "description": "Contains media information.",
      "url": "/hotel-x/reference/objects/media"
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
  "typename": "ApplicationAreaType",
  "hideGithubLink": true
}
Indicates where it applies
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
