{
  "title": "PaymentXStoredCardFilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[PaymentXStoredCardFilterInput!]",
      "name": "AND",
      "url": "/paymentx/reference/inputobjects/paymentxstoredcardfilterinput",
      "description": "Logical AND on all given filters.",
      "args": null
    },
    {
      "typeString": "[PaymentXStoredCardFilterInput!]",
      "name": "OR",
      "url": "/paymentx/reference/inputobjects/paymentxstoredcardfilterinput",
      "description": "Logical OR on all given filters.",
      "args": null
    },
    {
      "typeString": "[DateTime!]",
      "name": "checkIn_in",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values that are contained in given list.",
      "args": null
    },
    {
      "typeString": "[DateTime!]",
      "name": "checkIn_not_in",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values that are not contained in given list.",
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "checkIn_lt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values less than the given value.",
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "checkIn_lte",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values less than or equal the given value.",
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "checkIn_gt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values greater than the given value.",
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "checkIn_gte",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values greater than or equal the given value.",
      "args": null
    },
    {
      "typeString": "[DateTime!]",
      "name": "checkOut_in",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values that are contained in given list.",
      "args": null
    },
    {
      "typeString": "[DateTime!]",
      "name": "checkOut_not_in",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values that are not contained in given list.",
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "checkOut_lt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values less than the given value.",
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "checkOut_lte",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values less than or equal the given value.",
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "checkOut_gt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values greater than the given value.",
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "checkOut_gte",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "All values greater than or equal the given value.",
      "args": null
    },
    {
      "typeString": "HolderInput",
      "name": "holder_like",
      "url": "/paymentx/reference/inputobjects/holderinput",
      "description": "All values with holder like the given value.",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXStoredCardFilterInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
