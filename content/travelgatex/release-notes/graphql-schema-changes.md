+++
title = "GraphQL Schema Changes"
pagetitle = "GraphQL API Schema Changes"
description = "It includes backwards-compatible changes, schema previews, and upcoming breaking changes."
weight = 3
alwaysopen = false
icon="fa-cogs"
svgicon="/images/graphql.svg"
hidden = false
tags = ["graphql-changelog"]

+++
The GraphQL schema change log is a list of recent and upcoming changes to our GraphQL API schema. It includes backwards-compatible changes, schema previews, and upcoming breaking changes.

Check out this list of new releases and changes applied on the **TravelgateX GraphQL API**.

## 2020-12-21

⚠️  Union member `Access` was added to Union type `Connection`

✅  Input field `serviceApi` was added to input object type `ActiveFilterInput`

✅  Input field `threeDomainSecurity` was added to input object type `PaymentCardInput`

✅  Input field `virtualCreditCard` was added to input object type `PaymentCardInput`

✅  Input field `isVCC` was added to input object type `PaymentCardInput`

✅  Type `ThreeDSSignatureStatusType` was added

✅  Type `ThreeDSCardEnrolledStatusType` was added

✅  Type `PayerResponseStatusType` was added

✅  Type `ThreeDomainSecurityInput` was added

✅  Type `VirtualCreditCardInput` was added

## 2020-12-03

🛑  Enum value `ROOM_HOTEL` was removed from enum `MappingType`

⚠️  Enum value `supplierOrganization` was added to enum `BookingsReportGroupByInput`

⚠️  Enum value `clientOrganization` was added to enum `BookingsReportGroupByInput`

⚠️  Enum value `PROMOTION` was added to enum `MappingType`

⚠️  Enum value `PROMOTION_MAP` was added to enum `PluginType`

✅  Field `clientOrganization` was added to object type `AggregateSum`

✅  Field `supplierOrganization` was added to object type `AggregateSum`

✅  Field `clientCode` was added to object type `AggregateSum`

✅  Field `supplierCode` was added to object type `AggregateSum`

✅  Field `destinationCountry` was added to object type `AggregateSum`

✅  Field `supplierCode` was added to object type `Promotion`

## 2020-11-23

⚠️  Enum value `HOTEL_ROOM` was added to enum `MappingType`

⚠️  Enum value `ORGANIZATION_BUYER_SELLER` was added to enum `OrganizationTemplate`

⚠️  Enum value `ORGANIZATION_SELLER` was added to enum `OrganizationTemplate`

⚠️  Enum value `ORGANIZATION_BUYER` was added to enum `OrganizationTemplate`

✅  Field `isSeller` was added to object type `OrganizationData`

✅  Field `isBuyer` was added to object type `OrganizationData`

✅  Field `isSeller` was added to object type `GroupData`

✅  Field `isBuyer` was added to object type `GroupData`

## 2020-08-31

✅  Field `HotelOptionQuote.searchPrice` description changed from `Specifies the price of the previous Search Option. Returned only if the shown Quote price differs from the price shown at the Search Option. If the price does not change, this field will be returned Null.` to `Specifies the price of the previous search option`

✅  Field `rooms` was added to object type `HotelOptionQuote`

✅  Input field `providerID` was added to input object type `AccessFilter`

✅  Input field `supplierID` was added to input object type `AccessFilter`

✅  Input field `isActive` was added to input object type `AccessFilter`

✅  Input field `hasMaster` was added to input object type `AccessFilter`

✅  Input field `providerID` was added to input object type `SupplierFilter`

✅  Type `RoomOptionQuote` was added

## 2020-07-27

⚠️  Enum value `WARRANTY` was added to enum `RateRulesType`

⚠️  Enum value `MOBILE` was added to enum `RateRulesType`

✅  Description for enum value `RateRulesType.ESSENTIAL_WORKER` changed from `Special hotel rates for essential workers.` to `ESSENTIAL_WORKER are special hotel rates for essential workers.`

✅  Description for enum value `RateRulesType.NON_REFUNDABLE` changed from `The rate non refundable is applied to non refundable options` to `NON_REFUNDABLE is applicable to non refundable options.`

✅  Description for enum value `RateRulesType.NORMAL` changed from `The rate normal refers to options without RateRule` to `NORMAL are options without RateRule.`

✅  Description for enum value `RateRulesType.UNEMPLOYED` changed from `The rate unemployed is applied to those without work.` to `UNEMPLOYED is applicable to those without work.`

✅  Description for enum value `RateRulesType.PUBLIC_SERVANT` changed from `The rate publicServant is applicable to public servants only.` to `PUBLIC_SERVANT is applicable to public servants only.`

✅  Description for enum value `RateRulesType.HONEYMOON` changed from `The rate honeymoon is applied to those who just got married and is determined by each supplier.` to `HONEYMOON is applicable to those who just got married and is determined by each supplier.`

✅  Description for enum value `RateRulesType.LARGE_FAMILY` changed from `The rate largeFamily is applied to large families and is determined by each supplier` to `LARGE_FAMILY is applicable to large families and is determined by each supplier.`

✅  Description for enum value `RateRulesType.BALEARIC_RESIDENT` changed from `The rate BalearicResident is applicable to Balearic Islands residents only.` to `BALEARIC_RESIDENT is applicable to Balearic Islands residents only.`

✅  Description for enum value `RateRulesType.CANARY_RESIDENT` changed from `The rate CanaryResident is applicable to Canary Islands residents only.` to `CANARY_RESIDENT is applicable to Canary Islands residents only.`

✅  Description for enum value `RateRulesType.OLDER65` changed from `Options that can only be sold to people who are 65 and older.` to `OLDER65 can only be sold to people who are 65 and older.`

✅  Description for enum value `RateRulesType.OLDER60` changed from `Options that can only be sold to people who are 60 and older.` to `OLDER60 can only be sold to people who are 60 and older.`

✅  Description for enum value `RateRulesType.OLDER55` changed from `Options that can only be sold to people who are 55 and older.` to `OLDER55 can only be sold to people who are 55 and older.`

## 2020-05-28

⚠️  Enum value `ESSENTIAL_WORKER` was added to enum `RateRulesType`

## 2020-04-15

🛑  Field `Partner` was removed from object type `AdminQuery`

🛑  Field `PartnerData` was removed from object type `Partner`

✅  Field `partner` was added to object type `AdminQuery`

✅  Input field `title` was added to input object type `BookPaxInput`

✅  Field `partnerData` was added to object type `Partner`

✅  Input field `title` was added to input object type `HolderInput`

✅  Type `PersonalTitleType` was added

## 2020-03-31

🛑  Field `informFees` was removed from object type `MetadataQuote`

🛑  Field `allowsBlockOption` was removed from object type `MetadataQuote`

🛑  Field `informRoomFees` was removed from object type `MetadataSearch`

🛑  Field `informFees` was removed from object type `MetadataSearch`

🛑  Field `informOffers` was removed from object type `MetadataSearch`

🛑  Field `allowsBusinessRules` was removed from object type `MetadataSearch`

🛑  Field `amenities` was removed from object type `MetadataContent`

🛑  Field `currencies` was removed from object type `MetadataContent`

🛑  Field `markets` was removed from object type `MetadataContent`

🛑  Field `categories` was removed from object type `MetadataContent`

🛑  Field `boards` was removed from object type `MetadataContent`

🛑  Field `rooms` was removed from object type `MetadataContent`

🛑  Field `destinations` was removed from object type `MetadataContent`

🛑  Field `hotels` was removed from object type `MetadataContent`

🛑  Field `informExclusiveDeal` was removed from object type `MetadataContent`

🛑  Field `allowsClientLocator` was removed from object type `MetadataCancel`

🛑  Field `allowsProvideLocator` was removed from object type `MetadataCancel`

🛑  Field `implemented` was removed from object type `MetadataCancel`

🛑  Field `informPropertyReservationNumber` was removed from object type `MetadataBooking`

🛑  Field `allowsClientLocator` was removed from object type `MetadataBooking`

🛑  Field `allowsProvideLocator` was removed from object type `MetadataBooking`

🛑  Field `implemented` was removed from object type `MetadataBooking`

🛑  Field `informPropertyReservationNumber` was removed from object type `MetadataBook`

🛑  Field `content` was removed from object type `MetadataData`

🛑  Field `bookingList` was removed from object type `MetadataData`

🛑  Type `MetadataGeneric` was removed

🛑  Type `MetadataStatic` was removed

🛑  Type `MetadataBookingList` was removed

⚠️  Enum value `AMENITY` was added to enum `MappingType`

✅  Description for enum value `MappingType.BOARD` changed from `HOTEL - Comming soon` to ``

✅  Field `mandatory` was added to object type `HotelRuntimeParameter`

✅  Field `requiredNationality` was added to object type `MetadataQuote`

✅  Field `informSurcharges` was added to object type `MetadataQuote`

✅  Field `MetadataSearch.maxStay` description changed from `Maximum number of days allowed for booking. -1 means there is no restriction` to `Maximum number of days allowed for booking.`

✅  Field `requiredNationality` was added to object type `MetadataSearch`

✅  Field `informRoomSurcharges` was added to object type `MetadataSearch`

✅  Field `informSurcharges` was added to object type `MetadataSearch`

✅  Field `informPromotions` was added to object type `MetadataSearch`

✅  Description `Contnet static metadata information, allow you know if some static information or API it's supported by the supplier` on type `MetadataContent` has changed to `Informs the  content information, return null if not implemented`

✅  Field `languages` was added to object type `MetadataContent`

✅  Field `mutableByClientReference` was added to object type `MetadataCancel`

✅  Field `mutableBySupplierReference` was added to object type `MetadataCancel`

✅  Field `MetadataBooking.informPriceCancel` description changed from `The supplier informs the cancellation price.` to `Informs the cancellation price.`

✅  Field `MetadataBooking.informCancelPolicies` description changed from `Informs cancellation policies.` to `Informs the cancellation policies.`

✅  Field `informHotelReference` was added to object type `MetadataBooking`

✅  Field `queryableByCheckinDate` was added to object type `MetadataBooking`

✅  Field `queryableByCreationDate` was added to object type `MetadataBooking`

✅  Field `queryableByClientReference` was added to object type `MetadataBooking`

✅  Field `queryableBySupplierReference` was added to object type `MetadataBooking`

✅  Field `MetadataBook.informBillingSupplier` description changed from `Informs if the supplier returns the property reservation number.` to `Informs if the supplier billing code.`

✅  Field `requiredNationality` was added to object type `MetadataBook`

✅  Field `informHotelReference` was added to object type `MetadataBook`

✅  Field `MetadataData.cancel` description changed from `Cancel medatadata` to `Cancel metadata`

✅  Field `MetadataData.booking` description changed from `Booking medatadata` to `Booking metadata`

✅  Field `MetadataData.book` description changed from `Book medatadata` to `Book metadata`

✅  Field `MetadataData.quote` description changed from `Quote medatadata` to `Quote metadata`

✅  Field `MetadataData.search` description changed from `Search medatadata` to `Search metadata`

✅  Field `amenities` was added to object type `MetadataData`

✅  Field `currencies` was added to object type `MetadataData`

✅  Field `markets` was added to object type `MetadataData`

✅  Field `categories` was added to object type `MetadataData`

✅  Field `boards` was added to object type `MetadataData`

✅  Field `rooms` was added to object type `MetadataData`

✅  Field `destinations` was added to object type `MetadataData`

✅  Field `hotels` was added to object type `MetadataData`

## 2020-03-10

🛑  Field `audit` was removed from object type `Query`

🛑  Field `audit` was removed from object type `Mutation`

🛑  Input field `AlertUpdateErrorRateComparativeConfigurationByTimeInput.windowing` changed type from `AlertCommonByTimeInput` to `AlertUpdateCommonByTimeInput`

🛑  Input field `AlertUpdatePeakTrafficComparativeByTimeInput.configuration` changed type from `AlertUpdatePeakTrafficComprarativeConfigurationByTimeInput` to `AlertUpdatePeakTrafficComparativeConfigurationByTimeInput`

🛑  Input field `AlertPeakTrafficComparativeByTimeInput.configuration` changed type from `AlertPeakTrafficComprarativeConfigurationByTimeInput!` to `AlertPeakTrafficComparativeConfigurationByTimeInput!`

🛑  Type `AuditQuery` was removed

🛑  Type `AuditMutation` was removed

🛑  Type `AlertUpdatePeakTrafficComprarativeConfigurationByTimeInput` was removed

🛑  Type `AlertPeakTrafficComprarativeConfigurationByTimeInput` was removed

✅  Description ` The service used to access the stats of every connection that uses the HUB ` on type `AuditRule` has changed to `The service used to access the stats of every connection that uses the HUB`

✅  Field `AuditRule.code` description changed from `GUID` to ``

✅  Field `InsightsQuery.hotelXMappingReport` description changed from `## Retrieve Mapping Report for HotelX` to `Retrieve Mapping Report for HotelX`

✅  Field `InsightsQuery.bookingsReport` description changed from `## Retrieve Bookings Details and Summary` to `Retrieve Bookings Details and Summary`

✅  Field `logging` was added to object type `Mutation`

✅  Field `allAuditRules` was added to object type `LoggingQuery`

✅  Input field `AlertUpdatePriceRelativeConfigurationByTimeInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertUpdatePriceRelativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdatePriceRelativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertUpdatePriceRelativeConfigurationByTimeInput.price` description changed from `` to `Configuration of amount & commission values`

✅  Input field `AlertUpdatePriceRelativeConfigurationByRequestsInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertUpdatePriceRelativeConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdatePriceRelativeConfigurationByRequestsInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertUpdatePriceRelativeConfigurationByRequestsInput.price` description changed from `` to `Configuration of amount & commission values`

✅  Input field `AlertUpdatePriceInput.amountBy` description changed from `` to `Amount can be checked by its total value or night`

✅  Input field `AlertUpdatePriceInput.range` description changed from `Low or greater values of amount/commission (value included)` to `Low or greater values of amount/commission (value included) `

✅  Input field `AlertUpdatePriceAbsoluteConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdatePriceAbsoluteConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertUpdatePriceAbsoluteConfigurationByTimeInput.price` description changed from `` to `Configuration of amount & commission values`

✅  Input field `AlertUpdatePriceAbsoluteConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdatePriceAbsoluteConfigurationByRequestsInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertUpdatePriceAbsoluteConfigurationByRequestsInput.price` description changed from `` to `Configuration of amount & commission values`

✅  Input field `AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput.bounds` description changed from `` to `Limits for number of requests`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByTimeInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByTimeInput.toCompare` description changed from `` to `Error codes to compare. By defaults all traffic is compared`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByTimeInput.toCheck` description changed from `` to `Error codes to check. By default all error codes are checked`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByRequestsInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByRequestsInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByRequestsInput.toCompare` description changed from `` to `Error codes to compare. By defaults all traffic is compared`

✅  Input field `AlertUpdateErrorRateRelativeConfigurationByRequestsInput.toCheck` description changed from `` to `Error codes to check. By default all error codes are checked`

✅  Input field `AlertUpdateErrorRateComparativeConfigurationByTimeInput.comparative` description changed from `` to `Common configuration of comparative mode type`

✅  Input field `AlertUpdateErrorRateComparativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdateErrorRateComparativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertUpdateErrorRateComparativeConfigurationByTimeInput.toCompare` description changed from `` to `Error codes to compare. By defaults all traffic is compared`

✅  Input field `AlertUpdateErrorRateComparativeConfigurationByTimeInput.toCheck` description changed from `` to `Error codes to check. By default all error codes are checked`

✅  Input field `AlertUpdateBoundsInput.lowerBound` description changed from `` to `Lower bound limit`

✅  Input field `AlertUpdateBoundsInput.upperBound` description changed from `` to `Upper bound limit`

✅  Input field `AlertUpdateBoundsInput.bound` description changed from `` to `Bound limits to be used`

✅  Input field `AlertUpdateCommonRelativeInput.percentageToAlert` description changed from `` to `percentage to be considered status ALERTING`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByTimeInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByTimeInput.maxAverageTime` description changed from `` to `Average time value not allowed in miliseconds`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByTimeInput.maxTime` description changed from `` to `Time value not allowed in miliseconds`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByRequestsInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByRequestsInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByRequestsInput.maxAverageTime` description changed from `` to `Average time value not allowed in miliseconds`

✅  Input field `AlertUpdateAverageTimeRelativeConfigurationByRequestsInput.maxTime` description changed from `` to `Time value not allowed in miliseconds`

✅  Input field `AlertUpdateCommonComparativeInput.percentageToAlert` description changed from `` to `Percentage of traffic to be considered status ALERTING`

✅  Input field `AlertUpdateCommonComparativeInput.variation` description changed from `` to `According to percentageToAlert value`

✅  Input field `AlertUpdateCommonComparativeInput.offset` description changed from `` to `Time frame in minutes to set the beginning of historicalWindow`

✅  Input field `AlertUpdateCommonComparativeInput.historicalWindow` description changed from `` to `The time frame in minutes to be used to compare with the window time frame`

✅  Input field `AlertUpdateAverageTimeComparativeConfigurationByTimeInput.comparative` description changed from `` to `Common configuration of comparative mode type`

✅  Input field `AlertUpdateAverageTimeComparativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdateAverageTimeComparativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertUpdateCommonByTimeInput.minNumberRequests` description changed from `` to `Minimum number of requests must be in window to check the alert`

✅  Input field `AlertUpdateCommonByTimeInput.window` description changed from `` to `The time frame in minutes`

✅  Input field `AlertUpdateCommonByTimeInput.periodicity` description changed from `` to `Frequency of time in minutes in which the alert will be reviewed`

✅  Input field `AlertUpdateCommonByRequestsInput.minNumberRequests` description changed from `` to `minimum number of requests to check the alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.requestsToAlert` description changed from `` to `Number of requests with anomaly to set alert in ALERTING status`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.maxAverageTime` description changed from `` to `Average time value not allowed in miliseconds`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.maxTime` description changed from `` to `Time value not allowed in miliseconds`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByRequestsInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByRequestsInput.requestsToAlert` description changed from `` to `Number of requests with anomaly to set alert in ALERTING status`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByRequestsInput.maxAverageTime` description changed from `` to `Average time value not allowed in miliseconds`

✅  Input field `AlertUpdateAverageTimeAbsoluteConfigurationByRequestsInput.maxTime` description changed from `` to `Time value not allowed in miliseconds`

✅  Input field `AlertPriceRelativeConfigurationByTimeInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertPriceRelativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertPriceRelativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertPriceRelativeConfigurationByTimeInput.price` description changed from `` to `Configuration of amount & commission values`

✅  Input field `AlertPriceRelativeConfigurationByRequestsInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertPriceRelativeConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertPriceRelativeConfigurationByRequestsInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertPriceRelativeConfigurationByRequestsInput.price` description changed from `` to `Configuration of amount & commission values`

✅  Input field `AlertPriceInput.amountBy` description changed from `` to `Amount can be checked by its total value or night`

✅  Input field `AlertPriceAbsoluteConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertPriceAbsoluteConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertPriceAbsoluteConfigurationByTimeInput.price` description changed from `` to `Configuration of amount & commission values`

✅  Input field `AlertPriceAbsoluteConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertPriceAbsoluteConfigurationByRequestsInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertPriceAbsoluteConfigurationByRequestsInput.price` description changed from `` to `Configuration of amount & commission values`

✅  Input field `AlertPeakTrafficAbsoluteConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertPeakTrafficAbsoluteConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertPeakTrafficAbsoluteConfigurationByTimeInput.bounds` description changed from `` to `Limits for number of requests`

✅  Input field `AlertErrorRateRelativeConfigurationByTimeInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertErrorRateRelativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertErrorRateRelativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertErrorRateRelativeConfigurationByRequestsInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertErrorRateRelativeConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertErrorRateRelativeConfigurationByRequestsInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertErrorRateRelativeConfigurationByRequestsInput.toCompare` description changed from `By defaults all traffic is compared` to `Error codes to compare. By defaults all traffic is compared`

✅  Input field `AlertErrorRateRelativeConfigurationByRequestsInput.toCheck` description changed from `By default all error codes are checked` to `Error codes to check. By default all error codes are checked`

✅  Input field `AlertErrorRateComparativeConfigurationByTimeInput.comparative` description changed from `` to `Common configuration of comparative mode type`

✅  Input field `AlertErrorRateComparativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertErrorRateComparativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type`

✅  Input field `AlertErrorRateComparativeConfigurationByTimeInput.toCompare` description changed from `By defaults all traffic is compared` to `Error codes to compare. By defaults all traffic is compared`

✅  Input field `AlertErrorRateComparativeConfigurationByTimeInput.toCheck` description changed from `By default all error codes are checked` to `Error codes to check. By default all error codes are checked`

✅  Input field `AlertGroupInput.isInclusive` description changed from `to indicate if tráfic with the code group has to be checked or not for this alert` to `Can be filtered traffic setting as inclusive or excludent`

✅  Input field `AlertGroupInput.comercialType` description changed from `` to `SELLER or BUYER`

✅  Input field `AlertGroupInput.code` description changed from `` to `Group code`

✅  Input field `AlertObjectInput.isInclusive` description changed from `to indicate if tráfic with the code object has to be checked or not for this alert` to `Can be filtered traffic setting as inclusive or excludent`

✅  Input field `AlertErrorTypeInput.isInclusive` description changed from `to indicate if tráfic with the error type code has to be checked or not for this alert` to `Can be filtered traffic setting as inclusive or excludent`

✅  Input field `AlertErrorTypeInput.code` description changed from `` to `Error type code`

✅  Input field `AlertErrorCodeInput.isInclusive` description changed from `` to `Can be filtered traffic setting as inclusive or excludent`

✅  Input field `AlertErrorCodeInput.code` description changed from `` to `Error code`

✅  Input field `AlertHubStatusInput.isInclusive` description changed from `` to `Can be filtered traffic setting as inclusive or excludent`

✅  Input field `AlertHubStatusInput.code` description changed from `` to `Hub status code`

✅  Input field `AlertEmailInput.type` description changed from `email type` to `Destination email type`

✅  Input field `AlertEmailInput.address` description changed from `address ID` to `Email address`

✅  Description `` on type `AlertBoundsInput` has changed to `Limit of requests to define`

✅  Input field `AlertBoundsInput.lowerBound` description changed from `` to `Lower bound limit`

✅  Input field `AlertBoundsInput.upperBound` description changed from `` to `Upper bound limit`

✅  Input field `AlertBoundsInput.bound` description changed from `` to `Bound limits to be used`

✅  Input field `AlertCommonRelativeInput.percentageToAlert` description changed from `percentage to be considered status ALERTING` to `percentage of traffic to be considered status ALERTING`

✅  Input field `AlertAverageTimeRelativeConfigurationByTimeInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertAverageTimeRelativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertAverageTimeRelativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration of time window type`

✅  Input field `AlertAverageTimeRelativeConfigurationByTimeInput.maxAverageTime` description changed from `Average time not allowed in miliseconds.` to `Average time not allowed in miliseconds`

✅  Input field `AlertAverageTimeRelativeConfigurationByTimeInput.maxTime` description changed from `Time not allowed in miliseconds.` to `Time not allowed in miliseconds`

✅  Input field `AlertAverageTimeRelativeConfigurationByRequestsInput.relative` description changed from `` to `Common configuration of relative mode type`

✅  Input field `AlertAverageTimeRelativeConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertAverageTimeRelativeConfigurationByRequestsInput.windowing` description changed from `Average time not allowed in miliseconds.` to `Common configuration for requests window type`

✅  Input field `AlertAverageTimeRelativeConfigurationByRequestsInput.maxTime` description changed from `Time not allowed in miliseconds.` to `Time not allowed in miliseconds`

✅  Input field `maxAverageTime` was added to input object type `AlertAverageTimeRelativeConfigurationByRequestsInput`

✅  Input field `AlertCommonComparativeInput.percentageToAlert` description changed from `According to percentageToAlert value` to `Percentage to be considered status ALERTING`

✅  Input field `AlertCommonComparativeInput.variation` description changed from `Percentage to be considered status ALERTING` to `According to percentageToAlert value`

✅  Input field `AlertAverageTimeComparativeConfigurationByTimeInput.comparative` description changed from `` to `Common configuration of comparative mode type`

✅  Input field `AlertAverageTimeComparativeConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertAverageTimeComparativeConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type.`

✅  Input field `AlertCommonByTimeInput.minNumberRequests` description changed from `minimum number of requests to check the alert` to `Minimum number of requests must be in window to check the alert`

✅  Input field `AlertAverageTimeAbsoluteConfigurationByTimeInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertAverageTimeAbsoluteConfigurationByTimeInput.windowing` description changed from `` to `Common configuration for time window type.`

✅  Input field `AlertAverageTimeAbsoluteConfigurationByRequestsInput.common` description changed from `` to `Common configuration alert`

✅  Input field `AlertAverageTimeAbsoluteConfigurationByRequestsInput.windowing` description changed from `` to `Common configuration for requests window type`

✅  Input field `AlertAverageTimeAbsoluteConfigurationByRequestsInput.requestsToAlert` description changed from `Requests vs total requests checked to consider alert in ALERTING status.` to `Number of requests with anomaly to set alert in ALERTING status`

✅  Input field `AlertAverageTimeAbsoluteConfigurationByRequestsInput.maxAverageTime` description changed from `Average time not allowed in miliseconds.` to `Average time not allowed in miliseconds`

✅  Input field `AlertAverageTimeAbsoluteConfigurationByRequestsInput.maxTime` description changed from `Time not allowed in miliseconds.` to `Time not allowed in miliseconds`

✅  Input field `AlertCriteriaInput.shared` description changed from `List of shared type  ` to `shared alerts`

✅  Input field `AlertCriteriaInput.isActive` description changed from `active or not` to `enabled or desabled alerts`

✅  Input field `AlertUpdatePriceAbsoluteByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdatePriceAbsoluteByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdatePriceAbsoluteByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdatePriceAbsoluteByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdatePriceAbsoluteByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdatePriceAbsoluteByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdatePriceAbsoluteByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdatePriceAbsoluteByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdatePriceRelativeByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdatePriceRelativeByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdatePriceRelativeByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdatePriceRelativeByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdatePriceRelativeByTimeInput.isActive` description changed from `status` to `To enable or desable the alert`

✅  Input field `AlertUpdatePriceRelativeByTimeInput.configuration` description changed from `configuration` to `Configuration of the alert`

✅  Input field `AlertUpdatePriceRelativeByTimeInput.description` description changed from `description` to `Description of the alert`

✅  Input field `AlertUpdatePriceRelativeByTimeInput.name` description changed from `name` to `Name of the alert`

✅  Input field `AlertUpdatePeakTrafficComparativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdatePeakTrafficComparativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdatePeakTrafficComparativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdatePeakTrafficComparativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdatePeakTrafficAbsoluteByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdatePeakTrafficAbsoluteByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdatePeakTrafficAbsoluteByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdatePeakTrafficAbsoluteByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdateAverageTimeComparativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdateAverageTimeComparativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdateAverageTimeComparativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdateAverageTimeComparativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdateAverageTimeAbsoluteByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdateAverageTimeRelativeByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdateAverageTimeRelativeByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdateAverageTimeRelativeByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdateAverageTimeRelativeByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdateAverageTimeRelativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdateAverageTimeRelativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdateAverageTimeRelativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdateAverageTimeRelativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdateErrorRateComparativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdateErrorRateComparativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdateErrorRateComparativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdateErrorRateComparativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdateErrorRateRelativeByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdateErrorRateRelativeByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdateErrorRateRelativeByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdateErrorRateRelativeByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertUpdateErrorRateRelativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertUpdateErrorRateRelativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertUpdateErrorRateRelativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertUpdateErrorRateRelativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertPriceAbsoluteByRequestsInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertPriceAbsoluteByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertPriceAbsoluteByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertPriceAbsoluteByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertPriceAbsoluteByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertPriceAbsoluteByTimeInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertPriceAbsoluteByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertPriceAbsoluteByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertPriceAbsoluteByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertPriceAbsoluteByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertPriceRelativeByRequestsInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertPriceRelativeByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertPriceRelativeByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertPriceRelativeByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertPriceRelativeByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertPriceRelativeByTimeInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertPriceRelativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertPriceRelativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertPriceRelativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertPriceRelativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertPeakTrafficComparativeByTimeInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertPeakTrafficComparativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertPeakTrafficComparativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertPeakTrafficComparativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertPeakTrafficComparativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertPeakTrafficAbsoluteByTimeInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertPeakTrafficAbsoluteByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertPeakTrafficAbsoluteByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertPeakTrafficAbsoluteByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertPeakTrafficAbsoluteByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertAverageTimeComparativeByTimeInput.group` description changed from `` to `Group where the alert is setted`

