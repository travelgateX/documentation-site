{
  "title": "HotelOptionSearch",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "supplierCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Supplier that offers this option.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "accessCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Access code of this option.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "market",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Market of this option.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Code of the hotel in the context selected.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelCodeSupplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Supplier's hotel code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelName",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Name of the hotel.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "boardCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Code of the board in the context selected.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "boardCodeSupplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Supplier's board code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentType!",
      "name": "paymentType",
      "url": "/travelgatex/reference/enums/paymenttype",
      "description": "Indicates the payment type of the option returned. Possible options: Merchant, Direct, Card Booking, Card check in and Mixed.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatusType!",
      "name": "status",
      "url": "/travelgatex/reference/enums/statustype",
      "description": "The possible values in status in response are Available (OK) or On Request (RQ).",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Occupancy!]!",
      "name": "occupancies",
      "url": "/travelgatex/reference/objects/occupancy",
      "description": "List of occupancies for the request",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Room!]!",
      "name": "rooms",
      "url": "/travelgatex/reference/objects/room",
      "description": "List of rooms of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/travelgatex/reference/objects/price",
      "description": "Specifies the prices (Gross, Net and Amount) of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Supplement!]",
      "name": "supplements",
      "url": "/travelgatex/reference/objects/supplement",
      "description": "List of supplements of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Surcharge!]",
      "name": "surcharges",
      "url": "/travelgatex/reference/objects/surcharge",
      "description": "List of surcharges of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/travelgatex/reference/enums/raterulestype",
      "description": "Specifies rate rules of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CancelPolicy",
      "name": "cancelPolicy",
      "url": "/travelgatex/reference/objects/cancelpolicy",
      "description": "Specifies cancel policies of the option returned.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "remarks",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Additional information about the option.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AddOns",
      "name": "addOns",
      "url": "/travelgatex/reference/objects/addons",
      "description": "Additional information about the option",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "token",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Token for Deep Link",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "id",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the quote key",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelOptionSearch"
}
An option includes hotel information, meal plan, total price, conditions and room description
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
