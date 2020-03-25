{
  "title": "FlightOfferItemData",
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
      "typeString": "FlightPrice!",
      "name": "price",
      "url": "/flight-x/reference/objects/flightprice",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "FlightService!",
      "name": "service",
      "url": "/flight-x/reference/objects/flightservice",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FlightOfferItem",
      "description": null,
      "url": "/flight-x/reference/objects/flightofferitem"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "FlightOfferItemData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
