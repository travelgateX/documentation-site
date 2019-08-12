{
  "title": "PaymentType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": null,
      "url": "/travelgatex/reference/objects/hoteloptionsearch"
    }
  ],
  "enumValues": [
    {
      "name": "MERCHANT",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "DIRECT",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "CARD_BOOKING",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "CARD_CHECK_IN",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "PAYX",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "PaymentType",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
