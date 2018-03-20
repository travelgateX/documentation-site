{
  "title": "BookRoomInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "occupancyRefId",
      "url": "/travelgatex/reference/scalars/int",
      "description": "The room's reference in the booking",
      "args": null
    },
    {
      "typeString": "[BookPaxInput!]!",
      "name": "paxes",
      "url": "/travelgatex/reference/inputobjects/bookpaxinput",
      "description": "The list or lists of paxes of the room",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "BookRoomInput"
}
Input BookRoom contains list of pax and the room's reference.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
