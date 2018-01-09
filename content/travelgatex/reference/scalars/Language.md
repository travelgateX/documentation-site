{
  "title": "Language",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Information",
      "description": "",
      "url": "/travelgatex/reference/interfaces/information"
    },
    {
      "name": "HotelCriteriaSearchInput",
      "description": "Criteria of search contains destination, travel dates and the number of pax in each room.\nYou must preload the other fields in our system by complete the fields absents.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriasearchinput"
    },
    {
      "name": "CriteriaSearch",
      "description": "Criteria of search contains destination, travel dates and the number of pax in each room.",
      "url": "/travelgatex/reference/objects/criteriasearch"
    },
    {
      "name": "HotelCriteriaQuoteInput",
      "description": "The quote criteria contains the option reference id, block and language.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriaquoteinput"
    },
    {
      "name": "HotelCriteriaBookingInput",
      "description": "Criteria of book contains basic information to find a book or books.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriabookinginput"
    },
    {
      "name": "DefaultSettings",
      "description": "",
      "url": "/travelgatex/reference/objects/defaultsettings"
    },
    {
      "name": "HotelBookInput",
      "description": "Criteria of book.",
      "url": "/travelgatex/reference/inputobjects/hotelbookinput"
    },
    {
      "name": "HotelCancelInput",
      "description": "Cancellation Criteria.",
      "url": "/travelgatex/reference/inputobjects/hotelcancelinput"
    },
    {
      "name": "DefaultSettingsInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/defaultsettingsinput"
    },
    {
      "name": "HotelInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Language"
}
The Language type represents Language values. A good example might be a Hotel Description Language.
In queries or mutations, Language fields have to be specified in ISO 3166-1 alpha-2 format with enclosing double quotes "es".
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
