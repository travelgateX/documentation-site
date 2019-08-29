---
title: Retrieve Messages
keywords: hotel-push, messages, messages files, retrieve messages
search: Hotel-Push - MessagesFiles - Retrieve Messages
sidebar: mydoc_sidebar
permalink: /docs/hotel-push/messages-files/retrieve-messages
---

Providers requests Sellers to retrieve data (Negotiation is started by
Providers).



### HotelRatePlanInventoryRetrieve


Providers will send an HotelRatePlanInventoryRetrieveRQ message to
retrieve a list of hotels, rates and rooms and their configurations. XTG
will return a list of all active rooms and configurations.



### HotelRatePlanInventoryRetrieveRQ



~~~xml
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
~~~


| **Element**			| **Number** | **Type** | **Description**						|
| ----------------------------- | ---------- | -------- | ------------------------------------------------------------- |
| HotelRatePlan/request		| 1          | 		| Root Node							|
| @PrimaryLangID		| 1   	     | String	| ISO Code Language						|
| POS/Source/TPA_Extensions	| 0..1	     |	     	| Optional, empty only active inventory will be recieved.	|
| Param       			| 1 	     | 		|								|
| @key   			| 1   	     | String 	| onlyActive							|
| @value			| 1  	     | String	| 1 - You will recieve all active inventory data. 0 - Active and deactivated inventory will be recieved. (Same case than wihout TPA_Extensions node.) |
| RatePlans/RatePlan/HotelRef	| 0..1       | 		| Contains hotel filter						|
| @HotelCode			| 0..1	     | String	| If the hotel is not specified, it returns Rooms and Rates of all user’s hotels. |



### HotelRatePlanInventoryRetrieveRS


**Example for RatePlan**


~~~xml
    <HotelRatePlanInventoryRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelRatePlanInventoryRetrieveResult Version = "0">
        <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
        <RatePlans HotelCode = "1" HotelName = "Hotel Travelgate" xmlns = "http://www.opentravel.org/OTA/2003/05">
          <RatePlan RatePlanCode = "PACK" RatePlanType = "11" YieldableIndicator = "false" CurrencyCode = "EUR" RatePlanStatusType = "Active" Start = "2016-01-01" End = "2016-05-01">
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
                <PaymentPolicies>
                  <GuaranteePayment PaymentCode="MerchantPayment"/>
                  <GuaranteePayment PaymentCode="DirectPayment">
                    <AcceptedPayments>
                      <AcceptedPayment>
                        <PaymentCard CardCode = "VI" />
                      </AcceptedPayment>
                      <AcceptedPayment>
                        <PaymentCard>
                          <PaymentCard CardCode = "CA" />
                        </PaymentCard>
                      </AcceptedPayment>
                    </AcceptedPayments>
                  </GuaranteePayment>
                </PaymentPolicies>
                <MealsIncluded MealPlanCodes = "8"/>
              </Rate>
            </Rates>
            <Offers>
              <Offer OfferCode="Offer1FN" OfferStatusType="Active">
                 <OfferRules>
                    <OfferRule>
                       <DateRestriction Start="9/1/2017 12:00:00 AM" End="9/1/2017 12:00:00 AM"/>
                       <LengthsOfStay ArrivalDateBased="false">
                         <LengthOfStay Time="2" MinMaxMessageType="MinLOS"/>
                         <LengthOfStay Time="5" MinMaxMessageType="MaxLOS"/>
                       </LengthsOfStay>
                       <DOW_Restrictions>
                          <AvailableDaysOfWeek Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true"/>
                       </DOW_Restrictions>
                    </OfferRule>
              </OfferRules>
              <Discount NightsDiscounted="1" DiscountPattern="First"/>
              <OfferDescription>
                 <Text>Offer 1 Night Free</Text>
              </OfferDescription>
             </Offer>
            </Offers>
            <SellableProducts>
              <SellableProduct InvCode = "STD1" InvType = "ROOM" InvStatusType = "Active" InvTypeCode="ROOMSTD1">
                <GuestRoom>
                  <Quantities StandardNumBeds = "2"/>
                  <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                  <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "8"/>
                  <Description>
                    <Text>Standard</Text>
                  </Description>
                </GuestRoom>
              </SellableProduct>
              <SellableProduct InvCode = "STD2" InvType = "ROOM" InvStatusType = "Deactivated" InvTypeCode="">
                <GuestRoom>
                  <Quantities StandardNumBeds = "2"/>
                  <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                  <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "8"/>
                  <Description>
                    <Text>Standard</Text>
                  </Description>
                </GuestRoom>
              </SellableProduct>
              <SellableProduct InvCode = "STD2" InvType = "ROOM" InvStatusType = "Deactivated" InvTypeCode="">
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
~~~


If your Rate has information about meals included in rate, this will be
shown in MealsIncluded tag.

In previous example we receive one hotel, one rate and 2 rooms. One of
the rooms appears twice because each appearance sets the different
occupancies. STD2 room has 2 possible occupations: 2 adults + 1 child or
2 adults.



**Example for Derived RatePlan**


