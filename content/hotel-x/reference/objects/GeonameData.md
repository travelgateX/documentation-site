{
  "title": "GeonameData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Geoname!",
      "name": "parent",
      "url": "/hotel-x/reference/objects/geoname",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country",
      "name": "country",
      "url": "/hotel-x/reference/scalars/country",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "type",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Coordinates!",
      "name": "coordinates",
      "url": "/hotel-x/reference/objects/coordinates",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Geoname",
      "description": null,
      "url": "/hotel-x/reference/objects/geoname"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "GeonameData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
