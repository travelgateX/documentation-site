{
  "title": "Price",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotelx/reference/scalars/currency",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "binding",
      "url": "/hotelx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "net",
      "url": "/hotelx/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float",
      "name": "gross",
      "url": "/hotelx/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Exchange!",
      "name": "exchange",
      "url": "/hotelx/reference/objects/exchange",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Markup!]",
      "name": "markups",
      "url": "/hotelx/reference/objects/markup",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": null,
      "url": "/hotelx/reference/objects/hoteloptionsearch"
    },
    {
      "name": "Supplement",
      "description": null,
      "url": "/hotelx/reference/objects/supplement"
    },
    {
      "name": "Surcharge",
      "description": null,
      "url": "/hotelx/reference/objects/surcharge"
    },
    {
      "name": "RoomPrice",
      "description": null,
      "url": "/hotelx/reference/objects/roomprice"
    },
    {
      "name": "PriceBreakdown",
      "description": null,
      "url": "/hotelx/reference/objects/pricebreakdown"
    },
    {
      "name": "HotelOptionQuote",
      "description": null,
      "url": "/hotelx/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": null,
      "url": "/hotelx/reference/objects/hotelbookingdetail"
    },
    {
      "name": "BookingRoom",
      "description": null,
      "url": "/hotelx/reference/objects/bookingroom"
    },
    {
      "name": "HotelCancelDetail",
      "description": null,
      "url": "/hotelx/reference/objects/hotelcanceldetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Price",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
