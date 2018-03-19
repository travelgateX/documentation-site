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
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "city",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains the city",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "zipCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains the zipCode.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Country!",
      "name": "country",
      "url": "/travelgatex/reference/scalars/country",
      "description": "Country where is the Hotel.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Coordinates",
      "name": "coordinates",
      "url": "/travelgatex/reference/objects/coordinates",
      "description": "Geographical coordinates corresponding to a location.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "DestinationData!",
      "name": "closestDestination",
      "url": "/travelgatex/reference/objects/destinationdata",
      "description": "Closest destination",
      "isDeprecated": "",
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
Indicates the location of the hotel.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
