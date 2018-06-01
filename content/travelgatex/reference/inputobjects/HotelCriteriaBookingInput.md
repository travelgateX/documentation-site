{
  "title": "HotelCriteriaBookingInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "accessCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Name of the access that have to use in the request.",
      "args": null
    },
    {
      "typeString": "Language",
      "name": "language",
      "url": "/travelgatex/reference/scalars/language",
      "description": "The language code.",
      "args": null
    },
    {
      "typeString": "BookingCriteriaType!",
      "name": "typeSearch",
      "url": "/travelgatex/reference/enums/bookingcriteriatype",
      "description": "The search type criteria.",
      "args": null
    },
    {
      "typeString": "CriteriaBookingReferencesInput",
      "name": "references",
      "url": "/travelgatex/reference/inputobjects/criteriabookingreferencesinput",
      "description": "The references criteria.",
      "args": null
    },
    {
      "typeString": "CriteriaBookingDatesInput",
      "name": "dates",
      "url": "/travelgatex/reference/inputobjects/criteriabookingdatesinput",
      "description": "The dates criteria.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelCriteriaBookingInput"
}
Criteria of book contains basic information to find a book or books.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
