{
  "title": "RoomStatic",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Room ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "RoomData",
      "name": "roomData",
      "url": "/travelgatex/reference/objects/roomdata",
      "description": "Room data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Create date",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Update date",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "RoomEdge",
      "description": "RoomList Edge definition",
      "url": "/travelgatex/reference/objects/roomedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RoomStatic"
}
Room Type
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
