{
  "title": "StatusType",
  "description": "",
  "weight": 1,
  "fields": null,
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
  "typename": "StatusType",
  "hideGithubLink": true
}
Indicartes options status
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
