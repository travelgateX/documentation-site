{
  "title": "MappeaQuery",
  "description": "",
  "weight": 1,
  "fields": [
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
  "requireby": [
    {
      "name": "Query",
      "description": "The query root of TravelgateX's GraphQL interface.",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "MappeaQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
