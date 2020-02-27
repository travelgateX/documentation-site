{
  "title": "FlightSegment",
  "description": "Transportation of a passenger on a Dated Operating Segment",
  "weight": 1,
  "fields": [
    {
      "typeString": "TransportArrival!",
      "name": "arrival",
      "url": "/flight-x/reference/objects/transportarrival",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "TransportDeparture!",
      "name": "departure",
      "url": "/flight-x/reference/objects/transportdeparture",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AirlineCode",
      "name": "carrier",
      "url": "/flight-x/reference/scalars/airlinecode",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "FlightNumber",
      "name": "flightNumber",
      "url": "/flight-x/reference/scalars/flightnumber",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FlightServiceData",
      "description": null,
      "url": "/flight-x/reference/objects/flightservicedata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "FlightPax",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
