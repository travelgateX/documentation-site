{
  "title": "Price",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotel-x/reference/scalars/currency",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "binding",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "net",
      "url": "/hotel-x/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "gross",
      "url": "/hotel-x/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Exchange!",
      "name": "exchange",
      "url": "/hotel-x/reference/objects/exchange",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Markup!]",
      "name": "markups",
      "url": "/hotel-x/reference/objects/markup",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": null,
      "url": "/hotel-x/reference/objects/hoteloptionsearch"
    },
    {
      "name": "Supplement",
      "description": null,
      "url": "/hotel-x/reference/objects/supplement"
    },
    {
      "name": "Surcharge",
      "description": null,
      "url": "/hotel-x/reference/objects/surcharge"
    },
    {
      "name": "RoomPrice",
      "description": null,
      "url": "/hotel-x/reference/objects/roomprice"
    },
    {
      "name": "PriceBreakdown",
      "description": null,
      "url": "/hotel-x/reference/objects/pricebreakdown"
    },
    {
      "name": "HotelOptionQuote",
      "description": null,
      "url": "/hotel-x/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelbookingdetail"
    },
    {
      "name": "BookingRoom",
      "description": null,
      "url": "/hotel-x/reference/objects/bookingroom"
    },
    {
      "name": "HotelCancelDetail",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelcanceldetail"
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
