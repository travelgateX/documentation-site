{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "AdviseMessage",
      "description": "List of advise messages.",
      "url": "/paymentx/reference/objects/advisemessage"
    },
    {
      "name": "PaymentXStoredCardIDInput",
      "description": "",
      "url": "/paymentx/reference/inputobjects/paymentxstoredcardidinput"
    },
    {
      "name": "PaymentXStoredCard",
      "description": "",
      "url": "/paymentx/reference/objects/paymentxstoredcard"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/paymentx/reference/interfaces/node"
    },
    {
      "name": "Group",
      "description": "Groups are organized hierarchically.",
      "url": "/paymentx/reference/objects/group"
    },
    {
      "name": "PointOfSale",
      "description": "",
      "url": "/paymentx/reference/objects/pointofsale"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/paymentx/reference/objects/groupdata"
    },
    {
      "name": "Member",
      "description": "You grant access to members which can be either:\nUsers: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.\nService Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application.",
      "url": "/paymentx/reference/objects/member"
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/paymentx/reference/interfaces/groupcommondata"
    },
    {
      "name": "MemberData",
      "description": "",
      "url": "/paymentx/reference/objects/memberdata"
    },
    {
      "name": "API",
      "description": "",
      "url": "/paymentx/reference/objects/api"
    },
    {
      "name": "APIData",
      "description": "",
      "url": "/paymentx/reference/objects/apidata"
    },
    {
      "name": "Resource",
      "description": "Resources are those used in APIs and Products.",
      "url": "/paymentx/reference/objects/resource"
    },
    {
      "name": "ResourceData",
      "description": "",
      "url": "/paymentx/reference/objects/resourcedata"
    },
    {
      "name": "Operation",
      "description": "",
      "url": "/paymentx/reference/objects/operation"
    },
    {
      "name": "OperationData",
      "description": "",
      "url": "/paymentx/reference/objects/operationdata"
    },
    {
      "name": "ManagedGroup",
      "description": "",
      "url": "/paymentx/reference/objects/managedgroup"
    },
    {
      "name": "ManagedGroupData",
      "description": "",
      "url": "/paymentx/reference/objects/managedgroupdata"
    },
    {
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/paymentx/reference/objects/role"
    },
    {
      "name": "RoleData",
      "description": "",
      "url": "/paymentx/reference/objects/roledata"
    },
    {
      "name": "Access",
      "description": "An Access is a set of credentials and configuration in order to access the system of a Supplier.",
      "url": "/paymentx/reference/objects/access"
    },
    {
      "name": "AccessData",
      "description": "",
      "url": "/paymentx/reference/objects/accessdata"
    },
    {
      "name": "Supplier",
      "description": "A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",
      "url": "/paymentx/reference/objects/supplier"
    },
    {
      "name": "Parameter",
      "description": "Parameters for additional information for the supplier's configuration.",
      "url": "/paymentx/reference/objects/parameter"
    },
    {
      "name": "Organization",
      "description": "Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.",
      "url": "/paymentx/reference/objects/organization"
    },
    {
      "name": "SupplierData",
      "description": "",
      "url": "/paymentx/reference/objects/supplierdata"
    },
    {
      "name": "Provider",
      "description": "Temporary type to use only during SQL server's lifetime",
      "url": "/paymentx/reference/objects/provider"
    },
    {
      "name": "OrganizationData",
      "description": "",
      "url": "/paymentx/reference/objects/organizationdata"
    },
    {
      "name": "Domain",
      "description": "",
      "url": "/paymentx/reference/objects/domain"
    },
    {
      "name": "Product",
      "description": "An APIs collection.",
      "url": "/paymentx/reference/objects/product"
    },
    {
      "name": "ProductData",
      "description": "",
      "url": "/paymentx/reference/objects/productdata"
    },
    {
      "name": "DomainData",
      "description": "",
      "url": "/paymentx/reference/objects/domaindata"
    },
    {
      "name": "Client",
      "description": "Client identifies who is making the request and holds the configuration assigned to it.",
      "url": "/paymentx/reference/objects/client"
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
    },
    {
      "name": "PaymentXStoredCardInput",
      "description": "",
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
