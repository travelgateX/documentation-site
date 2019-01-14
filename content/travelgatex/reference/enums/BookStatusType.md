{
  "title": "BookStatusType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking",
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
      "description": "The reservation was completed with no problems",
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
      "description": "The reservation was completed but the product is still not available, so the reservation goes into a waiting list.\nIt is the client’s responsibility to check if the booking is OK",
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
      "description": "The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.\nIt is the client’s responsibility to check if the booking is OK",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "BookStatusType",
  "hideGithubLink": true
}
Book status
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
