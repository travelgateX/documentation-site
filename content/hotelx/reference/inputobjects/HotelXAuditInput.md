{
  "title": "HotelXAuditInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean!",
      "name": "audit",
      "url": "/hotelx/reference/scalars/boolean",
      "description": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "register",
      "url": "/hotelx/reference/scalars/boolean",
      "description": "",
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "ratio",
      "url": "/hotelx/reference/scalars/int",
      "description": "Ratio of audit in ms",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXCommonSettingsDataInput",
      "description": "",
      "url": "/hotelx/reference/inputobjects/hotelxcommonsettingsdatainput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXAuditInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
