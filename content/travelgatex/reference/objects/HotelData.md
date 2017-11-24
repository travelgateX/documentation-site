{
  "title": "HotelData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Internal code to perform availability and/or supplier code.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Name.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "categoryCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Hotel category (for example number of stars).",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "exclusiveDeal",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates that the Hotel has an Exclusive Deal.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "MediaConnection",
      "name": "medias",
      "url": "/travelgatex/reference/objects/mediaconnection",
      "description": "",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "ApplicationArea",
          "name": "type",
          "url": "/travelgatex/reference/enums/applicationarea",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "Last",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "AmenityConnection",
      "name": "amenities",
      "url": "/travelgatex/reference/objects/amenityconnection",
      "description": "",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "Language",
          "name": "language",
          "url": "/travelgatex/reference/scalars/language",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "Last",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Information!",
      "name": "additionalInformation",
      "url": "/travelgatex/reference/interfaces/information",
      "description": "",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "Language",
          "name": "language",
          "url": "/travelgatex/reference/scalars/language",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Information!",
      "name": "generalDescription",
      "url": "/travelgatex/reference/interfaces/information",
      "description": "",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "Language",
          "name": "language",
          "url": "/travelgatex/reference/scalars/language",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Location!",
      "name": "location",
      "url": "/travelgatex/reference/objects/location",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Contact!",
      "name": "contact",
      "url": "/travelgatex/reference/objects/contact",
      "description": "Contact information.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Destination!",
      "name": "destination",
      "url": "/travelgatex/reference/objects/destination",
      "description": "Destination information.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Hotel",
      "description": "Hotel type",
      "url": "/travelgatex/reference/objects/hotel"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelData"
}
Hotel data
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
