{
  "title": "Location",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "address",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "city",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "zipCode",
      "url": "/travelgatex/reference/scalars/string",
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
      "typeString": "Coordinates",
      "name": "coordinates",
      "url": "/travelgatex/reference/objects/coordinates",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationData",
      "name": "closestDestination",
      "url": "/travelgatex/reference/objects/destinationdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Airport!]",
      "name": "airports",
      "url": "/travelgatex/reference/objects/airport",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Geoname!]!",
      "name": "geoNames",
      "url": "/travelgatex/reference/objects/geoname",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelData",
      "description": null,
      "url": "/travelgatex/reference/objects/hoteldata"
    },
    {
      "name": "AirportData",
      "description": null,
      "url": "/travelgatex/reference/objects/airportdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Location",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
