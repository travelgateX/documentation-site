{
  "title": "RoomData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "roomCode",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]",
      "name": "texts",
      "url": "/hotel-x/reference/objects/text",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/hotel-x/reference/scalars/language",
          "description": null
        }
      ]
    },
    {
      "typeString": "String",
      "name": "source",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OccupancyStatic",
      "name": "occupancies",
      "url": "/hotel-x/reference/objects/occupancystatic",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AmenityStatic!]",
      "name": "amenities",
      "url": "/hotel-x/reference/objects/amenitystatic",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[View!]",
      "name": "views",
      "url": "/hotel-x/reference/objects/view",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Media!]",
      "name": "medias",
      "url": "/hotel-x/reference/objects/media",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[BedStatic!]",
      "name": "beds",
      "url": "/hotel-x/reference/objects/bedstatic",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Area",
      "name": "area",
      "url": "/hotel-x/reference/scalars/area",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXAmenityConnection",
      "name": "allAmenities",
      "url": "/hotel-x/reference/objects/hotelxamenityconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[HotelXMapOptionInput!]",
          "name": "mapOptions",
          "url": "/hotel-x/reference/inputobjects/hotelxmapoptioninput",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "RoomStatic",
      "description": null,
      "url": "/hotel-x/reference/objects/roomstatic"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RoomData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
