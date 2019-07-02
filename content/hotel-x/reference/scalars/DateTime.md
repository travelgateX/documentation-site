{
  "title": "DateTime",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelXHotelFilterInput",
      "description": "By default: Logical AND on all given filters.",
      "url": "/hotel-x/reference/inputobjects/hotelxhotelfilterinput"
    },
    {
      "name": "HotelRuntimeConfiguration",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelruntimeconfiguration"
    },
    {
      "name": "Board",
      "description": "Board type.",
      "url": "/hotel-x/reference/objects/board"
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
      "name": "Hotel",
      "description": "Hotel Type",
      "url": "/hotel-x/reference/objects/hotel"
    },
    {
      "name": "Media",
      "description": "Contains media information.",
      "url": "/hotel-x/reference/objects/media"
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
      "name": "RoomStatic",
      "description": "Room Type",
      "url": "/hotel-x/reference/objects/roomstatic"
    },
    {
      "name": "Destination",
      "description": "Destination Type",
      "url": "/hotel-x/reference/objects/destination"
    },
    {
      "name": "AuditData",
      "description": "Data sent and received in the supplier’s native format.",
      "url": "/hotel-x/reference/objects/auditdata"
    },
    {
      "name": "Stat",
      "description": "",
      "url": "/hotel-x/reference/objects/stat"
    },
    {
      "name": "Transactions",
      "description": "Supplier transaction",
      "url": "/hotel-x/reference/objects/transactions"
    },
    {
      "name": "HotelXUpdateStatus",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxupdatestatus"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "DateTime",
  "hideGithubLink": true
}
The DateTime type represents DateTime values. A good example might be a transaction TimeSpan.
In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: "2017-10-22T13:57:31.123Z".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
