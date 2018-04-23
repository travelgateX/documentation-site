{
  "title": "Client",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ClientData",
      "name": "clientData",
      "url": "/travelgatex/reference/objects/clientdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Create date",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Update date",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "ClientEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/clientedge"
    },
    {
      "name": "StatsData",
      "description": "",
      "url": "/travelgatex/reference/objects/statsdata"
    },
    {
      "name": "AdminMutation",
      "description": "",
      "url": "/travelgatex/reference/objects/adminmutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Client"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