✅  Input field `AlertAverageTimeComparativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertAverageTimeComparativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertAverageTimeComparativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertAverageTimeComparativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertAverageTimeAbsoluteByRequestsInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertAverageTimeAbsoluteByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertAverageTimeAbsoluteByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertAverageTimeAbsoluteByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertAverageTimeAbsoluteByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertAverageTimeAbsoluteByTimeInput.group` description changed from `` to `Group where the alert is setted`

✅  Input field `AlertAverageTimeAbsoluteByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertAverageTimeAbsoluteByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertAverageTimeAbsoluteByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertAverageTimeAbsoluteByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertAverageTimeRelativeByRequestsInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertAverageTimeRelativeByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertAverageTimeRelativeByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertAverageTimeRelativeByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertAverageTimeRelativeByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertAverageTimeRelativeByTimeInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertAverageTimeRelativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertAverageTimeRelativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertAverageTimeRelativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertAverageTimeRelativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertErrorRateComparativeByTimeInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertErrorRateComparativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertErrorRateComparativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertErrorRateComparativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertErrorRateComparativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertErrorRateRelativeByRequestsInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertErrorRateRelativeByRequestsInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertErrorRateRelativeByRequestsInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertErrorRateRelativeByRequestsInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertErrorRateRelativeByRequestsInput.name` description changed from `` to `Name of the alert`

✅  Input field `AlertErrorRateRelativeByTimeInput.group` description changed from `` to `groups where the alert is setted`

✅  Input field `AlertErrorRateRelativeByTimeInput.isActive` description changed from `` to `To enable or desable the alert`

✅  Input field `AlertErrorRateRelativeByTimeInput.configuration` description changed from `` to `Configuration of the alert`

✅  Input field `AlertErrorRateRelativeByTimeInput.description` description changed from `` to `Description of the alert`

✅  Input field `AlertErrorRateRelativeByTimeInput.name` description changed from `` to `Name of the alert`

✅  Type `LoggingMutation` was added

✅  Type `AlertUpdatePeakTrafficComparativeConfigurationByTimeInput` was added

✅  Type `AlertPeakTrafficComparativeConfigurationByTimeInput` was added

## 2020-03-09

✅  Field `audit` was added to object type `Query`

✅  Field `audit` was added to object type `Mutation`

✅  Type `AuditRuleData` was added

✅  Type `AuditRuleEdge` was added

✅  Type `AuditRuleWhereUniqueInput` was added

✅  Type `AuditRule` was added

✅  Type `AuditRuleCreateInput` was added

✅  Type `AuditRuleStatus` was added

✅  Type `AuditRuleProductInput` was added

✅  Type `AuditRuleWhereInput` was added

✅  Type `AuditRuleConnection` was added

✅  Type `AuditQuery` was added

✅  Type `AuditMutation` was added

## 2020-03-03

✅  Field `MetadataSearch.maxStay` description changed from `Maximum number of days allowed for booking.` to `Maximum number of days allowed for booking. -1 means there is no restriction`

## 2020-02-27

🛑  Field `allCustomerAccounts` was removed from object type `AdminQuery`

🛑  Field `customerAccount` was removed from object type `AdminQuery`

🛑  Argument `PartnerCode: ID!` added to field `AdminMutation.deleteAgent`

🛑  Argument `CustomerAccountCode: ID!` was removed from field `AdminMutation.deleteAgent`

🛑  Field `AdminMutation.deleteAgent` changed type from `CustomerAccount!` to `Partner!`

🛑  Argument `PartnerCode: ID!` added to field `AdminMutation.addAgent`

🛑  Argument `CustomerAccountCode: ID!` was removed from field `AdminMutation.addAgent`

🛑  Field `AdminMutation.addAgent` changed type from `CustomerAccount!` to `Partner!`

🛑  Field `setPrimaryCustomerAccount` was removed from object type `AdminMutation`

🛑  Field `deleteCustomerAccountFromOrganization` was removed from object type `AdminMutation`

🛑  Field `addCustomerAccountToOrganization` was removed from object type `AdminMutation`

🛑  Field `deleteCustomerAccount` was removed from object type `AdminMutation`

🛑  Field `updateCustomerAccount` was removed from object type `AdminMutation`

🛑  Field `createCustomerAccount` was removed from object type `AdminMutation`

🛑  Input field `AlertPriceInput.range` changed type from `RangePrice!` to `AlertRangePrice!`

🛑  Input field `AlertPriceInput.check` changed type from `CheckPrice!` to `AlertCheckPrice!`

🛑  Input field `mode` was removed from input object type `AlertPriceInput`

🛑  Input field `AlertCriteriaInput.shared` changed type from `[SharedType!]` to `[AlertSharedType!]`

🛑  Input field `alertCodes` was removed from input object type `AlertCriteriaInput`

🛑  Field `updateAlert` was removed from object type `AlertsXMutation`

🛑  Field `createAlert` was removed from object type `AlertsXMutation`

🛑  Input field `AlertGroupInput.comercialType` changed type from `ComercialType!` to `AlertComercialType!`

🛑  Field `AlertPrice.range` changed type from `RangePrice!` to `AlertRangePrice!`

🛑  Field `AlertPrice.check` changed type from `CheckPrice!` to `AlertCheckPrice!`

🛑  Field `mode` was removed from object type `AlertPrice`

🛑  Field `max_average` was removed from object type `AlertTypeConfiguration`

🛑  Field `offset` was removed from object type `AlertTypeConfiguration`

🛑  Field `historicalWindow` was removed from object type `AlertTypeConfiguration`

🛑  Enum value `NO_TRAFFIC` was removed from enum `AlertType`

🛑  Field `count` was removed from object type `AlertConnection`

🛑  Field `AlertConfiguration.comercialType` changed type from `ComercialType` to `AlertComercialType`

🛑  Type for argument `type` on field `AlertConfiguration.email` changed from `EmailType` to `AlertEmailType`

🛑  Field `AlertConfiguration.email` changed type from `[Email]!` to `[AlertEmail]`

🛑  Field `AlertConfiguration.minNumberRequests` changed type from `Int!` to `Int`

🛑  Field `AlertData.events` changed type from `EventConnection!` to `AlertEventConnection!`

🛑  Field `allCustomerAccounts` was removed from object type `OrganizationData`

🛑  Field `primaryCustomerAccount` was removed from object type `OrganizationData`

🛑  Type `unitTime` was removed

🛑  Type `SharedType` was removed

🛑  Type `ErrorTypeInput` was removed

🛑  Type `ErrorCodeInput` was removed

🛑  Type `HubStatusInput` was removed

🛑  Type `EmailInput` was removed

🛑  Type `EventType` was removed

🛑  Type `EventEdge` was removed

🛑  Type `Event` was removed

🛑  Type `EventData` was removed

🛑  Type `AlertPriceUpdateInput` was removed

🛑  Type `AlertUpdateConfigurationInputPrice` was removed

🛑  Type `AlertUpdateConfigurationInputPeakTraffic` was removed

🛑  Type `AlertUpdateConfigurationInputAverageTime` was removed

🛑  Type `AlertUpdateConfigurationInputErrorRate` was removed

🛑  Type `AlertUpdateConfigurationInputNoTraffic` was removed

🛑  Type `AlertUpdateInput` was removed

🛑  Type `AlertConfigurationInputPrice` was removed

🛑  Type `AlertConfigurationInputPeakTraffic` was removed

🛑  Type `AlertConfigurationInputAverageTime` was removed

🛑  Type `AlertConfigurationInputErrorRate` was removed

🛑  Type `AlertConfigurationInputNoTraffic` was removed

🛑  Type `AlertInput` was removed

🛑  Type `RangePrice` was removed

🛑  Type `CheckPrice` was removed

🛑  Type `ModePrice` was removed

🛑  Type `EventConnection` was removed

🛑  Type `ComercialType` was removed

🛑  Type `EmailType` was removed

🛑  Type `Email` was removed

🛑  Type `UpdateCustomerAccountInput` was removed

🛑  Type `CustomerAccountWhereUniqueInput` was removed

🛑  Type `CustomerAccountUpdateInput` was removed

🛑  Type `CustomerAccountCreateInput` was removed

🛑  Type `CustomerAccountOrderByInput` was removed

🛑  Type `CustomerAccountWhereInput` was removed

🛑  Type `CustomerAccountConnection` was removed

🛑  Type `CustomerAccountEdge` was removed

🛑  Type `CustomerAccount` was removed

🛑  Type `CustomerAccountData` was removed

✅  Field `allPartners` was added to object type `AdminQuery`

✅  Field `Partner` was added to object type `AdminQuery`

✅  Field `setPrimaryPartner` was added to object type `AdminMutation`

✅  Field `deletePartnerFromOrganization` was added to object type `AdminMutation`

✅  Field `addPartnerToOrganization` was added to object type `AdminMutation`

✅  Field `deletePartner` was added to object type `AdminMutation`

✅  Field `updatePartner` was added to object type `AdminMutation`

✅  Field `createPartner` was added to object type `AdminMutation`

✅  Input field `amountBy` was added to input object type `AlertPriceInput`

✅  Input field `AlertCriteriaInput.groups` description changed from `List of group codes where alerts are located` to `Group codes`

✅  Input field `codes` was added to input object type `AlertCriteriaInput`

✅  Field `deleteAlert` was added to object type `AlertsXMutation`

✅  Field `updateAlertPriceAbsoluteByRequests` was added to object type `AlertsXMutation`

✅  Field `updateAlertPriceAbsoluteByTime` was added to object type `AlertsXMutation`

✅  Field `updateAlertPriceRelativeByRequests` was added to object type `AlertsXMutation`

✅  Field `updateAlertPriceRelativeByTime` was added to object type `AlertsXMutation`

✅  Field `updateAlertPeakTrafficComparativeByTime` was added to object type `AlertsXMutation`

✅  Field `updateAlertPeakTrafficAbsoluteByTime` was added to object type `AlertsXMutation`

✅  Field `updateAlertAverageTimeComparativeByTime` was added to object type `AlertsXMutation`

✅  Field `updateAlertAverageTimeAbsoluteByRequests` was added to object type `AlertsXMutation`

✅  Field `updateAlertAverageTimeAbsoluteByTime` was added to object type `AlertsXMutation`

✅  Field `updateAlertAverageTimeRelativeByRequests` was added to object type `AlertsXMutation`

✅  Field `updateAlertAverageTimeRelativeByTime` was added to object type `AlertsXMutation`

✅  Field `updateAlertErrorRateComparativeByTime` was added to object type `AlertsXMutation`

✅  Field `updateAlertErrorRateRelativeByRequests` was added to object type `AlertsXMutation`

✅  Field `updateAlertErrorRateRelativeByTime` was added to object type `AlertsXMutation`

✅  Field `createAlertPriceAbsoluteByRequests` was added to object type `AlertsXMutation`

✅  Field `createAlertPriceAbsoluteByTime` was added to object type `AlertsXMutation`

✅  Field `createAlertPriceRelativeByRequests` was added to object type `AlertsXMutation`

✅  Field `createAlertPriceRelativeByTime` was added to object type `AlertsXMutation`

✅  Field `createAlertPeakTrafficComparativeByTime` was added to object type `AlertsXMutation`

✅  Field `createAlertPeakTrafficAbsoluteByTime` was added to object type `AlertsXMutation`

✅  Field `createAlertAverageTimeComparativeByTime` was added to object type `AlertsXMutation`

✅  Field `createAlertAverageTimeAbsoluteByRequests` was added to object type `AlertsXMutation`

✅  Field `createAlertAverageTimeAbsoluteByTime` was added to object type `AlertsXMutation`

✅  Field `createAlertAverageTimeRelativeByRequests` was added to object type `AlertsXMutation`

✅  Field `createAlertAverageTimeRelativeByTime` was added to object type `AlertsXMutation`

✅  Field `createAlertErrorRateComparativeByTime` was added to object type `AlertsXMutation`

✅  Field `createAlertErrorRateRelativeByRequests` was added to object type `AlertsXMutation`

✅  Field `createAlertErrorRateRelativeByTime` was added to object type `AlertsXMutation`

✅  Field `amountBy` was added to object type `AlertPrice`

✅  Description `Depending on the talert type, typeConfiguration will use some fields ` on type `AlertTypeConfiguration` has changed to `Depending on the alert type, typeConfiguration will use some fields`

✅  Field `AlertTypeConfiguration.toCompare` description changed from `Error codes to be Compared with Checked codes. By default all error codes` to `Error codes to be Compared with Checked codes. By default all error codes.  Used for Error rate alert type`

✅  Field `AlertTypeConfiguration.toCheck` description changed from `Error codes to be Checked. By default  all error codes excepts 0` to `Error codes to be Checked. By default  all error codes excepts 0. Used for Error rate alert type`

✅  Field `bounds` was added to object type `AlertTypeConfiguration`

✅  Field `requestsToAlert` was added to object type `AlertTypeConfiguration`

✅  Field `maxTime` was added to object type `AlertTypeConfiguration`

✅  Field `maxAverageTime` was added to object type `AlertTypeConfiguration`

✅  Field `AlertConnection.pageInfo` description changed from `Indicates info about page` to ``

✅  Field `totalCount` was added to object type `AlertConnection`

✅  Field `AlertConfiguration.percentageToAlert` description changed from `Minimum percentage to be considered status ALERTING ` to `percentage to be considered status ALERTING`

✅  Field `AlertConfiguration.typeConfiguration` description changed from `specific configuration according to the alert type` to `Specific configuration according to the alert type`

✅  Field `variation` was added to object type `AlertConfiguration`

✅  Field `offset` was added to object type `AlertConfiguration`

✅  Field `historicalWindow` was added to object type `AlertConfiguration`

✅  Field `windowType` was added to object type `AlertConfiguration`

✅  Field `mode` was added to object type `AlertConfiguration`

✅  Field `group` was added to object type `AlertData`

✅  Field `allPartners` was added to object type `OrganizationData`

✅  Field `primaryPartner` was added to object type `OrganizationData`

✅  Type `AlertUpdatePriceRelativeConfigurationByTimeInput` was added

✅  Type `AlertUpdatePriceRelativeConfigurationByRequestsInput` was added

✅  Type `AlertUpdatePriceInput` was added

✅  Type `AlertUpdatePriceAbsoluteConfigurationByTimeInput` was added

✅  Type `AlertUpdatePriceAbsoluteConfigurationByRequestsInput` was added

✅  Type `AlertUpdatePeakTrafficComprarativeConfigurationByTimeInput` was added

✅  Type `AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput` was added

✅  Type `AlertUpdateErrorRateRelativeConfigurationByTimeInput` was added

✅  Type `AlertUpdateErrorRateRelativeConfigurationByRequestsInput` was added

✅  Type `AlertUpdateErrorRateComparativeConfigurationByTimeInput` was added

✅  Type `AlertUpdateBoundsInput` was added

✅  Type `AlertUpdateCommonRelativeInput` was added

✅  Type `AlertUpdateAverageTimeRelativeConfigurationByTimeInput` was added

✅  Type `AlertUpdateAverageTimeRelativeConfigurationByRequestsInput` was added

✅  Type `AlertUpdateCommonComparativeInput` was added

✅  Type `AlertUpdateAverageTimeComparativeConfigurationByTimeInput` was added

✅  Type `AlertUpdateCommonByTimeInput` was added

✅  Type `AlertUpdateCommonConfigurationInput` was added

✅  Type `AlertUpdateCommonByRequestsInput` was added

✅  Type `AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput` was added

✅  Type `AlertUpdateAverageTimeAbsoluteConfigurationByRequestsInput` was added

✅  Type `AlertPriceRelativeConfigurationByTimeInput` was added

✅  Type `AlertPriceRelativeConfigurationByRequestsInput` was added

✅  Type `AlertPriceAbsoluteConfigurationByTimeInput` was added

✅  Type `AlertPriceAbsoluteConfigurationByRequestsInput` was added

✅  Type `AlertPeakTrafficComprarativeConfigurationByTimeInput` was added

✅  Type `AlertPeakTrafficAbsoluteConfigurationByTimeInput` was added

✅  Type `AlertErrorRateRelativeConfigurationByTimeInput` was added

✅  Type `AlertErrorRateRelativeConfigurationByRequestsInput` was added

✅  Type `AlertErrorRateComparativeConfigurationByTimeInput` was added

✅  Type `AlertSharedType` was added

✅  Type `AlertErrorTypeInput` was added

✅  Type `AlertErrorCodeInput` was added

✅  Type `AlertHubStatusInput` was added

✅  Type `AlertEmailInput` was added

✅  Type `AlertBoundsInput` was added

✅  Type `AlertCommonRelativeInput` was added

✅  Type `AlertAverageTimeRelativeConfigurationByTimeInput` was added

✅  Type `AlertAverageTimeRelativeConfigurationByRequestsInput` was added

✅  Type `AlertCommonComparativeInput` was added

✅  Type `AlertAverageTimeComparativeConfigurationByTimeInput` was added

✅  Type `AlertCommonByTimeInput` was added

✅  Type `AlertCommonConfigurationInput` was added

✅  Type `AlertCommonByRequestsInput` was added

✅  Type `AlertAverageTimeAbsoluteConfigurationByTimeInput` was added

✅  Type `AlertAverageTimeAbsoluteConfigurationByRequestsInput` was added

✅  Type `AlertUpdatePriceAbsoluteByRequestsInput` was added

✅  Type `AlertUpdatePriceAbsoluteByTimeInput` was added

✅  Type `AlertUpdatePriceRelativeByRequestsInput` was added

✅  Type `AlertUpdatePriceRelativeByTimeInput` was added

✅  Type `AlertUpdatePeakTrafficComparativeByTimeInput` was added

✅  Type `AlertUpdatePeakTrafficAbsoluteByTimeInput` was added

✅  Type `AlertUpdateAverageTimeComparativeByTimeInput` was added

✅  Type `AlertUpdateAverageTimeAbsoluteByRequestsInput` was added

✅  Type `AlertUpdateAverageTimeAbsoluteByTimeInput` was added

✅  Type `AlertUpdateAverageTimeRelativeByRequestsInput` was added

✅  Type `AlertUpdateAverageTimeRelativeByTimeInput` was added

✅  Type `AlertUpdateErrorRateComparativeByTimeInput` was added

✅  Type `AlertUpdateErrorRateRelativeByRequestsInput` was added

✅  Type `AlertUpdateErrorRateRelativeByTimeInput` was added

✅  Type `AlertPriceAbsoluteByRequestsInput` was added

✅  Type `AlertPriceAbsoluteByTimeInput` was added

✅  Type `AlertPriceRelativeByRequestsInput` was added

✅  Type `AlertPriceRelativeByTimeInput` was added

✅  Type `AlertPeakTrafficComparativeByTimeInput` was added

✅  Type `AlertPeakTrafficAbsoluteByTimeInput` was added

✅  Type `AlertAverageTimeComparativeByTimeInput` was added

✅  Type `AlertAverageTimeAbsoluteByRequestsInput` was added

✅  Type `AlertAverageTimeAbsoluteByTimeInput` was added

✅  Type `AlertAverageTimeRelativeByRequestsInput` was added

✅  Type `AlertAverageTimeRelativeByTimeInput` was added

✅  Type `AlertErrorRateComparativeByTimeInput` was added

✅  Type `AlertErrorRateRelativeByRequestsInput` was added

✅  Type `AlertErrorRateRelativeByTimeInput` was added

✅  Type `AlertAmountBy` was added

✅  Type `AlertRangePrice` was added

✅  Type `AlertCheckPrice` was added

✅  Type `AlertEventType` was added

✅  Type `AlertEventEdge` was added

✅  Type `AlertEvent` was added

✅  Type `AlertEventData` was added

✅  Type `AlertEventConnection` was added

✅  Type `AlertComercialType` was added

✅  Type `AlertEmailType` was added

✅  Type `AlertEmail` was added

✅  Type `AlertVariation` was added

✅  Type `AlertWindowType` was added

✅  Type `AlertMode` was added

✅  Type `AlertBounds` was added

✅  Type `AlertBound` was added

✅  Type `UpdatePartnerInput` was added

✅  Type `PartnerWhereUniqueInput` was added

✅  Type `PartnerUpdateInput` was added

✅  Type `PartnerCreateInput` was added

✅  Type `PartnerOrderByInput` was added

✅  Type `PartnerWhereInput` was added

✅  Type `PartnerConnection` was added

✅  Type `PartnerEdge` was added

✅  Type `Partner` was added

✅  Type `PartnerData` was added

## 2020-02-25

🛑  Input field `HotelCriteriaBookingInput.typeSearch` changed type from `BookingCriteriaType!` to `BookingCriteriaType`

🛑  Input field `HotelCancelInput.reference` changed type from `BookReferenceInput!` to `BookReferenceInput`

🛑  Argument `codes: [ID!]` was removed from field `OrganizationData.clients`

🛑  Argument `codes: [ID!]` was removed from field `OrganizationData.suppliers`

🛑  Argument `codes: [ID!]` was removed from field `OrganizationData.accesses`

🛑  Argument `codes: [ID!]` was removed from field `GroupData.clients`

🛑  Argument `codes: [ID!]` was removed from field `GroupData.suppliers`

🛑  Argument `codes: [ID!]` was removed from field `GroupData.accesses`

🛑  Argument `codes: [ID!]` was removed from field `GroupCommonData.clients`

🛑  Argument `codes: [ID!]` was removed from field `GroupCommonData.suppliers`

🛑  Argument `codes: [ID!]` was removed from field `GroupCommonData.accesses`

🛑  Field `allMembers` was removed from object type `GroupCommonData`

✅  Field `flightX` was added to object type `Query`

✅  Field `HotelXQuery.booking` description changed from `Returns detailed information about books, you can indicated a list of locators or a range date.` to `Returns detailed information about books, you can search this books by indicating a list of locators, our HotelX booking ID or a range dates.`

✅  Field `flightX` was added to object type `Mutation`

✅  Field `getProviderMaintainer` was added to object type `AdminQuery`

✅  Field `getSupplierMaintainer` was added to object type `AdminQuery`

✅  Field `setProviderMaintainer` was added to object type `AdminMutation`

✅  Field `setSupplierMaintainer` was added to object type `AdminMutation`

✅  Description `Criteria of book contains basic information to find a book or books.` on type `HotelCriteriaBookingInput` has changed to `Criteria of book contains basic information to find a book or books.
If you are using our Hotelx locator (bookingID) you don't need to indicate any of the other fields`

✅  Input field `HotelCriteriaBookingInput.dates` description changed from `The dates criteria.` to `The dates criteria.
@deprecated(reason: "deprecated from 2020-02-20. Use bookingID instead).`

✅  Input field `HotelCriteriaBookingInput.references` description changed from `The references criteria.` to `The references criteria.
@deprecated(reason: "deprecated from 2020-02-20. Use bookingID instead).`

✅  Input field `HotelCriteriaBookingInput.typeSearch` description changed from `The search type criteria.` to `The search type criteria. Necessary if your search if by references or by dates.
@deprecated(reason: "deprecated from 2020-02-20. Use bookingID instead).`

✅  Input field `HotelCriteriaBookingInput.language` description changed from `The language code.` to `The language code.
@deprecated(reason: "deprecated from 2020-02-20. Use bookingID instead).`

✅  Input field `HotelCriteriaBookingInput.accessCode` changed type from `String!` to `String`

✅  Input field `HotelCriteriaBookingInput.accessCode` description changed from `Name of the access that have to use in the request.` to `Name of the access that have to use in the request. Necessary if your search if by references or by dates.
@deprecated(reason: "deprecated from 2020-02-20. Use bookingID instead).`

✅  Input field `bookingID` was added to input object type `HotelCriteriaBookingInput`

✅  Input field `HotelCancelInput.reference` description changed from `Contains the client reference and/or supplier reference.
One of them is mandatory.` to `Contains the client reference and/or supplier reference.
@deprecated(reason: "deprecated from 2020-02-20. Use bookingID instead).`

✅  Input field `HotelCancelInput.hotelCode` changed type from `String!` to `String`

✅  Input field `HotelCancelInput.hotelCode` description changed from `The hotel code.` to `The hotel code.
@deprecated(reason: "deprecated from 2020-02-20. Use bookingID instead).`

✅  Input field `HotelCancelInput.language` description changed from `The language code.` to `The language code.
@deprecated(reason: "deprecated from 2020-02-20. Use bookingID instead).`

✅  Input field `HotelCancelInput.accessCode` changed type from `String!` to `String`

✅  Input field `HotelCancelInput.accessCode` description changed from `The name of the access to use in the request.` to `The name of the access to use in the request.
@deprecated(reason: "deprecated from 2020-02-20. Use bookingID instead).`

✅  Input field `bookingID` was added to input object type `HotelCancelInput`

✅  Field `bookingID` was added to object type `Reference`

✅  Argument `owner: [ID!]` added to field `OrganizationData.clients`

✅  Argument `clientID: [ID!]` added to field `OrganizationData.clients`

✅  Field `OrganizationData.clients` description changed from `Clients resources in a organization` to `Clients resources in a group`

✅  Argument `isActive: Boolean` added to field `OrganizationData.suppliers`

✅  Argument `serviceAPI: [ID!]` added to field `OrganizationData.suppliers`

✅  Argument `owner: [ID!]` added to field `OrganizationData.suppliers`

✅  Argument `supplierID: [ID!]` added to field `OrganizationData.suppliers`

✅  Field `OrganizationData.suppliers` description changed from `Supplier resources in a organization` to `Supplier resources in a group`

✅  Argument `owner: [ID!]` added to field `OrganizationData.accesses`

✅  Argument `accessID: [ID!]` added to field `OrganizationData.accesses`

✅  Field `OrganizationData.accesses` description changed from `Access resources in a organization` to `Access resources in a group`

✅  Argument `owner: [ID!]` added to field `GroupData.clients`

✅  Argument `clientID: [ID!]` added to field `GroupData.clients`

✅  Argument `isActive: Boolean` added to field `GroupData.suppliers`

✅  Argument `serviceAPI: [ID!]` added to field `GroupData.suppliers`

✅  Argument `owner: [ID!]` added to field `GroupData.suppliers`

✅  Argument `supplierID: [ID!]` added to field `GroupData.suppliers`

✅  Argument `owner: [ID!]` added to field `GroupData.accesses`

✅  Argument `accessID: [ID!]` added to field `GroupData.accesses`

✅  Argument `owner: [ID!]` added to field `GroupCommonData.clients`

✅  Argument `clientID: [ID!]` added to field `GroupCommonData.clients`

✅  Argument `isActive: Boolean` added to field `GroupCommonData.suppliers`

✅  Argument `serviceAPI: [ID!]` added to field `GroupCommonData.suppliers`

✅  Argument `owner: [ID!]` added to field `GroupCommonData.suppliers`

✅  Argument `supplierID: [ID!]` added to field `GroupCommonData.suppliers`

✅  Argument `owner: [ID!]` added to field `GroupCommonData.accesses`

✅  Argument `accessID: [ID!]` added to field `GroupCommonData.accesses`

✅  Type `SelectedOfferItem` was added

✅  Type `PaymentMethodCodeType` was added

✅  Type `PaymentMethod` was added

✅  Type `IdentityDocType` was added

✅  Type `FlightSupplierInput` was added

✅  Type `Arrival` was added

✅  Type `Departure` was added

✅  Type `IndividualInput` was added

✅  Type `PaymentInfo` was added

✅  Type `SelectedOffer` was added

✅  Type `Discount` was added

✅  Type `FlightOriginDestCriteriaInput` was added

✅  Type `ContactInfo` was added

✅  Type `Phone` was added

✅  Type `Address` was added

✅  Type `CountryCodeType` was added

✅  Type `LocationCode` was added

✅  Type `TaxType` was added

✅  Type `TitleNameType` was added

✅  Type `ProperNameType` was added

✅  Type `FlightXQuery` was added

✅  Type `FlightOfferOrderByInput` was added

✅  Type `FlightSettingsInput` was added

✅  Type `FlightOfferWhereInput` was added

