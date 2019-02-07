{
  "title": "GiataData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Giata System ID.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "URI!",
      "name": "source",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Giata URL for the hotels of the supplier.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "URI!",
      "name": "href",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Giata url for the hotel info. ",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date of last Giata update for this code. ",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/travelgatex/reference/objects/hoteldata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "GiataData",
  "hideGithubLink": true
}
Hotel data obtained from Giata System.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
