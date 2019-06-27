{
  "title": "HotelXDefaultSettingsData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "clientName",
      "url": "/hotelx/reference/scalars/id",
      "description": "Indicates the client that do the transaction.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "context",
      "url": "/hotelx/reference/scalars/string",
      "description": "Indicates the context of the I/O codes (hotel, board, room and rates)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Language!",
      "name": "language",
      "url": "/hotelx/reference/scalars/language",
      "description": "Language to be used in request.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotelx/reference/scalars/currency",
      "description": "Currency requested if supported by supplier.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country!",
      "name": "nationality",
      "url": "/hotelx/reference/scalars/country",
      "description": "Nationality of the guest (use ISO3166_1_alfa_2).",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "market",
      "url": "/hotelx/reference/scalars/string",
      "description": "Targeted zone, country or point of sale to be used in request.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Timeout!",
      "name": "timeout",
      "url": "/hotelx/reference/objects/timeout",
      "description": "Group of timeouts to be used in the differents services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BusinessRules!",
      "name": "businessRules",
      "url": "/hotelx/reference/objects/businessrules",
      "description": "Business rules.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "accesses",
      "url": "/hotelx/reference/scalars/string",
      "description": "Default acceses",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "cache",
      "url": "/hotelx/reference/scalars/string",
      "description": "Cache accesses",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[HotelXDefaultPluginStep!]",
      "name": "plugins",
      "url": "/hotelx/reference/objects/hotelxdefaultpluginstep",
      "description": "Default plugins",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXDefaultSettings",
      "description": "",
      "url": "/hotelx/reference/objects/hotelxdefaultsettings"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXDefaultSettingsData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
