{
  "title": "DateType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "CriteriaBookingDatesInput",
      "description": "Criteria by dates",
      "url": "/hotel-x/reference/inputobjects/criteriabookingdatesinput"
    }
  ],
  "enumValues": [
    {
      "name": "ARRIVAL",
      "description": "Arrival Date",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "BOOKING",
      "description": "Booking Creation",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "DateType",
  "hideGithubLink": true
}
Indicates the type of dates
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
