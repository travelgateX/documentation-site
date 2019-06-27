{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Stats",
      "description": "The service used to access the stats of every connection that uses the HUB",
      "url": "/stats/reference/objects/stats"
    },
    {
      "name": "AdviseMessage",
      "description": "List of advise messages.",
      "url": "/stats/reference/objects/advisemessage"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/stats/reference/interfaces/node"
    },
    {
      "name": "Access",
      "description": "An Access is a set of credentials and configuration in order to access the system of a Supplier.",
      "url": "/stats/reference/objects/access"
    },
    {
      "name": "Client",
      "description": "Client identifies who is making the request and holds the configuration assigned to it.",
      "url": "/stats/reference/objects/client"
    },
    {
      "name": "AccessData",
      "description": "",
      "url": "/stats/reference/objects/accessdata"
    },
    {
      "name": "Supplier",
      "description": "A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",
      "url": "/stats/reference/objects/supplier"
    },
    {
      "name": "Parameter",
      "description": "Parameters for additional information for the supplier's configuration.",
      "url": "/stats/reference/objects/parameter"
    },
    {
      "name": "Organization",
      "description": "Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.",
      "url": "/stats/reference/objects/organization"
    },
    {
      "name": "SupplierData",
      "description": "",
      "url": "/stats/reference/objects/supplierdata"
    },
    {
      "name": "Provider",
      "description": "Temporary type to use only during SQL server's lifetime",
      "url": "/stats/reference/objects/provider"
    },
    {
      "name": "OrganizationData",
      "description": "",
      "url": "/stats/reference/objects/organizationdata"
    },
    {
      "name": "Member",
      "description": "You grant access to members which can be either:\nUsers: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.\nService Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application.",
      "url": "/stats/reference/objects/member"
    },
    {
      "name": "Domain",
      "description": "",
      "url": "/stats/reference/objects/domain"
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/stats/reference/interfaces/groupcommondata"
    },
    {
      "name": "MemberData",
      "description": "",
      "url": "/stats/reference/objects/memberdata"
    },
    {
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/stats/reference/objects/role"
    },
    {
      "name": "RoleData",
      "description": "",
      "url": "/stats/reference/objects/roledata"
    },
    {
      "name": "Resource",
      "description": "Resources are those used in APIs and Products.",
      "url": "/stats/reference/objects/resource"
    },
    {
      "name": "ResourceData",
      "description": "",
      "url": "/stats/reference/objects/resourcedata"
    },
    {
      "name": "API",
      "description": "",
      "url": "/stats/reference/objects/api"
    },
    {
      "name": "APIData",
      "description": "",
      "url": "/stats/reference/objects/apidata"
    },
    {
      "name": "Operation",
      "description": "",
      "url": "/stats/reference/objects/operation"
    },
    {
      "name": "OperationData",
      "description": "",
      "url": "/stats/reference/objects/operationdata"
    },
    {
      "name": "Product",
      "description": "An APIs collection.",
      "url": "/stats/reference/objects/product"
    },
    {
      "name": "ProductData",
      "description": "",
      "url": "/stats/reference/objects/productdata"
    },
    {
      "name": "DomainData",
      "description": "",
      "url": "/stats/reference/objects/domaindata"
    },
    {
      "name": "Group",
      "description": "Groups are organized hierarchically.",
      "url": "/stats/reference/objects/group"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/stats/reference/objects/groupdata"
    },
    {
      "name": "ManagedGroup",
      "description": "",
      "url": "/stats/reference/objects/managedgroup"
    },
    {
      "name": "ManagedGroupData",
      "description": "",
      "url": "/stats/reference/objects/managedgroupdata"
    },
    {
      "name": "ClientData",
      "description": "",
      "url": "/stats/reference/objects/clientdata"
    },
    {
      "name": "StatsInfo",
      "description": "Details of an specific error",
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
