{
  "title": "BookingHotel",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Date",
      "name": "creationDate",
      "url": "/hotel-x/reference/scalars/date",
      "description": "Creation date of the booking.\nFormat: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkIn",
      "url": "/hotel-x/reference/scalars/date",
      "description": "Check-in date for booking\nFormat: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkOut",
      "url": "/hotel-x/reference/scalars/date",
      "description": "Check-out date for the booking.\nFormat: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Code of the hotel in the context selected.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelName",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Name of the hotel.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "boardCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Code of the board in the context selected.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Occupancy!]",
      "name": "occupancies",
      "url": "/hotel-x/reference/objects/occupancy",
      "description": "List of occupancies for the request",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[BookingRoom!]",
      "name": "rooms",
      "url": "/hotel-x/reference/objects/bookingroom",
      "description": "List of rooms.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking",
      "url": "/hotel-x/reference/objects/hotelbookingdetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "BookingHotel",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
