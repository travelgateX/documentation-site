{
  "title": "Price",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": "Currency code indicating which currency should be paid.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "binding",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "It indicates if the price indicated in the gross must be respected.\nThat is, the customer can not sell the room / option at a price lower than that established by the supplier.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "net",
      "url": "/travelgatex/reference/scalars/float",
      "description": "Indicates the net price that the customer must pay to the supplier.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float",
      "name": "gross",
      "url": "/travelgatex/reference/scalars/float",
      "description": "Indicates the retail price that the supplier sells to the customer.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Exchange!",
      "name": "exchange",
      "url": "/travelgatex/reference/objects/exchange",
      "description": "Informs about the currency of origin, and the rate applied over result returned by the supplier.\nThis information is mandatory.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Markup!]",
      "name": "markups",
      "url": "/travelgatex/reference/objects/markup",
      "description": "Informs markup applied over supplier price.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": "An option includes hotel information, meal plan, total price, conditions and room description.",
      "url": "/travelgatex/reference/objects/hoteloptionsearch"
    },
    {
      "name": "RoomPrice",
      "description": "Specifies the room price.",
      "url": "/travelgatex/reference/objects/roomprice"
    },
    {
      "name": "PriceBreakdown",
      "description": "Information about daily price.",
      "url": "/travelgatex/reference/objects/pricebreakdown"
    },
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/travelgatex/reference/objects/supplement"
    },
    {
      "name": "Surcharge",
      "description": "Surcharge that it can be or it is already added to the option returned. Contains all the information about the surcharge.",
      "url": "/travelgatex/reference/objects/surcharge"
    },
    {
      "name": "HotelOptionQuote",
      "description": "Contains information about quote.",
      "url": "/travelgatex/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking.",
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    },
    {
      "name": "BookingRoom",
      "description": "",
      "url": "/travelgatex/reference/objects/bookingroom"
    },
    {
      "name": "HotelCancelDetail",
      "description": "Contains information about cancel",
      "url": "/travelgatex/reference/objects/hotelcanceldetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Price"
}
Price indicates the value of the room/option.
Supplements and/or surcharges could be or not included into the price, will be verified with the nodes Supplements/Surcharges.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
