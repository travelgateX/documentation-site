{
  "title": "GroupData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/paymentx/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/paymentx/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupType!",
      "name": "type",
      "url": "/paymentx/reference/enums/grouptype",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "info",
      "url": "/paymentx/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "parent",
      "url": "/paymentx/reference/objects/group",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "children",
      "url": "/paymentx/reference/objects/groupconnection",
      "description": "Only responses children.(non-hierarchically)",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/paymentx/reference/enums/grouptype",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "codeStartsWith",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "GroupConnection",
      "name": "descendents",
      "url": "/paymentx/reference/objects/groupconnection",
      "description": "Response all descendents groups nodes in this group (nom-hierarchically)",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/paymentx/reference/enums/grouptype",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "codeStartsWith",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "GroupConnection",
      "name": "parents",
      "url": "/paymentx/reference/objects/groupconnection",
      "description": "Response all parents groups nodes for this group (nom-hierarchically)",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/paymentx/reference/enums/grouptype",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Member",
      "name": "owner",
      "url": "/paymentx/reference/objects/member",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "productId",
      "url": "/paymentx/reference/scalars/int",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "resourceId",
      "url": "/paymentx/reference/scalars/int",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "MemberConnection",
      "name": "members",
      "url": "/paymentx/reference/objects/memberconnection",
      "description": "Only responses members in this group",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "MemberType",
          "name": "type",
          "url": "/paymentx/reference/enums/membertype",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "APIConnection",
      "name": "apis",
      "url": "/paymentx/reference/objects/apiconnection",
      "description": "APIs assigned to this group. Products have APIs.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "ManagedGroupConnection",
      "name": "managedGroups",
      "url": "/paymentx/reference/objects/managedgroupconnection",
      "description": "Responses all managed groups by this group.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "group",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "[ID!]",
          "name": "api",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "[ID!]",
          "name": "resource",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "[ID!]",
          "name": "role",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "MemberConnection",
      "name": "allMembers",
      "url": "/paymentx/reference/objects/memberconnection",
      "description": "Response all members in this group's childrens (hierarchically),",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "MemberType",
          "name": "type",
          "url": "/paymentx/reference/enums/membertype",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "AccessConnection",
      "name": "accesses",
      "url": "/paymentx/reference/objects/accessconnection",
      "description": "Access resources in a group",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "SupplierConnection",
      "name": "suppliers",
      "url": "/paymentx/reference/objects/supplierconnection",
      "description": "Supplier resources in a group",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "[ID!]",
          "name": "accessID",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "ClientConnection",
      "name": "clients",
      "url": "/paymentx/reference/objects/clientconnection",
      "description": "Clients resources in a group",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "[ID!]",
          "name": "name",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Boolean",
          "name": "isActive",
          "url": "/paymentx/reference/scalars/boolean",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "RoleConnection",
      "name": "roles",
      "url": "/paymentx/reference/objects/roleconnection",
      "description": "You can grant roles to members, which define the roles catalog for a group.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "RoleType",
          "name": "type",
          "url": "/paymentx/reference/enums/roletype",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Group",
      "description": "Groups are organized hierarchically.",
      "url": "/paymentx/reference/objects/group"
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
