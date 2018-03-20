{
  "title": "HotelCancelInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "accessCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "The name of the access to use in the request.",
      "args": null
    },
    {
      "typeString": "Language",
      "name": "language",
      "url": "/travelgatex/reference/scalars/language",
      "description": "The language code.",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "hotelCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": "The hotel code.",
      "args": null
    },
    {
      "typeString": "BookReferenceInput!",
      "name": "reference",
      "url": "/travelgatex/reference/inputobjects/bookreferenceinput",
      "description": "Contains the client reference and/or supplier reference.\nOne of them is mandatory.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelCancelInput"
}
Cancellation Criteria.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
