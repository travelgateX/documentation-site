{
  "title": "Booking",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": [
    {
      "typeString": "HotelBooking",
      "name": "hotel",
      "url": "/travelgatex/reference/objects/hotelbooking",
      "description": "Returns detailed information about books, you can indicated a list of locators or a range date.",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "HotelCriteriaBookingInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriabookinginput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": "",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Booking"
}
Returns detailed information about books.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Require by

{{% graphql-require-by %}}
