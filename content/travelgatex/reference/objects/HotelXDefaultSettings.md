{
  "title": "HotelXDefaultSettings",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelXDefaultSettingsData",
      "name": "settings",
      "url": "/travelgatex/reference/objects/hotelxdefaultsettingsdata",
      "description": "Data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": "List of messages",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "HotelXQuery",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxquery"
    },
    {
      "name": "HotelXMutation",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxmutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXDefaultSettings",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
