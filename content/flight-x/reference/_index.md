{
  "title": "API Reference",
  "hideGithubLink": true,
	"pagetitle": "API Reference",
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

**Input Objects**: Similar to an `Interface`, this is an abstract type that includes a set of fields that can be used together when making a query. For example our `FlightOfferWhereInput` lists which fields must be completed to filter search results for a flight booking.

**Enums**: These are a particular type of scalar that works like a drop-down, single selection menu. Each type of `Enum` has a number of choices defined, and users must select one of the choices when querying the Enum. For example, our passengers object has a field name `type` that can only return one value of those: `ADT`, `CHD`, `INF`.

{{% alert theme="info" %}}You can also see our `Schema` in action by using our <a href="https://api.travelgatex.com/">API Playground</a>. You can create sample queries and the `Schema` will autocomplete with available fields.{{% /alert %}}

{{% alert theme="info" %}}In GraphQL, `!` indicates mandatory fields that must be included in your queries. For more information about GraphQL, check out our <a href="https://docs.travelgatex.com/learning-graphql/">Learning GraphQL guides</a>.{{% /alert %}}

{{% alert theme="warning" %}}Keep in mind that it's important to use the correct Headers.
If you wish to use test headers, insert `"Authorization":"Apikey 59de8cc0-830a-4023-7f5f-6b1bb336b864"`
{{% /alert %}}

{{%custom-children%}}
