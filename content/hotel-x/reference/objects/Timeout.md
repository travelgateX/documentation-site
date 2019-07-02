{
  "title": "Timeout",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "search",
      "url": "/hotel-x/reference/scalars/int",
      "description": "Milliseconds before the search connection is closed.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "quote",
      "url": "/hotel-x/reference/scalars/int",
      "description": "Milliseconds before the quote connection is closed.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "book",
      "url": "/hotel-x/reference/scalars/int",
      "description": "Milliseconds before the book connection is closed.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXDefaultSettingsData",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxdefaultsettingsdata"
    },
    {
      "name": "HotelXCommonSettingsData",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxcommonsettingsdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Timeout",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
