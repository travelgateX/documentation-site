{
  "title": "Room",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "occupancyRefId",
      "url": "/travelgatex/reference/scalars/int",
      "description": "ID reference to the occupancy",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the room code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "description",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Description about the room",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "refundable",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Identifies if the room is refundable or not.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "units",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Number of rooms available with the same type.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "RoomPrice!",
      "name": "roomPrice",
      "url": "/travelgatex/reference/objects/roomprice",
      "description": "Specifies the room price.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Bed!]",
      "name": "beds",
      "url": "/travelgatex/reference/objects/bed",
      "description": "List of beds.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[RatePlan!]",
      "name": "ratePlans",
      "url": "/travelgatex/reference/objects/rateplan",
      "description": "Daily break downs rate plan.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Promotion!]",
      "name": "promotions",
      "url": "/travelgatex/reference/objects/promotion",
      "description": "Daily break downs promotions.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Room"
}
Contains the room information of the option returned.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
