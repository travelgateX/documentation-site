{
  "title": "DestinationEdge",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "cursor",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Destination",
      "name": "node",
      "url": "/travelgatex/reference/objects/destination",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "DestinationConnection",
      "description": "DestinationList definition",
      "url": "/travelgatex/reference/objects/destinationconnection"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "DestinationEdge"
}
DestinationList Edge definition
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
