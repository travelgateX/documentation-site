{
  "title": "HotelOptionQuote",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "optionRefId",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the valuation key",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "StatusType!",
      "name": "status",
      "url": "/travelgatex/reference/enums/statustype",
      "description": "The possible values in status in response are Available (OK) or On Request (RQ).",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/travelgatex/reference/objects/price",
      "description": "Specifies the prices (Gross, Net and Amount) of the option returned.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "CancelPolicy!",
      "name": "cancelPolicy",
      "url": "/travelgatex/reference/objects/cancelpolicy",
      "description": "Specifies cancel policies of the option returned.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "remarks",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Additional information about the option.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Surcharge!]",
      "name": "surcharges",
      "url": "/travelgatex/reference/objects/surcharge",
      "description": "List of surcharges of the option returned.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "cardTypes",
      "url": "/travelgatex/reference/scalars/string",
      "description": "List of credit cards",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "AddOns",
      "name": "addOns",
      "url": "/travelgatex/reference/objects/addons",
      "description": "Extra information about the option.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelQuote",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelquote"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelOptionQuote"
}
Contains information about quote.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
