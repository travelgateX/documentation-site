{
  "title": "ReferenceFilter",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[String]",
      "name": "client",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "args": null
    },
    {
      "typeString": "[String]",
      "name": "supplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "LoggingLegacyFilterInput",
      "description": "Filters needed to do a search.\nFrom (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss), ",
      "url": "/travelgatex/reference/inputobjects/logginglegacyfilterinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ReferenceFilter",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
