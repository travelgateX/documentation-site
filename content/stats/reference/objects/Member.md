{
  "title": "Member",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "MemberData",
      "name": "memberData",
      "url": "/stats/reference/objects/memberdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/stats/reference/objects/advisemessage",
      "description": "List of advise messages.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/stats/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/stats/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/stats/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "OrganizationData",
      "description": "",
      "url": "/stats/reference/objects/organizationdata"
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/stats/reference/interfaces/groupcommondata"
    },
    {
      "name": "MemberEdge",
      "description": "",
      "url": "/stats/reference/objects/memberedge"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/stats/reference/objects/groupdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Member",
  "hideGithubLink": true
}
You grant access to members which can be either:
Users: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.
Service Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
