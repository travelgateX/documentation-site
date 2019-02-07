{
  "title": "HotelData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Internal code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Code to perform availability.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelCodeSupplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Native supplier hotel code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GiataData",
      "name": "giataData",
      "url": "/travelgatex/reference/objects/giatadata",
      "description": "Giata data stored in giata.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelName",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Name of the hotel in the Supplier selected.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "categoryCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Hotel category (for example number of stars).",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Property",
      "name": "property",
      "url": "/travelgatex/reference/objects/property",
      "description": "Indicates property type",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "chainCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Hotel chain code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "exclusiveDeal",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates that the Hotel has an Exclusive Deal.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Location!",
      "name": "location",
      "url": "/travelgatex/reference/objects/location",
      "description": "Indicates the location of the hotel",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Contact",
      "name": "contact",
      "url": "/travelgatex/reference/objects/contact",
      "description": "Contact cotains information about hotel contact.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Int!]!",
      "name": "rank",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Rank indicates the supplier categorization.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "cardTypes",
      "url": "/travelgatex/reference/scalars/string",
      "description": "List of credit cards",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Amenity!]",
      "name": "amenities",
      "url": "/travelgatex/reference/objects/amenity",
      "description": "Amenities",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Media!]",
      "name": "medias",
      "url": "/travelgatex/reference/objects/media",
      "description": "Medias",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Description!]",
      "name": "descriptions",
      "url": "/travelgatex/reference/objects/description",
      "description": "Descriptions",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[DescriptionType!]",
          "name": "types",
          "url": "/travelgatex/reference/enums/descriptiontype",
          "description": ""
        },
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Hotel",
      "description": "Hotel Type",
      "url": "/travelgatex/reference/objects/hotel"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelData",
  "hideGithubLink": true
}
Hotel data
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
