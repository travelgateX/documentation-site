{
  "title": "MappeaQuery",
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
      "typeString": "GetUploadedFilesResponse!",
      "name": "getUploadedFiles",
      "url": "/travelgatex/reference/objects/getuploadedfilesresponse",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GetMappeaStatsResponse!",
      "name": "getMappeaStats",
      "url": "/travelgatex/reference/objects/getmappeastatsresponse",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "MappeaGetMappeaStatsInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/mappeagetmappeastatsinput",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Query",
      "description": "The query root of TravelgateX's GraphQL interface.",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "MappeaQuery"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
