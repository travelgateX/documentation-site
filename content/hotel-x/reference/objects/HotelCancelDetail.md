{
  "title": "HotelCancelDetail",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Reference",
      "name": "reference",
      "url": "/hotel-x/reference/objects/reference",
      "description": "Booking ID in the Supplier's system",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "cancelReference",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Cancellation ID in the Supplier's system",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BookStatusType",
      "name": "status",
      "url": "/hotel-x/reference/enums/bookstatustype",
      "description": "Booking Status.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Price",
      "name": "price",
      "url": "/hotel-x/reference/objects/price",
      "description": "Specifies the prices (Gross, Net and Amount) of the cancellation.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelBookingDetail",
      "name": "booking",
      "url": "/hotel-x/reference/objects/hotelbookingdetail",
      "description": "Information about the booking.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCancelPayload",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelcancelpayload"
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
