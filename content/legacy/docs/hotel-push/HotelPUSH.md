[api
docs](http://www.xmltravelgate.com/Docs/API-Specification/Main.html)

XML Travelgate Hotel PUSH API
=============================

Table Of Contents
-----------------

1.  Change Log
2.  Intro
3.  Audience
4.  Document Goals
5.  Connectivity
6.  Messages

    > 1.  Typical Exchange Message Scenario
    > 2.  Common Message Structure
    > 3.  Retrieve Messages
    >
    >     > 1.  Retrieve Static Content
    >     >
    >     >     > 1.  HotelRatePlanInventoryRetrieve
    >     >     >
    >     >     >     > 1.  HotelRatePlanInventoryRetrieveRQ
    >     >     >     > 2.  HotelRatePlanInventoryRetrieveRS
    >     >     >
    >     > 2.  Retrieve Rates
    >     >
    >     >     > 1.  HotelRatePlanRetrieve
    >     >     >
    >     >     >     > 1.  HotelRatePlanRetrieveRQ
    >     >     >     > 2.  HotelRatePlanRetrieveRS
    >     >     >
    >     > 3.  Retrieve Availability
    >     >
    >     >     > 1.  HotelAvailRetrieve
    >     >     >
    >     >     >     > 1.  HotelAvailRetrieveRQ
    >     >     >     > 2.  HotelAvailRetrieveRS
    >     >     >
    >     > 4.  Retrieve Reservations
    >     >
    >     >     > 1.  HotelResRetrieve
    >     >     >
    >     >     >     > 1.  HotelResRetrieveRQ
    >     >     >     > 2.  HotelResRetrieveRS
    >     >     >
    > 4.  Notify Messages
    >
    >     > 1.  Notifiy Rates
    >     >
    >     >     > 1.  HotelRatePlanNotif
    >     >     >
    >     >     >     > 1.  HotelRatePlanNotifRQ
    >     >     >     > 2.  HotelRatePlanNotifRS
    >     >     >
    >     > 2.  Notifiy Availability
    >     >
    >     >     > 1.  HotelAvailNotif
    >     >     >
    >     >     >     > 1.  HotelAvailNotifRQ
    >     >     >     > 2.  HotelAvailNotifRS
    >     >     >
7.  Full Body Messages

    > 1.  Full Retrieve Messages
    >
    >     > 1.  Full Retrieve Static Content
    >     >
    >     >     > 1.  Full HotelRatePlanInventoryRetrieveRQ
    >     >     > 2.  Full HotelRatePlanInventoryRetrieveRS
    >     >
    >     > 2.  Full Retrieve Rates
    >     >
    >     >     > 1.  Full HotelRatePlanRetrieveRQ
    >     >     > 2.  Full HotelRatePlanRetrieveRS
    >     >
    >     > 3.  Full Retrieve Availability
    >     >
    >     >     > 1.  Full HotelAvailRetrieveRQ
    >     >     > 2.  Full HotelAvailRetrieveRS
    >     >
    > 2.  Full Notif Messages
    >
    >     > 1.  Full Notif Rates
    >     >
    >     >     > 1.  Full HotelRatePlanNotifRQ
    >     >     > 2.  Full HotelRatePlanNotifRS
    >     >
    >     > 2.  Full Notif Availability
    >     >
    >     >     > 1.  Full HotelAvailNotifRQ
    >     >     > 2.  Full HotelAvailNotifRS
    >     >
8.  Certification Process
9.  Code Lists

    > 1.  Error Codes
    > 2.  Meal Plan Codes

10. FAQ

Change Log
----------

Version 0.9 Date 12/08/2013

-   Initial Release

Version 1.0 Date 04/09/2013

-   Added Revision History
-   Added Code List unified
-   Changed HotelRatePlan to HotelRatePlanInventoryRetrieve
-   Added HotelRatePlanRetrieve
-   Added HotelAvailRetrieve

Version 1.0.1 Date 16/09/2013

-   Documentation moved to Wiki format

Version 1.0.2 Date 28/09/2013

-   Added Typical Exchange Message Scenario section
-   HotelAvailNotif/request/AvailStatusMessages/AvailStatusMessage/Statu
    <sApplicationControl@RatePlanCode> is not mandatory
-   Added more detailed information above difference in notify rates per
    guests or per room.

Version 1.0.3 Date 08/11/2013

-   Added Certification Process section

Version 1.0.4 Date 18/11/2013

-   Added Samples of Messages HotelRatePlanNotif

Version 1.0.5 Date 22/11/2013

-   Added Start/End dates in Suplements
-   Edited LenghtsOfStay and RestrictionStatus in HotelAvailNotif and
    HotelAvailRetrieve

Version 1.0.6 Date 16/12/2013

-   Added FAQ section

Version 1.0.7 Date 03/06/2014

-   Added Full Body Messages and Derived Rates.

toc

XML Travelgate Hotel PUSH API
-----------------------------

The XML Travelgate Hotel PUSH API allows Channel Managers or Hotel Rate
Distributors (Providers) to distribute rates and availability over a
range of Hotel Booking Channels (Sellers).

toc

Audience
--------

This document is intended to a Provider technical audience. Prior
knowledge of XML is required. Although it is recommended to have prior
knowledge of XML integrations with other Booking Channels.

toc

Document Goals
--------------

This document aims to explain all aspects of **XML Travelgate**'s Hotel
API PUSH specification. In the next pages you can find detailed
explanation of all Nodes, Elements and Attributes of every aspect of the
API specification.

toc

Connectivity
------------

XTG HubPush provides an OTA (OpenTravel Alliance) Web Service which
publishes the required methods that allows Channel Managers or Rate
Distributors (In advance Providers) to load hotel product information
(Availability / Rates/ Inventory) into extranet clients (Normally Online
Travel Agencies) (In advance Sellers).

Public Soap WebService Methods:

https://pushprovider.xmltravelgate.com/Service/Hotel/Provider/Provide
rGEN.svc?wsdl\_

Provider should contact with Seller to get its credentials.

toc

Messages
--------

List of messages with OTA xsd structure used:

Method OTA RQ OTA RS Type Description HotelRatePlanInventoryRetrieve
OTA\_HotelRatePlanRQ OTA\_HotelRatePlanRS Retrieve Retrieve static
information of hotel seller inventory HotelRatePlanRetrieve
OTA\_HotelRatePlanRQ OTA\_ HotelRatePlanRS Retrieve Retrieve rates of
hotel seller HotelAvailRetrieve OTA\_HotelAvailGetRQ
OTA\_HotelAvailGetRS Retrieve Retrieve availability of hotel seller
HotelResRetrieve OTA\_ReadRQ OTA\_HotelResRS Retrieve Retrieve
reservations from user seller HotelRatePlanNotif
OTA\_HotelRatePlanNotifRQ OTA\_HotelRatePlanNotifRS Notify Notify rates
to hotel seller HotelAvailNotif OTA\_HotelAvailNotifRQ
OTA\_HotelAvailNotifRS Notify Notify availability to hotel seller
HotelResRetrieve OTA\_HotelResRetrieveRQ OTA\_HotelResRetrieveRS
Retrieve Retrieve reservations from user seller

toc

Typical Exchange Message Scenario
---------------------------------

Typical use case of message exchange flow between Providers and Sellers
can be resumed as:

1.  **Synchronize Hotelier product**:

    > 1.  Providers retrieve static inventory (Hotel/Rates/Rooms) from
    >     Seller using HotelRatePlanInventoryRetrieve in order to map
    >     Hotelier inventory into its system.
    > 2.  Providers Push/Notif Rate information to Seller using
    >     HotelRatePlanNotif in order to synchronize Hotelier rates.
    > 3.  Providers Push/Notif Availability information to Seller using
    >     HotelAvailNotif in order to synchronize Hotelier availability.

2.  **Synchronize Bookings (Confirmations / Cancellations):**

    > 1.  Sellers can Push/Notify reservations to Providers using
    >     Provider native specification (Specification should be
    >     provided to XMLTravelGate).
    > 2.  Providers can retrieve reservations using HotelRatePlanNotif.
    > 3.  Use both systems described above.

3.  **Optionally, check if synchronization is correct:**

    > 1.  Providers retrieve dynamic rates and availability using
    >     HotelRatePlanRetrieve and HotelAvailRetrieve.
    > 2.  Providers retrieve valuated availability using HotelAvail
    >     (Currently this functionality is available only in Seller's
    >     extranet)

toc

Retrieve Messages
-----------------

Providers requests Sellers to retrieve data (Negotiation is started by
Providers).

toc

HotelRatePlanInventoryRetrieve
------------------------------

Providers will send an HotelRatePlanInventoryRetrieveRQ message to
retrieve a list of hotels, rates and rooms and their configurations. XTG
will return a list of all active rooms and configurations.

toc

HotelRatePlanInventoryRetrieveRQ
--------------------------------

:

    <HotelRatePlanInventoryRetrieve>
      <request PrimaryLangID = "ES">
        <POS>
          <Source>
            <RequestorID ID = "Provider1"/>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"/>
            </BookingChannel>
            <TPA_Extensions>
              <Param key = "onlyActive" value = "0"/>
            </TPA_Extensions>
          </Source>
        </POS>
        <RatePlans>
          <RatePlan>
            <HotelRef HotelCode = "1"/>
          </RatePlan>
        </RatePlans>
      </request>
    </HotelRatePlanInventoryRetrieve>

Element Number Type Description HotelRatePlan/request 1 Root Node
@PrimaryLangID 1 String ISO Code Language POS/Source/TPA\_Extensions
0..1 Optional, empty only active inventory will be recieved. Param 1
@key 1 String onlyActive @value 1 String 1 - You will recieve all active
inventory data. 0 - Active and deactivated inventory will be recieved.
(Same case than wihout TPA\_Extensions node.)
RatePlans/RatePlan/HotelRef 0..1 Contains hotel filter @HotelCode 0..1
String If the hotel is not specified, it returns Rooms and Rates of all
user’s hotels.

toc

HotelRatePlanInventoryRetrieveRS
--------------------------------

### Example for RatePlan

:

    <HotelRatePlanInventoryRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
        <HotelRatePlanInventoryRetrieveResult Version = "0">
            <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
            <RatePlans HotelCode = "1" HotelName = "Hotel Travelgate" xmlns = "http://www.opentravel.org/OTA/2003/05">
                <RatePlan RatePlanCode = "PACK" RatePlanType = "11" YieldableIndicator = "false" CurrencyCode = "EUR" RatePlanStatusType = "Active">
                    <BookingRules>
                        <BookingRule Code = "1 Noche">
                            <CancelPenalties>
                                <CancelPenalty NonRefundable = "false">
                                    <Deadline OffsetTimeUnit = "Day" OffsetUnitMultiplier = "1" OffsetDropTime = "BeforeArrival"/>
                                    <AmountPercent NmbrOfNights = "1,00"/>
                                </CancelPenalty>
                            </CancelPenalties>
                        </BookingRule>
                        <BookingRule>
                            <Viewerships>
                                <Viewership>
                                    <LocationCodes LocationCodesInclusive = "true">
                                        <LocationCode CountryCode = "ES"/>
                                    </LocationCodes>
                                </Viewership>
                                <Viewership>
                                    <LocationCodes LocationCodesInclusive = "false"/>
                                </Viewership>
                            </Viewerships>
                        </BookingRule>
                    </BookingRules>
                    <Description>
                        <Text>Packaged Rate</Text>
                    </Description>
                    <Rates>
                        <Rate>
                            <AdditionalGuestAmounts>
                                <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "12"/>
                                <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "12"/>
                                <AdditionalGuestAmount AgeQualifyingCode = "7" MaxAge = "7"/>
                            </AdditionalGuestAmounts>
                            <MealsIncluded MealPlanCodes = "8"/>
                        </Rate>
                    </Rates>
                    <SellableProducts>
                        <SellableProduct InvCode = "STD1" InvType = "ROOM" InvStatusType = "Active">
                            <GuestRoom>
                                <Quantities StandardNumBeds = "2"/>
                                <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                                <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "8"/>
                                <Description>
                                    <Text>Standard</Text>
                                </Description>
                            </GuestRoom>
                        </SellableProduct>
                        <SellableProduct InvCode = "STD2" InvType = "ROOM" InvStatusType = "Deactivated">
                            <GuestRoom>
                                <Quantities StandardNumBeds = "2"/>
                                <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                                <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "8"/>
                                <Description>
                                    <Text>Standard</Text>
                                </Description>
                            </GuestRoom>
                        </SellableProduct>
                        <SellableProduct InvCode = "STD2" InvType = "ROOM" InvStatusType = "Deactivated">
                            <GuestRoom>
                                <Quantities StandardNumBeds = "2"/>
                                <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                                <Description>
                                    <Text>Standard</Text>
                                </Description>
                            </GuestRoom>
                        </SellableProduct>
                    </SellableProducts>
                </RatePlan>
            </RatePlans>
        </HotelRatePlanInventoryRetrieveResult>
    </HotelRatePlanInventoryRetrieveResponse>

If your Rate has information about meals included in rate, this will be
shown in MealsIncluded tag.

In previous example we receive one hotel, one rate and 2 rooms. One of
the rooms appears twice because each appearance sets the different
occupancies. STD2 room has 2 possible occupations: 2 adults + 1 child or
2 adults.

### Example for Derived RatePlan

:

    <HotelRatePlanInventoryRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelRatePlanInventoryRetrieveResult Version = "0">
        <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
        <RatePlans HotelCode = "1" HotelName = "Hotel Test Pruebas Travelgate " xmlns = "http://www.opentravel.org/OTA/2003/05">
          <RatePlan RatePlanCode = "DRVT" BaseRatePlanCode = "SRATE2" RatePlanStatusType = "Active">
            <Description>
              <Text>Derivada Test</Text>
            </Description>
          </RatePlan>
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" RatePlanStatusType = "Active">
            <BookingRules>
              <BookingRule>
                <CancelPenalties>
                  <CancelPenalty NonRefundable = "false">
                    <Deadline OffsetTimeUnit = "Day" OffsetUnitMultiplier = "10" OffsetDropTime = "BeforeArrival"/>
                    <AmountPercent Amount = "2.00"/>
                  </CancelPenalty>
                </CancelPenalties>
              </BookingRule>
              <BookingRule>
                <Viewerships>
                  <Viewership>
                    <LocationCodes LocationCodesInclusive = "true">
                      <LocationCode CountryCode = "ES"/>
                    </LocationCodes>
                  </Viewership>
                  <Viewership>
                    <LocationCodes LocationCodesInclusive = "false"/>
                  </Viewership>
                </Viewerships>
              </BookingRule>
            </BookingRules>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
        </RatePlans>
      </HotelRatePlanInventoryRetrieveResult>
    </HotelRatePlanInventoryRetrieveResponse>

Element Number Type Description
HotelRatePlanResponse/HotelRatePlanResult 1 Root Node Success 0..1
Should only be present if it was a successful response. The Errors node
should not be present if the Success node is present. RatePlans 0..1
Present when sucess @HotelCode 1 String Hotel code whose information is
provided by the method @HotelName 1 String Hotel name RatePlans/RatePlan
0..n Present when rates exists @RatePlanCode 1 String Rate plan code
@RatePlanStatusType 1 String Active or Deactivated @RatePlanType 0..1
Integer OTA RPT Code (11 - Package) @YieldableIndicator 0..1 Boolean
Used to indicate the rate plan is subject to yield management logic.
When false, the rate plan is not yieldable. When true or it's not
returned, the rate plan is yieldable. @CurrencyCode 0..1 String ISO
Currency (EUR). Only null for derived rates <_@BaseRatePlanCode> 0..1
String Rate plan code of the base rate plan. Only returned for derived
rates. <_@RatePlanStatusType> 1 String Indicates if the rate plan is
active or not for this dates. Possible values: "Active", "Deactivated".
RatePlans/RatePlan/Description/Text 1 Description of rate.
RatePlans/BookingRules 0..1 Present if exists booking rules for the
given RatePlan. BookingRules/BookingRule 1..n Booking rules. @Code 0..1
String Code of the booking rule (empty if are viewships conditions
BookingRule/CancelPenalties 1 Cancel penalties of the current booking
rule. CancelPenalties/CancelPenalty 1..n Cancel penalty. @NonRefundable
1 Boolean Indicates if the rateplan is refundable or not.
CancelPenalty/Deadline 1 Contains information about the the deadline of
the cancel penalty. @OffsetTimeUnit 1 String Indicates the units of time
that apply to the deadline. @OffsetUnitMultiplier 1 Integer The number
of units of DeadlineTimeUnit. @OffsetDropTime 1 String Indicating when
the deadline drop time goes into effect. CancelPenalty/AmountPercent 1
Contains information about the the deadline of the cancel penalty.
@NmbrOfNights 0..1 Integer Number of nights that will be charged in case
of cancellation applying the current cancel penalty. NmbrOfNights,
Percent or Amount must be present. @Percent 0..1 Decimal Percent of the
total amount that will be charged in case of cancellation applying the
current cancel penalty. NmbrOfNights, Percent or Amount must be present.
@Amount 0..1 Decimal Amount that will be charged in case of cancellation
applying the current cancel penalty. NmbrOfNights, Percent or Amount
must be present. @CurrencyCode 0..1 String Currency code of the amount.
Must be present if amount is present. BookingRule/Viewerships 0..1
Present if exits viewerships conditions
BookingRule/Viewerships/Viewership 1..n
BookingRule/Viewerships/Viewership/LocationCodes 1 One node for each
viewership condition @LocationCodesInclusive 1 Boolean When its true
this rate can be request for next countryCode, when false can not be
requested from this country.
BookingRule/Viewerships/Viewership/LocationCodes/LocationCode 0 .. 1 If
is missing, applies to all countryCode again the other viewership
condition. @CountryCode 1 String Country ISO2 code from can or can not
be requested this rate. RatePlan/Rate 0..1 Node that contains
information about the rate. Only null for derived rates
Rate/AdditionalGuestAmounts 1 Node that contains static information
about additional guests. AdditionalGuestAmounts/AdditionalGuestAmount
1..n Static information about additional guests. @AgeQualifyingCode 1
String Age qualifying code of the additional guest. @MaxAge 1 Integer
Max age not inclusive of the additional guest.
RatePlans/RatePlan/Rates/Rate/MealsIncluded 0..1 Present if board is
included with this rate. @MealPlanCodes 1 Integer OTA MPT Code
RatePlans/RatePlan/SellableProducts 0..1 List of sellable products. Null
for derived rates RatePlans/RatePlan/SellableProducts/SellableProduct
0..n Present if rooms associed with this rate @InvCode 1 Integer
Sellable Product Code @InvType 1 Integer Sellable product type (ROOM)
@InvStatusType 1 String Active or Deactivated
RatePlans/RatePlan/SellableProduct/GuestRoom 1..n
RatePlans/RatePlan/SellableProduct/GuestRoom/Quantities 1
@StandardNumBeds 1 Integer Standard occupation of room
RatePlans/RatePlan/SellableProduct/GuestRoom/Occupancy 1 @MinOccupancy 1
Integer Min occupation @MaxOccupancy 1 Integer Max occupation
@AgeQualifyingCode 1 Integer (10 - Adult,8 - Child,7 - Infant)
RatePlans/RatePlan/SellableProduct/GuestRoom/Description/Text 1 String
Room description

toc

HotelRatePlanRetrieve
---------------------

Providers will send an HotelRatePlanRetrieveRQ message to retrieve a
complete break down of rates. XTG will return break down of hotel /
rates / rooms.

toc

HotelRatePlanRetrieveRQ
-----------------------

:

    <HotelRatePlanRetrieve>
       <request>
          <POS>
              <Source>
                 <RequestorID ID="Provider1"></RequestorID>
                <BookingChannel > 
                     <CompanyName Code="ClientTravelAgency1"/>
                 </BookingChannel>
                <TPA_Extensions>
                   <Param key = "onlyActive" value = "0"/>
                </TPA_Extensions>
             </Source>
         </POS>
         <RatePlans>
            <RatePlan>
               <DateRange Start="2013-12-20" End="2013-12-25"/>
               <RatePlanCandidates>
                  <RatePlanCandidate RatePlanCode="BAR"></RatePlanCandidate>
              </RatePlanCandidates>
              <HotelRef HotelCode="12" />
          </RatePlan>
         </RatePlans>
       </request>
    </HotelRatePlanRetrieve>

Element Number Type Description HotelRatePlanRetrieve/request 1 Root
Node POS/Source/TPA\_Extensions 0..1 Optional, empty only active
RatePlans/Rooms will be received. Param 1 @key 1 String onlyActive
@value 1 String 1 - You will receive all active RatePlans/Rooms data.
0 - Active and deactivated RatePlans/Rooms will be received. (Same case
than wihout TPA\_Extensions node.) RatePlans/RatePlan/DateRange 1
Contains date filter @Start 1 Date Start date to search rates @End 1
Date End date to search rates RatePlans/RatePlan/HotelRef 1 Contains
hotel filter @HotelCode 1 String Hotel date to search rates
RatePlans/RatePlan/RatePlanCandidates/RatePlanCandidate 0..1 Contains
rate filter @RatePlanCode 1 String Rate Plan Code to search rates

toc

HotelRatePlanRetrieveRS
-----------------------

### Example for RatePlan

:

    <HotelRatePlanRetrieveResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
     <HotelRatePlanRetrieveResult Version="0">
        <RatePlans HotelCode="12" xmlns="http://www.opentravel.org/OTA/2003/05">
           <RatePlan RatePlanType="11" RatePlanCode="LOWCOST" RatePlanStatusType="Active">
          <Rates>
             <Rate Start="2013-12-20" End="2013-12-20">
            <BaseByGuestAmts>
               <BaseByGuestAmt AmountAfterTax="300.00" CurrencyCode="EUR" NumberOfGuests="3"/>
            </BaseByGuestAmts>
            <AdditionalGuestAmounts>
               <AdditionalGuestAmount MaxAdditionalGuests="1" AgeQualifyingCode="8" Amount="40.00" CurrencyCode="EUR"/>
               <AdditionalGuestAmount MaxAdditionalGuests="2" AgeQualifyingCode="8" Amount="20.00" CurrencyCode="EUR"/>
            </AdditionalGuestAmounts>
            <MealsIncluded MealPlanCodes="7"/>
             </Rate>
          </Rates>
          <Supplements>
             <Supplement Start="2013-12-20" End="2013-12-20" AgeQualifyingCode="10" CurrencyCode="EUR" Amount="35.00" SupplementType="Board" InvCode="12"/>
             <Supplement Start="2013-12-20" End="2013-12-20" AgeQualifyingCode="8" CurrencyCode="EUR" Amount="20.00" SupplementType="Board" InvCode="12"/>
          </Supplements>
          <SellableProducts>
             <SellableProduct InvCode="JUN_1" InvType="ROOM" InvStatusType="Active"/>
          </SellableProducts>
          <Commission Percent="15.00"/>
           </RatePlan>
           <RatePlan  RatePlanType="11" RatePlanCode="LOWCOST" RatePlanStatusType="Active">
          <Rates>
             <Rate Start="2013-12-21" End="2013-12-21">
            <BaseByGuestAmts>
               <BaseByGuestAmt AmountAfterTax="300.00" CurrencyCode="EUR" NumberOfGuests="3"/>
            </BaseByGuestAmts>
            <AdditionalGuestAmounts>
               <AdditionalGuestAmount MaxAdditionalGuests="1" AgeQualifyingCode="8" Amount="40.00" CurrencyCode="EUR"/>
               <AdditionalGuestAmount MaxAdditionalGuests="2" AgeQualifyingCode="8" Amount="20.00" CurrencyCode="EUR"/>
            </AdditionalGuestAmounts>
            <MealsIncluded MealPlanCodes="7"/>
             </Rate>
          </Rates>
          <Supplements>
             <Supplement Start="2013-12-21" End="2013-12-21" AgeQualifyingCode="10" CurrencyCode="EUR" Amount="35.00" SupplementType="Board" InvCode="12"/>
             <Supplement Start="2013-12-21" End="2013-12-21" AgeQualifyingCode="8" CurrencyCode="EUR" Amount="20.00" SupplementType="Board" InvCode="12"/>
          </Supplements>
          <SellableProducts>
             <SellableProduct InvCode="JUN_1" InvType="ROOM" InvStatusType="Active"/>
          </SellableProducts>
          <Commission Percent="15.00"/>
           </RatePlan>
           <RatePlan RatePlanType="11" RatePlanCode="LOWCOST" RatePlanStatusType="Deactivated">
          <Rates>
             <Rate Start="2013-12-22" End="2013-12-22">
            <BaseByGuestAmts>
               <BaseByGuestAmt AmountAfterTax="300.00" CurrencyCode="EUR" NumberOfGuests="3"/>
            </BaseByGuestAmts>
            <AdditionalGuestAmounts>
               <AdditionalGuestAmount MaxAdditionalGuests="1" AgeQualifyingCode="8" Amount="40.00" CurrencyCode="EUR"/>
               <AdditionalGuestAmount MaxAdditionalGuests="2" AgeQualifyingCode="8" Amount="20.00" CurrencyCode="EUR"/>
            </AdditionalGuestAmounts>
            <MealsIncluded MealPlanCodes="7"/>
             </Rate>
          </Rates>
          <Supplements>
             <Supplement Start="2013-12-22" End="2013-12-22" AgeQualifyingCode="10" CurrencyCode="EUR" Amount="35.00" SupplementType="Board" InvCode="12"/>
             <Supplement Start="2013-12-22" End="2013-12-22" AgeQualifyingCode="8" CurrencyCode="EUR" Amount="20.00" SupplementType="Board" InvCode="12"/>
          </Supplements>
          <SellableProducts>
             <SellableProduct InvCode="JUN_1" InvType="ROOM" InvStatusType="Active"/>
          </SellableProducts>
          <Commission Percent="15.00"/>
           </RatePlan>
           <RatePlan RatePlanType="11" RatePlanCode="LOWCOST" RatePlanStatusType="Deactivated">
          <Rates>
             <Rate Start="2013-12-23" End="2013-12-23">
            <BaseByGuestAmts>
               <BaseByGuestAmt AmountAfterTax="300.00" CurrencyCode="EUR" NumberOfGuests="3"/>
            </BaseByGuestAmts>
            <AdditionalGuestAmounts>
               <AdditionalGuestAmount MaxAdditionalGuests="1" AgeQualifyingCode="8" Amount="40.00" CurrencyCode="EUR"/>
               <AdditionalGuestAmount MaxAdditionalGuests="2" AgeQualifyingCode="8" Amount="20.00" CurrencyCode="EUR"/>
            </AdditionalGuestAmounts>
            <MealsIncluded MealPlanCodes="7"/>
             </Rate>
          </Rates>
          <Supplements>
             <Supplement Start="2013-12-23" End="2013-12-23" AgeQualifyingCode="10" CurrencyCode="EUR" Amount="35.00" SupplementType="Board" InvCode="12"/>
             <Supplement Start="2013-12-23" End="2013-12-23" AgeQualifyingCode="8" CurrencyCode="EUR" Amount="20.00" SupplementType="Board" InvCode="12"/>
          </Supplements>
          <SellableProducts>
             <SellableProduct InvCode="JUN_1" InvType="ROOM" InvStatusType="Active"/>
          </SellableProducts>
          <Commission Percent="15.00"/>
           </RatePlan>
           <RatePlan RatePlanType="11" RatePlanCode="LOWCOST" RatePlanStatusType="Deactivated">
          <Rates>
             <Rate Start="2013-12-24" End="2013-12-24">
            <BaseByGuestAmts>
               <BaseByGuestAmt AmountAfterTax="300.00" CurrencyCode="EUR" Type="25"/>
            </BaseByGuestAmts>
            <AdditionalGuestAmounts>
               <AdditionalGuestAmount MaxAdditionalGuests="1" AgeQualifyingCode="8" Amount="40.00" CurrencyCode="EUR"/>
               <AdditionalGuestAmount MaxAdditionalGuests="2" AgeQualifyingCode="8" Amount="20.00" CurrencyCode="EUR"/>
            </AdditionalGuestAmounts>
            <MealsIncluded MealPlanCodes="7"/>
             </Rate>
          </Rates>
          <Supplements>
             <Supplement Start="2013-12-24" End="2013-12-24" AgeQualifyingCode="10" CurrencyCode="EUR" Amount="35.00" SupplementType="Board" InvCode="12"/>
             <Supplement Start="2013-12-24" End="2013-12-24" AgeQualifyingCode="8" CurrencyCode="EUR" Amount="20.00" SupplementType="Board" InvCode="12"/>
          </Supplements>
          <SellableProducts>
             <SellableProduct InvCode="JUN_1" InvType="ROOM" InvStatusType="Active"/>
          </SellableProducts>
          <Commission Percent="15.00"/>
           </RatePlan>
           <RatePlan RatePlanType="11" RatePlanCode="LOWCOST" RatePlanStatusType="Deactivated">
          <Rates>
             <Rate Start="2013-12-25" End="2013-12-25">
            <BaseByGuestAmts>
               <BaseByGuestAmt AmountAfterTax="300.00" CurrencyCode="EUR" Type="25" />
            </BaseByGuestAmts>
            <AdditionalGuestAmounts>
               <AdditionalGuestAmount MaxAdditionalGuests="1" AgeQualifyingCode="8" Amount="40.00" CurrencyCode="EUR"/>
               <AdditionalGuestAmount MaxAdditionalGuests="2" AgeQualifyingCode="8" Amount="20.00" CurrencyCode="EUR"/>
            </AdditionalGuestAmounts>
            <MealsIncluded MealPlanCodes="7"/>
             </Rate>
          </Rates>
          <Supplements>
             <Supplement Start="2013-12-25" End="2013-12-25" AgeQualifyingCode="10" CurrencyCode="EUR" Amount="35.00" SupplementType="Board" InvCode="12"/>
             <Supplement Start="2013-12-25" End="2013-12-25" AgeQualifyingCode="8" CurrencyCode="EUR" Amount="20.00" SupplementType="Board" InvCode="12"/>
          </Supplements>
          <SellableProducts>
             <SellableProduct InvCode="JUN_1" InvType="ROOM" InvStatusType="Active"/>
          </SellableProducts>
          <Commission Percent="15.00"/>
           </RatePlan>
        </RatePlans>
     </HotelRatePlanRetrieveResult>
    </HotelRatePlanRetrieveResponse>

Gets the Rate BAR for the Hotel 12 from 2013-12-20 to 2013-12-25. In
this case, the rate LOWCOST has two rooms associated, you will receive a
RatePlan for each day-room-rate.

### Example for Derived RatePlan

:

    <HotelRatePlanRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelRatePlanRetrieveResult Version = "0">
        <RatePlans HotelCode = "1" xmlns = "http://www.opentravel.org/OTA/2003/05">
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Active">
            <Rates>
              <Rate Start = "2014-07-01" End = "2014-07-01"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Active">
            <Rates>
              <Rate Start = "2014-07-02" End = "2014-07-02"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2014-07-03" End = "2014-07-03"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2014-07-04" End = "2014-07-04"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2014-07-05" End = "2014-07-05"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
        </RatePlans>
      </HotelRatePlanRetrieveResult>
    </HotelRatePlanRetrieveResponse>

For a derived rate you will not receive the rooms associated. Derived
rates have associated all the rooms from the base rate plan.

Element Number Type Description
HotelRatePlanRetrieveResponse/HotelRatePlanRetrieveResult 1 Root Node
Success 0..1 Should only be present if it was a successful response. The
Errors node should not be present if the Success node is present.
RatePlans 0..1 Present when sucess @HotelCode 1 String Hotel code whose
information is provided by the method RatePlans/RatePlan 0..1 Present if
rate exists @RatePlanType 0..1 Integer OTA RPT Code (11 -Package)
@RatePlanCode 1 String Rate code @RatePlanStatusType 1 String Active or
Deactivated @BaseRatePlanCode 0..1 String Rate code of the base
RatePlan. Only used for derived rates @AdjustedPercentage 0..1 Decimal
The percentage off the base rate plan amount used to determine the price
of this derived rate plan. Only used for derived rates @AdjustedAmount
0..1 Decimal The amount which should be added to the base rate plan to
determine the price of this derived rate plan. Only used for derived
rates @AdjustUpIndicator 0..1 Boolean When true, the adjusted amount or
adjusted percentage is added to the amount specified for the base rate
plan to determine the derived rate amount. When false, the adjusted
amount or adjusted percentage is subtracted from the amount specified
for the base rate plan to determine the derived rate amount. Only used
for derived rates RatePlans/RatePlan/Rates/Rate 1 @Start 1 Date Start
date of rate @End 1 Date Start date of rate
RatePlans/RatePlan/Rates/Rate/BaseByGuestAmts 0..1 Not used for derived
rates RatePlans/RatePlan/Rates/Rate/BaseByGuestAmts/BaseByGuestAmt 1..n
@AmountAfterTax 1 Decimal Total amount for @NumberOfGuests by day
indicated @NumberOfGuests 0..1 Integer How many adults are the
@AmountAfterTax for day indicated. If @NumberOfGuests is not informed
then @Type must be informed @Type 0..1 Integer Indicates amounts are per
Room instead per Pax. If @Type is not informed or @Type\<\>25 then
@NumberOfGuests must be informed. OTA CHG Code (25 - Per room)
@CurrencyCode 1 String ISO Currency (EUR)
RatePlans/RatePlan/Rates/Rate/AdditionalGuestAmounts 0..1 RatePlans/Ra
tePlan/Rates/Rate/AdditionalGuestAmounts/AdditionalGuestAmount 1..n
@MaxAdditionalGuests 1 Integer Indicates the number of guest to apply
additional price, not is the max of guests, for example, if its 2, is
for the second pax not to 2 paxes. @Type 0..1 String OTA
AmountDeterminationType. If not specified then the price is a suplement,
if @Type is Exclusive then the the price is absolute. @AgeQualifyingCode
1 Integer (10 - Adult,8 - Child,7 - Infant) @Amount 1 Decimal Price for
each additional pax @CurrencyCode 1 String ISO Currency (EUR)
RatePlans/RatePlan/Rates/Rate/MealsIncluded 0..1 Present if meal
included @MealPlanCodes 1 Integer OTA MPT Code
RatePlans/RatePlan/Supplements 0..1 Present if supplements by board
exists RatePlans/RatePlan/Supplements/Supplement 1..n @Start 1 Date
Start date of this supplement @End 1 Date End date of this supplement
@AgeQualifyingCode 1 Integer Age qualifyingCode which affects this
supplement (10 - Adult,8 - Child,7 - Infant) @CurrencyCode 1 String ISO
Currency (EUR) @Amount 1 Decimal Amount of supplement @SupplementType 1
String (Board) @InvCode 1 String OTA MPT Code if @SupplementType is
Board RatePlans/RatePlan/SellableProducts 0..1 List of sellable
products. Null for derived rates.
RatePlans/RatePlan/SellableProducts/SellableProduct 1..n @InvCode 1
Integer Sellable Product Code @InvType 1 Integer Sellable product type
(ROOM) @InvStatusType 1 String Active or Deactivated
RatePlans/RatePlan/Description/Text 1 String Rate description

toc

HotelAvailRetrieve
------------------

Providers will send an HotelAvailRetrieveRQ message to retrieve a
complete break down of availability. XTG will return break down of hotel
/ rates / rooms.

toc

HotelAvailRetrieveRQ
--------------------

:

    <HotelAvailRetrieve>
       <request>
          <POS>
             <Source>
                <RequestorID ID="Provider1"></RequestorID>
                <BookingChannel> 
                      <CompanyName Code="ClientTravelAgency1"/>      
                </BookingChannel>
                <TPA_Extensions>
                   <Param key = "onlyActive" value = "0"/>
                </TPA_Extensions>
             </Source>
          </POS>
          <HotelAvailRequests>
             <HotelAvailRequest>
                <DateRange Start="2013-12-20" End="2013-12-25"/>
                <HotelRef HotelCode="12" />
                <RatePlanCandidates>
                   <RatePlanCandidate RatePlanCode="BAR"></RatePlanCandidate>
                </RatePlanCandidates>
             </HotelAvailRequest>
          </HotelAvailRequests>
       </request>
    </HotelAvailRetrieve>

Element Number Type Description POS/Source/TPA\_Extensions 0..1
Optional, empty only active RatePlans/Rooms will be recieved. Param 1
@key 1 String onlyActive @value 1 String 1 - You will recieve all active
RatePlans/Rooms data. 0 - Active and deactivated RatePlans/Rooms will be
recieved. (Same case than wihout TPA\_Extensions node.)
HotelAvailRetrieve/request/HotelAvailRequests/HotelAvailRequest 1 Root
Node DateRange 1 Contains date filter @Start 1 Date Start date to search
rates @End 1 Date End date to search rates HotelRef 1 Contains hotel
filter @HotelCode 1 String Hotel date to search rates RatePlanCandidates
0..1 If exists, contains rate filter
RatePlanCandidates/RatePlanCandidate 1..n @RatePlanCode 1 String Rate
Plan Code to search rates

toc

HotelAvailRetrieveRS
--------------------

### Example for RatePlan

:

    <HotelAvailRetrieveResponse>
       <HotelAvailRetrieveResult>
       <Success/>
       <AvailStatusMessages HotelCode="12">
         <AvailStatusMessage BookingLimit="9" BookingSold="0">
             <StatusApplicationControl Start="2013-12-20" End="2013-12-25" RatePlanCode="BAR" InvCode="APT" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="false"  Fri="true" Sat="true" Sun="true"/>
             <LengthsOfStay ArrivalDateBased="true">
           <LengthOfStay Time="2" TimeUnit="Day" MinMaxMessageType="MinLOS"/>
           <LengthOfStay Time="8" TimeUnit="Day" MinMaxMessageType="MaxLOS"/>
             </LengthsOfStay>
             <RestrictionStatus Status="Open" SellThroughOpenIndicator="false" MinAdvancedBookingOffset="5"/>
         </AvailStatusMessage>
         <AvailStatusMessage BookingLimit="12" BookingSold="2">
            <StatusApplicationControl Start="2013-12-20" End="2013-12-21"   RatePlanCode="LOWCOST" InvCode="JUN_1" InvType="ROOM" Mon="false" Tue="false" Weds="false" Thur="false" Fri="true" Sat="true" Sun="false"/>
            <RestrictionStatus Restriction="Master" Status="Close"/>
         </AvailStatusMessage>
         <AvailStatusMessage BookingLimit="12" BookingSold="2">
        <StatusApplicationControl Start="2013-12-22" End="2013-12-25" RatePlanCode="LOWCOST" InvCode="JUN_1" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="false" Fri="false" Sat="false" Sun="true"/>
        <LengthsOfStay ArrivalDateBased="true">
               <LengthOfStay Time="3" TimeUnit="Day" MinMaxMessageType="MinLOS"/>
           <LengthOfStay Time="9" TimeUnit="Day" MinMaxMessageType="MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Status="Close" Restriction="Arrival"/>
         </AvailStatusMessage>
       <AvailStatusMessage BookingLimit="12" BookingSold="2">
         <StatusApplicationControl Start="2013-12-20" End="2013-12-25" RatePlanCode="LOWCOST" InvCode="STD1" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="false" Fri="true" Sat="true" Sun="true"/>
         <LengthsOfStay ArrivalDateBased="false">
            <LengthOfStay Time="1" TimeUnit="Day" MinMaxMessageType="MinLOS"/>
            <LengthOfStay Time="2" TimeUnit="Day" MinMaxMessageType="MaxLOS"/>
            </LengthsOfStay>
        <RestrictionStatus Status="Open" SellThroughOpenIndicator="false" MinAdvancedBookingOffset="6" MaxAdvancedBookingOffset="999"/>
        </AvailStatusMessage>
         <AvailStatusMessage>
         <StatusApplicationControl Start="2013-12-26" End="2013-12-27" RatePlanCode="LOWCOST" InvCode="STD1" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="false" Fri="true" Sat="true" Sun="true"/>
          <RestrictionStatus Status="Open" SellThroughOpenIndicator="false" MaxAdvancedBookingOffset="2"/>
         </AvailStatusMessage>
        </AvailStatusMessages>
      </HotelAvailRetrieveResult>
    </HotelAvailRetrieveResponse>   

### Example for Derived RatePlan

:

    <HotelAvailRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelAvailRetrieveResult Version = "0">
        <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
        <AvailStatusMessages HotelCode = "1" xmlns = "http://www.opentravel.org/OTA/2003/05">
          <AvailStatusMessage>
            <StatusApplicationControl Start = "2014-07-01" End = "2014-07-31" RatePlanCode = "DRV" Mon = "true" Tue = "true" Weds = "true" Thur = "true" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "false">
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus MinAdvancedBookingOffset = "5"/>
          </AvailStatusMessage>
        </AvailStatusMessages>
      </HotelAvailRetrieveResult>
    </HotelAvailRetrieveResponse>

Element Number Type Description
HotelAvailRetrieveResponse/HotelAvailRetrieveResult 1 Root Node Success
0..1 Should only be present if it was a successful response. The Errors
node should not be present if the Success node is present.
AvailStatusMessages 0..1 Present when success @HotelCode 1 String Hotel
code whose information is provided by the method
AvailStatusMessages/AvailStatusMessage 0..n @BookingLimit 0..1 Integer
Identifies the number of available rooms per Room & RatePlan for the
indicated dates. Not mandatory when the @Status is Close or is a derived
rate @BookingSold 0..1 Integer Identifies the number of sold rooms per
Room & RatePlan for the indicated dates. This value is reset when a new
BookingLimit is charged by an HotelAvailNotif request. Not mandatory
when the @Status is Close or is a derived rate
AvailStatusMessages/AvailStatusMessage/StatusApplicationControl 1 @Start
1 Date Start date @End 1 Date End date @RatePlanCode 1 String Rate Plan
Code @InvCode 0..1 String Room Code. Null for derived rates @InvType
0..1 String Product type (ROOM). Null for derived rates @Mon 1 Boolean
Indicates whether the AvailStatusMessage data applies to Mondays @Tue 1
Boolean Indicates whether the AvailStatusMessage data applies to
Tuesdays @Weds 1 Boolean Indicates whether the AvailStatusMessage data
applies to Wednesdays @Thur 1 Boolean Indicates whether the
AvailStatusMessage data applies to Thursdays @Fri 1 Boolean Indicates
whether the AvailStatusMessage data applies to Fridays @Sat 1 Boolean
Indicates whether the AvailStatusMessage data applies to Saturdays @Sun
1 Boolean Indicates whether the AvailStatusMessage data applies to
Sundays AvailStatusMessages/AvailStatusMessage/LengthsOfStay 0..1
@ArrivalDateBased 0..1 Boolean When its true, the minimum and maximum
stay is checked ONLY the first day of the availability, when false or
not indicated, the minimum and maximum stay is checked all the
availability days.
AvailStatusMessages/AvailStatusMessage/LengthsOfStay/LengthOfStay 1..2
@Time 1 Integer Indicates the number of @TimeUnit for this stay
@TimeUnit 1 String Day @MinMaxMessageType 1 String (MinLOS, MaxLOS)
Indicates the minimum or maximum stay for his AvailStatusMessage.
AvailStatusMessages/AvailStatusMessage/RestrictionStatus 0..1 @Status 1
String (Open, Close) @Restriction 0..1 String Master. This is the master
availability. If master availability is ‘Closed’, the product is not
bookable if any of the stay dates includes one of the dates specified by
the Application Control element. If master availability is ‘Open’,
additional restrictions on arrival and departure may be placed (Master,
Arrival, Departure) @MinAdvancedBookingOffset 0..1 Integer Minimum
number of days before the check-in date after which the product is not
available to be booked. This restriction is usually used to offer
discounts on early bookings @MaxAdvancedBookingOffset 0..1 Integer
Maximum number of days before the check-in date after which the product
is not available to be booked. This restriction is usually used to offer
last minute discounts on unsold inventory. @SellThroughOpenIndicator
0..1 Boolean When @Status is open, in this element you can indicate this
room or room/ratePlan can be sold without limit (like
BookingLimit=MaxInteger). Null for derived rates

toc

HotelResRetrieve
----------------

Providers will send an HotelResRetrieveRQ message to retrieve a list of
seller reservations.

toc

HotelResRetrieveRQ
------------------

:

    <HotelResRetrieve>
     <request>
      <POS>
        <Source>
           <RequestorID ID = "Provider1"/>
               <BookingChannel>
                  <CompanyName Code = "ClientTravelAgency1"/>
                </BookingChannel>
         </Source>
       </POS>
       <UniqueID ID = "123456" ID_Context = "Client"/> 
       <ReadRequests>
          <HotelReadRequest HotelCode="1608">
             <SelectionCriteria Start="2013-11-25" End="2013-11-28" DateType="DepartureDate"/>
          </HotelReadRequest>
          <HotelReadRequest>
             <SelectionCriteria Start = "2015-12-23" End = "2015-12-28" DateType = "ArrivalDate"/> 
          </HotelReadRequest>
       </ReadRequests>
       </request>
    </HotelResRetrieve>

Element Number Type Description HotelResRetrieve/request 1 Root Node
UniqueID 0..1 If present filter by UniqueID content @ID 1 String Booking
ID @IDContext 1 String (Client, Provider, Internal) ReadRequests 0..1 If
present filter by its content ReadRequests/HotelReadRequest 1..n Node
containing the read request data. @HotelCode 0..1 String Hotel code.
HotelReadRequest/SelectionCriteria 1 @Start 1 DateTime Start date to
search bookings. DateTime Format is yyyy-MM-ddThh:mm:ss Date must be in
UTC @End 1 DateTime End date to search bookings. DateTime Format is
yyyy-MM-ddThh:mm:ss Date must be in UTC @DateType 1 String (ArrivalDate,
CreateDate, DepartureDate, LastUpdateDate)

toc

HotelResRetrieveRS
------------------

:

    <HotelResRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/client/2012/10">
        <HotelResRetrieveResult Version = "0"> <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
           <HotelReservations xmlns = "http://www.opentravel.org/OTA/2003/05">
              <HotelReservation ResStatus ="Confirmed">
                 <RoomStays>
                    <RoomStay>
                       <RoomTypes>
                          <RoomType RoomTypeCode = "STD1" RoomID = "1">
                             <RoomDescription>
                                <Text>Standard</Text>
                             </RoomDescription>
                          </RoomType>
                       </RoomTypes>
                       <RatePlans>
                          <RatePlan RatePlanCode = "BAR">
                             <RatePlanDescription>
                                <Text>Best Available Rate</Text>
                             </RatePlanDescription>
                             <Commission Percent = "15.00"/>
                          </RatePlan>
                       </RatePlans>
                       <RoomRates>
                       <RoomRate EffectiveDate = "2013-09-03"  ExpireDate = "2013-09-07" RoomTypeCode = "STD1" InvBlockCode = "7" RatePlanCode = "BAR">
                          <Rates>
                             <Rate EffectiveDate = "2013-09-03" ExpireDate = "2013-09-06">
                                <Base AmountBeforeTax = "200.00" AmountAfterTax = "200.00" CurrencyCode = "EUR"/>
                                <CancelPolicies>
                                   <CancelPenalty PolicyCode = "0912f3bc-40cc-4566-a5d7-0d2833ab62de"/>
                                   <CancelPenalty PolicyCode = "cd4aa15e-82e4-420a-937e-63e802ba352a"/>
                                </CancelPolicies>
                             </Rate>
                          </Rates>
                          <Total AmountBeforeTax = "200.00" AmountAfterTax = "200.00" CurrencyCode = "EUR"/>
                       </RoomRate>
                    </RoomRates>
                    <CancelPenalties>
                       <CancelPenalty PolicyCode = "0912f3bc-40cc-4566-a5d7-0d2833ab62de" NonRefundable = "false">
                          <Deadline AbsoluteDeadline = "2013-08-29" OffsetTimeUnit = "Day" OffsetUnitMultiplier = "5"

> OffsetDropTime = "BeforeArrival"/\>
>
> :   \<AmountPercent Percent = "15.00" CurrencyCode = "EUR"/\>
>
> \</CancelPenalty\>
>
> :   
>
>     \<CancelPenalty PolicyCode = "cd4aa15e-82e4-420a-937e-63e802ba352a" NonRefundable = "false"\>
>
>     :   
>
>         \<Deadline AbsoluteDeadline = "2013-08-31" OffsetTimeUnit = "Day" OffsetUnitMultiplier = "3"
>
>         :   OffsetDropTime = "BeforeArrival"/\>
>
>         \<AmountPercent NmbrOfNights = "2" CurrencyCode = "EUR"/\>
>
>     \</CancelPenalty\>
>
> \</CancelPenalties\>
>
> :   \<BasicPropertyInfo HotelCode = "12" HotelName = "Adagio City
>     Aparthotel Annecy Centre"/\>
>
> \</RoomStay\>
>
> :   \</RoomStays\> \<ResGuests\> \<ResGuest ResGuestRPH = "0"
>     AgeQualifyingCode = "10"\> \<Profiles\> \<ProfileInfo\>
>     \<Profile\> \<Customer\> \<PersonName\>
>     \<NamePrefix\>Mr\</NamePrefix\> \<GivenName\>Test11\</GivenName\>
>     \<Surname\>TestAp11\</Surname\> \</PersonName\> \</Customer\>
>     \</Profile\> \</ProfileInfo\> \</Profiles\> \<GuestCounts\>
>     \<GuestCount Age = "30"/\> \</GuestCounts\> \</ResGuest\>
>     \<ResGuest ResGuestRPH = "1" AgeQualifyingCode = "10"\>
>     \<Profiles\> \<ProfileInfo\> \<Profile\> \<Customer\>
>     \<PersonName\> \<NamePrefix\>Mr\</NamePrefix\>
>     \<GivenName\>Test22\</GivenName\> \<Surname\>TestAp22\</Surname\>
>     \</PersonName\> \</Customer\> \</Profile\> \</ProfileInfo\>
>     \</Profiles\> \<GuestCounts\> \<GuestCount Age = "30"/\>
>     \</GuestCounts\> \</ResGuest\> \</ResGuests\> \<ResGlobalInfo\>
>     \<Total AmountBeforeTax = "500.00" AmountAfterTax = "500.00"
>     CurrencyCode = "USD"/\> \<HotelReservationIDs\>
>     \<HotelReservationID ResID\_Value = "123456" ResID\_SourceContext
>     = "Client"/\> \<HotelReservationID ResID\_Value = "124"
>     ResID\_SourceContext = "Internal"/\> \<HotelReservationID
>     ResID\_Value = "115137" ResID\_SourceContext = "Provider"/\>
>     \</HotelReservationIDs\> \<Profiles\> \<ProfileInfo\> \<Profile\>
>     \<Customer\> \<PersonName\> \<NamePrefix\>Mr\</NamePrefix\>
>     \<GivenName\>Test12\</GivenName\> \<Surname\>TestAp12\</Surname\>
>     \</PersonName\> \<Telephone PhoneTechType = "1" PhoneNumber =
>     "1212121212" FormattedInd = "false" DefaultInd = "true"/\> \<Email
>     DefaultInd = "true" EmailType =
>     "1"\><test@yourdomain.com>\</Email\> \<Address Type = "1"\>
>     \<AddressLine\>B-15, Sector-57\</AddressLine\>
>     \<CityName\>NOIDA\</CityName\> \<PostalCode\>201301\</PostalCode\>
>     \<StateProv StateCode = "UP"\>Uttar Pradesh\</StateProv\>
>     \<CountryName Code = "IN"\>INDIA\</CountryName\> \</Address\>
>     \</Customer\> \</Profile\> \</ProfileInfo\> \</Profiles\>
>     \</ResGlobalInfo\>
>
> \</HotelReservation\>
>
> :   \</HotelReservations\>
>
> > \</HotelResRetrieveResult\>
>
> \</HotelResRetrieveResponse\>

Element Number Type Description HotelResRetrieveResponse 1 Root Node
HotelResRetrieveResponse/HotelResRetrieveResult 1 Contains the result of
reservation retrieve. HotelResRetrieveResult/Success 0..1 Should only be
present if it was a successful response. The Errors node should not be
present if the Success node is present.
HotelResRetrieveResult/HotelReservations 0..1 Node containing the
reservation. HotelReservations/HotelReservation 1 Node containing
information about the reservation. @ResStatus 1 String Status of the
reservation. Possible status are: 'Confirmed', 'Requested' and
'Cancelled' HotelReservation/RoomStays 1 Node containing the RoomStays
of the reservation. RoomStays/RoomStay 1 Node containing RoomStay
information. RoomStay/RoomTypes 1 Node containing information about
rooms. RoomTypes/RoomType 1..n Node containing information about one
room. @RoomTypeCode 1 String Room code. @RoomID 1 String Id of the room.
RoomType/RoomDescription 1 Node containing the description of the room.
RoomDescription/Text 1 String Description of the room.
RoomStay/RatePlans 1 Node containing information about RatePlans.
RatePlans/RatePlan 1 Node containing information about one RatePlan.
@RatePlanCode 1 RatePlan code. RatePlan/RatePlanDescription 1 Node
containing information the RatePlan description one RatePlan.
RatePlanDescription/Text 1 String Description of the RatePlan.
RatePlan/Commission 1 Node containing the commission of the RatePlan.
Percent 1 Decimal Commission of the RatePlane. RoomStay/RoomRates 1 Node
containing information about RoomRates. RoomRates/RoomRate 1 Node
containing information about one RoomRate. @EffectiveDate 1 Date
Effective date when the RoomRate start applying. @ExpireDate 1 Date
Expire date when the RoomRate ends applying. @RoomTypeCode 1 String Code
of the Room. @InvBlockCode 1 String Inventary block code. @RatePlanCode
1 String Code of the RatePlan. RoomRate/Rates 1 Node containing
information about the rates. Rates/Rate 1 Node containing information
about one rate. @EffectiveDate 1 Date Effective date when the Rate start
applying. @ExpireDate 1 Date Expire date when the Rate ends applying.
Rate/Base 1 Node containing core information about the rate.
@AmountBeforeTax 0..1 Decimal Amount before tax of the rate.
@AmountAfterTax 1 Decimal Amount after tax of the rate. @CurrencyCode 1
String Currency code of the rate. Rate/CancelPolicies 1 Node containing
information about cancel policies which are applied to the rate.
CancelPolicies/CancelPenalty 0..n Node containing information about one
cancel penalty. @PolicyCode 1 String Policy code of the cancel penalty.
RoomRate/Total 1 Node containing information about the total price of
the RoomRate. @AmountBeforeTax 0..1 Decimal Amount before tax of the
RoomRate. @AmountAfterTax 1 Decimal Amount after tax of the RoomRate.
@CurrencyCode 1 String Currency code of the RoomRate.
RoomStay/CancelPenalties 1 Node containing all cancel penalties of the
RoomStay. CancelPenalties/CancelPenalty 0..n Node containing information
about one cancel penalty. @PolicyCode 1 String Policy code of the cancel
penalty. @NonRefundable 1 Boolean Indicates whether the Rate is
refundable or not. CancelPenalty/Deadline 0..n Node containing
information about the deadline of the cancel penalty. @AbsoluteDeadline
1 DateTime Indicates when the absolute deadline. @OffsetTimeUnit 1
String Time unit of the offset for the absolute deadline.
@OffsetUnitMultiplier 1 Integer Number of time units of offset for the
absolute deadline. @OffsetDropTime 1 String Indicates when the deadline
is applied. CancelPenalty/AmountPercent 0..n Amount of the cancel
penalty. @Percent 1 String Percent of the total charged as a cancel
penalty amount. Percent or NmbrOfNights must be present. @NmbrOfNights 1
String Number of nights charged as a cancel penalty amount.
@CurrencyCode 1 String Currency code of the cancel penalty amount.
RoomStay/BasicPropertyInfo 1 Node containing basic information of the
property. HotelCode 1 Integer Hotel code. HotelName 1 String Hotel name.
HotelReservation/ResGuests 1 Node containing all reservation guests.
ResGuests/ResGuest 1..n Node containing information about one of the
guests. ResGuest/ResGuest 1..n Node containing information about one of
the guests. @ResGuestRPH 1 Integer RPH of the guest. @AgeQualifyingCode
1 Integer Age qualifying code of the guest. ResGuest/Profiles 1 Node
containing information about the profiles of the guest.
Profiles/ProfileInfo 1 Node containing information about the profile of
the guest. ProfileInfo/Customer 1 Node containing customer information
of the guest. Customer/PersonName 1 Node containing the person name of
the guest. PersonName/NamePrefix 1 String Prefix/Traitement name of the
guest. PersonName/GivenName 1 String Given name of the guest.
PersonName/Surname 1 String Surname of the guest. ResGuest/GuestCounts 1
Node containing quantity informations for the guest.
GuestCounts/GuestCount 1 Node containing quantity information for the
guest. @Age 1 Integer Age of the guest. ResGlobalInfo 1 Node containing
general information about the reservation. ResGlobalInfo/Total 1 Node
containing the total price. @AmountBeforeTax 0..1 Decimal Amount before
tax of the Reservation. @AmountAfterTax 1 Decimal Amount after tax of
the Reservation. @CurrencyCode 1 String Currency code of the
Reservation. ResGlobalInfo/HotelReservationIDs 1 Node containing the ids
of the reservation. HotelReservationIDs/HotelReservationID 2 Node
containing information of one reservation id. @ResID Value\_ 1 String
Value of the id. @ResID SourceContext\_ 1 String Id context.
ResGlobalInfo/Profiles 1 Node containing information about the profiles
of the reservation. Profiles/ProfileInfo 1 Node containing information
about the profile of the reservation. ProfileInfo/Profile 1 Node
containing information about the profile of the reservation.
Profile/Customer 1 Node containing information about the customer of the
reservation. The customer of the reservation can be or not a pax of the
reservation. If it's a pax will be present in ResGuests node.
Customer/PersonName 1 Node containing the person name of the customer of
the reservation. PersonName/NamePrefix 1 String Name prefix of the
customer. PersonName/GivenName 1 String Given name of the customer.
PersonName/Surname 1 String Surname of the customer. Customer/Telephone
1 Node containing information about the telephone of the customer.
@PhoneTechType 1 String Phone technology type. @PhoneNumber 1 String
Phone number. @FormattedInd 1 String Indicates whether associated data
is formatted or not. @DefaultInd 1 String When true, indicates a default
value should be used. Customer/Email 1 Node containing information about
the email of the customer. @DefaultInd 1 String When true, indicates a
default value should be used. @EmailType 1 String Indicates the type of
the email. Value 1 String Email of the customer. Customer/Address 1 Node
containing information about the address of the customer.
Address/AddressLine 1 String Address of the customer. Address/CityName 1
String City name. Address/PostalCode 1 String Postal code.
Address/StateProv 1 String Node containing information about the state
or the province of the customer. @StateCode 1 String State code. Value 1
String State or province name. Address/CountryName 1 String Country
name. @Code 1 String Country code. Value 1 String Country name.

toc

Notify Messages
---------------

Providers sends data to Sellers (Negotiation is started by Providers).

toc

HotelRatePlanNotif
------------------

Provider will send an HotelRatePlanNotifRQ message to push Rates to
seller. XTG will process data and response with error code if needed.

toc

HotelRatePlanNotifRQ
--------------------

### Example for RatePlan

:

    <HotelRatePlanNotif>
        <request>
       <POS>
                <Source>
                    <RequestorID ID = "Provider1">
                    </RequestorID>
                    <BookingChannel>
                        <CompanyName Code = "ClientTravelAgency1">
                        </CompanyName>
                    </BookingChannel>
                </Source>
            </POS>
        <RatePlans HotelCode="HOT123">
            <RatePlan RatePlanCode="TAR321" CurrencyCode="EUR"  RatePlanStatusType="Active">
                <Rates>
                    <Rate Start="2007-04-01" End="2007-12-31">
                        <BaseByGuestAmts>
                            <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax="100.00"/>
                            <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="130.00"/>
                            <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax="195.00"/>
                        </BaseByGuestAmts>
                        <AdditionalGuestAmounts>
                            <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "8"/>
                            <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "20.00" AgeQualifyingCode = "8"/>
                        </AdditionalGuestAmounts>
                    </Rate>
                </Rates>
                <SellableProducts>
                    <SellableProduct InvCode="43" InvType ="ROOM"/>
                </SellableProducts>
                <Supplements>
                    <Supplement Start="2007-04-01" End="2007-12-31" AgeQualifyingCode="10" Amount ="20.00" InvCode="1" SupplementType="Board"/>
                    <Supplement Start="2007-04-01" End="2007-12-31" AgeQualifyingCode="8" Amount = "10.00" InvCode="1" SupplementType="Board"/>
                </Supplements>
            </RatePlan>
           <RatePlan RatePlanCode="TAR333" CurrencyCode="EUR" SuplementsNotifTypeSpecified="true" SuplementsNotifType="Overlay"  RatePlanStatusType="Deactivated">
                <Rates>
                    <Rate Start="2013-04-01" End="2013-12-31">
                        <BaseByGuestAmts>
                            <BaseByGuestAmt Type="25" AmountAfterTax="150.00"/>
                        </BaseByGuestAmts>
                    </Rate>
                </Rates>
                <SellableProducts>
                    <SellableProduct InvCode="43" InvType ="ROOM"/>
                </SellableProducts>
                <Supplements>
                    <Supplement Start="2013-04-01" End="2013-12-31" AgeQualifyingCode="10" Amount ="20.00" InvCode="1" SupplementType="Board"/>
                    <Supplement Start="2013-04-01" End="2013-12-31" AgeQualifyingCode="8" Amount = "10.00" InvCode="1" SupplementType="Board"/>
                </Supplements>
            </RatePlan>
        </RatePlans>
    </request>
    </HotelRatePlanNotif>

### Example for Derived RatePlan

:

    <HotelRatePlanNotif>
      <request Version = "0">
        <POS>
          <Source>
            <RequestorID ID = "Provider1"></RequestorID>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"></CompanyName>
            </BookingChannel>
          </Source>
        </POS>
        <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" RatePlanStatusType = "Active">
          <Rates>
            <Rate Start = "2014-07-01" End = "2014-07-31" AdjustedPercentage = "10" AdjustUpIndicator = "0"></Rate>
          </Rates>
        </RatePlan>
        <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" RatePlanStatusType = "Deactivated">
          <Rates>
            <Rate Start = "2014-08-01" End = "2014-08-31" AdjustedPercentage = "10" AdjustUpIndicator = "0"></Rate>
          </Rates>
        </RatePlan>
      </request>
    </HotelRatePlanNotif>

Element Number Type Description HotelRatePlanNotif/request 1 Root Node
RatePlans 1 @HotelCode 1 String Hotel code whose information is provided
by the method RatePlans/RatePlan 1..n Present if rate exists
@RatePlanCode 1 String Rate code @RatePlanStatusType 0 ..1 String Active
or Deactivated (You can save prices with initial status deactivated if
you want.) If this attribute is missing, the price will be saved as
active. @BaseRatePlanCode 0..1 String Rate code of the base RatePlan.
Only used for derived rates @CurrencyCode 0..1 String ISO Currency
(EUR). Not used for derived rates <_@SuplementsNotifTypeSpecified> 0..1
Boolean Rate code. Not used for derived rates <_@SuplementsNotifType>
0..1 String Possible values are Overlay or Delta. If not specified or
Delta, Supplements will not be overwritten. If Overlay supplements will
be overwritten. Not used for derived rates RatePlans/RatePlan/Rates/Rate
1 @Start 1 Date Start date of rate @End 1 Date Start date of rate
@AdjustedPercentage 0..1 Decimal The percentage off the base rate plan
amount used to determine the price of this derived rate plan. Only used
for derived rates @AdjustedAmount 0..1 Decimal The amount which should
be added to the base rate plan to determine the price of this derived
rate plan. Only used for derived rates @AdjustUpIndicator 0..1 Boolean
When true, the adjusted amount or adjusted percentage is added to the
amount specified for the base rate plan to determine the derived rate
amount. When false, the adjusted amount or adjusted percentage is
subtracted from the amount specified for the base rate plan to determine
the derived rate amount. Only used for derived rates
RatePlans/RatePlan/Rates/Rate/BaseByGuestAmts 0..1
RatePlans/RatePlan/Rates/Rate/BaseByGuestAmts/BaseByGuestAmt 1..n
@AmountAfterTax 1 Decimal Total amount for @NumberOfGuests by day
indicated @NumberOfGuests 0..1 Integer How many adults are the
@AmountAfterTax for day indicated. If @NumberOfGuests is not informed
then @Type must be informed. The maximum @NumberOfGuests is the standard
occupancy of the room @Type 0..1 Integer Indicates amounts are per Room
instead per Pax. If @Type=25 then 1 BaseByGuestAmt is allowed,
@NumberOfGuests is not allowed and AdditionalGuestAmounts are not
allowed. OTA CHG Code (25 - Per room)
RatePlans/RatePlan/Rates/Rate/AdditionalGuestAmounts 0..1 Not used for
derived rates RatePlans/RatePlan/Rates/Rate/AdditionalGuestAmounts/Add
itionalGuestAmount 1..n Price and information about the additional pax
(children, infants or extra adults) @MaxAdditionalGuests 1 Integer
Number of additional pax, one node for each additional pax, int the
above example has one for first child, and one for second. @Type 0..1
String OTA AmountDeterminationType. If not specified then the price is a
supplement, if @Type is Exclusive then the the price is absolute.
@AgeQualifyingCode 1 Integer (10 - Adult,8 - Child,7 - Infant) @Amount 1
Decimal Price for each additional pax RatePlans/Supplements 0..1 Present
if supplements by board exists. Not used for derived rates
RatePlans/Supplements/Supplement 1..n @Start 1 Date Start date of this
supplement @End 1 Date End date of this supplement @AgeQualifyingCode 1
Integer Age qualifyingCode which affects this supplement (10 -Adult,8 -
Child,7 - Infant) @Amount 1 Decimal Amount of supplement @SupplementType
1 String (Board) @InvCode 1 String OTA MPT Code if @SupplementType is
Board RatePlans/RatePlan/SellableProducts 0..1 List of sellable
products. Null for derived rates.
RatePlans/SellableProducts/SellableProduct 1..n @InvCode 1 Integer
Sellable Product Code @InvType 1 Integer Sellable product type (ROOM)

**Important information**

-   The prices under the standard occupancy are ALWAYS loaded with
    BaseByGuestAmts.
-   Childs and babies are not allowed in BaseByGuestAmts. Childs and
    babies must be always defined in AdditionalGuestAmounts.
-   The possible Type values in the AdditionalGuestAmount tag are
    Exclusive and not specified.

    > -   If there's no value specified then the price is a relative.
    >     And it's added to the price of the current pax.
    > -   If the value is "Exclusive" then the price is absolute. And
    >     it's the total price of the current pax.

-   If NumberOfGuests is not specified in tag BaseByGuestAmt then
    Type="25" (price per room) must be specified. And only one tag
    BaseByGuestAmt is allowed.
-   If the price is per room then all AdditionalGuestAmount must be
    relative.
-   In samples room uses are specified using = AdultNumber - ChildNumber
    -   InfantNumber.

**Notify amounts by Guests:**

Case 1

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0.

We only load the price for standard occupancy.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>  

The price of one Adult will be 50 = 100/2.

The price of two adults will be 100 = 2\*(100/2).

Case 2

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0.

We load the price for standard occupancy and the price for 1 Adult.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax="100.00"/>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="130.00"/>
    </BaseByGuestAmts>

The price of one Adult (Also known as Double Single Use) will be 100 =
100.

The price of two adults will be 130 = 2\*(130/2).

Case 3

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0.

We load the price for standard occupancy and the price for 1 additional
Adult Type default.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10"/>
    </AdditionalGuestAmounts>

The price of one Adult will be 50 = 100/2.

The price of two Adult will be 100 = 2\*(100/2).

The price of three Adults will be 190 = (100/2) + (100/2) + ((100/2) +
(40).

Case 4

Standard occupancy = 2

Room uses = 1-0-0, 2-0-0, 3-0-0

We load the price for standard occupancy and the price for 1 additional
Adult Type Exclusive.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10" Type="Exclusive"/>
    </AdditionalGuestAmounts>

The price of one Adult will be 50 = 100/2.

The price of two Adult will be 100 = 2\*(100/2).

The price of three Adults will be 140 = (100/2) + (100/2) + 40.

Case 5

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 1-1-0.

We load price for standard occupancy and the price for 1 additional
Child (AgeQualifyingCode = "8") Type default.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>

The price of one Adult will be 50 = 100/2.

The price of two Adult will be 100 = 2\*(100/2).

The price of one Adult and one Child will be 140 = (100/2) + ((100/2) +
40).

Case 5.1

standard occupancy = 2.

room uses = 1-0-0, 2-0-0, 1-0-1.

NOTE: The same samples with childs are valid for babies specifying
AgeQualifyingCode = "7".

We load price for standard occupancy and the price for 1 additional Baby
(AgeQualifyingCode = "7") Type default.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "7" />
    </AdditionalGuestAmounts>

The price of one Adult will be 50 = 100/2.

The price of two Adult will be 100 = 2\*(100/2).

The price of one Adult and one Baby will be 140 = (100/2) + ((100/2) +
40).

Case 6

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 1-1-0.

We load price for standard occupancy and the price for 1 additional
Child Type default negative price

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-40.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>

The price of one Adult will be 50 = 100/2.

The price of two Adults will be 100 = 2\*(100/2)

The price of one Adult and one Child will be 60 = (100/2) +
((100/2) -40).

Case 7

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0.

We load the price of standard occupancy and the price for 1 additional
adult and the price for 2 additional adults.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "-15.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>

The price of one Adult will be 50 = (100/2).

The price of two Adults will be 100 = 2\*(100/2).

The price of three Adults will be 160 = (100/2) + (100/2) + ((100/2) +
10).

The price of four Adults will be 195 = (100/2) + (100/2) + ((100/2) +
10) + ((100/2) - 15).

Case 8

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0.

We load the price of standard occupancy and the price for each
additional adult (Without specifying MaxAdditionalGuests).

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>

The price of one Adults will be 50 = (100/2).

The price of two Adults will be 100 = 2\*(100/2).

The price of three Adults will be 140 = (100/2) + (100/2) +
((100/2) -10).

The price of four Adults will be 180 = (100/2) + (100/2) +
((100/2) -10) + ((100/2) - 10).

Case 9

Standard occupancy = 3.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0, 5-0-0.

We load the price of standard occupancy and the price for 1 additional
adult and the price for 2 additional adults.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax="150.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "15.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>

The price of one Adult will be 50 = (150/3).

The price of two Adults will be 100 = 2\*(150/3).

The price of three Adults will be 150 = 3\*(150/3).

The price of four Adults will be 190 = (150/3) + (150/3) + (150/3) +
((150/3) - 10).

The price of five Adults will be 255 = (150/3) + (150/3) + (150/3) +
((150/3) - 10) + ((150/3) + 15).

**Notify amounts with price per room and additional guests**

Case 1

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 1-1-0.

We load the price per room Type="25".

:

    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>

The price of one Adult will be 100.

The price of two Adults will be 100.

The price of one Adult and one Child will be 100.

Case 2

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0, 1-1-0, 3-1-0.

We load the price per room but also the price for 1 additional adult and
the price for 1 additional child.

NOTE: the AdditionalGuestAmount Type in price per room has to be
default. Exclusive type not allowed.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>

The price of one Adult will be 100.

The price of two Adults will be 100.

The price of three Adults will be 120 = 100 + 20.

The price of one Adult and one Child will be 110 = 100 + 10.

The price of three Adults and one Child will be 130 = 100 + 20 + 10.

Case 3

Standard occupancy = 3.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0.

We load the price per room but also the price for 1 additional adult.

:

    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>

The price of one Adult will be 100.

The price of two Adults will be 100.

The price of three Adults will be 100.

The price of four Adults will be 120 = 100 + 20. toc

HotelRatePlanNotifRS
--------------------

Success Response

:

    <HotelRatePlanNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanNotifResult>
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelRatePlanNotifResult>
    </HotelRatePlanNotifResponse>

Error Response

:

    <HotelRatePlanNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
         <HotelRatePlanNotifResult>
            <Errors xmlns="http://www.opentravel.org/OTA/2003/05">
               <Error ShortText="Incomplete AdditionalGuestAmount values" Code="7"/>
            </Errors>
         </HotelRatePlanNotifResult>
      </HotelRatePlanNotifResponse>

toc

HotelAvailNotif
---------------

Provider will send an HotelAvailNotifRQ message to push availabilities
to seller. XTG will process data and response with error code if needed.

toc

HotelAvailNotifRQ
-----------------

### Example for RatePlan

:

    <HotelAvailNotif>
        <request>
            <POS>
                <Source>
                    <RequestorID ID = "Provider1">
                    </RequestorID>
                    <BookingChannel>
                        <CompanyName Code = "ClientTravelAgency1">
                        </CompanyName>
                    </BookingChannel>
                </Source>
            </POS>
       <AvailStatusMessages HotelCode="12">
         <AvailStatusMessage BookingLimit="9">
             <StatusApplicationControl Start="2013-12-20" End="2013-12-25" RatePlanCode="BAR" InvCode="APT" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="false"  Fri="true" Sat="true" Sun="true"/>
             <LengthsOfStay ArrivalDateBased="true">
           <LengthOfStay Time="2" TimeUnit="Day" MinMaxMessageType="MinLOS"/>
           <LengthOfStay Time="8" TimeUnit="Day" MinMaxMessageType="MaxLOS"/>
             </LengthsOfStay>
             <RestrictionStatus Status="Open" SellThroughOpenIndicator="false" MinAdvancedBookingOffset="5"/>
         </AvailStatusMessage>
         <AvailStatusMessage BookingLimit="12">
            <StatusApplicationControl Start="2013-12-20" End="2013-12-21"   RatePlanCode="LOWCOST" InvCode="JUN_1" InvType="ROOM" Mon="false" Tue="false" Weds="false" Thur="false" Fri="true" Sat="true" Sun="false"/>
            <RestrictionStatus Restriction="Master" Status="Close"/>
         </AvailStatusMessage>
         <AvailStatusMessage BookingLimit="12">
        <StatusApplicationControl Start="2013-12-22" End="2013-12-25" RatePlanCode="LOWCOST" InvCode="JUN_1" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="false" Fri="false" Sat="false" Sun="true"/>
            <RestrictionStatus Status="Close" Restriction="Arrival"/>
         </AvailStatusMessage>
         <AvailStatusMessage BookingLimit="7">
        <StatusApplicationControl Start="2013-12-20" End="2013-12-25" RatePlanCode="LOWCOST" InvCode="STD1" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="false" Fri="true" Sat="true" Sun="true"/>
        <LengthsOfStay ArrivalDateBased="true">
            <LengthOfStay Time="3" TimeUnit="Day" MinMaxMessageType="MinLOS"/>
            <LengthOfStay Time="9" TimeUnit="Day" MinMaxMessageType="MaxLOS"/>
            </LengthsOfStay>
        <RestrictionStatus SellThroughOpenIndicator="true" MinAdvancedBookingOffset="6"/>
         </AvailStatusMessage>
         <AvailStatusMessage BookingLimit="5">
        <StatusApplicationControl Start="2013-12-26" End="2013-12-27"  InvCode="STD1" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="false" Fri="true" Sat="true" Sun="true"/>
         </AvailStatusMessage>
        </AvailStatusMessages>
     </request>
    </HotelAvailNotif>

### Example for Derived RatePlan

:

    <HotelAvailNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <request Version = "0">
        <POS xmlns = "http://www.opentravel.org/OTA/2003/05">
          <Source>
            <RequestorID ID = "Provider1"></RequestorID>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"></CompanyName>
            </BookingChannel>
          </Source>
        </POS>
        <AvailStatusMessages HotelCode = "1" xmlns = "http://www.opentravel.org/OTA/2003/05">
          <AvailStatusMessage>
            <StatusApplicationControl Sun = "true" Sat = "true" Fri = "true" Thur = "true" Weds = "true" Tue = "true" Mon = "true" RatePlanCode = "DRV" Start = "2014-07-01" End = "2014-07-31"/>
            <LengthsOfStay ArrivalDateBased = "false">
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus MinAdvancedBookingOffset = "5"/>
          </AvailStatusMessage>
        </AvailStatusMessages>
      </request>
    </HotelAvailNotif>

Element Number Type Description HotelAvailNotif/request 1 Root Node
AvailStatusMessages 1 @HotelCode 1 String Hotel code whose information
is provided by the method AvailStatusMessages/AvailStatusMessage 1..n
@BookingLimit 0..1 Integer Identifies the number of available rooms per
Room & RatePlan for the indicated dates. Not mandatory when the @Status
is Close. Not used for derived rates
AvailStatusMessages/AvailStatusMessage/StatusApplicationControl 1 @Start
1 Date Start date @End 1 Date End date @RatePlanCode 0..1 String Rate
Plan Code. If not specified then all rates containing @InvCode Room will
be updated @InvCode 0..1 String Room Code. Not used for derived rates
@InvType 0..1 String Product type (ROOM). Not used for derived rates
@Mon 1 Boolean Indicates whether the AvailStatusMessage data applies to
Mondays @Tue 1 Boolean Indicates whether the AvailStatusMessage data
applies to Tuesdays @Weds 1 Boolean Indicates whether the
AvailStatusMessage data applies to Wednesdays @Thur 1 Boolean Indicates
whether the AvailStatusMessage data applies to Thursdays @Fri 1 Boolean
Indicates whether the AvailStatusMessage data applies to Fridays @Sat 1
Boolean Indicates whether the AvailStatusMessage data applies to
Saturdays @Sun 1 Boolean Indicates whether the AvailStatusMessage data
applies to Sundays AvailStatusMessages/AvailStatusMessage/LengthsOfStay
0..1 AvailStatusMessages/AvailStatusMessage/LengthsOfStay/LengthOfStay
1..2 @ArrivalDateBased 0..1 Boolean When its true, the minimum and
maximum stay is checked ONLY the first day of the availability, when
false or not indicated, the minimum and maximum stay is checked all the
availability days. If both values are needed two AvailStatusMessage must
be send. @Time 1 Integer Indicates the number of @TimeUnit for this stay
@TimeUnit 1 String Day @MinMaxMessageType 1 String (MinLOS, MaxLOS)
Indicates the minimum or maximum stay for his AvailStatusMessage.
AvailStatusMessages/AvailStatusMessage/RestrictionStatus 0..1 @Status
0..1 String (Open, Close). Not used for derived rates @Restriction 0..1
String Master. This is the master availability. If master availability
is ‘Closed’, the product is not bookable if any of the stay dates
includes one of the dates specified by the Application Control element.
If master availability is ‘Open’, additional restrictions on arrival and
departure may be placed (Master, Arrival, Departure). Not used for
derived rates @MinAdvancedBookingOffset 0..1 Integer Minimum number of
days before the check-in date after which the product is not available
to be booked. This restriction is usually used to offer discounts on
early bookings @MaxAdvancedBookingOffset 0..1 Integer Maximum number of
days before the check-in date after which the product is not available
to be booked. This restriction is usually used to offer last minute
discounts on unsold inventory. @SellThroughOpenIndicator 0..1 Boolean
When @Status is open, in this element you can indicate this room or
room/ratePlan can be sold without limit (like BookingLimit=MaxInteger).
Not used for derived rates

toc

HotelAvailNotifRS
-----------------

Success Response

:

    <HotelAvailNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelAvailNotifResult>
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelAvailNotifResult>
    </HotelAvailNotifResponse>

Error Response

:

    <HotelAvailNotifResponse
            xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
            <HotelAvailNotifResult>
               <Errors xmlns="http://www.opentravel.org/OTA/2003/05">
                  <Error ShortText="AvailStatusMessages not found" Code="2"/>
               </Errors>
            </HotelAvailNotifResult>
         </HotelAvailNotifResponse>

toc

Error Codes
-----------

Error Code Error Description -1 Validation error 1 POS credentials not
found 2 HotelCode or RatePlanList not found 3 Rates not found 4
Incomplete Rate values 6 Incomplete AvailStatusMessage
StatusApplicationControl Values 7 Incomplete AdditionalGuestAmount
values 8 SellableProduct not found 9 Room not found in SellableProduct

toc

Full HotelRatePlanInventoryRetrieveRQ
-------------------------------------

:

    <s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:ns1 = "http://www.opentravel.org/OTA/2003/05" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <s:Header>
            <wsse:Security>
                <wsse:UsernameToken>
                    <wsse:Username>user</wsse:Username>
                    <wsse:Password>pass</wsse:Password>
                </wsse:UsernameToken>
            </wsse:Security>
        </s:Header>
        <s:Body>
            <ns:HotelRatePlanInventoryRetrieve>
                <ns:request Version = "0">
                    <ns1:POS>
                        <ns1:Source>
                            <ns1:RequestorID ID = "ProviderCode"/>
                            <ns1:BookingChannel>
                                <ns1:CompanyName Code = "ClientCode"/>
                            </ns1:BookingChannel>
                            <ns1:TPA_Extensions>
                                <ns1:Param key = "onlyActive" value = "0"/>
                            </ns1:TPA_Extensions>
                        </ns1:Source>
                    </ns1:POS>
                    <ns1:RatePlans>
                        <ns1:RatePlan>
                            <ns1:HotelRef HotelCode = "1"/>
                        </ns1:RatePlan>
                    </ns1:RatePlans>
                </ns:request>
            </ns:HotelRatePlanInventoryRetrieve>
        </s:Body>
    </s:Envelope>

toc

Full HotelRatePlanInventoryRetrieveRS
-------------------------------------

:

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
       <s:Header>
          <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
             <u:Timestamp u:Id="_0">
                <u:Created>2014-05-30T09:56:07.383Z</u:Created>
                <u:Expires>2014-05-30T10:01:07.383Z</u:Expires>
             </u:Timestamp>
          </o:Security>
       </s:Header>
       <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <HotelRatePlanInventoryRetrieveResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanInventoryRetrieveResult Version="0">
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
                <RatePlans HotelCode="1" HotelName="Hotel Test Pruebas Travelgate " xmlns="http://www.opentravel.org/OTA/2003/05">
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE3" RatePlanStatusType="Active">
                      <Rates>
                         <Rate>
                            <AdditionalGuestAmounts>
                               <AdditionalGuestAmount AgeQualifyingCode="8" MaxAge="0"/>
                               <AdditionalGuestAmount AgeQualifyingCode="8" MaxAge="0"/>
                               <AdditionalGuestAmount AgeQualifyingCode="7" MaxAge="0"/>
                            </AdditionalGuestAmounts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <SellableProducts/>
                      <Commission Percent="0.00"/>
                      <Description>
                         <Text>SRATE3</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE" RatePlanStatusType="Active">
                      <BookingRules>
                         <BookingRule>
                            <CancelPenalties>
                               <CancelPenalty NonRefundable="false">
                                  <Deadline OffsetTimeUnit="Day" OffsetUnitMultiplier="10" OffsetDropTime="BeforeArrival"/>
                                  <AmountPercent NmbrOfNights="2"/>
                               </CancelPenalty>
                            </CancelPenalties>
                         </BookingRule>
                         <BookingRule>
                            <Viewerships>
                               <Viewership>
                                  <LocationCodes LocationCodesInclusive="true">
                                     <LocationCode CountryCode="ES"/>
                                  </LocationCodes>
                               </Viewership>
                               <Viewership>
                                  <LocationCodes LocationCodesInclusive="false"/>
                               </Viewership>
                            </Viewerships>
                         </BookingRule>
                      </BookingRules>
                      <Rates>
                         <Rate>
                            <AdditionalGuestAmounts>
                               <AdditionalGuestAmount AgeQualifyingCode="8" MaxAge="0"/>
                               <AdditionalGuestAmount AgeQualifyingCode="8" MaxAge="0"/>
                               <AdditionalGuestAmount AgeQualifyingCode="7" MaxAge="0"/>
                            </AdditionalGuestAmounts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <SellableProducts>
                         <SellableProduct InvCode="SROOM2" InvType="ROOM" InvStatusType="Active">
                            <GuestRoom>
                               <Quantities StandardNumBeds="3"/>
                               <Occupancy MinOccupancy="3" MaxOccupancy="3" AgeQualifyingCode="10"/>
                               <Room RoomType="Standard" RoomTypeCode="SROOM2" RoomID="1"/>
                               <Description>
                                  <Text>Standard</Text>
                               </Description>
                            </GuestRoom>
                         </SellableProduct>
                         <SellableProduct InvCode="SROOM2" InvType="ROOM" InvStatusType="Active">
                            <GuestRoom>
                               <Quantities StandardNumBeds="3"/>
                               <Occupancy MinOccupancy="4" MaxOccupancy="4" AgeQualifyingCode="10"/>
                               <Room RoomType="Standard" RoomTypeCode="SROOM2" RoomID="1"/>
                               <Description>
                                  <Text>Standard</Text>
                               </Description>
                            </GuestRoom>
                         </SellableProduct>
                      </SellableProducts>
                      <Commission Percent="0.00"/>
                      <Description>
                         <Text>Standard</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="TI2" RatePlanStatusType="Active">
                      <Rates>
                         <Rate>
                            <AdditionalGuestAmounts>
                               <AdditionalGuestAmount AgeQualifyingCode="8" MaxAge="0"/>
                               <AdditionalGuestAmount AgeQualifyingCode="8" MaxAge="0"/>
                               <AdditionalGuestAmount AgeQualifyingCode="7" MaxAge="0"/>
                            </AdditionalGuestAmounts>
                            <MealsIncluded MealPlanCodes="1"/>
                         </Rate>
                      </Rates>
                      <SellableProducts/>
                      <Commission Percent="0.00"/>
                      <Description>
                         <Text>Todo Incluido</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRVTEST" RatePlanStatusType="Active" BaseRatePlanCode="SRATE">
                      <BookingRules>
                         <BookingRule>
                            <CancelPenalties>
                               <CancelPenalty NonRefundable="false">
                                  <Deadline OffsetTimeUnit="Day" OffsetUnitMultiplier="10" OffsetDropTime="BeforeArrival"/>
                                  <AmountPercent NmbrOfNights="2"/>
                               </CancelPenalty>
                            </CancelPenalties>
                         </BookingRule>
                         <BookingRule>
                            <Viewerships>
                               <Viewership>
                                  <LocationCodes LocationCodesInclusive="true">
                                     <LocationCode CountryCode="ES"/>
                                  </LocationCodes>
                               </Viewership>
                               <Viewership>
                                  <LocationCodes LocationCodesInclusive="false"/>
                               </Viewership>
                            </Viewerships>
                         </BookingRule>
                      </BookingRules>
                      <Description>
                         <Text>DerivedRate Test</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE2" RatePlanStatusType="Active">
                      <Rates>
                         <Rate>
                            <AdditionalGuestAmounts>
                               <AdditionalGuestAmount AgeQualifyingCode="8" MaxAge="0"/>
                               <AdditionalGuestAmount AgeQualifyingCode="8" MaxAge="0"/>
                               <AdditionalGuestAmount AgeQualifyingCode="7" MaxAge="0"/>
                            </AdditionalGuestAmounts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <SellableProducts>
                         <SellableProduct InvCode="STD" InvType="ROOM" InvStatusType="Deactivated">
                            <GuestRoom>
                               <Quantities StandardNumBeds="2"/>
                               <Occupancy MinOccupancy="2" MaxOccupancy="2" AgeQualifyingCode="10"/>
                               <Room RoomType="Standard" RoomTypeCode="STD" RoomID="1"/>
                               <Description>
                                  <Text>Standard</Text>
                               </Description>
                            </GuestRoom>
                         </SellableProduct>
                      </SellableProducts>
                      <Commission Percent="0.00"/>
                      <Description>
                         <Text>TestRate</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRVT" RatePlanStatusType="Active" BaseRatePlanCode="SRATE2">
                      <Description>
                         <Text>Derivada Test</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV2" RatePlanStatusType="Active" BaseRatePlanCode="SRATE2">
                      <BookingRules>
                         <BookingRule>
                            <CancelPenalties>
                               <CancelPenalty NonRefundable="false">
                                  <Deadline OffsetTimeUnit="Day" OffsetUnitMultiplier="10" OffsetDropTime="BeforeArrival"/>
                                  <AmountPercent Amount="20.00"/>
                               </CancelPenalty>
                            </CancelPenalties>
                         </BookingRule>
                      </BookingRules>
                      <Description>
                         <Text>Derivada Prueba</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV" RatePlanStatusType="Deactivated" BaseRatePlanCode="SRATE">
                      <BookingRules>
                         <BookingRule>
                            <CancelPenalties>
                               <CancelPenalty NonRefundable="true"/>
                            </CancelPenalties>
                         </BookingRule>
                         <BookingRule>
                            <Viewerships>
                               <Viewership>
                                  <LocationCodes LocationCodesInclusive="true">
                                     <LocationCode CountryCode="ES"/>
                                  </LocationCodes>
                               </Viewership>
                               <Viewership>
                                  <LocationCodes LocationCodesInclusive="false"/>
                               </Viewership>
                            </Viewerships>
                         </BookingRule>
                      </BookingRules>
                      <Description>
                         <Text>TarifaDerivada</Text>
                      </Description>
                   </RatePlan>
                </RatePlans>
             </HotelRatePlanInventoryRetrieveResult>
          </HotelRatePlanInventoryRetrieveResponse>
       </s:Body>
    </s:Envelope>

toc

Full HotelRatePlanRetrieveRQ
----------------------------

:

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:ns1="http://www.opentravel.org/OTA/2003/05" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <s:Header>
            <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <o:UsernameToken>
                    <o:Username>user</o:Username>
                    <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">pass</o:Password>
                </o:UsernameToken>
            </o:Security>
        </s:Header>
       <s:Body>
          <ns:HotelRatePlanRetrieve>
             <ns:request Version="0">
                <ns1:POS>
                   <ns1:Source>
                      <ns1:RequestorID ID="ProviderCode"/>
                      <ns1:BookingChannel>
                         <ns1:CompanyName Code="ClientCode"/>
                      </ns1:BookingChannel>
                      <ns1:TPA_Extensions>
                      <Param key="onlyActive" value="0" />
                      </ns1:TPA_Extensions>
                   </ns1:Source>
                </ns1:POS>
               <ns1:RatePlans>
                   <ns1:RatePlan>
                <ns1:DateRange Start="2014-07-12" End="2014-07-14"/>
                    <ns1:HotelRef HotelCode="1" />
                   </ns1:RatePlan>
                </ns1:RatePlans>
             </ns:request>
          </ns:HotelRatePlanRetrieve>
       </s:Body>
    </s:Envelope>

toc

Full HotelRatePlanRetrieveRS
----------------------------

:

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
       <s:Header>
          <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
             <u:Timestamp u:Id="_0">
                <u:Created>2014-05-29T16:10:24.204Z</u:Created>
                <u:Expires>2014-05-29T16:15:24.204Z</u:Expires>
             </u:Timestamp>
          </o:Security>
       </s:Header>
       <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <HotelRatePlanRetrieveResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanRetrieveResult Version="0">
                <RatePlans HotelCode="1" xmlns="http://www.opentravel.org/OTA/2003/05">
                   <RatePlan RatePlanCode="DRV" RatePlanStatusType="Active" BaseRatePlanCode="SRATE" AdjustedPercentage="10.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-12" End="2014-07-12"/>
                      </Rates>
                      <Description>
                         <Text>TarifaDerivada</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV" RatePlanStatusType="Active" BaseRatePlanCode="SRATE" AdjustedPercentage="10.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-13" End="2014-07-13"/>
                      </Rates>
                      <Description>
                         <Text>TarifaDerivada</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV" RatePlanStatusType="Active" BaseRatePlanCode="SRATE" AdjustedPercentage="10.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-14" End="2014-07-14"/>
                      </Rates>
                      <Description>
                         <Text>TarifaDerivada</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV2" RatePlanStatusType="Active" BaseRatePlanCode="SRATE2" AdjustedPercentage="15.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-12" End="2014-07-12"/>
                      </Rates>
                      <Description>
                         <Text>Derivada Prueba</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV2" RatePlanStatusType="Active" BaseRatePlanCode="SRATE2" AdjustedPercentage="15.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-13" End="2014-07-13"/>
                      </Rates>
                      <Description>
                         <Text>Derivada Prueba</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV2" RatePlanStatusType="Active" BaseRatePlanCode="SRATE2" AdjustedPercentage="15.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-14" End="2014-07-14"/>
                      </Rates>
                      <Description>
                         <Text>Derivada Prueba</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE" RatePlanStatusType="Deactivated">
                      <Rates>
                         <Rate Start="2014-07-12" End="2014-07-12">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="150.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <Supplements>
                         <Supplement AgeQualifyingCode="10" CurrencyCode="EUR" Amount="10.00" Start="2014-07-12" End="2014-07-12" SupplementType="Board" InvCode="8"/>
                      </Supplements>
                      <SellableProducts>
                         <SellableProduct InvCode="SROOM2" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>Standard</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-13" End="2014-07-13">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="150.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <Supplements>
                         <Supplement AgeQualifyingCode="10" CurrencyCode="EUR" Amount="10.00" Start="2014-07-13" End="2014-07-13" SupplementType="Board" InvCode="8"/>
                      </Supplements>
                      <SellableProducts>
                         <SellableProduct InvCode="SROOM2" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>Standard</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-14" End="2014-07-14">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="150.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <Supplements>
                         <Supplement AgeQualifyingCode="10" CurrencyCode="EUR" Amount="10.00" Start="2014-07-14" End="2014-07-14" SupplementType="Board" InvCode="8"/>
                      </Supplements>
                      <SellableProducts>
                         <SellableProduct InvCode="SROOM2" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>Standard</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE2" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-12" End="2014-07-12">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="100.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <SellableProducts>
                         <SellableProduct InvCode="STD" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>TestRate</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE2" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-13" End="2014-07-13">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="100.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <SellableProducts>
                         <SellableProduct InvCode="STD" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>TestRate</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE2" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-14" End="2014-07-14">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="100.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <SellableProducts>
                         <SellableProduct InvCode="STD" InvType="ROOM"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>TestRate</Text>
                      </Description>
                   </RatePlan>
                </RatePlans>
             </HotelRatePlanRetrieveResult>
          </HotelRatePlanRetrieveResponse>
       </s:Body>
    </s:Envelope>

toc

Full HotelAvailRetrieveRQ
-------------------------

:

    <s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:u = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <s:Header>
            <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <o:UsernameToken u:Id = "uuid-db9d4b91-f832-4fdf-a2f7-0ebf54af3b77-1">
                    <o:Username>user</o:Username>
                    <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">pass</o:Password>
                </o:UsernameToken>
            </o:Security>
        </s:Header>
        <s:Body xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
            <HotelAvailRetrieve xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
                <request Version = "0">
                    <POS xmlns = "http://www.opentravel.org/OTA/2003/05">
                        <Source>
                            <RequestorID ID = "ProviderCode"/>
                            <BookingChannel>
                                <CompanyName Code = "ClientCode"/>
                            </BookingChannel>
                            <TPA_Extensions>
                                <Param key="onlyActive" value="0" />
                            </TPA_Extensions>
                        </Source>
                    </POS>
                    <HotelAvailRequests xmlns = "http://www.opentravel.org/OTA/2003/05">
                        <HotelAvailRequest>
                            <DateRange Start = "2014-07-01" End = "2014-07-31"/>
                            <HotelRef HotelCode = "1"/>
                        </HotelAvailRequest>
                    </HotelAvailRequests>
                </request>
            </HotelAvailRetrieve>
        </s:Body>
    </s:Envelope>

toc

Full HotelAvailRetrieveRS
-------------------------

:

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
       <s:Header>
          <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
             <u:Timestamp u:Id="_0">
                <u:Created>2014-05-21T16:09:11.031Z</u:Created>
                <u:Expires>2014-05-21T16:14:11.031Z</u:Expires>
             </u:Timestamp>
          </o:Security>
       </s:Header>
       <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <HotelAvailRetrieveResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelAvailRetrieveResult Version="0">
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
                <AvailStatusMessages HotelCode="1" xmlns="http://www.opentravel.org/OTA/2003/05">
                   <AvailStatusMessage>
                      <StatusApplicationControl Start="2014-07-01" End="2014-07-31" RatePlanCode="DRV" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true"/>
                      <LengthsOfStay ArrivalDateBased="false">
                         <LengthOfStay Time="3" TimeUnit="Day" MinMaxMessageType="MinLOS"/>
                         <LengthOfStay Time="3" TimeUnit="Day" MinMaxMessageType="MaxLOS"/>
                      </LengthsOfStay>
                      <RestrictionStatus MinAdvancedBookingOffset="5"/>
                   </AvailStatusMessage>
                   <AvailStatusMessage BookingLimit="9">
                      <StatusApplicationControl Start="2014-07-01" End="2014-07-31" RatePlanCode="SRATE" InvCode="SROOM2" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true"/>
                      <RestrictionStatus Status="Open" SellThroughOpenIndicator="false" MaxAdvancedBookingOffset="50" MinAdvancedBookingOffset="3"/>
                   </AvailStatusMessage>
                </AvailStatusMessages>
             </HotelAvailRetrieveResult>
          </HotelAvailRetrieveResponse>
       </s:Body>
    </s:Envelope>

toc

Full HotelRatePlanNotifRQ
-------------------------

:

    <s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:ns1 = "http://www.opentravel.org/OTA/2003/05">
        <s:Header>
            <wsse:Security>
                <wsse:UsernameToken>
                    <wsse:Username>user</wsse:Username>
                    <wsse:Password>pass</wsse:Password>
                </wsse:UsernameToken>
            </wsse:Security>
        </s:Header>
        <s:Body>
            <ns:HotelRatePlanNotif>
                <ns:request Version = "0">
                    <ns1:POS>
                        <ns1:Source>
                            <ns1:RequestorID ID = "ProviderCode"/>
                            <ns1:BookingChannel>
                                <ns1:CompanyName Code = "Clientcode"/>
                            </ns1:BookingChannel>
                        </ns1:Source>
                    </ns1:POS>
                    <ns1:RatePlans HotelCode = "1">
                        <ns1:RatePlan RatePlanCode = "SRATE" CurrencyCode = "EUR" RatePlanStatusType = "Active">
                            <ns1:Rates>
                                <ns1:Rate Start = "2014-08-01" End = "2014-08-31">
                                    <ns1:BaseByGuestAmts>
                                        <ns1:BaseByGuestAmt Type = "25" AmountAfterTax = "150.00"/>
                                    </ns1:BaseByGuestAmts>
                                </ns1:Rate>
                            </ns1:Rates>
                            <ns1:SellableProducts>
                                <ns1:SellableProduct InvCode = "SROOM2" InvType = "ROOM"/>
                            </ns1:SellableProducts>
                        </ns1:RatePlan>
                        <ns1:RatePlan RatePlanCode = "SRATE" CurrencyCode = "EUR" RatePlanStatusType = "Deactivated">
                            <ns1:Rates>
                                <ns1:Rate Start = "2014-09-01" End = "2014-09-30">
                                    <ns1:BaseByGuestAmts>
                                        <ns1:BaseByGuestAmt Type = "25" AmountAfterTax = "150.00"/>
                                    </ns1:BaseByGuestAmts>
                                </ns1:Rate>
                            </ns1:Rates>
                            <ns1:SellableProducts>
                                <ns1:SellableProduct InvCode = "SROOM2" InvType = "ROOM"/>
                            </ns1:SellableProducts>
                        </ns1:RatePlan>
                    </ns1:RatePlans>
                </ns:request>
            </ns:HotelRatePlanNotif>
        </s:Body>
    </s:Envelope>

toc

Full HotelRatePlanNotifRS
-------------------------

:

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
       <s:Header>
          <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
             <u:Timestamp u:Id="_0">
                <u:Created>2014-05-21T14:55:45.472Z</u:Created>
                <u:Expires>2014-05-21T15:00:45.472Z</u:Expires>
             </u:Timestamp>
          </o:Security>
       </s:Header>
       <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <HotelRatePlanNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanNotifResult Version="0" TransactionIdentifier="f8a51718-4688-44ee-bc78-65b085cbd3ab">
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelRatePlanNotifResult>
          </HotelRatePlanNotifResponse>
       </s:Body>
    </s:Envelope>

toc

Full HotelAvailNotifRQ
----------------------

:

    <s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:u = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <s:Header>
            <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <o:UsernameToken u:Id = "uuid-d740d5c0-ebc5-45c7-bd74-62b20c963d85-7">
                    <o:Username>user</o:Username>
                    <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">pass</o:Password>
                </o:UsernameToken>
            </o:Security>
        </s:Header>
        <s:Body xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
            <HotelAvailNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
                <request Version = "0">
                    <POS xmlns = "http://www.opentravel.org/OTA/2003/05">
                        <Source>
                            <RequestorID ID = "ProviderCode"/>
                            <BookingChannel>
                                <CompanyName Code = "ClientCode"/>
                            </BookingChannel>
                        </Source>
                    </POS>
                    <AvailStatusMessages HotelCode = "1" xmlns = "http://www.opentravel.org/OTA/2003/05">
                        <AvailStatusMessage>
                            <StatusApplicationControl
                                Sun = "true"
                                Sat = "true"
                                Fri = "true"
                                Thur = "true"
                                Weds = "true"
                                Tue = "true"
                                Mon = "true"
                                RatePlanCode = "DRV"
                                Start = "2014-07-01"
                                End = "2014-07-31"/>
                            <LengthsOfStay ArrivalDateBased = "false">
                                <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
                                <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
                            </LengthsOfStay>
                            <RestrictionStatus MinAdvancedBookingOffset = "5"/>
                        </AvailStatusMessage>
                        <AvailStatusMessage BookingLimit = "9">
                            <StatusApplicationControl
                                Sun = "true"
                                Sat = "true"
                                Fri = "true"
                                Thur = "true"
                                Weds = "true"
                                Tue = "true"
                                Mon = "true"
                                RatePlanCode = "SRATE"
                                InvCode = "SROOM2"
                                InvType = "ROOM"
                                Start = "2014-07-01"
                                End = "2014-07-31"/>
                            <RestrictionStatus MinAdvancedBookingOffset = "3" MaxAdvancedBookingOffset = "50"/>
                        </AvailStatusMessage>
                    </AvailStatusMessages>
                </request>
            </HotelAvailNotif>
        </s:Body>
    </s:Envelope>

toc

Full HotelAvailNotifRS
----------------------

:

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
       <s:Header>
          <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
             <u:Timestamp u:Id="_0">
                <u:Created>2014-05-21T15:00:36.910Z</u:Created>
                <u:Expires>2014-05-21T15:05:36.910Z</u:Expires>
             </u:Timestamp>
          </o:Security>
       </s:Header>
       <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <HotelAvailNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelAvailNotifResult Version="0" TransactionIdentifier="b312c77b-4af3-4ef0-85c4-7f90aba031e0">
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelAvailNotifResult>
          </HotelAvailNotifResponse>
       </s:Body>
    </s:Envelope>

toc

Certification Process
---------------------

Once integration is developed, please refer to https://docs.google.co
m/a/xmltravelgate.com/document/d/1nM2yyrvIgsux6NBC3Tjd3648k3c7gbhj3907
VQsATyE\_ in order to certificate it.

toc

Meal Plan Codes (OTA MPT)
-------------------------

Code Description 1 All inclusive 2 American 3 Bed & breakfast 4 Buffet
breakfast 5 Caribbean breakfast 6 Continental breakfast 7 English
breakfast 8 European plan 9 Family plan 10 Full board 11 Full breakfast
12 Half board/modified American plan 13 As brochured 14 Room only 15
Self catering 16 Bermuda 17 Dinner bed and breakfast plan 18 Family
American 19 Breakfast 20 Modified

toc

FAQ
---

*\* What is standard ocupancy?*\*

Standard ocupancy is the standard number of adult paxes of the room.

Standard ocupancy is used to calculate prices under it:

For example, if the standard ocupancy is 2. And it’s loaded...

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>

... The price of two paxes will be 100, and the price for one pax will
be 50.

Standard ocupancy is used to calculate prices above it:

For example, if the standard ocupancy is 2. And it’s loaded...

:

    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "50.00" AgeQualifyingCode = "10"/>
    </AdditionalGuestAmounts>

... The price of two paxes will be 100, but the price of three paxes
will be 250

*\* What is MaxAdditionalGuests in AdditionalGuestAmount?*\*

MaxAdditionalGuests is not the maximum number of additional guests. It’s
just the number of additional guests for which the price is loaded.

*\* How to open and close sales correctly?*\*

In our system we've three booleans to control restrictions:

MasterOpen ArrivalOpen DepartureOpen

When all booleans are true a booking it's allowed in the specified day.

When MasterOpen is false bookings are not allowed in the specified day.

When ArrivalOpen is false bookings are not allowed if the arrival date
to the hotel is the specified day.

When DepartureOpen is false bookings are not allowed if the departure
date from the hotel is the specified day.

To control these three values when you are notifying availability you
have RestrictionStatus/Status and RestrictionStatus/Restriction. Status
indicates the action to do Open or Close. Then the restriction indicates
which of the internal booleans are set. If restriction is not present
all booleans are set. For example:

If you want to sell a product. The first needed thing to do is Open all
bits. This is possible doing:

Send Status=Open, without Restriction.

Then values will be: MasterOpen = true ArrivalOpen = true DepartureOpen
= true

Then, if you don't want paxes with arrival at the specified day, you
must Close Arrival. This is possible doing:

Send Status=Close, Restriction=Arrival.

Then values will be: MasterOpen = true ArrivalOpen = false DepartureOpen
= true

Then, if you don't want any booking with departure at the specified day,
you must Close Departure. This is possible doing:

Send Status=Close, Restriction=Departure.

Then values will be: MasterOpen = true ArrivalOpen = false DepartureOpen
= false

Finally, if you want to allow allow any kinds of bookings again, you
must Open all bits again. This is possible doing:

Send Status=Open, without Restriction.

Then values will be: MasterOpen = true ArrivalOpen = true DepartureOpen
= true

*\* Why AgeQualifyingCode is specified in supplements?*\*

In our system it’s possible to load different supplements for each kind
of pax (Baby, Child or Adult).

XML Travelgate - Edificio Europa, Local 1, bajos - ParcBIT,Palma de
Mallorca, Baleares +34 871 968 181 | http://www.xmltravelgate.com\_ |
Free [URL shortener](http://xml.tg) by XML Travelgate | Copyright 2014
