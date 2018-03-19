{
  "title": "Query",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelXQuery",
      "name": "hotelX",
      "url": "/travelgatex/reference/objects/hotelxquery",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AdminQuery",
      "name": "admin",
      "url": "/travelgatex/reference/objects/adminquery",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": [
    {
      "typeString": "Search!",
      "name": "search",
      "url": "/travelgatex/reference/objects/search",
      "description": "Available options for a given date and itinerary.",
      "isDeprecated": true,
      "args": null
    },
    {
      "typeString": "Quote!",
      "name": "quote",
      "url": "/travelgatex/reference/objects/quote",
      "description": "Returns the total price and cancellation policies of the Option selected in the previous step (Search).",
      "isDeprecated": true,
      "args": null
    },
    {
      "typeString": "Booking",
      "name": "booking",
      "url": "/travelgatex/reference/objects/booking",
      "description": "Returns detailed information about books.",
      "isDeprecated": true,
      "args": null
    },
    {
      "typeString": "DefaultSettings",
      "name": "defaultSettings",
      "url": "/travelgatex/reference/objects/defaultsettings",
      "description": "Reads defaultSettings of the given group",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Mapping!",
      "name": "mapping",
      "url": "/travelgatex/reference/objects/mapping",
      "description": "Returns the mapping for a group, is necessary specify the group.",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Query"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
