{
  "title": "Language",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelCriteriaSearchInput",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.\nYou must preload the other fields in our system by complete the fields absents.",
      "url": "/hotel-x/reference/inputobjects/hotelcriteriasearchinput"
    },
    {
      "name": "HotelCriteriaQuoteInput",
      "description": "The quote criteria contains the option reference id, block and language.",
      "url": "/hotel-x/reference/inputobjects/hotelcriteriaquoteinput"
    },
    {
      "name": "HotelCriteriaBookingInput",
      "description": "Criteria of book contains basic information to find a book or books.",
      "url": "/hotel-x/reference/inputobjects/hotelcriteriabookinginput"
    },
    {
      "name": "HotelXDefaultSettingsData",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxdefaultsettingsdata"
    },
    {
      "name": "Text",
      "description": "",
      "url": "/hotel-x/reference/objects/text"
    },
    {
      "name": "CriteriaSearch",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.",
      "url": "/hotel-x/reference/objects/criteriasearch"
    },
    {
      "name": "HotelXDefaultSettingsDataInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxdefaultsettingsdatainput"
    },
    {
      "name": "HotelBookInput",
      "description": "Criteria of book.",
      "url": "/hotel-x/reference/inputobjects/hotelbookinput"
    },
    {
      "name": "HotelCancelInput",
      "description": "Cancellation Criteria.",
      "url": "/hotel-x/reference/inputobjects/hotelcancelinput"
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
