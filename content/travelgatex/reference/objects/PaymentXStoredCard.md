{
  "title": "PaymentXStoredCard",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Stored card ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentXStoredCardData",
      "name": "storedCardData",
      "url": "/travelgatex/reference/objects/paymentxstoredcarddata",
      "description": "Stored card information",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Create date",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Update date",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": "List of messages",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "PaymentXQuery",
      "description": "",
      "url": "/travelgatex/reference/objects/paymentxquery"
    },
    {
      "name": "PaymentXStoredCardEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/paymentxstoredcardedge"
    },
    {
      "name": "PaymentXMutation",
      "description": "",
      "url": "/travelgatex/reference/objects/paymentxmutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXStoredCard",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