✅  Type `FlightXMutation` was added

✅  Type `FlightOrderCreateInput` was added

✅  Type `Individual` was added

✅  Type `FlightSegmentOrderByInput` was added

✅  Type `FlightSegmentWhereInput` was added

✅  Type `FlightServiceData` was added

✅  Type `FlightSegment` was added

✅  Type `FlightNumber` was added

✅  Type `AirlineCode` was added

✅  Type `TransportDeparture` was added

✅  Type `TransportArrival` was added

✅  Type `TaxSummaryType` was added

✅  Type `FlightSurcharge` was added

✅  Type `FlightPax` was added

✅  Type `IATA_PTC_CodeType` was added

✅  Type `FlightOrderItemData` was added

✅  Type `FlightOrderItem` was added

✅  Type `FlightTicket` was added

✅  Type `FlightTicketStatusCode` was added

✅  Type `FlightOrder` was added

✅  Type `FlightOrderData` was added

✅  Type `FlightService` was added

✅  Type `FlightPrice` was added

✅  Type `FlightOfferItemData` was added

✅  Type `FlightOfferItem` was added

✅  Type `FlightOfferConnection` was added

✅  Type `FlightOfferEdge` was added

✅  Type `FlightOffer` was added

✅  Type `FlightOfferData` was added

✅  Type `Fee` was added

✅  Type `TextType` was added

✅  Type `AmountType` was added

✅  Type `ClientWhereUniqueInput` was added

## 2020-02-13

🛑  Input field `fiendlyName` was removed from input object type `CustomerAccountCreateInput`

✅  Field `insights` was added to object type `Query`

✅  Field `unencryptedURL` was added to object type `StatsAsset`

✅  Field `unencryptedURL` was added to object type `LoggingLegacyData`

✅  Input field `HotelXHotelListInput.hotelCodes` description changed from `Search by hotel codes` to `Search by hotel codes. These hotel codes are used to perform search.`

✅  Input field `supplierHotelCodes` was added to input object type `HotelXHotelListInput`

✅  Input field `friendlyName` was added to input object type `CustomerAccountCreateInput`

✅  Type `InsightsQuery` was added

✅  Type `BookingsReportOrderByInput` was added

✅  Type `BookingsReportGroupByInput` was added

✅  Type `HotelXMappingReportWhereInput` was added

✅  Type `MappingType` was added

✅  Type `BookingsReportWhereInput` was added

✅  Type `References` was added

✅  Type `DateRange` was added

✅  Type `InsightsXBookingReport` was added

✅  Type `InsightsXBookingDetailConnection` was added

✅  Type `InsightsXBookingDetailEdge` was added

✅  Type `InsightsXBookingDetail` was added

✅  Type `InsightsXBookingAggregationConnection` was added

✅  Type `InsightsXBookingAggregationEdge` was added

✅  Type `InsightsXBookingAggregation` was added

✅  Type `HotelXMappingReportResponse` was added

✅  Type `RetrieveHotelXMappingReport` was added

✅  Type `BookingDetail` was added

✅  Type `BookingAggregation` was added

✅  Type `BookingWindowType` was added

✅  Type `PaxTypeType` was added

✅  Type `AmountCancelPenalty` was added

✅  Type `Aggregate` was added

✅  Type `AggregateMax` was added

✅  Type `AggregateSum` was added

## 2020-02-06

🛑  Input field `code` was removed from input object type `CustomerAccountCreateInput`

🛑  Argument `code: ID!` was removed from field `OrganizationData.primaryCustomerAccount`

✅  Field `HotelOptionSearch.rateRules` description changed from `Specifies rate rules of the option returned.` to `Specifies rate
rules of the option returned. Note: If the option does not have any rate rule, then the option is NORMAL rate.`

✅  Input field `_search` was added to input object type `CustomerAccountWhereInput`


## 2020-02-03

✅  Field `allCustomerAccounts` was added to object type `AdminQuery`

✅  Field `customerAccount` was added to object type `AdminQuery`

✅  Field `deleteAgent` was added to object type `AdminMutation`

✅  Field `addAgent` was added to object type `AdminMutation`

✅  Field `setPrimaryCustomerAccount` was added to object type `AdminMutation`

✅  Field `deleteCustomerAccountFromOrganization` was added to object type `AdminMutation`

✅  Field `addCustomerAccountToOrganization` was added to object type `AdminMutation`

✅  Field `deleteCustomerAccount` was added to object type `AdminMutation`

✅  Field `updateCustomerAccount` was added to object type `AdminMutation`

✅  Field `createCustomerAccount` was added to object type `AdminMutation`

✅  Field `allCustomerAccounts` was added to object type `OrganizationData`

✅  Field `primaryCustomerAccount` was added to object type `OrganizationData`

✅  Type `UpdateCustomerAccountInput` was added

✅  Type `CustomerAccountUpdateInput` was added

✅  Type `CustomerAccountWhereUniqueInput` was added

✅  Type `CustomerAccountCreateInput` was added

✅  Type `CustomerAccountOrderByInput` was added

✅  Type `CustomerAccountWhereInput` was added

✅  Type `CustomerAgentType` was added

✅  Type `CustomerAgent` was added

✅  Type `CustomerAccountConnection` was added

✅  Type `CustomerAccountEdge` was added

✅  Type `CustomerAccount` was added

✅  Type `CustomerAccountData` was added

## 2020-01-29

✅  Input field `cancelRequired` was added to input object type `ReferenceFilter`

✅  Input field `quoteRequired` was added to input object type `ReferenceFilter`

## 2020-01-23

⚠️  Enum value `accesses_totalCount_DESC` was added to enum `OrganizationOrderByInput`

⚠️  Enum value `accesses_totalCount_ASC` was added to enum `OrganizationOrderByInput`

⚠️  Enum value `suppliers_totalCount_DESC` was added to enum `OrganizationOrderByInput`

⚠️  Enum value `suppliers_totalCount_ASC` was added to enum `OrganizationOrderByInput`

⚠️  Enum value `clients_totalCount_DESC` was added to enum `OrganizationOrderByInput`

⚠️  Enum value `clients_totalCount_ASC` was added to enum `OrganizationOrderByInput`

⚠️  Enum value `profiles_totalCount_DESC` was added to enum `OrganizationOrderByInput`

⚠️  Enum value `profiles_totalCount_ASC` was added to enum `OrganizationOrderByInput`

✅  Field `deleteContact` was added to object type `AdminMutation`

✅  Field `addContact` was added to object type `AdminMutation`

✅  Field `OrganizationData.owner` changed type from `Member` to `Member!`

✅  Field `contacts` was added to object type `OrganizationData`

✅  Argument `codeStartsWith: String` added to field `GroupCommonData.children`

✅  Argument `type: GroupType` added to field `GroupCommonData.children`

✅  Field `id` was added to object type `PaymentCardData`

✅  Type `OrganizationContactType` was added

✅  Type `OrganizationContact` was added

## 2020-01-14

🛑  Field `destinationSameCountryRestriction` was removed from object type `MetadataSearchDestinations`

🛑  Field `hotelSameDestinationRestriction` was removed from object type `MetadataSearchDestinations`

🛑  Field `maxNumberGeoCodes` was removed from object type `MetadataSearchDestinations`

🛑  Field `maxNumberZones` was removed from object type `MetadataSearchDestinations`

🛑  Field `maxNumberCities` was removed from object type `MetadataSearchDestinations`

🛑  Field `optionTypes` was removed from object type `MetadataSearch`

🛑  Field `allowsPreferences` was removed from object type `MetadataBook`

🛑  Field `allowsUrlCard` was removed from object type `MetadataBook`

🛑  Field `generic` was removed from object type `MetadataData`

🛑  Enum value `domain_DESC` was removed from enum `OrganizationOrderByInput`

🛑  Enum value `domain_ASC` was removed from enum `OrganizationOrderByInput`

🛑  Enum value `name_DESC` was removed from enum `OrganizationOrderByInput`

🛑  Enum value `name_ASC` was removed from enum `OrganizationOrderByInput`

🛑  Type `HotelOptionType` was removed

🛑  Type `ReviewedHotelOptionType` was removed

🛑  Type `BookPreferenceValue` was removed

🛑  Type `BookPreferenceType` was removed

🛑  Type `BookPreferenceInfo` was removed

🛑  Type `ReviewedAllowsBookPreferences` was removed

⚠️  Enum value `label_DESC` was added to enum `OrganizationOrderByInput`

⚠️  Enum value `label_ASC` was added to enum `OrganizationOrderByInput`

✅  Field `recommendedNumberHotels` was added to object type `MetadataSearchDestinations`

✅  Input field `master` was added to input object type `AccessInput`

✅  Field `master` was added to object type `AccessData`

## 2020-01-07

✅  Input field `country` was added to input object type `UpdateGroupInput`

✅  Input field `country` was added to input object type `CreateOrganizationInput`

✅  Input field `deletedAt_gte` was added to input object type `HotelXHotelFilterInput`

✅  Input field `deletedAt_gt` was added to input object type `HotelXHotelFilterInput`

✅  Input field `deletedAt_lte` was added to input object type `HotelXHotelFilterInput`

✅  Input field `deletedAt_lt` was added to input object type `HotelXHotelFilterInput`

✅  Input field `deletedAt_not_in` was added to input object type `HotelXHotelFilterInput`

✅  Input field `deletedAt_in` was added to input object type `HotelXHotelFilterInput`

✅  Field `totalCount` was added to object type `OrganizationConnection`

✅  Field `adviseMessage` was added to object type `OrganizationConnection`

✅  Field `totalCount` was added to object type `ProfileConnection`

✅  Field `adviseMessage` was added to object type `ProfileConnection`

✅  Field `totalCount` was added to object type `ClientConnection`

✅  Field `adviseMessage` was added to object type `ClientConnection`

✅  Field `totalCount` was added to object type `SupplierConnection`

✅  Field `adviseMessage` was added to object type `SupplierConnection`

✅  Field `totalCount` was added to object type `MemberConnection`

✅  Field `adviseMessage` was added to object type `MemberConnection`

✅  Field `totalCount` was added to object type `GroupConnection`

✅  Field `adviseMessage` was added to object type `GroupConnection`

✅  Field `OrganizationData.allMembers` description changed from `Response all members in this group's childrens (hierarchically) ` to `Response all members in this group's childrens (hierarchically)`

✅  Field `allProfiles` was added to object type `OrganizationData`

✅  Field `allClients` was added to object type `OrganizationData`

✅  Field `allSuppliers` was added to object type `OrganizationData`

✅  Field `allAccesses` was added to object type `OrganizationData`

✅  Field `country` was added to object type `OrganizationData`

✅  Field `totalCount` was added to object type `AccessConnection`

✅  Field `adviseMessage` was added to object type `AccessConnection`

✅  Field `AdminQuery.products` description changed from `Product catalog; specify products codes to filter ` to `Product catalog; specify products codes to filter`

✅  Argument `orderBy: OrganizationOrderByInput` added to field `AdminQuery.organizations`

✅  Type `OrganizationOrderByInput` was added

## 2019-12-17

🛑  Argument `token: String` was removed from field `HotelXQuery.search`

🛑  Field `PageInfo.endCursor` changed type from `String!` to `String`

🛑  Field `PageInfo.startCursor` changed type from `String!` to `String`

✅  Description `Configuration update for PEAK_TRAFFIC alert type. Peak traffic is used to verify traffic comparing volum of requests between to time frame (window and historical window) .` on type `AlertUpdateConfigurationInputPeakTraffic` has changed to `Configuration update for PEAK_TRAFFIC alert type. Peak traffic is used to verify traffic comparing volum of requests between to time frame (window and historical window) . `

✅  Input field `AlertUpdateInput.configurationAverageTime` description changed from `average time configuration` to `average time configuration  `

✅  Input field `legacyLink` was added to input object type `AccessInput`

✅  Description for enum value `ConditionType.LT` changed from `Less-than` to `<`

✅  Description for enum value `ConditionType.LTE` changed from `Less-than or equal to` to `<=`

✅  Description for enum value `ConditionType.GT` changed from `Greater-than` to `>`

✅  Description for enum value `ConditionType.GTE` changed from `Greater-than or equal to` to `>=`

✅  Input field `AlertCriteriaInput.shared` description changed from `List of shared type` to `List of shared type  `

✅  Field `PaymentXQuery.storedCard` description changed from `Returns a stored card information.` to `Returns a stored card information. `

✅  Field `PaymentXQuery.allStoredCards` description changed from `Returns the stored card list. For security, this query never will return clear card information.` to `Returns the stored card list. For security, this query never will return clear card information. `

✅  Input field `BusinessRulesInput.optionsQuota` description changed from `Options quota per search. Maximum numbers of options to be returned by the search query.` to `Options quota per search. Maximum numbers of options to be returned by the search query.
@deprecated(reason: "deprecated from 2019-12-04. This option will be only configurable by settings.")`

✅  Input field `HotelSettingsInput.clientTokens` description changed from `Used to identify the origin of the request, this is only used in plugins.` to `Used to identify the origin of the request, this is only used in plugins. `

✅  Field `Room.features` description changed from `List of features of this room` to `List of features of this room `

✅  Field `MandatoryFee.mandatoryFeeCode` description changed from `Native supplier Mandatry Fee` to `Native supplier Mandatry Fee  `

✅  Field `GiataData.updatedAt` description changed from `Date of last Giata update for this code.` to `Date of last Giata update for this code. `

✅  Field `GiataData.href` description changed from `Giata url for the hotel info.` to `Giata url for the hotel info. `

✅  Field `metadata` was added to object type `HotelXQuery`

✅  Field `OrganizationData.allMembers` description changed from `Response all members in this group's childrens (hierarchically)` to `Response all members in this group's childrens (hierarchically) `

✅  Field `legacyLink` was added to object type `AccessData`

✅  Field `AdminQuery.products` description changed from `Product catalog; specify products codes to filter` to `Product catalog; specify products codes to filter `

✅  Type `LegacyLinkInput` was added

✅  Type `HotelXMetadataQueryInput` was added

✅  Type `MetadataGeneric` was added

✅  Type `MetadataStatic` was added

✅  Type `MetadataContent` was added

✅  Type `MetadataCancel` was added

✅  Type `MetadataBookingList` was added

✅  Type `MetadataBooking` was added

✅  Type `BookPreferenceValue` was added

✅  Type `BookPreferenceType` was added

✅  Type `BookPreferenceInfo` was added

✅  Type `ReviewedAllowsBookPreferences` was added

✅  Type `MetadataBook` was added

✅  Type `MetadataQuote` was added

✅  Type `ReviewedText` was added

✅  Type `HotelOptionType` was added

✅  Type `ReviewedHotelOptionType` was added

✅  Type `ReviewedPaymentType` was added

✅  Type `AgeRange` was added

✅  Type `ReviewedAgeRanges` was added

✅  Type `MetadataBeds` was added

✅  Type `ReviewedRateRule` was added

✅  Type `RequiredRoomWithSamePaxConfiguration` was added

✅  Type `HotelPaxType` was added

✅  Type `MetadataCandidate` was added

✅  Type `ReviwedPaxTypeRangeInRoomCandidates` was added

✅  Type `MetadataRoomCandidates` was added

✅  Type `ReviewedBool` was added

✅  Type `ReviewedInt` was added

✅  Type `MetadataSearchDestinations` was added

✅  Type `MetadataSearch` was added

✅  Type `MetadataData` was added

✅  Type `Metadata` was added

✅  Type `MetadataEdge` was added

✅  Type `MetadataConnection` was added

✅  Type `LegacyLink` was added

## 2019-12-03

✅  Input field `HotelXDefaultSettingsDataInput.markets` changed type from `[String!]!` to `[String!]`

## 2019-11-28

🛑  Input field `markets` was added to input object type `HotelXDefaultSettingsDataInput`

🛑  Field `HotelOptionSearch.market` changed type from `String!` to `String`

🛑  Field `HotelXDefaultSettingsData.market` changed type from `String!` to `String`

⚠️  Enum value `AMENITY_MAP` was added to enum `PluginType`

⚠️  Enum value `MARKETS_GROUP` was added to enum `PluginType`

✅  Input field `HotelXDefaultSettingsDataInput.market` changed type from `String!` to `String`

✅  Input field `HotelXDefaultSettingsDataInput.market` description changed from `Targeted zone, country or point of sale to be used in request.` to `Targeted zone, country or point of sale to be used in request.
@deprecated(reason: "deprecated from 2019-12-11.")`

✅  Field `paymentCard` was added to object type `HotelBookingDetail`

✅  Input field `HotelCriteriaSearchInput.market` description changed from `Targeted zone, country or point-ofsale-to be used in request.` to `Targeted zone, country or point-ofsale-to be used in request.
@deprecated(reason: "deprecated from 2019-12-11.")`

✅  Input field `markets` was added to input object type `HotelCriteriaSearchInput`

✅  Field `code` was added to object type `Surcharge`

✅  Deprecation reason on field `HotelOptionSearch.market` has changed from ` ` to `deprecated from 2019-12-11.`

✅  Field `markets` was added to object type `HotelOptionSearch`

✅  Deprecation reason on field `HotelXDefaultSettingsData.market` has changed from ` ` to `deprecated from 2019-12-11.`

✅  Field `markets` was added to object type `HotelXDefaultSettingsData`

✅  Type `PaymentCardData` was added

✅  Type `PaymentCard` was added

## 2019-11-20

✅  Description `The result could be one of these types` on type `Connection` has changed to ``

✅  Field `HotelBookingDetail.quotePrice` description changed from `Specifies the price of the previous OptionQuote in Book service.` to `Specifies the price of the previous OptionQuote. Returned only if the shown Book price differs from the price shown at the Quote Option. If the price does not change, this field will be returned Null.`

✅  Field `HotelOptionQuote.searchPrice` description changed from `Specifies the price of the previous search option` to `Specifies the price of the previous Search Option. Returned only if the shown Quote price differs from the price shown at the Search Option. If the price does not change, this field will be returned Null.`

✅  Field `allAmenities` was added to object type `RoomData`

✅  Field `allAmenities` was added to object type `HotelData`

✅  Type `HotelXMapSettingsInput` was added

✅  Type `HotelXMapOptionInput` was added

✅  Type `HotelXMappedCode` was added

✅  Type `HotelXAmenityData` was added

✅  Type `HotelXAmenity` was added

✅  Type `HotelXAmenityEdge` was added

✅  Type `HotelXAmenityConnection` was added

## 2019-10-24

✅  Input field `HotelCommitInput.commitReference` changed type from `String!` to `String`

✅  Input field `HotelCommitInput.commitReference` description changed from `Contains the commit reference that has been returned in Book response.` to `Contains the commit reference that has been returned in Book response.
@deprecated(reason: "deprecated from 2018-10-21. Please, use reference")`

✅  Input field `reference` was added to input object type `HotelCommitInput`

✅  Field `HotelXMutation.commit` description changed from `` to `Commits an existing booking`

✅  Deprecation reason on field `Reference.commit` has changed from ` ` to `deprecated from 2018-10-21. Please, use SupplierReference`

✅  Field `Price.gross` changed type from `Float` to `Float!`

✅  Field `commitStatusService` was added to object type `HotelXQuery`

✅  Type `HotelXCommitReferenceInput` was added

## 2019-10-21

🛑  Field `RoomData.amenities` changed type from `[Amenity!]` to `[AmenityStatic!]`

🛑  Argument `languages: [Language!]` was removed from field `Amenity.texts`

🛑  Field `Amenity.texts` changed type from `[Text!]!` to `String!`

🛑  Field `HotelData.amenities` changed type from `[Amenity!]` to `[AmenityStatic!]`

✅  Input field `delete` was added to input object type `AlertUpdateInput`

✅  Field `amenities` was added to object type `Room`

✅  Field `amenities` was added to object type `HotelOptionSearch`

✅  Description `Indicates where it applies` on type `ApplicationAreaType` has changed to ``

✅  Field `Amenity.texts` description changed from `Contains the descriptive` to `Contains the descriptive of amenity.`

✅  Field `value` was added to object type `Amenity`

✅  Field `amenityCodeSupplier` was added to object type `Amenity`

✅  Field `HotelData.propertyType` description changed from `Property information` to `Indicates property type.`

✅  Deprecation reason on field `HotelData.property` has changed from ` ` to `Deprecated from 2019-10-16. Redundant information`

✅  Type `AmenityStatic` was added

## 2019-10-15

⚠️  Enum value `PENDING_COMMIT` was added to enum `BookStatusType`

✅  Input field `commitRequired` was added to input object type `DefaultSettingsInput`

✅  Field `commit` was added to object type `HotelXMutation`

✅  Input field `rangeFilters` was added to input object type `LoggingLegacyFilterInput`

✅  Input field `shared` was added to input object type `AlertCriteriaInput`

✅  Type for argument `criteria` on field `AlertsXQuery.alerts` changed from `AlertCriteriaInput!` to `AlertCriteriaInput`

✅  Description for enum value `BookStatusType.UNKNOWN` changed from `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.
It is the client’s responsibility to check if the booking is OK` to `The reservation process through TGX was completed but due to a supplier error or a timeout, the reservation status is unknown.
It is the client’s responsibility to check if the booking is OK.`

✅  Description for enum value `BookStatusType.CANCELLED` changed from `The status of the booking is cancelled` to `The status of the booking is cancelled.`

✅  Description for enum value `BookStatusType.ON_REQUEST` changed from `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.
It is the client’s responsibility to check if the booking is OK` to `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.
It is the client’s responsibility to check if the booking is OK.`

✅  Description for enum value `BookStatusType.KO` changed from `The status of the booking is NOT OK` to `The status of the booking is KO`

✅  Description for enum value `BookStatusType.OK` changed from `The reservation was completed with no problems` to `The reservation was completed with no problems.`

✅  Field `commit` was added to object type `Reference`

✅  Input field `commitRequired` was added to input object type `SettingsBaseInput`

✅  Input field `commitRequired` was added to input object type `HotelSettingsInput`

✅  Field `deadline` was added to object type `CancelPenalty`

✅  Field `area` was added to object type `RoomData`

✅  Field `beds` was added to object type `RoomData`

✅  Field `medias` was added to object type `RoomData`

✅  Field `views` was added to object type `RoomData`

✅  Field `amenities` was added to object type `RoomData`

✅  Field `state` was added to object type `Location`

✅  Field `checkOut` was added to object type `HotelData`

✅  Field `checkIn` was added to object type `HotelData`

✅  Field `mandatoryFees` was added to object type `HotelData`

✅  Field `propertyType` was added to object type `HotelData`

✅  Type `HotelCommitInput` was added

✅  Type `HotelCommitDetails` was added

✅  Type `HotelCommitPayload` was added

✅  Type `ConditionType` was added

✅  Type `TermType` was added

✅  Type `RangeFilter` was added

✅  Type `SharedType` was added

✅  Type `Time` was added

✅  Type `TimeRange` was added

✅  Type `CheckInformation` was added

✅  Type `PriceStatic` was added

✅  Type `MandatoryFee` was added

✅  Type `PropertyType` was added

✅  Type `Area` was added

✅  Type `BedStatic` was added

✅  Type `View` was added

✅  Type `State` was added

## 2019-09-19

🛑  Input field `UpdateProfileInput.type` changed type from `ProfileType` to `[ProfileType]`

🛑  Input field `CreateProfileInput.type` changed type from `ProfileType!` to `[ProfileType!]!`

✅  Description `Map codes.` on type `Map` has changed to `Map codes. @deprecated(reason: "deprecated from 2019-09-10. not operating or being used")`

✅  Description `Mapping about client codes with the equivalence per supplier.` on type `MappingEntity` has changed to `Mapping about client codes with the equivalence per supplier. @deprecated(reason: "deprecated from 2019-09-10. not operating or being used")`

✅  Description `Returns the differents group contexts` on type `MappingContext` has changed to `Returns the differents group contexts @deprecated(reason: "deprecated from 2019-09-10. not operating or being used")`

✅  Description `Returns the mapping for a group.` on type `Mapping` has changed to `Returns the mapping for a group. @deprecated(reason: "deprecated from 2019-09-10. not operating or being used")`

✅  Field `HotelXQuery.mapping` description changed from `Returns map codes of a group. You can get hotel map, room map, and board map.` to `Returns map codes of a group. You can get hotel map, room map, and board map. @deprecated(reason: "deprecated from 2019-09-10. not operating or being used")`

✅  Field `group` was added to object type `MacroPermissionData`

✅  Field `macroPermissions` was added to object type `MemberData`

✅  Argument `contains: String` added to field `AdminQuery.organizations`

## 2019-08-29

🛑  Input field `ReferenceFilter.supplier` changed type from `[String]` to `[String!]`

🛑  Input field `ReferenceFilter.client` changed type from `[String]` to `[String!]`

⚠️  Enum value `PRICE` was added to enum `AlertType`

✅  Input field `configurationPrice` was added to input object type `AlertUpdateInput`

✅  Input field `AlertConfigurationInputAverageTime.groupBy` description changed from `Possibility to group by traffic and calculate its parameters separately ` to `Possibility to group by traffic and calculate its parameters separately`

✅  Input field `configurationPrice` was added to input object type `AlertInput`

✅  Input field `hotel` was added to input object type `ReferenceFilter`

✅  Input field `LoggingLegacyFilterInput.to` changed type from `DateTime!` to `DateTime`

✅  Input field `LoggingLegacyFilterInput.from` changed type from `DateTime!` to `DateTime`

✅  Input field `groups` was added to input object type `LoggingLegacyFilterInput`

✅  Input field `timeRange` was added to input object type `LoggingLegacyFilterInput`

✅  Field `price` was added to object type `AlertTypeConfiguration`

✅  Field `legacyRoomId` was added to object type `Room`

✅  Deprecation reason on field `AdminQuery.entities` has changed from `` to `deprecated from 2019-08-21. Only for statsX product. Use client, supplier, accesess queries`

✅  Type `AlertPriceUpdateInput` was added

✅  Type `AlertUpdateConfigurationInputPrice` was added

✅  Type `AlertPriceInput` was added

✅  Type `AlertGroupsInsights` was added

✅  Type `AlertConfigurationInputPrice` was added

✅  Type `RangePrice` was added

✅  Type `CheckPrice` was added

✅  Type `ModePrice` was added

✅  Type `AlertPrice` was added

## 2019-08-19

🛑  Input field `ReferenceFilter.supplier` changed type from `String` to `[String]`

🛑  Input field `ReferenceFilter.client` changed type from `String` to `[String]`

✅  Description `Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information` on type `PaymentCardInput` has changed to `Input PaymentCard, if the payment type is DIRECT, CARD_BOOKING or CARD_CHECK_IN, then is mandatory to specify the payment card information`

## 2019-08-08

⚠️  Union member `API` was added to Union type `AlertObjectsUnion`

✅  Input field `api` was added to input object type `AlertUpdateConfigurationInputPeakTraffic`

✅  Input field `api` was added to input object type `AlertUpdateConfigurationInputAverageTime`

✅  Input field `api` was added to input object type `AlertUpdateConfigurationInputErrorRate`

✅  Input field `api` was added to input object type `AlertUpdateConfigurationInputNoTraffic`

✅  Input field `api` was added to input object type `AlertConfigurationInputPeakTraffic`

✅  Input field `api` was added to input object type `AlertConfigurationInputAverageTime`

✅  Input field `api` was added to input object type `AlertConfigurationInputErrorRate`

✅  Input field `api` was added to input object type `AlertConfigurationInputNoTraffic`

✅  Field `revokeMacroPermissionsFromMember` was added to object type `AdminMutation`

✅  Field `grantMacroPermissionsToMember` was added to object type `AdminMutation`

✅  Field `suitFolder` was added to object type `AdminMutation`

✅  Input field `HotelXDestinationListInput.access` changed type from `ID!` to `ID`

✅  Input field `group` was added to input object type `HotelXDestinationListInput`

✅  Type `GrantMacroPermissionInput` was added

✅  Type `FolderTemplate` was added

✅  Type `SuitFolderInput` was added

## 2019-08-05

🛑  Input field `PaymentCardInput.cardType` changed type from `PaymentCardType!` to `String`

🛑  Input field `ActiveFilterInput.codes` changed type from `[ID!]` to `[ID!]!`

✅  Input field `PaymentCardInput.cardType` description changed from `Indicates the supported card type, the supported card for this option is shown in Quote step.` to `Indicates the supported card type, the supported card for this option is shown in Quote step.
@deprecated(reason: "deprecated from 2019-07-31. Please, use type")`

✅  Input field `type` was added to input object type `PaymentCardInput`

✅  Field `AlertConfiguration.groupBy` description changed from `Group by traffic and calculate its parameters separately ` to `Group by traffic and calculate its parameters separately`

