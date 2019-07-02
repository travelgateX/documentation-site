{
  "title": "RoomPrice",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/hotel-x/reference/objects/price",
      "description": "Total price for all days.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[PriceBreakdown!]",
      "name": "breakdown",
      "url": "/hotel-x/reference/objects/pricebreakdown",
      "description": "Daily break downs price.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Room",
      "description": "Contains the room information of the option returned.",
      "url": "/hotel-x/reference/objects/room"
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
