{
  "title": "CriteriaBookingDatesInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "DateType!",
      "name": "dateType",
      "url": "/travelgatex/reference/enums/datetype",
      "description": "Type of date. Can be Arrival or Booking date.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "start",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Start date.\nFormat: yyyy-MM-dd.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "end",
      "url": "/travelgatex/reference/scalars/date",
      "description": "End date.\nFormat: yyyy-MM-dd.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCriteriaBookingInput",
      "description": "Criteria of book contains basic information to find a book or books.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriabookinginput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CriteriaBookingDatesInput"
}
Criteria by dates
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
