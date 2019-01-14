{
  "title": "AirportData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Airport Code (IATA)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "The airport's name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Location",
      "name": "location",
      "url": "/travelgatex/reference/objects/location",
      "description": "The airport's location",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Airport",
      "description": "Airport Type",
      "url": "/travelgatex/reference/objects/airport"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AirportData",
  "hideGithubLink": true
}
Information about the airport
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
