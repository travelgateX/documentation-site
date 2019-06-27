{
  "title": "CancelPolicy",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "refundable",
      "url": "/hotelx/reference/scalars/boolean",
      "description": "Indicates if the option is refundable or non-refundable",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[CancelPenalty!]",
      "name": "cancelPenalties",
      "url": "/hotelx/reference/objects/cancelpenalty",
      "description": "List of cancellation penalties",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": "An option includes hotel information, meal plan, total price, conditions and room description",
      "url": "/hotelx/reference/objects/hoteloptionsearch"
    },
    {
      "name": "HotelOptionQuote",
      "description": "Contains information about quote(s)",
      "url": "/hotelx/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking",
      "url": "/hotelx/reference/objects/hotelbookingdetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CancelPolicy",
  "hideGithubLink": true
}
Information about a policy cancellation.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
