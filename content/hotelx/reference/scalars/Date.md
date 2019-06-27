{
  "title": "Date",
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
      "name": "CriteriaSearch",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.",
      "url": "/hotelx/reference/objects/criteriasearch"
    },
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/hotelx/reference/objects/supplement"
    },
    {
      "name": "RatePlan",
      "description": "Information about the rate of the option returned.",
      "url": "/hotelx/reference/objects/rateplan"
    },
    {
      "name": "Promotion",
      "description": "Information about room promotions(offers).",
      "url": "/hotelx/reference/objects/promotion"
    },
    {
      "name": "PriceBreakdown",
      "description": "Information about daily price.",
      "url": "/hotelx/reference/objects/pricebreakdown"
    },
    {
      "name": "CriteriaBookingDatesInput",
      "description": "Criteria by dates",
      "url": "/hotelx/reference/inputobjects/criteriabookingdatesinput"
    },
    {
      "name": "BookingHotel",
      "description": "",
      "url": "/hotelx/reference/objects/bookinghotel"
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
