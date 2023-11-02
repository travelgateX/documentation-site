{
  "title": "HotelData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelCodeSupplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GiataData",
      "name": "giataData",
      "url": "/travelgatex/reference/objects/giatadata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelName",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "categoryCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Property",
      "name": "property",
      "url": "/travelgatex/reference/objects/property",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Deprecated from 2019-10-16. Redundant information",
      "descriptionSplitted": {
        "date": "2019-10-16",
        "first": "Deprecated from",
        "second": "Redundant information"
      },
      "deprecationDate": "2019-10-16",
      "typeName": "HotelData"
    },
    {
      "typeString": "String",
      "name": "chainCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "exclusiveDeal",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Location!",
      "name": "location",
      "url": "/travelgatex/reference/objects/location",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Contact",
      "name": "contact",
      "url": "/travelgatex/reference/objects/contact",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Int!]!",
      "name": "rank",
      "url": "/travelgatex/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[PaymentCardType!]",
      "name": "cardTypes",
      "url": "/travelgatex/reference/enums/paymentcardtype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AmenityStatic!]",
      "name": "amenities",
      "url": "/travelgatex/reference/objects/amenitystatic",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Media!]",
      "name": "medias",
      "url": "/travelgatex/reference/objects/media",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Description!]",
      "name": "descriptions",
      "url": "/travelgatex/reference/objects/description",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[DescriptionType!]",
          "name": "types",
          "url": "/travelgatex/reference/enums/descriptiontype",
          "description": null
        },
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": null
        }
      ]
    },
    {
      "typeString": "RoomConnection",
      "name": "rooms",
      "url": "/travelgatex/reference/objects/roomconnection",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PropertyType",
      "name": "propertyType",
      "url": "/travelgatex/reference/objects/propertytype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[MandatoryFee!]",
      "name": "mandatoryFees",
      "url": "/travelgatex/reference/objects/mandatoryfee",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CheckInformation",
      "name": "checkIn",
      "url": "/travelgatex/reference/objects/checkinformation",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CheckInformation",
      "name": "checkOut",
      "url": "/travelgatex/reference/objects/checkinformation",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXAmenityConnection",
      "name": "allAmenities",
      "url": "/travelgatex/reference/objects/hotelxamenityconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[HotelXMapOptionInput!]",
          "name": "mapOptions",
          "url": "/travelgatex/reference/inputobjects/hotelxmapoptioninput",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Hotel",
      "description": null,
      "url": "/travelgatex/reference/objects/hotel"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
