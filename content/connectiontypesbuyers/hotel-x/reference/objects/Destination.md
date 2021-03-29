{
  "title": "Destination",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DestinationData",
      "name": "destinationData",
      "url": "/hotel-x/reference/objects/destinationdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "error",
      "url": "/hotel-x/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Deprecated from 2019-07-03",
      "descriptionSplitted": {
        "date": "2019-07-03",
        "first": "Deprecated from",
        "second": ""
      },
      "deprecationDate": "2019-07-03",
      "typeName": "Destination"
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/hotel-x/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/hotel-x/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "DestinationEdge",
      "description": null,
      "url": "/hotel-x/reference/objects/destinationedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Destination",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
