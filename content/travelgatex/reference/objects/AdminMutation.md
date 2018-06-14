{
  "title": "AdminMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean",
      "name": "a",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization!",
      "name": "createOrganization",
      "url": "/travelgatex/reference/objects/organization",
      "description": "Create organization. Require an user to be specified as the owner of the group.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "CreateOrganizationInput!",
          "name": "organization",
          "url": "/travelgatex/reference/inputobjects/createorganizationinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Member!",
      "name": "createMember",
      "url": "/travelgatex/reference/objects/member",
      "description": "Create member; requires specific group and role",
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
      "description": "Create group; group \"owner\" is optional",
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
      "description": "Update member additions or remove roles",
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
      "description": "Update group additions or remove APIs",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "UpdateGroupInput!",
          "name": "group",
          "url": "/travelgatex/reference/inputobjects/updategroupinput",
          "description": ""
        },
        {
          "typeString": "Method!",
          "name": "method",
          "url": "/travelgatex/reference/enums/method",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Member!",
      "name": "deleteMember",
      "url": "/travelgatex/reference/objects/member",
      "description": "Delete a member from specific group",
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
      "description": "Delete group and members from this group",
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
      "description": "The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AdminMutation"
}
The admin query root of TravelgateX's for implementing GraphQL mutations.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
