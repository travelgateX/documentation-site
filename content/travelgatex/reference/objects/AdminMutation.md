{
  "title": "AdminMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Member!",
      "name": "createMember",
      "url": "/travelgatex/reference/objects/member",
      "description": "Create member. Requires specific group and role.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "CreateMemberInput!",
          "name": "member",
          "url": "/travelgatex/reference/inputobjects/creatememberinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Group!",
      "name": "createGroup",
      "url": "/travelgatex/reference/objects/group",
      "description": "Create group. Group \"owner\" is optional.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "CreateGroupInput!",
          "name": "group",
          "url": "/travelgatex/reference/inputobjects/creategroupinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Member!",
      "name": "updateMember",
      "url": "/travelgatex/reference/objects/member",
      "description": "Update member adding or removing roles.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "UpdateMemberInput!",
          "name": "member",
          "url": "/travelgatex/reference/inputobjects/updatememberinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Group!",
      "name": "updateGroup",
      "url": "/travelgatex/reference/objects/group",
      "description": "Update group adding or removing apis.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "UpdateGroupInput!",
          "name": "group",
          "url": "/travelgatex/reference/inputobjects/updategroupinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Member!",
      "name": "deleteMember",
      "url": "/travelgatex/reference/objects/member",
      "description": "Delete member from specific group.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[DeleteMemberInput!]!",
          "name": "member",
          "url": "/travelgatex/reference/inputobjects/deletememberinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Group!",
      "name": "deleteGroup",
      "url": "/travelgatex/reference/objects/group",
      "description": "Delete group and members from this group.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "DeleteGroupInput!",
          "name": "group",
          "url": "/travelgatex/reference/inputobjects/deletegroupinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
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
