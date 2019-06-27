{
  "title": "HotelXDefaultSettingsDataInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "clientName",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Indicates the client's name that do the transaction.",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "context",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the context of the I/O codes (hotel, board, room and rates)",
      "args": null
    },
    {
      "typeString": "Language!",
      "name": "language",
      "url": "/travelgatex/reference/scalars/language",
      "description": "Language to be used in request.",
      "args": null
    },
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": "Currency requested if supported by supplier.",
      "args": null
    },
    {
      "typeString": "Country!",
      "name": "nationality",
      "url": "/travelgatex/reference/scalars/country",
      "description": "Nationality of the guest (use ISO3166_1_alfa_2).",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "market",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Targeted zone, country or point of sale to be used in request.",
      "args": null
    },
    {
      "typeString": "TimeoutInput!",
      "name": "timeout",
      "url": "/travelgatex/reference/inputobjects/timeoutinput",
      "description": "Group of timeouts to be used in the differents services",
      "args": null
    },
    {
      "typeString": "HotelXBusinessRulesInput!",
      "name": "businessRules",
      "url": "/travelgatex/reference/inputobjects/hotelxbusinessrulesinput",
      "description": "Business rules.",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "defaultAccesses",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Indicates the default accesses that will added to access list in the Query",
      "args": null
    },
    {
      "typeString": "[HotelXDefaultPluginStepInput!]",
      "name": "defaultPlugins",
      "url": "/travelgatex/reference/inputobjects/hotelxdefaultpluginstepinput",
      "description": "Indica",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXDefaultSettingsDataInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
