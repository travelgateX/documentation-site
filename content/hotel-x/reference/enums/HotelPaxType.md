{
  "title": "HotelPaxType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "MetadataCandidate",
      "description": null,
      "url": "/hotel-x/reference/objects/metadatacandidate"
    },
    {
      "name": "AgeRange",
      "description": null,
      "url": "/hotel-x/reference/objects/agerange"
    }
  ],
  "enumValues": [
    {
      "name": "ADULT",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "CHILD",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "INFANT",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "HotelPaxType",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
