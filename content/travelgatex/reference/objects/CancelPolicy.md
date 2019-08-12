{
  "title": "CancelPolicy",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "refundable",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[CancelPenalty!]",
      "name": "cancelPenalties",
      "url": "/travelgatex/reference/objects/cancelpenalty",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": null,
      "url": "/travelgatex/reference/objects/hoteloptionsearch"
    },
    {
      "name": "HotelOptionQuote",
      "description": null,
      "url": "/travelgatex/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CancelPolicy",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
