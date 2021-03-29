{
  "title": "HotelBookingDetail",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Reference!",
      "name": "reference",
      "url": "/hotel-x/reference/objects/reference",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Holder",
      "name": "holder",
      "url": "/hotel-x/reference/objects/holder",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BookingHotel",
      "name": "hotel",
      "url": "/hotel-x/reference/objects/bookinghotel",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Price",
      "name": "price",
      "url": "/hotel-x/reference/objects/price",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PriceChange",
      "name": "quotePrice",
      "url": "/hotel-x/reference/objects/pricechange",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CancelPolicy",
      "name": "cancelPolicy",
      "url": "/hotel-x/reference/objects/cancelpolicy",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "remarks",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BookStatusType!",
      "name": "status",
      "url": "/hotel-x/reference/enums/bookstatustype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "billingSupplierCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "payable",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AddOns",
      "name": "addOns",
      "url": "/hotel-x/reference/objects/addons",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentCard",
      "name": "paymentCard",
      "url": "/hotel-x/reference/objects/paymentcard",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookPayload",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelbookpayload"
    },
    {
      "name": "HotelCancelDetail",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelcanceldetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelBookingDetail",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
