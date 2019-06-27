{
  "title": "Resort",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "code",
      "url": "/hotelx/reference/scalars/string",
      "description": "Specifies the resort code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "name",
      "url": "/hotelx/reference/scalars/string",
      "description": "Specifies the resort name.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "description",
      "url": "/hotelx/reference/scalars/string",
      "description": "Specifies the resort description.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/hotelx/reference/objects/supplement"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Resort",
  "hideGithubLink": true
}
Contains information about the Resort.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
