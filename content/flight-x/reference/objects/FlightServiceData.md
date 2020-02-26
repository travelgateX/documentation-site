{
  "title": "FlightServiceData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/flight-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "type",
      "url": "/flight-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "description",
      "url": "/flight-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[FlightPax]!",
      "name": "pax",
      "url": "/flight-x/reference/objects/flightpax",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[FlightSegment!]!",
      "name": "segments",
      "url": "/flight-x/reference/objects/flightsegment",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "FlightSegmentWhereInput",
          "name": "where",
          "url": "/flight-x/reference/inputobjects/flightsegmentwhereinput",
          "description": "It has not been developed yet."
        },
        {
          "typeString": "FlightSegmentOrderByInput",
          "name": "orderBy",
          "url": "/flight-x/reference/inputobjects/flightsegmentorderbyinput",
          "description": "It has not been developed yet."
        }
      ]
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
  "typename": "FlightServiceData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
