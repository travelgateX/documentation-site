{
  "title": "Category",
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
      "typeString": "CategoryData",
      "name": "categoryData",
      "url": "/hotel-x/reference/objects/categorydata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/hotel-x/reference/objects/error",
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
      "typeName": "Category"
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
      "name": "CategoryEdge",
      "description": null,
      "url": "/hotel-x/reference/objects/categoryedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Category",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
