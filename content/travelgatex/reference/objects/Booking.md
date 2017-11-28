{
  "title": "Booking",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelBooking",
      "name": "hotel",
      "url": "/travelgatex/reference/objects/hotelbooking",
      "description": "Returns detailed information about books, you can indicated a list of locators or a range date.",
      "isDeprecated": " ⚠️",
      "args": [
        {
          "typeString": "HotelCriteriaBookingInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriabookinginput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": "",
          "isDeprecated": ""
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

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
