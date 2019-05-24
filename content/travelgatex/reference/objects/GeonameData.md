{
  "title": "GeonameData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Geoname!",
      "name": "parent",
      "url": "/travelgatex/reference/objects/geoname",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country",
      "name": "country",
      "url": "/travelgatex/reference/scalars/country",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/destinationtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Coordinates!",
      "name": "coordinates",
      "url": "/travelgatex/reference/objects/coordinates",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Geoname",
      "description": null,
      "url": "/travelgatex/reference/objects/geoname"
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
