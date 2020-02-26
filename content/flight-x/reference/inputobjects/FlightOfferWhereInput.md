{
  "title": "FlightOfferWhereInput",
  "description": "FlightOfferWhereInput are the criteria we set for our query. All offers returned by Search will have those characteristics in case there are no offers that meet those requirements an error will be returned.",
  "weight": 1,
  "fields": [
    {
      "typeString": "[FlightOfferWhereInput!]",
      "name": "AND",
      "url": null,
      "description": "It has not been developed yet.",
      "args": null
    },
    {
      "typeString": "[FlightOfferWhereInput!]",
      "name": "OR",
      "url": null,
      "description": "It has not been developed yet.",
      "args": null
    },
    {
      "typeString": "[FlightOfferWhereInput!]",
      "name": "NOT",
      "url": null,
      "description": "It has not been developed yet.",
      "args": null
    },
    {
      "typeString": "[FlightOriginDestCriteriaInput!]",
      "name": "originDestCriteria_in",
      "url": "/flight-x/reference/inputobjects/flightorigindestcriteriainput",
      "description": null,
      "args": null
    },
    {
      "typeString": "[int!]",
      "name": "age_in",
      "url": "/flight-x/reference/scalar/int",
      "description": "Passengers ages",
      "args": null
    },
    {
      "typeString": "[Discount!]",
      "name": "discount_in",
      "url": null,
      "description": "It has not been developed yet.",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FlightXQuery",
      "description": null,
      "url": "/flight-x/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "FlightOfferWhereInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
