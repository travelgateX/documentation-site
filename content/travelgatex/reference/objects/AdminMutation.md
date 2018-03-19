{
  "title": "AdminMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Access",
      "name": "createAccess",
      "url": "/travelgatex/reference/objects/access",
      "description": "Creates an Access.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "AccessInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/accessinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Access",
      "name": "updateAccess",
      "url": "/travelgatex/reference/objects/access",
      "description": "Updates an Access.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "AccessInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/accessinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Access",
      "name": "grantAccessToGroup",
      "url": "/travelgatex/reference/objects/access",
      "description": "Grants Access visibility to a group.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "GroupInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/groupinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Access",
      "name": "deleteAccessFromGroup",
      "url": "/travelgatex/reference/objects/access",
      "description": "Removes Access visibility to groups.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "GroupInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/groupinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Supplier",
      "name": "grantSupplierToGroup",
      "url": "/travelgatex/reference/objects/supplier",
      "description": "Grants Supplier visibility to a group.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "GroupInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/groupinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Supplier",
      "name": "deleteSupplierFromGroup",
      "url": "/travelgatex/reference/objects/supplier",
      "description": "Removes Supplier visibility to groups.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "GroupInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/groupinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Client",
      "name": "createClient",
      "url": "/travelgatex/reference/objects/client",
      "description": "Creates a Client.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ClientInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/clientinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Client",
      "name": "updateClient",
      "url": "/travelgatex/reference/objects/client",
      "description": "Updates a Client.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ClientInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/clientinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Member!",
      "name": "createMember",
      "url": "/travelgatex/reference/objects/member",
      "description": "Create member. Requires specific group and role.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "CreateMemberInput!",
          "name": "member",
          "url": "/travelgatex/reference/inputobjects/creatememberinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Group!",
      "name": "createGroup",
      "url": "/travelgatex/reference/objects/group",
      "description": "Create group. Group \"owner\" is optional.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "CreateGroupInput!",
          "name": "group",
          "url": "/travelgatex/reference/inputobjects/creategroupinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Member!",
      "name": "updateMember",
      "url": "/travelgatex/reference/objects/member",
      "description": "Update member adding or removing roles.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "UpdateMemberInput!",
          "name": "member",
          "url": "/travelgatex/reference/inputobjects/updatememberinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Group!",
      "name": "updateGroup",
      "url": "/travelgatex/reference/objects/group",
      "description": "Update group adding or removing apis.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "UpdateGroupInput!",
          "name": "group",
          "url": "/travelgatex/reference/inputobjects/updategroupinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Member!",
      "name": "deleteMember",
      "url": "/travelgatex/reference/objects/member",
      "description": "Delete member from specific group.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[DeleteMemberInput!]!",
          "name": "member",
          "url": "/travelgatex/reference/inputobjects/deletememberinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Group!",
      "name": "deleteGroup",
      "url": "/travelgatex/reference/objects/group",
      "description": "Delete group and members from this group.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "DeleteGroupInput!",
          "name": "group",
          "url": "/travelgatex/reference/inputobjects/deletegroupinput",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Mutation",
      "description": "Mutations are operations that change or update data in the server.",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AdminMutation"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
