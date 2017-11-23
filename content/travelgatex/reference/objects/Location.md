{
  "title": "Location",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "address",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Street Address",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "city",
      "url": "/travelgatex/reference/scalars/string",
      "description": "City",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "zipCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Zip Code",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Country!",
      "name": "country",
      "url": "/travelgatex/reference/scalars/country",
      "description": "Country ISO Code",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Geocode!",
      "name": "geocode",
      "url": "/travelgatex/reference/objects/geocode",
      "description": "Geocode",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/travelgatex/reference/objects/hoteldata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Location"
}
Location
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