✅  Field `comercialType` was added to object type `AlertConfiguration`

✅  Field `macroPermissions` was added to object type `ProductData`

✅  Type `Permission` was added

✅  Type `MacroPermissionData` was added

✅  Type `MacroPermission` was added

✅  Type `MacroPermissionEdge` was added

✅  Type `MacroPermissionsConnection` was added

## 2019-07-31
🛑  Input field `PaymentCardInput.cardType` changed type from `String!` to `PaymentCardType!`

🛑  Input field `owner` was removed from input object type `UpdateProfileInput`

🛑  Input field `owner` was removed from input object type `CreateProfileInput`

🛑  Field `HotelOptionQuote.cardTypes` changed type from `[String!]` to `[PaymentCardType!]`

🛑  Field `HotelData.cardTypes` changed type from `[String!]` to `[PaymentCardType!]`

✅  Input field `PaymentCardInput.cardType` description changed from `Indicates the card type.` to `Indicates the supported card type, the supported card for this option is shown in Quote step.`

✅  Input field `api` was added to input object type `GrantPermissionsInput`

✅  Field `grantProfileToGroup` was added to object type `AdminMutation`

✅  Field `deleteProfile` was added to object type `AdminMutation`

✅  Input field `StatsFilterInput.to` changed type from `DateTime!` to `DateTime`

✅  Input field `StatsFilterInput.to` description changed from `To date of search` to ` To date of search
@deprecated(reason: "deprecated from 2019-07-19. Added new field timeRange.")`

✅  Input field `StatsFilterInput.from` changed type from `DateTime!` to `DateTime`

✅  Input field `StatsFilterInput.from` description changed from `From date of search` to `From date of search
@deprecated(reason: "deprecated from 2019-07-19. Added new field timeRange.")`

✅  Input field `StatsFilterInput.mode` description changed from `Buyer or Seller
@deprecated(reason: "deprecated from 2019-04-11. Superfluous field.")` to ` Buyer or Seller
@deprecated(reason: "deprecated from 2019-04-11. Superfluous field.")`

✅  Input field `timeRange` was added to input object type `StatsFilterInput`

✅  Field `adviseMessage` was added to object type `StatsConnection`

✅  Enum value `BookStatusType.KO` was deprecated with reason `Deprecated from 2019-07-29`

✅  Field `HotelOptionQuote.cardTypes` description changed from `List of credit cards` to `List of credit cards allowed for this option`

✅  Deprecation reason on field `Bed.description` has changed from `` to `Deprecated from 2019-07-29`

✅  Field `occupancies` was added to object type `RoomData`

✅  Field `source` was added to object type `RoomData`

✅  Field `rooms` was added to object type `HotelData`

✅  Field `adviseMessageCatalog` was added to object type `ProductData`

✅  Argument `contains: String` added to field `AdminQuery.groups`

✅  Type `DeleteProfileInput` was added

✅  Type `AbsoluteInput` was added

✅  Type `Duration` was added

✅  Type `RelativeInput` was added

✅  Type `TimeRangeInput` was added

✅  Type `OccupancyRange` was added

✅  Type `OccupancyStatic` was added

✅  Type `PaymentCardType` was added

## 2019-07-15

🛑  Field `ProfileData.type` changed type from `ProfileType` to `[ProfileType!]!`

✅  Input field `reference` was added to input object type `LoggingLegacyFilterInput`

✅  Field `getActiveConnection` was added to object type `StatsQuery`

✅  Deprecation reason on field `Destination.error` has changed from `` to `Deprecated from 2019-07-03`

✅  Field `adviseMessage` was added to object type `Destination`

✅  Deprecation reason on field `RoomStatic.error` has changed from `` to `Deprecated from 2019-07-03`

✅  Field `RoomStatic.error` description changed from `Errors that abort services` to `Errors that abort services.`

✅  Field `adviseMessage` was added to object type `RoomStatic`

✅  Description `By default: Logical AND on all given filters. only hotels that match condition are returned` on type `HotelXHotelFilterInput` has changed to `By default: Logical AND on all given filters. Hotels data are returned
only if match condition`

✅  Deprecation reason on field `Hotel.error` has changed from `` to `Deprecated from 2019-07-03`

✅  Field `adviseMessage` was added to object type `Hotel`

✅  Deprecation reason on field `Category.error` has changed from `` to `Deprecated from 2019-07-03`

✅  Field `adviseMessage` was added to object type `Category`

✅  Deprecation reason on field `Board.error` has changed from `` to `Deprecated from 2019-07-03`

✅  Field `Board.error` description changed from `Errors that abort services` to `Errors that abort services.`

✅  Field `adviseMessage` was added to object type `Board`

✅  Field `profiles` was added to object type `GroupData`

✅  Field `profiles` was added to object type `OrganizationData`

✅  Type `ReferenceFilter` was added

✅  Type `ActiveFilterInput` was added

✅  Type `Connection` was added

✅  Type `ConnectionEdge` was added

✅  Type `ConnectionConnection` was added

## 2019-07-04

✅  Field `updateSystem` was added to object type `AdminMutation`

✅  Field `createSystem` was added to object type `AdminMutation`

✅  Field `hotel` was added to object type `Reference`

✅  Field `SupplierData.owner` changed type from `Organization` to `Organization!`

✅  Field `system` was added to object type `SupplierData`

✅  Field `systems` was added to object type `AdminQuery`

✅  Field `logging` was added to object type `Query`

✅  Type `EnvironmentType` was added

✅  Type `LoggingFilterInput` was added

✅  Type `TGXFilter` was added

✅  Type `LoggingEdge` was added

✅  Type `LoggingConnection` was added

✅  Type `TGX` was added

✅  Type `LoggingData` was added

✅  Type `Logging` was added

✅  Type `UpdateSystemInput` was added

✅  Type `CreateSystemInput` was added

✅  Type `ErrorFilter` was added

✅  Type `LoggingLegacyFilterInput` was added

✅  Type `Worker` was added

✅  Type `CloudEnvironment` was added

✅  Type `EnvironmentName` was added

✅  Type `Environment` was added

✅  Type `LoggingLegacyData` was added

✅  Type `LoggingLegacy` was added

✅  Type `LoggingLegacyEdge` was added

✅  Type `LoggingLegacyConnection` was added

✅  Type `LoggingQuery` was added

✅  Type `SystemFilter` was added

✅  Type `SystemEdge` was added

✅  Type `SystemConnection` was added

✅  Type `SystemData` was added

✅  Type `System` was added

## 2019-06-25

🛑  Enum value `XTG` was removed from enum `AlertGroups`

🛑  Enum value `SUPPLIER_EXTERNAL` was removed from enum `AlertGroups`

✅  Input field `label` was added to input object type `CreateOrganizationInput`

✅  Input field `HotelXCategoryQueryInput.access` changed type from `ID!` to `ID`

✅  Input field `group` was added to input object type `HotelXCategoryQueryInput`

✅  Argument `api: [ID!]` added to field `AdminQuery.groups`

## 2019-06-13

⚠️  Enum value `SCHEDULER` was added to enum `TrafficType`

⚠️  Enum value `PAYX` was added to enum `PaymentType`

✅  Input field `AlertUpdateConfigurationInputPeakTraffic.client` description changed from `Possibility to filter traffic by clients (hub user)` to `Possibility to filter traffic by clients`

✅  Input field `AlertUpdateConfigurationInputPeakTraffic.supplier` description changed from `Possibility to filter traffic by suppliers (hub provider)` to `Possibility to filter traffic by suppliers`

✅  Input field `AlertUpdateConfigurationInputAverageTime.client` description changed from `Possibility to filter traffic by clients (hub user)` to `Possibility to filter traffic by clients`

✅  Input field `AlertUpdateConfigurationInputAverageTime.supplier` description changed from `Possibility to filter traffic by suppliers (hub provider)` to `Possibility to filter traffic by suppliers`

✅  Input field `AlertUpdateConfigurationInputErrorRate.client` description changed from `Possibility to filter traffic by clients (hub user)` to `Possibility to filter traffic by clients`

✅  Input field `AlertUpdateConfigurationInputErrorRate.supplier` description changed from `Possibility to filter traffic by suppliers (hub provider)` to `Possibility to filter traffic by suppliers`

✅  Input field `AlertUpdateConfigurationInputNoTraffic.client` description changed from `Possibility to filter traffic by clients (hub user)` to `Possibility to filter traffic by clients`

✅  Input field `AlertUpdateConfigurationInputNoTraffic.supplier` description changed from `Possibility to filter traffic by suppliers (hub provider)` to `Possibility to filter traffic by suppliers`

✅  Input field `AlertConfigurationInputPeakTraffic.client` description changed from `Possibility to filter traffic by clients (hub user)` to `Possibility to filter traffic by clients`

✅  Input field `AlertConfigurationInputPeakTraffic.supplier` description changed from `Possibility to filter traffic by suppliers (hub provider)` to `Possibility to filter traffic by suppliers`

✅  Input field `AlertConfigurationInputAverageTime.client` description changed from `Possibility to filter traffic by clients (hub user)` to `Possibility to filter traffic by clients`

✅  Input field `AlertConfigurationInputAverageTime.supplier` description changed from `Possibility to filter traffic by suppliers (hub provider` to `Possibility to filter traffic by suppliers`

✅  Input field `AlertConfigurationInputErrorRate.client` description changed from `Possibility to filter traffic by clients (hub user)` to `Possibility to filter traffic by clients`

✅  Input field `AlertConfigurationInputErrorRate.supplier` description changed from `Possibility to filter traffic by suppliers (hub provider)` to `Possibility to filter traffic by suppliers`

✅  Input field `AlertConfigurationInputNoTraffic.client` description changed from `Possibility to filter traffic by clients (hub user)` to `Possibility to filter traffic by clients`

✅  Input field `AlertConfigurationInputNoTraffic.supplier` description changed from `Possibility to filter traffic by suppliers (hub provider)` to `Possibility to filter traffic by suppliers`

✅  Description for enum value `TrafficType.OPTIMIZED` changed from `Ratios calculated from traffic between Speed and seller` to `Ratios calculated from traffic between TGX's caches and seller`

✅  Field `billingSupplierCode` was added to object type `HotelBookingDetail`

✅  Field `supplierCode` was added to object type `RatePlan`

✅  Field `features` was added to object type `Room`

✅  Field `supplierCode` was added to object type `Room`

✅  Argument `label: String` added to field `AdminQuery.organizations`

✅  Type `Feature` was added

## 2019-05-30

🛑  Field `StatsInfo.hits` changed type from `Int!` to `Int64!`

🛑  Field `OperationDetailed.totalHits` changed type from `Int!` to `Int64!`

🛑  Field `StatsData.hits` changed type from `Int!` to `Int64!`

✅  Type `Int64` was added

## 2019-05-30

✅  Description

`Configuration for AVERAGE_TIME.
Average time is used to verify requests times.
There are 3 options:
- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.
- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.
- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.`

on type `AlertUpdateConfigurationInputAverageTime` has changed to

`Configuration for AVERAGE_TIME.
Average time is used to verify requests times.
There are 3 options:
- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.
- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.
- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.`

✅  Input field `AlertUpdateConfigurationInputAverageTime.minNumberRequests` description changed from

`OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

to

`OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

✅  Description

`Configuration update for error rate alert type.
Error rate alert is used to verify traffic comparing its error codes.
Ther are to options.
- OPTION 1: Can verify traffic of a time frame. Set window field higher than 0.
- OPTION 2: Can verify traffic of a specific number of requests. Set window fild as 0 and minNumRequest higher than 0.`

on type `AlertUpdateConfigurationInputErrorRate` has changed to

`Configuration update for error rate alert type.
Error rate alert is used to verify traffic comparing its error codes.
Ther are to options.
- OPTION 1: Can verify traffic of a time frame. Set window field higher than 0.
- OPTION 2: Can verify traffic of a specific number of requests. Set window fild as 0 and minNumRequest higher than 0.`

✅  Input field `AlertUpdateConfigurationInputErrorRate.minNumberRequests`
description changed from

`OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

to

`OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

✅  Description

`Confiuration update for NO_TRAFFIC alert type.
No traffic alert is used to verify if there is traffic according to the parameters of the alert.`

on type `AlertUpdateConfigurationInputNoTraffic` has changed to

`Confiuration update for NO_TRAFFIC alert type.
No traffic alert is used to verify if there is traffic according to the parameters of the alert.`

✅  Description

`Configuration for PEAK_TRAFFIC alert type.
Peak traffic is used to verify traffic comparing volum of requests between to time frame (window and historical window) .`

on type `AlertConfigurationInputPeakTraffic` has changed to

`Configuration for PEAK_TRAFFIC alert type.
Peak traffic is used to verify traffic comparing volum of requests between to time frame (window and historical window) . `
✅  Description

`Configuration for AVERAGE_TIME.
Average time is used to verify requests times.
There are 3 options:
- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.
- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.
- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.`

on type `AlertConfigurationInputAverageTime` has changed to

`Configuration for AVERAGE_TIME.
Average time is used to verify requests times.
There are 3 options:
- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.
- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.
- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.`

✅  Input field `AlertConfigurationInputAverageTime.minNumberRequests` description changed from

`OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

to

`OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

✅  Description

`Configuration for ERROR_RATE alert type.
Error rate alert is used to verify traffic comparing its error codes.
Ther are two options.
- OPTION 1: Can verify traffic of a time frame. Must set window field higher than 0.
- OPTION 2: Can verify traffic of a specific number of requests. Must set window field as 0 and minNumRequest higher than 0.`

on type `AlertConfigurationInputErrorRate` has changed to

`Configuration for ERROR_RATE alert type.
Error rate alert is used to verify traffic comparing its error codes.
Ther are two options.
- OPTION 1: Can verify traffic of a time frame. Must set window field higher than 0.
- OPTION 2: Can verify traffic of a specific number of requests. Must set window field as 0 and minNumRequest higher than 0.`

✅  Input field `AlertConfigurationInputErrorRate.minNumberRequests` description changed from

`OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

to

`OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

✅  Description

`Configuration for NO_TRAFFIC alert type.
No traffic alert is used to verify if there is traffic according to the parameters of the alert.`

on type `AlertConfigurationInputNoTraffic` has changed to

`Configuration for NO_TRAFFIC alert type.
No traffic alert is used to verify if there is traffic according to the parameters of the alert.`

✅  Description

`Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.`

on type `DeltaPriceInput` has changed to

`Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.`

✅  Field `GeonameData.type` description changed from
`Indicates destination type, zone, city or country`

 to

 `Hierarchy returned by geonames' service. It might change depending on the hotel and its location.`

✅  Argument `types: [OperationType!]` added to field `APIData.operations`

✅  Argument `types: [OperationType!]` added to field `AdminQuery.operations`

## 2019-05-23

🛑  Input field `AlertUpdateConfigurationInputPeakTraffic.group` changed type from `AlertGroupInput` to `[AlertGroupInput!]`

🛑  Input field `AlertUpdateConfigurationInputAverageTime.group` changed type from `AlertGroupInput` to `[AlertGroupInput!]`

🛑  Input field `AlertUpdateConfigurationInputErrorRate.group` changed type from `AlertGroupInput` to `[AlertGroupInput!]`

🛑  Input field `AlertUpdateConfigurationInputNoTraffic.group` changed type from `AlertGroupInput` to `[AlertGroupInput!]`

🛑  Input field `AlertConfigurationInputPeakTraffic.group` changed type from `AlertGroupInput!` to `[AlertGroupInput!]`

🛑  Input field `AlertConfigurationInputAverageTime.group` changed type from `AlertGroupInput!` to `[AlertGroupInput!]`

🛑  Input field `AlertConfigurationInputErrorRate.group` changed type from `AlertGroupInput!` to `[AlertGroupInput!]`

🛑  Input field `AlertConfigurationInputNoTraffic.group` changed type from `AlertGroupInput!` to `[AlertGroupInput!]`

🛑  Field `GeonameData.type` changed type from `DestinationType!` to `String!`

✅  Input field `AlertUpdateConfigurationInputPeakTraffic.group` description changed from `Possibility to filter traffic by groups. It is mandatory to set an ORG group type. Only ORG, FOLDER and PRODUCT group types are allowed` to `Must filter traffic by group. Only PRODUCT group type is allowed`

✅  Description `Configuration for AVERAGE_TIME.
Average time is used to verify requests times.
There are 3 options:
- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.
- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.
- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.` on type `AlertUpdateConfigurationInputAverageTime` has changed to `Configuration for AVERAGE_TIME.
Average time is used to verify requests times.
There are 3 options:
- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.
- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.
- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.`

✅  Input field `AlertUpdateConfigurationInputAverageTime.minNumberRequests` description changed from `OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.` to `OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

✅  Description `Configuration update for error rate alert type.
Error rate alert is used to verify traffic comparing its error codes.
Ther are to options.
- OPTION 1: Can verify traffic of a time frame. Set window field higher than 0.
- OPTION 2: Can verify traffic of a specific number of requests. Set window fild as 0 and minNumRequest higher than 0.` on type `AlertUpdateConfigurationInputErrorRate` has changed to `Configuration update for error rate alert type.
Error rate alert is used to verify traffic comparing its error codes.
Ther are to options.
- OPTION 1: Can verify traffic of a time frame. Set window field higher than 0.
- OPTION 2: Can verify traffic of a specific number of requests. Set window fild as 0 and minNumRequest higher than 0.`

✅  Input field `AlertUpdateConfigurationInputErrorRate.minNumberRequests` description changed from `OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.` to `OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

✅  Description `Confiuration update for NO_TRAFFIC alert type.
No traffic alert is used to verify if there is traffic according to the parameters of the alert.` on type `AlertUpdateConfigurationInputNoTraffic` has changed to `Confiuration update for NO_TRAFFIC alert type.
No traffic alert is used to verify if there is traffic according to the parameters of the alert.`

✅  Description `Configuration for PEAK_TRAFFIC alert type.
Peak traffic is used to verify traffic comparing volum of requests between to time frame (window and historical window) . ` on type `AlertConfigurationInputPeakTraffic` has changed to `Configuration for PEAK_TRAFFIC alert type.
Peak traffic is used to verify traffic comparing volum of requests between to time frame (window and historical window) .`

✅  Description `Configuration for AVERAGE_TIME.
Average time is used to verify requests times.
There are 3 options:
- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.
- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.
- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.` on type `AlertConfigurationInputAverageTime` has changed to `Configuration for AVERAGE_TIME.
Average time is used to verify requests times.
There are 3 options:
- OPTION 1: Can verify average time traffic of a time frame and compare it with an other time frame. (window and historical window) Must set field window and historical windows higher than 0.
- OPTION 2: Can verify average time traffic of a time frame and compare it with the value max_average. Must set window higher than 0.
- OPTION 3: Can verify average time traffic of a specific number of requests and compare it with the value max_average. Must set window as 0 and minNumRequests higher than 0.`

✅  Input field `AlertConfigurationInputAverageTime.minNumberRequests` description changed from `OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.` to `OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

✅  Description `Configuration for ERROR_RATE alert type.
Error rate alert is used to verify traffic comparing its error codes.
Ther are two options.
- OPTION 1: Can verify traffic of a time frame. Must set window field higher than 0.
- OPTION 2: Can verify traffic of a specific number of requests. Must set window field as 0 and minNumRequest higher than 0.` on type `AlertConfigurationInputErrorRate` has changed to `Configuration for ERROR_RATE alert type.
Error rate alert is used to verify traffic comparing its error codes.
Ther are two options.
- OPTION 1: Can verify traffic of a time frame. Must set window field higher than 0.
- OPTION 2: Can verify traffic of a specific number of requests. Must set window field as 0 and minNumRequest higher than 0.`

✅  Input field `AlertConfigurationInputErrorRate.minNumberRequests` description changed from `OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.` to `OPTION 1: defines the minimum number of requests must be in our historical Data before cheking the alert.
OPTION 2: defines the minimum number of requests must be in the window time frame to check the alert.`

✅  Description `Configuration for NO_TRAFFIC alert type.
No traffic alert is used to verify if there is traffic according to the parameters of the alert.` on type `AlertConfigurationInputNoTraffic` has changed to `Configuration for NO_TRAFFIC alert type.
No traffic alert is used to verify if there is traffic according to the parameters of the alert.`

✅  Description `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.` on type `DeltaPriceInput` has changed to `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.`

✅  Field `quotePrice` was added to object type `HotelBookingDetail`

✅  Field `searchPrice` was added to object type `HotelOptionQuote`

✅  Deprecation reason on field `GeonameData.type` has changed from `Field is deprecated from 2019-04-30` to ``

✅  Field `adviseMessageCatalog` was added to object type `APIData`

✅  Type `PriceChange` was added

## 2019-05-16

🛑  Input field `basicInfoMandatory_in` was removed from input object type `HotelXHotelFilterInput`

🛑  Input field `basicInfo_in` was removed from input object type `HotelXHotelFilterInput`

🛑  Input field `isoCode_in` was removed from input object type `HotelXHotelFilterInput`

🛑  Field `Location.closestDestination` changed type from `DestinationData!` to `DestinationData`

🛑  Field `Location.country` changed type from `Country!` to `Country`

🛑  Field `HotelData.categoryCode` changed type from `String!` to `String`

🛑  Field `HotelData.hotelName` changed type from `String!` to `String`

✅  Input field `isSchedulerActive` was added to input object type `AccessInput`

✅  Description `By default: Logical AND on all given filters.` on type `HotelXHotelFilterInput` has changed to `By default: Logical AND on all given filters. only hotels that match condition are returned`

✅  Input field `HotelXHotelFilterInput.coordinates_in` description changed from `Coordinates returned in Hotel` to `Hotel Coordinates required for all Hotels`

✅  Input field `HotelXHotelFilterInput.name_in` description changed from `Name returned in Hotel` to `Hotel Name required for all Hotels`

✅  Input field `HotelXHotelFilterInput.destination_in` description changed from `Destination returnd in Hotel` to `Hotel destination required for all Hotels`

✅  Input field `HotelXHotelFilterInput.category_in` description changed from `Category returned in Hotel` to `Hotel Category code required for all Hotels`

✅  Input field `HotelXHotelFilterInput.country_in` description changed from `Country returned in Hotel` to `Hotel Country required for all Hotels`

✅  Input field `HotelXHotelFilterInput.updatedAt_gte` description changed from `All values greater than or equal the given value.` to `Return hotels with update time greater than or equal the given value.`

✅  Input field `HotelXHotelFilterInput.updatedAt_gt` description changed from `All values greater than the given value.` to `Return hotels with update time greater than the given value.`

✅  Input field `HotelXHotelFilterInput.updatedAt_lte` description changed from `All values less than or equal the given value.` to `Return hotels with update time less than or equal the given value.`

✅  Input field `HotelXHotelFilterInput.updatedAt_lt` description changed from `All values less than the given value.` to `Return hotels with update time less than the given value.`

✅  Input field `HotelXHotelFilterInput.updatedAt_not_in` description changed from `All values that are not contained in given list.` to `Return hotels with update time that are not contained in given list.`

✅  Input field `HotelXHotelFilterInput.updatedAt_in` description changed from `All values that are contained in given list.` to `Return hotels with update time that are contained in given list.`

✅  Input field `HotelXHotelFilterInput.createdAt_gte` description changed from `All values greater than or equal the given value.` to `Return hotels with creation time greater than or equal the given value.`

✅  Input field `HotelXHotelFilterInput.createdAt_gt` description changed from `All values greater than the given value.` to `Return hotels with creation time greater than the given value.`

✅  Input field `HotelXHotelFilterInput.createdAt_lte` description changed from `All values less than or equal the given value.` to `Return hotels with creation time less than or equal the given value.`

✅  Input field `HotelXHotelFilterInput.createdAt_lt` description changed from `All values less than the given value.` to `Return hotels with creation time less than the given value.`

✅  Input field `HotelXHotelFilterInput.createdAt_not_in` description changed from `All values that are not contained in given list.` to `Return hotels with creation time that are not contained in given list.`

✅  Input field `HotelXHotelFilterInput.createdAt_in` description changed from `All values that are contained in given list.` to `Return hotels with creation time in given list.`

## 2019-05-06

🛑  Input field `AlertUpdateConfigurationInputPeakTraffic.group` changed type from `[AlertGroupInput!]` to `AlertGroupInput`

🛑  Input field `AlertUpdateConfigurationInputAverageTime.group` changed type from `[AlertGroupInput!]` to `AlertGroupInput`

🛑  Input field `AlertUpdateConfigurationInputErrorRate.group` changed type from `[AlertGroupInput!]` to `AlertGroupInput`

🛑  Input field `AlertUpdateConfigurationInputNoTraffic.group` changed type from `[AlertGroupInput!]` to `AlertGroupInput`

🛑  Input field `editor` was removed from input object type `AlertUpdateInput`

🛑  Input field `AlertConfigurationInputPeakTraffic.group` changed type from `[AlertGroupInput!]!` to `AlertGroupInput!`

🛑  Input field `AlertConfigurationInputAverageTime.group` changed type from `[AlertGroupInput!]!` to `AlertGroupInput!`

🛑  Input field `AlertConfigurationInputErrorRate.group` changed type from `[AlertGroupInput!]!` to `AlertGroupInput!`

🛑  Input field `type` was removed from input object type `AlertGroupInput`

🛑  Input field `AlertConfigurationInputNoTraffic.group` changed type from `[AlertGroupInput!]!` to `AlertGroupInput!`

🛑  Input field `group` was added to input object type `AlertInput`

🛑  Input field `editor` was removed from input object type `AlertInput`

🛑  Type for argument `criteria` on field `AlertsXQuery.alerts` changed from `AlertCriteriaInput` to `AlertCriteriaInput!`

✅  Input field `AlertUpdateConfigurationInputAverageTime.group` description changed from `Possibility to filter traffic by groups. It is mandatory to set an ORG group type. Only ORG, FOLDER and PRODUCT group types are allowed` to `Must filter traffic by group. Only PRODUCT group type is allowed`

✅  Input field `AlertUpdateConfigurationInputErrorRate.group` description changed from `Possibility to filter traffic by groups. It is mandatory to set an ORG group type. Only ORG, FOLDER and PRODUCT group types are allowed` to `Must filter traffic by group. Only PRODUCT group type is allowed`

✅  Input field `AlertUpdateConfigurationInputNoTraffic.group` description changed from `Possibility to filter traffic by groups. It is mandatory to set an ORG group type. Only ORG, FOLDER and PRODUCT group types are allowed` to `Must filter traffic by group. Only PRODUCT group type is allowed`

✅  Input field `AlertConfigurationInputPeakTraffic.group` description changed from `Possibility to filter traffic by groups. It is mandatory to set an ORG group type. Only ORG, FOLDER and PRODUCT group types are allowed` to `Must filter traffic by group. Only PRODUCT group type is allowed`

✅  Input field `AlertConfigurationInputAverageTime.group` description changed from `Possibility to filter traffic by groups. It is mandatory to set an ORG group type. Only ORG, FOLDER and PRODUCT group types are allowed` to `Must filter traffic by group. Only PRODUCT group type is allowed`

✅  Input field `AlertConfigurationInputErrorRate.group` description changed from `Possibility to filter traffic by groups. It is mandatory to set an ORG group type. Only ORG, FOLDER and PRODUCT group types are allowed` to `Must filter traffic by group. Only PRODUCT group type is allowed`

✅  Input field `AlertConfigurationInputNoTraffic.group` description changed from `Possibility to filter traffic by groups. It is mandatory to set an ORG group type. Only ORG, FOLDER and PRODUCT group types are allowed` to `Must filter traffic by group. Only PRODUCT group type is allowed`

✅  Input field `groups` was added to input object type `AlertCriteriaInput`

## 2019-05-02

✅  Input field `retrieveAssets` was added to input object type `StatsFilterInput`

## 2019-04-30

✅  Input field `basicInfoMandatory_in` was added to input object type `HotelXHotelFilterInput`

✅  Input field `basicInfo_in` was added to input object type `HotelXHotelFilterInput`

✅  Input field `isoCode_in` was added to input object type `HotelXHotelFilterInput`

✅  Input field `coordinates_in` was added to input object type `HotelXHotelFilterInput`

✅  Input field `name_in` was added to input object type `HotelXHotelFilterInput`

✅  Input field `destination_in` was added to input object type `HotelXHotelFilterInput`

✅  Input field `category_in` was added to input object type `HotelXHotelFilterInput`

✅  Input field `country_in` was added to input object type `HotelXHotelFilterInput`

✅  Deprecation reason on field `GeonameData.type` has changed from `` to `Field is deprecated from 2019-04-30`


✅  Input field `entityIDs` was added to input object type `ProfileFilter`

✅  Field `siblings` was added to object type `GroupData`

✅  Field `OrganizationData.allMembers` description changed from `Response all members in this group's childrens (hierarchically)` to `Response all members in this group's childrens (hierarchically) `

## 2019-04-24

🛑  Input field `isActive` was added to input object type `UpdateMemberInput`

🛑  Input field `label` was added to input object type `UpdateMemberInput`

🛑  Input field `method` was removed from input object type `UpdateMemberInput`

🛑  Input field `resources` was removed from input object type `UpdateMemberInput`

🛑  Input field `role` was removed from input object type `UpdateMemberInput`

🛑  Input field `group` was removed from input object type `UpdateMemberInput`

🛑  Input field `info` was removed from input object type `UpdateMemberInput`

✅  Field `clonePermissions` was added to object type `AdminMutation`

✅  Field `revokePermissions` was added to object type `AdminMutation`

✅  Field `grantPermissions` was added to object type `AdminMutation`

✅  Input field `StatsFilterInput.mode` description changed from `Buyer or Seller` to `Buyer or Seller
@deprecated(reason: "deprecated from 2019-04-11. Superfluous field.")`

✅  Input field `owners` was added to input object type `StatsFilterInput`

✅  Field `AdviseMessage.type` description changed from `Error type: The following types are valid:` to `Error type: The following types are valid:[type]`

✅  Type `ClonePermissionsInput` was added


✅  Type `GrantPermissionsInput` was added

## 2019-04-08

🛑  Field `Event.adviseMessage` changed type from `AdviseMessage` to `[AdviseMessage!]`

🛑  Field `Alert.adviseMessage` changed type from `AdviseMessage` to `[AdviseMessage!]`

🛑  Argument `trafficType: TrafficType!` added to field `StatsData.ratios`

🛑  Argument `ratioSource: RatiosSource!` was removed from field `StatsData.ratios`

🛑  Type `RatiosSource` was removed

✅  Field `Alert.adviseMessage` description changed from `Advise Message` to `List of advise messages.`

✅  Deprecation reason on field `OperationDetailed.cache` has changed from `` to `deprecated from 2019-04-03. Added new field trafficType.`

✅  Field `trafficType` was added to object type `OperationDetailed`

✅  Deprecation reason on field `StatsData.ratios` has changed from `` to `deprecated from 2019-04-08. Added hits fields to be able to
calculate ratios at client side.`

✅  Field `hits` was added to object type `StatsData`

✅  Description for enum value `BookStatusType.KO` changed from `The status of the booking is KO` to `The status of the booking is NOT OK`

✅  Field `surcharges` was added to object type `Room`

✅  Argument `filter: AccessFilter` added to field `SupplierData.accesses`

✅  Argument `after: String` added to field `SupplierData.accesses`

✅  Argument `before: String` added to field `SupplierData.accesses`

✅  Argument `last: Int` added to field `SupplierData.accesses`

✅  Argument `first: Int` added to field `SupplierData.accesses`

✅  Type `TrafficType` was added


## 2019-03-28

🛑  Argument `ratioSource: RatiosSource!` added to field `StatsData.ratios`

✅  Field `suppliers` was added to object type `ClientData`

✅  Field `clients` was added to object type `SupplierData`

✅  Argument `parentCode: ID` added to field `AdminQuery.groups`

✅  Type `RatiosSource` was added

## 2019-03-14

🛑  Input field `api` was removed from input object type `UpdateGroupInput`

🛑  Argument `method: Method!` was removed from field `AdminMutation.updateGroup`

✅  Input field `label` was added to input object type `UpdateGroupInput`

✅  Input field `type` was added to input object type `UpdateGroupInput`

✅  Input field `owner` was added to input object type `UpdateGroupInput`

## 2019-03-07

🛑  Input field `UpdateGroupInput.api` changed type from `ID!` to `[ID!]!`

🛑  Field `impersonationJWT` was removed from object type `MemberData`

🛑  Type `JWTImpersonation` was removed

✅  Input field `UpdateGroupInput.api` description changed from `` to `@deprecated(reason: "deprecated from 2019-03-06. Use GrantAPIToGroup / RevokeAPIFromGroup to add or delete apis from groups")`

✅  Input field `updateDateRange` was added to input object type `AccessInput`

✅  Input field `updateList` was added to input object type `AccessInput`

✅  Input field `updateDescriptiveInfo` was added to input object type `AccessInput`

✅  Input field `descriptiveInfoLimit` was added to input object type `AccessInput`

✅  Field `revokeApiFromGroup` was added to object type `AdminMutation`

✅  Field `grantApiToGroup` was added to object type `AdminMutation`

✅  Field `suitOrganization` was added to object type `AdminMutation`

✅  Deprecation reason on field `BookingHotel.checkOut` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Deprecation reason on field `BookingHotel.checkIn` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Deprecation reason on field `BookingHotel.creationDate` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Field `end` was added to object type `BookingHotel`

✅  Field `start` was added to object type `BookingHotel`

✅  Field `bookingDate` was added to object type `BookingHotel`

✅  Deprecation reason on field `Supplement.expireDate` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Deprecation reason on field `Supplement.effectiveDate` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Field `end` was added to object type `Supplement`

✅  Field `start` was added to object type `Supplement`

✅  Deprecation reason on field `Promotion.expireDate` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Deprecation reason on field `Promotion.effectiveDate` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Field `end` was added to object type `Promotion`

✅  Field `start` was added to object type `Promotion`

✅  Deprecation reason on field `RatePlan.expireDate` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Deprecation reason on field `RatePlan.effectiveDate` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Field `end` was added to object type `RatePlan`

✅  Field `start` was added to object type `RatePlan`

✅  Deprecation reason on field `PriceBreakdown.expireDate` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Deprecation reason on field `PriceBreakdown.effectiveDate` has changed from `` to `deprecated from 2018-02-28. Incorrect date format.`

✅  Field `end` was added to object type `PriceBreakdown`

✅  Field `start` was added to object type `PriceBreakdown`

✅  Argument `codeStartsWith: String` added to field `GroupData.parents`

✅  Field `template` was added to object type `OrganizationData`

✅  Field `updateDateRange` was added to object type `AccessData`

✅  Field `updateList` was added to object type `AccessData`

✅  Field `descriptiveInfoLimit` was added to object type `AccessData`

✅  Field `updateDescriptiveInfo` was added to object type `AccessData`

✅  Argument `codeStartsWith: String` added to field `AdminQuery.groups`

✅  Type `UpdateGroupAPISInput` was added

✅  Type `SuitOrganizationInput` was added

## 2019-02-20

✅  Field `alertsX` was added to object type `Mutation`

✅  Field `Stats.statsData` description changed from `GUID
The data returned by a Stats query.` to `The data returned by a Stats query.`

✅  Description `Filter that selects the filter criteria which will be used in this availability. Currently you can only choose the accesses.
You must choose one of them, include or exclude, or the other alternative isn't specified anything.
If input both, you will receive a validation error that indicates this error.
@deprecated(reason: "deprecated from 2018-08-20. Please, use filterSearch")` on type `FilterInput` has changed to ` Filter that selects the filter criteria which will be used in this availability. Currently you can only choose the accesses.
 You must choose one of them, include or exclude, or the other alternative isn't specified anything.
 If input both, you will receive a validation error that indicates this error.
