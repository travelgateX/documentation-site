{
  "title": "Country",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelCriteriaSearchInput",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.\nYou must preload the other fields in our system by complete the fields absents.",
      "url": "/hotelx/reference/inputobjects/hotelcriteriasearchinput"
    },
    {
      "name": "HotelXDefaultSettingsData",
      "description": "",
      "url": "/hotelx/reference/objects/hotelxdefaultsettingsdata"
    },
    {
      "name": "Location",
      "description": "Indicates the location of the hotel",
      "url": "/hotelx/reference/objects/location"
    },
    {
      "name": "GeonameData",
      "description": "Geoname data, which contain a reference to his parent location",
      "url": "/hotelx/reference/objects/geonamedata"
    },
    {
      "name": "CriteriaSearch",
      "description": "Search criteria contains destination, travel dates and the number of pax in each room.",
      "url": "/hotelx/reference/objects/criteriasearch"
    },
    {
      "name": "HotelXDefaultSettingsDataInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxdefaultsettingsdatainput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Country",
  "hideGithubLink": true
}
The Country type represents Country values. A good example might be a Passenger Nationality.
In queries or mutations, Country fields have to be specified in ISO 3166-1 alpha-2 format with enclosing double quotes "ES".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
