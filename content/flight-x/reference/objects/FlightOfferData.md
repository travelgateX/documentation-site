{
  "title": "FlightOfferData",
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
      "typeString": "Supplier",
      "name": "supplier",
      "url": "/travelgatex/reference/objects/supplier",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AmountType",
      "name": "totalPrice",
      "url": "/flight-x/reference/objects/amounttype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[FlightOfferItem]",
      "name": "offeritems",
      "url": "/flight-x/reference/objects/flightofferitem",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FlightOffer",
      "description": null,
      "url": "/flight-x/reference/objects/flightoffer"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "FlightOfferData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
