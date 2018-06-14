{
  "title": "MappeaMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Boolean",
      "name": "a",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "OnlyStatusResponse!",
      "name": "confirmUpload",
      "url": "/travelgatex/reference/objects/onlystatusresponse",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "MappeaConfirmUploadInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/mappeaconfirmuploadinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "UploadFileResponse!",
      "name": "uploadFile",
      "url": "/travelgatex/reference/objects/uploadfileresponse",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "MappeaUploadFileInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/mappeauploadfileinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "OnlyStatusResponse!",
      "name": "mapSupplier",
      "url": "/travelgatex/reference/objects/onlystatusresponse",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "MappeaMapSupplierInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/mappeamapsupplierinput",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Mutation",
      "description": "The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "MappeaMutation"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
