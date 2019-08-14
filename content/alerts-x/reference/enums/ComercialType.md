{
  "title": "ComercialType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "AlertConfiguration",
      "description": null,
      "url": "/alerts-x/reference/objects/alertconfiguration"
    },
    {
      "name": "AlertGroupInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/alertgroupinput"
    }
  ],
  "enumValues": [
    {
      "name": "SELLER",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "BUYER",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "ComercialType",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
