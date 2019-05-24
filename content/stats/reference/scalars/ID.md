{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Stats",
      "description": null,
      "url": "/stats/reference/objects/stats"
    },
    {
      "name": "AdviseMessage",
      "description": null,
      "url": "/stats/reference/objects/advisemessage"
    },
    {
      "name": "Node",
      "description": null,
      "url": "/stats/reference/interfaces/node"
    },
    {
      "name": "Access",
      "description": null,
      "url": "/stats/reference/objects/access"
    },
    {
      "name": "Client",
      "description": null,
      "url": "/stats/reference/objects/client"
    },
    {
      "name": "AccessData",
      "description": null,
      "url": "/stats/reference/objects/accessdata"
    },
    {
      "name": "Supplier",
      "description": null,
      "url": "/stats/reference/objects/supplier"
    },
    {
      "name": "Parameter",
      "description": null,
      "url": "/stats/reference/objects/parameter"
    },
    {
      "name": "Organization",
      "description": null,
      "url": "/stats/reference/objects/organization"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/stats/reference/objects/supplierdata"
    },
    {
      "name": "Provider",
      "description": null,
      "url": "/stats/reference/objects/provider"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/stats/reference/objects/organizationdata"
    },
    {
      "name": "Member",
      "description": null,
      "url": "/stats/reference/objects/member"
    },
    {
      "name": "Domain",
      "description": null,
      "url": "/stats/reference/objects/domain"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/stats/reference/interfaces/groupcommondata"
    },
    {
      "name": "MemberData",
      "description": null,
      "url": "/stats/reference/objects/memberdata"
    },
    {
      "name": "Role",
      "description": null,
      "url": "/stats/reference/objects/role"
    },
    {
      "name": "RoleData",
      "description": null,
      "url": "/stats/reference/objects/roledata"
    },
    {
      "name": "Resource",
      "description": null,
      "url": "/stats/reference/objects/resource"
    },
    {
      "name": "ResourceData",
      "description": null,
      "url": "/stats/reference/objects/resourcedata"
    },
    {
      "name": "API",
      "description": null,
      "url": "/stats/reference/objects/api"
    },
    {
      "name": "APIData",
      "description": null,
      "url": "/stats/reference/objects/apidata"
    },
    {
      "name": "Operation",
      "description": null,
      "url": "/stats/reference/objects/operation"
    },
    {
      "name": "OperationData",
      "description": null,
      "url": "/stats/reference/objects/operationdata"
    },
    {
      "name": "Product",
      "description": null,
      "url": "/stats/reference/objects/product"
    },
    {
      "name": "ProductData",
      "description": null,
      "url": "/stats/reference/objects/productdata"
    },
    {
      "name": "DomainData",
      "description": null,
      "url": "/stats/reference/objects/domaindata"
    },
    {
      "name": "Group",
      "description": null,
      "url": "/stats/reference/objects/group"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/stats/reference/objects/groupdata"
    },
    {
      "name": "ManagedGroup",
      "description": null,
      "url": "/stats/reference/objects/managedgroup"
    },
    {
      "name": "ManagedGroupData",
      "description": null,
      "url": "/stats/reference/objects/managedgroupdata"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/stats/reference/objects/clientdata"
    },
    {
      "name": "StatsInfo",
      "description": null,
      "url": "/stats/reference/objects/statsinfo"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "ID",
  "hideGithubLink": true
}
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
