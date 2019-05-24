{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "MappeaMapSupplierInput",
      "description": null,
      "url": "/mappea/reference/inputobjects/mappeamapsupplierinput"
    },
    {
      "name": "MappeaSupplierConfirmedInput",
      "description": null,
      "url": "/mappea/reference/inputobjects/mappeasupplierconfirmedinput"
    },
    {
      "name": "SupplierDetected",
      "description": null,
      "url": "/mappea/reference/objects/supplierdetected"
    },
    {
      "name": "Supplier",
      "description": null,
      "url": "/mappea/reference/objects/supplier"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/mappea/reference/objects/supplierdata"
    },
    {
      "name": "Node",
      "description": null,
      "url": "/mappea/reference/interfaces/node"
    },
    {
      "name": "Provider",
      "description": null,
      "url": "/mappea/reference/objects/provider"
    },
    {
      "name": "Organization",
      "description": null,
      "url": "/mappea/reference/objects/organization"
    },
    {
      "name": "Access",
      "description": null,
      "url": "/mappea/reference/objects/access"
    },
    {
      "name": "AccessData",
      "description": null,
      "url": "/mappea/reference/objects/accessdata"
    },
    {
      "name": "Parameter",
      "description": null,
      "url": "/mappea/reference/objects/parameter"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/mappea/reference/objects/organizationdata"
    },
    {
      "name": "AdviseMessage",
      "description": null,
      "url": "/mappea/reference/objects/advisemessage"
    },
    {
      "name": "Member",
      "description": null,
      "url": "/mappea/reference/objects/member"
    },
    {
      "name": "Domain",
      "description": null,
      "url": "/mappea/reference/objects/domain"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/mappea/reference/interfaces/groupcommondata"
    },
    {
      "name": "MemberData",
      "description": null,
      "url": "/mappea/reference/objects/memberdata"
    },
    {
      "name": "Role",
      "description": null,
      "url": "/mappea/reference/objects/role"
    },
    {
      "name": "RoleData",
      "description": null,
      "url": "/mappea/reference/objects/roledata"
    },
    {
      "name": "Resource",
      "description": null,
      "url": "/mappea/reference/objects/resource"
    },
    {
      "name": "ResourceData",
      "description": null,
      "url": "/mappea/reference/objects/resourcedata"
    },
    {
      "name": "API",
      "description": null,
      "url": "/mappea/reference/objects/api"
    },
    {
      "name": "APIData",
      "description": null,
      "url": "/mappea/reference/objects/apidata"
    },
    {
      "name": "Operation",
      "description": null,
      "url": "/mappea/reference/objects/operation"
    },
    {
      "name": "OperationData",
      "description": null,
      "url": "/mappea/reference/objects/operationdata"
    },
    {
      "name": "Product",
      "description": null,
      "url": "/mappea/reference/objects/product"
    },
    {
      "name": "ProductData",
      "description": null,
      "url": "/mappea/reference/objects/productdata"
    },
    {
      "name": "Client",
      "description": null,
      "url": "/mappea/reference/objects/client"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/mappea/reference/objects/clientdata"
    },
    {
      "name": "Group",
      "description": null,
      "url": "/mappea/reference/objects/group"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/mappea/reference/objects/groupdata"
    },
    {
      "name": "ManagedGroup",
      "description": null,
      "url": "/mappea/reference/objects/managedgroup"
    },
    {
      "name": "ManagedGroupData",
      "description": null,
      "url": "/mappea/reference/objects/managedgroupdata"
    },
    {
      "name": "DomainData",
      "description": null,
      "url": "/mappea/reference/objects/domaindata"
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
