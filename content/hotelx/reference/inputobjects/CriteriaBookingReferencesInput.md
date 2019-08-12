{
  "title": "CriteriaBookingReferencesInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "hotelCode",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotelx/reference/scalars/currency",
      "description": null,
      "args": null
    },
    {
      "typeString": "[BookReferenceInput!]!",
      "name": "references",
      "url": "/hotelx/reference/inputobjects/bookreferenceinput",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCriteriaBookingInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelcriteriabookinginput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CriteriaBookingReferencesInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
