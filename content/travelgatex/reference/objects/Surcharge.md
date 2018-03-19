{
  "title": "Surcharge",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ChargeType!",
      "name": "chargeType",
      "url": "/travelgatex/reference/enums/chargetype",
      "description": "Indicates the charge types. We need to know whether the supplements have to be paid when the consumer gets to the hotel or beforehand.\nPossible charge types: Include or Exclude.\nwhen include: this surcharge is mandatory and included in the option's price\nwhen exclude: this surcharge is not included in the option's price",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "mandatory",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the surcharge is mandatory or not. If mandatory, this surcharge will be applied to this option\nif the chargeType is excluded the customer will have to pay it directly at the hotel",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Price!",
      "name": "price",
      "url": "/travelgatex/reference/objects/price",
      "description": "Indicates the surcharge price.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "description",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Specifies the surcharge description.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Surcharge"
}
Surcharge that it can be or it is already added to the option returned. Contains all the information about the surcharge.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
