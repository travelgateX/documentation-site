{
  "title": "CriteriaBookingReferencesInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "hotelCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": "The hotel code.",
      "args": null
    },
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/hotel-x/reference/scalars/currency",
      "description": "The requested currency. The API will convert to this currency if supplier returns a different one.",
      "args": null
    },
    {
      "typeString": "[BookReferenceInput!]!",
      "name": "references",
      "url": "/hotel-x/reference/inputobjects/bookreferenceinput",
      "description": "Contains the client reference and/or supplier reference.",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCriteriaBookingInput",
      "description": "Criteria of book contains basic information to find a book or books.",
      "url": "/hotel-x/reference/inputobjects/hotelcriteriabookinginput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CriteriaBookingReferencesInput",
  "hideGithubLink": true
}
Criteria by references
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
