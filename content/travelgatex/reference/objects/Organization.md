{
  "title": "Organization",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OrganizationData",
      "name": "organizationData",
      "url": "/travelgatex/reference/objects/organizationdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": "List of advise messages.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AccessData",
      "description": "",
      "url": "/travelgatex/reference/objects/accessdata"
    },
    {
      "name": "SupplierData",
      "description": "",
      "url": "/travelgatex/reference/objects/supplierdata"
    },
    {
      "name": "DomainData",
      "description": "",
      "url": "/travelgatex/reference/objects/domaindata"
    },
    {
      "name": "ClientData",
      "description": "",
      "url": "/travelgatex/reference/objects/clientdata"
    },
    {
      "name": "PointOfSaleData",
      "description": "",
      "url": "/travelgatex/reference/objects/pointofsaledata"
    },
    {
      "name": "ProfileData",
      "description": "Profile data",
      "url": "/travelgatex/reference/objects/profiledata"
    },
    {
      "name": "OrganizationEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/organizationedge"
    },
    {
      "name": "AdminMutation",
      "description": "The admin query root of TravelgateX's for implementing GraphQL mutations.",
      "url": "/travelgatex/reference/objects/adminmutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Organization",
  "hideGithubLink": true
}
Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