~~~xml
    <HotelRatePlanInventoryRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
        <HotelRatePlanInventoryRetrieveResult Version = "0">
            <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
            <RatePlans HotelCode = "1" HotelName = "Hotel Test Pruebas Travelgate " xmlns = "http://www.opentravel.org/OTA/2003/05">
                <RatePlan RatePlanCode = "DRVT" BaseRatePlanCode = "SRATE2" RatePlanStatusType = "Active">
                    <SellableProducts>
                        <SellableProduct InvCode = "TRP" InvType = "ROOM" InvStatusType = "Active">
                            <GuestRoom>
                                <Quantities StandardNumBeds = "3"/>
                                <Occupancy MinOccupancy = "3" MaxOccupancy = "3" AgeQualifyingCode = "10"/>
                                <Room RoomTypeCode = "TRP" RoomID = "44"/>
                                <Description>
                                    <Text>Triple</Text>
                                </Description>
                            </GuestRoom>
                        </SellableProduct>
                        <SellableProduct InvCode = "TRP" InvType = "ROOM" InvStatusType = "Active">
                            <GuestRoom>
                                <Quantities StandardNumBeds = "3"/>
                                <Occupancy MinOccupancy = "4" MaxOccupancy = "4" AgeQualifyingCode = "10"/>
                                <Room RoomTypeCode = "TRP" RoomID = "44"/>
                                <Description>
                                    <Text>Triple</Text>
                                </Description>
                            </GuestRoom>
                        </SellableProduct>
                        <SellableProduct InvCode = "TRP" InvType = "ROOM" InvStatusType = "Active">
                            <GuestRoom>
                                <Quantities StandardNumBeds = "3"/>
                                <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                                <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "8"/>
                                <Room RoomTypeCode = "TRP" RoomID = "44"/>
                                <Description>
                                    <Text>Triple</Text>
                                </Description>
                            </GuestRoom>
                        </SellableProduct>
                    </SellableProducts>
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
~~~



