{
  "title": "Int",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "RelayInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/relayinput"
    },
    {
      "name": "HotelXHotelListInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxhotellistinput"
    },
    {
      "name": "HotelConnection",
      "description": "HotelList definition",
      "url": "/hotel-x/reference/objects/hotelconnection"
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
      "name": "Timeout",
      "description": "",
      "url": "/hotel-x/reference/objects/timeout"
    },
    {
      "name": "BusinessRules",
      "description": "List of business rules for filtering options based on your interests.",
      "url": "/hotel-x/reference/objects/businessrules"
    },
    {
      "name": "HotelXAudit",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxaudit"
    },
    {
      "name": "PaxInput",
      "description": "Pax object that contains the pax age.",
      "url": "/hotel-x/reference/inputobjects/paxinput"
    },
    {
      "name": "BusinessRulesInput",
      "description": "List of business rules to use as filter on the options.",
      "url": "/hotel-x/reference/inputobjects/businessrulesinput"
    },
    {
      "name": "SettingsBaseInput",
      "description": "Contains the time out and business rules of a supplier or an access.",
      "url": "/hotel-x/reference/inputobjects/settingsbaseinput"
    },
    {
      "name": "StatsRequest",
      "description": "Contains internal information.",
      "url": "/hotel-x/reference/objects/statsrequest"
    },
    {
      "name": "StatAccess",
      "description": "",
      "url": "/hotel-x/reference/objects/stataccess"
    },
    {
      "name": "Pax",
      "description": "Specifies the age pax. The range of what is considered an adult, infant or baby is particular to each supplier.",
      "url": "/hotel-x/reference/objects/pax"
    },
    {
      "name": "Occupancy",
      "description": "Information about occupancy.",
      "url": "/hotel-x/reference/objects/occupancy"
    },
    {
      "name": "Room",
      "description": "Contains the room information of the option returned.",
      "url": "/hotel-x/reference/objects/room"
    },
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/hotel-x/reference/objects/supplement"
    },
    {
      "name": "Bed",
      "description": "Contains information about a bed.",
      "url": "/hotel-x/reference/objects/bed"
    },
    {
      "name": "CancelPenalty",
      "description": "Contains information for cancellation penalities..",
      "url": "/hotel-x/reference/objects/cancelpenalty"
    },
    {
      "name": "BookingRoom",
      "description": "",
      "url": "/hotel-x/reference/objects/bookingroom"
    },
    {
      "name": "TimeoutInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/timeoutinput"
    },
    {
      "name": "HotelXBusinessRulesInput",
      "description": "List of business rules to use as filter on the options.",
      "url": "/hotel-x/reference/inputobjects/hotelxbusinessrulesinput"
    },
    {
      "name": "HotelXAuditInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxauditinput"
    },
    {
      "name": "BookRoomInput",
      "description": "Input BookRoom contains list of pax and the room's reference.",
      "url": "/hotel-x/reference/inputobjects/bookroominput"
    },
    {
      "name": "ExpireDateInput",
      "description": "The card expiration date",
      "url": "/hotel-x/reference/inputobjects/expiredateinput"
    },
    {
      "name": "BookPaxInput",
      "description": "Input BookPax contains basic information abaout pax suach as name, surname and age.",
      "url": "/hotel-x/reference/inputobjects/bookpaxinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Int",
  "hideGithubLink": true
}
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
