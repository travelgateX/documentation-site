{
  "title": "Boolean",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
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
      "name": "EntityFilter",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/entityfilter"
    },
    {
      "name": "PageInfo",
      "description": "",
      "url": "/travelgatex/reference/objects/pageinfo"
    },
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
      "name": "MemberData",
      "description": "",
      "url": "/travelgatex/reference/objects/memberdata"
    },
    {
      "name": "ClientData",
      "description": "",
      "url": "/travelgatex/reference/objects/clientdata"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/groupdata"
    },
    {
      "name": "APIData",
      "description": "",
      "url": "/travelgatex/reference/objects/apidata"
    },
    {
      "name": "ResourceData",
      "description": "",
      "url": "/travelgatex/reference/objects/resourcedata"
    },
    {
      "name": "RoleData",
      "description": "",
      "url": "/travelgatex/reference/objects/roledata"
    },
    {
      "name": "ProfileData",
      "description": "Profile data",
      "url": "/travelgatex/reference/objects/profiledata"
    },
    {
      "name": "HotelSettingsInput",
      "description": "Settings that you can edit for this avail. Values are loaded by default in our Back Office.",
      "url": "/travelgatex/reference/inputobjects/hotelsettingsinput"
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
      "name": "Bed",
      "description": "Contains information about a bed.",
      "url": "/travelgatex/reference/objects/bed"
    },
    {
      "name": "Markup",
      "description": "Informs markup applied over supplier price.",
      "url": "/travelgatex/reference/objects/markup"
    },
    {
      "name": "Priceable",
      "description": "",
      "url": "/travelgatex/reference/interfaces/priceable"
    },
    {
      "name": "HotelRuntimeParameter",
      "description": "template of all fields used by the supplier",
      "url": "/travelgatex/reference/objects/hotelruntimeparameter"
    },
    {
      "name": "OperationDetailed",
      "description": "Stats information per operation",
      "url": "/travelgatex/reference/objects/operationdetailed"
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
      "name": "CreateProfileInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/createprofileinput"
    },
    {
      "name": "UpdateProfileInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/updateprofileinput"
    },
    {
      "name": "HotelXUpdateStatusData",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxupdatestatusdata"
    },
    {
      "name": "HotelXAuditInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/hotelxauditinput"
    },
    {
      "name": "DeltaPriceInput",
      "description": "Input delta price, indicates price variation permitted by the client\nAn error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue \n(price is lower or equal to the price showed in valuation).\nThis field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation \nwill be done automatically in reservation method.",
      "url": "/travelgatex/reference/inputobjects/deltapriceinput"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "Boolean",
  "hideGithubLink": true
}
The `Boolean` scalar type represents `true` or `false`.
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
