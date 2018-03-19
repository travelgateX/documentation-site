{
  "title": "HotelXMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelBookPayload",
      "name": "book",
      "url": "/travelgatex/reference/objects/hotelbookpayload",
      "description": "Creates a new hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelBookInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelbookinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "HotelCancelPayload",
      "name": "cancel",
      "url": "/travelgatex/reference/objects/hotelcancelpayload",
      "description": "Cancels an existing hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelCancelInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelcancelinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "String!",
      "name": "loadFile",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Mutation",
      "description": "Mutations are operations that change or update data in the server.",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXMutation"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
