{
  "title": "Organization",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OrganizationData",
      "name": "organizationData",
      "url": "/travelgatex/reference/objects/organizationdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AccessData",
      "description": null,
      "url": "/travelgatex/reference/objects/accessdata"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/travelgatex/reference/objects/supplierdata"
    },
    {
      "name": "DomainData",
      "description": null,
      "url": "/travelgatex/reference/objects/domaindata"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/travelgatex/reference/objects/clientdata"
    },
    {
      "name": "PointOfSaleData",
      "description": null,
      "url": "/travelgatex/reference/objects/pointofsaledata"
    },
    {
      "name": "ProfileData",
      "description": null,
      "url": "/travelgatex/reference/objects/profiledata"
    },
    {
      "name": "OrganizationEdge",
      "description": null,
      "url": "/travelgatex/reference/objects/organizationedge"
    },
    {
      "name": "AdminMutation",
      "description": null,
      "url": "/travelgatex/reference/objects/adminmutation"
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