@deprecated(reason: "deprecated from 2018-08-20. Please, use filterSearch")`

✅  Input field `HotelSettingsInput.connectUser` description changed from `This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.
@deprecated(reason: "deprecated from 2018-03-19. Redundant.")` to ` This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.
@deprecated(reason: "deprecated from 2018-03-19. Redundant.")`

✅  Description `The JSON type makes sure that it is actually valid JSON and returns the value as a parsed JSON object/array instead of a string.
In queries or mutations, JSON fields have to be specified with enclosing double quotes. Special characters have to be escaped: "{\"int\": 1, \"string\": \"value\"}".` on type `JSON` has changed to `The JSON type makes sure that it is actually valid JSON and returns the value as a parsed JSON object/array instead of a string.
In queries or mutations, JSON fields have to be specified with enclosing double quotes. Special characters have to be escaped: "{"int": 1, "string": "value"}".`

✅  Description `The URI type represents a URI values. A good example mith be an Hotel Image URL.
In queries or mutations, URI fields have to be specified in RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string format with enclosing double quotes: "http:\\www.travelgatex.com".` on type `URI` has changed to `The URI type represents a URI values. A good example mith be an Hotel Image URL.
In queries or mutations, URI fields have to be specified in RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string format with enclosing double quotes: "http:\www.travelgatex.com".`

✅  Description `` on type `APIData` has changed to ``

✅  Field `alertsX` was added to object type `Query`

✅  Type `unitTime` was added

✅  Type `AlertUpdateConfigurationInputPeakTraffic` was added

✅  Type `AlertUpdateConfigurationInputAverageTime` was added

✅  Type `AlertUpdateConfigurationInputErrorRate` was added

✅  Type `AlertUpdateConfigurationInputNoTraffic` was added

✅  Type `AlertUpdateInput` was added

✅  Type `AlertConfigurationInputPeakTraffic` was added

✅  Type `AlertConfigurationInputAverageTime` was added

✅  Type `AlertConfigurationInputErrorRate` was added

✅  Type `ComercialType` was added

✅  Type `AlertGroupInput` was added

✅  Type `AlertObjectInput` was added

✅  Type `ErrorTypeInput` was added

✅  Type `ErrorCodeInput` was added

✅  Type `HubStatusInput` was added

✅  Type `EmailInput` was added

✅  Type `AlertConfigurationInputNoTraffic` was added

✅  Type `AlertInput` was added

✅  Type `AlertsXMutation` was added

✅  Type `AlertCriteriaInput` was added

✅  Type `EventType` was added

✅  Type `EventData` was added

✅  Type `Event` was added

✅  Type `EventEdge` was added

✅  Type `EventConnection` was added

✅  Type `AlertFilterInput` was added

✅  Type `AlertGroups` was added

✅  Type `AlertObjectsUnion` was added

✅  Type `ErrorType` was added

✅  Type `HubStatus` was added

✅  Type `EmailType` was added

✅  Type `Email` was added

✅  Type `AlertTypeConfiguration` was added

✅  Type `AlertType` was added

✅  Type `AlertConfiguration` was added

✅  Type `AlertData` was added

✅  Type `Alert` was added

✅  Type `AlertEdge` was added

✅  Type `AlertConnection` was added

✅  Type `AlertsXQuery` was added

## 2019-02-11

🛑  Type `Search` was removed

🛑  Type `Quote` was removed

🛑  Type `Booking` was removed

## 2019-02-07

✅  Deprecation reason on field `HotelOptionSearch.token` has changed from `` to `deprecated from 2019-02-05.`

✅  Field `giataData` was added to object type `HotelData`

✅  Type `GiataData` was added


## 2019-01-30

🛑  Input field `audit` was removed from input object type `HotelXCommonSettingsDataInput`

🛑  Input field `clientName` was removed from input object type `HotelXDefaultSettingsDataInput`

🛑  Field `audit` was removed from object type `HotelXCommonSettingsData`

🛑  Field `clientName` was removed from object type `HotelXDefaultSettingsData`

🛑  Field `error` was removed from object type `Product`

🛑  Field `error` was removed from object type `Operation`

🛑  Field `error` was removed from object type `API`

🛑  Field `error` was removed from object type `Resource`

🛑  Field `error` was removed from object type `Role`

🛑  Field `error` was removed from object type `Member`

🛑  Field `error` was removed from object type `Group`

🛑  Field `error` was removed from object type `Organization`

🛑  Type `HotelXAuditInput` was removed

🛑  Type `HotelXAudit` was removed

⚠️  Enum value `COMMISSION` was added to enum `PluginType`

✅  Description `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it,
we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation.
In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.` on type `DeltaPriceInput` has changed to `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.`

✅  Field `PaymentXQuery.storedCard` description changed from `Returns a stored card information.` to `Returns a stored card information. `

✅  Field `PaymentXQuery.allStoredCards` description changed from `Returns the stored card list. For security, this query never will return clear card information.` to `Returns the stored card list. For security, this query never will return clear card information. `

✅  Input field `HotelSettingsInput.clientTokens` description changed from `Used to identify the origin of the request, this is only used in plugins.` to `Used to identify the origin of the request, this is only used in plugins. `

✅  Description `The Language type represents Language values. A good example might be a Hotel Description Language.
In queries or mutations, Language fields have to be specified in ISO 3166-1 alpha-2 format with enclosing double quotes "es".` on type `Language` has changed to `The Language type represents Language values. A good example might be a Hotel Description Language.
In queries or mutations, Language fields have to be specified in ISO 639-1 format with enclosing double quotes "en".`

✅  Field `impersonationJWT` was added to object type `MemberData`

✅  Field `domains` was added to object type `OrganizationData`

✅  Field `AdminQuery.products` description changed from `Product catalog; specify products codes to filter` to `Product catalog; specify products codes to filter `

✅  Argument `domains: [DomainName!]` added to field `AdminQuery.organizations`

✅  Type `JWTImpersonation` was added

✅  Type `DomainName` was added

✅  Type `DomainData` was added

✅  Type `Domain` was added

## 2018-11-20

✅  Input field `CreateOrganizationInput.organization` changed type from `ID!` to `ID`

✅  Field `country` was added to object type `GeonameData`

## 2018-11-07

🛑  Field `asserts` was removed from object type `StatsInfo`

🛑  Type `StatsAssert` was removed

✅  Field `assets` was added to object type `StatsInfo`

✅  Type `StatsAsset` was added


## 2018-10-28

⚠️  Enum value `COUNTRY` was added to enum `DestinationType`

✅  Field `geoNames` was added to object type `Location`

✅  Type `GeonameData` was added

✅  Type `Geoname` was added

## 2018-10-18

🛑  Input field `type` was added to input object type `CreateProfileInput`

🛑  Field `errors` was removed from object type `HotelXCommonSettings`

🛑  Field `warnings` was removed from object type `HotelXCommonSettings`

🛑  Field `warnings` was removed from object type `HotelXDefaultSettings`

🛑  Field `errors` was removed from object type `HotelXDefaultSettings`

🛑  Field `downloadHotels` was removed from object type `HotelXQuery`

🛑  Field `downloadRooms` was removed from object type `HotelXQuery`

🛑  Field `isActive` was removed from object type `Member`

✅  Description `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.` on type `DeltaPriceInput` has changed to `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.`

✅  Input field `type` was added to input object type `UpdateProfileInput`

✅  Field `PaymentXQuery.storedCard` description changed from `Returns a stored card information.` to `Returns a stored card information. `

✅  Field `PaymentXQuery.allStoredCards` description changed from `Returns the stored card list. For security, this query never will return clear card information.` to `Returns the stored card list. For security, this query never will return clear card information. `

✅  Input field `HotelSettingsInput.clientTokens` description changed from `Used to identify the origin of the request, this is only used in plugins.` to `Used to identify the origin of the request, this is only used in plugins. `

✅  Field `adviseMessage` was added to object type `HotelXCommonSettings`

✅  Field `adviseMessage` was added to object type `HotelXDefaultSettings`

✅  Field `type` was added to object type `ProfileData`

✅  Field `isActive` was added to object type `MemberData`

✅  Field `AdminQuery.products` description changed from `Product catalog; specify products codes to filter` to `Product catalog; specify products codes to filter `

✅  Type `ProfileType` was added

## 2018-09-26

🛑  Input field `mode` was added to input object type `StatsFilterInput`

✅  Input field `clients` was added to input object type `StatsFilterInput`

✅  Field `count` was added to object type `HotelConnection`

✅  Type `ModeType` was added

## 2018-09-20

✅  Input field `UpdateProfileInput.label` changed type from `String!` to `String`

✅  Input field `isPublished` was added to input object type `UpdateProfileInput`

✅  Input field `isActive` was added to input object type `UpdateProfileInput`

✅  Input field `isPublished` was added to input object type `CreateProfileInput`

✅  Input field `isActive` was added to input object type `CreateProfileInput`

✅  Field `isPublished` was added to object type `ProfileData`

✅  Field `isActive` was added to object type `ProfileData`

## 2018-09-10

✅  Description `Input delta price, indicates price variation permitted by the client An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation). This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation will be done automatically in reservation method.`

on type `DeltaPriceInput` has changed to `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation). This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation will be done automatically in reservation method.`

✅  Field `PaymentXQuery.storedCard` description changed from `Returns a stored card information. ` to `Returns a stored card information.`

✅  Field `PaymentXQuery.allStoredCards` description changed from `Returns the stored card list. For security, this query never will return clear card information. ` to `Returns the stored card list. For security, this query never will return clear card information.`

✅  Input field `HotelSettingsInput.clientTokens` description changed from `Used to identify the origin of the request, this is only used in plugins. ` to `Used to identify the origin of the request, this is only used in plugins.`

✅  Field `runtimeConfiguration` was added to object type `HotelXQuery`

✅  Input field `isActive` was added to input object type `EntityFilter`

✅  Field `AdminQuery.products` description changed from `Product catalog; specify products codes to filter ` to `Product catalog; specify products codes to filter`

✅  Type `MetadataType` was added

✅  Type `TagRuntimeType` was added

✅  Type `HotelRuntimeParameter` was added

✅  Type `HotelRuntimeConfigurationData` was added

✅  Type `HotelRuntimeConfiguration` was added

## 2018-08-27

✅  Description `Input delta price, indicates price variation permitted by the client. An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation).This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation will be done automatically in reservation method.`
on type `DeltaPriceInput` has changed to
`Input delta price, indicates price variation permitted by the client An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation). This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation  will be done automatically in reservation method.`

✅  Argument `filter: HotelXFilterInput` added to field `HotelXMutation.cancel`

✅  Argument `filter: HotelXFilterInput` added to field `HotelXMutation.book`

✅  Field `PaymentXQuery.storedCard` description changed from `Returns a stored card information.` to `Returns a stored card information. `

✅  Field `PaymentXQuery.allStoredCards` description changed from `Returns the stored card list. For security, this query never will return clear card information.` to `Returns the stored card list. For security, this query never will return clear card information. `

✅  Input field `HotelSettingsInput.clientTokens` description changed from `Used to identify the origin of the request, this is only used in plugins.` to `Used to identify the origin of the request, this is only used in plugins. `

✅  Argument `filter: HotelXFilterInput` added to field `HotelXQuery.booking`

✅  Argument `filter: HotelXFilterInput` added to field `HotelXQuery.quote`

✅  Argument `filterSearch: HotelXFilterSearchInput` added to field `HotelXQuery.search`

✅  Deprecation reason on field `Product.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Product`

✅  Deprecation reason on field `Operation.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Operation`

✅  Deprecation reason on field `API.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `API`

✅  Deprecation reason on field `Resource.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Resource`

✅  Deprecation reason on field `Role.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Role`

✅  Deprecation reason on field `Member.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `Member.error` description changed from `` to `Errors that abort services`

✅  Field `adviseMessage` was added to object type `Member`

✅  Deprecation reason on field `Organization.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Organization`

✅  Field `AdminQuery.products` description changed from `Product catalog; specify products codes to filter` to `Product catalog; specify products codes to filter `

## 2018-08-22

🛑  `Text` kind changed from `INTERFACE` to `OBJECT`

🛑  `AdviseMessage` kind changed from `INTERFACE` to `OBJECT`

✅  Input field `owner` was added to input object type `UpdateProfileInput`

✅  Input field `owner` was added to input object type `CreateProfileInput`

✅  Input field `owner` was added to input object type `UpdateClientInput`

✅  Input field `owner` was added to input object type `CreateClientInput`

✅  Input field `owner` was added to input object type `AccessInput`

✅  Field `parents` was added to object type `OrganizationData`

✅  Field `descendents` was added to object type `OrganizationData`

✅  Input field `owner` was added to input object type `EntityFilter`

✅  Input field `owner` was added to input object type `ProfileFilter`

✅  Field `owner` was added to object type `ProfileData`

✅  Input field `owner` was added to input object type `PointOfSaleFilter`

✅  Field `owner` was added to object type `PointOfSaleData`

✅  Input field `owner` was added to input object type `ClientFilter`

✅  Input field `owner` was added to input object type `SupplierFilter`

✅  Input field `owner` was added to input object type `AccessFilter`

✅  Field `owner` was added to object type `ClientData`

✅  Field `GroupData.parents` description changed from `Recursive call with all ascendant parents tree` to `Response all parents groups nodes for this group (nom-hierarchically)`

✅  Field `descendents` was added to object type `GroupData`

✅  Field `owner` was added to object type `SupplierData`

✅  Field `isShedulerActive` was added to object type `AccessData`

✅  Field `owner` was added to object type `AccessData`

✅  Type `HotelXFilterSearchInput` was added

✅  Type `HotelXFilterPluginTypeInput` was added

✅  Type `HotelXPluginFilterInput` was added

✅  Type `HotelXFilterInput` was added

## 2018-08-14

🛑  Type for argument `input` on field `PaymentXMutation.storeCard` changed from `PaymentXStoreCardInput!` to `PaymentXStoredCardInput!`

🛑  Field `PaymentXMutation.storeCard` changed type from `StoredCard!` to `PaymentXStoredCard!`

🛑  Field `deleteCard` was removed from object type `PaymentXMutation`

🛑  Field `PaymentXQuery.vaultStatusService` changed type from `ServiceStatus!` to `AdviseMessage!`

🛑  Field `cards` was removed from object type `PaymentXQuery`

🛑  Type `PaymentXBookingInfoDeleteInput` was removed

🛑  Type `PointOfSaleInput` was removed

🛑  Type `PaymentXBookingInfoInput` was removed

🛑  Type `PaymentXStoreCardInput` was removed

🛑  Type `PaymentXBookingInfoCriteriaInput` was removed

🛑  Type `PaymentXBookingInfoFilterInput` was removed

🛑  Type `ExpireDate` was removed

🛑  Type `PaymentCard` was removed

🛑  Type `PaymentXBookingInfo` was removed

🛑  Type `StoredCardData` was removed

🛑  Type `StoredCard` was removed

🛑  Type `StoredCardEdge` was removed

🛑  Type `StoredCardConnection` was removed

✅  Field `deleteStoredCard` was added to object type `PaymentXMutation`

✅  Field `PaymentXQuery.vaultStatusService` description changed from `Returns status of the search service.` to `Returns status of the vault service.`

✅  Field `storedCard` was added to object type `PaymentXQuery`

✅  Field `allStoredCards` was added to object type `PaymentXQuery`

✅  Input field `countries` was added to input object type `HotelXHotelListInput`

✅  Type `PaymentXStoredCardInput` was added

✅  Type `PaymentXStoredCardIDInput` was added

✅  Type `PaymentXStoredCardFilterInput` was added

✅  Type `PaymentXExpireDate` was added

✅  Type `PaymentXStoredCardData` was added

✅  Type `PaymentXStoredCard` was added

✅  Type `PaymentXStoredCardEdge` was added

✅  Type `PaymentXStoredCardConnection` was added


## 2018-08-13

🛑  Field `ProfileData.group` changed type from `Group!` to `Group`

🛑  Field `ClientData.group` changed type from `Group!` to `Group`

🛑  Argument `type: GroupType` was removed from field `GroupData.managedGroups`

🛑  Field `GroupData.managedGroups` changed type from `GroupConnection` to `ManagedGroupConnection`

🛑  Field `SupplierData.groups` changed type from `GroupConnection!` to `GroupConnection`

🛑  Field `AccessData.groups` changed type from `GroupConnection!` to `GroupConnection`

✅  Argument `role: [ID!]` added to field `GroupData.managedGroups`

✅  Argument `resource: [ID!]` added to field `GroupData.managedGroups`

✅  Argument `api: [ID!]` added to field `GroupData.managedGroups`

✅  Argument `group: [ID!]` added to field `GroupData.managedGroups`

✅  Field `GroupData.managedGroups` description changed from `Responses all groups in its group's childrens (hierarchically),` to `Responses all managed groups by this group.`

✅  Type `ManagedGroupData` was added

✅  Type `ManagedGroup` was added

✅  Type `ManagedGroupEdge` was added

✅  Type `ManagedGroupConnection` was added

## 2018-08-08

✅  Input field `currency` was added to input object type `SettingsBaseInput`

✅  Field `parents` was added to object type `GroupData`

✅  Deprecation reason on field `Group.error` has changed from `` to `deprecated from 2018-08-01. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Group`

✅  Field `group` was added to object type `ProfileData`

✅  Field `group` was added to object type `ClientData`

✅  Field `groups` was added to object type `SupplierData`

✅  Field `groups` was added to object type `AccessData`

## 2018-07-31

✅  Field `StoredCard.adviseMessage` description changed from `List of advise messages.` to `List of messages`

✅  Deprecation reason on field `AddOns.distribute` has changed from `You can find it in distribution AddOn` to `deprecated from 2018-05-21. You can find it in distribution AddOn`

✅  Field `PointOfSale.adviseMessage` description changed from `List of messages` to `List of advise messages.`

✅  Field `entities` was added to object type `AdminQuery`

✅  Type `EntityFilter` was added


## 2018-07-26 {#20180726}

⚠️  Enum value `ORG` was added to enum `GroupTypeInput`

⚠️  Enum value `ROOT` was added to enum `GroupTypeInput`

⚠️  Enum value `ROOT` was added to enum `GroupType

## 2018-07-25 {#20180725}

🛑  Input field `HotelSettingsInput.group` changed type from `String` to `ID`

🛑  Input field `HotelSettingsInput.client` changed type from `String` to `ID`

✅  Input field `HotelSettingsInput.client` description changed from `This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.` to `Client name, this field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.`

✅  Input field `clientTokens` was added to input object type `HotelSettingsInput`

## 2018-07-16 {#20180716}

🛑  Input field `organizations` was removed from input object type `StatsFilterInput`

🛑  Field `error` was removed from object type `Stats`

✅  Input field `groups` was added to input object type `StatsFilterInput`

✅  Field `adviseMessage` was added to object type `Stats`

✅  Field `StoredCard.adviseMessage` description changed from `List of messages` to `List of advise messages.`

✅  Description `` on type `AdviseMessage` has changed to `List of advise messages.`

## 2018-07-10 {#20180710}

🛑  Field `deleteDefaultSettings` was removed from object type `Mutation`

🛑  Field `updateDefaultSettings` was removed from object type `Mutation`

🛑  Field `createDefaultSettings` was removed from object type `Mutation`

🛑  Field `loadFile` was removed from object type `Mutation`

🛑  Field `hotelCancel` was removed from object type `Mutation`

🛑  Field `hotelBook` was removed from object type `Mutation`

🛑  Field `Destination.error` changed type from `[Error!]` to `[AdviseMessage!]`

🛑  Field `Hotel.error` changed type from `[Error!]` to `[AdviseMessage!]`

🛑  Field `mapping` was removed from object type `Query`

🛑  Field `defaultSettings` was removed from object type `Query`

🛑  Field `booking` was removed from object type `Query`

🛑  Field `quote` was removed from object type `Query`

🛑  Field `search` was removed from object type `Query`

✅  Input field `AccessInput.name` changed type from `String!` to `String`

✅  Field `removeEntitiesFromProfile` was added to object type `AdminMutation`

✅  Field `addEntitiesToProfile` was added to object type `AdminMutation`

✅  Field `updateProfile` was added to object type `AdminMutation`

✅  Field `createProfile` was added to object type `AdminMutation`

✅  Input field `PaymentXBookingInfoFilterInput.bookingReference` changed type from `String!` to `String`

✅  Input field `PaymentXBookingInfoFilterInput.bookingReference` description changed from `Indicates the referece of the booking` to `Indicates the referece of the booking. @deprecated(reason: "deprecated from 2018-08-03. Please use PaymentXBookingInfoCriteriaInput")`

✅  Input field `PaymentXBookingInfoFilterInput.pointOfSaleCode` changed type from `ID!` to `ID`

✅  Input field `PaymentXBookingInfoFilterInput.pointOfSaleCode` description changed from `Indicates the code of the booked property` to `Indicates the code of the booked property. @deprecated(reason: "deprecated from 2018-08-03. Please use PaymentXBookingInfoCriteriaInput")`

✅  Input field `PaymentXBookingInfoFilterInput.organization` changed type from `String!` to `String`

✅  Input field `PaymentXBookingInfoFilterInput.organization` description changed from `Responsible organization of the booked property.` to `Responsible organization of the booked property. @deprecated(reason: "deprecated from 2018-08-03. Please use PaymentXBookingInfoCriteriaInput")`

✅  Input field `checkOut_gte` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_gt` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_lte` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_lt` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_not_in` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_in` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_gte` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_gt` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_lte` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_lt` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_not_in` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_in` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `OR` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `AND` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Argument `bookingInfoCriteria: PaymentXBookingInfoCriteriaInput` added to field `PaymentXQuery.cards`

