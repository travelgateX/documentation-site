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
- Removal of `loadFile` from `HotelXMutation`. Reason: .  Deprecated on 2018-06-06.**To be removed soon**.
- Removal of `cache` from `OperationDetailed`. Reason: Added new field trafficType..  Deprecated on 2019-04-03.**To be removed soon**.
- Removal of `ratios` from `StatsData`. Reason: Added hits fields to be able to calculate ratios at client side..  Deprecated on 2019-04-08.**To be removed soon**.
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
### 2019-04-08
{{% release-notes-container type="d"%}}
- Deprecated `ratios` from `StatsData`. Reason: Added hits fields to be able to calculate ratios at client side.. Expected removal on 2019-07-07 .
{{% / release-notes-container %}}
### 2019-04-03
{{% release-notes-container type="d"%}}
- Deprecated `cache` from `OperationDetailed`. Reason: Added new field trafficType.. Expected removal on 2019-07-02 .
{{% / release-notes-container %}}
### 2019-02-12
{{% release-notes-container type="r"%}}
- Removed `token` from `HotelOptionSearch`. Reason: . Deprecated on 2019-02-05 .
{{% / release-notes-container %}}
### 2019-02-08
{{% release-notes-container type="o"%}}
-  `hotel` from `Booking`. Reason: You can find it in query at HotelX.  .
-  `hotel` from `Quote`. Reason: You can find it in query at HotelX.  .
-  `hotel` from `Search`. Reason: You can find it in query at HotelX.  .
{{% / release-notes-container %}}
### 2019-02-05
{{% release-notes-container type="d"%}}
- Deprecated `token` from `HotelOptionSearch`. Reason: . Finally removed on 2019-02-12 .
{{% / release-notes-container %}}
### 2019-01-30
{{% release-notes-container type="d"%}}
- Deprecated `hotel` from `Booking`. Reason: You can find it in query at HotelX. Finally removed on 2019-02-08 .
- Deprecated `hotel` from `Quote`. Reason: You can find it in query at HotelX. Finally removed on 2019-02-08 .
- Deprecated `hotel` from `Search`. Reason: You can find it in query at HotelX. Finally removed on 2019-02-08 .
{{% / release-notes-container %}}
### 2019-01-11
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
{{% release-notes-container type="r"%}}
- Removed `organization` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Deprecated on 2018-08-03 .
- Removed `pointOfSaleCode` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Deprecated on 2018-08-03 .
- Removed `bookingReference` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Deprecated on 2018-08-03 .
{{% / release-notes-container %}}
{{% release-notes-container type="d"%}}
- Deprecated `error` from `API`. Reason: Sustituted by adviseMessage. Finally removed on 2019-01-11 .
- Deprecated `error` from `Member`. Reason: Sustituted by adviseMessage. Finally removed on 2019-01-11 .
- Deprecated `error` from `Operation`. Reason: Sustituted by adviseMessage. Finally removed on 2019-01-11 .
- Deprecated `error` from `Organization`. Reason: Sustituted by adviseMessage. Finally removed on 2019-01-11 .
- Deprecated `error` from `Product`. Reason: Sustituted by adviseMessage. Finally removed on 2019-01-11 .
- Deprecated `error` from `Resource`. Reason: Sustituted by adviseMessage. Finally removed on 2019-01-11 .
- Deprecated `error` from `Role`. Reason: Sustituted by adviseMessage. Finally removed on 2019-01-11 .
{{% / release-notes-container %}}
### 2018-08-03
{{% release-notes-container type="d"%}}
- Deprecated `organization` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Finally removed on 2018-08-22 .
- Deprecated `pointOfSaleCode` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Finally removed on 2018-08-22 .
- Deprecated `bookingReference` from `PaymentXBookingInfoFilterInput`. Reason: Please use PaymentXBookingInfoCriteriaInput. Finally removed on 2018-08-22 .
{{% / release-notes-container %}}
### 2018-08-01
{{% release-notes-container type="d"%}}
- Deprecated `error` from `Group`. Reason: Sustituted by adviseMessage. Finally removed on 2019-01-11 .
{{% / release-notes-container %}}
### 2018-07-31
{{% release-notes-container type="r"%}}
- Removed `useContext` from `HotelSettingsInput`. Reason: Redundant.. Deprecated on 2017-12-12 .
- Removed `connectUser` from `HotelSettingsInput`. Reason: Redundant.. Deprecated on 2018-03-19 .
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
- Deprecated `distribute` from `AddOns`. Reason: You can find it in distribution AddOn. Expected removal on 2018-08-19 .
{{% / release-notes-container %}}
### 2018-03-19
{{% release-notes-container type="d"%}}
- Deprecated `connectUser` from `HotelSettingsInput`. Reason: Redundant.. Finally removed on 2018-07-31 .
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
- Deprecated `useContext` from `HotelSettingsInput`. Reason: Redundant.. Finally removed on 2018-07-31 .
{{% / release-notes-container %}}