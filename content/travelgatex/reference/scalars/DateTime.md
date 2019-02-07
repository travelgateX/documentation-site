{
  "title": "DateTime",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Access",
      "description": "An Access is a set of credentials and configuration in order to access the system of a Supplier.",
      "url": "/travelgatex/reference/objects/access"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/travelgatex/reference/interfaces/node"
    },
    {
      "name": "Supplier",
      "description": "A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",
      "url": "/travelgatex/reference/objects/supplier"
    },
    {
      "name": "Organization",
      "description": "Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.",
      "url": "/travelgatex/reference/objects/organization"
    },
    {
      "name": "Member",
      "description": "You grant access to members which can be either:\nUsers: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.\nService Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application.",
      "url": "/travelgatex/reference/objects/member"
    },
    {
      "name": "Domain",
      "description": "",
      "url": "/travelgatex/reference/objects/domain"
    },
    {
      "name": "Client",
      "description": "Client identifies who is making the request and holds the configuration assigned to it.",
      "url": "/travelgatex/reference/objects/client"
    },
    {
      "name": "Group",
      "description": "Groups are organized hierarchically.",
      "url": "/travelgatex/reference/objects/group"
    },
    {
      "name": "ManagedGroup",
      "description": "",
      "url": "/travelgatex/reference/objects/managedgroup"
    },
    {
      "name": "API",
      "description": "",
      "url": "/travelgatex/reference/objects/api"
    },
    {
      "name": "Resource",
      "description": "Resources are those used in APIs and Products.",
      "url": "/travelgatex/reference/objects/resource"
    },
    {
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/travelgatex/reference/objects/role"
    },
    {
      "name": "PointOfSale",
      "description": "",
      "url": "/travelgatex/reference/objects/pointofsale"
    },
    {
      "name": "Profile",
      "description": "",
      "url": "/travelgatex/reference/objects/profile"
    },
    {
      "name": "Entity",
      "description": "",
      "url": "/travelgatex/reference/objects/entity"
    },
    {
      "name": "Product",
      "description": "An APIs collection.",
      "url": "/travelgatex/reference/objects/product"
    },
    {
      "name": "Operation",
      "description": "",
      "url": "/travelgatex/reference/objects/operation"
    },
    {
      "name": "HotelXHotelFilterInput",
      "description": "By default: Logical AND on all given filters.",
      "url": "/travelgatex/reference/inputobjects/hotelxhotelfilterinput"
    },
    {
      "name": "HotelRuntimeConfiguration",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelruntimeconfiguration"
    },
    {
      "name": "Board",
      "description": "Board type.",
      "url": "/travelgatex/reference/objects/board"
    },
    {
      "name": "Category",
      "description": "Category Type",
      "url": "/travelgatex/reference/objects/category"
    },
    {
      "name": "Hotel",
      "description": "Hotel Type",
      "url": "/travelgatex/reference/objects/hotel"
    },
    {
      "name": "GiataData",
      "description": "Hotel data obtained from Giata System.",
      "url": "/travelgatex/reference/objects/giatadata"
    },
    {
      "name": "Media",
      "description": "Contains media information.",
      "url": "/travelgatex/reference/objects/media"
    },
    {
      "name": "Airport",
      "description": "Airport Type",
      "url": "/travelgatex/reference/objects/airport"
    },
    {
      "name": "Geoname",
      "description": "Geoname type",
      "url": "/travelgatex/reference/objects/geoname"
    },
    {
      "name": "RoomStatic",
      "description": "Room Type",
      "url": "/travelgatex/reference/objects/roomstatic"
    },
    {
      "name": "Destination",
      "description": "Destination Type",
      "url": "/travelgatex/reference/objects/destination"
    },
    {
      "name": "AuditData",
      "description": "Data sent and received in the supplier’s native format.",
      "url": "/travelgatex/reference/objects/auditdata"
    },
    {
      "name": "Stat",
      "description": "",
      "url": "/travelgatex/reference/objects/stat"
    },
    {
      "name": "Transactions",
      "description": "Supplier transaction",
      "url": "/travelgatex/reference/objects/transactions"
    },
    {
      "name": "PaymentXStoredCardFilterInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/paymentxstoredcardfilterinput"
    },
    {
      "name": "PaymentXStoredCard",
      "description": "",
      "url": "/travelgatex/reference/objects/paymentxstoredcard"
    },
    {
      "name": "StatsFilterInput",
      "description": "Filters needed to do a search.\nUsers (List of users), Suppliers (List of suppliers), ServiceApis (List of service apis), From (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss)",
      "url": "/travelgatex/reference/inputobjects/statsfilterinput"
    },
    {
      "name": "Stats",
      "description": "The service used to access the stats of every connection that uses the HUB",
      "url": "/travelgatex/reference/objects/stats"
    },
    {
      "name": "StatsData",
      "description": "",
      "url": "/travelgatex/reference/objects/statsdata"
    },
    {
      "name": "StatsAsset",
      "description": "Asset of an specific error",
      "url": "/travelgatex/reference/objects/statsasset"
    },
    {
      "name": "HotelXUpdateStatus",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxupdatestatus"
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
