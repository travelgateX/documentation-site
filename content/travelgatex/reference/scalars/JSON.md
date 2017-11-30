{
  "title": "JSON",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "AddOns",
      "description": "Extra information about the option.",
      "url": "/travelgatex/reference/objects/addons"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "JSON"
}
The JSON type makes sure that it is actually valid JSON and returns the value as a parsed JSON object/array instead of a string.
In queries or mutations, JSON fields have to be specified with enclosing double quotes. Special characters have to be escaped: "{"int": 1, "string": "value"}".
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
