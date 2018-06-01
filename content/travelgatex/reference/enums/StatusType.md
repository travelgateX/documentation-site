{
  "title": "StatusType",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": "An option includes hotel information, meal plan, total price, conditions and room description",
      "url": "/travelgatex/reference/objects/hoteloptionsearch"
    },
    {
      "name": "HotelOptionQuote",
      "description": "Contains information about quote(s)",
      "url": "/travelgatex/reference/objects/hoteloptionquote"
    }
  ],
  "enumValues": [
    {
      "name": "OK",
      "description": "The status of the avail is available",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "RQ",
      "description": "The status of the avail is On request",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "StatusType"
}
Options status
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
