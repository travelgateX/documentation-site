{
  "title": "Event",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "EventData",
      "name": "eventData",
      "url": "/alertsx/reference/objects/eventdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AdviseMessage",
      "name": "adviseMessage",
      "url": "/alertsx/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/alertsx/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/alertsx/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/alertsx/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "EventEdge",
      "description": null,
      "url": "/alertsx/reference/objects/eventedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Event",
  "hideGithubLink": true
}
Event triggered
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
