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
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Code to perform availability.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "hotelCodeSupplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Native supplier hotel code.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelName",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Name of the hotel in the Supplier selected.",
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
      "typeString": "Property",
      "name": "property",
      "url": "/travelgatex/reference/objects/property",
      "description": "Indicates property type",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "chainCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Hotel chain code",
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
      "typeString": "Location!",
      "name": "location",
      "url": "/travelgatex/reference/objects/location",
      "description": "Indicates the location of the hotel.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Contact",
      "name": "contact",
      "url": "/travelgatex/reference/objects/contact",
      "description": "Contact cotains information about hotel contact.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Int!]!",
      "name": "rank",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Rank indicates the supplier categorization.",
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
      "typeString": "[Amenity!]",
      "name": "amenities",
      "url": "/travelgatex/reference/objects/amenity",
      "description": "Amenities",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Media!]",
      "name": "medias",
      "url": "/travelgatex/reference/objects/media",
      "description": "Medias",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Description!]",
      "name": "descriptions",
      "url": "/travelgatex/reference/objects/description",
      "description": "Descriptions",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[DescriptionType!]",
          "name": "types",
          "url": "/travelgatex/reference/enums/descriptiontype",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Hotel",
      "description": "Hotel Type",
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
