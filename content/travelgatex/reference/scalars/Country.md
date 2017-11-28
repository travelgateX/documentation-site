{
  "title": "Country",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelCriteriaSearchInput",
      "description": "Criteria of search contains destination, travel dates and the number of pax in each room.\nYou must preload the other fields in our system by complete the fields absents.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriasearchinput"
    },
    {
      "name": "CriteriaSearch",
      "description": "Criteria of search contains destination, travel dates and the number of pax in each room.",
      "url": "/travelgatex/reference/objects/criteriasearch"
    },
    {
      "name": "Location",
      "description": "Location",
      "url": "/travelgatex/reference/objects/location"
    },
    {
      "name": "DefaultSettings",
      "description": "",
      "url": "/travelgatex/reference/objects/defaultsettings"
    },
    {
      "name": "DefaultSettingsInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/defaultsettingsinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Country"
}
ISO 3166-1 alpha-2
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
