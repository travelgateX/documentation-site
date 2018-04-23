{
  "title": "CancelPolicy",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "refundable",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the option is refundable or non-refundable",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[CancelPenalty!]",
      "name": "cancelPenalties",
      "url": "/travelgatex/reference/objects/cancelpenalty",
      "description": "List of cancellation penalties",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": "An option includes hotel information, meal plan, total price, conditions and room description",
      "url": "/travelgatex/reference/objects/hoteloptionsearch"
    },
    {
      "name": "HotelOptionQuote",
      "description": "Contains information about quote",
      "url": "/travelgatex/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking",
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CancelPolicy"
}
Information about a policy cancellation.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
