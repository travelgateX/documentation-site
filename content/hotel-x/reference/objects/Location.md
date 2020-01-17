{
  "title": "Location",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "address",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "city",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "zipCode",
      "url": "/hotel-x/reference/scalars/string",
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
      "typeString": "Coordinates",
      "name": "coordinates",
      "url": "/hotel-x/reference/objects/coordinates",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationData",
      "name": "closestDestination",
      "url": "/hotel-x/reference/objects/destinationdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Airport!]",
      "name": "airports",
      "url": "/hotel-x/reference/objects/airport",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Geoname!]!",
      "name": "geoNames",
      "url": "/hotel-x/reference/objects/geoname",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "State",
      "name": "state",
      "url": "/hotel-x/reference/scalars/state",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelData",
      "description": null,
      "url": "/hotel-x/reference/objects/hoteldata"
    },
    {
      "name": "AirportData",
      "description": null,
      "url": "/hotel-x/reference/objects/airportdata"
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
