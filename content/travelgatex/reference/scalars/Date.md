{
  "title": "Date",
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
      "name": "CriteriaSearch",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.",
      "url": "/travelgatex/reference/objects/criteriasearch"
    },
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/travelgatex/reference/objects/supplement"
    },
    {
      "name": "RatePlan",
      "description": "Information about the rate of the option returned.",
      "url": "/travelgatex/reference/objects/rateplan"
    },
    {
      "name": "Promotion",
      "description": "Information about room promotions(offers).",
      "url": "/travelgatex/reference/objects/promotion"
    },
    {
      "name": "PriceBreakdown",
      "description": "Information about daily price.",
      "url": "/travelgatex/reference/objects/pricebreakdown"
    },
    {
      "name": "CriteriaBookingDatesInput",
      "description": "Criteria by dates",
      "url": "/travelgatex/reference/inputobjects/criteriabookingdatesinput"
    },
    {
      "name": "BookingHotel",
      "description": "",
      "url": "/travelgatex/reference/objects/bookinghotel"
    },
    {
      "name": "PaymentXStoredCardData",
      "description": "",
      "url": "/travelgatex/reference/objects/paymentxstoredcarddata"
    },
    {
      "name": "PaymentXStoredCardInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/paymentxstoredcardinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Date",
  "hideGithubLink": true
}
The Date type represents Date values. A good example might be a Hotel CheckIn Date.
In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: "2017-10-22".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
