{
  "title": "Date",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
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
      "name": "PriceBreakdown",
      "description": "Information about daily price.",
      "url": "/travelgatex/reference/objects/pricebreakdown"
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
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/travelgatex/reference/objects/supplement"
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
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Date"
}
The Date type represents Date values. A good example might be a Hotel CheckIn Date.
In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: "2017-10-22".
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
