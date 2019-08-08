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

{{% alert theme="info" %}}You can also see our ‘schema’ in action by using our <a href="https://docs.travelgatex.com/getting-started/playground/">API playground</a>. You can create sample queries and the schema will autocomplete with available fields.{{% /alert %}}

{{% alert theme="info" %}}Check out our <a href="https://docs.travelgatex.com/hotelx/quickstart/">sample query guides</a> to walk through some common queries to see how you can pick and choose from our `Schema` to get just the information you need.{{% /alert %}}

The `Schema` enables two main operations:
- **Queries**: Queries are “read only” and are used to get data from our system. For example, getting a list of available hotel vacancies for a particular date and location is a `Query`
- **Mutations**: Mutations change, add or delete the data in our system. For example, making a booking for a vacant hotel room is a `Mutation`.

{{% alert theme="info" %}}In GraphQL, `!` indicates mandatory fields that must be included in your queries. For more information about GraphQL, check out our <a href="https://docs.travelgatex.com/learning-graphql/">Learning GraphQL guides</a>.{{% /alert %}}
