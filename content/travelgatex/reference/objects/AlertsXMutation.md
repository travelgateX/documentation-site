{
  "title": "AlertsXMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Alert",
      "name": "createAlert",
      "url": "/travelgatex/reference/objects/alert",
      "description": "Mutation to create a new alert",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "AlertInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/alertinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "Alert",
      "name": "updateAlert",
      "url": "/travelgatex/reference/objects/alert",
      "description": "Mutation to update an existing alert",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "code",
          "url": "/travelgatex/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "AlertUpdateInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/alertupdateinput",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Mutation",
      "description": null,
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AlertsXMutation",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
