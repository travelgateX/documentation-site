{
  "title": "Mapping",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[MappingContext!]",
      "name": "contexts",
      "url": "/travelgatex/reference/objects/mappingcontext",
      "description": "Returns the differents group contexts, you can filter by some contexts.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "[Error!]",
      "name": "errors",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Warning!]",
      "name": "warnings",
      "url": "/travelgatex/reference/objects/warning",
      "description": "Potentially harmful situations or errors that won't force the service to abort",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Query",
      "description": "",
      "url": "/travelgatex/reference/schema/query"
    },
    {
      "name": "HotelXQuery",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxquery"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Mapping"
}
Returns the mapping for a group.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
