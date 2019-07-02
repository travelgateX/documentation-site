{
  "title": "Location",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "address",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Contains Hotel Address",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "city",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Contains the city",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "zipCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Contains the zipCode.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country!",
      "name": "country",
      "url": "/hotel-x/reference/scalars/country",
      "description": "Country where is the Hotel.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Coordinates",
      "name": "coordinates",
      "url": "/hotel-x/reference/objects/coordinates",
      "description": "Geographical coordinates corresponding to a location.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationData!",
      "name": "closestDestination",
      "url": "/hotel-x/reference/objects/destinationdata",
      "description": "Closest destination",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Airport!]",
      "name": "airports",
      "url": "/hotel-x/reference/objects/airport",
      "description": "Airports",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Geoname!]!",
      "name": "geoNames",
      "url": "/hotel-x/reference/objects/geoname",
      "description": "Detailed information about the destinations geonames",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/hotel-x/reference/objects/hoteldata"
    },
    {
      "name": "AirportData",
      "description": "Information about the airport",
      "url": "/hotel-x/reference/objects/airportdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Location",
  "hideGithubLink": true
}
Indicates the location of the hotel
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
