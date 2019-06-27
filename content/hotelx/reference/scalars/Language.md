{
  "title": "Language",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelCriteriaSearchInput",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.\nYou must preload the other fields in our system by complete the fields absents.",
      "url": "/hotelx/reference/inputobjects/hotelcriteriasearchinput"
    },
    {
      "name": "HotelCriteriaQuoteInput",
      "description": "The quote criteria contains the option reference id, block and language.",
      "url": "/hotelx/reference/inputobjects/hotelcriteriaquoteinput"
    },
    {
      "name": "HotelCriteriaBookingInput",
      "description": "Criteria of book contains basic information to find a book or books.",
      "url": "/hotelx/reference/inputobjects/hotelcriteriabookinginput"
    },
    {
      "name": "HotelXDefaultSettingsData",
      "description": "",
      "url": "/hotelx/reference/objects/hotelxdefaultsettingsdata"
    },
    {
      "name": "Text",
      "description": "",
      "url": "/hotelx/reference/objects/text"
    },
    {
      "name": "CriteriaSearch",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.",
      "url": "/hotelx/reference/objects/criteriasearch"
    },
    {
      "name": "HotelXDefaultSettingsDataInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxdefaultsettingsdatainput"
    },
    {
      "name": "HotelBookInput",
      "description": "Criteria of book.",
      "url": "/hotelx/reference/inputobjects/hotelbookinput"
    },
    {
      "name": "HotelCancelInput",
      "description": "Cancellation Criteria.",
      "url": "/hotelx/reference/inputobjects/hotelcancelinput"
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
