{
  "title": "HotelCriteriaSearchInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Date!",
      "name": "checkIn",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-in date for booking\nFormat: YYYY-MM-DD",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "checkOut",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-out, booking date\nFormat: YYYY-MM-DD",
      "args": null
    },
    {
      "typeString": "[String!]!",
      "name": "hotels",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Hotel Codes.",
      "args": null
    },
    {
      "typeString": "[RoomInput!]!",
      "name": "occupancies",
      "url": "/travelgatex/reference/inputobjects/roominput",
      "description": "For multi-room bookings, this array will contain multiple elements (rooms).\nFor each room you have to specify its own occupancy.",
      "args": null
    },
    {
      "typeString": "Language",
      "name": "language",
      "url": "/travelgatex/reference/scalars/language",
      "description": "Language to be used in request",
      "args": null
    },
    {
      "typeString": "Currency",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": "Currency requested if supported by supplier",
      "args": null
    },
    {
      "typeString": "Country",
      "name": "nationality",
      "url": "/travelgatex/reference/scalars/country",
      "description": "Nationality of the guest (use ISO3166_1_alfa_2)",
      "args": null
    },
    {
      "typeString": "String",
      "name": "market",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Targeted zone, country or point-ofsale-to be used in request.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelCriteriaSearchInput"
}
Search criteria contains destination, travel dates and the number of pax in each room.
You must preload the other fields in our system by complete the fields absents.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
