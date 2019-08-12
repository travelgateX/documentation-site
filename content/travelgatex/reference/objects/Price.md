{
  "title": "Price",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "binding",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "net",
      "url": "/travelgatex/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float",
      "name": "gross",
      "url": "/travelgatex/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Exchange!",
      "name": "exchange",
      "url": "/travelgatex/reference/objects/exchange",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Markup!]",
      "name": "markups",
      "url": "/travelgatex/reference/objects/markup",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": null,
      "url": "/travelgatex/reference/objects/hoteloptionsearch"
    },
    {
      "name": "Supplement",
      "description": null,
      "url": "/travelgatex/reference/objects/supplement"
    },
    {
      "name": "Surcharge",
      "description": null,
      "url": "/travelgatex/reference/objects/surcharge"
    },
    {
      "name": "RoomPrice",
      "description": null,
      "url": "/travelgatex/reference/objects/roomprice"
    },
    {
      "name": "PriceBreakdown",
      "description": null,
      "url": "/travelgatex/reference/objects/pricebreakdown"
    },
    {
      "name": "HotelOptionQuote",
      "description": null,
      "url": "/travelgatex/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    },
    {
      "name": "BookingRoom",
      "description": null,
      "url": "/travelgatex/reference/objects/bookingroom"
    },
    {
      "name": "HotelCancelDetail",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelcanceldetail"
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
