{
  "title": "AccessConnectUserInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "connect user code",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the connect user is active.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[ConnectUserGroupInput!]",
      "name": "groups",
      "url": "/travelgatex/reference/inputobjects/connectusergroupinput",
      "description": "groups related to this connect user",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "AccessConnectUserInput"
}
Connect user input for data access management API
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