| **Element**	  			    | **Number** | **Type** |   **Description**					|
| ----------------------------------------- | ---------- | -------- | ------------------------------------------------- |
| HotelRatePlanResponse/HotelRatePlanResult | 1     	 |	    | Root Node				  		|
| Success           			    | 0..1     	 |	    | Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| RatePlans         			    | 0..1    	 |	    | Present when sucess 				|
| @HotelCode				    | 1  	 | String   | Hotel code whose information is provided by the method. |
| @HotelName				    | 1 	 | String   | Hotel name.					|
| RatePlans/RatePlan			    | 0..n    	 |	    | Present when rates exists.			|
| @RatePlanCode				    | 1 	 | String   | Rate plan code. 					|
| @RatePlanStatusType			    | 1		 | String   | Active or Deactivated.				|
| @RatePlanType				    | 0..1	 | Integer  | OTA RPT Code (11 - Package). 			|
| @YieldableIndicator			    | 0..1	 | Boolean  | Used to indicate the rate plan is subject to yield management logic. When false, the rate plan is not yieldable. When true or it's not returned, the rate plan is yieldable.|
| @CurrencyCode				     0..1	 | String   | ISO Currency (EUR). Only null for derived rates. 	|
| @Start      				    | 0..1 	 | Date	    | Start date of the rate booking window (Booking Dates for wich the rate will be available). |
| @End        				    | 0..1	 | Date     | End date of the rate booking window (Booking Dates for wich the rate will be available). |
| @Duration				    | 0..1  	 | String   | Duration of the rate booking window. Only present if Start and End are not. When present value is always 0 and means the rate has no booking window (available all dates). |
| _@BaseRatePlanCode			    | 0..1 	 | String   | Rate plan code of the base rate plan. Only returned for derived rates. |
| _@RatePlanStatusType			    | 1 	 | String   | Indicates if the rate plan is active or not for this dates. Possible values: "Active", "Deactivated". |
| RatePlans/RatePlan/Description/Text	    | 1     	 |	    | Description of rate. 				|
| RatePlans/BookingRules		    | 0..1       |	    | Present if exists booking rules for the given RatePlan.|
| BookingRules/BookingRule		    | 1..n       |	    | Booking rules.					|
| @Code       				    | 0..1	 | String   | Code of the booking rule (empty if are viewships conditions). |
| BookingRule/CancelPenalties		    | 1          | 	    | Cancel penalties of the current booking rule.	|
| CancelPenalties/CancelPenalty		    | 1..n       |	    | Cancel penalty.					|
| @NonRefundable			    | 1 	 | Boolean  | Indicates if the rateplan is refundable or not. 	|
| CancelPenalty/Deadline 		    | 1          |	    | Contains information about the the deadline of the cancel penalty. |
| @OffsetTimeUnit			    | 1 	 | String   | Indicates the units of time that apply to the deadline.|
| @OffsetUnitMultiplier			    | 1 	 | Integer  | The number of units of DeadlineTimeUnit.  	|
| @OffsetDropTime			    | 1 	 | String   | Indicating when the deadline drop time goes into effect. |
| CancelPenalty/AmountPercent		    | 1          |	    | Contains information about the the deadline of the cancel penalty. |
| @NmbrOfNights				    | 0..1	 | Integer  | Number of nights that will be charged in case of cancellation applying the current cancel penalty. NmbrOfNights, Percent or Amount must be present. |
| @Percent    				    | 0..1	 | Decimal  | Percent of the total amount that will be charged in case of cancellation applying the current cancel penalty. NmbrOfNights, Percent or Amount must be present. |
| @Amount     				    | 0..1	 | Decimal  | Amount that will be charged in case of cancellation applying the current cancel penalty. NmbrOfNights, Percent or Amount must be present. |
| @CurrencyCode				    | 0..1	 | String   | Currency code of the amount. Must be present if amount is present. |
| BookingRule/Viewerships		    | 0..1       |	    | Present if exits viewerships conditions. 		|
| BookingRule/Viewerships/Viewership	    | 1..n	 |	    |							|
| BookingRule/Viewerships/Viewership/LocationCodes | 1   |	    | One node for each viewership condition.		|
| @LocationCodesInclusive		    | 1 	 | Boolean  | When its true this rate can be request for next countryCode, when false can not be requested from this country. |
| BookingRule/Viewerships/Viewership/LocationCodes/LocationCode | 0..1 |  | If is missing, applies to all countryCode againthe other viewership condition. |
| @CountryCode				   | 1 		 | String   | Country ISO2 code from can or can not be requested this rate. |
| RatePlan/Rate    			   | 0..1    	 |	    | Node that contains information about the rate. Only null for derived rates. |
| Rate/AdditionalGuestAmounts		   | 1     	 |	    | Node that contains static information about additional guests. |
| AdditionalGuestAmounts/AdditionalGuestAmount | 1..n    |	    | Static information about additional guests. 	|
| @AgeQualifyingCode			   | 1 		 |	    | String Age qualifying code of the additional guest. |
| @MaxAge     				   | 1 		 | Integer  | Max age not inclusive of the additional guest. 	|
| Rate/PaymentPolicies			   | 1     	 |	    | Node that contains the accepted payments information. |
| PaymentPolicies/GuaranteePayment	   | 1..n    	 |	    | Node that contains information about an accepted payment. |
| @PaymentCode				   | 1     	 |	    | Contains the payment method accepted by the rate. See Payment Type Codes list in section 7.6.3. |
| GuaranteePayment/AcceptedPayments	   | 0..1    	 |	    | Node that contains the accepted payments information. Only present if PaymentCode is not "MerchantPayment". |
| AcceptedPayments/AcceptedPayment	   | 1..n    	 |	    | Node that contains the credit card accepted.	|
| AcceptedPayment/PaymentCard		   | 1..n    	 |	    | Node that contains the credit card accepted.	|
| @CardCode        			   | 1     	 | String   | Contains the credit card code. See Credit Card Codes list in section 7.6.4. |
| RatePlans/RatePlan/Rates/Rate/MealsIncluded | 0..1	 |	    | Present if board is included with this rate.	|
| @MealPlanCodes			   | 1 		 | Integer  | OTA MPT Code. 					|
| RatePlans/RatePlan/Offers    | 0..1    |          | Node that contains the offers a rate can have
| RatePlans/RatePlan/Offers/Offer | 1..n    |          | Offer itself
| @OfferCode                   | 1      | Integer   | Code to identify the Offer
| @OfferStatusType             | 1      | String    | Active or Deactivated
| RatePlans/RatePlan/Offers/Offer/OfferRules | 1    |          | Node that contains the OfferRules
| RatePlans/RatePlan/Offers/Offer/OfferRules/OfferRule | 1    |          | Rules that need to happen in order to apply the offer
| RatePlans/RatePlan/Offers/Offer/OfferRules/OfferRule/DateRestriction | 0..1   |          | Dates that restrict the offer
| @Start                       | 1      | Date     | Date in which the offer starts 
| @End                         | 1      | Date     | Date in which the offer ends
| RatePlans/RatePlan/Offers/Offer/OfferRules/OfferRule/LenghtsOfStay | 0..1  |          | Node that contains Lengh of Stays
| @ArrivalDateBased            | 1      | Boolean  | 
| RatePlans/RatePlan/Offers/Offer/OfferRules/OfferRule/LenghtsOfStay/LengthOfStay | 1..n  |          | Length of Stay Restrictions
| @Time                        | 1      | Integer   | Days of the Lenght of Stay
| @MinMaxMessageType           | 1      | String    | MinLOS or MaxLOS
| RatePlans/RatePlan/Offers/Offer/OfferRules/OfferRule/DOW_Restrictions | 1    |          | Node that contains Days of The Week rules
| RatePlans/RatePlan/Offers/Offer/OfferRules/OfferRule/DOW_Restrictions/AvailableDaysOfWeek | 1    |          | Offer days available
| @Mon...Sun                   | 1      | Boolean   | Days from Monday to Sunday. If false, the offer does not apply on that day
| RatePlans/RatePlan/Offers/Offer/Discount | 1    |          | Discount that the offer would have. Currently, only free nights allowed
| @NightsDiscounted            | 1      | Integer   | Number of nights that would be substracted from the final price
| @DiscountPattern             | 1      | String   | First, last or cheapest night/s to be discounted
| RatePlans/RatePlan/Offers/Offer/OfferDescription | 1    |          | Description of the Offer 
| RatePlans/RatePlan/Offers/Offer/OfferDescription/Text | 1    | String    | Where the text goes 
| RatePlans/RatePlan/SellableProducts	   | 0..1    	 |	    | List of sellable products. In derived rates, if it is not present it applies to all rooms. In other cases, it informs the rooms that applies. |
| RatePlans/RatePlan/SellableProducts/SellableProduct | 0..n |	    | Present if rooms associed with this rate.		|
| @InvCode    				   | 1 		 | Integer  | Sellable Product Code.				|
| @InvType    				   | 1 		 | Integer  | Sellable product type (ROOM).			|
| @InvStatusType			   | 1 	 	 | String   | Active or Deactivated.				|
| @InvTypeCode				   | 1 		 | String   | Sellers internal Product Code. Channels can ignore. |
| RatePlans/RatePlan/SellableProduct/GuestRoom | 1..n	 |	    |							|
| RatePlans/RatePlan/SellableProduct/GuestRoom/Quantities | 1 |	    |     						|
| @StandardNumBeds			   | 1 		 | Integer  | Standard occupation of room. 			|
| RatePlans/RatePlan/SellableProduct/GuestRoom/Occupancy | 1 |	    |     						|
| @MinOccupancy				   | 1 		 | Integer  | Min occupation.					|
| @MaxOccupancy				   | 1 		 | Integer  | Max occupation.  					|
| @AgeQualifyingCode			   | 1 		 | Integer  | (10 - Adult,8 - Child,7 - Infant).		|
| RatePlans/RatePlan/SellableProduct/GuestRoom/Description/Text | 1 | String | Room description.			|



### HotelRatePlanRetrieve


Providers will send an HotelRatePlanRetrieveRQ message to retrieve a
complete break down of rates. XTG will return break down of hotel /
rates / rooms.



### HotelRatePlanRetrieveRQ



~~~xml 
    <HotelRatePlanRetrieve>
      <request>
        <POS>
          <Source>
            <RequestorID ID="Provider1" />
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
~~~


