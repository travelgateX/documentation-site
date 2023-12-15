{
  "title": "RoomData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "roomCode",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Text!]",
      "name": "texts",
      "url": "/travelgatex/reference/objects/text",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": null
        }
      ]
    },
    {
      "typeString": "String",
      "name": "source",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OccupancyStatic",
      "name": "occupancies",
      "url": "/travelgatex/reference/objects/occupancystatic",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AmenityStatic!]",
      "name": "amenities",
      "url": "/travelgatex/reference/objects/amenitystatic",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[View!]",
      "name": "views",
      "url": "/travelgatex/reference/objects/view",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Media!]",
      "name": "medias",
      "url": "/travelgatex/reference/objects/media",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[BedStatic!]",
      "name": "beds",
      "url": "/travelgatex/reference/objects/bedstatic",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Area",
      "name": "area",
      "url": "/travelgatex/reference/scalars/area",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXAmenityConnection",
      "name": "allAmenities",
      "url": "/travelgatex/reference/objects/hotelxamenityconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[HotelXMapOptionInput!]",
          "name": "mapOptions",
          "url": "/travelgatex/reference/inputobjects/hotelxmapoptioninput",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "RoomStatic",
      "description": null,
      "url": "/travelgatex/reference/objects/roomstatic"
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
