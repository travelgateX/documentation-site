{
  "title": "Rule",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "id",
      "url": "/travelgatex/reference/scalars/string",
      "description": "rule identifier",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "rule name",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "MarkupRuleType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/markupruletype",
      "description": "type of the value",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "value",
      "url": "/travelgatex/reference/scalars/float",
      "description": "value applied by this rule",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Rule"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
