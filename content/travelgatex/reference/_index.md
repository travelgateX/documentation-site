{
  "title": "Reference",
  "pagetitle": "Reference Documentation",
  "description": "Reference Documentation",
  "weight": 2,
  "icon": "fa-book",
  "alwaysopen": false
}
Our reference pages explain all aspects of our GraphQL schema.

These pages are divided into the following sections:

**Schema**: Explains how our Schema works and the two key operations: Queries and Mutations

**Objects**: A complete list of all objects in our schema, their definitions, what fields they use and when they are mandatory.

{{% alert theme="info" %}}We are currently building out examples for every `Object` page. Please send us a **Pull request** if you would like to see an example for a particular `Object`, or if you would like to share your own example with the TravelgateX community.{{% /alert %}}

**Scalars**: A complete list of the types of objects that are available in our schema (such as `String` or `Integer`). By defining scalars we make sure you can only enter or receive data that fits the objects in our data model.

**Interfaces**: An abstract type that includes a certain set of fields that a type must include. For example, our `AdviseMessage` interface requires the error code, error type and error description fields to be used together.

**Input Objects**: Similar to an `Interface`, this is an abstract type that includes a set of fields that can be used together when making a query. For example our `HotelCriteriaSearchInput` lists which fields must be completed to filter search results for a hotel booking. In this case, it is mandatory to include checkin and checkout dates, the number of hotel options you want to receive, and the number of rooms you need. There are also non-mandatory fields that can be included such as currency for prices, and the nationality of traveler.

**Enums**: These are a particular type of scalar that works like a drop-down, single selection menu. Each type of `Enum` has a number of choices defined, and users must select one of the choices when querying the Enum. For example, you could make a `Query` asking for only hotels with a particular penalty cancellation policy (`enum CancelPentaltyType`). You then choose whether to see hotels with either a `Nights`, `Percent` or `Import` penalty type.

{{% alert theme="info" %}}You can also see our `Schema` in action by using our <a href="https://api.travelgatex.com/">API Playground</a>. You can create sample queries and the `Schema` will autocomplete with available fields.{{% /alert %}}

{{% alert theme="info" %}}In GraphQL, `!` indicates mandatory fields that must be included in your queries. For more information about GraphQL, check out our <a href="https://docs.travelgatex.com/learning-graphql/">Learning GraphQL guides</a>.{{% /alert %}}

{{% alert theme="warning" %}}Keep in mind that it's important to use the correct Headers.
If you wish to use test headers, insert `"Authorization":"Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ"`
{{% /alert %}}
