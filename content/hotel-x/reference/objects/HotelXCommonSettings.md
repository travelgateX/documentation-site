{
  "title": "HotelXCommonSettings",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelXCommonSettingsData",
      "name": "settings",
      "url": "/hotel-x/reference/objects/hotelxcommonsettingsdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/hotel-x/reference/objects/advisemessage",
      "description": "List of messages",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/hotel-x/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "HotelXQuery",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxquery"
    },
    {
      "name": "HotelXMutation",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxmutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXCommonSettings",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
