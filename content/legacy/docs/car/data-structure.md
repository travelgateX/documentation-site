---
title: Data Structure
keywords: transfers, data structure
search: Car - Data Structure
sidebar: mydoc_sidebar
permalink: /docs/car/data-structure
---

This document intends to explain every aspect of this structure and
their fields.

The integration will have the following methods:



| **Method**		| **Input**		| **Output**		| **Required**	| **Description Endpoint**	|
| --------------------- | --------------------- | --------------------- | ------------- | ----------------------------- |
| OTA_VehAvailRate	| OTA_VehAvailRateRQ	| OTA_VehAvailRateRS	| Yes 		| Makes a availability call Car Booking Endpoint. |
| OTA_VehRateRule	| OTA_VehRateRuleRQ	| OTA_VehRateRuleRS 	| Yes		| Makes a pre-booking Car Booking Endpoint |
| OTA_VehRes		| OTA_VehResRQ		| OTA_VehResRS		| Yes		| Makes a booking Car Booking Endpoint |
| OTA_VehLocSearch	| OTA_VehLocSearchRQ	| OTA_VehLocSearchRS 	| Yes		| Gets a static offices list Car Batch Endpoint |
| OTA_VehRetRes		| OTA_VehRetResRQ	| OTA_VehRetResRS	| No	 	| Gets booking details Car Booking Endpoint |
| OTA_VehCancel		| OTA_VehCancelRQ	| OTA_VehCancelRS	| No	 	| Cancels a booking Car Booking Endpoint |
| StaticConfiguration	| StaticConfigurationRQ	| StaticConfigurationRS	| Yes	 	| Returns the information related to the configuration of the provider. |
| RuntimeConfiguration	| RuntimeConfigurationRQ|RuntimeConfigurationRS	| Yes		| Returns information related to the behaviour of the integration. |



Each request sent to the **service url** requires a node called rqXML .
Inside this node travels the current method's Input object.



**Typical Exchange Message Scenario**

Typical use case of message exchange flow between Providers and Sellers
can be resumed as:



1.  **Retrieve and purchase of car rental product**:

    > 1.  Agencies retrieve the available product from the provider
    >     using OTA_VehAvailRate.
    > 2.  Once the final customer selects an option, a pre-booking must
    >     be done using OTA_VehRateRule.
    > 3.  Finally when the customer agrees purchasing the option, the
    >     booking is created using OTA_VehRes.

2.  **Manage Bookings:**

    > 1.  The information related to a booking previously created can be
    >     retrieved usingOTA_VehRetRes.
    > 2.  A previously made reservation can be cancelled
    >     usingOTA_VehCancel.

3.  **Office Mapping:**

    > 1.  Agencies can retrieve the available offices
    >     usingOTA_VehLocSearch.



**Data structure content:**

1. [Common-Elements](/docs/car/DSF/common-elements)
2. [Availability](/docs/car/DSF/avail)
3. [Pre-Booking (Rate Rule)](/docs/car/DSF/rate-rule)
4. [Booking](/docs/activities/DSF/reservation)
5. [Routes (Offices)](/docs/car/DSF/routes)
6. [OTA VehRetRes (GetBooking Details)](/docs/car/DSF/valuation)
7. [Cancel Booking](/docs/car/DSF/cancel)
8. [StaticConfiguration](/docs/car/DSF/static-configuration)
9. [RunTimeConfiguration](/docs/car/DSF/runtimeconfiguration)
10. [Code List](/docs/car/DSF/code-lists)

