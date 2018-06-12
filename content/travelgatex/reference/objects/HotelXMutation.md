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
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelBookInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelbookinput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelCancelPayload",
      "name": "cancel",
      "url": "/travelgatex/reference/objects/hotelcancelpayload",
      "description": "Cancels an existing hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCancelInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelcancelinput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": [
    {
      "typeString": "String!",
      "name": "loadFile",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ],
      "deprecationReason": "deprecated from 2018-06-06"
    }
  ],
  "requireby": [
    {
      "name": "Mutation",
      "description": "The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXMutation"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
