{
  "title": "Destination",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotelx/reference/scalars/id",
      "description": "Destination ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationData",
      "name": "destinationData",
      "url": "/hotelx/reference/objects/destinationdata",
      "description": "Destination data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "error",
      "url": "/hotelx/reference/objects/advisemessage",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotelx/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "DestinationEdge",
      "description": "DestinationList Edge definition",
      "url": "/hotelx/reference/objects/destinationedge"
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
