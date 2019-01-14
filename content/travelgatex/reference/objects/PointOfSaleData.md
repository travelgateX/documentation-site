{
  "title": "PointOfSaleData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "POS Identifier",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "POS Name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/travelgatex/reference/objects/organization",
      "description": "POS owner",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PointOfSale",
      "description": "",
      "url": "/travelgatex/reference/objects/pointofsale"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PointOfSaleData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
