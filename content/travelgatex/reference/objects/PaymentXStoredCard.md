{
  "title": "PaymentXStoredCard",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentXStoredCardData",
      "name": "storedCardData",
      "url": "/travelgatex/reference/objects/paymentxstoredcarddata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "PaymentXQuery",
      "description": null,
      "url": "/travelgatex/reference/objects/paymentxquery"
    },
    {
      "name": "PaymentXStoredCardEdge",
      "description": null,
      "url": "/travelgatex/reference/objects/paymentxstoredcardedge"
    },
    {
      "name": "PaymentXMutation",
      "description": null,
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
