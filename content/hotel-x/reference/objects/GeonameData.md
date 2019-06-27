{
  "title": "GeonameData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotelx/reference/scalars/id",
      "description": "location code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/hotelx/reference/scalars/string",
      "description": "name of location",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Geoname!",
      "name": "parent",
      "url": "/hotelx/reference/objects/geoname",
      "description": "Parent location, the top location is itself",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country",
      "name": "country",
      "url": "/hotelx/reference/scalars/country",
      "description": "ISO 3166-1 alpha-2 format country code with enclosing double quotes \"ES\"",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationType!",
      "name": "type",
      "url": "/hotelx/reference/enums/destinationtype",
      "description": "Indicates destination type, zone, city or country",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Coordinates!",
      "name": "coordinates",
      "url": "/hotelx/reference/objects/coordinates",
      "description": "Geographical coordinates corresponding to a location.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Geoname",
      "description": "Geoname type",
      "url": "/hotelx/reference/objects/geoname"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "GeonameData",
  "hideGithubLink": true
}
Geoname data, which contain a reference to his parent location
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
