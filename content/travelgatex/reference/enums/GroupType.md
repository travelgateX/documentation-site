{
  "title": "GroupType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "OrganizationData",
      "description": "",
      "url": "/travelgatex/reference/objects/organizationdata"
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/travelgatex/reference/interfaces/groupcommondata"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/groupdata"
    },
    {
      "name": "CreateGroupInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/creategroupinput"
    }
  ],
  "enumValues": [
    {
      "name": "GROUP",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "PROFILE",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "TEAM",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "FOLDER",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "PRODUCT",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "RESOURCE",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "SPECIFIC_RESOURCE",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "GroupType"
}
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
