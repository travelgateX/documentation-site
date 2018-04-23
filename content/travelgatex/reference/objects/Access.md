{
  "title": "Access",
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
      "typeString": "AccessData",
      "name": "accessData",
      "url": "/travelgatex/reference/objects/accessdata",
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
      "name": "AccessEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/accessedge"
    },
    {
      "name": "AccessData",
      "description": "",
      "url": "/travelgatex/reference/objects/accessdata"
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
  "typename": "Access"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
