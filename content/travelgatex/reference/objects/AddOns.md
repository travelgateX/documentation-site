{
  "title": "AddOns",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[AddOn!]",
      "name": "distribution",
      "url": "/travelgatex/reference/objects/addon",
      "description": "Extra information from the distribution layer",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": [
    {
      "typeString": "JSON",
      "name": "distribute",
      "url": "/travelgatex/reference/scalars/json",
      "description": "Extra information from the distribution layer",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "deprecated from 2018-03-12. You can find it in distribution AddOn"
    }
  ],
  "requireby": [
    {
      "name": "HotelOptionSearch",
      "description": "An option includes hotel information, meal plan, total price, conditions and room description",
      "url": "/travelgatex/reference/objects/hoteloptionsearch"
    },
    {
      "name": "HotelOptionQuote",
      "description": "Contains information about quote(s)",
      "url": "/travelgatex/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking",
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AddOns"
}
Additional information about the option.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
