{
  "title": "MappeaMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "OnlyStatusResponse!",
      "name": "confirmUpload",
      "url": "/travelgatex/reference/objects/onlystatusresponse",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "MappeaXConfirmUploadInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/mappeaxconfirmuploadinput",
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
          "typeString": "MappeaXUploadFileInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/mappeaxuploadfileinput",
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
          "typeString": "MappeaXMapSupplierInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/mappeaxmapsupplierinput",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Mutation",
      "description": "Mutations are operations that change or update data in the server.",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "MappeaMutation"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
