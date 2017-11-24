{
  "title": "HotelCancelDetail",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Reference",
      "name": "reference",
      "url": "/travelgatex/reference/objects/reference",
      "description": "Booking ID in the Supplier's system",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "cancelReference",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Cancellation ID in the Supplier's system",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "BookStatusType",
      "name": "status",
      "url": "/travelgatex/reference/enums/bookstatustype",
      "description": "Booking Status.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Price",
      "name": "price",
      "url": "/travelgatex/reference/objects/price",
      "description": "Specifies the prices (Gross, Net and Amount) of the cancellation.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "HotelBookingDetail",
      "name": "booking",
      "url": "/travelgatex/reference/objects/hotelbookingdetail",
      "description": "Information about the booking.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCancelPayload",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelcancelpayload"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelCancelDetail"
}
Contains information about cancel
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
