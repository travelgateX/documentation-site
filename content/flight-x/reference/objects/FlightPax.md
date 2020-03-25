{
  "title": "FlightPax",
  "description": "Passenger information as age and passegner type",
  "weight": 1,
  "fields": [
    {
      "typeString": "int!",
      "name": "age",
      "url": "/flight-x/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "IATA_PTC_CodeType",
      "name": "type",
      "url": "/flight-x/reference/enums/iata_ptc_codetype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "paxID",
      "url": "/flight-x/reference/scalars/id",
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
