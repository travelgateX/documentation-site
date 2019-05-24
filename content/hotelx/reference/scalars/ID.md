{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelXBoardQueryInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxboardqueryinput"
    },
    {
      "name": "HotelXCategoryQueryInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxcategoryqueryinput"
    },
    {
      "name": "HotelXHotelListInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxhotellistinput"
    },
    {
      "name": "HotelXRoomQueryInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxroomqueryinput"
    },
    {
      "name": "HotelXDestinationListInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxdestinationlistinput"
    },
    {
      "name": "HotelXDestinationSearcherInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxdestinationsearcherinput"
    },
    {
      "name": "HotelSettingsInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelsettingsinput"
    },
    {
      "name": "HotelRuntimeConfiguration",
      "description": null,
      "url": "/hotelx/reference/objects/hotelruntimeconfiguration"
    },
    {
      "name": "AdviseMessage",
      "description": null,
      "url": "/hotelx/reference/objects/advisemessage"
    },
    {
      "name": "Board",
      "description": null,
      "url": "/hotelx/reference/objects/board"
    },
    {
      "name": "BoardData",
      "description": null,
      "url": "/hotelx/reference/objects/boarddata"
    },
    {
      "name": "Node",
      "description": null,
      "url": "/hotelx/reference/interfaces/node"
    },
    {
      "name": "Category",
      "description": null,
      "url": "/hotelx/reference/objects/category"
    },
    {
      "name": "CategoryData",
      "description": null,
      "url": "/hotelx/reference/objects/categorydata"
    },
    {
      "name": "Hotel",
      "description": null,
      "url": "/hotelx/reference/objects/hotel"
    },
    {
      "name": "HotelData",
      "description": null,
      "url": "/hotelx/reference/objects/hoteldata"
    },
    {
      "name": "GiataData",
      "description": null,
      "url": "/hotelx/reference/objects/giatadata"
    },
    {
      "name": "DestinationData",
      "description": null,
      "url": "/hotelx/reference/objects/destinationdata"
    },
    {
      "name": "Airport",
      "description": null,
      "url": "/hotelx/reference/objects/airport"
    },
    {
      "name": "Geoname",
      "description": null,
      "url": "/hotelx/reference/objects/geoname"
    },
    {
      "name": "AirportData",
      "description": null,
      "url": "/hotelx/reference/objects/airportdata"
    },
    {
      "name": "GeonameData",
      "description": null,
      "url": "/hotelx/reference/objects/geonamedata"
    },
    {
      "name": "RoomStatic",
      "description": null,
      "url": "/hotelx/reference/objects/roomstatic"
    },
    {
      "name": "RoomData",
      "description": null,
      "url": "/hotelx/reference/objects/roomdata"
    },
    {
      "name": "Destination",
      "description": null,
      "url": "/hotelx/reference/objects/destination"
    },
    {
      "name": "HotelXAccessInput",
      "description": null,
      "url": "/hotelx/reference/inputobjects/hotelxaccessinput"
    },
    {
      "name": "HotelXUpdateStatus",
      "description": null,
      "url": "/hotelx/reference/objects/hotelxupdatestatus"
    },
    {
      "name": "HotelXUpdateStatusData",
      "description": null,
      "url": "/hotelx/reference/objects/hotelxupdatestatusdata"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "ID",
  "hideGithubLink": true
}
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
