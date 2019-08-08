{
  "title": "BookingHotel",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Date",
      "name": "creationDate",
      "url": "/hotelx/reference/scalars/date",
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
      "url": "/hotelx/reference/scalars/date",
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
      "url": "/hotelx/reference/scalars/date",
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
      "url": "/hotelx/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "start",
      "url": "/hotelx/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "end",
      "url": "/hotelx/reference/scalars/date",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelCode",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelName",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "boardCode",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Occupancy!]",
      "name": "occupancies",
      "url": "/hotelx/reference/objects/occupancy",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[BookingRoom!]",
      "name": "rooms",
      "url": "/hotelx/reference/objects/bookingroom",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookingDetail",
      "description": null,
      "url": "/hotelx/reference/objects/hotelbookingdetail"
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
