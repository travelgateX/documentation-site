{
  "title": "PaymentType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": "An option includes hotel information, meal plan, total price, conditions and room description",
      "url": "/hotel-x/reference/objects/hoteloptionsearch"
    }
  ],
  "enumValues": [
    {
      "name": "MERCHANT",
      "description": "The payment is managed by the supplier.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "DIRECT",
      "description": "The payment is made straight to the actual payee, without sending it through an intermediary or a third party.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "CARD_BOOKING",
      "description": "The payment is managed by the supplier. The payment is effectuated at the time of booking.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "CARD_CHECK_IN",
      "description": "The payment is managed by the supplier. The payment is effectuated at check in in the hotel.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "PaymentType",
  "hideGithubLink": true
}
Options payment type
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
