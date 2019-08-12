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
- Removal of `loadFile` from `HotelXMutation`. Reason: .  Deprecated on 2018-06-06.**To be removed soon**.
- Removal of `distribute` from `AddOns`. Reason: You can find it in distribution AddOn.  Deprecated on 2018-05-21.**To be removed soon**.
- Removal of `type` from `AdviseMessage`. Reason: .  Deprecated on 2018-06-01.**To be removed soon**.
- Removal of `creationDate` from `BookingHotel`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `checkIn` from `BookingHotel`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `checkOut` from `BookingHotel`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `effectiveDate` from `PriceBreakdown`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `expireDate` from `PriceBreakdown`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `effectiveDate` from `Promotion`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `expireDate` from `Promotion`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `effectiveDate` from `RatePlan`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `expireDate` from `RatePlan`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `effectiveDate` from `Supplement`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `expireDate` from `Supplement`. Reason: Incorrect date format..  Deprecated on 2018-02-28.**To be removed soon**.
- Removal of `token` from `HotelOptionSearch`. Reason: .  Deprecated on 2019-02-05.**To be removed soon**.
- Removal of `description` from `Bed`. Reason: Deprecated from 2019-07-29.  Deprecated on 2019-07-29.Expected removal on 2019-10-27.
- Removal of `error` from `Board`. Reason: Deprecated from 2019-07-03.  Deprecated on 2019-07-03.Expected removal on 2019-10-01.
- Removal of `error` from `Category`. Reason: Deprecated from 2019-07-03.  Deprecated on 2019-07-03.Expected removal on 2019-10-01.
- Removal of `error` from `Destination`. Reason: Deprecated from 2019-07-03.  Deprecated on 2019-07-03.Expected removal on 2019-10-01.
- Removal of `error` from `Hotel`. Reason: Deprecated from 2019-07-03.  Deprecated on 2019-07-03.Expected removal on 2019-10-01.
- Removal of `error` from `RoomStatic`. Reason: Deprecated from 2019-07-03.  Deprecated on 2019-07-03.Expected removal on 2019-10-01.
{{% / release-notes-container %}}
### 2019-07-29
{{% release-notes-container type="d"%}}
- Deprecated `description` from `Bed`. Reason: Deprecated from 2019-07-29. Expected removal on 2019-10-27 .
{{% / release-notes-container %}}
### 2019-07-03
{{% release-notes-container type="d"%}}
- Deprecated `error` from `Board`. Reason: Deprecated from 2019-07-03. Expected removal on 2019-10-01 .
- Deprecated `error` from `Category`. Reason: Deprecated from 2019-07-03. Expected removal on 2019-10-01 .
- Deprecated `error` from `Destination`. Reason: Deprecated from 2019-07-03. Expected removal on 2019-10-01 .
- Deprecated `error` from `Hotel`. Reason: Deprecated from 2019-07-03. Expected removal on 2019-10-01 .
- Deprecated `error` from `RoomStatic`. Reason: Deprecated from 2019-07-03. Expected removal on 2019-10-01 .
{{% / release-notes-container %}}
### 2019-02-19
{{% release-notes-container type="r"%}}
- Removed `token` from `HotelOptionSearch`. Reason: . Deprecated on 2019-02-05 .
{{% / release-notes-container %}}
### 2019-02-05
{{% release-notes-container type="d"%}}
- Deprecated `token` from `HotelOptionSearch`. Reason: . Finally removed on 2019-02-19 .
{{% / release-notes-container %}}
### 2018-07-26
{{% release-notes-container type="r"%}}
- Removed `useContext` from `HotelSettingsInput`. Reason: Redundant.. Deprecated on 2017-12-12 .
- Removed `connectUser` from `HotelSettingsInput`. Reason: Redundant.. Deprecated on 2018-03-19 .
{{% / release-notes-container %}}
### 2018-07-24
{{% release-notes-container type="r"%}}
- Removed `distribute` from `AddOns`. Reason: You can find it in distribution AddOn. Deprecated on 2018-05-21 .
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
### 2018-06-06
{{% release-notes-container type="d"%}}
- Deprecated `loadFile` from `HotelXMutation`. Reason: . Expected removal on 2018-09-04 .
{{% / release-notes-container %}}
### 2018-06-01
{{% release-notes-container type="d"%}}
- Deprecated `type` from `AdviseMessage`. Reason: . Expected removal on 2018-08-30 .
{{% / release-notes-container %}}
### 2018-05-21
{{% release-notes-container type="d"%}}
- Deprecated `distribute` from `AddOns`. Reason: You can find it in distribution AddOn. Finally removed on 2018-07-24 .
{{% / release-notes-container %}}
### 2018-03-19
{{% release-notes-container type="d"%}}
- Deprecated `connectUser` from `HotelSettingsInput`. Reason: Redundant.. Finally removed on 2018-07-26 .
{{% / release-notes-container %}}
### 2018-02-28
{{% release-notes-container type="d"%}}
- Deprecated `creationDate` from `BookingHotel`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `checkIn` from `BookingHotel`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `checkOut` from `BookingHotel`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `effectiveDate` from `PriceBreakdown`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `expireDate` from `PriceBreakdown`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `effectiveDate` from `Promotion`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `expireDate` from `Promotion`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `effectiveDate` from `RatePlan`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `expireDate` from `RatePlan`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `effectiveDate` from `Supplement`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
- Deprecated `expireDate` from `Supplement`. Reason: Incorrect date format.. Expected removal on 2018-05-29 .
{{% / release-notes-container %}}
### 2017-12-12
{{% release-notes-container type="d"%}}
- Deprecated `useContext` from `HotelSettingsInput`. Reason: Redundant.. Finally removed on 2018-07-26 .
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
{{% / release-notes-container %}}