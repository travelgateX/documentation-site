{
  "title": "TransportDeparture",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "LocationCode",
      "name": "location",
      "url": "/flight-x/reference/scalars/locationcode",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "AircraftScheduled",
      "url": "/flight-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FlightSegment",
      "description": null,
      "url": "/flight-x/reference/objects/flightsegment"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "TransportDeparture",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
