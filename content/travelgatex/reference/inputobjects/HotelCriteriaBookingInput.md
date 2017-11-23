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
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Language",
      "name": "language",
      "url": "/travelgatex/reference/scalars/language",
      "description": "The language code.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "BookingCriteriaType!",
      "name": "typeSearch",
      "url": "/travelgatex/reference/enums/bookingcriteriatype",
      "description": "The search type criteria.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "CriteriaBookingReferencesInput",
      "name": "references",
      "url": "/travelgatex/reference/inputobjects/criteriabookingreferencesinput",
      "description": "The references criteria.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "CriteriaBookingDatesInput",
      "name": "dates",
      "url": "/travelgatex/reference/inputobjects/criteriabookingdatesinput",
      "description": "The dates criteria.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelCriteriaBookingInput"
}
Criteria of book contains basic information to find a book or books.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
