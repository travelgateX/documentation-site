{
	"title": "GraphQL Schema breaking changes",
	"pagetitle": "GraphQL Schema breaking changes",
	"description": "Changes history of deprecated notes previously announced",
	"weight": 5,
	"icon": "fa-eraser",
	"alwaysopen": false,
	"tags": [
		"breaking-changes"
	],
	"hideGithubLink": true
}

{{% alert theme="info" %}}Changes history of deprecated notes previously announced{{% /alert %}}

### Unreleased
{{% release-notes-container type="u"%}}
- Removal of `error` from `API`. Reason: Sustituted by adviseMessage.  Deprecated on 2018-08-22.Expected removal on 2018-11-20.
- Removal of `error` from `Member`. Reason: Sustituted by adviseMessage.  Deprecated on 2018-08-22.Expected removal on 2018-11-20.
- Removal of `error` from `Operation`. Reason: Sustituted by adviseMessage.  Deprecated on 2018-08-22.Expected removal on 2018-11-20.
- Removal of `error` from `Organization`. Reason: Sustituted by adviseMessage.  Deprecated on 2018-08-22.Expected removal on 2018-11-20.
- Removal of `error` from `Product`. Reason: Sustituted by adviseMessage.  Deprecated on 2018-08-22.Expected removal on 2018-11-20.
- Removal of `error` from `Resource`. Reason: Sustituted by adviseMessage.  Deprecated on 2018-08-22.Expected removal on 2018-11-20.
- Removal of `error` from `Role`. Reason: Sustituted by adviseMessage.  Deprecated on 2018-08-22.Expected removal on 2018-11-20.
- Removal of `error` from `Group`. Reason: Sustituted by adviseMessage.  Deprecated on 2018-08-01.Expected removal on 2018-10-30.
{{% / release-notes-container %}}
### 2018-08-22
{{% release-notes-container type="d"%}}
- Deprecated `error` from `API`. Reason: Sustituted by adviseMessage. Expected removal on 2018-11-20 .
- Deprecated `error` from `Member`. Reason: Sustituted by adviseMessage. Expected removal on 2018-11-20 .
- Deprecated `error` from `Operation`. Reason: Sustituted by adviseMessage. Expected removal on 2018-11-20 .
- Deprecated `error` from `Organization`. Reason: Sustituted by adviseMessage. Expected removal on 2018-11-20 .
- Deprecated `error` from `Product`. Reason: Sustituted by adviseMessage. Expected removal on 2018-11-20 .
- Deprecated `error` from `Resource`. Reason: Sustituted by adviseMessage. Expected removal on 2018-11-20 .
- Deprecated `error` from `Role`. Reason: Sustituted by adviseMessage. Expected removal on 2018-11-20 .
{{% / release-notes-container %}}
### 2018-08-03
{{% release-notes-container type="d"%}}
- Deprecated `pointOfSaleCode` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Finally removed on 2018-07-31 .
- Deprecated `organization` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Finally removed on 2018-07-31 .
{{% / release-notes-container %}}
### 2018-08-01
{{% release-notes-container type="d"%}}
- Deprecated `error` from `Group`. Reason: Sustituted by adviseMessage. Expected removal on 2018-10-30 .
{{% / release-notes-container %}}
### 2018-07-31
{{% release-notes-container type="r"%}}
- Removed `pointOfSaleCode` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Deprecated on 2018-08-03 .
- Removed `organization` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Deprecated on 2018-08-03 .
{{% / release-notes-container %}}