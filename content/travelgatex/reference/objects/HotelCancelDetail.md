{
  "title": "HotelCancelDetail",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Reference",
      "name": "reference",
      "url": "/travelgatex/reference/objects/reference",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "cancelReference",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "BookStatusType",
      "name": "status",
      "url": "/travelgatex/reference/enums/bookstatustype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Price",
      "name": "price",
      "url": "/travelgatex/reference/objects/price",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelBookingDetail",
      "name": "booking",
      "url": "/travelgatex/reference/objects/hotelbookingdetail",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelCancelPayload",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelcancelpayload"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelCancelDetail",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
