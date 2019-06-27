{
  "title": "Mapping",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[MappingContext!]",
      "name": "contexts",
      "url": "/hotelx/reference/objects/mappingcontext",
      "description": "Returns the differents group contexts, you can filter by some contexts.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/hotelx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "[Error!]",
      "name": "errors",
      "url": "/hotelx/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Warning!]",
      "name": "warnings",
      "url": "/hotelx/reference/objects/warning",
      "description": "Potentially harmful situations or errors that won't force the service to abort",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXQuery",
      "description": "",
      "url": "/hotelx/reference/objects/hotelxquery"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Mapping",
  "hideGithubLink": true
}
Returns the mapping for a group.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
