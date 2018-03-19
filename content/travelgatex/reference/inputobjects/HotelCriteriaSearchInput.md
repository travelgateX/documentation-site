{
  "title": "HotelCriteriaSearchInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Date!",
      "name": "checkIn",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-in date for the booking.\nFormat: yyyy-MM-dd",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "checkOut",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-out, date for the booking.\nFormat: yyyy-MM-dd",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[String!]!",
      "name": "hotels",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains the list of hotels's ID.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[RoomInput!]!",
      "name": "occupancies",
      "url": "/travelgatex/reference/inputobjects/roominput",
      "description": "For multi room bookings, this array will contain multiple elements (rooms).\nFor each room you have to specify its own occupancy.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Language",
      "name": "language",
      "url": "/travelgatex/reference/scalars/language",
      "description": "Language to be used in request.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Currency",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": "Currency requested if supported by supplier.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Country",
      "name": "nationality",
      "url": "/travelgatex/reference/scalars/country",
      "description": "Nationality of the guest (use ISO3166_1_alfa_2).",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "market",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Targeted zone, country or point of sale to be used in request.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelCriteriaSearchInput"
}
Criteria of search contains destination, travel dates and the number of pax in each room.
You must preload the other fields in our system by complete the fields absents.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
