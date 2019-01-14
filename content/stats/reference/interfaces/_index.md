{
  "title": "Interfaces",
  "hideGithubLink": true,
	"pagetitle": null,
  "description": "",
  "weight": 4,
  "icon": "fa-window-restore",
  "alwaysopen": false
}
Interfaces are an abstract type that includes a certain set of fields that are grouped together. For example, our `AdviseMessage` interface requires the error code, error type and error description fields to be used together.

Each `Interface` is described in the same way:
- A short definition of the `Interface`
- An interactive GraphQL schema definition
- A list of all of the fields that are included in this `Interface` (remember, in GraphQL, ‘!’ indicates mandatory fields. Some interfaces have all fields mandatory and some have a mix of mandatory and optional fields)
- Where possible, we are adding examples of how to use this object in your queries.

{{% alert theme="info" %}}You can update any page of our documentation by clicking on ‘Edit page’ and sending a pull request or by making a comment on the page. Our average turnaround for responding to pull requests or comments is less than 24 hours.{% /alert %}}
