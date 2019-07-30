{
  "title": "Price",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotel-x/reference/scalars/currency",
      "description": "Currency code indicating which currency should be paid.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "binding",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": "It indicates if the price indicated in the gross must be respected.\nThat is, the customer can not sell the room / option at a price lower than that established by the supplier.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "net",
      "url": "/hotel-x/reference/scalars/float",
      "description": "Indicates the net price that the customer must pay to the supplier.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float",
      "name": "gross",
      "url": "/hotel-x/reference/scalars/float",
      "description": "Indicates the retail price that the supplier sells to the customer.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Exchange!",
      "name": "exchange",
      "url": "/hotel-x/reference/objects/exchange",
      "description": "Provides information about the currency of original, and its rate applied over the results returned by the Supplier.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Markup!]",
      "name": "markups",
      "url": "/hotel-x/reference/objects/markup",
      "description": "Informs markup applied over supplier price.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": "An option includes hotel information, meal plan, total price, conditions and room description",
      "url": "/hotel-x/reference/objects/hoteloptionsearch"
    },
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/hotel-x/reference/objects/supplement"
    },
    {
      "name": "Surcharge",
      "description": "Surcharge that it can be or it is already added to the option returned. Contains all the information about the surcharge.",
      "url": "/hotel-x/reference/objects/surcharge"
    },
    {
      "name": "RoomPrice",
      "description": "Specifies the room price.",
      "url": "/hotel-x/reference/objects/roomprice"
    },
    {
      "name": "PriceBreakdown",
      "description": "Information about daily price.",
      "url": "/hotel-x/reference/objects/pricebreakdown"
    },
    {
      "name": "HotelOptionQuote",
      "description": "Contains information about quote(s)",
      "url": "/hotel-x/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking",
      "url": "/hotel-x/reference/objects/hotelbookingdetail"
    },
    {
      "name": "BookingRoom",
      "description": "",
      "url": "/hotel-x/reference/objects/bookingroom"
    },
    {
      "name": "HotelCancelDetail",
      "description": "Contains information about cancel",
      "url": "/hotel-x/reference/objects/hotelcanceldetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Price",
  "hideGithubLink": true
}
Price indicates the value of the room/option.
Supplements and/or surcharges can be included into the price, and will be verified with nodes Supplements/Surcharges.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
