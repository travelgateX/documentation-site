{
	"title": "Deprecated Schema Notes",
	"pagetitle": "Deprecated schema notes",
	"description": "Changes that can break existing queries to the GraphQL API. For example, removing a field would be a breaking change",
	"weight": 4,
	"icon": "fa-exclamation-triangle",
	"alwaysopen": false,
	"tags": [
		"deprecated-notes"
	],
	"log": {},
	"hideGithubLink": true
}

{{% alert theme="info" %}}Changes that can break existing queries to the GraphQL API. For example, removing a field would be a breaking change{{% /alert %}}

|Deprecation date|Expected deletion date|Days left|Name|Location|Deprecation Reason|
|:--|:--|:--|:--|:--|:--|
|2017-11-21|2018-02-19|Already passed|[hotel](/travelgatex/reference/objects/hotelbooking)|Booking|You can find it in query at HotelX|
|2017-11-21|2018-02-19|Already passed|[hotel](/travelgatex/reference/objects/hotelquote)|Quote|You can find it in query at HotelX|
|2017-11-21|2018-02-19|Already passed|[hotel](/travelgatex/reference/objects/hotelsearch)|Search|You can find it in query at HotelX|
|2017-12-12|2018-03-12|Already passed|[useContext](/travelgatex/reference/scalars/boolean)|HotelSettingsInput|Redundant.|
|2018-03-19|2018-06-17|Already passed|[connectUser](/travelgatex/reference/scalars/string)|HotelSettingsInput|Redundant.|
|2018-08-03|2018-11-01|114|[organization](/travelgatex/reference/scalars/string)|PaymentXBookingInfoFilterInput|Please use PaymentXBookingInfoCriteriaInput|
|2018-08-03|2018-11-01|114|[pointOfSaleCode](/travelgatex/reference/scalars/id)|PaymentXBookingInfoFilterInput|Please use PaymentXBookingInfoCriteriaInput|
|2018-08-03|2018-11-01|114|[bookingReference](/travelgatex/reference/scalars/string)|PaymentXBookingInfoFilterInput|Please use PaymentXBookingInfoCriteriaInput|
|unknown|unknown|unknown|[distribute](/travelgatex/reference/scalars/json)|AddOns|You can find it in distribution AddOn|

## Deprecations
{{% deprecated_notes %}}