| **Element**			| **Number**	| **Type**	| **Description**					|
| ----------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| HotelRatePlanRetrieve/request	| 1      	|		| Root Node.						|
| POS/Source/TPA_Extensions	| 0..1    	|		| Optional, empty only active RatePlans/Rooms will be received. |
| Param            		| 1       	|		|							|
| @key        			| 1  		| String	| onlyActive.						|
| @value      			| 1  		| String	| 1 - You will receive all active RatePlans/Rooms data. 0 - Active and deactivated RatePlans/Rooms will be received. (Same case than wihout TPA_Extensions node). |
| RatePlans/RatePlan/DateRange	| 1      	|		| Contains date filter.					|
| @Start      			| 1  		| Date		| Start date to search rates. 				|
| @End        			| 1  		| Date		| End date to search rates.				|
| RatePlans/RatePlan/HotelRef	| 1      	| 		| Contains hotel filter.				|
| @HotelCode  			| 1  		| String	| Hotel date to search rates.				|
| RatePlans/RatePlan/RatePlanCandidates/RatePlanCandidate | 0..1 |  | Contains rate filter.             		|
| @RatePlanCode			| 1  		| String	| Rate Plan Code to search rates.			|



### HotelRatePlanRetrieveRS


**Example for RatePlan**


~~~xml
    <HotelRatePlanRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelRatePlanRetrieveResult Version = "0">
        <RatePlans HotelCode = "12" xmlns = "http://www.opentravel.org/OTA/2003/05">
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Active">
            <Rates>
              <Rate Start = "2013-12-20" End = "2013-12-20">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" NumberOfGuests = "3"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-20" End = "2013-12-20" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-20" End = "2013-12-20" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Active">
            <Rates>
              <Rate Start = "2013-12-21" End = "2013-12-21">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" NumberOfGuests = "3"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-21" End = "2013-12-21" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-21" End = "2013-12-21" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-22" End = "2013-12-22">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" NumberOfGuests = "3"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-22" End = "2013-12-22" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-22" End = "2013-12-22" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-23" End = "2013-12-23">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" NumberOfGuests = "3"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-23" End = "2013-12-23" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-23" End = "2013-12-23" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-24" End = "2013-12-24">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" Type = "25"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-24" End = "2013-12-24" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-24" End = "2013-12-24" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-25" End = "2013-12-25">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" Type = "25"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-25" End = "2013-12-25" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-25" End = "2013-12-25" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-25" End = "2013-12-25">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" Type = "14" Code = "2-0-0"/>
                  <BaseByGuestAmt AmountAfterTax = "330.00" CurrencyCode = "EUR" Type = "14" Code = "2-1-0"/>
                </BaseByGuestAmts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-25" End = "2013-12-25" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12" ChargeTypeCode = "2-0-0"/>
              <Supplement Start = "2013-12-25" End = "2013-12-25" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12" ChargeTypeCode = "3-0-0"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
        </RatePlans>
      </HotelRatePlanRetrieveResult>
    </HotelRatePlanRetrieveResponse>
~~~ 


Gets the Rate BAR for the Hotel 12 from 2013-12-20 to 2013-12-25. In
this case, the rate LOWCOST has two rooms associated, you will receive a
RatePlan for each day-room-rate.



**Example for Derived RatePlan**


~~~xml
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
~~~ 


For a derived rate you will not receive the rooms associated. Derived
rates have associated all the rooms from the base rate plan.



### HotelAvailRetrieve


Providers will send an HotelAvailRetrieveRQ message to retrieve a
complete break down of availability. XTG will return break down of hotel
/ rates / rooms.



### HotelAvailRetrieveRQ



~~~xml
    <HotelAvailRetrieve>
      <request>
        <POS>
          <Source>
            <RequestorID ID = "Provider1"></RequestorID>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"/>
            </BookingChannel>
            <TPA_Extensions>
              <Param key = "onlyActive" value = "0"/>
            </TPA_Extensions>
          </Source>
        </POS>
        <HotelAvailRequests>
          <HotelAvailRequest>
            <DateRange Start = "2013-12-20" End = "2013-12-25"/>
            <HotelRef HotelCode = "12"/>
            <RatePlanCandidates>
              <RatePlanCandidate RatePlanCode = "BAR"></RatePlanCandidate>
            </RatePlanCandidates>
          </HotelAvailRequest>
        </HotelAvailRequests>
      </request>
    </HotelAvailRetrieve>
~~~



| **Element**			| **Number**	| **Type**	| **Description**					|
| ----------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| POS/Source/TPA_Extensions 	| 0..1 		| 		| Optional, empty only active RatePlans/Rooms will be recieved. |
| Param 			| 1 		| 		|							|
| @key 				| 1 		| String 	| onlyActive.						|
| @value			| 1 		| String 	| 1 - You will recieve all active RatePlans/Rooms data. 0 - Active and deactivated RatePlans/Rooms will be recieved. (Same case than wihout TPA_Extensions node). |
| HotelAvailRetrieve/request/HotelAvailRequests/HotelAvailRequest | 1 |	| Root Node.					|
| DateRange 			| 1 		| 		| Contains date filter.					|
| @Start 			| 1 		| Date 		| Start date to search rates.				|
| @End 				| 1 		| Date 		| End date to search rates.				|
| HotelRef 			| 1 		| 		| Contains hotel filter.				|
| @HotelCode 			| 1 		| String 	| Hotel date to search rates.				|
| RatePlanCandidates 		| 0..1 		| 		| If exists, contains rate filter.			|
| RatePlanCandidates/RatePlanCandidate | 1..n 	| 		|							|
| @RatePlanCode 		| 1 		| String 	| Rate Plan Code to search rates.			 1



### HotelAvailRetrieveRS


**Example for RatePlan**


