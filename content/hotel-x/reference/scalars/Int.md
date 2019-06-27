{
  "title": "Int",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "RelayInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/relayinput"
    },
    {
      "name": "HotelXHotelListInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxhotellistinput"
    },
    {
      "name": "HotelConnection",
      "description": "HotelList definition",
      "url": "/hotelx/reference/objects/hotelconnection"
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
      "name": "Timeout",
      "description": "",
      "url": "/hotelx/reference/objects/timeout"
    },
    {
      "name": "BusinessRules",
      "description": "List of business rules for filtering options based on your interests.",
      "url": "/hotelx/reference/objects/businessrules"
    },
    {
      "name": "HotelXAudit",
      "description": "",
      "url": "/hotelx/reference/objects/hotelxaudit"
    },
    {
      "name": "PaxInput",
      "description": "Pax object that contains the pax age.",
      "url": "/hotelx/reference/inputobjects/paxinput"
    },
    {
      "name": "BusinessRulesInput",
      "description": "List of business rules to use as filter on the options.",
      "url": "/hotelx/reference/inputobjects/businessrulesinput"
    },
    {
      "name": "SettingsBaseInput",
      "description": "Contains the time out and business rules of a supplier or an access.",
      "url": "/hotelx/reference/inputobjects/settingsbaseinput"
    },
    {
      "name": "StatsRequest",
      "description": "Contains internal information.",
      "url": "/hotelx/reference/objects/statsrequest"
    },
    {
      "name": "StatAccess",
      "description": "",
      "url": "/hotelx/reference/objects/stataccess"
    },
    {
      "name": "Pax",
      "description": "Specifies the age pax. The range of what is considered an adult, infant or baby is particular to each supplier.",
      "url": "/hotelx/reference/objects/pax"
    },
    {
      "name": "Occupancy",
      "description": "Information about occupancy.",
      "url": "/hotelx/reference/objects/occupancy"
    },
    {
      "name": "Room",
      "description": "Contains the room information of the option returned.",
      "url": "/hotelx/reference/objects/room"
    },
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/hotelx/reference/objects/supplement"
    },
    {
      "name": "Bed",
      "description": "Contains information about a bed.",
      "url": "/hotelx/reference/objects/bed"
    },
    {
      "name": "CancelPenalty",
      "description": "Contains information for cancellation penalities..",
      "url": "/hotelx/reference/objects/cancelpenalty"
    },
    {
      "name": "BookingRoom",
      "description": "",
      "url": "/hotelx/reference/objects/bookingroom"
    },
    {
      "name": "TimeoutInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/timeoutinput"
    },
    {
      "name": "HotelXBusinessRulesInput",
      "description": "List of business rules to use as filter on the options.",
      "url": "/hotelx/reference/inputobjects/hotelxbusinessrulesinput"
    },
    {
      "name": "HotelXAuditInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxauditinput"
    },
    {
      "name": "BookRoomInput",
      "description": "Input BookRoom contains list of pax and the room's reference.",
      "url": "/hotelx/reference/inputobjects/bookroominput"
    },
    {
      "name": "ExpireDateInput",
      "description": "The card expiration date",
      "url": "/hotelx/reference/inputobjects/expiredateinput"
    },
    {
      "name": "BookPaxInput",
      "description": "Input BookPax contains basic information abaout pax suach as name, surname and age.",
      "url": "/hotelx/reference/inputobjects/bookpaxinput"
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