✅  Input field `HotelXHotelListInput.access` changed type from `ID!` to `ID`

✅  Input field `group` was added to input object type `HotelXHotelListInput`

✅  Field `airports` was added to object type `Location`

✅  Input field `maxSize` was added to input object type `HotelXRoomQueryInput`

✅  Field `token` was added to object type `RoomConnection`

✅  Field `HotelXQuery.destinationSearcher` description changed from `Returns hotels and destinations that contains the indicated text. ` to `Returns hotels and destinations that contains the indicated text.`

✅  Argument `filter: HotelXHotelFilterInput` added to field `HotelXQuery.hotels`

✅  Argument `token: String` added to field `HotelXQuery.rooms`

✅  Field `AdminQuery.products` description changed from `Members list; specify member codes to filter members` to `Product catalog; specify products codes to filter `

✅  Field `jwt` was added to object type `AdminQuery`

✅  Type `UpdateEntitiesInput` was added

✅  Type `UpdateProfileInput` was added

✅  Type `EntitiesInput` was added

✅  Type `CreateProfileInput` was added

✅  Type `PaymentXBookingInfoCriteriaInput` was added

✅  Type `HotelXHotelFilterInput` was added

✅  Type `AirportData` was added

✅  Type `Airport` was added

✅  Type `JWT` was added

## 2018-06-21

🛑  Field `group` was removed from object type `PointOfSaleData`

✅  Field `Stats.statsData` description changed from `GUID

The data returned by a \`Stats\` query.` to `GUID

The data returned by a Stats query.`

✅  Argument `codeStartsWith: String` added to field `OrganizationData.children`

✅  Argument `type: GroupType` added to field `OrganizationData.children`

✅  Argument `codeStartsWith: String` added to field `GroupData.children`

✅  Field `profiles` was added to object type `AdminQuery`

✅  Type `ProfileFilter` was added

✅  Type `EntityData` was added

✅  Type `Entity` was added

✅  Type `EntityEdge` was added

✅  Type `EntityConnection` was added

✅  Type `ProfileData` was added

✅  Type `Profile` was added

✅  Type `ProfileEdge` was added

✅  Type `ProfileConnection` was added

## 2018-06-12

🛑  Input field `group` was added to input object type `DeleteGroupInput`

🛑  Input field `code` was removed from input object type `DeleteGroupInput`

🛑  Type `LegacyData` was removed

✅  Description `Input delta price, indicates price variation permitted by the client` on type `DeltaPriceInput` has changed to `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.`

✅  Input field `DeltaPriceInput.applyBoth` description changed from `Indicates that the range between valuation price and the new price does not exceed the amount and/or porcentage indicated by the client.` to `Depending on the value of applyBoth:
applyBoth = false: Indicates that one of the conditions (amount or percentage) has to meet the criteria before reservation.
applyBoth = true: Indicates that the new price cannot exceed the amount or percentage indicated by the client.`

✅  Deprecation reason on field `HotelXMutation.loadFile` has changed from `` to `deprecated from 2018-06-06`

✅  Description `` on type `AdminMutation` has changed to `The admin query root of TravelgateX's for implementing GraphQL mutations.`

✅  Description `Mutations are operations that change or update data on the server` on type `Mutation` has changed to `The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server`

✅  Field `paymentX` was added to object type `Mutation`

✅  Description `LList of business rules for filtering options based on your interests.` on type `BusinessRules` has changed to `List of business rules for filtering options based on your interests.`

✅  Description for enum value `ServiceApiType.PACKAGE` changed from `` to `When the request has been done against the Package API`

✅  Description for enum value `ServiceApiType.PAYMENT` changed from `` to `When the request has been done against the Payment API`

✅  Description for enum value `ServiceApiType.VIRTUALACCOUNT` changed from `` to `When the request has been done against the Virtual Account API`

✅  Description for enum value `ServiceApiType.ACTIVITIES` changed from `` to `When the request has been done against the Activities API`

✅  Description for enum value `ServiceApiType.TRANSFERS` changed from `` to `When the request has been done against the Transfers API`

✅  Description for enum value `ServiceApiType.CAR` changed from `` to `When the request has been done against the Car API`

✅  Description for enum value `ServiceApiType.TRANSPORTATION` changed from `` to `When the request has been done against the Transportation API`

✅  Description for enum value `ServiceApiType.HOTEL` changed from `` to `When the request has been done against the Hotel API`

✅  Description for enum value `ServiceOperationType.OTHER` changed from `` to `When the type of the request is Other`

✅  Description for enum value `ServiceOperationType.BOOKING` changed from `` to `When the type of the request is Booking`

✅  Description for enum value `ServiceOperationType.QUOTE` changed from `` to `When the type of the request is Quote`

✅  Description for enum value `ServiceOperationType.SEARCH` changed from `` to `When the type of the request is Search`

✅  Field `StatsAssert.url` description changed from `` to `Endpoint to download the full XML of the request with its response`

✅  Field `StatsAssert.execTime` description changed from `` to `Execution time of the request`

✅  Field `StatsAssert.startTime` description changed from `` to `Start time of the request`

✅  Description for enum value `StatsInfoTypes.OTHER` changed from `` to `Stats in NOK state caused by other causes`

✅  Description for enum value `StatsInfoTypes.HUB` changed from `` to `Stats in NOK state caused by HUB issues`

✅  Description for enum value `StatsInfoTypes.COMMUNICATION` changed from `` to `Stats in NOK state caused by Timeout`

✅  Description for enum value `StatsInfoTypes.PROVIDER` changed from `` to `Stats in NOK state caused by supplier issues`

✅  Description for enum value `StatsInfoTypes.INTEGRATION` changed from `` to `Stats in NOK state caused by integration issues`

✅  Description for enum value `StatsInfoTypes.OK` changed from `` to `Stats in OK state`

✅  Field `StatsInfo.asserts` description changed from `` to `Details about errors.`

✅  Field `StatsInfo.time` description changed from `Total time (ms)` to `Average time (ms)`

✅  Field `StatsInfo.hits` description changed from `Total hits.` to `Total hits`

✅  Field `StatsInfo.type` description changed from `` to `Stats type`

✅  Description `` on type `OperationDetailed` has changed to `Stats information per operation`

✅  Field `OperationDetailed.cache` description changed from `` to `Responsible for the execution of the this stats. If TRUE then cache, else client`

✅  Field `OperationDetailed.detailedHits` description changed from `Total time
time: Time!` to `Hits grouped depending on their status`

✅  Field `OperationDetailed.totalHits` description changed from `operation: String!
operationType: ServiceOperationType!
List of service apis.
serviceApis: ServiceApiConnection!
Total hits.` to `Total hits.`

✅  Field `OperationDetailed.operation` changed type from `Operation` to `Operation!`

✅  Field `OperationDetailed.operation` description changed from `` to `Operation information`

✅  Description `Details of look to quote and look to book.` on type `Ratios` has changed to `Ratios details`

✅  Field `Ratios.quoteToBook` description changed from `` to `Quotes needed to do a booking`

✅  Field `Ratios.lookToBook` description changed from `` to `Searches needed to do a booking`

✅  Field `Ratios.lookToQuote` description changed from `` to `Searches needed to do a quote`

✅  Field `StatsData.operations` description changed from `` to `Stats information per operation`

✅  Field `StatsData.ratios` description changed from `Details of look to quote and look to book.` to `Ratios details`

✅  Field `StatsData.client` description changed from `` to `Owner client`

✅  Field `StatsData.access` description changed from `` to `Owner access`

✅  Field `Stats.updatedAt` description changed from `Date updated` to `Update date`

✅  Field `Stats.createdAt` description changed from `Date created` to `Create date`

✅  Field `Stats.error` description changed from `Errors that abort services` to `Errors that will lead the service to abort`

✅  Field `Stats.statsData` description changed from `` to `GUID
The data returned by a \`Stats\` query.`

✅  Description `Plugin Type` on type `PluginType` has changed to `Plugin Type. /hotel-x/plugins/overview/`

✅  Description `Plugin Step Type` on type `PluginStepType` has changed to `Plugin Step Type. /hotel-x/plugins/overview/`

✅  Input field `PluginStepInput.pluginsType` description changed from `` to `Indicates the plugin that will be executed.`

✅  Input field `HotelSettingsInput.testMode` description changed from `Use test access` to `This flag allows only the accesses checked as test. By default is production.`

✅  Description `` on type `MarkupRuleType` has changed to `Indicates what type of value is the markup, by percentage or is an import.`

✅  Description `Options status` on type `StatusType` has changed to `Indicartes options status`

✅  Field `Response.stats` description changed from `Application stats in string format` to `Application stats`

✅  Field `DestinationConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Field `HotelConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Input field `HotelXRoomQueryInput.access` description changed from `` to `Indicates the access that you want use.`

✅  Input field `HotelXRoomQueryInput.roomCodes` description changed from `` to `Indicates the room codes that you want filter.`

✅  Field `RoomConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Input field `HotelXCategoryQueryInput.access` description changed from `` to `Indicates the access that you want use.`

✅  Input field `HotelXCategoryQueryInput.categoryCodes` description changed from `` to `Indicates the category codes that you want filter.`

✅  Field `CategoryConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Input field `HotelXBoardQueryInput.access` description changed from `` to `Indicates the access that you want use.`

✅  Input field `HotelXBoardQueryInput.boardCodes` description changed from `` to `Indicates the board codes that you want filter.`

✅  Field `BoardConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Field `HotelXQuery.mapping` description changed from `` to `Returns map codes of a group. You can get hotel map, room map, and board map.`

✅  Field `HotelXQuery.bookingStatusService` description changed from `TODO: me no understand...
Returns status of the booking service.` to `Returns status of the booking service.`

✅  Field `ProductData.apis` description changed from `` to `A Product has many APIs`

✅  Description `` on type `Product` has changed to `An APIs collection.`

✅  Field `Product.updatedAt` description changed from `` to `Date updated`

✅  Field `Product.createdAt` description changed from `` to `Date created`

✅  Field `Product.error` description changed from `` to `Errors that abort services`

✅  Field `Operation.updatedAt` description changed from `` to `Date updated`

✅  Field `Operation.createdAt` description changed from `` to `Date created`

✅  Field `Operation.error` description changed from `` to `Errors that abort services`

✅  Description `` on type `APIData` has changed to ``

✅  Field `APIData.operations` description changed from `` to `which operations are asigned this API?`

✅  Field `APIData.resources` description changed from `` to `which resources are asigned this API?`

✅  Field `APIData.groups` description changed from `` to `which groups are asigned this API?`

✅  Field `APIData.label` description changed from `` to `API label`

✅  Field `APIData.isEditable` description changed from `` to `Is API Editable or not.`

✅  Field `APIData.code` description changed from `` to `API Code`

✅  Field `APIData.id` description changed from `` to `API ID`

✅  Field `API.updatedAt` description changed from `` to `Date updated`

✅  Field `API.createdAt` description changed from `` to `Date created`

✅  Field `API.error` description changed from `` to `Errors that abort services`

✅  Field `ResourceData.roles` description changed from `` to `which roles are asigned or are possibles in this resource?`

✅  Field `ResourceData.apis` description changed from `` to `which API have asigned this resource?`

✅  Description `` on type `Resource` has changed to `Resources are those used in APIs and Products.`

✅  Field `Resource.updatedAt` description changed from `` to `Date updated`

✅  Field `Resource.createdAt` description changed from `` to `Date created`

✅  Field `Resource.error` description changed from `` to `Errors that abort services`

✅  Description for enum value `RoleType.SPECIFIC` changed from `` to `Allows a User to make othen kind of operation with the resource. Defined by API.`

✅  Description for enum value `RoleType.EXECUTOR` changed from `` to `Allows a User to make use of reources only for extecutations queries.`

✅  Description for enum value `RoleType.ADMIN` changed from `` to `Allows a User to make All (changes) to the resource`

✅  Description for enum value `RoleType.EDITOR` changed from `` to `Allows a User to make Mutations (changes) to the resource data`

✅  Description for enum value `RoleType.VIEWER` changed from `` to `Allows a User to make Queries of resources, but not change any resource data`

✅  Field `RoleData.resources` description changed from `` to `Resources used`

✅  Field `RoleData.special` description changed from `` to `Special permission`

✅  Field `RoleData.isSpecial` description changed from `` to `Has any other non-basic permission/s?`

✅  Field `RoleData.isExecutable` description changed from `` to `Has resource Executable permission?`

✅  Field `RoleData.isEnable` description changed from `` to `Is role enabled or not?`

✅  Field `RoleData.isDelete` description changed from `` to `Has resource Delete permission?`

✅  Field `RoleData.isUpdate` description changed from `` to `Has resource Update permission?`

✅  Field `RoleData.isRead` description changed from `` to `Has resource Create permission?`

✅  Field `RoleData.isCreate` description changed from `` to `Has resource Create permission?`

✅  Description `` on type `Role` has changed to `Permissions determine what operations are allowed on a resource`

✅  Field `Role.updatedAt` description changed from `` to `Date updated`

✅  Field `Role.createdAt` description changed from `` to `Date created`

✅  Field `Role.error` description changed from `` to `Errors that abort services`

✅  Field `MemberData.roles` description changed from `` to `which roles the member has in?`

✅  Field `MemberData.groups` description changed from `` to `which groups the member is in?`

✅  Field `MemberData.type` description changed from `` to `Member Type`

✅  Description `` on type `Member` has changed to `You grant access to members which can be either:
Users: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.
Service Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application.`

✅  Field `Member.updatedAt` description changed from `` to `Date updated`

✅  Field `Member.createdAt` description changed from `` to `Date created`

✅  Field `Member.isActive` description changed from `` to `Errors that abort services`

✅  Field `GroupData.roles` description changed from `` to `You can grant roles to members, which define the roles catalog for a group.`

✅  Field `GroupData.clients` description changed from `` to `Clients resources in a group`

✅  Field `GroupData.suppliers` description changed from `` to `Supplier resources in a group`

✅  Field `GroupData.accesses` description changed from `` to `Access resources in a group`

✅  Field `GroupData.allMembers` description changed from `` to `Response all members in this group's childrens (hierarchically),`

✅  Field `GroupData.managedGroups` description changed from `` to `Responses all groups in its group's childrens (hierarchically),`

✅  Field `GroupData.apis` description changed from `` to `APIs assigned to this group. Products have APIs.`

✅  Field `GroupData.members` description changed from `` to `Only responses members in this group`

✅  Field `GroupData.children` description changed from `` to `Only responses children.(non-hierarchically)`

✅  Description `` on type `Group` has changed to `Groups are organized hierarchically.`

✅  Field `Group.updatedAt` description changed from `` to `Date updated`

✅  Field `Group.createdAt` description changed from `` to `Date created`

✅  Field `Group.error` description changed from `` to `Errors that abort services`

✅  Field `OrganizationData.clients` description changed from `` to `Clients resources in a organization`

✅  Field `OrganizationData.suppliers` description changed from `` to `Supplier resources in a organization`

✅  Field `OrganizationData.accesses` description changed from `` to `Access resources in a organization`

✅  Field `OrganizationData.allMembers` description changed from `` to `Response all members in this group's childrens (hierarchically)`

✅  Field `OrganizationData.products` description changed from `` to `Products asign to a organization`

✅  Field `OrganizationData.apis` description changed from `` to `APIs assigned to this group. Products have APIs.`

✅  Field `OrganizationData.children` description changed from `` to `Only responses folders.(non-hierarchically)`

✅  Description `` on type `Organization` has changed to `Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.`

✅  Field `Organization.updatedAt` description changed from `` to `Date updated`

✅  Field `Organization.createdAt` description changed from `` to `Date created`

✅  Field `Organization.error` description changed from `` to `Errors that abort services`

✅  Description `` on type `Client` has changed to `Client identifies who is making the request and holds the configuration assigned to it.`

✅  Description `` on type `Supplier` has changed to `A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers`

✅  Description `` on type `Access` has changed to `An Access is a set of credentials and configuration in order to access the system of a Supplier.`

✅  Description `` on type `AdminQuery` has changed to `The admin query root of TravelgateX's GraphQL interface.`

✅  Field `pointsOfSale` was added to object type `AdminQuery`

✅  Description `` on type `Query` has changed to `The query root of TravelgateX's GraphQL interface.`

✅  Field `Query.mappea` description changed from `` to `The Mappea product query root for implementing GraphQL query.`

✅  Field `Query.stats` description changed from `` to `The Stats product query root for implementing GraphQL query.`

✅  Field `Query.hotelX` description changed from `` to `The hotelX product query root for implementing GraphQL query.`

✅  Field `Query.admin` description changed from `` to `The admin query root of TravelgateX's for implementing GraphQL query.`

✅  Field `paymentX` was added to object type `Query`

✅  Type `PaymentXBookingInfoDeleteInput` was added

✅  Type `PointOfSaleInput` was added

✅  Type `PaymentXBookingInfoInput` was added

✅  Type `PaymentXStoreCardInput` was added

✅  Type `PaymentXMutation` was added

✅  Type `PaymentXBookingInfoFilterInput` was added

✅  Type `ExpireDate` was added

✅  Type `CVC` was added

✅  Type `CardNumber` was added

✅  Type `PaymentCard` was added

✅  Type `PaymentXBookingInfo` was added

✅  Type `StoredCardData` was added

✅  Type `StoredCard` was added

✅  Type `StoredCardEdge` was added

✅  Type `StoredCardConnection` was added

✅  Type `PaymentXQuery` was added

✅  Type `PointOfSaleFilter` was added

✅  Type `PointOfSaleData` was added

✅  Type `PointOfSale` was added

✅  Type `PointOfSaleEdge` was added

✅  Type `PointOfSaleConnection` was added

## 2018-06-01

🛑  Input field `member` was added to input object type `DeleteMemberInput`

🛑  Input field `code` was removed from input object type `DeleteMemberInput`

🛑  Input field `UpdateGroupInput.api` changed type from `String!` to `ID!`

🛑  Input field `group` was added to input object type `UpdateGroupInput`

🛑  Input field `method` was removed from input object type `UpdateGroupInput`

🛑  Input field `code` was removed from input object type `UpdateGroupInput`

🛑  Input field `UpdateMemberInput.group` changed type from `String!` to `ID!`

🛑  Input field `resources` was added to input object type `UpdateMemberInput`

🛑  Input field `role` was added to input object type `UpdateMemberInput`

🛑  Input field `member` was added to input object type `UpdateMemberInput`

🛑  Input field `resource` was removed from input object type `UpdateMemberInput`

🛑  Input field `roles` was removed from input object type `UpdateMemberInput`

🛑  Input field `code` was removed from input object type `UpdateMemberInput`

🛑  Input field `CreateGroupInput.type` changed type from `GroupType!` to `GroupTypeInput!`

🛑  Input field `group` was added to input object type `CreateGroupInput`

🛑  Input field `code` was removed from input object type `CreateGroupInput`

🛑  Input field `CreateMemberInput.group` changed type from `String!` to `ID!`

🛑  Input field `resources` was added to input object type `CreateMemberInput`

🛑  Input field `role` was added to input object type `CreateMemberInput`

🛑  Input field `resource` was removed from input object type `CreateMemberInput`

🛑  Input field `roles` was removed from input object type `CreateMemberInput`

🛑  Input field `code` was removed from input object type `CreateMemberInput`

🛑  Input field `CreateOrganizationInput.user` changed type from `String!` to `ID!`

🛑  Input field `organization` was added to input object type `CreateOrganizationInput`

🛑  Input field `code` was removed from input object type `CreateOrganizationInput`

🛑  Argument `method: Method!` added to field `AdminMutation.updateGroup`

🛑  `Warning` object type no longer implements `AdviseMessage` interface

🛑  Field `AdviseMessage.code` changed type from `String!` to `ID!`

🛑  `Error` object type no longer implements `AdviseMessage` interface

🛑  Field `error` was removed from object type `Node`

✅  Input field `member` was added to input object type `CreateMemberInput`

✅  Input field `testMode` was added to input object type `HotelSettingsInput`

✅  Input field `HotelCriteriaSearchInput.hotels` changed type from `[String!]!` to `[String!]`

✅  Input field `HotelCriteriaSearchInput.hotels` description changed from `Contains the list of hotels's ID` to `Hotel Codes.`

✅  Input field `destinations` was added to input object type `HotelCriteriaSearchInput`

✅  Field `isEditable` was added to object type `APIData`

✅  Argument `type: RoleType` added to field `ResourceData.roles`

✅  Field `isEditable` was added to object type `ResourceData`

✅  Field `isEditable` was added to object type `RoleData`

✅  Field `type` was added to object type `RoleData`

✅  Argument `type: RoleType` added to field `MemberData.roles`

✅  Argument `type: GroupType` added to field `GroupData.children`

✅  Field `roles` was added to object type `GroupData`

✅  Field `managedGroups` was added to object type `GroupData`

✅  Deprecation reason on field `AdviseMessage.type` has changed from `` to `deprecated from 2018-06-01.`

✅  Field `AdviseMessage.type` description changed from `TODO:

Error type: The following types are valid:

XXX: asd asdñoajskd lña ld` to `Error type: The following types are valid:`

✅  Field `AdviseMessage.code` description changed from `TODO:

Error code: The following codes can be returned:

XXX: XXXXXXXXX XXXXXX` to `AM code: The following codes can be returned:`

✅  Field `correlationID` was added to object type `AdviseMessage`

✅  Field `external` was added to object type `AdviseMessage`

✅  Field `level` was added to object type `AdviseMessage`

✅  Argument `type: RoleType` added to field `AdminQuery.roles`

✅  Deprecation reason on field `Query.mapping` has changed from `deprecated from 2017-11-21. You can find it in query at Admin` to `deprecated from 2017-11-21. You can find it in query at HotelX`

✅  Deprecation reason on field `Query.defaultSettings` has changed from `deprecated from 2017-11-21. You can find it in query at Admin` to `deprecated from 2017-11-21. You can find it in query at HotelX`

✅  Type `ExternalMessage` was added

✅  Type `AdviseMessageLevel` was added

✅  Type `GroupTypeInput` was added

✅  Type `RoleType` was added

## 2018-05-21

🛑  Input field `AccessInput.name` changed type from `String` to `String!`

✅  Input field `IdAccessConfigurationInput.isActive` description changed from `Indicates if the access is active.` to `Indicates if Access is active`

✅  Input field `ConnectUserGroupInput.isActive` description changed from `Indicates if the connect user is active for its connect user` to `Indicates if the connect user is active for its connected user`

✅  Input field `ConnectUserGroupInput.groupCode` description changed from `group code of the group related to this connect user` to `Group code of the group related to this connected user`

✅  Input field `AccessConfigurationInput.isActive` description changed from `Indicates if the access is active.` to `Indicates if Access is active`

✅  Description `Pair of groups and accesses. All accesses returned will belong to all the groups in groupCodes` on type `GroupAccess` has changed to `Pairs of Groups and Accesses. All Accesses returned will belong to all the Groups in groupCodes.`

✅  Field `GroupAccess.groupCodes` description changed from `group identifiers` to `Group identifiers`

✅  Field `ConnectUserGroup.isActive` description changed from `Indicates if the connect user is active for its connect user` to `Indicates if the connect user is active for its connected user`

✅  Field `ConnectUserGroup.groupCode` description changed from `group code of the group related to this connect user` to `Group code of the group related to this connected user`

✅  Description `data related to a connect user and its groups` on type `ConnectUser` has changed to `Data related to a connected user and its groups`

✅  Field `ConnectUser.connectUserGroups` description changed from `connect user's related data of its groups` to `Connected user's related data based on its groups`

✅  Field `ConnectUser.isActive` description changed from `indicates whether a connect user is active` to `Indicates whether a connected user is active`

✅  Field `ConnectUser.code` description changed from `unique connect user of a supplier` to `Unique connected user of a supplier`

✅  Description `Context type, for now only Code is necessary` on type `Context` has changed to `Context type. Currently, only Code is necessary.`

✅  Field `Context.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Context.createdAt` description changed from `Create date` to `Date created`

✅  Field `Context.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Input field `DefaultSettingsBusinessRulesInput.businessRulesType` description changed from `Different business rules to filter the options that you are interested.` to `Different business rules for filtering options that you are interested in`

✅  Input field `DefaultSettingsBusinessRulesInput.optionsQuota` description changed from `Options quota per avail. Numbers of options wanted by avail.` to `Options quota per availability; numbers of options based on availability`

✅  Input field `DefaultSettingsInput.businessRules` description changed from `Business rules.` to `Business rules`

✅  Input field `DefaultSettingsInput.market` description changed from `Targeted zone, country or point of sale to be used in request.` to `Targeted zone, country or point-ofsale-to be used in request.`

✅  Input field `DefaultSettingsInput.nationality` description changed from `Nationality of the guest (use ISO3166_1_alfa_2).` to `Nationality of the guest (use ISO3166_1_alfa_2)`

✅  Input field `DefaultSettingsInput.currency` description changed from `Currency requested if supported by supplier.` to `Currency requested if supported by supplier`

✅  Input field `DefaultSettingsInput.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Input field `DefaultSettingsInput.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that

has been set by default in the preload.` to `This field is occurs only if the authorization header is of the type JWT.. It is used for to change the user that

has been set by default in the preload.`

✅  Field `HotelCancelPayload.warnings` description changed from `Potentially  harmful situations or errors that won't force the service to abort` to `Potentially harmful situations or errors, but ones that will not forcibly abort the service`

✅  Field `HotelCancelPayload.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelCancelPayload.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Description `Holder object that contains the pax name and surname.` on type `HolderInput` has changed to `Holder object that contains the occupant's (pax's) name and surname.`

✅  Input field `HotelBookInput.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Field `HotelBookPayload.warnings` description changed from `Potentially  harmful situations or errors that won't force the service to abort` to `Potentially harmful situations or errors, but ones that will not forcibly abort the service`

✅  Field `HotelBookPayload.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelBookPayload.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Input field `UpdateClientInput.isActive` description changed from `Indicates whether a Client is active` to `Indicates whether a Client is active or inactive`

✅  Input field `CreateClientInput.isActive` description changed from `Indicates whether a Client is active` to `Indicates whether a Client is active or inactive`

✅  Input field `AccessInput.shared` description changed from `Parent access if Shared access.` to `Parent Access if Shared Access.`

✅  Input field `AccessInput.rateRules` description changed from `Business rules types for the access.` to `Business rule types for the Access`

✅  Input field `AccessInput.markets` description changed from `Markets allowed for the access.` to `Markets allowed for the Access`

✅  Input field `AccessInput.parameters` description changed from `List of parameters for additional information.` to `List of parameters for additional information`

✅  Input field `AccessInput.urls` description changed from `Specific Urls` to `Specific URLs`

✅  Input field `AccessInput.password` description changed from `Password for the connection.` to `Password for the connection`

✅  Input field `AccessInput.user` description changed from `User code to connect to supplier.` to `User code to connect to supplier`

✅  Input field `AccessInput.isTest` description changed from `Indicates if this access can be used for testing or not` to `Indicates if Access can be used for testing or not`

✅  Input field `AccessInput.supplier` description changed from `supplier for this access.` to `Supplier for this Access`

✅  Input field `AccessInput.isActive` description changed from `Indicates if the access is active.` to `Indicates if Access is active`

✅  Input field `AccessInput.name` description changed from `Access descriptive name` to `Access descriptive unique name`

✅  Field `AdminMutation.deleteGroup` description changed from `Delete group and members from this group.` to `Delete group and members from this group`

✅  Field `AdminMutation.deleteMember` description changed from `Delete member from specific group.` to `Delete a member from specific group`

✅  Field `AdminMutation.updateGroup` description changed from `Update group adding or removing apis.` to `Update group additions or remove APIs`

✅  Field `AdminMutation.updateMember` description changed from `Update member adding or removing roles.` to `Update member additions or remove roles`

✅  Field `AdminMutation.createGroup` description changed from `Create group. Group "owner" is optional.` to `Create group; group "owner" is optional`

✅  Field `AdminMutation.createMember` description changed from `Create member. Requires specific group and role.` to `Create member; requires specific group and role`

✅  Field `AdminMutation.deleteSupplierFromGroup` description changed from `Removes Supplier visibility to groups.` to `Removes Supplier visibility to groups`

✅  Field `AdminMutation.grantSupplierToGroup` description changed from `Grants Supplier visibility to a group.` to `Grants Supplier visibility to a group`

✅  Field `AdminMutation.deleteAccessFromGroup` description changed from `Removes Access visibility to groups.` to `Removes Access visibility to groups`

✅  Field `AdminMutation.grantAccessToGroup` description changed from `Grants Access visibility to a group.` to `Grants Access visibility to a group`

✅  Field `AdminMutation.updateAccess` description changed from `Updates an Access.` to `Updates an Access`

✅  Field `AdminMutation.createAccess` description changed from `Creates an Access.` to `Creates an Access`

✅  Field `createOrganization` was added to object type `AdminMutation`

✅  Description `Mutations are operations that change or update data in the server.` on type `Mutation` has changed to `Mutations are operations that change or update data on the server`

✅  Description `List of business rules to filter the options that you are interested.` on type `BusinessRules` has changed to `LList of business rules for filtering options based on your interests.`

✅  Field `BusinessRules.businessRulesType` description changed from `Different business rules to filter the options that you are interested.` to `Different business rules for filtering options that you are interested in`

✅  Field `BusinessRules.optionsQuota` description changed from `Options quota per avail. Numbers of options wanted by avail.` to `Options quota per availability; numbers of options based on availability`

✅  Field `DefaultSettings.businessRules` description changed from `Business rules.` to `Business rules`

✅  Field `DefaultSettings.market` description changed from `Targeted zone, country or point of sale to be used in request.` to `Targeted zone, country or point-ofsale-to be used in request.`

✅  Field `DefaultSettings.nationality` description changed from `Nationality of the guest (use ISO3166_1_alfa_2).` to `Nationality of the guest (use ISO3166_1_alfa_2)`

✅  Field `DefaultSettings.currency` description changed from `Currency requested if supported by supplier.` to `Currency requested if supported by supplier`

✅  Field `DefaultSettings.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Field `DefaultSettings.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that

has been set by default in the preload.` to `This field is occurs only if the authorization header is of the type JWT.. It is used for to change the user that

has been set by default in the preload.`

