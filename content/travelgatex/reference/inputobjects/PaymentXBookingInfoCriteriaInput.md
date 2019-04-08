{
  "title": "PaymentXBookingInfoCriteriaInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "organization",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Responsible organization of the booked property.",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "pointOfSaleCode",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Indicates the code of the booked property",
      "args": null
    },
    {
      "typeString": "String",
      "name": "bookingReference",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the referece of the booking",
      "args": null
    },
    {
      "typeString": "HolderInput",
      "name": "holder",
      "url": "/travelgatex/reference/inputobjects/holderinput",
      "description": "Contains owner's name",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXBookingInfoCriteriaInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
