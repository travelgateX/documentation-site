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
- Removal of `distribute` from `AddOns`. Reason: You can find it in distribution AddOn.  Deprecated on 2018-05-21. Expected removal on 2018-08-19.
- Removal of `hotel` from `Booking`. Reason: You can find it in query at HotelX.  Deprecated on 2017-11-21. Expected removal on 2018-02-19.
- Removal of `hotel` from `Quote`. Reason: You can find it in query at HotelX.  Deprecated on 2017-11-21. Expected removal on 2018-02-19.
- Removal of `hotel` from `Search`. Reason: You can find it in query at HotelX.  Deprecated on 2017-11-21. Expected removal on 2018-02-19.
- Removal of `useContext` from `HotelSettingsInput`. Reason: Redundant..  Deprecated on 2017-12-12. Expected removal on 2018-03-12.
- Removal of `connectUser` from `HotelSettingsInput`. Reason: Redundant..  Deprecated on 2018-03-19. Expected removal on 2018-06-17.
- Removal of `organization` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput.  Deprecated on 2018-08-03. Expected removal on 2018-11-01.
- Removal of `pointOfSaleCode` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput.  Deprecated on 2018-08-03. Expected removal on 2018-11-01.
- Removal of `bookingReference` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput.  Deprecated on 2018-08-03. Expected removal on 2018-11-01.
{{% / release-notes-container %}}
### 2018-08-03
{{% release-notes-container type="d"%}}
- Deprecated `organization` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Expected removal on 2018-11-01 .
- Deprecated `pointOfSaleCode` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Expected removal on 2018-11-01 .
- Deprecated `bookingReference` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Expected removal on 2018-11-01 .
{{% / release-notes-container %}}
### 2018-07-09
{{% release-notes-container type="r"%}}
- Removed `quote` from `Query`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
- Removed `deleteDefaultSettings` from `Mutation`. Reason: You can find it in query at Admin. Deprecated on 2017-11-21 .
- Removed `updateDefaultSettings` from `Mutation`. Reason: You can find it in query at Admin. Deprecated on 2017-11-21 .
- Removed `createDefaultSettings` from `Mutation`. Reason: You can find it in query at Admin. Deprecated on 2017-11-21 .
- Removed `loadFile` from `Mutation`. Reason: You can find it in query at Admin. Deprecated on 2017-11-21 .
- Removed `hotelCancel` from `Mutation`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
- Removed `hotelBook` from `Mutation`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
- Removed `search` from `Query`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
- Removed `booking` from `Query`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
- Removed `defaultSettings` from `Query`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
- Removed `mapping` from `Query`. Reason: You can find it in query at HotelX. Deprecated on 2017-11-21 .
{{% / release-notes-container %}}
### 2018-05-21
{{% release-notes-container type="d"%}}
- Deprecated `distribute` from `AddOns`. Reason: You can find it in distribution AddOn. Expected removal on 2018-08-19 .
{{% / release-notes-container %}}
### 2018-03-19
{{% release-notes-container type="d"%}}
- Deprecated `connectUser` from `HotelSettingsInput`. Reason: Redundant.. Expected removal on 2018-06-17 .
{{% / release-notes-container %}}
### 2017-12-12
{{% release-notes-container type="d"%}}
- Deprecated `useContext` from `HotelSettingsInput`. Reason: Redundant.. Expected removal on 2018-03-12 .
{{% / release-notes-container %}}
### 2017-11-21
{{% release-notes-container type="d"%}}
- Deprecated `quote` from `Query`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-09 .
- Deprecated `deleteDefaultSettings` from `Mutation`. Reason: You can find it in query at Admin. Finally removed on 2018-07-09 .
- Deprecated `updateDefaultSettings` from `Mutation`. Reason: You can find it in query at Admin. Finally removed on 2018-07-09 .
- Deprecated `createDefaultSettings` from `Mutation`. Reason: You can find it in query at Admin. Finally removed on 2018-07-09 .
- Deprecated `loadFile` from `Mutation`. Reason: You can find it in query at Admin. Finally removed on 2018-07-09 .
- Deprecated `hotelCancel` from `Mutation`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-09 .
- Deprecated `hotelBook` from `Mutation`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-09 .
- Deprecated `search` from `Query`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-09 .
- Deprecated `booking` from `Query`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-09 .
- Deprecated `defaultSettings` from `Query`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-09 .
- Deprecated `mapping` from `Query`. Reason: You can find it in query at HotelX. Finally removed on 2018-07-09 .
- Deprecated `hotel` from `Booking`. Reason: You can find it in query at HotelX. Expected removal on 2018-02-19 .
- Deprecated `hotel` from `Quote`. Reason: You can find it in query at HotelX. Expected removal on 2018-02-19 .
- Deprecated `hotel` from `Search`. Reason: You can find it in query at HotelX. Expected removal on 2018-02-19 .
{{% / release-notes-container %}}