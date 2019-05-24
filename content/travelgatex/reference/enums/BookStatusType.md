{
  "title": "BookStatusType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelBookingDetail",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    },
    {
      "name": "HotelCancelDetail",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelcanceldetail"
    }
  ],
  "enumValues": [
    {
      "name": "OK",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "KO",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "ON_REQUEST",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "CANCELLED",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "UNKNOWN",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "BookStatusType",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