~~~xml
    <HotelAvailRetrieveResponse>
      <HotelAvailRetrieveResult>
        <Success/>
        <AvailStatusMessages HotelCode = "12">
          <AvailStatusMessage BookingLimit = "9" BookingSold = "0">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-25" RatePlanCode = "BAR" InvCode = "APT" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "2" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "8" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Status = "Open" SellThroughOpenIndicator = "false" MinAdvancedBookingOffset = "5"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12" BookingSold = "2">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-21" RatePlanCode = "LOWCOST" InvCode = "JUN_1" InvType = "ROOM" Mon = "false" Tue = "false" Weds = "false" Thur = "false" Fri = "true" Sat = "true" Sun = "false"/>
            <RestrictionStatus Restriction = "Master" Status = "Close"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12" BookingSold = "2">
            <StatusApplicationControl Start = "2013-12-22" End = "2013-12-25" RatePlanCode = "LOWCOST" InvCode = "JUN_1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "false" Sat = "false" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "9" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Status = "Close" Restriction = "Arrival"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12" BookingSold = "2">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-25" RatePlanCode = "LOWCOST" InvCode = "STD1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "false">
              <LengthOfStay Time = "1" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "2" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Status = "Open" SellThroughOpenIndicator = "false" MinAdvancedBookingOffset = "6" MaxAdvancedBookingOffset = "999"/>
          </AvailStatusMessage>
          <AvailStatusMessage>
            <StatusApplicationControl Start = "2013-12-26" End = "2013-12-27" RatePlanCode = "LOWCOST" InvCode = "STD1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <RestrictionStatus Status = "Open" SellThroughOpenIndicator = "false" MaxAdvancedBookingOffset = "2"/>
          </AvailStatusMessage>
        </AvailStatusMessages>
      </HotelAvailRetrieveResult>
    </HotelAvailRetrieveResponse>
~~~


**Example for Derived RatePlan**


~~~xml
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
~~~


| **Element**			| **Number**	| **Type**	| **Description**					|
| ----------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| HotelAvailRetrieveResponse/HotelAvailRetrieveResult | 1 |	| Root Node.						|
| Success    			| 0..1   	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. | 
| AvailStatusMessages		| 0..1   	|		| Present when success.					|
| @HotelCode			| 1		| String	| Hotel code whose information is provided by the method. |
| AvailStatusMessages/AvailStatusMessage | 0..n |		| 							|
| @BookingLimit			| 0..1		| Integer	| Identifies the number of available rooms per Room & RatePlan for the indicated dates. Not mandatory when the @Status is Close or is a derived rate. |
| @BookingSold			| 0..1		| Integer	| Identifies the number of sold rooms per Room & RatePlan for the indicated dates. This value is reset when a new BookingLimit is charged by an HotelAvailNotif request. Not mandatory when the @Status is Close or is a derived rate. |
| AvailStatusMessages/AvailStatusMessage/StatusApplicationControl | 1 |	 |						|
| @Start			| 1		| Date		| Start date.						|
| @End				| 1 		| Date		| End date.						|
| @RatePlanCode			| 1		| String	| Rate Plan Code.					|
| @InvCode			| 0..1		| String	| Room Code. Null for derived rates.  			|
| @InvType			| 0..1		| String	| Product type (ROOM). Null for derived rates.  	|
| @Mon  			| 1 		| Boolean	| Indicates whether the AvailStatusMessage data applies to Mondays. |
| @Tue  			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Tuesdays. |
| @Weds 			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Wednesdays. |
| @Thur 			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Thursdays. |
| @Fri  			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Fridays. |
| @Sat  			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Saturdays. |
| @Sun  			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Sundays. |
| AvailStatusMessages/AvailStatusMessage/LengthsOfStay | 0..1 | |							|
| @ArrivalDateBased		| 0..1		| Boolean	| When its true, the minimum and maximum stay is checked ONLY the first day of the availability, when false or not indicated, the minimum and maximum stay is checked all the availability days. |
| AvailStatusMessages/AvailStatusMessage/LengthsOfStay/LengthOfStay | 1..2 | | 						|
| @Time 			| 1		| Integer	| Indicates the number of @TimeUnit for this stay.	|
| @TimeUnit			| 1		| String	| Day.							|
| @MinMaxMessageType		| 1		| String	| (MinLOS, MaxLOS) Indicates the minimum or maximum stay for his AvailStatusMessage. |
| AvailStatusMessages/AvailStatusMessage/RestrictionStatus | 0..1 | |			 				|
| @Status			| 1		| String	| (Open, Close).					|
| @Restriction			| 0..1		| String	| Master. This is the master availability. If master availability is ‘Closed’, the product is not bookable if any of the stay dates includes one of the dates specified by the Application Control element. If master availability is ‘Open’, additional restrictions on arrival and departure may be placed (Master, Arrival, Departure). |
| @MinAdvancedBookingOffset	| 0..1		| Integer	| Minimum number of days before the check-in date aftere which the product is not available to be booked. This restriction is usually used to offer discounts on early bookings. |
| @MaxAdvancedBookingOffset	| 0..1		| Integer	| Maximum number of days before the check-in date after which the product is not available to be booked. This restriction is usually used to offer last minute discounts on unsold inventory. |
| @SellThroughOpenIndicator	| 0..1		| Boolean	| When @Status is open, in this element you can indicate this room or room/ratePlan can be sold without limit (like BookingLimit=MaxInteger). Null for derived rates. |



### HotelResRetrieve


Providers will send an HotelResRetrieveRQ message to retrieve a list of
seller reservations.



### HotelResRetrieveRQ



~~~xml
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
~~~


| **Element**			| **Number**	| **Type**	| **Description**					|
| ----------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| HotelResRetrieve/request	| 1          	|		| Root Node.						|
| UniqueID         		| 0..1       	|		| If present filter by UniqueID content.		|
| @ID         			| 1    		| String	| Booking ID.						|
| @IDContext  			| 1    		| String	| (Client, Provider, Internal).  			|
| ReadRequests     		| 0..1       	|		| If present filter by its content.			|
| ReadRequests/HotelReadRequest	| 1..n       	|		| Node containing the read request data.		|
| @HotelCode  			| 0..1 		| String	| Hotel code.    					|
| HotelReadRequest/SelectionCriteria | 1        |		|							|
| @Start      			| 1    		| DateTime	| Start date to search bookings. DateTime Format is yyyy-MM-ddThh:mm:ss Date must be in UTC. |
| @End        			| 1    		| DateTime	| End date to search bookings. DateTime Format is yyyy-MM-ddThh:mm:ss Date must be in UTC. |
| @DateType   			| 1    		| String	| (ArrivalDate, CreateDate, DepartureDate, LastUpdateDate). |



