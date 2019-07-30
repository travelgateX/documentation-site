{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelXBoardQueryInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxboardqueryinput"
    },
    {
      "name": "HotelXCategoryQueryInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxcategoryqueryinput"
    },
    {
      "name": "HotelXHotelListInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxhotellistinput"
    },
    {
      "name": "HotelXRoomQueryInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxroomqueryinput"
    },
    {
      "name": "HotelXDestinationListInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxdestinationlistinput"
    },
    {
      "name": "HotelXDestinationSearcherInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxdestinationsearcherinput"
    },
    {
      "name": "HotelSettingsInput",
      "description": "Settings that you can edit for this avail. Values are loaded by default in our Back Office.",
      "url": "/hotel-x/reference/inputobjects/hotelsettingsinput"
    },
    {
      "name": "HotelRuntimeConfiguration",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelruntimeconfiguration"
    },
    {
      "name": "HotelXDefaultSettingsData",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxdefaultsettingsdata"
    },
    {
      "name": "AdviseMessage",
      "description": "List of advise messages.",
      "url": "/hotel-x/reference/objects/advisemessage"
    },
    {
      "name": "Board",
      "description": "Board type.",
      "url": "/hotel-x/reference/objects/board"
    },
    {
      "name": "BoardData",
      "description": "Board data",
      "url": "/hotel-x/reference/objects/boarddata"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/hotel-x/reference/interfaces/node"
    },
    {
      "name": "Category",
      "description": "Category Type",
      "url": "/hotel-x/reference/objects/category"
    },
    {
      "name": "CategoryData",
      "description": "Category data",
      "url": "/hotel-x/reference/objects/categorydata"
    },
    {
      "name": "Hotel",
      "description": "Hotel Type",
      "url": "/hotel-x/reference/objects/hotel"
    },
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/hotel-x/reference/objects/hoteldata"
    },
    {
      "name": "DestinationData",
      "description": "Information about destinantion",
      "url": "/hotel-x/reference/objects/destinationdata"
    },
    {
      "name": "Airport",
      "description": "Airport Type",
      "url": "/hotel-x/reference/objects/airport"
    },
    {
      "name": "Geoname",
      "description": "Geoname type",
      "url": "/hotel-x/reference/objects/geoname"
    },
    {
      "name": "AirportData",
      "description": "Information about the airport",
      "url": "/hotel-x/reference/objects/airportdata"
    },
    {
      "name": "GeonameData",
      "description": "Geoname data, which contain a reference to his parent location",
      "url": "/hotel-x/reference/objects/geonamedata"
    },
    {
      "name": "RoomStatic",
      "description": "Room Type",
      "url": "/hotel-x/reference/objects/roomstatic"
    },
    {
      "name": "RoomData",
      "description": "Room data",
      "url": "/hotel-x/reference/objects/roomdata"
    },
    {
      "name": "Destination",
      "description": "Destination Type",
      "url": "/hotel-x/reference/objects/destination"
    },
    {
      "name": "HotelXAccessInput",
      "description": "AccessInput overwrites an existent access in our Back Office or creates a new\none to be used in this search query only. An access object contains its own code, configuration and settings.",
      "url": "/hotel-x/reference/inputobjects/hotelxaccessinput"
    },
    {
      "name": "HotelXDefaultSettingsDataInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxdefaultsettingsdatainput"
    },
    {
      "name": "HotelXUpdateStatus",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxupdatestatus"
    },
    {
      "name": "HotelXUpdateStatusData",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxupdatestatusdata"
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
