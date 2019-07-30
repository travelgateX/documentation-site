{
  "title": "DestinationType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "DestinationData",
      "description": "Information about destinantion",
      "url": "/travelgatex/reference/objects/destinationdata"
    },
    {
      "name": "GeonameData",
      "description": "Geoname data, which contain a reference to his parent location",
      "url": "/travelgatex/reference/objects/geonamedata"
    }
  ],
  "enumValues": [
    {
      "name": "ZONE",
      "description": "Zone",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "CITY",
      "description": "City",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "COUNTRY",
      "description": "Country",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "DestinationType",
  "hideGithubLink": true
}
Indicates the type of destination
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