### HotelResRetrieveRS



~~~xml
    <HotelResRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/client/2012/10">
      <HotelResRetrieveResult Version = "0">
        <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
        <HotelReservations xmlns = "http://www.opentravel.org/OTA/2003/05">
          <HotelReservation ResStatus = "Confirmed" CreateDateTime = "2013-09-01T11:09:57.5387811Z">
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
                  <RoomRate EffectiveDate = "2013-09-03" ExpireDate = "2013-09-07" RoomTypeCode = "STD1" InvBlockCode = "7" RatePlanCode = "BAR">
                    <Rates>
                      <Rate EffectiveDate = "2013-09-03" ExpireDate = "2013-09-07">
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
                    <Deadline AbsoluteDeadline = "2013-08-29" OffsetTimeUnit = "Day" OffsetUnitMultiplier = "5" OffsetDropTime = "BeforeArrival"/>
                    <AmountPercent Percent = "15.00" CurrencyCode = "EUR"/>
                  </CancelPenalty>
                  <CancelPenalty PolicyCode = "cd4aa15e-82e4-420a-937e-63e802ba352a" NonRefundable = "false">
                    <Deadline AbsoluteDeadline = "2013-08-31" OffsetTimeUnit = "Day" OffsetUnitMultiplier = "3" OffsetDropTime = "BeforeArrival"/>
                    <AmountPercent NmbrOfNights = "2" CurrencyCode = "EUR"/>
                  </CancelPenalty>
                </CancelPenalties>
                <BasicPropertyInfo HotelCode = "12" HotelName = "Adagio City Aparthotel Annecy Centre"/>
                <ServiceRPHs>
                  <ServiceRPH RPH = "1"/>
                  <ServiceRPH RPH = "2"/>
                </ServiceRPHs>
              </RoomStay>
            </RoomStays>
            <ResGuests>
              <ResGuest ResGuestRPH = "1" AgeQualifyingCode = "10">
                <Profiles>
                  <ProfileInfo>
                    <Profile>
                      <Customer>
                        <PersonName>
                          <NamePrefix>Mr</NamePrefix>
                          <GivenName>Test11</GivenName>
                          <Surname>TestAp11</Surname>
                        </PersonName>
                      </Customer>
                    </Profile>
                  </ProfileInfo>
                </Profiles>
                <GuestCounts>
                  <GuestCount Age = "30"/>
                </GuestCounts>
              </ResGuest>
              <ResGuest ResGuestRPH = "2" AgeQualifyingCode = "10">
                <Profiles>
                  <ProfileInfo>
                    <Profile>
                      <Customer>
                        <PersonName>
                          <NamePrefix>Mr</NamePrefix>
                          <GivenName>Test22</GivenName>
                          <Surname>TestAp22</Surname>
                        </PersonName>
                      </Customer>
                    </Profile>
                  </ProfileInfo>
                </Profiles>
                <GuestCounts>
                  <GuestCount Age = "30"/>
                </GuestCounts>
              </ResGuest>
            </ResGuests>
            <ResGlobalInfo>
              <Total AmountBeforeTax = "200.00" AmountAfterTax = "200.00" CurrencyCode = "USD"/>
              <Guarantee PaymentCode = "MerchantPayment"/>
              <HotelReservationIDs>
                <HotelReservationID ResID_Value = "123456" ResID_SourceContext = "Client"/>
                <HotelReservationID ResID_Value = "124" ResID_SourceContext = "Internal"/>
                <HotelReservationID ResID_Value = "115137" ResID_SourceContext = "Provider"/>
              </HotelReservationIDs>
              <Profiles>
                <ProfileInfo>
                  <Profile>
                    <Customer>
                      <PersonName>
                        <NamePrefix>Mr</NamePrefix>
                        <GivenName>Test12</GivenName>
                        <Surname>TestAp12</Surname>
                      </PersonName>
                      <Telephone PhoneTechType = "1" PhoneNumber = "1212121212" FormattedInd = "false" DefaultInd = "true"/>
                      <Email DefaultInd = "true" EmailType = "1">test@yourdomain.com</Email>
                      <Address Type = "1">
                        <AddressLine>B-15, Sector-57</AddressLine>
                        <CityName>NOIDA</CityName>
                        <PostalCode>201301</PostalCode>
                        <StateProv StateCode = "UP">Uttar Pradesh</StateProv>
                        <CountryName Code = "IN">INDIA</CountryName>
                      </Address>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGlobalInfo>
          </HotelReservation>
        </HotelReservations>
      </HotelResRetrieveResult>
    </HotelResRetrieveResponse>
~~~


| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| HotelResRetrieveResponse		| 1     	|		| Root Node.					|
| HotelResRetrieveResponse/HotelResRetrieveResult | 1   |		| Contains the result of reservation retrieve.	|
| HotelResRetrieveResult/Success	| 0..1    	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| HotelResRetrieveResult/HotelReservations | 0..1   	|		| Node containing the reservation.		|
| HotelReservations/HotelReservation	| 1     	|		| Node containing information about the reservation.|
| @ResStatus				| 1 		| String	| Status of the reservation. Possible status are: 'Confirmed', 'Requested' and 'Cancelled'. |
| @CreateDateTime			| 1 		| DateTime	| Date and time when the reservation was made.	|
| @LastModifyDateTime			| 0..1		| DateTime	| Date and time when the reservation was modified. Should only be present if the reservation status is 'Cancelled'. |
| HotelReservation/RoomStays		| 1     	|		| Node containing the RoomStays of the reservation.|
| RoomStays/RoomStay			| 1..n    	|		| Node containing RoomStay information.		|
| RoomStay/RoomTypes			| 1     	|		| Node containing information about rooms.	|
| RoomTypes/RoomType			| 1     	|		| Node containing information about one room.   |
| @RoomTypeCode				| 1 		| String	| Room code.					|
| @RoomID				| 1 		| String	|Id of the room.				|
| RoomType/RoomDescription		| 1     	|		| Node containing the description of the room.	|
| RoomDescription/Text 			| 1 		| String	| Description of the room.			|
| RoomStay/RatePlans			| 1     	|		| Node containing information about RatePlans.	|
| RatePlans/RatePlan			| 1     	|		| Node containing information about one RatePlan.|
| @RatePlanCode				| 1     	|		| RatePlan code.				|
| RatePlan/RatePlanDescription		| 1     	|		| Node containing information the RatePlan description one RatePlan. |
| RatePlanDescription/Text		| 1 		| String	| Description of the RatePlan.			|
| RatePlan/Commission			| 1     	|		| Node containing the commission of the RatePlan.|
| Percent      				| 1 		| Decimal	| Commission of the RatePlane. 			|
| RoomStay/RoomRates			| 1     	|		| Node containing information about RoomRates.	|
| RoomRates/RoomRate			| 1     	|		| Node containing information about one RoomRate.|
| @EffectiveDate			| 1 		| Date		| Effective date when the RoomRate start applying.|
| @ExpireDate				| 1 		| Date		| Expire date when the RoomRate ends applying. Check out night minus 1. |
| @RoomTypeCode				| 1 		| String	| Code of the Room.				|
| @InvBlockCode				| 1 		| String	| Inventary block code.				|
| @RatePlanCode				| 1 		| String	| Code of the RatePlan.				|
| RoomRate/Rates			| 1     	|		| Node containing information about the rates.	|
| Rates/Rate    			| 1     	|		| Node containing information about one rate.	|
| @EffectiveDate			| 1 		| Date		| Effective date when the Rate start applying.	|
| @ExpireDate				| 1 		| Date		| Expire date when the Rate ends applying.	|
| Rate/Base    				| 1     	|		| Node containing core information about the rate.|
| @AmountBeforeTax			| 0..1		| Decimal	| Amount before tax of the rate.		|
| @AmountAfterTax			| 1 		| Decimal	| Amount after tax of the rate.			|
| @CurrencyCode				| 1 		| String  	| Currency code of the rate.			|
| Rate/CancelPolicies			| 1     	|		| Node containing information about cancel policies which are applied to the rate. |
| CancelPolicies/CancelPenalty		| 0..n   	|		| Node containing information about one cancel penalty. |
| @PolicyCode				| 1 		| String  	| Policy code of the cancel penalty.		|
| RoomRate/Total			| 1     	|		| Node containing information about the total price of the RoomRate. |
| @AmountBeforeTax			| 0..1		| Decimal	| Amount before tax of the RoomRate.		|
| @AmountAfterTax			| 1 		| Decimal	| Amount after tax of the RoomRate.		|
| @CurrencyCode				| 1 		| String	| Currency code of the RoomRate.		|
| RoomStay/CancelPenalties		| 1     	|		| Node containing all cancel penalties of the RoomStay. |
| CancelPenalties/CancelPenalty		| 0..n    	|		| Node containing information about one cancel penalty. |
| @PolicyCode				| 1 		| String	| Policy code of the cancel penalty.		|
| @NonRefundable			| 1 		| Boolean	| Indicates whether the Rate is refundable or not. |
| CancelPenalty/Deadline		| 0..n    	|		| Node containing information about the deadline of the cancel penalty. |
| @AbsoluteDeadline			| 1 		| DateTime	| Indicates when the absolute deadline.		|
| @OffsetTimeUnit			| 1 		| String	| Time unit of the offset for the absolute deadline.|
| @OffsetUnitMultiplier			| 1 		| Integer	| Number of time units of offset for the absolute ege deadline. |
| @OffsetDropTime			| 1 		| String	| Indicates when the deadline is applied.	|
| CancelPenalty/AmountPercent		| 0..n    	|		| Amount of the cancel penalty.			|
| @Percent				| 1 		| String	| Percent of the total charged as a cancel penalty amount. Percent or NmbrOfNights must be present. |
| @NmbrOfNights				| 1 		| String	| Number of nights charged as a cancel penalty amount. |
| @CurrencyCode				| 1 		| String	| Currency code of the cancel penalty amount.	|
| RoomStay/BasicPropertyInfo		| 1     	|		| Node containing basic information of the property.|
| RoomStay/ServiceRPHs			| 1     	|		| Node containing information of the guests of the room. |
| ServiceRPHs/ServiceRPH		| 1..n    	|		| Node containing information of a guest of the room.|
| @RPH    				| 1 		| String	| Code of a guest of the room. Match with @ResGuestRPH at the ResGuests node. |
| HotelCode    				| 1 		| Integer	| Hotel code.					|
| HotelName    				| 1 		| String	| Hotel name.					|
| HotelReservation/ResGuests		| 1     	|		| Node containing all reservation guests.	|
| ResGuests/ResGuest			| 1..n    	|		| Node containing information about one of the guests. |
| ResGuest/ResGuest			| 1..n    	|		| Node containing information about one of the guests. |
| @ResGuestRPH				| 1 		| Integer	| RPH of the guest.				|
| @AgeQualifyingCode			| 1 		| Integer	| Age qualifying code of the guest.		|
| ResGuest/Profiles			| 1     	|		| Node containing information about the profiles of the guest. |
| Profiles/ProfileInfo			| 1     	|		| Node containing information about the profile of the guest. |
| ProfileInfo/Customer			| 1     	|		| Node containing customer information of the guest. |
| Customer/PersonName			| 1     	|		| Node containing the person name of the guest.	|
| PersonName/NamePrefix			| 1 		| String	| Prefix/Traitement name of the guest.		|
| PersonName/GivenName			| 1 		| String	| Given name of the guest.			|
| PersonName/Surname			| 1 		| String	| Surname of the guest.				|
| ResGuest/GuestCounts			| 1     	|		| Node containing quantity informations for the guest. |
| GuestCounts/GuestCount		| 1     	|		| Node containing quantity information for the guest.|
| @Age    				| 1 		| Integer	| Age of the guest. 				|
| ResGlobalInfo				| 1     	|		| Node containing general information about the reservation. |
| ResGlobalInfo/Total			| 1     	|		| Node containing the total price.		|
| @AmountBeforeTax			| 0..1		| Decimal	| Amount before tax of the Reservation. 	|
| @AmountAfterTax			| 1 		| Decimal	| Amount after tax of the Reservation.		|
| @CurrencyCode				| 1 		| String	| Currency code of the Reservation. 		|
| ResGlobalInfo/Guarantee		| 0..1    	|		| Node containing the Guarantee provided with the reservation. |
| @PaymentCode				| 1     	|		| Contains the payment method accepted by the rate.  See Payment Type Codes list in section 7.6.3. |
| Guarantee/GuaranteesAccepted		| 0..1    	|		| Node containing the Guarantee provided with the reservation. |
| GuaranteesAccepted/GuaranteeAccepted	| 1     	|		| Node that contains the booking payment details accepted. |
| GuaranteeAccepted/PaymentCard		| 1     	|		| Node that contains the credit card accepted. The credit card information can be a URL with the information(in TPA_Extension tag) or the details in the PaymentCard tags and attributes. |
| @CardCode				| 1 		| String	| Contains the credit card code. See Credit Card Codes list in section 7.6.4. |
| @ExpireDate				| 0..1		| String	| This is the expiry date of the credit card used for deposit/prepayment. Format MMyy. |
| PaymentCard/CardHolderName		| 0..1		| String	| PaymentCard / CardHolderName.			|
| PaymentCard/CardNumber/PlainText	| 0..1		| String	| This is actual number of the credit card used for deposit/prepayment. |
| PaymentCard/SeriesCode/PlainText	| 0..1		| String	| The SeriesCode attribute is used (Optionally) for the security number of the card. |
| PaymentCard/TPA_Extensions		| 0..1    	|		| Optional, contains credit card URL.		|
| Param        				| 1      	|		|						|
| @key    				| 1 		| String	| URL.						|
| @value  				| 1 		| String	| URL where the Credit card details are stored. |
| ResGlobalInfo/HotelReservationIDs	| 1     	|		| Node containing the ids of the reservation.	|
| HotelReservationIDs/HotelReservationID | 2     	|		| Node containing information of one reservation id. |
| @ResIDValue_				| 1 		| String	| Value of the id.				|
| @ResIDSourceContext_			| 1 		| String	| Id context.					|
| ResGlobalInfo/Profiles		| 1     	|		| Node containing information about the profiles of the reservation. |
| Profiles/ProfileInfo			| 1     	|		| Node containing information about the profile of the reservation. |
| ProfileInfo/Profile			| 1     	|		| Node containing information about the profile of the reservation. |
| Profile/Customer			| 1     	|		| Node containing information about the customer of the reservation. The customer of the reservation  can be or not a pax of the reservation. If it's a pax will be present in ResGuests node. |
| Customer/PersonName			| 1     	|		| Node containing the person name of the customer of the reservation. |
| PersonName/NamePrefix			| 1 		| String	| Name prefix of the customer.			|
| PersonName/GivenName			| 1 		| String	| Given name of the customer.			|
| PersonName/Surname			| 1 		| String	| Surname of the customer.			|
| Customer/Telephone			| 1     	|		| Node containing information about the telephone of the customer. |
| @PhoneTechType			| 1 		| String	| Phone technology type.			|
| @PhoneNumber				| 1 		| String	| Phone number.					|
| @FormattedInd				| 1 		| String	| Indicates whether associated data is formatted or not. |
| @DefaultInd				| 1 		| String	| When true, indicates a default value should be used. |
| Customer/Email			| 1     	|		| Node containing information about the email of the customer. |
| @DefaultInd				| 1 		| String	| When true, indicates a default value should be used. |
| @EmailType				| 1 		| String	| Indicates the type of the email.		|
| Value        				| 1 		| String	| Email of the customer.			|
| Customer/Address			| 1     	|		| Node containing information about the address of the customer. |
| Address/AddressLine			| 1 		| String	| Address of the customer.			|
| Address/CityName			| 1 		| String	| City name.					|
| Address/PostalCode			| 1 		| String	| Postal code.					|
| Address/StateProv			| 1 		| String	| Node containing information about the state or the province of the customer. |
| @StateCode				| 1 		| String	| State code.					|
| Value        				| 1 		| String	| State or province name.			|
| Address/CountryName			| 1 		| String	| Country name.					|
| @Code   				| 1 		| String	| Country code.					|
| Value        				| 1 		| String	| Country name.					|



**Example Guarantee object with credit card details**

~~~xml
    <Guarantee PaymentCode="DirectPayment">
      <GuaranteesAccepted>
        <GuaranteeAccepted>
          <PaymentCard ExpireDate="0614" CardCode ="VI">
            <CardHolderName>John Smith</CardHolderName>
            <CardNumber>
              <PlainText>4321432143214327</PlainText>
            </CardNumber>
            <SeriesCode>
              <PlainText>123</PlainText>
            </SeriesCode>
          </PaymentCard>
        </GuaranteeAccepted>
      </GuaranteesAccepted>
    </Guarantee>
~~~


**Example Guarantee object with URL for credit card details**

~~~xml
    <Guarantee PaymentCode="DirectPayment">
      <GuaranteesAccepted>
        <GuaranteeAccepted>
          <PaymentCard>
            <TPA_Extensions>
              <Param key = "URL" value = "http://www.exampleUrl.com/"/>
            </TPA_Extensions>
          </PaymentCard>
        </GuaranteeAccepted>
      </GuaranteesAccepted>
    </Guarantee>
~~~