✅  Input field `organizations` was added to input object type `StatsFilterInput`

✅  Field `Stats.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Stats.createdAt` description changed from `Create date` to `Date created`

✅  Field `Stats.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `Mapping.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Input field `CriteriaBookingDatesInput.end` description changed from `End date.

Format: yyyy-MM-dd.` to `End date.

Format: YYYY-MM-DD.`

✅  Input field `CriteriaBookingDatesInput.start` description changed from `Start date.

Format: yyyy-MM-dd.` to `Start date.

Format: YYYY-MM-DD.`

✅  Description for enum value `BookStatusType.UNKNOWN` changed from `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the client’s responsibility to check if the booking is OK` to `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the client’s responsibility to check if the booking is OK`

✅  Description for enum value `BookStatusType.ON_REQUEST` changed from `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the client’s responsibility to check if the booking is OK` to `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the client’s responsibility to check if the booking is OK`

✅  Field `BookingRoom.description` description changed from `Description about the room.` to `Description about the room`

✅  Field `BookingRoom.code` description changed from `Indicates the room code.` to `Indicates the room code`

✅  Field `BookingRoom.occupancyRefId` description changed from `ID reference to the occupancy.` to `ID reference to the occupancy`

✅  Field `BookingHotel.occupancies` description changed from `List of occupancies of the request.` to `List of occupancies for the request`

✅  Field `BookingHotel.checkOut` description changed from `Check-out date for the booking.

Format: yyyy-MM-dd` to `Check-out date for the booking.

Format: YYYY-MM-DD`

✅  Field `BookingHotel.checkIn` description changed from `Check-in date for the booking.

Format: yyyy-MM-dd` to `Check-in date for booking

Format: YYYY-MM-DD`

✅  Field `BookingHotel.creationDate` description changed from `Creation date of the booking.

Format: yyyy-MM-dd` to `Creation date of the booking.

Format: YYYY-MM-DD`

✅  Description `Holder object that contains the pax name and surname.` on type `Holder` has changed to `Holder object that contains the occupant's (pax's) name and surname.`

✅  Description `Contains information about booking.` on type `HotelBookingDetail` has changed to `Contains information about booking`

✅  Field `HotelBookingDetail.addOns` description changed from `Extra information about the option.` to `Additional information about the option`

✅  Field `HotelBooking.warnings` description changed from `Potentially  harmful situations or errors that won't force the service to abort` to `Potentially harmful situations or errors, but ones that will not forcibly abort the service`

✅  Field `HotelBooking.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelBooking.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Input field `HotelCriteriaQuoteInput.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Description `Contains information about quote.` on type `HotelOptionQuote` has changed to `Contains information about quote(s)`

✅  Field `HotelOptionQuote.addOns` description changed from `Extra information about the option.` to `Additional information about the option`

✅  Field `HotelQuote.warnings` description changed from `Potentially  harmful situations or errors that won't force the service to abort` to `Potentially harmful situations or errors, but ones that will not forcibly abort the service`

✅  Field `HotelQuote.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelQuote.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Description `Urls Input` on type `UrlsInput` has changed to `URLs Input`

✅  Input field `UrlsInput.book` description changed from `Specific Url for Valuation method.` to `Specific URL for Valuation method.`

✅  Input field `UrlsInput.quote` description changed from `Specific Url for Reservation method.` to `Specific URL for Reservation method.`

✅  Input field `UrlsInput.search` description changed from `Specific Url for Availability method.` to `Specific URL for Availability method.`

✅  Input field `ConfigurationInput.markets` description changed from `Source markets allowed for the access.` to `Source Markets allowed for the Access`

✅  Input field `ConfigurationInput.urls` description changed from `Url or endpoint for the connection.` to `URL or endpoint for the connection.`

✅  Input field `ConfigurationInput.password` description changed from `Password for the connection.` to `Password for the connection`

✅  Input field `SettingsBaseInput.businessRules` description changed from `Business rules.` to `Business rules`

✅  Input field `HotelSettingsInput.businessRules` description changed from `Business rules.` to `Business rules`

✅  Input field `HotelSettingsInput.client` description changed from `This field is got only if the authorization header is of the type JWT. It is used to change the user that has been set by default in the preload.` to `This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.`

✅  Input field `HotelSettingsInput.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used to change the user that has been set by default in the preload.

@deprecated(reason: "deprecated from 2018-03-19. Redundant.")` to `This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.

@deprecated(reason: "deprecated from 2018-03-19. Redundant.")`

✅  Description `Criteria of search contains destination, travel dates and the number of pax in each room.

You must preload the other fields in our system by complete the fields absents.` on type `HotelCriteriaSearchInput` has changed to `Search criteria contains destination, travel dates and the number of pax in each room.

You must preload the other fields in our system by complete the fields absents.`

✅  Input field `HotelCriteriaSearchInput.market` description changed from `Targeted zone, country or point of sale to be used in request.` to `Targeted zone, country or point-ofsale-to be used in request.`

✅  Input field `HotelCriteriaSearchInput.nationality` description changed from `Nationality of the guest (use ISO3166_1_alfa_2).` to `Nationality of the guest (use ISO3166_1_alfa_2)`

✅  Input field `HotelCriteriaSearchInput.currency` description changed from `Currency requested if supported by supplier.` to `Currency requested if supported by supplier`

✅  Input field `HotelCriteriaSearchInput.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Input field `HotelCriteriaSearchInput.occupancies` description changed from `For multi room bookings, this array will contain multiple elements (rooms).

For each room you have to specify its own occupancy.` to `For multi-room bookings, this array will contain multiple elements (rooms).

For each room you have to specify its own occupancy.`

✅  Input field `HotelCriteriaSearchInput.hotels` description changed from `Contains the list of hotels's ID.` to `Contains the list of hotels's ID`

✅  Input field `HotelCriteriaSearchInput.checkOut` description changed from `Check-out, date for the booking.

Format: yyyy-MM-dd` to `Check-out, booking date

Format: YYYY-MM-DD`

✅  Input field `HotelCriteriaSearchInput.checkIn` description changed from `Check-in date for the booking.

Format: yyyy-MM-dd` to `Check-in date for booking

Format: YYYY-MM-DD`

✅  Description `Extra information about the option.` on type `AddOn` has changed to `Additional information about the option`

✅  Field `AddOn.value` description changed from `Contains the AddOn values.` to `Contains AddOn values.`

✅  Field `AddOn.key` description changed from `Contains the keyword/Id to identify the AddOn.` to `Contains keyword/ID to identify the AddOn.`

✅  Description `Extra information about the option.` on type `AddOns` has changed to `Additional information about the option`

✅  Deprecation reason on field `AddOns.distribute` has changed from `deprecated from 2018-03-12. You can find it in distribution AddOn.` to `You can find it in distribution AddOn`

✅  Description `Contains information about a cancel penalty.` on type `CancelPenalty` has changed to `Contains information for cancellation penalities..`

✅  Field `CancelPenalty.value` description changed from `Value of the cancel policy.` to `Value of the cancellation policy`

✅  Field `CancelPenalty.currency` description changed from `Currency used in the cancel policy.` to `Currency used in the cancellation policy`

✅  Field `CancelPenalty.penaltyType` description changed from `Type of penalty. This can be Nights, Percent or Import.` to `Type of penalty; this can be Nights, Percent or Import`

✅  Field `CancelPenalty.hoursBefore` description changed from `Cancellation fees applicable x number of hours before the check in date.` to `Cancellation fees applicable X number of hours before the check-in date`

✅  Description `Contains information about a cancel policy.` on type `CancelPolicy` has changed to `Information about a policy cancellation.`

✅  Field `CancelPolicy.cancelPenalties` description changed from `List of cancel penalties.` to `List of cancellation penalties`

✅  Field `CancelPolicy.refundable` description changed from `Indicates if the option is refundable or not.` to `Indicates if the option is refundable or non-refundable`

✅  Field `Bed.shared` description changed from `Specifies if the bed is shared or not.` to `Specifies if the bed is shared or not`

✅  Field `Bed.count` description changed from `Indicates number of beds in the room.` to `Indicates number of beds in a room`

✅  Field `Bed.description` description changed from `Description about the bed.` to `Description about the bed`

✅  Field `Bed.type` description changed from `Specifies the bed type.` to `Specifies the bed type`

✅  Description `Informs about the currency of origin, and the rate applied over result returned by the supplier.` on type `Exchange` has changed to `Provides information about the currency of original, and its rate applied over the results returned by the Supplier.`

✅  Field `Exchange.rate` description changed from `Informs about the rate applied over result.` to `Provides information about the rate applied over results`

✅  Field `Exchange.currency` description changed from `Informs about the currency of origin.` to `Provide information about the currency of origin`

✅  Description `Price indicates the value of the room/option.

Supplements and/or surcharges could be or not included into the price, will be verified with the nodes Supplements/Surcharges.` on type `Price` has changed to `Price indicates the value of the room/option.

Supplements and/or surcharges can be included into the price, and will be verified with nodes Supplements/Surcharges.`

✅  Field `Price.exchange` description changed from `Informs about the currency of origin, and the rate applied over result returned by the supplier.

This information is mandatory.` to `Provides information about the currency of original, and its rate applied over the results returned by the Supplier.

This information is mandatory.`

✅  Field `Room.description` description changed from `Description about the room.` to `Description about the room`

✅  Field `Room.code` description changed from `Indicates the room code.` to `Indicates the room code`

✅  Field `Room.occupancyRefId` description changed from `ID reference to the occupancy.` to `ID reference to the occupancy`

✅  Description `An option includes hotel information, meal plan, total price, conditions and room description.` on type `HotelOptionSearch` has changed to `An option includes hotel information, meal plan, total price, conditions and room description`

✅  Field `HotelOptionSearch.addOns` description changed from `Extra information about the option.` to `Additional information about the option`

✅  Field `HotelOptionSearch.occupancies` description changed from `List of occupancies of the request.` to `List of occupancies for the request`

✅  Description `Criteria of search contains destination, travel dates and the number of pax in each room.` on type `CriteriaSearch` has changed to `Search criteria contains destination, travel dates and the number of pax in each room.`

✅  Field `CriteriaSearch.market` description changed from `Targeted zone, country or point of sale to be used in request.` to `Targeted zone, country or point-ofsale-to be used in request.`

✅  Field `CriteriaSearch.nationality` description changed from `Nationality of the guest (use ISO3166_1_alfa_2).` to `Nationality of the guest (use ISO3166_1_alfa_2)`

✅  Field `CriteriaSearch.currency` description changed from `Currency requested if supported by supplier.` to `Currency requested if supported by supplier`

✅  Field `CriteriaSearch.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Field `CriteriaSearch.occupancies` description changed from `For multi room bookings, this array will contain multiple elements (rooms).

For each room you have to specify its own occupancy.` to `For multi-room bookings, this array will contain multiple elements (rooms).

For each room you have to specify its own occupancy.`

✅  Field `CriteriaSearch.hotels` description changed from `Contains the list of hotels's ID.` to `Contains the list of hotels's ID`

✅  Field `CriteriaSearch.checkOut` description changed from `Check-out, date for the booking.

Format: yyyy-MM-dd` to `Check-out, booking date

Format: YYYY-MM-DD`

✅  Field `CriteriaSearch.checkIn` description changed from `Check-in date for the booking.

Format: yyyy-MM-dd` to `Check-in date for booking

Format: YYYY-MM-DD`

✅  Description `Data sent & received in the supplier’s native format.` on type `AuditData` has changed to `Data sent and received in the supplier’s native format.`

✅  Field `AuditData.transactions` description changed from `List of transactions data.` to `List of transactions data`

✅  Field `Response.auditData` description changed from `Data sent & received in the supplier’s original format.` to `Data sent and received in the supplier’s original format.`

✅  Description `Results of Avail Hotel. Contains all the available options for a given date and itinerary.` on type `HotelSearch` has changed to `Results from Avail Hotel; contains all the available options for a given date and itinerary`

✅  Field `HotelSearch.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelSearch.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Field `Destination.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Destination.createdAt` description changed from `Create date` to `Date created`

✅  Field `Destination.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `Media.updatedAt` description changed from `Update date.` to `Date updated.`

✅  Description `Something, such as a swimming pool or shopping centre, that is intended to make life more pleasant or comfortable for the people.` on type `Amenity` has changed to `An Amenity is defined as something intended to make life more pleasant or comfortable for people. Examples include: swimming pools, shopping centers, etc.`

✅  Field `Amenity.type` description changed from `Indicates the type of the amenity.` to `Indicates the type of Amenity.`

✅  Field `DestinationData.type` description changed from `Indicates destination type, zone or city.` to `Indicates destination type, zone or city`

✅  Field `DestinationData.parent` description changed from `Parent destination code.` to `Parent destination code`

✅  Field `DestinationData.closestDestinations` description changed from `Closest destinations, indicates the minimal destinations.` to `Closest destinations, indicates destinations in proximity`

✅  Field `DestinationData.available` description changed from `Indicates if you can search by destination.` to `Indicates if you can search by destination`

✅  Description `Indicates the location of the hotel.` on type `Location` has changed to `Indicates the location of the hotel`

✅  Field `HotelData.location` description changed from `Indicates the location of the hotel.` to `Indicates the location of the hotel`

✅  Field `Hotel.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Hotel.createdAt` description changed from `Create date` to `Date created`

✅  Field `Hotel.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `RoomData.roomCode` description changed from `Code of the hotel in the Supplier selected.` to `Code of the hotel in the Supplier selected`

✅  Field `RoomData.code` description changed from `Internal code to perform availability.` to `Internal code for checking availability`

✅  Field `RoomStatic.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `RoomStatic.createdAt` description changed from `Create date` to `Date created`

✅  Field `RoomStatic.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `CategoryData.categoryCode` description changed from `Code of the hotel in the Supplier selected.` to `Code of the hotel based on the Supplier selected`

✅  Field `CategoryData.code` description changed from `Internal code to perform availability.` to `Internal code for checking availability`

✅  Field `Category.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Category.createdAt` description changed from `Create date` to `Date created`

✅  Field `Category.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `BoardData.boardCode` description changed from `Code of the hotel in the Supplier selected.` to `Code of the hotel in the Supplier selected`

✅  Field `BoardData.code` description changed from `Internal code to perform availability.` to `Internal code for checking availability`

✅  Description `Board Type` on type `Board` has changed to `Board type.`

✅  Field `Board.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Board.createdAt` description changed from `Create date` to `Date created`

✅  Field `Board.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `ClientData.isActive` description changed from `Indicates whether a Client is active` to `Indicates whether a Client is active or inactive`

✅  Field `Client.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Client.createdAt` description changed from `Create date` to `Date created`

✅  Field `Client.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `Urls.book` description changed from `Specific Url for Valuation method.` to `Specific URL for Valuation method.`

✅  Field `Urls.quote` description changed from `Specific Url for Reservation method.` to `Specific URL for Reservation method.`

✅  Field `Urls.search` description changed from `Specific Url for Availability method.` to `Specific URL for Availability method.`

✅  Field `Supplier.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Supplier.createdAt` description changed from `Create date` to `Date created`

✅  Field `Supplier.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `AccessData.shared` description changed from `Parent access if Shared access` to `Parent Access if Shared Access`

✅  Field `AccessData.rateRules` description changed from `Business rules types for the access.` to `Business rule types for the Access`

✅  Field `AccessData.markets` description changed from `Markets allowed for the access.` to `Markets allowed for the Access`

✅  Field `AccessData.parameters` description changed from `List of parameters for additional information.` to `List of parameters for additional information`

✅  Field `AccessData.urls` description changed from `Specific Urls` to `Specific URLs`

✅  Field `AccessData.password` description changed from `Password for the connection.` to `Password for the connection`

✅  Field `AccessData.user` description changed from `User code to connect to supplier.` to `User code to connect to supplier`

✅  Field `AccessData.isTest` description changed from `Indicates if this access can be used for testing or not` to `Indicates if Access can be used for testing or not`

✅  Field `AccessData.supplier` description changed from `supplier for this access.` to `Supplier for this Access`

✅  Field `AccessData.isActive` description changed from `Indicates if the access is active.` to `Indicates if Access is active`

✅  Field `Node.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Node.createdAt` description changed from `Create date` to `Date created`

✅  Field `Node.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `Access.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Access.createdAt` description changed from `Create date` to `Date created`

✅  Field `Access.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `AdminQuery.operations` description changed from `Operations list. Specify operations codes to filter operations.` to `Operations list; specify operations codes to filter operations.`

✅  Field `AdminQuery.roles` description changed from `Roles list. Specify role codes to filter roles.` to `Roles list; specify role codes to filter roles.`

✅  Field `AdminQuery.resources` description changed from `Resources list. Specify resource codes to filter resources.` to `Resources list; specify resource codes to filter resources.`

✅  Field `AdminQuery.apis` description changed from `Apis list. Specify api codes to filter apis.` to `Apis list; specify api codes to filter apis.`

✅  Field `AdminQuery.groups` description changed from `Groups list. Specify group codes to filter groups.` to `Groups list; specify group codes to filter groups.`

✅  Field `AdminQuery.members` description changed from `Members list. Specify member codes to filter members.` to `Members list; specify member codes to filter members.`

✅  Field `AdminQuery.products` description changed from `Products list. Specify product codes to filter products.` to `Members list; specify member codes to filter members`

✅  Field `AdminQuery.organizations` description changed from `Organizations list. Specify organization codes to filter organizations.` to `Organizations list; specify organization codes to filter organizations`

✅  Field `AdminQuery.serviceApi` description changed from `Obtain a ServiceApi` to `Obtain a ServiceAPI`

✅  Field `AdminQuery.accesses` description changed from `Obtain a list of accesses for a filter.` to `Obtain a list of accesses for a filter`

✅  Type `OrganizationTemplate` was added

✅  Type `CreateOrganizationInput` was added

## 2018-05-16

🛑  Type for argument `input` on field `MappeaMutation.mapSupplier` changed from `MappeaXMapSupplierInput!` to `MappeaMapSupplierInput!`

🛑  Type for argument `input` on field `MappeaMutation.uploadFile` changed from `MappeaXUploadFileInput!` to `MappeaUploadFileInput!`

🛑  Type for argument `input` on field `MappeaMutation.confirmUpload` changed from `MappeaXConfirmUploadInput!` to `MappeaConfirmUploadInput!`

🛑  Type for argument `input` on field `MappeaQuery.getMappeaStats` changed from `MappeaXGetMappeaStatsInput!` to `MappeaGetMappeaStatsInput!`

🛑  Field `RoleData.label` changed type from `String!` to `String`

🛑  Type `MappeaXEditOrganizationInput` was removed

🛑  Type `MappeaXAddOrganizationInput` was removed

🛑  Type `MappeaXMapSupplierInput` was removed

🛑  Type `MappeaXUploadFileInput` was removed

🛑  Type `MappeaXSupplierConfirmedInput` was removed

🛑  Type `MappeaXConfirmUploadInput` was removed

🛑  Type `MappeaXGetMappeaStatsInput` was removed

✅  Input field `AccessInput.name` changed type from `String!` to `String`

✅  Field `deleteClientFromGroup` was added to object type `AdminMutation`

✅  Field `grantClientToGroup` was added to object type `AdminMutation`

✅  Field `label` was added to object type `ProductData`

✅  Field `label` was added to object type `OperationData`

✅  Field `label` was added to object type `APIData`

✅  Field `label` was added to object type `ResourceData`

✅  Field `label` was added to object type `MemberData`

✅  Field `label` was added to object type `GroupData`

✅  Field `label` was added to object type `GroupCommonData`

✅  Field `label` was added to object type `OrganizationData`

✅  Type `MappeaEditOrganizationInput` was added

✅  Type `MappeaAddOrganizationInput` was added

✅  Type `MappeaMapSupplierInput` was added

✅  Type `MappeaUploadFileInput` was added

✅  Type `MappeaSupplierConfirmedInput` was added

✅  Type `MappeaConfirmUploadInput` was added

✅  Type `MappeaGetMappeaStatsInput` was added

## 2018-05-03

✅  Field `asserts` was added to object type `StatsInfo`

✅  Field `clients` was added to object type `GroupData`

✅  Field `suppliers` was added to object type `GroupData`

✅  Field `clients` was added to object type `GroupCommonData`

✅  Field `suppliers` was added to object type `GroupCommonData`

✅  Field `clients` was added to object type `OrganizationData`

✅  Field `suppliers` was added to object type `OrganizationData`

✅  Input field `serviceAPI` was added to input object type `SupplierFilter`

✅  Input field `isActive` was added to input object type `SupplierFilter`

✅  Input field `groupID` was added to input object type `SupplierFilter`

✅  Type `StatsAssert` was added

## 2018-05-02

🛑  Enum value `BOOK` was removed from enum `OperationType`

⚠️  Enum value `BOOKING` was added to enum `OperationType`

✅  Input field `accesses` was added to input object type `StatsFilterInput`

✅  Field `accesses` was added to object type `GroupData`

✅  Field `allMembers` was added to object type `GroupData`

✅  Field `accesses` was added to object type `GroupCommonData`

✅  Field `allMembers` was added to object type `GroupCommonData`

✅  Field `accesses` was added to object type `OrganizationData`

✅  Field `allMembers` was added to object type `OrganizationData`

## 2018-04-25

⚠️  Field `DestinationData.type` changed type from `DestinationType!` to `DestinationType`

⚠️  Field `type` was removed from object type `OperationData`

⚠️  Field `memberType` was removed from object type `MemberData`

⚠️  Argument `Last: Int` was removed from field `AdminQuery.clients`

⚠️  Argument `Last: Int` was removed from field `AdminQuery.suppliers`

⚠️  Argument `Last: Int` was removed from field `AdminQuery.accesses`

✅  Enum value `ORG` was added to enum `GroupType`

✅  Field `types` was added to object type `OperationData`

✅  Argument `type: OperationType` added to field `APIData.operations`

✅  Argument `type: GroupType` added to field `APIData.groups`

✅  Argument `type: GroupType` added to field `MemberData.groups`

✅  Field `type` was added to object type `MemberData`

✅  Argument `type: MemberType` added to field `GroupData.members`

✅  Argument `type: MemberType` added to field `GroupCommonData.members`

✅  Argument `type: MemberType` added to field `OrganizationData.members`

✅  Argument `type: OperationType` added to field `AdminQuery.operations`

✅  Argument `last: Int` added to field `AdminQuery.clients`

✅  Argument `last: Int` added to field `AdminQuery.suppliers`

✅  Argument `last: Int` added to field `AdminQuery.accesses`

## 2018-04-24

⚠️  Input field `groupUsers` was removed from input object type `StatsFilterInput`

✅  Input field `StatsFilterInput.operation` changed type from `[ServiceOperationType!]!` to `[ServiceOperationType!]`

✅  Field `OperationData.type` description changed from `` to `type: [OperationType!]!`

✅  Field `error` was added to object type `ServiceApi`

✅  Input field `name` was added to input object type `ClientFilter`

✅  Type `OperationType` was added

## 2018-04-18

⚠️  Type for argument `input` on field `AdminMutation.updateClient` changed from `ClientInput!` to `UpdateClientInput!`

⚠️  Type for argument `input` on field `AdminMutation.createClient` changed from `ClientInput!` to `CreateClientInput!`

⚠️  Field `StatsData` was removed from object type `Stats`

⚠️  `ClientInput` was removed

✅  Field `statsData` was added to object type `Stats`

✅  Type `MappeaXEditOrganizationInput` was added

✅  Type `MappeaXAddOrganizationInput` was added

✅  Type `UpdateClientInput` was added

✅  Type `CreateClientInput` was added

## 2018-04-17

⚠️  Field `MemberData.roles` changed type from `String` to `RoleConnection`

✅  Field `mappea` was added to object type `Mutation`

✅  Field `operations` was added to object type `APIData`

✅  Field `children` was added to object type `GroupData`

✅  Argument `codes: [ID!]` added to field `MemberData.roles`

✅  Argument `after: String` added to field `MemberData.roles`

✅  Argument `before: String` added to field `MemberData.roles`

✅  Argument `last: Int` added to field `MemberData.roles`

✅  Argument `first: Int` added to field `MemberData.roles`

✅  Field `children` was added to object type `GroupCommonData`

✅  Field `children` was added to object type `OrganizationData`

✅  Field `travelOperation` was added to object type `ServiceOperation`

✅  Field `operations` was added to object type `AdminQuery`

✅  Input field `HotelSettingsInput.client` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that

has been set by default in the preload.` to `This field is got only if the authorization header is of the type JWT. It is used to change the user that has been set by default in the preload.`

✅  Input field `HotelSettingsInput.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that

has been set by default in the preload.

@deprecated(reason: "deprecated from 2018-03-19. Redundant.")` to `This field is got only if the authorization header is of the type JWT. It is used to change the user that has been set by default in the preload.

@deprecated(reason: "deprecated from 2018-03-19. Redundant.")`

✅  Input field `group` was added to input object type `HotelSettingsInput`

✅  Field `mappea` was added to object type `Query`

✅  Field `stats` was added to object type `Query`

✅  Type `LegacyData` was added

✅  Type `MappeaXMapSupplierInput` was added

✅  Type `MappeaXUploadFileInput` was added

✅  Type `SupplierDetected` was added

✅  Type `UploadFileData` was added

✅  Type `UploadFileResponse` was added

✅  Type `MappeaXSupplierConfirmedInput` was added

✅  Type `MappeaXConfirmUploadInput` was added

✅  Type `OnlyStatusResponse` was added

✅  Type `MappeaMutation` was added

✅  Type `MappeaXGetMappeaStatsInput` was added

✅  Type `GetMappeaStatsData` was added

✅  Type `GetMappeaStatsResponse` was added

✅  Type `File` was added

✅  Type `GetUploadedFilesData` was added

✅  Type `GetUploadedFilesResponse` was added

✅  Type `MappeaQuery` was added

✅  Type `ServiceApiType` was added

✅  Type `StatsFilterInput` was added

✅  Type `ServiceOperationType` was added

✅  Type `StatsInfoTypes` was added

✅  Type `StatsInfo` was added

✅  Type `OperationDetailed` was added

✅  Type `Ratios` was added

✅  Type `StatsData` was added

✅  Type `Stats` was added

✅  Type `StatsEdge` was added

✅  Type `StatsConnection` was added

✅  Type `StatsQuery` was added

✅  Type `OperationData` was added

✅  Type `Operation` was added

✅  Type `OperationEdge` was added

✅  Type `OperationConnection` was added


## 2018-04-03

⚠️  Input field `accesses` was removed from input object type `ClientInput`

⚠️  Field `accesses` was removed from object type `ClientData`

✅  Input field `groupID` was added to input object type `ClientFilter`

✅  Field `serviceApi` was added to object type `AdminQuery`

✅  Description for enum value `BookStatusType.UNKNOWN` changed from `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the clientâ€™s responsibility to check if the booking is OK` to `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the client’s responsibility to check if the booking is OK`

✅  Description for enum value `BookStatusType.ON_REQUEST` changed from `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the clientâ€™s responsibility to check if the booking is OK` to `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the client’s responsibility to check if the booking is OK`

✅  Description `The information and credentials required to access the supplierâ€™s system.` on type `ConfigurationInput` has changed to `The information and credentials required to access the supplier’s system.`

✅  Description `Data sent & received in the supplierâ€™s native format.` on type `AuditData` has changed to `Data sent & received in the supplier’s native format.`

✅  Field `Response.auditData` description changed from `Data sent & received in the supplierâ€™s original format.` to `Data sent & received in the supplier’s original format.`

✅  Field `AdviseMessage.type` description changed from `TODO:

