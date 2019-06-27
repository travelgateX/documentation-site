{
  "title": "RoomStatic",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotelx/reference/scalars/id",
      "description": "Room ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "RoomData",
      "name": "roomData",
      "url": "/hotelx/reference/objects/roomdata",
      "description": "Room data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/hotelx/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "RoomEdge",
      "description": "RoomList Edge definition",
      "url": "/hotelx/reference/objects/roomedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RoomStatic",
  "hideGithubLink": true
}
Room Type
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
