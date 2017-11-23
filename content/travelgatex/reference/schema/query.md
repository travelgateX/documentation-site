{
  "title": "Query",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Search!",
      "name": "search",
      "url": "/travelgatex/reference/objects/search",
      "description": "Available options for a given date and itinerary.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Quote!",
      "name": "quote",
      "url": "/travelgatex/reference/objects/quote",
      "description": "Returns the total price and cancellation policies of the Option selected in the previous step (Search).",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Booking",
      "name": "booking",
      "url": "/travelgatex/reference/objects/booking",
      "description": "Returns detailed information about books.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[GroupAccess!]",
      "name": "access",
      "url": "/travelgatex/reference/objects/groupaccess",
      "description": "Returns accesses grouped by 'groups'.\nIf access identifiers 'ids' are sent, only those accesses will be read.\nIf 'groupsCodes' are sent, only accesses for these groups will be read\nRequesting this query without any of these filters will provide all requestor accesses",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "ids",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "[String!]",
          "name": "groupCodes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "DefaultSettings",
      "name": "defaultSettings",
      "url": "/travelgatex/reference/objects/defaultsettings",
      "description": "Reads defaultSettings of the given group",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "[Supplier!]",
      "name": "supplier",
      "url": "/travelgatex/reference/objects/supplier",
      "description": "Returns suppliers and their groups.\nIf supplier identifiers 'ids' are sent, only those  will be read.\nIf 'groupsCodes' are sent, only suppliers for these groups will be read\nRequesting this query without any of these filters will provide all requestor suppliers",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "ids",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "[String!]",
          "name": "groupCodes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "[ConnectUser!]",
      "name": "connectUser",
      "url": "/travelgatex/reference/objects/connectuser",
      "description": "Returns connect users and their groups.\nIf connect user identifiers 'ids' are sent, only those  will be read.\nIf 'groupsCodes' are sent, only connect user for these groups will be read\nRequesting this query without any of these filters will provide all requestor connect users",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "ids",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "[String!]",
          "name": "groupCodes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Mapping!",
      "name": "mapping",
      "url": "/travelgatex/reference/objects/mapping",
      "description": "Returns the mapping for a group, is necessary specify the group.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "ServiceStatus!",
      "name": "searchStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the search service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "quoteStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the quote service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the new booking service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "cancelStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the cancellation service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookingStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "TODO: me no understand...\nReturns status of the booking service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "HotelConnection!",
      "name": "hotels",
      "url": "/travelgatex/reference/objects/hotelconnection",
      "description": "Query to obtain Hotels",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "language",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "Last",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Query"
}
The query type, represents all of the entry points into our object graph.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
