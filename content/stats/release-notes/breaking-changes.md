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
- Removal of `type` from `AdviseMessage`. Reason: .  Deprecated on 2018-06-01.**To be removed soon**.
- Removal of `ratios` from `StatsData`. Reason: Added hits fields to be able to calculate ratios at client side..  Deprecated on 2019-04-08.Expected removal on 2019-07-07.
- Removal of `cache` from `OperationDetailed`. Reason: Added new field trafficType..  Deprecated on 2019-04-03.Expected removal on 2019-07-02.
{{% / release-notes-container %}}
### 2019-04-08
{{% release-notes-container type="d"%}}
- Deprecated `ratios` from `StatsData`. Reason: Added hits fields to be able to calculate ratios at client side.. Expected removal on 2019-07-07 .
{{% / release-notes-container %}}
### 2019-04-03
{{% release-notes-container type="d"%}}
- Deprecated `cache` from `OperationDetailed`. Reason: Added new field trafficType.. Expected removal on 2019-07-02 .
{{% / release-notes-container %}}
### 2019-02-08
{{% release-notes-container type="r"%}}
- Removed `error` from `API`. Reason: Sustituted by adviseMessage. Deprecated on 2018-08-22 .
- Removed `error` from `Member`. Reason: Sustituted by adviseMessage. Deprecated on 2018-08-22 .
- Removed `error` from `Operation`. Reason: Sustituted by adviseMessage. Deprecated on 2018-08-22 .
- Removed `error` from `Organization`. Reason: Sustituted by adviseMessage. Deprecated on 2018-08-22 .
- Removed `error` from `Product`. Reason: Sustituted by adviseMessage. Deprecated on 2018-08-22 .
- Removed `error` from `Resource`. Reason: Sustituted by adviseMessage. Deprecated on 2018-08-22 .
- Removed `error` from `Role`. Reason: Sustituted by adviseMessage. Deprecated on 2018-08-22 .
- Removed `error` from `Group`. Reason: Sustituted by adviseMessage. Deprecated on 2018-08-01 .
{{% / release-notes-container %}}
### 2018-08-22
{{% release-notes-container type="d"%}}
- Deprecated `error` from `API`. Reason: Sustituted by adviseMessage. Finally removed on 2019-02-08 .
- Deprecated `error` from `Member`. Reason: Sustituted by adviseMessage. Finally removed on 2019-02-08 .
- Deprecated `error` from `Operation`. Reason: Sustituted by adviseMessage. Finally removed on 2019-02-08 .
- Deprecated `error` from `Organization`. Reason: Sustituted by adviseMessage. Finally removed on 2019-02-08 .
- Deprecated `error` from `Product`. Reason: Sustituted by adviseMessage. Finally removed on 2019-02-08 .
- Deprecated `error` from `Resource`. Reason: Sustituted by adviseMessage. Finally removed on 2019-02-08 .
- Deprecated `error` from `Role`. Reason: Sustituted by adviseMessage. Finally removed on 2019-02-08 .
{{% / release-notes-container %}}
### 2018-08-01
{{% release-notes-container type="d"%}}
- Deprecated `error` from `Group`. Reason: Sustituted by adviseMessage. Finally removed on 2019-02-08 .
{{% / release-notes-container %}}
### 2018-06-01
{{% release-notes-container type="d"%}}
- Deprecated `type` from `AdviseMessage`. Reason: . Expected removal on 2018-08-30 .
{{% / release-notes-container %}}