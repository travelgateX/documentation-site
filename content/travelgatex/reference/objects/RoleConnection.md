{
  "title": "RoleConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[RoleEdge]",
      "name": "edges",
      "url": "/travelgatex/reference/objects/roleedge",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/travelgatex/reference/objects/pageinfo",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "AdminQuery",
      "description": "The admin query root of TravelgateX's GraphQL interface.",
      "url": "/travelgatex/reference/objects/adminquery"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/groupdata"
    },
    {
      "name": "MemberData",
      "description": "",
      "url": "/travelgatex/reference/objects/memberdata"
    },
    {
      "name": "ResourceData",
      "description": "",
      "url": "/travelgatex/reference/objects/resourcedata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RoleConnection"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
