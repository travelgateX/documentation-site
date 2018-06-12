{
  "title": "Boolean",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "AccessData",
      "description": "",
      "url": "/travelgatex/reference/objects/accessdata"
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
      "name": "PageInfo",
      "description": "",
      "url": "/travelgatex/reference/objects/pageinfo"
    },
    {
      "name": "SupplierFilter",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/supplierfilter"
    },
    {
      "name": "ClientFilter",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/clientfilter"
    },
    {
      "name": "ClientData",
      "description": "",
      "url": "/travelgatex/reference/objects/clientdata"
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
      "name": "GroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/groupdata"
    },
    {
      "name": "Member",
      "description": "",
      "url": "/travelgatex/reference/objects/member"
    },
    {
      "name": "RoleData",
      "description": "",
      "url": "/travelgatex/reference/objects/roledata"
    },
    {
      "name": "ResourceData",
      "description": "",
      "url": "/travelgatex/reference/objects/resourcedata"
    },
    {
      "name": "APIData",
      "description": "",
      "url": "/travelgatex/reference/objects/apidata"
    },
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/travelgatex/reference/objects/hoteldata"
    },
    {
      "name": "DestinationData",
      "description": "Information about destinantion",
      "url": "/travelgatex/reference/objects/destinationdata"
    },
    {
      "name": "HotelSettingsInput",
      "description": "Settings that you can edit for this avail. Values are loaded by default in our Back Office.",
      "url": "/travelgatex/reference/inputobjects/hotelsettingsinput"
    },
    {
      "name": "SettingsBaseInput",
      "description": "Contains the time out and business rules of a supplier or an access.",
      "url": "/travelgatex/reference/inputobjects/settingsbaseinput"
    },
    {
      "name": "Room",
      "description": "Contains the room information of the option returned.",
      "url": "/travelgatex/reference/objects/room"
    },
    {
      "name": "Price",
      "description": "Price indicates the value of the room/option.\nSupplements and/or surcharges can be included into the price, and will be verified with nodes Supplements/Surcharges.",
      "url": "/travelgatex/reference/objects/price"
    },
    {
      "name": "Priceable",
      "description": "",
      "url": "/travelgatex/reference/interfaces/priceable"
    },
    {
      "name": "Markup",
      "description": "Informs markup applied over supplier price.",
      "url": "/travelgatex/reference/objects/markup"
    },
    {
      "name": "Bed",
      "description": "Contains information about a bed.",
      "url": "/travelgatex/reference/objects/bed"
    },
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/travelgatex/reference/objects/supplement"
    },
    {
      "name": "Surcharge",
      "description": "Surcharge that it can be or it is already added to the option returned. Contains all the information about the surcharge.",
      "url": "/travelgatex/reference/objects/surcharge"
    },
    {
      "name": "CancelPolicy",
      "description": "Information about a policy cancellation.",
      "url": "/travelgatex/reference/objects/cancelpolicy"
    },
    {
      "name": "OperationDetailed",
      "description": "Stats information per operation",
      "url": "/travelgatex/reference/objects/operationdetailed"
    },
    {
      "name": "Mutation",
      "description": "The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server",
      "url": "/travelgatex/reference/schema/mutation"
    },
    {
      "name": "AccessInput",
      "description": "Access input",
      "url": "/travelgatex/reference/inputobjects/accessinput"
    },
    {
      "name": "CreateClientInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/createclientinput"
    },
    {
      "name": "UpdateClientInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/updateclientinput"
    },
    {
      "name": "DeltaPriceInput",
      "description": "Input delta price, indicates price variation permitted by the client\nAn error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue \n(price is lower or equal to the price showed in valuation).\nThis field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation \nwill be done automatically in reservation method.",
      "url": "/travelgatex/reference/inputobjects/deltapriceinput"
    },
    {
      "name": "SupplierGroup",
      "description": "group related to a supplier",
      "url": "/travelgatex/reference/objects/suppliergroup"
    },
    {
      "name": "ConnectUser",
      "description": "Data related to a connected user and its groups",
      "url": "/travelgatex/reference/objects/connectuser"
    },
    {
      "name": "ConnectUserGroup",
      "description": "group related to a connect user",
      "url": "/travelgatex/reference/objects/connectusergroup"
    },
    {
      "name": "AccessConfigurationInput",
      "description": "The information required to access the supplier's system.",
      "url": "/travelgatex/reference/inputobjects/accessconfigurationinput"
    },
    {
      "name": "AccessConnectUserInput",
      "description": "Connect user input for data access management API",
      "url": "/travelgatex/reference/inputobjects/accessconnectuserinput"
    },
    {
      "name": "ConnectUserGroupInput",
      "description": "group related to a connect user",
      "url": "/travelgatex/reference/inputobjects/connectusergroupinput"
    },
    {
      "name": "AccessSupplierInput",
      "description": "Supplier input for data access management API",
      "url": "/travelgatex/reference/inputobjects/accesssupplierinput"
    },
    {
      "name": "SupplierGroupInput",
      "description": "group related to a supplier",
      "url": "/travelgatex/reference/inputobjects/suppliergroupinput"
    },
    {
      "name": "IdAccessConfigurationInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/idaccessconfigurationinput"
    },
    {
      "name": "MappeaAddOrganizationInput",
      "description": "# AddOrganization",
      "url": "/travelgatex/reference/inputobjects/mappeaaddorganizationinput"
    },
    {
      "name": "MappeaEditOrganizationInput",
      "description": "# EditOrganization",
      "url": "/travelgatex/reference/inputobjects/mappeaeditorganizationinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Boolean"
}
The `Boolean` scalar type represents `true` or `false`.
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
