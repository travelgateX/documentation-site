{
  "title": "ChargeType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/travelgatex/reference/objects/supplement"
    },
    {
      "name": "Surcharge",
      "description": "Surcharge that it can be or it is already added to the option returned. Contains all the information about the surcharge.",
      "url": "/travelgatex/reference/objects/surcharge"
    }
  ],
  "enumValues": [
    {
      "name": "INCLUDE",
      "description": "The charge is included.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "EXCLUDE",
      "description": "The charge is excluded.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "ChargeType",
  "hideGithubLink": true
}
Charge Type
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
