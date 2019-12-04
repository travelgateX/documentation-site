+++
title = "Change Log"
keywords = "intro"
search = "Hotel - Change Log"
sidebar = "mydoc_sidebar"
permalink = "/docs/hotel/change-log"
weight = 1
+++

**Version 1.0.22:** Date 30/09/2019

{{% release-notes-container type="a"%}}
* **Addition of tag AllowsNationality  in MetaData.** Adding AllowsNationality tag to MetaData response to inform if the supplier allows to receive the Nationality of the Holder of the booking.
{{% /release-notes-container %}}

~~~xml
<Generic>
    <AllowsNationality reviewDate = "06/09/2019">true</AllowsNationality>
    <RequiredNationality reviewDate = "06/09/2019">true</RequiredNationality>
    <AllowsOnRequest reviewDate = "06/09/2019">false</AllowsOnRequest>
</Generic>
~~~

{{% release-notes-container type="a"%}}
* **Addition of Holder element in Reservation, ReservationRead and Cancellation requests.** Adding Holder element tag to Reservation, ReservationRead and Cancellation requests. If the supplier allows, we would send this passenger as the Holder of the booking instead of picking the first guest.
{{% /release-notes-container %}}

~~~xml
<Holder title = "Miss" name = "test"  surname = "test"/>
~~~

{{% release-notes-container type="a"%}}
* **Addition of Title element for guests in Reservation request and ReservationRead response.** Adding Title element of guests to Reservation request and ReservationRead response.
{{% /release-notes-container %}}

~~~xml
<Guest roomCandidateId = "1" paxId = "1">
    <Title>Miss</Title>
    <GivenName>Test11</GivenName>
    <SurName>TestAp11</SurName>
</Guest>
~~~

{{% release-notes-container type="a"%}}
* **Addition of new payment type PayX.** Adding PayX as a payment type.
{{% /release-notes-container %}}

| **Code**	| **Description**			|
| ------------- | ----------------------------- |
|  PayX      	| The payment is managed by TravelgateX's payment system.			|

