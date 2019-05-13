---
title: Change Log
keywords: transfers, change log
search: Car - Change Log
sidebar: mydoc_sidebar
permalink: /docs/car/change-log
---
**Version 1.3.3:** Date 09/02/2018

* **Added element PricedCoverages:** We have added the element PricedCoverages in OTA_VehAvailRateRQ/VehAvailRQInfo, OTA_VehRateRuleRQ/RentalInfo and OTA_VehResRQ/VehResRQInfo. With this elements we can request coverages to the provider.

* **Added element RentalRate in VehSegmentCore:** We have added the element RentalRate in  OTA_VehResRQ/VehRetResRSCore/VehReservation/VehSegmentCore and OTA_VehRetResRS/VehRetResRSCore/VehReservation/VehSegmentCore. With this elements we can return more properties of the booking, like the cancel penalties, vehicle charges, etc.

* **Added attribute PromotionCode in RateQualifier:** We have added the attribute PromotionCode on the nodes RateQualifier in order to could send provider's promotional codes or return the promotional code associated to the rate.

* **Added element RateQualifier in VehAvailRQCore:** We have added the element RateQualifier in OTA_VehAvailRateRQ/VehAvailRQCore in order to could send the PromotionCode to the providers in the availability process.

* **Added the OTA Vehicle Coverage Type Codes (VCT) as an enumerated type: ** Actually the OTA VCT is from 0 to 80.

* **Added the attribute Type in the elements Coverage:**  This new type contains the values of the new enumerated type OTA Vehicle Coverage Type Codes. In the future the string attribute CoverageType must be stop using in order to use only the attribute Type with the new enumerated.

* **Added new enumerated values in Vehicle Charge Purpose Type Codes (VCP):** With this new values we have more types to return in vehicle charges. The OTA VCP codes added are from 122 to 123.

* **Added new enumerated values in Document Type Codes(DOC):** We have added UNKNOWN and DRIVERS_LICENSE

* **Added new enumerated values in Transportation Codes (TRP):** We have added NO_TRANSPORTATION, EXPRESS_TRAIN , PUBLIC, ALTERNATE  and FERRY.

* **Added new enumerated values in Transportation Codes (TRP):** We have added NO_TRANSPORTATION, EXPRESS_TRAIN , PUBLIC, ALTERNATE  and FERRY.

* **Added new enumerated value in Phone Technology Type (PTT):** We have added the UNKNOWN value.

* **Added new enumerated values in Vehicle Where At Facility Codes (VWF):** We have added the UNKNOWN value and the values from 15 to 25 of the OTA codes.

* **Added new element VehFees in VehicleSegmentCore :** We have added the element VehFees in OTA_VehResRS and OTA_VehRetResRS exactly equal to the element Fees of OTA_VehRateRuleRS and OTA_VehAvailRateRS. This new element on VehicleSegmentCore has been added in order to replace the element Fees of VehicleSegmentCore, due it could contain less information than the element Fees from OTA_VehRateRuleRS and OTA_VehAvailRateRS.

|
**Version 1.3.2:** Date 30/09/2017

* **Added new enumerated values in Vehicle Charge Purpose Type:** With this new values we have more types to return in vehicle charges. The OTA VCP codes added are from 98 to 121.

* **Added new integer attribute RentalDays in the elements VehRentalCore:** With this new attribute we can return the number of days requested for rent.

|
**Version 1.3.1:** Date 11/11/2016

* **Added attribute VehiclePeriodUnitName in RateDistance:** With this enumerated attribute we can return the period of time associated with the quantity and distance unit name.

|
**Version 1.3.0:** Date 05/09/2016

* **Added Fees and TPA_Extensions in VehicleSegmentCore:** With this elements we can return the fees and additional elements and attributes in OTA_VehResRS and OTA_VehRetResRS

* **Added VendorMessage and PricedCoverages in VehSegmentInfo:** With this elements we can return the provider's messages and coverages in OTA_VehResRS.

* **Added MinMax in Vehicle's charges**: With this elements, if it is appropriate, we can return information about any minimum or maximum amount.

|
**Version 1.2.3:** Date 18/08/2013

 :  Added new error codes.

|
**Version 1.2.3:** Date 18/08/2013

 :  Added new error codes.

|
**Version 1.2.1:** Date 23/08/2012

 :  Added fields in OTA_VehResRQ to send the customer's address on the request.

| 

**Version 1.0.2:** Date 07/05/2012

 :  Unused methods are deleted.

|

**Version 1.0.1:** Date 19/04/2012

 :  Modifications to suit XML Travelgate library and group common elements.



