{
  "title": "Query",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AdminQuery",
      "name": "admin",
      "url": "/travelgatex/reference/objects/adminquery",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXQuery",
      "name": "hotelX",
      "url": "/travelgatex/reference/objects/hotelxquery",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatsQuery",
      "name": "stats",
      "url": "/travelgatex/reference/objects/statsquery",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "MappeaQuery",
      "name": "mappea",
      "url": "/travelgatex/reference/objects/mappeaquery",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": [
    {
      "typeString": "Search!",
      "name": "search",
      "url": "/travelgatex/reference/objects/search",
      "description": "Available options for a given date and itinerary.",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at HotelX"
    },
    {
      "typeString": "Quote!",
      "name": "quote",
      "url": "/travelgatex/reference/objects/quote",
      "description": "Returns the total price and cancellation policies of the Option selected in the previous step (Search).",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at HotelX"
    },
    {
      "typeString": "Booking",
      "name": "booking",
      "url": "/travelgatex/reference/objects/booking",
      "description": "Returns detailed information about books.",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at HotelX"
    },
    {
      "typeString": "DefaultSettings",
      "name": "defaultSettings",
      "url": "/travelgatex/reference/objects/defaultsettings",
      "description": "Reads defaultSettings of the given group",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ],
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at Admin"
    },
    {
      "typeString": "Mapping!",
      "name": "mapping",
      "url": "/travelgatex/reference/objects/mapping",
      "description": "Returns the mapping for a group, is necessary specify the group.",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ],
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at Admin"
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Query"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
