{
  "title": "DateTime",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "StatsFilterInput",
      "description": "Filters needed to do a search.\nUsers (List of users), Suppliers (List of suppliers), ServiceApis (List of service apis), From (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss)",
      "url": "/stats/reference/inputobjects/statsfilterinput"
    },
    {
      "name": "Stats",
      "description": "The service used to access the stats of every connection that uses the HUB",
      "url": "/stats/reference/objects/stats"
    },
    {
      "name": "StatsData",
      "description": "",
      "url": "/stats/reference/objects/statsdata"
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
      "name": "Supplier",
      "description": "A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",
      "url": "/stats/reference/objects/supplier"
    },
    {
      "name": "Organization",
      "description": "Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.",
      "url": "/stats/reference/objects/organization"
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
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/stats/reference/objects/role"
    },
    {
      "name": "Resource",
      "description": "Resources are those used in APIs and Products.",
      "url": "/stats/reference/objects/resource"
    },
    {
      "name": "API",
      "description": "",
      "url": "/stats/reference/objects/api"
    },
    {
      "name": "Operation",
      "description": "",
      "url": "/stats/reference/objects/operation"
    },
    {
      "name": "Product",
      "description": "An APIs collection.",
      "url": "/stats/reference/objects/product"
    },
    {
      "name": "Group",
      "description": "Groups are organized hierarchically.",
      "url": "/stats/reference/objects/group"
    },
    {
      "name": "ManagedGroup",
      "description": "",
      "url": "/stats/reference/objects/managedgroup"
    },
    {
      "name": "StatsAsset",
      "description": "Asset of an specific error",
      "url": "/stats/reference/objects/statsasset"
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
