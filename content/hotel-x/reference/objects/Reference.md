{
  "title": "Reference",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "client",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Client reference booking",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "supplier",
      "url": "/hotel-x/reference/scalars/string",
      "description": "Supplier reference booking",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking",
      "url": "/hotel-x/reference/objects/hotelbookingdetail"
    },
    {
      "name": "HotelCancelDetail",
      "description": "Contains information about cancel",
      "url": "/hotel-x/reference/objects/hotelcanceldetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Reference",
  "hideGithubLink": true
}
Contains reference codes.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