(You can find full payment types list at [Lists of Data](https://docs.travelgatex.com/legacy/docs/hotel/methods/listsdata/#payment-types)).

{{% release-notes-container type="a"%}}
* **Addition new error code type 302.** Adding code 302 for error Hotel Not Found in DescriptiveInfo.
{{% /release-notes-container %}}

(You can find full error codes list at [Lists of Data](https://docs.travelgatex.com/legacy/docs/hotel/methods/listsdata/#error-codes)).

**Version 1.0.22:** Date 09/07/2019

 * **Addition of the boolean DailyPrices to AvailRS.** By default DailyPrices is set to true. When set to true, if the supplier implements daily prices you will receive a list of daily prices for each room in the Avail response for the given date range. If set to false this information will not be included in the response.

 * **Addition of the boolean DailyRatePlans to AvailRS.** By default DailyRatePlans is set to true. When set to true, if the supplier implements daily rate plans you will receive a list of the available rate plans for each room in the Avail response for the given date range. If set to false this information will not be included in the response.

 *  **Added Mobile as a Rate Condition** In the avail response at Option level there is now an option to add "mobile" to the list of rate conditions.

 *  **Http Status Code 504 type as 105 Error.** If the supplier returns a httpStatusCode 504 this will register as error code 105.

 *  **New Metadata tags.**
    * **InformRoomDescription** indicates if the supplier returns a room description in their availability call. Found in MetaDataAvail.
    * **InformHotelName** indicates if the supplier returns the hotel name in their availability call. Found in MetaDataAvail.
    * **InformNRFRate** indicates if the rate is non refundable in the availability call. Found in MetaDataAvail.
    * **InformDailyPrice** indicates if the supplier returns daily prices in the availability call. Found in MetaDataAvail.
    * **InformDailyRatePlan** indicates if the supplier returns daily rate plans in their availability call. Found in MetaDataAvail.
    * **RequiredNationality** indicates if the nationality field in the AvailRQ is required. Found in MetaDataGeneric.

 * **Error Message Language Change.** Errors caught by the Avail Validator now return error messages in English instead of Spanish as they previously did.

|

 **Version 1.0.21:** Date 25/04/2018

 *  **CancelPolicies and fees returned at stage room in AvailRS.** Depending on the supplier, the information concerning CancelPolicies and fees can be displayed at room level. To receive the CancelPolicies at room level, it is necessary to send the tag RoomCancellationPolicies in the AvailRQ.
 *  **Property reservation number in ReservationRS, ReservationReadRS and ReservationListRS.** Depending on the supplier, you will receive the property reservation number in addition to the supplier locator.
 *  **IATA airport codes in DescriptiveInfoRS and HotelListRS** Depending on the supplier, you will receive the codes for the airports near a specific hotel.
 *  **New Metadata tags.** InformRoomCancelPolicies, InformRoomFees, ImplementsCombination and InformPropertyReservationNumber. 

|

**Version 1.0.20:** Date 11/12/2017

 *  **New tags Metadata: PaxTypeRangeInRoomCandidates**: Definition of the restrictions of the guests in the room.
 *  **New tags Metadata: AllowsPreferences**: Definition of the preferences that the provider allows in the request of the reservation.
 *  **New atribute in AgeRange/Age@type**: Type of guest according to the age range.
 *  **New filters in Reservation Request**: With this tag you can define preferences filters at the hotel or room level if the provider allows it.

|

 **Version 1.0.19:** Date 19/06/2017

 *  **Offers returned at stage room and fees at stage option in AvailRS.** Depending on the supplier, the information concerning offers can be displayed either at room level or at option level. Furthermore, we will show at stage option the information relative to fees from now on.
 
 *  **GroupCode in MarketListRS.** Use this option to see if the supplier groups different markets in a single group, so you can get the same prices/options if two markets belong to the same group.
 
 *  **UpgradeUTCDate in DescriptiveInfoRS.** With this new tag you can check the upgrade date of the picture in UTC format.
 
 *  **Added new rate conditions in AvailRS.** Specifically, publicServant and unemployed. 
 
 *  **Added 105 error type.** Used for communication errors.
 
 *  **New method MetaData.** This method provides information about the meta data of the supplier so that it can be effectively configured.
 
 *  **Added UpgradeUTCDate in DescriptiveInfoRS, HotelListRS, AvailDestinationTreeRS, GeographicDestinationTreeRS, CategoryListRS, MealPlanListRS, RoomListRS, CurrencyListRS and MarketListRS.** For each method, this tag was added to show when the information was last updated.
 
|
 
 **Version 1.0.18:** Date 31/10/2016

 :  Name (DailyRatePlan) in AvailRS.
 
 :  New method MarketList.
 
 :  AgeRange in StaticConfiguration.
 
 :  DestinationRegex in StaticConfiguration.
   
 |
 
 **Version 1.0.17:** Date 27/06/2016

 :  Code (Picture) in DescriptiveInfoRS.
  
 |
 
 **Version 1.0.16:** Date 03/05/2016

 :  Currency in AvailRQ.

 :  Markets in AvailRQ.

 :  NumberOfUnits in AvailRQ.

 :  ProviderCode in HotelListRS.

 :  NumMarketsAllowed in StaticConfiguration.

 :  InformTiket in StaticConfiguration.

 :  InformNumberOfUnits in StaticConfiguration.

 :  ImplementsDescriptiveInfoExtended in StaticConfiguration.
 
 |
 
 **Version 1.0.15:** Date 29/02/2016

 :  New BusinessRules (RoomType) in AvailRQ.

 :  ImplementsProviderLocatorCancel in StaticConfiguration.

 :  ImplementsClientLocatorCancel in StaticConfiguration.

|

**Version 1.0.14:** Date 01/02/2016

 :  ContinuationToken in Common Elements (use in HotelList call).

|

**Version 1.0.13:** Date 18/01/2016

 :  BusinessRules in AvailRQ.

 :  ImplementsBusinessRules in StaticConfiguration.

 :  OptionsQuota in Common-Elements.

 :  PropertyCategory in HotelList and DescriptiveInfo.

|

**Version 1.0.12:** Date 09/12/2015

 :  Nationality in Avail, Valuation, ModifyValuation and ModifyReservation request.

 :  New rate conditions: largeFamily and honeymoon.

 :  RequiredNationality in StaticConfiguration.

 :  Inform60Rate in StaticConfiguration.

 :  Inform65Rate in StaticConfiguration.

 :  InformCanaryResidentRate in StaticConfiguration

 :  InformBalearicResidentRate in StaticConfiguration.

 :  InformLargeFamilyRate in StaticConfiguration.

 :  InformHoneymoonRate in StaticConfiguration.

|

**Version 1.0.11:** Date 17/11/2015

 :  BusinessRule in AvailRQ.

 :  AvailableModifications in ReservationRead.

 :  ImplementsBusinessRule in StaticConfiguration.

 :  InformAvailableModificationsInReservationRead in StaticConfiguration. 

 :  GiataId.

|

**Version 1.0.10:** Date 29/09/2015

 :  OnRequest.

 :  DailyRatePlans.
 
 :  Remarks in Confirmation request.

 :  BedTypes.

 :  SharedBed.

 :  BlockOption.

 :  ExclusiveDeal.

 :  Offers in Avail.

 :  Fees in Valuation.

 :  CancelPoliciesDescription in Valuation.

 :  DeltaPrice in Confirmation.

 :  DescriptiveInfoExtended.

|

**Version 1.0.9:** Date 30/11/2014

 :  New Wiki look & Feel, now using Sphinx reST.

 :  Add hotel XSDs.

 :  Improvement documentation PaymentType, CardInfo and MasterCodes.

|

**Version 1.0.9:** Date 27/03/2014

 :  Modify booking.

| 

**Version 1.0.8:** Date 17/03/2014

 :  Bed information in AvailRS.

|

**Version 1.0.7:** Date 11/03/2013

 :  Product specification download.

 :  Added element geographical destination in hotel.

 :  Implemented new call: GeographicDestinationTree.

|

**Version 1.0.6:** Date 30/08/2012

 :  Implemented three new calls: ReservationList, RuntimeConfigurationand StaticConfiguration.

 :  Added attribute element level NuevaOpcion Offer.

 :  Appendix of countries and currencies.

|

**Version 1.0.5:** Date 30/07/2012

 :  Correcting errors in the documentation.

 :  Add Promotions / Specials Offers in disponibilidadRS option.

|

**Version 1.0.4:** Date 13/06/2012

 :  Larger PDI structure to charge hotel + ticket.

 :  Add ProveedorFacturacionExterna in confirmacionRS.

|

**Version 1.0.3:** Date 09/04/2012

 :  New type errors in Valuation.

|

**Version 1.0.2:** Date 20/02/2012

 :  AvailDestinationTree specified destinations only attackable on availability Added ISO country code in response Hotel.

|

**Version 1.0.1:** Date 11/01/2012

 :  Specified Common Elements Added Appendices.
