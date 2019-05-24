{
  "title": "AlertsXMutation",
  "description": "",
  "weight": 2,
  "fields": [
    {
      "typeString": "Alert",
      "name": "createAlert",
      "url": "/alertsx/reference/objects/alert",
      "description": "Mutation to create a new alert",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "AlertInput!",
          "name": "input",
          "url": "/alertsx/reference/inputobjects/alertinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "Alert",
      "name": "updateAlert",
      "url": "/alertsx/reference/objects/alert",
      "description": "Mutation to update an existing alert",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "code",
          "url": "/alertsx/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "AlertUpdateInput!",
          "name": "input",
          "url": "/alertsx/reference/inputobjects/alertupdateinput",
          "description": null
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "AlertsXMutation",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
