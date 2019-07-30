{
  "title": "AdminMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Access",
      "name": "createAccess",
      "url": "/travelgatex/reference/objects/access",
      "description": "Creates an Access",
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
      "description": "Updates an Access",
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
      "description": "Grants Access visibility to a group",
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
      "description": "Removes Access visibility to groups",
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
      "description": "Grants Supplier visibility to a group",
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
      "description": "Removes Supplier visibility to groups",
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
      "name": "grantClientToGroup",
      "url": "/travelgatex/reference/objects/client",
      "description": "Grants Client visibility to a group.",
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
      "name": "deleteClientFromGroup",
      "url": "/travelgatex/reference/objects/client",
      "description": "Removes Client visibility to groups.",
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
          "typeString": "CreateClientInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/createclientinput",
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
          "typeString": "UpdateClientInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/updateclientinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Profile",
      "name": "createProfile",
      "url": "/travelgatex/reference/objects/profile",
      "description": "Creates a Profile.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "CreateProfileInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/createprofileinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Profile",
      "name": "updateProfile",
      "url": "/travelgatex/reference/objects/profile",
      "description": "Updates a Profile.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "UpdateProfileInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/updateprofileinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Profile",
      "name": "addEntitiesToProfile",
      "url": "/travelgatex/reference/objects/profile",
      "description": "Adds entities to a Profile.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "UpdateEntitiesInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/updateentitiesinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Profile",
      "name": "removeEntitiesFromProfile",
      "url": "/travelgatex/reference/objects/profile",
      "description": "Removes entities from a Profile.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "UpdateEntitiesInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/updateentitiesinput",
          "description": ""
        }
      ]
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
  "requireby": [
    {
      "name": "Mutation",
      "description": "The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AdminMutation",
  "hideGithubLink": true
}
The admin query root of TravelgateX's for implementing GraphQL mutations.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
