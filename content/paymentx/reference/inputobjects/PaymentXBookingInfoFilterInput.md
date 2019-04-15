{
  "title": "PaymentXBookingInfoFilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "organization",
      "url": "/paymentx/reference/scalars/string",
      "description": "Responsible organization for the booked property. @deprecated(reason: \"deprecated from 2018-08-03. Please use PaymentXBookingInfoCriteriaInput\")",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Please use PaymentXBookingInfoCriteriaInput",
      "descriptionSplit": {
        "date": "2018-08-03",
        "first": "Responsible organization of the booked property. @deprecated(reason: \"deprecated from",
        "second": "Please use PaymentXBookingInfoCriteriaInput\")"
      },
      "deprecationDate": "2018-08-03",
      "typeName": "PaymentXBookingInfoFilterInput"
    },
    {
      "typeString": "ID",
      "name": "pointOfSaleCode",
      "url": "/paymentx/reference/scalars/id",
      "description": "Indicates the code for the booked property. @deprecated(reason: \"deprecated from 2018-08-03. Please use PaymentXBookingInfoCriteriaInput\")",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Please use PaymentXBookingInfoCriteriaInput",
      "descriptionSplit": {
        "date": "2018-08-03",
        "first": "Indicates the code of the booked property. @deprecated(reason: \"deprecated from",
        "second": "Please use PaymentXBookingInfoCriteriaInput\")"
      },
      "deprecationDate": "2018-08-03",
      "typeName": "PaymentXBookingInfoFilterInput"
    },
    {
      "typeString": "String",
      "name": "bookingReference",
      "url": "/paymentx/reference/scalars/string",
      "description": "Indicates the referece of the booking. @deprecated(reason: \"deprecated from 2018-08-03. Please use PaymentXBookingInfoCriteriaInput\")",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Please use PaymentXBookingInfoCriteriaInput",
      "descriptionSplit": {
        "date": "2018-08-03",
        "first": "Indicates the referece of the booking. @deprecated(reason: \"deprecated from",
        "second": "Please use PaymentXBookingInfoCriteriaInput\")"
      },
      "deprecationDate": "2018-08-03",
      "typeName": "PaymentXBookingInfoFilterInput"
    },
    {
      "typeString": "[PaymentXBookingInfoFilterInput!]",
      "name": "AND",
      "url": "/paymentx/reference/inputobjects/paymentxbookinginfofilterinput",
      "description": "Logical AND on all given filters.",
      "args": null
    },
    {
      "typeString": "[PaymentXBookingInfoFilterInput!]",
      "name": "OR",
      "url": "/paymentx/reference/inputobjects/paymentxbookinginfofilterinput",
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
      "description": "All values less than or equal than the given value.",
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
      "description": "All values greater than or equal than the given value.",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXBookingInfoFilterInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
