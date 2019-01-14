{
  "title": "HotelXDefaultSettingsData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "clientName",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Indicates the client that do the transaction.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "context",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the context of the I/O codes (hotel, board, room and rates)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Language!",
      "name": "language",
      "url": "/travelgatex/reference/scalars/language",
      "description": "Language to be used in request.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": "Currency requested if supported by supplier.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country!",
      "name": "nationality",
      "url": "/travelgatex/reference/scalars/country",
      "description": "Nationality of the guest (use ISO3166_1_alfa_2).",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "market",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Targeted zone, country or point of sale to be used in request.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Timeout!",
      "name": "timeout",
      "url": "/travelgatex/reference/objects/timeout",
      "description": "Group of timeouts to be used in the differents services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BusinessRules!",
      "name": "businessRules",
      "url": "/travelgatex/reference/objects/businessrules",
      "description": "Business rules.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "accesses",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Default acceses",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "cache",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Cache accesses",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[HotelXDefaultPluginStep!]",
      "name": "plugins",
      "url": "/travelgatex/reference/objects/hotelxdefaultpluginstep",
      "description": "Default plugins",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXDefaultSettings",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxdefaultsettings"
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
