{
  "title": "HotelOptionSearch",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "supplierCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Supplier that offers this option.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "accessCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Access code of this option.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "market",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Market of this option.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Code of the hotel in the context selected.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelCodeSupplier",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Supplier's hotel code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelName",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Name of the hotel.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "boardCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Code of the board in the context selected.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "boardCodeSupplier",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Supplier's board code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentType!",
      "name": "paymentType",
      "url": "/hotel-x/reference/enums/paymenttype",
      "description": "Indicates the payment type of the option returned. Possible options: Merchant, Direct, Card Booking, Card check in and Mixed.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatusType!",
      "name": "status",
      "url": "/hotel-x/reference/enums/statustype",
      "description": "The possible values in status in response are Available (OK) or On Request (RQ).",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Occupancy!]!",
      "name": "occupancies",
      "url": "/hotel-x/reference/objects/occupancy",
      "description": "List of occupancies for the request",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Room!]!",
      "name": "rooms",
      "url": "/hotel-x/reference/objects/room",
      "description": "List of rooms of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/hotel-x/reference/objects/price",
      "description": "Specifies the prices (Gross, Net and Amount) of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Supplement!]",
      "name": "supplements",
      "url": "/hotel-x/reference/objects/supplement",
      "description": "List of supplements of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Surcharge!]",
      "name": "surcharges",
      "url": "/hotel-x/reference/objects/surcharge",
      "description": "List of surcharges of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/hotel-x/reference/enums/raterulestype",
      "description": "Specifies rate rules of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CancelPolicy",
      "name": "cancelPolicy",
      "url": "/hotel-x/reference/objects/cancelpolicy",
      "description": "Specifies cancel policies of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "remarks",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Additional information about the option.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AddOns",
      "name": "addOns",
      "url": "/hotel-x/reference/objects/addons",
      "description": "Additional information about the option",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "token",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Token for Deep Link",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "id",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Indicates the quote key",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelOptionSearch",
  "hideGithubLink": true
}
An option includes hotel information, meal plan, total price, conditions and room description
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
