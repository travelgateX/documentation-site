{
  "title": "HotelCancelDetail",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Reference",
      "name": "reference",
      "url": "/hotelx/reference/objects/reference",
      "description": "Booking ID in the Supplier's system",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "cancelReference",
      "url": "/hotelx/reference/scalars/string",
      "description": "Cancellation ID in the Supplier's system",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BookStatusType",
      "name": "status",
      "url": "/hotelx/reference/enums/bookstatustype",
      "description": "Booking Status.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Price",
      "name": "price",
      "url": "/hotelx/reference/objects/price",
      "description": "Specifies the prices (Gross, Net and Amount) of the cancellation.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelBookingDetail",
      "name": "booking",
      "url": "/hotelx/reference/objects/hotelbookingdetail",
      "description": "Information about the booking.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCancelPayload",
      "description": "",
      "url": "/hotelx/reference/objects/hotelcancelpayload"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelCancelDetail",
  "hideGithubLink": true
}
Contains information about cancel
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
