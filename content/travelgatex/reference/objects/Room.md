{
  "title": "Room",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "occupancyRefId",
      "url": "/travelgatex/reference/scalars/int",
      "description": "ID reference to the occupancy.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the room code.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "description",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Description about the room.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "refundable",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Identifies if the room is refundable or not.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "units",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Number of rooms available with the same type.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "RoomPrice!",
      "name": "roomPrice",
      "url": "/travelgatex/reference/objects/roomprice",
      "description": "Specifies the room price.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Bed!]",
      "name": "beds",
      "url": "/travelgatex/reference/objects/bed",
      "description": "List of beds.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[RatePlan!]",
      "name": "ratePlans",
      "url": "/travelgatex/reference/objects/rateplan",
      "description": "Daily break downs rate plan.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Promotion!]",
      "name": "promotions",
      "url": "/travelgatex/reference/objects/promotion",
      "description": "Daily break downs promotions.",
      "isDeprecated": "",
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
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
