{
  "title": "Organization",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OrganizationData",
      "name": "organizationData",
      "url": "/alertsx/reference/objects/organizationdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/alertsx/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/alertsx/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/alertsx/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/alertsx/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AccessData",
      "description": null,
      "url": "/alertsx/reference/objects/accessdata"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/alertsx/reference/objects/supplierdata"
    },
    {
      "name": "SystemData",
      "description": null,
      "url": "/alertsx/reference/objects/systemdata"
    },
    {
      "name": "DomainData",
      "description": null,
      "url": "/alertsx/reference/objects/domaindata"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/alertsx/reference/objects/clientdata"
    },
    {
      "name": "ProfileData",
      "description": null,
      "url": "/alertsx/reference/objects/profiledata"
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
