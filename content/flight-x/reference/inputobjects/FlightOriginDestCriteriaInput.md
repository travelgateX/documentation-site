{
  "title": "FlightOriginDestCriteriaInput",
  "description": "The Origin and Destination airport/city pair wich restrict a passenger journey or a flight.",
  "weight": 1,
  "fields": [
    {
      "typeString": "Departure!",
      "name": "departure",
      "url": "/flight-x/reference/scalars/departure",
      "description": null,
      "args": null
    },
    {
      "typeString": "Arrival!",
      "name": "arrival",
      "url": "/flight-x/reference/scalars/arrival",
      "description": null,
      "args": null
    },
    {
      "typeString": "[DateTime!]",
      "name": "departureAt",
      "url": null,
      "description": "/flight-x/reference/scalars/datetime",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FlightOfferWhereInput",
      "description": null,
      "url": "/flight-x/reference/inputobjects/flightofferwhereinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "FlightOriginDestCriteriaInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
