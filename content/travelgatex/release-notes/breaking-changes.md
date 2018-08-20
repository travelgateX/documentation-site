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
- Removal of `useContext` from `HotelSettingsInput`. Reason: Redundant..  Deprecated on 2017-12-12.**To be removed soon**.
- Removal of `connectUser` from `HotelSettingsInput`. Reason: Redundant..  Deprecated on 2018-03-19.**To be removed soon**.
- Removal of `organization` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput.  Deprecated on 2018-08-03.Expected removal on 2018-11-01.
- Removal of `pointOfSaleCode` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput.  Deprecated on 2018-08-03.Expected removal on 2018-11-01.
- Removal of `bookingReference` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput.  Deprecated on 2018-08-03.Expected removal on 2018-11-01.
- Removal of `error` from `Group`. Reason: Sustituted by adviseMessage.  Deprecated on 2018-08-01.Expected removal on 2018-10-30.
- Removal of `distribute` from `AddOns`. Reason: You can find it in distribution AddOn.  Deprecated on 2018-05-21.Expected removal on 2018-08-19.
{{% / release-notes-container %}}
### 2018-08-03
{{% release-notes-container type="d"%}}
- Deprecated `organization` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Expected removal on 2018-11-01 .
- Deprecated `pointOfSaleCode` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Expected removal on 2018-11-01 .
- Deprecated `bookingReference` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Expected removal on 2018-11-01 .
{{% / release-notes-container %}}
### 2018-08-01
{{% release-notes-container type="d"%}}
- Deprecated `error` from `Group`. Reason: Sustituted by adviseMessage. Expected removal on 2018-10-30 .
{{% / release-notes-container %}}
### 2018-07-31
{{% release-notes-container type="r"%}}
- Removed `hotel` from `Booking`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
- Removed `hotel` from `Quote`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
- Removed `hotel` from `Search`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
- Removed `useContext` from `HotelSettingsInput`. Reason: Redundant.. Deprecated on 2017-12-12 .
- Removed `connectUser` from `HotelSettingsInput`. Reason: Redundant.. Deprecated on 2018-03-19 .
{{% / release-notes-container %}}
### 2018-05-21
{{% release-notes-container type="d"%}}
- Deprecated `distribute` from `AddOns`. Reason: You can find it in distribution AddOn. Expected removal on 2018-08-19 .
{{% / release-notes-container %}}
### 2018-03-19
{{% release-notes-container type="d"%}}
- Deprecated `connectUser` from `HotelSettingsInput`. Reason: Redundant.. Finally removed on 2018-07-31 .
{{% / release-notes-container %}}
### 2017-12-12
{{% release-notes-container type="d"%}}
- Deprecated `useContext` from `HotelSettingsInput`. Reason: Redundant.. Finally removed on 2018-07-31 .
{{% / release-notes-container %}}
### 2017-11-21
{{% release-notes-container type="d"%}}
- Deprecated `hotel` from `Booking`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-31 .
- Deprecated `hotel` from `Quote`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-31 .
- Deprecated `hotel` from `Search`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-31 .
{{% / release-notes-container %}}