{
  "title": "ID",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "AccessInput",
      "description": "AccessInput overwrites an existent access in our Back Office or creates a new\none to be used in this search query only. An access object contains its own code, configuration and settings.",
      "url": "/travelgatex/reference/inputobjects/accessinput"
    },
    {
      "name": "Hotel",
      "description": "Hotel type",
      "url": "/travelgatex/reference/objects/hotel"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/travelgatex/reference/interfaces/node"
    },
    {
      "name": "HotelData",
      "description": "Hotel data",
      "url": "/travelgatex/reference/objects/hoteldata"
    },
    {
      "name": "Media",
      "description": "",
      "url": "/travelgatex/reference/objects/media"
    },
    {
      "name": "Amenity",
      "description": "",
      "url": "/travelgatex/reference/objects/amenity"
    },
    {
      "name": "AmenityData",
      "description": "",
      "url": "/travelgatex/reference/objects/amenitydata"
    },
    {
      "name": "Supplier",
      "description": "",
      "url": "/travelgatex/reference/objects/supplier"
    },
    {
      "name": "SupplierData",
      "description": "",
      "url": "/travelgatex/reference/objects/supplierdata"
    },
    {
      "name": "Access",
      "description": "",
      "url": "/travelgatex/reference/objects/access"
    },
    {
      "name": "AccessData",
      "description": "",
      "url": "/travelgatex/reference/objects/accessdata"
    },
    {
      "name": "IdAccessConfigurationInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/idaccessconfigurationinput"
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/travelgatex/reference/interfaces/groupcommondata"
    },
    {
      "name": "Member",
      "description": "",
      "url": "/travelgatex/reference/objects/member"
    },
    {
      "name": "MemberData",
      "description": "",
      "url": "/travelgatex/reference/objects/memberdata"
    },
    {
      "name": "Group",
      "description": "",
      "url": "/travelgatex/reference/objects/group"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/groupdata"
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
      "name": "Resource",
      "description": "",
      "url": "/travelgatex/reference/objects/resource"
    },
    {
      "name": "ResourceData",
      "description": "",
      "url": "/travelgatex/reference/objects/resourcedata"
    },
    {
      "name": "Role",
      "description": "",
      "url": "/travelgatex/reference/objects/role"
    },
    {
      "name": "RoleData",
      "description": "",
      "url": "/travelgatex/reference/objects/roledata"
    },
    {
      "name": "CreateGroupInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/creategroupinput"
    },
    {
      "name": "DeleteMemberInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/deletememberinput"
    },
    {
      "name": "Organization",
      "description": "",
      "url": "/travelgatex/reference/objects/organization"
    },
    {
      "name": "OrganizationData",
      "description": "",
      "url": "/travelgatex/reference/objects/organizationdata"
    },
    {
      "name": "Product",
      "description": "",
      "url": "/travelgatex/reference/objects/product"
    },
    {
      "name": "ProductData",
      "description": "",
      "url": "/travelgatex/reference/objects/productdata"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "ID"
}
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
