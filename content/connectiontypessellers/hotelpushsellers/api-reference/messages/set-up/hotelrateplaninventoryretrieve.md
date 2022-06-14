+++
title = "HotelRatePlanInventoryRetrieve"
pagetitle = "HotelRatePlanInventoryRetrieve"
description = "HotelRatePlanInventoryRetrieve message"
icon = "fa-list" 
weight = 1
alwaysopen = false
isDirectory = false
+++


Providers send a HotelRatePlanInventoryRetrieveRQ message to retrieve a list of hotels, rate plans and rooms and their configurations. TGX then returns a list of all active rooms and configurations. ***Inactive rate plans and rooms will not be returned in these messages.***



## HotelRatePlanInventoryRetrieveRQ


**XML Example**



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
| POS/Source/TPA_Extensions	| 0..1	     |	     	| Optional, if empty only active inventory will be received.	|
| Param       			| 1 	     | 		|								|
| @key   			| 1   	     | String 	| onlyActive							|
| @value			| 1  	     | String	| 1 - You will receive all active inventory data. 0 - Active and deactivated inventory will be received. (Same case as without TPA_Extensions node.) |
| RatePlans/RatePlan/HotelRef	| 0..1       | 		| Contains hotel filter						|
| @HotelCode			| 0..1	     | String	| If the hotel is not specified, it returns Rooms and Rates of all user’s hotels. |



## HotelRatePlanInventoryRetrieveRS


**Example for a Rate Plan**


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
            <AdditionalDetails>
              <AdditionalDetail Code="REP" Type="39">
                <DetailDescription>
                  <Text>Repsol</Text>
                </DetailDescription>
              </AdditionalDetail>
            </AdditionalDetails>
          </RatePlan>
        </RatePlans>
      </HotelRatePlanInventoryRetrieveResult>
    </HotelRatePlanInventoryRetrieveResponse>
~~~


If your Rate Plan has information about Meal Plans included in it, this will be shown in the MealsIncluded tag.

In the previous example we received one hotel, one Rate Plan and 2 rooms. One of the rooms appears twice because each appearance shows the different occupancies. STD2 room has 2 possible occupations: 2 adults + 1 child or
2 adults.



**Example for a ***Derived*** Rate Plan**


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
| @RatePlanType				    | 0..1	 | Integer  | OTA RPT Code (0 Not Selected, 10 - Negotiated, 11 - Package). 			|
| @YieldableIndicator			    | 0..1	 | Boolean  | Used to indicate the rate plan is subject to yield management logic. When false, the rate plan is not yieldable. When true or it's not returned, the rate plan is yieldable.|
| @CurrencyCode				    | 0..1	 | String   | ISO Currency (EUR). Only null for derived rates. 	|
| @Start      				    | 0..1 	 | Date	    | Start date of the rate booking window (Booking Dates for wich the rate will be available). |
| @End        				    | 0..1	 | Date     | End date of the rate booking window (Booking Dates for wich the rate will be available). |
| @Duration				    | 0..1  	 | String   | Duration of the rate booking window. Only present if Start and End are not. When present value is always 0 and means the rate has no booking window (available all dates). |
| @BaseRatePlanCode			    | 0..1 	 | String   | Rate plan code of the base rate plan. Only returned for derived rates. |
| @RatePlanStatusType			    | 1 	 | String   | Indicates if the rate plan is active or not for this dates. Possible values: "Active", "Deactivated". |
| @PromotionCode        				    | 0..1	 | String     | Promotion code to apply. 25 - Senior_55  26 - Senior_60, 27 - Senior_65. If the attribute is not present there is no promotion code. Not applicable for derived rates.|
| @FreeBaby        				    | 1	 | Boolean     | Free babies promotion|
| @FreeChild        				    | 1	 | Boolean     | Free children promotion |
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
| RatePlans/RatePlan/AdditionalDetails | 0..1 |  | Rate plan additional details |
| RatePlans/RatePlan/AdditionalDetails/AdditionalDetail | 0..n |  | List of additional details |
| @Code | 1 | String  | Trading partner code associated with the detail. |
| @Type | 1 | String | Define the information. Only allowed "39" (Contract/negotiated booking information)|
| RatePlans/RatePlan/AdditionalDetails/AdditionalDetail/DetailDescription | 1 |  | Details Description |
| RatePlans/RatePlan/AdditionalDetails/AdditionalDetail/DetailDescription/Text | 1 | String  | Description. If additional details type is "39", the name of the trading partner for this rate.  |
