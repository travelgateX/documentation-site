{
  "title": "RoomPrice",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/hotelx/reference/objects/price",
      "description": "Total price for all days.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[PriceBreakdown!]",
      "name": "breakdown",
      "url": "/hotelx/reference/objects/pricebreakdown",
      "description": "Daily break downs price.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Room",
      "description": "Contains the room information of the option returned.",
      "url": "/hotelx/reference/objects/room"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RoomPrice",
  "hideGithubLink": true
}
Specifies the room price.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
