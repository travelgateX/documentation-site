{
  "title": "Client",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ClientData",
      "name": "clientData",
      "url": "/stats/reference/objects/clientdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/stats/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/stats/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/stats/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "StatsData",
      "description": "",
      "url": "/stats/reference/objects/statsdata"
    },
    {
      "name": "ClientEdge",
      "description": "",
      "url": "/stats/reference/objects/clientedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Client",
  "hideGithubLink": true
}
Client identifies who is making the request and holds the configuration assigned to it.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
