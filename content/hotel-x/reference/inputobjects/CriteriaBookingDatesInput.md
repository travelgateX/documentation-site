{
  "title": "CriteriaBookingDatesInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "DateType!",
      "name": "dateType",
      "url": "/hotel-x/reference/enums/datetype",
      "description": "Type of date. Can be Arrival or Booking date.",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "start",
      "url": "/hotel-x/reference/scalars/date",
      "description": "Start date.\nFormat: YYYY-MM-DD.",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "end",
      "url": "/hotel-x/reference/scalars/date",
      "description": "End date.\nFormat: YYYY-MM-DD.",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCriteriaBookingInput",
      "description": "Criteria of book contains basic information to find a book or books.",
      "url": "/hotel-x/reference/inputobjects/hotelcriteriabookinginput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CriteriaBookingDatesInput",
  "hideGithubLink": true
}
Criteria by dates
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
