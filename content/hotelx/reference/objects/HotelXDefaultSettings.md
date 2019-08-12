{
  "title": "HotelXDefaultSettings",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelXDefaultSettingsData",
      "name": "settings",
      "url": "/hotelx/reference/objects/hotelxdefaultsettingsdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/hotelx/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/hotelx/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "HotelXQuery",
      "description": null,
      "url": "/hotelx/reference/objects/hotelxquery"
    },
    {
      "name": "HotelXMutation",
      "description": null,
      "url": "/hotelx/reference/objects/hotelxmutation"
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
