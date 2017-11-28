{
  "title": "Int",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "PaxInput",
      "description": "Pax object that contains the pax age.",
      "url": "/travelgatex/reference/inputobjects/paxinput"
    },
    {
      "name": "HotelSettingsInput",
      "description": "Settings that you can edit for this avail. Values are loaded by default in our Back Office.",
      "url": "/travelgatex/reference/inputobjects/hotelsettingsinput"
    },
    {
      "name": "BusinessRulesInput",
      "description": "List of business rules to use as filter on the options.",
      "url": "/travelgatex/reference/inputobjects/businessrulesinput"
    },
    {
      "name": "SettingsBaseInput",
      "description": "Contains the time out and business rules of a supplier or an access.",
      "url": "/travelgatex/reference/inputobjects/settingsbaseinput"
    },
    {
      "name": "Pax",
      "description": "Specifies the age pax. The range of what is considered an adult, infant or baby is particular to each supplier.",
      "url": "/travelgatex/reference/objects/pax"
    },
    {
      "name": "Occupancy",
      "description": "Information about occupancy.",
      "url": "/travelgatex/reference/objects/occupancy"
    },
    {
      "name": "Room",
      "description": "Contains the room information of the option returned.",
      "url": "/travelgatex/reference/objects/room"
    },
    {
      "name": "Bed",
      "description": "Contains information about a bed.",
      "url": "/travelgatex/reference/objects/bed"
    },
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/travelgatex/reference/objects/supplement"
    },
    {
      "name": "CancelPenalty",
      "description": "Contains information about a cancel penalty.",
      "url": "/travelgatex/reference/objects/cancelpenalty"
    },
    {
      "name": "BookingRoom",
      "description": "",
      "url": "/travelgatex/reference/objects/bookingroom"
    },
    {
      "name": "Timeout",
      "description": "",
      "url": "/travelgatex/reference/objects/timeout"
    },
    {
      "name": "BusinessRules",
      "description": "List of business rules to filter the options that you are interested.",
      "url": "/travelgatex/reference/objects/businessrules"
    },
    {
      "name": "ExpireDateInput",
      "description": "The card expiration date",
      "url": "/travelgatex/reference/inputobjects/expiredateinput"
    },
    {
      "name": "BookRoomInput",
      "description": "Input BookRoom contains list of pax and the room's reference.",
      "url": "/travelgatex/reference/inputobjects/bookroominput"
    },
    {
      "name": "BookPaxInput",
      "description": "Input BookPax contains basic information abaout pax suach as name, surname and age.",
      "url": "/travelgatex/reference/inputobjects/bookpaxinput"
    },
    {
      "name": "TimeoutInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/timeoutinput"
    },
    {
      "name": "DefaultSettingsBusinessRulesInput",
      "description": "Input delta price, indicates the price variation permitted by the client before failing the booking.",
      "url": "/travelgatex/reference/inputobjects/defaultsettingsbusinessrulesinput"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/groupdata"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Int"
}
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
