{
  "title": "Search",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": [
    {
      "typeString": "HotelSearch",
      "name": "hotel",
      "url": "/travelgatex/reference/objects/hotelsearch",
      "description": "Available options of an hotel for a given date and itinerary. It does not filter different classes, times or\nfares. It will always retrieve all results returned by the suppliers. The availability request is very straight\nforward. It only requires the criteria of search (destination, travel dates and the number of pax in each room).\nBut you must preload the other fields in our system by complete the fields absents.",
      "isDeprecated": " ⚠️",
      "args": [
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelCriteriaSearchInput",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriasearchinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "FilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/filterinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": "",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Search"
}
Available options for a given date and itinerary. It does not filter different classes, times or
fares. It will always retrieve all results returned by the suppliers. The availability request is very straight
forward.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Require by

{{% graphql-require-by %}}
