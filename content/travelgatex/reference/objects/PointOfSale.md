{
  "title": "PointOfSale",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PointOfSaleData",
      "name": "pointOfSaleData",
      "url": "/travelgatex/reference/objects/pointofsaledata",
      "description": "",
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
      "description": "List of advise messages.",
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
      "name": "PointOfSaleEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/pointofsaleedge"
    },
    {
      "name": "PaymentXStoredCardData",
      "description": "",
      "url": "/travelgatex/reference/objects/paymentxstoredcarddata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PointOfSale",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
