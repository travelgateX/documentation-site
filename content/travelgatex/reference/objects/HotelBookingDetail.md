{
  "title": "HotelBookingDetail",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Reference!",
      "name": "reference",
      "url": "/travelgatex/reference/objects/reference",
      "description": "Booking ID in the Supplier's system",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Holder",
      "name": "holder",
      "url": "/travelgatex/reference/objects/holder",
      "description": "Holder's name and surname",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "BookingHotel",
      "name": "hotel",
      "url": "/travelgatex/reference/objects/bookinghotel",
      "description": "Information about the hotel.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Price",
      "name": "price",
      "url": "/travelgatex/reference/objects/price",
      "description": "Specifies the prices (Gross, Net and Amount) of the option returned.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "CancelPolicy",
      "name": "cancelPolicy",
      "url": "/travelgatex/reference/objects/cancelpolicy",
      "description": "Specifies cancel policies of the book returned.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "remarks",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Additional information about the book.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "BookStatusType!",
      "name": "status",
      "url": "/travelgatex/reference/enums/bookstatustype",
      "description": "Booking Status.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "payable",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Payable.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "AddOns",
      "name": "addOns",
      "url": "/travelgatex/reference/objects/addons",
      "description": "Extra information about the option.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookPayload",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelbookpayload"
    },
    {
      "name": "HotelCancelDetail",
      "description": "Contains information about cancel",
      "url": "/travelgatex/reference/objects/hotelcanceldetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelBookingDetail"
}
Contains information about booking.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
