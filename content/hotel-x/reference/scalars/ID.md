{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelXBoardQueryInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelxboardqueryinput"
    },
    {
      "name": "HotelXCategoryQueryInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelxcategoryqueryinput"
    },
    {
      "name": "HotelXHotelListInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelxhotellistinput"
    },
    {
      "name": "HotelXRoomQueryInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelxroomqueryinput"
    },
    {
      "name": "HotelXDestinationListInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelxdestinationlistinput"
    },
    {
      "name": "HotelXDestinationSearcherInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelxdestinationsearcherinput"
    },
    {
      "name": "HotelSettingsInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelsettingsinput"
    },
    {
      "name": "HotelRuntimeConfiguration",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelruntimeconfiguration"
    },
    {
      "name": "AdviseMessage",
      "description": null,
      "url": "/hotel-x/reference/objects/advisemessage"
    },
    {
      "name": "Board",
      "description": null,
      "url": "/hotel-x/reference/objects/board"
    },
    {
      "name": "BoardData",
      "description": null,
      "url": "/hotel-x/reference/objects/boarddata"
    },
    {
      "name": "Node",
      "description": null,
      "url": "/hotel-x/reference/interfaces/node"
    },
    {
      "name": "Category",
      "description": null,
      "url": "/hotel-x/reference/objects/category"
    },
    {
      "name": "CategoryData",
      "description": null,
      "url": "/hotel-x/reference/objects/categorydata"
    },
    {
      "name": "Hotel",
      "description": null,
      "url": "/hotel-x/reference/objects/hotel"
    },
    {
      "name": "HotelData",
      "description": null,
      "url": "/hotel-x/reference/objects/hoteldata"
    },
    {
      "name": "GiataData",
      "description": null,
      "url": "/hotel-x/reference/objects/giatadata"
    },
    {
      "name": "DestinationData",
      "description": null,
      "url": "/hotel-x/reference/objects/destinationdata"
    },
    {
      "name": "Airport",
      "description": null,
      "url": "/hotel-x/reference/objects/airport"
    },
    {
      "name": "Geoname",
      "description": null,
      "url": "/hotel-x/reference/objects/geoname"
    },
    {
      "name": "AirportData",
      "description": null,
      "url": "/hotel-x/reference/objects/airportdata"
    },
    {
      "name": "GeonameData",
      "description": null,
      "url": "/hotel-x/reference/objects/geonamedata"
    },
    {
      "name": "RoomStatic",
      "description": null,
      "url": "/hotel-x/reference/objects/roomstatic"
    },
    {
      "name": "RoomData",
      "description": null,
      "url": "/hotel-x/reference/objects/roomdata"
    },
    {
      "name": "Destination",
      "description": null,
      "url": "/hotel-x/reference/objects/destination"
    },
    {
      "name": "HotelXAccessInput",
      "description": null,
      "url": "/hotel-x/reference/inputobjects/hotelxaccessinput"
    },
    {
      "name": "HotelXUpdateStatus",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelxupdatestatus"
    },
    {
      "name": "HotelXUpdateStatusData",
      "description": null,
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
