{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelXBoardQueryInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxboardqueryinput"
    },
    {
      "name": "HotelXCategoryQueryInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxcategoryqueryinput"
    },
    {
      "name": "HotelXHotelListInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxhotellistinput"
    },
    {
      "name": "HotelXRoomQueryInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxroomqueryinput"
    },
    {
      "name": "HotelXDestinationListInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxdestinationlistinput"
    },
    {
      "name": "HotelXDestinationSearcherInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxdestinationsearcherinput"
    },
    {
      "name": "HotelSettingsInput",
      "description": "Settings that you can edit for this avail. Values are loaded by default in our Back Office.",
      "url": "/hotelx/reference/inputobjects/hotelsettingsinput"
    },
    {
      "name": "HotelRuntimeConfiguration",
      "description": "",
      "url": "/hotelx/reference/objects/hotelruntimeconfiguration"
    },
    {
      "name": "AdviseMessage",
      "description": "List of advise messages.",
      "url": "/hotelx/reference/objects/advisemessage"
    },
    {
      "name": "Board",
      "description": "Board type.",
      "url": "/hotelx/reference/objects/board"
    },
    {
      "name": "BoardData",
      "description": "Board data",
      "url": "/hotelx/reference/objects/boarddata"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/hotelx/reference/interfaces/node"
    },
    {
      "name": "Category",
      "description": "Category Type",
      "url": "/hotelx/reference/objects/category"
    },
    {
      "name": "CategoryData",
      "description": "Category data",
      "url": "/hotelx/reference/objects/categorydata"
    },
    {
      "name": "Hotel",
      "description": "Hotel Type",
      "url": "/hotelx/reference/objects/hotel"
    },
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/hotelx/reference/objects/hoteldata"
    },
    {
      "name": "DestinationData",
      "description": "Information about destinantion",
      "url": "/hotelx/reference/objects/destinationdata"
    },
    {
      "name": "Airport",
      "description": "Airport Type",
      "url": "/hotelx/reference/objects/airport"
    },
    {
      "name": "Geoname",
      "description": "Geoname type",
      "url": "/hotelx/reference/objects/geoname"
    },
    {
      "name": "AirportData",
      "description": "Information about the airport",
      "url": "/hotelx/reference/objects/airportdata"
    },
    {
      "name": "GeonameData",
      "description": "Geoname data, which contain a reference to his parent location",
      "url": "/hotelx/reference/objects/geonamedata"
    },
    {
      "name": "RoomStatic",
      "description": "Room Type",
      "url": "/hotelx/reference/objects/roomstatic"
    },
    {
      "name": "RoomData",
      "description": "Room data",
      "url": "/hotelx/reference/objects/roomdata"
    },
    {
      "name": "Destination",
      "description": "Destination Type",
      "url": "/hotelx/reference/objects/destination"
    },
    {
      "name": "HotelXAccessInput",
      "description": "AccessInput overwrites an existent access in our Back Office or creates a new\none to be used in this search query only. An access object contains its own code, configuration and settings.",
      "url": "/hotelx/reference/inputobjects/hotelxaccessinput"
    },
    {
      "name": "HotelXUpdateStatus",
      "description": "",
      "url": "/hotelx/reference/objects/hotelxupdatestatus"
    },
    {
      "name": "HotelXUpdateStatusData",
      "description": "",
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
