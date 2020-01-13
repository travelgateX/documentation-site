{
  "title": "CheckInformation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[Text!]",
      "name": "instructions",
      "url": "/travelgatex/reference/objects/text",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": null
        }
      ]
    },
    {
      "typeString": "[Text!]",
      "name": "specialInstructions",
      "url": "/travelgatex/reference/objects/text",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[Language!]",
          "name": "languages",
          "url": "/travelgatex/reference/scalars/language",
          "description": null
        }
      ]
    },
    {
      "typeString": "Int",
      "name": "minAge",
      "url": "/travelgatex/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "TimeRange",
      "name": "schedule",
      "url": "/travelgatex/reference/objects/timerange",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelData",
      "description": null,
      "url": "/travelgatex/reference/objects/hoteldata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "CheckInformation",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
