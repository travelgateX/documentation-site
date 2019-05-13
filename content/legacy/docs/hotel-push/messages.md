---
title: Messages
keywords: hotel-push, messages
search: Hotel-Push - Messages
sidebar: mydoc_sidebar
permalink: /docs/hotel-push/messages
---

List of messages with OTA xsd structure used:

  
| **Method**			| **OTA RQ**			| **OTA RS**			| **Type**	| **Description**	|
| ----------------------------- | ----------------------------- | ----------------------------- | ------------- | --------------------- |
| HotelRatePlan InventoryRetrieve | OTA_HotelRatePlanRQ | OTA_Hotel RatePlanRS | Retrieve | Retrieve static information of hotel seller inventory|
| HotelRatePlan Retrieve | OTA_Hote lRatePlanRQ | OTA_Hotel RatePlanRS | Retrieve | Retrieve rates of hotel seller|
| HotelAvail Retrieve | OTA_Hotel AvailGetRQ | OTA_Hotel AvailGetRS | Retrieve | Retrieve availability of hotel seller|
| HotelRes Retrieve | OTA_ReadRQ  | OTA_HotelResRS | Retrieve | Retrieve reservations from user seller|
| HotelRate PlanNotify | OTA_Hotel RatePlanNotifRQ | OTA_Hotel RatePlanNotifRS | Notify | Notify rates to hotel seller  |
| HotelAvail Notify | OTA_Hotel AvailNotifRQ | OTA_Hotel AvailNotifRS | Notify | Notify availability to hotel seller|
| HotelRes Retrieve | OTA_Hotel ResRetrieveRQ | OTA_Hotel ResRetrieveRS | Retrieve | Retrieve reservations from user seller |


**Contents:**


1. [Typical Exchange Message Scenario](/docs/hotel-push/messages-files/typical-scenario)
2. [Retrieve Messages](/docs/hotel-push/messages-files/retrieve-messages)
3. [Notify Messages](/docs/hotel-push/messages-files/notify-messages)
