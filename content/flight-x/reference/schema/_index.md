{
  "title": "Schema",
  "hideGithubLink": true,
	"pagetitle": null,
  "description": "",
  "weight": 1,
  "icon": "fa-th-list",
  "alwaysopen": false
}
The TravelgateX GraphQL API Schema is a powerful way to access all of our functionalities as you need them. GraphQL allows you to ask for the exact information you need, so that you get responses that can be used in your clients (applications, websites and other interfaces) directly, without having to parse information from long-winded or cluttered API responses.

{{% alert theme="info" %}}You can also see our ‘schema’ in action by using our <a href="https://api.travelgatex.com/">API playground</a>. You can create sample queries and the schema will autocomplete with available fields.{{% /alert %}}

{{% alert theme="info" %}}Check out our [sample query guides](/flight-x/methods/bookingflow/search) to walk through some common queries to see how you can pick and choose from our `Schema` to get just the information you need.{{% /alert %}}

The `Schema` enables two main operations:
- **Queries**: Queries are “read only” and are used to get data from our system. For example, getting a list of available flight offers for a particular date, origin and destination is a `Query`
- **Mutations**: Mutations change, add or delete the data in our system. For example, making a booking for an offer is a `Mutation`.

{{% alert theme="info" %}}In GraphQL, `!` indicates mandatory fields that must be included in your queries. For more information about GraphQL, check out our [Learning GraphQL guides](/learning-graphql).{{% /alert %}}
