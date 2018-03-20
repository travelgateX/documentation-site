{
  "title": "Country",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Location",
      "description": "Indicates the location of the hotel.",
      "url": "/travelgatex/reference/objects/location"
    },
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
The Country type represents Country values. A good example might be a Passenger Nationality.
In queries or mutations, Country fields have to be specified in ISO 3166-1 alpha-2 format with enclosing double quotes "ES".
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
