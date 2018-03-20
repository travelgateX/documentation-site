{
  "title": "BookingRoom",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int",
      "name": "occupancyRefId",
      "url": "/travelgatex/reference/scalars/int",
      "description": "ID reference to the occupancy.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the room code.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "description",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Description about the room.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Price",
      "name": "price",
      "url": "/travelgatex/reference/objects/price",
      "description": "Total price for all days.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "BookingRoom"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
