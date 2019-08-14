{
  "title": "GroupData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/alerts-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupType!",
      "name": "type",
      "url": "/alerts-x/reference/enums/grouptype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "info",
      "url": "/alerts-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "parent",
      "url": "/alerts-x/reference/objects/group",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "children",
      "url": "/alerts-x/reference/objects/groupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/alerts-x/reference/enums/grouptype",
          "description": null
        },
        {
          "typeString": "String",
          "name": "codeStartsWith",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "GroupConnection",
      "name": "descendents",
      "url": "/alerts-x/reference/objects/groupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/alerts-x/reference/enums/grouptype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "codeStartsWith",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "GroupConnection",
      "name": "parents",
      "url": "/alerts-x/reference/objects/groupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "String",
          "name": "codeStartsWith",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/alerts-x/reference/enums/grouptype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "Member",
      "name": "owner",
      "url": "/alerts-x/reference/objects/member",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/alerts-x/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "productId",
      "url": "/alerts-x/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "resourceId",
      "url": "/alerts-x/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "siblings",
      "url": "/alerts-x/reference/objects/groupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/alerts-x/reference/enums/grouptype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "codeStartsWith",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "MemberConnection",
      "name": "members",
      "url": "/alerts-x/reference/objects/memberconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "MemberType",
          "name": "type",
          "url": "/alerts-x/reference/enums/membertype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "APIConnection",
      "name": "apis",
      "url": "/alerts-x/reference/objects/apiconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "ManagedGroupConnection",
      "name": "managedGroups",
      "url": "/alerts-x/reference/objects/managedgroupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "group",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "[ID!]",
          "name": "api",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "[ID!]",
          "name": "resource",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "[ID!]",
          "name": "role",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "MemberConnection",
      "name": "allMembers",
      "url": "/alerts-x/reference/objects/memberconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "MemberType",
          "name": "type",
          "url": "/alerts-x/reference/enums/membertype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "AccessConnection",
      "name": "accesses",
      "url": "/alerts-x/reference/objects/accessconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "SupplierConnection",
      "name": "suppliers",
      "url": "/alerts-x/reference/objects/supplierconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "[ID!]",
          "name": "accessID",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "ClientConnection",
      "name": "clients",
      "url": "/alerts-x/reference/objects/clientconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "[ID!]",
          "name": "name",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Boolean",
          "name": "isActive",
          "url": "/alerts-x/reference/scalars/boolean",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "RoleConnection",
      "name": "roles",
      "url": "/alerts-x/reference/objects/roleconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "RoleType",
          "name": "type",
          "url": "/alerts-x/reference/enums/roletype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "ProfileConnection",
      "name": "profiles",
      "url": "/alerts-x/reference/objects/profileconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alerts-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alerts-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alerts-x/reference/scalars/string",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Group",
      "description": null,
      "url": "/alerts-x/reference/objects/group"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "GroupData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
