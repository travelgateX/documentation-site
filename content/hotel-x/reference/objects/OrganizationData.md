{
  "title": "OrganizationData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupType!",
      "name": "type",
      "url": "/hotel-x/reference/enums/grouptype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "info",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "children",
      "url": "/hotel-x/reference/objects/groupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/hotel-x/reference/enums/grouptype",
          "description": null
        },
        {
          "typeString": "String",
          "name": "codeStartsWith",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "GroupConnection",
      "name": "descendents",
      "url": "/hotel-x/reference/objects/groupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/hotel-x/reference/enums/grouptype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "codeStartsWith",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "GroupConnection",
      "name": "parents",
      "url": "/hotel-x/reference/objects/groupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/hotel-x/reference/enums/grouptype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "Member",
      "name": "owner",
      "url": "/hotel-x/reference/objects/member",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "MemberConnection",
      "name": "members",
      "url": "/hotel-x/reference/objects/memberconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "MemberType",
          "name": "type",
          "url": "/hotel-x/reference/enums/membertype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "APIConnection",
      "name": "apis",
      "url": "/hotel-x/reference/objects/apiconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "ProductConnection",
      "name": "products",
      "url": "/hotel-x/reference/objects/productconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "MemberConnection",
      "name": "allMembers",
      "url": "/hotel-x/reference/objects/memberconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "MemberType",
          "name": "type",
          "url": "/hotel-x/reference/enums/membertype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "AccessConnection",
      "name": "accesses",
      "url": "/hotel-x/reference/objects/accessconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "SupplierConnection",
      "name": "suppliers",
      "url": "/hotel-x/reference/objects/supplierconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "[ID!]",
          "name": "accessID",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "ClientConnection",
      "name": "clients",
      "url": "/hotel-x/reference/objects/clientconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "[ID!]",
          "name": "name",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Boolean",
          "name": "isActive",
          "url": "/hotel-x/reference/scalars/boolean",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "ProfileConnection",
      "name": "profiles",
      "url": "/hotel-x/reference/objects/profileconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "[Domain]!",
      "name": "domains",
      "url": "/hotel-x/reference/objects/domain",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "template",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Country!",
      "name": "country",
      "url": "/hotel-x/reference/scalars/country",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AccessConnection",
      "name": "allAccesses",
      "url": "/hotel-x/reference/objects/accessconnection",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "SupplierConnection",
      "name": "allSuppliers",
      "url": "/hotel-x/reference/objects/supplierconnection",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ClientConnection",
      "name": "allClients",
      "url": "/hotel-x/reference/objects/clientconnection",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ProfileConnection",
      "name": "allProfiles",
      "url": "/hotel-x/reference/objects/profileconnection",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Organization",
      "description": null,
      "url": "/hotel-x/reference/objects/organization"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "OrganizationData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
