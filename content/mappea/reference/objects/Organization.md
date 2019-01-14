{
  "title": "Organization",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/mappea/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OrganizationData",
      "name": "organizationData",
      "url": "/mappea/reference/objects/organizationdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/mappea/reference/objects/advisemessage",
      "description": "List of advise messages.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/mappea/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/mappea/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/mappea/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "SupplierData",
      "description": "",
      "url": "/mappea/reference/objects/supplierdata"
    },
    {
      "name": "AccessData",
      "description": "",
      "url": "/mappea/reference/objects/accessdata"
    },
    {
      "name": "ClientData",
      "description": "",
      "url": "/mappea/reference/objects/clientdata"
    },
    {
      "name": "DomainData",
      "description": "",
      "url": "/mappea/reference/objects/domaindata"
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