Error type: The following types are valid:

XXX: asd asdÃ±oajskd lÃ±a ld` to `TODO:

Error type: The following types are valid:

XXX: asd asdñoajskd lña ld`

✅  Type `ServiceApiFilter` was added

✅  Type `ServiceOperation` was added

✅  Type `ServiceApi` was added

## 2018-03-20

✅  Input field `HotelSettingsInput.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that
has been set by default in the preload.` to `This field is got only if the authorization header is of the type JWT. It is used for to change the user that
has been set by default in the preload.
@deprecated(reason: "deprecated from 2018-03-19. Redundant.")`

✅  Input field `client` was added to input object type `HotelSettingsInput`

## 2018-03-14

✅  Deprecation reason on field `AddOns.distribute` has changed from `` to `deprecated from 2018-03-12. You can find it in distribution AddOn.`

✅  Field `distribution` was added to object type `AddOns`

✅  Type `AddOn` was added

## 2018-03-08

⚠️  Input field `DestinationsCodes` was removed from input object type `HotelXDestinationListInput`

⚠️  Field `boardData` was removed from object type `Destination`

⚠️  Input field `ParameterInput.key` changed type from `ID!` to `String!`

⚠️  Field `DestinationData.code` changed type from `String!` to `ID!`

⚠️  `WebSearchResult` was removed

✅  Enum value `NON_REFUNDABLE` was added to enum `RateRulesType`

✅  Enum value `NORMAL` was added to enum `RateRulesType`

✅  Input field `destinationCodes` was added to input object type `HotelXDestinationListInput`

✅  Field `token` was added to object type `DestinationConnection`

✅  Field `destinationData` was added to object type `Destination`

✅  Field `destinationSearcher` was added to object type `HotelXQuery`

✅  Field `destinations` was added to object type `HotelXQuery`

✅  Type `HotelXDestinationSearcherInput` was added

✅  Type `DestinationSearchResult` was added

## 2018-03-05

⚠️  Input field `AccessInput.parameters` changed type from `String` to `[ParameterInput]`

⚠️  Input field `name` was added to input object type `AccessInput`

⚠️  Input field `descriptiveInfoLimit` was removed from input object type `AccessInput`

⚠️  Input field `serviceAPI` was removed from input object type `SupplierFilter`

⚠️  Input field `isActive` was removed from input object type `SupplierFilter`

⚠️  Field `updatedAt` was removed from object type `Parameter`

⚠️  Field `createdAt` was removed from object type `Parameter`

⚠️  Field `error` was removed from object type `Parameter`

⚠️  Field `parameterData` was removed from object type `Parameter`

⚠️  Field `code` was removed from object type `Parameter`

⚠️  `Parameter` object type no longer implements `Node` interface

⚠️  Field `SupplierData.accesses` changed type from `AccessConnection!` to `AccessConnection`

⚠️  Field `legacy` was removed from object type `SupplierData`

⚠️  Argument `after: String` was removed from field `AccessData.parameters`

⚠️  Argument `before: String` was removed from field `AccessData.parameters`

⚠️  Argument `Last: Int` was removed from field `AccessData.parameters`

⚠️  Argument `first: Int` was removed from field `AccessData.parameters`

⚠️  Field `AccessData.parameters` changed type from `ParameterConnection` to `[Parameter]`

⚠️  Field `descriptiveInfoLimit` was removed from object type `AccessData`

⚠️  Input field `ParameterInput.key` changed type from `String!` to `ID!`

⚠️  Input field `filter` was removed from input object type `HotelXHotelListInput`

⚠️  Field `Destination.code` changed type from `String!` to `ID!`

⚠️  Field `texts` was removed from object type `Destination`

⚠️  Field `available` was removed from object type `Destination`

⚠️  Field `Location.closestDestination` changed type from `Destination!` to `DestinationData!`

⚠️  Field `HotelConnection.token` changed type from `String!` to `String`

⚠️  `SupplierInput` was removed

⚠️  `ProviderInput` was removed

⚠️  `LegacyDataInput` was removed

⚠️  `ParameterData` was removed

⚠️  `ParameterEdge` was removed

⚠️  `ParameterConnection` was removed

⚠️  `LegacyData` was removed

✅  `Destination` object implements `Node` interface

✅  Input field `isTest` was added to input object type `AccessInput`

✅  Field `updateClient` was added to object type `AdminMutation`

✅  Field `createClient` was added to object type `AdminMutation`

✅  Description `` on type `Parameter` has changed to `Parameters for additional information for the supplier's configuration.`

✅  Field `value` was added to object type `Parameter`

✅  Field `key` was added to object type `Parameter`

✅  Description `TGX Platform API implementation` on type `Provider` has changed to `Temporary type to use only during SQL server's lifetime`

✅  Field `SupplierData.accesses` description changed from `Accesses in a Supplier` to `Accesses where the supplier is referenced`

✅  Field `SupplierData.supplierGroup` description changed from `SupplierGroup` to `SupplierGroup Internal Supplier grouping`

✅  Field `isTest` was added to object type `AccessData`

✅  Field `name` was added to object type `AccessData`

✅  Field `clients` was added to object type `AdminQuery`

✅  Description `Parameters for additional information for the supplier's configuration.` on type `ParameterInput` has changed to `Parameters Input.`

✅  Input field `ParameterInput.value` description changed from `Contains the parameter values.` to `Contains the parameter values.

This information is mandatory.`

✅  Input field `ParameterInput.key` description changed from `Contains the keyword/Id to identify a parameter.` to `Contains the keyword/Id to identify a parameter.

This information is mandatory.`

✅  Description `Url's Input` on type `UrlsInput` has changed to `Urls Input`

✅  Input field `destinationCodes` was added to input object type `HotelXHotelListInput`

✅  Description `Information about destinantion` on type `Destination` has changed to `Destination Type`

✅  Field `Destination.code` description changed from `Destination Code` to `Destination ID`

✅  Field `updatedAt` was added to object type `Destination`

✅  Field `createdAt` was added to object type `Destination`

✅  Field `error` was added to object type `Destination`

✅  Field `boardData` was added to object type `Destination`

✅  Type `HotelXDestinationListInput` was added

✅  Type `WebSearchResult` was added

✅  Type `DestinationEdge` was added

✅  Type `DestinationConnection` was added

✅  Type `ClientInput` was added

✅  Type `ClientFilter` was added

✅  Type `ClientData` was added

✅  Type `Client` was added

✅  Type `ClientEdge` was added

✅  Type `ClientConnection` was added

✅  Type `DestinationType` was added

✅  Type `DestinationData` was added



## 2018-02-21

⚠️  Field `updateHotel` was removed from object type `HotelXMutation`

⚠️  Input field `SupplierFilter.serviceAPI` changed type from `Int` to `[Int]`

⚠️  Field `avail` was removed from object type `Destination`

⚠️  Field `name` was removed from object type `Destination`

⚠️  Field `Contact.web` changed type from `URI!` to `URI`

⚠️  Field `Location.zipCode` changed type from `String!` to `String`

⚠️  Field `Location.city` changed type from `String!` to `String`

⚠️  Field `Location.address` changed type from `String!` to `String`

⚠️  Field `geocode` was removed from object type `Location`

⚠️  Field `Amenity.code` changed type from `ID!` to `String!`

⚠️  Field `updatedAt` was removed from object type `Amenity`

⚠️  Field `createdAt` was removed from object type `Amenity`

⚠️  Field `error` was removed from object type `Amenity`

⚠️  Field `AmenityData` was removed from object type `Amenity`

⚠️  `Amenity` object type no longer implements `Node` interface

⚠️  Field `Media.code` changed type from `ID!` to `String`

⚠️  Field `createdAt` was removed from object type `Media`

⚠️  Field `error` was removed from object type `Media`

⚠️  Field `mediaData` was removed from object type `Media`

⚠️  `Media` object type no longer implements `Node` interface

⚠️  Field `HotelData.rank` changed type from `Rank!` to `[Int!]!`

⚠️  Field `HotelData.contact` changed type from `Contact!` to `Contact`

⚠️  Argument `after: String` was removed from field `HotelData.amenities`

⚠️  Argument `before: String` was removed from field `HotelData.amenities`

⚠️  Argument `last: Int` was removed from field `HotelData.amenities`

⚠️  Argument `first: Int` was removed from field `HotelData.amenities`

⚠️  Argument `language: String` was removed from field `HotelData.amenities`

⚠️  Field `HotelData.amenities` changed type from `AmenityConnection` to `[Amenity!]`

⚠️  Argument `after: String` was removed from field `HotelData.medias`

⚠️  Argument `before: String` was removed from field `HotelData.medias`

⚠️  Argument `last: Int` was removed from field `HotelData.medias`

⚠️  Argument `first: Int` was removed from field `HotelData.medias`

⚠️  Argument `type: ApplicationArea` was removed from field `HotelData.medias`

⚠️  Field `HotelData.medias` changed type from `MediaConnection` to `[Media!]`

⚠️  Field `destination` was removed from object type `HotelData`

⚠️  Field `generalDescription` was removed from object type `HotelData`

⚠️  Field `additionalInformation` was removed from object type `HotelData`

⚠️  Field `name` was removed from object type `HotelData`

⚠️  Type for argument `relay` on field `HotelXQuery.hotels` changed from `RelayInput` to `RelayInput!`

⚠️  Argument `criteria: HotelXHotelListInput!` added to field `HotelXQuery.hotels`

⚠️  Argument `hotels: HotelXHotelQueryInput` was removed from field `HotelXQuery.hotels`

⚠️  `StatusResponse` was removed

⚠️  `HotelStatus` was removed

⚠️  `GiataID` was removed

⚠️  `HotelXHotelDataInput` was removed

⚠️  `HotelXHotelMutationInput` was removed

⚠️  `RankInput` was removed

⚠️  `HotelXHotelQueryInput` was removed

⚠️  `Rank` was removed

⚠️  `Geocode` was removed

⚠️  `Information` was removed

⚠️  `AmenityData` was removed

⚠️  `AmenityEdge` was removed

⚠️  `AmenityConnection` was removed

⚠️  `ApplicationArea` was removed

⚠️  `MediaData` was removed

⚠️  `MediaEdge` was removed

⚠️  `MediaConnection` was removed

✅  Field `accesses` was added to object type `SupplierData`

✅  Description `Destination type` on type `Destination` has changed to `Information about destinantion`

✅  Field `Destination.code` changed type from `String` to `String!`

✅  Field `Destination.code` description changed from `Destination code.` to `Destination Code`

✅  Field `texts` was added to object type `Destination`

✅  Field `available` was added to object type `Destination`

✅  Description `Contact type` on type `Contact` has changed to `Contact Data.`

✅  Field `Contact.web` description changed from `Web.` to `Web`

✅  Field `Contact.fax` description changed from `Fax.` to `Fax`

✅  Field `Contact.telephone` description changed from `Telephone.` to `Telephone`

✅  Field `Contact.email` description changed from `Email.` to `Email`

✅  Description `Location` on type `Location` has changed to `Indicates the location of the hotel.`

✅  Field `Location.country` description changed from `Country ISO Code` to `Country where is the Hotel.`

✅  Field `Location.zipCode` description changed from `Zip Code` to `Contains the zipCode.`

✅  Field `Location.city` description changed from `City` to `Contains the city`

✅  Field `Location.address` description changed from `Street Address` to `Contains Hotel Address`

✅  Field `closestDestination` was added to object type `Location`

✅  Field `coordinates` was added to object type `Location`

✅  Description `` on type `Amenity` has changed to `Something, such as a swimming pool or shopping centre, that is intended to make life more pleasant or comfortable for the people.`

✅  Field `Amenity.code` description changed from `` to `Code`

✅  Field `texts` was added to object type `Amenity`

✅  Field `type` was added to object type `Amenity`

✅  Description `` on type `Media` has changed to `Contains media information.`

✅  Field `Media.updatedAt` description changed from `Update date` to `Update date.`

✅  Field `Media.code` description changed from `` to `Code.`

✅  Field `texts` was added to object type `Media`

✅  Field `url` was added to object type `Media`

✅  Field `type` was added to object type `Media`

✅  Field `order` was added to object type `Media`

✅  Field `HotelData.rank` description changed from `` to `Rank indicates the supplier categorization.`

✅  Field `HotelData.contact` description changed from `Contact information.` to `Contact cotains information about hotel contact.`

✅  Field `HotelData.location` description changed from `` to `Indicates the location of the hotel.`

✅  Field `HotelData.amenities` description changed from `` to `Amenities`

✅  Field `HotelData.medias` description changed from `` to `Medias`

✅  Field `HotelData.hotelCode` description changed from `Code of the hotel in the Supplier selected.` to `Code to perform availability.`

✅  Field `HotelData.code` description changed from `Internal code to perform availability` to `Internal code.`

✅  Field `descriptions` was added to object type `HotelData`

✅  Field `cardTypes` was added to object type `HotelData`

✅  Field `chainCode` was added to object type `HotelData`

✅  Field `property` was added to object type `HotelData`

✅  Field `hotelName` was added to object type `HotelData`

✅  Field `hotelCodeSupplier` was added to object type `HotelData`

✅  Description `Hotel type` on type `Hotel` has changed to `Hotel Type`

✅  Field `token` was added to object type `HotelConnection`

✅  Argument `token: String` added to field `HotelXQuery.hotels`

✅  Field `rooms` was added to object type `HotelXQuery`

✅  Field `categories` was added to object type `HotelXQuery`

✅  Field `boards` was added to object type `HotelXQuery`

✅  Type `HotelXRoomQueryInput` was added

✅  Type `RoomData` was added

✅  Type `RoomStatic` was added

✅  Type `RoomEdge` was added

✅  Type `RoomConnection` was added

✅  Type `HotelXHotelListInput` was added

✅  Type `DescriptionType` was added

✅  Type `Description` was added

✅  Type `ApplicationAreaType` was added

✅  Type `Coordinates` was added

✅  Type `Property` was added

✅  Type `HotelXCategoryQueryInput` was added

✅  Type `CategoryData` was added

✅  Type `Category` was added

✅  Type `CategoryEdge` was added

✅  Type `CategoryConnection` was added

✅  Type `HotelXBoardQueryInput` was added

✅  Type `Text` was added

✅  Type `BoardData` was added

✅  Type `Board` was added

✅  Type `BoardEdge` was added

✅  Type `BoardConnection` was added



## 2018-01-30

⚠️  Input field `hotelCode` was added to input object type `HotelXHotelDataInput`

⚠️  Input field `supplierCode` was removed from input object type `HotelXHotelDataInput`

⚠️  Field `rsAccess` was removed from object type `StatAccess`

⚠️  Field `rqAccess` was removed from object type `StatAccess`

⚠️  Field `dockerID` was removed from object type `StatAccess`

⚠️  Field `dockerID` was removed from object type `StatPlugin`

⚠️  Field `rsPlugin` was removed from object type `StatsRequest`

⚠️  Field `rqPlugin` was removed from object type `StatsRequest`

⚠️  Field `rs` was removed from object type `StatsRequest`

⚠️  Field `rq` was removed from object type `StatsRequest`

⚠️  Field `config` was removed from object type `StatsRequest`

⚠️  Field `supplierCode` was removed from object type `HotelData`

✅  Description for enum value `BookStatusType.UNKNOWN` changed from `The status of the booking is unknown` to `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the client's responsibility to check if the booking is OK`

✅  Description for enum value `BookStatusType.ON_REQUEST` changed from `The status of the booking is on request` to `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the client's responsibility to check if the booking is OK`

✅  Description for enum value `BookStatusType.OK` changed from `The status of the booking is available` to `The reservation was completed with no problems`

✅  Field `StatTransaction.parseResponse` description changed from `` to `Parse response time`

✅  Field `StatTransaction.workerCommunication` description changed from `` to `Worker connection time`

✅  Field `StatTransaction.buildRequest` description changed from `` to `Build request time`

✅  Field `StatTransaction.total` description changed from `` to `Total transaction time`

✅  Field `StatTransaction.reference` description changed from `` to `Extra information about transaction.`

✅  Field `StatAccess.plugins` description changed from `` to `Plugin execution time`

✅  Field `StatAccess.transactions` description changed from `` to `Detail transaction time`

✅  Field `StatAccess.cities` description changed from `` to `Number of cities`

✅  Field `StatAccess.zones` description changed from `` to `Number of zones`

✅  Field `StatAccess.hotels` description changed from `` to `Number of hotels`

✅  Field `StatAccess.staticConfiguration` description changed from `` to `Static configuration time`

✅  Field `StatAccess.total` description changed from `` to `Total access time`

✅  Field `StatAccess.name` description changed from `` to `Access name`

✅  Field `responseAccess` was added to object type `StatAccess`

✅  Field `requestAccess` was added to object type `StatAccess`

✅  Field `StatPlugin.total` description changed from `` to `total plugin time`

✅  Field `StatPlugin.name` description changed from `` to `Plugin name`

✅  Field `StatsRequest.Accesses` description changed from `` to `Detail access time`

✅  Field `StatsRequest.dockerID` description changed from `` to `Docker Id`

✅  Field `StatsRequest.cities` description changed from `` to `Number of cities`

✅  Field `StatsRequest.zones` description changed from `` to `Number of zones`

✅  Field `StatsRequest.hotels` description changed from `` to `Number of hotels`

✅  Field `StatsRequest.process` description changed from `` to `Process time. Contains communication time, parse time and plugin time.`

✅  Field `StatsRequest.validation` description changed from `` to `Request validation time`

✅  Field `StatsRequest.total` description changed from `` to `Total transaction time`

✅  Field `responsePlugin` was added to object type `StatsRequest`

✅  Field `requestPlugin` was added to object type `StatsRequest`

✅  Field `response` was added to object type `StatsRequest`

✅  Field `request` was added to object type `StatsRequest`

✅  Field `configuration` was added to object type `StatsRequest`

✅  Field `hotelCode` was added to object type `HotelData`

## 2018-01-29

⚠️  Field `HotelCancelPayload.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Field `HotelBookPayload.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Input field `supplierCode` was added to input object type `HotelXHotelDataInput`

⚠️  Input field `code` was removed from input object type `HotelXHotelDataInput`

⚠️  Type for argument `relay` on field `HotelXMutation.updateHotel` changed from `HotelXRelayInput` to `RelayInput`

⚠️  Field `HotelBooking.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Field `HotelQuote.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Field `external` was removed from object type `StatAccess`

⚠️  Field `Response.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Field `HotelSearch.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Input field `codes` was removed from input object type `HotelXHotelQueryInput`

⚠️  Type for argument `language` on field `HotelData.generalDescription` changed from `Language` to `String`

⚠️  Type for argument `language` on field `HotelData.additionalInformation` changed from `Language` to `String`

⚠️  Type for argument `language` on field `HotelData.amenities` changed from `Language` to `String`


⚠️  Type for argument `relay` on field `HotelXQuery.hotels` changed from `HotelXRelayInput` to `RelayInput`

⚠️  `RequestStats` was removed

⚠️  `HotelXRelayInput` was removed

✅  Input field `supplierGroup` was added to input object type `SupplierInput`

✅  Input field `serviceAPI` was added to input object type `SupplierFilter`

✅  Input field `isActive` was added to input object type `SupplierFilter`

✅  Field `supplierGroup` was added to object type `SupplierData`

✅  Description `Url's` on type `UrlsInput` has changed to `Url's Input`

✅  Field `plugins` was added to object type `StatAccess`

✅  Field `rsAccess` was added to object type `StatAccess`

✅  Field `rqAccess` was added to object type `StatAccess`

✅  Field `dockerID` was added to object type `StatAccess`

✅  Field `cities` was added to object type `StatAccess`

✅  Field `zones` was added to object type `StatAccess`

✅  Field `hotels` was added to object type `StatAccess`

✅  Input field `supplierCodes` was added to input object type `HotelXHotelQueryInput`

✅  Field `HotelData.code` description changed from `Internal code to perform availability and/or supplier code.` to `Internal code to perform availability`

✅  Field `supplierCode` was added to object type `HotelData`

✅  Type `StatPlugin` was added

✅  Type `StatsRequest` was added

✅  Type `RelayInput` was added

## 2018-01-17

⚠️  Field `AccessEdge.node` changed type from `Supplier` to `Access`

⚠️  Field `value` was removed from object type `Parameter`

⚠️  Field `key` was removed from object type `Parameter`

⚠️  Field `supplierGroups` was removed from object type `SupplierData`

⚠️  Field `hotelCodes` was removed from object type `SupplierData`

⚠️  Field `dll` was removed from object type `SupplierData`

⚠️  Field `Supplier.supplierData` changed type from `SupplierData!` to `SupplierData`

⚠️  Field `AccessData.parameters` changed type from `[Parameter!]` to `ParameterConnection`

⚠️  Field `AccessData.urls` changed type from `Urls!` to `Urls`

⚠️  Field `AccessData.supplier` changed type from `String!` to `Supplier!`

⚠️  Field `AccessData.code` changed type from `String!` to `ID!`

⚠️  Field `id` was removed from object type `AccessData`

⚠️  Field `suppliers` was removed from object type `AccessData`

⚠️  Field `Access.accessData` changed type from `AccessData!` to `AccessData`

✅  `Parameter` object implements `Node` interface

✅  Description `Parameters for additional information for the supplier's configuration.` on type `Parameter` has changed to ``

✅  Field `updatedAt` was added to object type `Parameter`

✅  Field `createdAt` was added to object type `Parameter`

✅  Field `error` was added to object type `Parameter`

✅  Field `parameterData` was added to object type `Parameter`

✅  Field `code` was added to object type `Parameter`

✅  Field `legacy` was added to object type `SupplierData`

✅  Field `serviceApi` was added to object type `SupplierData`

✅  Field `context` was added to object type `SupplierData`

✅  Field `provider` was added to object type `SupplierData`

✅  Field `name` was added to object type `SupplierData`

✅  Argument `after: String` added to field `AccessData.parameters`

✅  Argument `before: String` added to field `AccessData.parameters`

✅  Argument `Last: Int` added to field `AccessData.parameters`

✅  Argument `first: Int` added to field `AccessData.parameters`

✅  Field `AccessData.code` description changed from `Access code.` to `Unique AccessConfiguration identifier`

✅  Field `shared` was added to object type `AccessData`

✅  Field `rateRules` was added to object type `AccessData`

✅  Field `descriptiveInfoLimit` was added to object type `AccessData`

✅  Field `deleteSupplierFromGroup` was added to object type `AdminMutation`

✅  Field `grantSupplierToGroup` was added to object type `AdminMutation`

✅  Field `deleteAccessFromGroup` was added to object type `AdminMutation`

✅  Field `grantAccessToGroup` was added to object type `AdminMutation`

✅  Field `updateAccess` was added to object type `AdminMutation`

✅  Field `createAccess` was added to object type `AdminMutation`

✅  Input field `RankInput.rank4` changed type from `Boolean!` to `Boolean`

✅  Input field `RankInput.rank3` changed type from `Boolean!` to `Boolean`

✅  Input field `RankInput.rank2` changed type from `Boolean!` to `Boolean`

✅  Input field `RankInput.rank1` changed type from `Boolean!` to `Boolean`

✅  Field `suppliers` was added to object type `AdminQuery`

✅  Field `accesses` was added to object type `AdminQuery`

✅  Field `CancelPolicy.refundable` description changed from `Indicates if the option is refundable or not.
This information is mandatory.` to `Indicates if the option is refundable or not.`

✅  Input field `ranks` was added to input object type `HotelXHotelQueryInput`

✅  Type `SupplierInput` was added

✅  Type `ProviderInput` was added

✅  Type `LegacyDataInput` was added

✅  Type `Context` was added

✅  Type `GroupInput` was added

✅  Type `AccessInput` was added

✅  Type `SupplierFilter` was added

✅  Type `SupplierEdge` was added

✅  Type `SupplierConnection` was added

✅  Type `AccessFilter` was added

✅  Type `ParameterData` was added

✅  Type `ParameterEdge` was added

✅  Type `ParameterConnection` was added

✅  Type `LegacyData` was added

✅  Type `Provider` was added

## 2018-01-11

⚠️  Field `codes` was removed from object type `Map`

⚠️  Field `supplierCode` was removed from object type `Map`

⚠️  Field `maps` was removed from object type `MappingEntity`

⚠️  Argument `BoardCodes: [String!]` was removed from field `MappingContext.boards`

⚠️  Argument `roomCodes: [String!]` was removed from field `MappingContext.rooms`

⚠️  Argument `hotelCodes: [String!]` was removed from field `MappingContext.hotels`

⚠️  Field `rates` was removed from object type `MappingContext`

⚠️  Field `contextCode` was removed from object type `MappingContext`

⚠️  Argument `supplierCodes: [String!]` was removed from field `Mapping.contexts`

⚠️  Argument `contextCodes: [String!]` was removed from field `Mapping.contexts`

⚠️  Field `DefaultSettings.market` changed type from `String!` to `String`

⚠️  Field `DefaultSettings.connectUser` changed type from `String!` to `String`

⚠️  Input field `HotelSettingsInput.suppliers` changed type from `[SupplierInput!]` to `[HotelXSupplierInput!]`

⚠️  Field `HotelSearch.requestCriteria` changed type from `CriteriaSearch!` to `CriteriaSearch`

⚠️  Field `HotelSearch.context` changed type from `String!` to `String`

⚠️  Field `Geocode.longitude` changed type from `String!` to `Float!`

⚠️  Field `Geocode.latitude` changed type from `String!` to `Float!`

⚠️  Argument `after: String` was removed from field `HotelXQuery.hotels`

⚠️  Argument `before: String` was removed from field `HotelXQuery.hotels`

⚠️  Argument `last: Int` was removed from field `HotelXQuery.hotels`

⚠️  Argument `first: Int` was removed from field `HotelXQuery.hotels`

⚠️  Argument `language: String` was removed from field `HotelXQuery.hotels`

⚠️  Argument `codes: [String!]` was removed from field `HotelXQuery.hotels`

⚠️  `HotelInput` was removed

⚠️  `AccessInput` was removed

⚠️  `SupplierInput` was removed

✅  Field `loadFile` was added to object type `HotelXMutation`

✅  Field `updateHotel` was added to object type `HotelXMutation`

✅  Field `maps` was added to object type `Map`

✅  Field `code` was added to object type `Map`

✅  Field `contexts` was added to object type `MappingEntity`

✅  Argument `codes: [String!]` added to field `MappingContext.boards`

✅  Field `MappingContext.boards` description changed from `Mapping of boards. Filter by board code.` to `Mapping of boards, you can filter by board code.`

✅  Argument `codes: [String!]` added to field `MappingContext.rooms`
✅  Field `MappingContext.rooms` description changed from `Mapping of rooms. Filter by room code.` to `Mapping of rooms, you can filter by room code.`

✅  Argument `codes: [String!]` added to field `MappingContext.hotels`
✅  Field `MappingContext.hotels` description changed from `Mapping of hotels. Filter by hotel code.` to `Mapping of hotels, you can filter by hotel code.`

✅  Field `code` was added to object type `MappingContext`

✅  Argument `codes: [String!]` added to field `Mapping.contexts`

✅  Field `warnings` was added to object type `Mapping`

✅  Field `errors` was added to object type `Mapping`

✅  Argument `type: GroupType` added to field `AdminQuery.groups`

✅  Argument `type: MemberType` added to field `AdminQuery.members`

✅  Field `rank` was added to object type `HotelData`

✅  Argument `relay: HotelXRelayInput` added to field `HotelXQuery.hotels`

✅  Argument `hotels: HotelXHotelQueryInput` added to field `HotelXQuery.hotels`

✅  Field `mapping` was added to object type `HotelXQuery`

✅  Type `StatusResponse` was added

✅  Type `HotelStatus` was added

✅  Type `RankInput` was added

✅  Type `HotelXHotelDataInput` was added

✅  Type `HotelXHotelMutationInput` was added

✅  Type `HotelXAccessInput` was added

✅  Type `HotelXSupplierInput` was added

✅  Type `HotelXRelayInput` was added

✅  Type `HotelXHotelQueryInput` was added

✅  Type `Rank` was added
