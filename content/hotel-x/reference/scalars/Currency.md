{
  "title": "Currency",
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
      "name": "HotelXDefaultSettingsData",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxdefaultsettingsdata"
    },
    {
      "name": "HotelXCommonSettingsData",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxcommonsettingsdata"
    },
    {
      "name": "SettingsBaseInput",
      "description": "Contains the time out and business rules of a supplier or an access.",
      "url": "/hotel-x/reference/inputobjects/settingsbaseinput"
    },
    {
      "name": "CriteriaSearch",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.",
      "url": "/hotel-x/reference/objects/criteriasearch"
    },
    {
      "name": "Price",
      "description": "Price indicates the value of the room/option.\nSupplements and/or surcharges can be included into the price, and will be verified with nodes Supplements/Surcharges.",
      "url": "/hotel-x/reference/objects/price"
    },
    {
      "name": "Exchange",
      "description": "Provides information about the currency of original, and its rate applied over the results returned by the Supplier.",
      "url": "/hotel-x/reference/objects/exchange"
    },
    {
      "name": "Markup",
      "description": "Informs markup applied over supplier price.",
      "url": "/hotel-x/reference/objects/markup"
    },
    {
      "name": "Priceable",
      "description": "",
      "url": "/hotel-x/reference/interfaces/priceable"
    },
    {
      "name": "CancelPenalty",
      "description": "Contains information for cancellation penalities..",
      "url": "/hotel-x/reference/objects/cancelpenalty"
    },
    {
      "name": "CriteriaBookingReferencesInput",
      "description": "Criteria by references",
      "url": "/hotel-x/reference/inputobjects/criteriabookingreferencesinput"
    },
    {
      "name": "HotelXDefaultSettingsDataInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxdefaultsettingsdatainput"
    },
    {
      "name": "HotelXCommonSettingsDataInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxcommonsettingsdatainput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Currency",
  "hideGithubLink": true
}
The Currenty type represents Currency values. A good example might be a Rate Price Currency.
In queries or mutations, Currency fields have to be specified in ISO 4217 format with enclosing double quotes "EUR".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
