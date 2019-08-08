{
  "title": "RoomPrice",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/hotelx/reference/objects/price",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[PriceBreakdown!]",
      "name": "breakdown",
      "url": "/hotelx/reference/objects/pricebreakdown",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Room",
      "description": null,
      "url": "/hotelx/reference/objects/room"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RoomPrice",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
