{
  "title": "Reference",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "client",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "supplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "commit",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Please, use SupplierReference",
      "descriptionSplitted": {
        "date": "2018-10-21",
        "first": "deprecated from",
        "second": "Please, use SupplierReference"
      },
      "deprecationDate": "2018-10-21",
      "typeName": "Reference"
    },
    {
      "typeString": "String",
      "name": "hotel",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
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
    },
    {
      "name": "HotelCommitDetails",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelcommitdetails"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Reference",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
