{
  "title": "HotelXCommonSettings",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelXCommonSettingsData",
      "name": "settings",
      "url": "/travelgatex/reference/objects/hotelxcommonsettingsdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "HotelXQuery",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelxquery"
    },
    {
      "name": "HotelXMutation",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelxmutation"
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
