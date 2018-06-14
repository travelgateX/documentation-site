{
  "title": "PaymentXMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean",
      "name": "a",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StoredCard!",
      "name": "storeCard",
      "url": "/travelgatex/reference/objects/storedcard",
      "description": "Store Card",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoreCardInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/paymentxstorecardinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "StoredCard!",
      "name": "deleteCard",
      "url": "/travelgatex/reference/objects/storedcard",
      "description": "Delete Card",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXBookingInfoDeleteInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/paymentxbookinginfodeleteinput",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Mutation",
      "description": "The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXMutation"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
