{
  "title": "Geoname",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Hotel Destination ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GeonameData",
      "name": "geonameData",
      "url": "/travelgatex/reference/objects/geonamedata",
      "description": "geoname data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": "List of messages",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "GeonameData",
      "description": "Geoname data, which contain a reference to his parent location",
      "url": "/travelgatex/reference/objects/geonamedata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Geoname",
  "hideGithubLink": true
}
Geoname type
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
