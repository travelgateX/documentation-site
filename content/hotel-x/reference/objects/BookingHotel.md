{
  "title": "BookingHotel",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Date",
      "name": "creationDate",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Incorrect date format.",
      "descriptionSplitted": {
        "date": "2018-02-28",
        "first": "deprecated from",
        "second": "Incorrect date format."
      },
      "deprecationDate": "2018-02-28",
      "typeName": "BookingHotel"
    },
    {
      "typeString": "Date",
      "name": "checkIn",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Incorrect date format.",
      "descriptionSplitted": {
        "date": "2018-02-28",
        "first": "deprecated from",
        "second": "Incorrect date format."
      },
      "deprecationDate": "2018-02-28",
      "typeName": "BookingHotel"
    },
    {
      "typeString": "Date",
      "name": "checkOut",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Incorrect date format.",
      "descriptionSplitted": {
        "date": "2018-02-28",
        "first": "deprecated from",
        "second": "Incorrect date format."
      },
      "deprecationDate": "2018-02-28",
      "typeName": "BookingHotel"
    },
    {
      "typeString": "Date",
      "name": "bookingDate",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "start",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "end",
      "url": "/hotel-x/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelName",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "boardCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Occupancy!]",
      "name": "occupancies",
      "url": "/hotel-x/reference/objects/occupancy",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[BookingRoom!]",
      "name": "rooms",
      "url": "/hotel-x/reference/objects/bookingroom",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookingDetail",
      "description": null,
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
