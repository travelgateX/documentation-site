{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "AdviseMessage",
      "description": null,
      "url": "/paymentx/reference/objects/advisemessage"
    },
    {
      "name": "PaymentXStoredCardIDInput",
      "description": null,
      "url": "/paymentx/reference/inputobjects/paymentxstoredcardidinput"
    },
    {
      "name": "PaymentXStoredCard",
      "description": null,
      "url": "/paymentx/reference/objects/paymentxstoredcard"
    },
    {
      "name": "Node",
      "description": null,
      "url": "/paymentx/reference/interfaces/node"
    },
    {
      "name": "Group",
      "description": null,
      "url": "/paymentx/reference/objects/group"
    },
    {
      "name": "PointOfSale",
      "description": null,
      "url": "/paymentx/reference/objects/pointofsale"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/paymentx/reference/objects/groupdata"
    },
    {
      "name": "Member",
      "description": null,
      "url": "/paymentx/reference/objects/member"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/paymentx/reference/interfaces/groupcommondata"
    },
    {
      "name": "MemberData",
      "description": null,
      "url": "/paymentx/reference/objects/memberdata"
    },
    {
      "name": "API",
      "description": null,
      "url": "/paymentx/reference/objects/api"
    },
    {
      "name": "APIData",
      "description": null,
      "url": "/paymentx/reference/objects/apidata"
    },
    {
      "name": "Resource",
      "description": null,
      "url": "/paymentx/reference/objects/resource"
    },
    {
      "name": "ResourceData",
      "description": null,
      "url": "/paymentx/reference/objects/resourcedata"
    },
    {
      "name": "Operation",
      "description": null,
      "url": "/paymentx/reference/objects/operation"
    },
    {
      "name": "OperationData",
      "description": null,
      "url": "/paymentx/reference/objects/operationdata"
    },
    {
      "name": "ManagedGroup",
      "description": null,
      "url": "/paymentx/reference/objects/managedgroup"
    },
    {
      "name": "ManagedGroupData",
      "description": null,
      "url": "/paymentx/reference/objects/managedgroupdata"
    },
    {
      "name": "Role",
      "description": null,
      "url": "/paymentx/reference/objects/role"
    },
    {
      "name": "RoleData",
      "description": null,
      "url": "/paymentx/reference/objects/roledata"
    },
    {
      "name": "Access",
      "description": null,
      "url": "/paymentx/reference/objects/access"
    },
    {
      "name": "AccessData",
      "description": null,
      "url": "/paymentx/reference/objects/accessdata"
    },
    {
      "name": "Supplier",
      "description": null,
      "url": "/paymentx/reference/objects/supplier"
    },
    {
      "name": "Parameter",
      "description": null,
      "url": "/paymentx/reference/objects/parameter"
    },
    {
      "name": "Organization",
      "description": null,
      "url": "/paymentx/reference/objects/organization"
    },
    {
      "name": "SupplierData",
      "description": null,
      "url": "/paymentx/reference/objects/supplierdata"
    },
    {
      "name": "Provider",
      "description": null,
      "url": "/paymentx/reference/objects/provider"
    },
    {
      "name": "AccessFilter",
      "description": null,
      "url": "/paymentx/reference/inputobjects/accessfilter"
    },
    {
      "name": "ClientFilter",
      "description": null,
      "url": "/paymentx/reference/inputobjects/clientfilter"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/paymentx/reference/objects/organizationdata"
    },
    {
      "name": "Domain",
      "description": null,
      "url": "/paymentx/reference/objects/domain"
    },
    {
      "name": "Product",
      "description": null,
      "url": "/paymentx/reference/objects/product"
    },
    {
      "name": "ProductData",
      "description": null,
      "url": "/paymentx/reference/objects/productdata"
    },
    {
      "name": "DomainData",
      "description": null,
      "url": "/paymentx/reference/objects/domaindata"
    },
    {
      "name": "Client",
      "description": null,
      "url": "/paymentx/reference/objects/client"
    },
    {
      "name": "ClientData",
      "description": null,
      "url": "/paymentx/reference/objects/clientdata"
    },
    {
      "name": "SupplierFilter",
      "description": null,
      "url": "/paymentx/reference/inputobjects/supplierfilter"
    },
    {
      "name": "PointOfSaleData",
      "description": null,
      "url": "/paymentx/reference/objects/pointofsaledata"
    },
    {
      "name": "PaymentXStoredCardInput",
      "description": null,
      "url": "/paymentx/reference/inputobjects/paymentxstoredcardinput"
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
