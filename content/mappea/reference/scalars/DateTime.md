{
  "title": "DateTime",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Supplier",
      "description": "A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",
      "url": "/mappea/reference/objects/supplier"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/mappea/reference/interfaces/node"
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
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/mappea/reference/objects/role"
    },
    {
      "name": "Resource",
      "description": "Resources are those used in APIs and Products.",
      "url": "/mappea/reference/objects/resource"
    },
    {
      "name": "API",
      "description": "",
      "url": "/mappea/reference/objects/api"
    },
    {
      "name": "Operation",
      "description": "",
      "url": "/mappea/reference/objects/operation"
    },
    {
      "name": "Product",
      "description": "An APIs collection.",
      "url": "/mappea/reference/objects/product"
    },
    {
      "name": "Client",
      "description": "Client identifies who is making the request and holds the configuration assigned to it.",
      "url": "/mappea/reference/objects/client"
    },
    {
      "name": "Group",
      "description": "Groups are organized hierarchically.",
      "url": "/mappea/reference/objects/group"
    },
    {
      "name": "ManagedGroup",
      "description": "",
      "url": "/mappea/reference/objects/managedgroup"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "DateTime",
  "hideGithubLink": true
}
The DateTime type represents DateTime values. A good example might be a transaction TimeSpan.
In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: "2017-10-22T13:57:31.123Z".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
