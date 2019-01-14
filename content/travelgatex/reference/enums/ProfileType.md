{
  "title": "ProfileType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "ProfileData",
      "description": "Profile data",
      "url": "/travelgatex/reference/objects/profiledata"
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
    }
  ],
  "enumValues": [
    {
      "name": "BUYER",
      "description": "Buyer profile",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "SELLER",
      "description": "Seller profile",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "ProfileType",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
