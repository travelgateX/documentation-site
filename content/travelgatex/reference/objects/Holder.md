{
  "title": "Holder",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Holder's name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "surname",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Holder's surname",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking",
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    },
    {
      "name": "PaymentXStoredCardData",
      "description": "",
      "url": "/travelgatex/reference/objects/paymentxstoredcarddata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Holder",
  "hideGithubLink": true
}
Holder object that contains the occupant's (pax's) name and surname.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
