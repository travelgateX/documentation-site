{
  "title": "Coordinates",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Float!",
      "name": "latitude",
      "url": "/travelgatex/reference/scalars/float",
      "description": "Latitude",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "longitude",
      "url": "/travelgatex/reference/scalars/float",
      "description": "Longitude",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Location",
      "description": "Indicates the location of the hotel.",
      "url": "/travelgatex/reference/objects/location"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Coordinates"
}
Geographical coordinates corresponding to a location.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
