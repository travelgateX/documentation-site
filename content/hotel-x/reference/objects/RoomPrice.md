{
  "title": "RoomPrice",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/hotel-x/reference/objects/price",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[PriceBreakdown!]",
      "name": "breakdown",
      "url": "/hotel-x/reference/objects/pricebreakdown",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Room",
      "description": null,
      "url": "/hotel-x/reference/objects/room"
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
