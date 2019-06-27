{
  "title": "Destination",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Destination ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationData",
      "name": "destinationData",
      "url": "/travelgatex/reference/objects/destinationdata",
      "description": "Destination data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "DestinationEdge",
      "description": "DestinationList Edge definition",
      "url": "/travelgatex/reference/objects/destinationedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Destination",
  "hideGithubLink": true
}
Destination Type
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
