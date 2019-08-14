{
  "title": "Organization",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alerts-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OrganizationData",
      "name": "organizationData",
      "url": "/alerts-x/reference/objects/organizationdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/alerts-x/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/alerts-x/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/alerts-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/alerts-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AccessData",
      "description": null,
      "url": "/alerts-x/reference/objects/accessdata"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/alerts-x/reference/objects/supplierdata"
    },
    {
      "name": "SystemData",
      "description": null,
      "url": "/alerts-x/reference/objects/systemdata"
    },
    {
      "name": "DomainData",
      "description": null,
      "url": "/alerts-x/reference/objects/domaindata"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/alerts-x/reference/objects/clientdata"
    },
    {
      "name": "ProfileData",
      "description": null,
      "url": "/alerts-x/reference/objects/profiledata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Organization",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
