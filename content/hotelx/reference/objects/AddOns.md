{
  "title": "AddOns",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "JSON",
      "name": "distribute",
      "url": "/hotelx/reference/scalars/json",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "You can find it in distribution AddOn",
      "descriptionSplitted": {
        "date": "2018-05-21",
        "first": "deprecated from",
        "second": "You can find it in distribution AddOn"
      },
      "deprecationDate": "2018-05-21",
      "typeName": "AddOns"
    },
    {
      "typeString": "[AddOn!]",
      "name": "distribution",
      "url": "/hotelx/reference/objects/addon",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": null,
      "url": "/hotelx/reference/objects/hoteloptionsearch"
    },
    {
      "name": "HotelOptionQuote",
      "description": null,
      "url": "/hotelx/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": null,
      "url": "/hotelx/reference/objects/hotelbookingdetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AddOns",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
