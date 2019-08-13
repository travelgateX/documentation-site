{
  "title": "CriteriaBookingReferencesInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "hotelCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotel-x/reference/scalars/currency",
      "description": null,
      "args": null
    },
    {
      "typeString": "[BookReferenceInput!]!",
      "name": "references",
      "url": "/hotel-x/reference/inputobjects/bookreferenceinput",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCriteriaBookingInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelcriteriabookinginput"
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
