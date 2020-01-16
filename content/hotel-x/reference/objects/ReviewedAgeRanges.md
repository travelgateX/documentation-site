{
  "title": "ReviewedAgeRanges",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Date!",
      "name": "reviewDate",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AgeRange!]!",
      "name": "ages",
      "url": "/hotel-x/reference/objects/agerange",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "MetadataRoomCandidates",
      "description": null,
      "url": "/hotel-x/reference/objects/metadataroomcandidates"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ReviewedAgeRanges",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
