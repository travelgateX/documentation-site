{
  "title": "Organization",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OrganizationData",
      "name": "organizationData",
      "url": "/paymentx/reference/objects/organizationdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/paymentx/reference/objects/advisemessage",
      "description": "List of advise messages.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/paymentx/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/paymentx/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AccessData",
      "description": "",
      "url": "/paymentx/reference/objects/accessdata"
    },
    {
      "name": "SupplierData",
      "description": "",
      "url": "/paymentx/reference/objects/supplierdata"
    },
    {
      "name": "DomainData",
      "description": "",
      "url": "/paymentx/reference/objects/domaindata"
    },
    {
      "name": "ClientData",
      "description": "",
      "url": "/paymentx/reference/objects/clientdata"
    },
    {
      "name": "PointOfSaleData",
      "description": "",
      "url": "/paymentx/reference/objects/pointofsaledata"
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
