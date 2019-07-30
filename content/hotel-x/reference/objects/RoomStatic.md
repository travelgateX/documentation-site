{
  "title": "RoomStatic",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": "Room ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "RoomData",
      "name": "roomData",
      "url": "/hotel-x/reference/objects/roomdata",
      "description": "Room data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/hotel-x/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "RoomEdge",
      "description": "RoomList Edge definition",
      "url": "/hotel-x/reference/objects/roomedge"
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
