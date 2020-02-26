{
  "title": "FlightSettingsInput",
  "description": "Configuration of the request.",
  "weight": 1,
  "fields": [
    {
      "typeString": "[FlightSupplierInput!]",
      "name": "supplierCode_in",
      "url": null,
      "description": "",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "groupCode",
      "url": "/flight-x/reference/scalars/id",
      "description": "",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "clientCode_in",
      "url": "/flight-x/reference/scalars/id",
      "description": "It has not been developed yet.",
      "args": null
    },
    {
      "typeString": "int",
      "name": "timeout",
      "url": "/flight-x/reference/scalars/int",
      "description": "It has not been developed yet.",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "auditTransactions",
      "url": "/flight-x/reference/scalar/boolean",
      "description": "It has not been developed yet.",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "FlightXQuery",
      "description": null,
      "url": "/flight-x/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "FlightSettingsInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
