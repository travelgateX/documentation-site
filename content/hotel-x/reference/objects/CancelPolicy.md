{
  "title": "CancelPolicy",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "refundable",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[CancelPenalty!]",
      "name": "cancelPenalties",
      "url": "/hotel-x/reference/objects/cancelpenalty",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": null,
      "url": "/hotel-x/reference/objects/hoteloptionsearch"
    },
    {
      "name": "HotelOptionQuote",
      "description": null,
      "url": "/hotel-x/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelbookingdetail"
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
