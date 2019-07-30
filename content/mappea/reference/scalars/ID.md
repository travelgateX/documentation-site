{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "MappeaMapSupplierInput",
      "description": "# MapSupplier",
      "url": "/mappea/reference/inputobjects/mappeamapsupplierinput"
    },
    {
      "name": "MappeaSupplierConfirmedInput",
      "description": "",
      "url": "/mappea/reference/inputobjects/mappeasupplierconfirmedinput"
    },
    {
      "name": "SupplierDetected",
      "description": "",
      "url": "/mappea/reference/objects/supplierdetected"
    },
    {
      "name": "Supplier",
      "description": "A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",
      "url": "/mappea/reference/objects/supplier"
    },
    {
      "name": "SupplierData",
      "description": "",
      "url": "/mappea/reference/objects/supplierdata"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/mappea/reference/interfaces/node"
    },
    {
      "name": "Provider",
      "description": "Temporary type to use only during SQL server's lifetime",
      "url": "/mappea/reference/objects/provider"
    },
    {
      "name": "Organization",
      "description": "Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.",
      "url": "/mappea/reference/objects/organization"
    },
    {
      "name": "Access",
      "description": "An Access is a set of credentials and configuration in order to access the system of a Supplier.",
      "url": "/mappea/reference/objects/access"
    },
    {
      "name": "AccessData",
      "description": "",
      "url": "/mappea/reference/objects/accessdata"
    },
    {
      "name": "Parameter",
      "description": "Parameters for additional information for the supplier's configuration.",
      "url": "/mappea/reference/objects/parameter"
    },
    {
      "name": "OrganizationData",
      "description": "",
      "url": "/mappea/reference/objects/organizationdata"
    },
    {
      "name": "AdviseMessage",
      "description": "List of advise messages.",
      "url": "/mappea/reference/objects/advisemessage"
    },
    {
      "name": "Member",
      "description": "You grant access to members which can be either:\nUsers: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.\nService Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application.",
      "url": "/mappea/reference/objects/member"
    },
    {
      "name": "Domain",
      "description": "",
      "url": "/mappea/reference/objects/domain"
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/mappea/reference/interfaces/groupcommondata"
    },
    {
      "name": "MemberData",
      "description": "",
      "url": "/mappea/reference/objects/memberdata"
    },
    {
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/mappea/reference/objects/role"
    },
    {
      "name": "RoleData",
      "description": "",
      "url": "/mappea/reference/objects/roledata"
    },
    {
      "name": "Resource",
      "description": "Resources are those used in APIs and Products.",
      "url": "/mappea/reference/objects/resource"
    },
    {
      "name": "ResourceData",
      "description": "",
      "url": "/mappea/reference/objects/resourcedata"
    },
    {
      "name": "API",
      "description": "",
      "url": "/mappea/reference/objects/api"
    },
    {
      "name": "APIData",
      "description": "",
      "url": "/mappea/reference/objects/apidata"
    },
    {
      "name": "Operation",
      "description": "",
      "url": "/mappea/reference/objects/operation"
    },
    {
      "name": "OperationData",
      "description": "",
      "url": "/mappea/reference/objects/operationdata"
    },
    {
      "name": "Product",
      "description": "An APIs collection.",
      "url": "/mappea/reference/objects/product"
    },
    {
      "name": "ProductData",
      "description": "",
      "url": "/mappea/reference/objects/productdata"
    },
    {
      "name": "Client",
      "description": "Client identifies who is making the request and holds the configuration assigned to it.",
      "url": "/mappea/reference/objects/client"
    },
    {
      "name": "ClientData",
      "description": "",
      "url": "/mappea/reference/objects/clientdata"
    },
    {
      "name": "Group",
      "description": "Groups are organized hierarchically.",
      "url": "/mappea/reference/objects/group"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/mappea/reference/objects/groupdata"
    },
    {
      "name": "ManagedGroup",
      "description": "",
      "url": "/mappea/reference/objects/managedgroup"
    },
    {
      "name": "ManagedGroupData",
      "description": "",
      "url": "/mappea/reference/objects/managedgroupdata"
    },
    {
      "name": "DomainData",
      "description": "",
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
