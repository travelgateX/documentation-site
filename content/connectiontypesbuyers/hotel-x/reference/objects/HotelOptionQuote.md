{
  "title": "HotelOptionQuote",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "optionRefId",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatusType!",
      "name": "status",
      "url": "/hotel-x/reference/enums/statustype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/hotel-x/reference/objects/price",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PriceChange",
      "name": "searchPrice",
      "url": "/hotel-x/reference/objects/pricechange",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CancelPolicy!",
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
      "typeString": "[Surcharge!]",
      "name": "surcharges",
      "url": "/hotel-x/reference/objects/surcharge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[PaymentCardType!]",
      "name": "cardTypes",
      "url": "/hotel-x/reference/enums/paymentcardtype",
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
    }
  ],
  "requireby": [
    {
      "name": "HotelQuote",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelquote"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelOptionQuote",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
