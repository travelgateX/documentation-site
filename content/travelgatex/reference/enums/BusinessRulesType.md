{
  "title": "BusinessRulesType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "BusinessRules",
      "description": "List of business rules for filtering options based on your interests.",
      "url": "/travelgatex/reference/objects/businessrules"
    },
    {
      "name": "BusinessRulesInput",
      "description": "List of business rules to use as filter on the options.",
      "url": "/travelgatex/reference/inputobjects/businessrulesinput"
    },
    {
      "name": "HotelXBusinessRulesInput",
      "description": "List of business rules to use as filter on the options.",
      "url": "/travelgatex/reference/inputobjects/hotelxbusinessrulesinput"
    }
  ],
  "enumValues": [
    {
      "name": "CHEAPER_AMOUNT",
      "description": "The cheapest options is returned without exceeding the optionsQuota limit.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "ROOM_TYPE",
      "description": "Groups the option by room type without exceeding the optionsQuota limit.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "BusinessRulesType",
  "hideGithubLink": true
}
Business rules type
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
