{
  "title": "GroupCommonData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/stats/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/stats/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupType!",
      "name": "type",
      "url": "/stats/reference/enums/grouptype",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "info",
      "url": "/stats/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "children",
      "url": "/stats/reference/objects/groupconnection",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Member",
      "name": "owner",
      "url": "/stats/reference/objects/member",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/stats/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "MemberConnection",
      "name": "members",
      "url": "/stats/reference/objects/memberconnection",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "MemberType",
          "name": "type",
          "url": "/stats/reference/enums/membertype",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "APIConnection",
      "name": "apis",
      "url": "/stats/reference/objects/apiconnection",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "MemberConnection",
      "name": "allMembers",
      "url": "/stats/reference/objects/memberconnection",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "MemberType",
          "name": "type",
          "url": "/stats/reference/enums/membertype",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "AccessConnection",
      "name": "accesses",
      "url": "/stats/reference/objects/accessconnection",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "SupplierConnection",
      "name": "suppliers",
      "url": "/stats/reference/objects/supplierconnection",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "[ID!]",
          "name": "accessID",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "ClientConnection",
      "name": "clients",
      "url": "/stats/reference/objects/clientconnection",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "[ID!]",
          "name": "name",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Boolean",
          "name": "isActive",
          "url": "/stats/reference/scalars/boolean",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": ""
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "interface",
  "typename": "GroupCommonData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
