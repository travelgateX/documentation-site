{
  "title": "DateTime",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "PaymentXStoredCardFilterInput",
      "description": "",
      "url": "/paymentx/reference/inputobjects/paymentxstoredcardfilterinput"
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
      "name": "Member",
      "description": "You grant access to members which can be either:\nUsers: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.\nService Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application.",
      "url": "/paymentx/reference/objects/member"
    },
    {
      "name": "API",
      "description": "",
      "url": "/paymentx/reference/objects/api"
    },
    {
      "name": "Resource",
      "description": "Resources are those used in APIs and Products.",
      "url": "/paymentx/reference/objects/resource"
    },
    {
      "name": "Operation",
      "description": "",
      "url": "/paymentx/reference/objects/operation"
    },
    {
      "name": "ManagedGroup",
      "description": "",
      "url": "/paymentx/reference/objects/managedgroup"
    },
    {
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/paymentx/reference/objects/role"
    },
    {
      "name": "Access",
      "description": "An Access is a set of credentials and configuration in order to access the system of a Supplier.",
      "url": "/paymentx/reference/objects/access"
    },
    {
      "name": "Supplier",
      "description": "A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",
      "url": "/paymentx/reference/objects/supplier"
    },
    {
      "name": "Organization",
      "description": "Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.",
      "url": "/paymentx/reference/objects/organization"
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
      "name": "Client",
      "description": "Client identifies who is making the request and holds the configuration assigned to it.",
      "url": "/paymentx/reference/objects/client"
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
