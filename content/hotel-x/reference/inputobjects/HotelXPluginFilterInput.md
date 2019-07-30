{
  "title": "HotelXPluginFilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[HotelXFilterPluginTypeInput!]",
      "name": "includes",
      "url": "/hotel-x/reference/inputobjects/hotelxfilterplugintypeinput",
      "description": "Plugins to include (only these plugins will be executed)",
      "args": null
    },
    {
      "typeString": "[HotelXFilterPluginTypeInput!]",
      "name": "excludes",
      "url": "/hotel-x/reference/inputobjects/hotelxfilterplugintypeinput",
      "description": "Plugins to exclude",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXFilterSearchInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxfiltersearchinput"
    },
    {
      "name": "HotelXFilterInput",
      "description": "",
      "url": "/hotel-x/reference/inputobjects/hotelxfilterinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXPluginFilterInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
