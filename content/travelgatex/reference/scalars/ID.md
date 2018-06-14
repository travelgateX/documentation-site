{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Organization",
      "description": "Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.",
      "url": "/travelgatex/reference/objects/organization"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/travelgatex/reference/interfaces/node"
    },
    {
      "name": "OrganizationData",
      "description": "",
      "url": "/travelgatex/reference/objects/organizationdata"
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/travelgatex/reference/interfaces/groupcommondata"
    },
    {
      "name": "Group",
      "description": "Groups are organized hierarchically.",
      "url": "/travelgatex/reference/objects/group"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/groupdata"
    },
    {
      "name": "Member",
      "description": "You grant access to members which can be either:\nUsers: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.\nService Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application.",
      "url": "/travelgatex/reference/objects/member"
    },
    {
      "name": "MemberData",
      "description": "",
      "url": "/travelgatex/reference/objects/memberdata"
    },
    {
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/travelgatex/reference/objects/role"
    },
    {
      "name": "RoleData",
      "description": "",
      "url": "/travelgatex/reference/objects/roledata"
    },
    {
      "name": "Resource",
      "description": "Resources are those used in APIs and Products.",
      "url": "/travelgatex/reference/objects/resource"
    },
    {
      "name": "ResourceData",
      "description": "",
      "url": "/travelgatex/reference/objects/resourcedata"
    },
    {
      "name": "API",
      "description": "",
      "url": "/travelgatex/reference/objects/api"
    },
    {
      "name": "APIData",
      "description": "",
      "url": "/travelgatex/reference/objects/apidata"
    },
    {
      "name": "Operation",
      "description": "",
      "url": "/travelgatex/reference/objects/operation"
    },
    {
      "name": "OperationData",
      "description": "",
      "url": "/travelgatex/reference/objects/operationdata"
    },
    {
      "name": "Access",
      "description": "An Access is a set of credentials and configuration in order to access the system of a Supplier.",
      "url": "/travelgatex/reference/objects/access"
    },
    {
      "name": "AccessData",
      "description": "",
      "url": "/travelgatex/reference/objects/accessdata"
    },
    {
      "name": "Supplier",
      "description": "A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",
      "url": "/travelgatex/reference/objects/supplier"
    },
    {
      "name": "SupplierData",
      "description": "",
      "url": "/travelgatex/reference/objects/supplierdata"
    },
    {
      "name": "Provider",
      "description": "Temporary type to use only during SQL server's lifetime",
      "url": "/travelgatex/reference/objects/provider"
    },
    {
      "name": "Parameter",
      "description": "Parameters for additional information for the supplier's configuration.",
      "url": "/travelgatex/reference/objects/parameter"
    },
    {
      "name": "Client",
      "description": "Client identifies who is making the request and holds the configuration assigned to it.",
      "url": "/travelgatex/reference/objects/client"
    },
    {
      "name": "ClientData",
      "description": "",
      "url": "/travelgatex/reference/objects/clientdata"
    },
    {
      "name": "Product",
      "description": "An APIs collection.",
      "url": "/travelgatex/reference/objects/product"
    },
    {
      "name": "ProductData",
      "description": "",
      "url": "/travelgatex/reference/objects/productdata"
    },
    {
      "name": "HotelXAccessInput",
      "description": "AccessInput overwrites an existent access in our Back Office or creates a new\none to be used in this search query only. An access object contains its own code, configuration and settings.",
      "url": "/travelgatex/reference/inputobjects/hotelxaccessinput"
    },
    {
      "name": "PaymentXBookingInfoFilterInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/paymentxbookinginfofilterinput"
    },
    {
      "name": "StoredCard",
      "description": "",
      "url": "/travelgatex/reference/objects/storedcard"
    },
    {
      "name": "PointOfSale",
      "description": "",
      "url": "/travelgatex/reference/objects/pointofsale"
    },
    {
      "name": "PointOfSaleData",
      "description": "",
      "url": "/travelgatex/reference/objects/pointofsaledata"
    },
    {
      "name": "AdviseMessage",
      "description": "",
      "url": "/travelgatex/reference/interfaces/advisemessage"
    },
    {
      "name": "Stats",
      "description": "The service used to access the stats of every connection that uses the HUB",
      "url": "/travelgatex/reference/objects/stats"
    },
    {
      "name": "StatsInfo",
      "description": "Details of an specific error",
      "url": "/travelgatex/reference/objects/statsinfo"
    },
    {
      "name": "CreateOrganizationInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/createorganizationinput"
    },
    {
      "name": "CreateMemberInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/creatememberinput"
    },
    {
      "name": "CreateGroupInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/creategroupinput"
    },
    {
      "name": "UpdateMemberInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/updatememberinput"
    },
    {
      "name": "UpdateGroupInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/updategroupinput"
    },
    {
      "name": "DeleteMemberInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/deletememberinput"
    },
    {
      "name": "DeleteGroupInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/deletegroupinput"
    },
    {
      "name": "MappeaSupplierConfirmedInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/mappeasupplierconfirmedinput"
    },
    {
      "name": "SupplierDetected",
      "description": "",
      "url": "/travelgatex/reference/objects/supplierdetected"
    },
    {
      "name": "MappeaMapSupplierInput",
      "description": "# MapSupplier",
      "url": "/travelgatex/reference/inputobjects/mappeamapsupplierinput"
    },
    {
      "name": "PointOfSaleInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/pointofsaleinput"
    },
    {
      "name": "PaymentXBookingInfoDeleteInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/paymentxbookinginfodeleteinput"
    },
    {
      "name": "AccessFilter",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/accessfilter"
    },
    {
      "name": "AccessInput",
      "description": "Access input",
      "url": "/travelgatex/reference/inputobjects/accessinput"
    },
    {
      "name": "ClientFilter",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/clientfilter"
    },
    {
      "name": "GroupInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/groupinput"
    },
    {
      "name": "PointOfSaleFilter",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/pointofsalefilter"
    },
    {
      "name": "SupplierFilter",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/supplierfilter"
    },
    {
      "name": "UpdateClientInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/updateclientinput"
    },
    {
      "name": "Context",
      "description": "Context type. Currently, only Code is necessary.",
      "url": "/travelgatex/reference/objects/context"
    },
    {
      "name": "ServiceApi",
      "description": "Information related to a Service API",
      "url": "/travelgatex/reference/objects/serviceapi"
    },
    {
      "name": "ServiceOperation",
      "description": "Information related to an API operation",
      "url": "/travelgatex/reference/objects/serviceoperation"
    },
    {
      "name": "HotelXBoardQueryInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxboardqueryinput"
    },
    {
      "name": "HotelXCategoryQueryInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxcategoryqueryinput"
    },
    {
      "name": "HotelXDestinationListInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxdestinationlistinput"
    },
    {
      "name": "HotelXDestinationSearcherInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxdestinationsearcherinput"
    },
    {
      "name": "HotelXHotelListInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxhotellistinput"
    },
    {
      "name": "HotelXRoomQueryInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxroomqueryinput"
    },
    {
      "name": "Board",
      "description": "Board type.",
      "url": "/travelgatex/reference/objects/board"
    },
    {
      "name": "BoardData",
      "description": "Board data",
      "url": "/travelgatex/reference/objects/boarddata"
    },
    {
      "name": "Category",
      "description": "Category Type",
      "url": "/travelgatex/reference/objects/category"
    },
    {
      "name": "CategoryData",
      "description": "Category data",
      "url": "/travelgatex/reference/objects/categorydata"
    },
    {
      "name": "Destination",
      "description": "Destination Type",
      "url": "/travelgatex/reference/objects/destination"
    },
    {
      "name": "DestinationData",
      "description": "Information about destinantion",
      "url": "/travelgatex/reference/objects/destinationdata"
    },
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/travelgatex/reference/objects/hoteldata"
    },
    {
      "name": "Hotel",
      "description": "Hotel Type",
      "url": "/travelgatex/reference/objects/hotel"
    },
    {
      "name": "RoomStatic",
      "description": "Room Type",
      "url": "/travelgatex/reference/objects/roomstatic"
    },
    {
      "name": "RoomData",
      "description": "Room data",
      "url": "/travelgatex/reference/objects/roomdata"
    },
    {
      "name": "IdAccessConfigurationInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/idaccessconfigurationinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "ID"
}
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
