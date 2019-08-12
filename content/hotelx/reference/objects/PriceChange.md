{
  "title": "PriceChange",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "currency",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "net",
      "url": "/hotelx/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "gross",
      "url": "/hotelx/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "binding",
      "url": "/hotelx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionQuote",
      "description": null,
      "url": "/hotelx/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": null,
      "url": "/hotelx/reference/objects/hotelbookingdetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PriceChange",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
