{
  "title": "String",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HotelCriteriaSearchInput",
      "description": "Criteria of search contains destination, travel dates and the number of pax in each room.\nYou must preload the other fields in our system by complete the fields absents.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriasearchinput"
    },
    {
      "name": "HotelSettingsInput",
      "description": "Settings that you can edit for this avail. Values are loaded by default in our Back Office.",
      "url": "/travelgatex/reference/inputobjects/hotelsettingsinput"
    },
    {
      "name": "SupplierInput",
      "description": "Supplier object. Contains its own settings, code and access.",
      "url": "/travelgatex/reference/inputobjects/supplierinput"
    },
    {
      "name": "ConfigurationInput",
      "description": "The information and credentials required to access the supplierâ€™s system.",
      "url": "/travelgatex/reference/inputobjects/configurationinput"
    },
    {
      "name": "ParameterInput",
      "description": "Parameters for additional information for the supplier's configuration.",
      "url": "/travelgatex/reference/inputobjects/parameterinput"
    },
    {
      "name": "PluginsInput",
      "description": "Plugin to execute.",
      "url": "/travelgatex/reference/inputobjects/pluginsinput"
    },
    {
      "name": "HotelSearch",
      "description": "Results of Avail Hotel. Contains all the available options for a given date and itinerary.",
      "url": "/travelgatex/reference/objects/hotelsearch"
    },
    {
      "name": "RequestStats",
      "description": "Contains internal information.",
      "url": "/travelgatex/reference/objects/requeststats"
    },
    {
      "name": "StatAccess",
      "description": "",
      "url": "/travelgatex/reference/objects/stataccess"
    },
    {
      "name": "StatTransaction",
      "description": "",
      "url": "/travelgatex/reference/objects/stattransaction"
    },
    {
      "name": "Transactions",
      "description": "Supplier transaction",
      "url": "/travelgatex/reference/objects/transactions"
    },
    {
      "name": "Error",
      "description": "Application errors",
      "url": "/travelgatex/reference/objects/error"
    },
    {
      "name": "AdviseMessage",
      "description": "",
      "url": "/travelgatex/reference/interfaces/advisemessage"
    },
    {
      "name": "Warning",
      "description": "Application warnings",
      "url": "/travelgatex/reference/objects/warning"
    },
    {
      "name": "CriteriaSearch",
      "description": "Criteria of search contains destination, travel dates and the number of pax in each room.",
      "url": "/travelgatex/reference/objects/criteriasearch"
    },
    {
      "name": "HotelOptionSearch",
      "description": "An option includes hotel information, meal plan, total price, conditions and room description.",
      "url": "/travelgatex/reference/objects/hoteloptionsearch"
    },
    {
      "name": "BookableOptionSearch",
      "description": "",
      "url": "/travelgatex/reference/interfaces/bookableoptionsearch"
    },
    {
      "name": "Room",
      "description": "Contains the room information of the option returned.",
      "url": "/travelgatex/reference/objects/room"
    },
    {
      "name": "Markup",
      "description": "Informs markup applied over supplier price.",
      "url": "/travelgatex/reference/objects/markup"
    },
    {
      "name": "Rule",
      "description": "",
      "url": "/travelgatex/reference/objects/rule"
    },
    {
      "name": "Bed",
      "description": "Contains information about a bed.",
      "url": "/travelgatex/reference/objects/bed"
    },
    {
      "name": "RatePlan",
      "description": "Information about the rate of the option returned.",
      "url": "/travelgatex/reference/objects/rateplan"
    },
    {
      "name": "Promotion",
      "description": "Information about room promotions(offers).",
      "url": "/travelgatex/reference/objects/promotion"
    },
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/travelgatex/reference/objects/supplement"
    },
    {
      "name": "Resort",
      "description": "Contains information about the Resort.",
      "url": "/travelgatex/reference/objects/resort"
    },
    {
      "name": "Surcharge",
      "description": "Surcharge that it can be or it is already added to the option returned. Contains all the information about the surcharge.",
      "url": "/travelgatex/reference/objects/surcharge"
    },
    {
      "name": "HotelCriteriaQuoteInput",
      "description": "The quote criteria contains the option reference id, block and language.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriaquoteinput"
    },
    {
      "name": "HotelOptionQuote",
      "description": "Contains information about quote.",
      "url": "/travelgatex/reference/objects/hoteloptionquote"
    },
    {
      "name": "HotelCriteriaBookingInput",
      "description": "Criteria of book contains basic information to find a book or books.",
      "url": "/travelgatex/reference/inputobjects/hotelcriteriabookinginput"
    },
    {
      "name": "CriteriaBookingReferencesInput",
      "description": "Criteria by references",
      "url": "/travelgatex/reference/inputobjects/criteriabookingreferencesinput"
    },
    {
      "name": "BookReferenceInput",
      "description": "Reference object that contains the client reference and/or supplier reference.",
      "url": "/travelgatex/reference/inputobjects/bookreferenceinput"
    },
    {
      "name": "HotelBookingDetail",
      "description": "Contains information about booking.",
      "url": "/travelgatex/reference/objects/hotelbookingdetail"
    },
    {
      "name": "Reference",
      "description": "Contains reference codes.",
      "url": "/travelgatex/reference/objects/reference"
    },
    {
      "name": "Holder",
      "description": "Holder object that contains the pax name and surname.",
      "url": "/travelgatex/reference/objects/holder"
    },
    {
      "name": "BookingHotel",
      "description": "",
      "url": "/travelgatex/reference/objects/bookinghotel"
    },
    {
      "name": "BookingRoom",
      "description": "",
      "url": "/travelgatex/reference/objects/bookingroom"
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
      "name": "SupplierGroup",
      "description": "group related to a supplier",
      "url": "/travelgatex/reference/objects/suppliergroup"
    },
    {
      "name": "Parameter",
      "description": "Parameters for additional information for the supplier's configuration.",
      "url": "/travelgatex/reference/objects/parameter"
    },
    {
      "name": "DefaultSettings",
      "description": "",
      "url": "/travelgatex/reference/objects/defaultsettings"
    },
    {
      "name": "ConnectUser",
      "description": "data related to a connect user and its groups",
      "url": "/travelgatex/reference/objects/connectuser"
    },
    {
      "name": "ConnectUserGroup",
      "description": "group related to a connect user",
      "url": "/travelgatex/reference/objects/connectusergroup"
    },
    {
      "name": "MappingContext",
      "description": "Returns the differents group contexts",
      "url": "/travelgatex/reference/objects/mappingcontext"
    },
    {
      "name": "MappingEntity",
      "description": "Mapping about client codes with the equivalence per supplier.",
      "url": "/travelgatex/reference/objects/mappingentity"
    },
    {
      "name": "Map",
      "description": "Map codes.",
      "url": "/travelgatex/reference/objects/map"
    },
    {
      "name": "ServiceStatus",
      "description": "Indicates the status of the service",
      "url": "/travelgatex/reference/objects/servicestatus"
    },
    {
      "name": "HotelEdge",
      "description": "HotelList Edge definition",
      "url": "/travelgatex/reference/objects/hoteledge"
    },
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/travelgatex/reference/objects/hoteldata"
    },
    {
      "name": "MediaEdge",
      "description": "HotelList Edge definition",
      "url": "/travelgatex/reference/objects/mediaedge"
    },
    {
      "name": "PageInfo",
      "description": "",
      "url": "/travelgatex/reference/objects/pageinfo"
    },
    {
      "name": "AmenityEdge",
      "description": "HotelList Edge definition",
      "url": "/travelgatex/reference/objects/amenityedge"
    },
    {
      "name": "Information",
      "description": "",
      "url": "/travelgatex/reference/interfaces/information"
    },
    {
      "name": "Location",
      "description": "Location",
      "url": "/travelgatex/reference/objects/location"
    },
    {
      "name": "Geocode",
      "description": "Geocode type",
      "url": "/travelgatex/reference/objects/geocode"
    },
    {
      "name": "Contact",
      "description": "Contact type",
      "url": "/travelgatex/reference/objects/contact"
    },
    {
      "name": "Destination",
      "description": "Destination type",
      "url": "/travelgatex/reference/objects/destination"
    },
    {
      "name": "Mutation",
      "description": "Mutations are operations that change or update data in the server.",
      "url": "/travelgatex/reference/schema/mutation"
    },
    {
      "name": "HotelBookInput",
      "description": "Criteria of book.",
      "url": "/travelgatex/reference/inputobjects/hotelbookinput"
    },
    {
      "name": "PaymentCardInput",
      "description": "Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information",
      "url": "/travelgatex/reference/inputobjects/paymentcardinput"
    },
    {
      "name": "HolderInput",
      "description": "Holder object that contains the pax name and surname.",
      "url": "/travelgatex/reference/inputobjects/holderinput"
    },
    {
      "name": "BookPaxInput",
      "description": "Input BookPax contains basic information abaout pax suach as name, surname and age.",
      "url": "/travelgatex/reference/inputobjects/bookpaxinput"
    },
    {
      "name": "HotelCancelInput",
      "description": "Cancellation Criteria.",
      "url": "/travelgatex/reference/inputobjects/hotelcancelinput"
    },
    {
      "name": "HotelCancelDetail",
      "description": "Contains information about cancel",
      "url": "/travelgatex/reference/objects/hotelcanceldetail"
    },
    {
      "name": "AccessConfigurationInput",
      "description": "The information required to access the supplier's system.",
      "url": "/travelgatex/reference/inputobjects/accessconfigurationinput"
    },
    {
      "name": "IdAccessConfigurationInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/idaccessconfigurationinput"
    },
    {
      "name": "DefaultSettingsInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/defaultsettingsinput"
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
      "name": "AccessEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/accessedge"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "String"
}
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
