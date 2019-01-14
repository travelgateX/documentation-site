{
  "title": "Language",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelCriteriaSearchInput",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.\nYou must preload the other fields in our system by complete the fields absents.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriasearchinput"
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
      "name": "HotelXDefaultSettingsData",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxdefaultsettingsdata"
    },
    {
      "name": "Text",
      "description": "",
      "url": "/travelgatex/reference/objects/text"
    },
    {
      "name": "CriteriaSearch",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.",
      "url": "/travelgatex/reference/objects/criteriasearch"
    },
    {
      "name": "HotelXDefaultSettingsDataInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxdefaultsettingsdatainput"
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
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Language",
  "hideGithubLink": true
}
The Language type represents Language values. A good example might be a Hotel Description Language.
In queries or mutations, Language fields have to be specified in ISO 639-1 format with enclosing double quotes "en".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
