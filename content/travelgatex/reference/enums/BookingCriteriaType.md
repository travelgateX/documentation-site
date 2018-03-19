{
  "title": "BookingCriteriaType",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelCriteriaBookingInput",
      "description": "Criteria of book contains basic information to find a book or books.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriabookinginput"
    }
  ],
  "enumValues": [
    {
      "name": "DATES",
      "description": "Search by date range",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "REFERENCES",
      "description": "Search by reference codes",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "BookingCriteriaType"
}
Indicates the type of criteria in the request of the booking list
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
