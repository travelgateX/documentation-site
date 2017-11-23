{
  "title": "BookStatusType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking.",
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    },
    {
      "name": "HotelCancelDetail",
      "description": "Contains information about cancel",
      "url": "/travelgatex/reference/objects/hotelcanceldetail"
    }
  ],
  "enumValues": [
    {
      "name": "OK",
      "description": "The status of the booking is available",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "KO",
      "description": "The status of the booking is KO",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "ON_REQUEST",
      "description": "The status of the booking is on request",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "CANCELLED",
      "description": "The status of the booking is cancelled",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "UNKNOWN",
      "description": "The status of the booking is unknown",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "BookStatusType"
}
Book status
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
