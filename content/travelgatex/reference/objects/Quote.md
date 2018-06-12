{
  "title": "Quote",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": [
    {
      "typeString": "HotelQuote",
      "name": "hotel",
      "url": "/travelgatex/reference/objects/hotelquote",
      "description": "Returns the total price and cancellation policies of the Option selected in the previous step (Search).",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "HotelCriteriaQuoteInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriaquoteinput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": ""
        }
      ],
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at HotelX"
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": "The query root of TravelgateX's GraphQL interface.",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Quote"
}
Returns the total price and cancellation policies of the Option selected in the previous step (Search).
## GraphQL schema definition

{{% graphql-schema-type %}}

## Required by

{{% graphql-require-by %}}
