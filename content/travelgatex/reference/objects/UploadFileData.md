{
  "title": "UploadFileData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "fileId",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[SupplierDetected!]",
      "name": "suppliers",
      "url": "/travelgatex/reference/objects/supplierdetected",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "numberOfLines",
      "url": "/travelgatex/reference/scalars/int",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int",
      "name": "numberOfHotels",
      "url": "/travelgatex/reference/scalars/int",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "UploadFileResponse",
      "description": "",
      "url": "/travelgatex/reference/objects/uploadfileresponse"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "UploadFileData"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
