{
  "title": "DeltaPriceInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Float",
      "name": "amount",
      "url": "/travelgatex/reference/scalars/float",
      "description": "The amount in the currency returned by the option that will be accepted by the client to be higher than the valuation price.",
      "args": null
    },
    {
      "typeString": "Float",
      "name": "percent",
      "url": "/travelgatex/reference/scalars/float",
      "description": "The percentage accepted by the client to be higher than the valuation price.",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "applyBoth",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Depending on the value of applyBoth:\napplyBoth = false: Indicates that one of the conditions (amount or percentage) has to meet the criteria before reservation.\napplyBoth = true: Indicates that the new price cannot exceed the amount or percentage indicated by the client.",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelBookInput",
      "description": "Criteria of book.",
      "url": "/travelgatex/reference/inputobjects/hotelbookinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "DeltaPriceInput"
}
Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue 
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation 
will be done automatically in reservation method.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
