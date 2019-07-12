{
  "title": "Enums",
  "hideGithubLink": true,
	"pagetitle": null,
  "description": "",
  "weight": 6,
  "icon": "fa-list-ul",
  "alwaysopen": false
}
Enums are a particular type of `Scalar` that works like a drop-down, single selection menu. Each type of `Enum` has a number of choices defined, and users must select one of the choices when querying the `Enum`.

For example, you could make a `Query` asking for only hotels with a particular penalty cancellation policy (`enum CancelPentaltyType`). You then choose whether to see hotels with either a ‘nights’, ‘percent’ or ‘import’ penalty type.

Each `Enum` is described in the same way:
- A short definition of the `Enum`
- An interactive GraphQL schema definition which shows the full list of possible options for the `Enum`
- A list of which objects require this `Enum` to be used
- Where possible, we are adding examples of how to use this object in your queries.

{{% alert theme="info" %}}You can update any page of our documentation by clicking on ‘Edit page’ and sending a pull request or by making a comment on the page. Our average turnaround for responding to pull requests or comments is less than 24 hours.{% /alert %}}
