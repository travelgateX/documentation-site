{
  "title": "GeonameData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotelx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Geoname!",
      "name": "parent",
      "url": "/hotelx/reference/objects/geoname",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country",
      "name": "country",
      "url": "/hotelx/reference/scalars/country",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "type",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Coordinates!",
      "name": "coordinates",
      "url": "/hotelx/reference/objects/coordinates",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Geoname",
      "description": null,
      "url": "/hotelx/reference/objects/geoname"
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
