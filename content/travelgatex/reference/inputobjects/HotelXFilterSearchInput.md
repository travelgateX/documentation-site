{
  "title": "HotelXFilterSearchInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AccessFilterInput",
      "name": "access",
      "url": "/travelgatex/reference/inputobjects/accessfilterinput",
      "description": "You can specify one of the filters or any of them. In this latter case, all the configurated accesses will be executed.",
      "args": null
    },
    {
      "typeString": "RateRulesFilterInput",
      "name": "rateRules",
      "url": "/travelgatex/reference/inputobjects/raterulesfilterinput",
      "description": "If requested, only options with the specified rateRules will be returned",
      "args": null
    },
    {
      "typeString": "HotelXPluginFilterInput",
      "name": "plugin",
      "url": "/travelgatex/reference/inputobjects/hotelxpluginfilterinput",
      "description": "Only is possible to specify one of this filters, it allows to filter which plugins have to be executed or excluded",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXFilterSearchInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
