{
  "title": "Location",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "address",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains Hotel Address",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "city",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains the city",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "zipCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains the zipCode.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country!",
      "name": "country",
      "url": "/travelgatex/reference/scalars/country",
      "description": "Country where is the Hotel.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Coordinates",
      "name": "coordinates",
      "url": "/travelgatex/reference/objects/coordinates",
      "description": "Geographical coordinates corresponding to a location.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationData!",
      "name": "closestDestination",
      "url": "/travelgatex/reference/objects/destinationdata",
      "description": "Closest destination",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/travelgatex/reference/objects/hoteldata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Location"
}
Indicates the location of the hotel
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
