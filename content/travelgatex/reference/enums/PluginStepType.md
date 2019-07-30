{
  "title": "PluginStepType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelXDefaultPlugin",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxdefaultplugin"
    },
    {
      "name": "PluginStepInput",
      "description": "Plugin to execute.",
      "url": "/travelgatex/reference/inputobjects/pluginstepinput"
    },
    {
      "name": "HotelXFilterPluginTypeInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxfilterplugintypeinput"
    },
    {
      "name": "HotelXDefaultPluginStepInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxdefaultpluginstepinput"
    },
    {
      "name": "HotelXDefaultPluginInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxdefaultplugininput"
    }
  ],
  "enumValues": [
    {
      "name": "REQUEST",
      "description": "Plugins executed after Buyer requests message to HotelX",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "REQUEST_ACCESS",
      "description": "Plugins executed before sending request to Supplier using Access and after Accesses have been calculated",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "RESPONSE_OPTION",
      "description": "Plugins executed after Supplier responds message. For every option returned",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "RESPONSE_ACCESS",
      "description": "Plugins executed after all Access options has been responded",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "RESPONSE",
      "description": "Plugins executed before HotelX responds message to to Buyer",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "PluginStepType",
  "hideGithubLink": true
}
Plugin Step Type. https://docs.travelgatex.com/hotel-x/plugins/overview/
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
