{
  "title": "DateType",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "CriteriaBookingDatesInput",
      "description": "Criteria by dates",
      "url": "/travelgatex/reference/inputobjects/criteriabookingdatesinput"
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
  "typename": "DateType"
}
Indicates the type of dates
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
