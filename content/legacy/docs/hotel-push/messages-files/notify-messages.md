---
title: Notify Messages
keywords: hotel-push, messages, messages files, notify messages
search: Hotel-Push - MessagesFiles - Notify Messages
sidebar: mydoc_sidebar
permalink: /docs/hotel-push/messages-files/notify-messages
---

Providers sends data to Sellers (Negotiation is started by Providers).


### HotelRatePlanInventoryNotif


Provider will send an HotelRatePlanInventoryNotifRQ message to push the Hotel set up information to
seller. XTG will process data and response with error code if needed.


### HotelRatePlanInventoryNotifRQ
~~~xml
<HotelRatePlanInventoryNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
    <request PrimaryLangID = "ES" Version = "0">
        <RatePlans HotelCode = "1" HotelStatusType = "Active" xmlns = "http://www.opentravel.org/OTA/2003/05">
            <RatePlan Duration = "0" CurrencyCode = "EUR" RatePlanCode = "BAR" RatePlanStatusType = "Active" RatePlanNotifType = "New">
		<BookingRules>
		    <BookingRule>
			<CancelPenalties>
			    <CancelPenalty>
				<Deadline OffsetTimeUnit = "Day" OffsetUnitMultiplier = "20" OffsetDropTime = "BeforeArrival"/>
				<AmountPercent NmbrOfNights = "3"/>
			    </CancelPenalty>
			    <CancelPenalty Start = "2018-03-01" End = "2018-03-06">
				<Deadline OffsetTimeUnit = "Day" OffsetUnitMultiplier = "10" OffsetDropTime = "BeforeArrival"/>
                                <AmountPercent Amount = "10"/>
			    </CancelPenalty>
			    <CancelPenalty NonRefundable = "true" Start = "2018-03-13" End = "2018-03-15"/>
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
                <Rates>
                    <Rate>
                        <AdditionalGuestAmounts>
                            <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "12"/>
                            <AdditionalGuestAmount AgeQualifyingCode = "7" MaxAge = "2"/>
                        </AdditionalGuestAmounts>
                        <PaymentPolicies>
                            <GuaranteePayment PaymentCode = "MerchantPayment"/>
                            <GuaranteePayment PaymentCode="DirectPayment">
                                <AcceptedPayments>
				    <AcceptedPayment>
				      <PaymentCard CardCode="VI" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="AX" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="CA" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="DS" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="L" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="EU" />
				    </AcceptedPayment>
                                </AcceptedPayments>
                            </GuaranteePayment>
                            <GuaranteePayment PaymentCode="BookingDatePayment">
                                <AcceptedPayments>
				    <AcceptedPayment>
				      <PaymentCard CardCode="VI" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="AX" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="CA" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="DS" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="L" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="EU" />
				    </AcceptedPayment>
                                </AcceptedPayments>
                            </GuaranteePayment>
                            <GuaranteePayment PaymentCode="ArrivalDatePayment">
                                <AcceptedPayments>
				    <AcceptedPayment>
				      <PaymentCard CardCode="VI" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="AX" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="CA" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="DS" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="L" />
				    </AcceptedPayment>
				    <AcceptedPayment>
				      <PaymentCard CardCode="EU" />
				    </AcceptedPayment>
                                </AcceptedPayments>
                            </GuaranteePayment>
                        </PaymentPolicies>
                        <MealsIncluded MealPlanCodes = "14"/>
                    </Rate>
                </Rates>
                <SellableProducts>
                    <SellableProduct InvCode = "STD" InvType = "ROOM" InvStatusType = "Active" InvNotifType = "New">
                        <GuestRoom>
                            <Quantities StandardNumBeds = "2"/>
                            <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                            <Room RoomTypeCode = "STD" RoomID = "1"/>
                            <Description>
                                <Text>Standard</Text>
                            </Description>
                        </GuestRoom>
                    </SellableProduct>
                    <SellableProduct InvCode = "STD" InvType = "ROOM" InvStatusType = "Active" InvNotifType = "New">
                        <GuestRoom>
                            <Quantities StandardNumBeds = "2"/>
                            <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                            <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "7"/>
                            <Room RoomTypeCode = "STD" RoomID = "1"/>
                            <Description>
                                <Text>Standard</Text>
                            </Description>
                        </GuestRoom>
                    </SellableProduct>
                    <SellableProduct InvCode = "STD" InvType = "ROOM" InvStatusType = "Active" InvNotifType = "New">
                        <GuestRoom>
                            <Quantities StandardNumBeds = "2"/>
                            <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "10"/>
                            <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "8"/>
                            <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "7"/>
                            <Room RoomTypeCode = "STD" RoomID = "1"/>
                            <Description>
                                <Text>Standard</Text>
                            </Description>
                        </GuestRoom>
                    </SellableProduct>
                    <SellableProduct InvCode = "JSUIT" InvType = "ROOM" InvStatusType = "Active" InvNotifType = "New">
                        <GuestRoom>
                            <Quantities StandardNumBeds = "2"/>
                            <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "10"/>
                            <Room RoomTypeCode = "JSUIT" RoomID = "8"/>
                            <Description>
                                <Text>Junior Suite</Text>
                            </Description>
                        </GuestRoom>
                    </SellableProduct>
                    <SellableProduct InvCode = "JSUIT" InvType = "ROOM" InvStatusType = "Active" InvNotifType = "New">
                        <GuestRoom>
                            <Quantities StandardNumBeds = "2"/>
                            <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                            <Room RoomTypeCode = "JSUIT" RoomID = "8"/>
                            <Description>
                                <Text>Junior Suite</Text>
                            </Description>
                        </GuestRoom>
                    </SellableProduct>
                    <SellableProduct InvCode = "JSUIT" InvType = "ROOM" InvStatusType = "Active" InvNotifType = "New"> 
                        <GuestRoom>
                            <Quantities StandardNumBeds = "2"/>
                            <Occupancy MinOccupancy = "3" MaxOccupancy = "3" AgeQualifyingCode = "10"/>
                            <Room RoomTypeCode = "JSUIT" RoomID = "8"/>
                            <Description>
                                <Text>Junior Suite</Text>
                            </Description>
                        </GuestRoom>
                    </SellableProduct>
                </SellableProducts>
		<Taxes>
		    <Tax Amount = "20" ChargeFrequency = "true">
			<TaxDescription>
			    <Text>city</Text>
			</TaxDescription>
		    </Tax>
		</Taxes>
                <Description>
                    <Text>bb</Text>
                </Description>
            </RatePlan>
        </RatePlans>
        <TPA_Extensions xmlns = "http://www.opentravel.org/OTA/2003/05">
            <Attribute key = "HotelNotifType" value = "New"/>
        </TPA_Extensions>
    </request>
</HotelRatePlanInventoryNotif>

~~~


**Example for Derived RatePlan**


~~~xml
<HotelRatePlanInventoryNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
    <request PrimaryLangID = "ES" Version = "0">
        <RatePlans HotelCode = "1" HotelStatusType = "Active" xmlns = "http://www.opentravel.org/OTA/2003/05">
            <RatePlan BaseRatePlanCode = "BAR" RatePlanStatusType = "Active" RatePlanCode = "DERIVED" RateReturn = "false">
		<RatePlanInclusionsType>
                    <RatePlanInclusionDescription>
                        <Name>BaseMealPlanSupplement</Name>
                    </RatePlanInclusionDescription>
                </RatePlanInclusionsType>
                <Description>
                    <Text>Derived Rate</Text>
                </Description>
            </RatePlan>
        </RatePlans>
</HotelRatePlanInventoryNotif>
~~~


**Example for Offers**


~~~xml
<HotelRatePlanInventoryNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
    <request PrimaryLangID = "ES" Version = "0">
        <RatePlans HotelCode = "1"  HotelStatusType = "Active" xmlns = "http://www.opentravel.org/OTA/2003/05">
            <RatePlan BaseRatePlanCode = "BAR" RatePlanStatusType = "Active" RatePlanCode = "DERIVED" RateReturn = "false">
	        <Offers>
		    <Offer OfferCode="offer" OfferStatusType="Active" OfferNotifType = "New">
			<OfferRules>
			    <OfferRule>
				<LengthsOfStay ArrivalDateBased="false">
				    <LengthOfStay Time="2" MinMaxMessageType="MinLOS" />
				    <LengthOfStay Time="6" MinMaxMessageType="MaxLOS" />
				</LengthsOfStay>
				<DOW_Restrictions>
				    <AvailableDaysOfWeek Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true" />
				</DOW_Restrictions>
				<Inventories>
                      		    <Inventory InvCode="1BDAPT" />
                    		</Inventories>
			    </OfferRule>
			</OfferRules>
			<Discount NightsDiscounted="1" DiscountPattern="Last" />
			<OfferDescription>
			    <Text>Offer Test</Text>
			</OfferDescription>
		    </Offer>
		</Offers>
            </RatePlan>
        </RatePlans>
</HotelRatePlanInventoryNotif>
~~~


| **Element**				| **Number** | **Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| HotelRatePlanInventoryNotif/request		| 1 	     |		| Root Node.						|
| RatePlans			   	| 1   	     |		|							|
| @HotelCode				| 1	     | String	| Hotel code whose information is provided by the method. |
| @HotelStatusType			| 1	     | String	| Active or Deactivated.				        |
| RatePlans/RatePlan			| 0..n	     |		| Present if rate exists.				|
| @RatePlanCode				| 1	     | String	| Rate code.						|
| @BaseRatePlanCode			| 0..1	     | String	| Rate code of the base RatePlan. Only used for derived rates. |
| @RateReturn			| 0..1	     | String	| Indicates if the Derived Rate Code should be passed to the channel manager in booking notifications or the Base Rate Code. Only used for derived rates. |
| @RatePlanNotifType			| 0..1	     | String	| New, Delta or Remove |
| @RatePlanStatusType			    | 1		 | String   | Active or Deactivated.				|
| @CurrencyCode				| 0..1	     | String	| ISO Currency (EUR). Not used for derived rates.	|
| @Start      				    | 0..1 	 | Date	    | Start date of the rate booking window (Booking Dates for wich the rate will be available). |
| @End        				    | 0..1	 | Date     | End date of the rate booking window (Booking Dates for wich the rate will be available). |
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
| RatePlans/RatePlan/Rates		| 1	     |		|							|
| RatePlans/RatePlan/Rates/Rate		| 1..n	     |		|							|
| RatePlans/RatePlan/Rates/AdditionalGuestAmounts		| 1	     |		|							|
| AdditionalGuestAmounts/AdditionalGuestAmount		| 1..2	     |		|							|
| @AgeQualifyingCode		| 1	     |	Integer	|	Qualifying code of the additional guest.	8 - Child, 7 - Infant					|
| @MaxAge		| 1	     |	Integer	|		Max age not inclusive of the additional guest. Not inclusive.					|
| RatePlans/RatePlan/Rates/Rate/PaymentPolicies			   | 1     	 |	    | Node that contains the accepted payments information. |
| PaymentPolicies/GuaranteePayment	   | 1..n    	 |	    | Node that contains information about an accepted payment. |
| @PaymentCode				   | 1     	 |	    | Contains the payment method accepted by the rate. See Payment Type Codes list in section 7.6.3. |
| GuaranteePayment/AcceptedPayments	   | 0..1    	 |	    | Node that contains the accepted payments information. Only present if PaymentCode is not "MerchantPayment". |
| AcceptedPayments/AcceptedPayment	   | 1..n    	 |	    | Node that contains the credit card accepted.	|
| AcceptedPayment/PaymentCard		   | 1..n    	 |	    | Node that contains the credit card accepted.	|
| @CardCode        			   | 1     	 | String   | Contains the credit card code. See Credit Card Codes list in section 7.6.4. |
| RatePlans/RatePlan/Rates/Rate/MealsIncluded | 0..1	 |	    | Present if board is included with this rate.	|
| @MealPlanCodes			   | 1 		 | Integer  | OTA MPT Code. 					|				|
| RatePlans/RatePlan/SellableProducts	   | 0..1    	 |	    | List of sellable products. In derived rates, if it is not present it applies to all rooms. In other cases, it informs the rooms that applies. |
| SellableProducts/SellableProduct | 0..n |	    | Present if rooms associed with this rate.		|
| @InvCode    				   | 1 		 | String   | Sellable Product Code.				|
| @InvTypeCode    			   | 0..1 	 | String   | External information about the room (own code, own description, etc.)|
| @InvType    				   | 1 		 | String   | Sellable product type (ROOM).			|
| @InvStatusType			   | 1 	 	 | String   | Active or Deactivated.				|
| @InvNotifType			| 0..1	     | String	| New, Delta or Remove |
| RatePlans/RatePlan/SellableProduct/GuestRoom | 1..n	 |	    |							|
| RatePlans/RatePlan/SellableProduct/GuestRoom/Quantities | 1 |	    |     						|
| @StandardNumBeds			   | 1 		 | Integer  | Standard occupation of room. 			|
| RatePlans/RatePlan/SellableProduct/GuestRoom/Occupancy | 1 |	    |     						|
| @MinOccupancy				   | 1 		 | Integer  | Min occupation.					|
| @MaxOccupancy				   | 1 		 | Integer  | Max occupation.  					|
| @AgeQualifyingCode			   | 1 		 | Integer  | (10 - Adult,8 - Child,7 - Infant).		|
| RatePlans/RatePlan/SellableProduct/GuestRoom/Room | 1 |  | 			|
| @RoomTypeCode    				   | 1 		 | String  | Room Code.				|
| @RoomID    				   | 1 		 | Integer  | Room Id.				|
| RatePlans/RatePlan/SellableProduct/GuestRoom/Description/Text | 1 | String | Room description.			|
| RatePlans/RatePlan/Taxes | 0..1 |	 |	 			|
| RatePlans/RatePlan/Taxes/Tax | 1..n |	 | Tax to apply to the room prices of the rate 			|
| @Amount/Percent | 1 | Decimal | Indicates that the tax will be applied relative to an amoount or a percentage 		|
| @ChargeFrequency | 0..1 | Boolean | If true indicates that tax is applied relative to the Amount of Nights booked  |
| @ChargeUnit | 0..1 | Boolean | If true indicates that tax is applied relative to the Amount of Paxes booked  |
| RatePlans/RatePlan/Taxes/Tax/TaxDescription | 1 |	 |  			|
| RatePlans/RatePlan/Taxes/Tax/TaxDescription/Text | 1 | String	 | Description of tax type 			|
| RatePlans/RatePlan/RatePlanInclusionsType |	0..1 |	 Only used for derived rates. |	 			|
| RatePlans/RatePlan/RatePlanInclusionsType/RatePlanInclusionDescription |	1 |	 Only used for derived rates. |	 			|
| RatePlans/RatePlan/RatePlanInclusionsType/RatePlanInclusionDescription/Name |	1 |	 |	If present, derived rate will apply base rate meal plan supplements. Value = BaseMealPlanSupplement. Only used for derived rates.			|
| RatePlans/RatePlan/Description/Text |	1 |	String |	Rate description. 			|
| RatePlans/RatePlan/Offers | 0..1 |  | List of Offers |
| RatePlans/RatePlan/Offers/Offer | 1..n |  | 			|
| @OfferCode | 1 | String | Offer code. |
| @OfferStatusType | 1 | String | Active or Deactivated. |
| @OfferNotifType			| 0..1	     | String	| New, Delta or Remove |
| RatePlans/RatePlan/Offers/Offer/OfferRules | 1 |  | 			|
| RatePlans/RatePlan/Offers/Offer/OfferRules/OfferRule | 1 |  | 			|
| .../OfferRules/OfferRule/LengthsOfStay | 1 |  | 			|
| .../OfferRules/OfferRule/LengthsOfStay/LengthOfStay | 1..2 | |						|
| @Time 				| 1	     | Integer	| Indicates the number of nights for this stay.	|
| @MinMaxMessageType			| 1	     | String	| (MinLOS, MaxLOS) Indicates the minimum or maximum stay for his Offer. |
| .../OfferRule/DOW_Restrictions | 1 |  | 			|
| .../OfferRule/DOW_Restrictions/AvailableDaysOfWeek | 1 |  | 			|
| @Mon  				| 1	     | Boolean	| Indicates whether the Offer data applies to Mondays. |
| @Tue  				| 1	     | Boolean	| Indicates whether the Offer data applies to Tuesdays. |
| @Weds 				| 1	     | Boolean	| Indicates whether the Offer data applies to Wednesdays. |
| @Thur 				| 1	     | Boolean	| Indicates whether the Offer data applies to Thursdays. |
| @Fri  				| 1	     | Boolean	| Indicates whether the Offer data applies to Fridays. |
| @Sat  				| 1	     | Boolean	| Indicates whether the Offer data applies to Saturdays. |
| @Sun  				| 1      | Boolean	| Indicates whether the Offer data applies to Sundays. |
| RatePlans/RatePlan/Offers/Offer/OfferRules/OfferRule/Inventories | 0..1 |  | 	Rooms wich the offer will apply to. If no Inventory are sent, the offer will apply for all the rooms in the Rate.		|
| RatePlans/RatePlan/Offers/Offer/OfferRules/OfferRule/Inventories/Inventory | 1..n |  | 		|
| @InvCode | 1 | String | Room code. |
| RatePlans/RatePlan/Offers/Offer/Dicount | 1 |  | 			|
| @NightsDiscounted | 1 | String | Nights the offer will discount from the total stay amount. |
| @DiscountPattern | 1 | String | Booking night/s the offer will dicount. Possible values are First, Last or Cheapest.  |
| RatePlans/RatePlan/Offers/Offer/OfferDescription/Text | 1 | String | Offer desription. |
| TPA_Extensions			   	| 0..1    	|		| Optional, only added when create or delete an hotel. |
| TPA_Extensions/Attribute            		| 1       	|		|							|
| @key        			| 1  		| String	| HotelNotifType.						|
| @value      			| 1  		| String	| New - You will create an hotel. Remove - You will remove all the hotel setup. |


### HotelRatePlanInventoryNotifRS


Success Response


~~~xml
    <HotelRatePlanInventoryNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanInventoryNotifResult>
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelRatePlanInventoryNotifResult>
    </HotelRatePlanInventoryNotifResponse>
~~~


Error Response


~~~xml
    <HotelRatePlanInventoryNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
         <HotelRatePlanInventoryNotifResult>
            <Errors xmlns="http://www.opentravel.org/OTA/2003/05">
               <Error Language="en" ShortText="Unexpected error" Code="-1">Hotel 1610 already exists in CP.</Error>
            </Errors>
         </HotelRatePlanInventoryNotifResult>
      </HotelRatePlanInventoryNotifResponse>
~~~


### HotelRatePlanNotif


Provider will send an HotelRatePlanNotifRQ message to push Rates to
seller. XTG will process data and response with error code if needed.



### HotelRatePlanNotifRQ


**Example for RatePlan**


~~~xml
    <HotelRatePlanNotif>
      <request>
        <POS>
          <Source>
            <RequestorID ID = "Provider1"/>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"/>
            </BookingChannel>
          </Source>
        </POS>
        <RatePlans HotelCode = "HOT123">
          <RatePlan RatePlanCode = "TAR321" CurrencyCode = "EUR" RatePlanStatusType = "Active">
            <Rates>
              <Rate Start = "2007-04-01" End = "2007-12-31">
                <BaseByGuestAmts>
                  <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax = "100.00"/>
                  <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax = "130.00"/>
                  <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax = "195.00"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "8"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "20.00" AgeQualifyingCode = "8"/>
                </AdditionalGuestAmounts>
              </Rate>
            </Rates>
            <SellableProducts>
              <SellableProduct InvCode = "43" InvType = "ROOM"/>
            </SellableProducts>
            <Supplements>
              <Supplement Start = "2007-04-01" End = "2007-12-31" AgeQualifyingCode = "10" Amount = "20.00" InvCode = "1" SupplementType = "Board"/>
              <Supplement Start = "2007-04-01" End = "2007-12-31" AgeQualifyingCode = "8" Amount = "10.00" InvCode = "1" SupplementType = "Board"/>
            </Supplements>
          </RatePlan>
          <RatePlan RatePlanCode = "TAR333" CurrencyCode = "EUR" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-04-01" End = "2013-12-31">
                <BaseByGuestAmts>
                  <BaseByGuestAmt Type = "25" AmountAfterTax = "150.00"/>
                </BaseByGuestAmts>
              </Rate>
            </Rates>
            <SellableProducts>
              <SellableProduct InvCode = "43" InvType = "ROOM"/>
            </SellableProducts>
            <Supplements>
              <Supplement Start = "2013-04-01" End = "2013-12-31" AgeQualifyingCode = "10" Amount = "20.00" InvCode = "1" SupplementType = "Board"/>
              <Supplement Start = "2013-04-01" End = "2013-12-31" AgeQualifyingCode = "8" Amount = "10.00" InvCode = "1" SupplementType = "Board"/>
            </Supplements>
          </RatePlan>
          <RatePlan RatePlanCode = "TAR333" CurrencyCode = "EUR" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-04-01" End = "2013-12-31">
                <BaseByGuestAmts>
                  <BaseByGuestAmt Type = "14" Code = "2-0-0" AmountAfterTax = "150.00"/>
                  <BaseByGuestAmt Type = "14" Code = "3-0-0" AmountAfterTax = "180.00"/>
                </BaseByGuestAmts>
              </Rate>
            </Rates>
            <SellableProducts>
              <SellableProduct InvCode = "43" InvType = "ROOM"/>
            </SellableProducts>
            <Supplements>
              <Supplement Start = "2013-04-01" End = "2013-12-31" AgeQualifyingCode = "10" Amount = "20.00" InvCode = "1" SupplementType = "Board"/>
              <Supplement Start = "2013-04-01" End = "2013-12-31" AgeQualifyingCode = "8" Amount = "10.00" InvCode = "1" SupplementType = "Board"/>
            </Supplements>
          </RatePlan>
          <RatePlan RatePlanCode = "TAR333" CurrencyCode = "EUR" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2014-01-01" End = "2014-02-01">
                <BaseByGuestAmts>
                  <BaseByGuestAmt Type = "25" AmountAfterTax = "150.00"/>
                  <BaseByGuestAmt Type = "14" Code = "2-0-0" AmountAfterTax = "150.00"/>
                  <BaseByGuestAmt Type = "14" Code = "3-0-0" AmountAfterTax = "180.00"/>
                  <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax = "100.00"/>
                  <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax = "130.00"/>
                  <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax = "195.00"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" Percent = "40.00" AgeQualifyingCode = "8"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" Percent = "20.00" AgeQualifyingCode = "8"/>
                </AdditionalGuestAmounts>
              </Rate>
            </Rates>
            <SellableProducts>
              <SellableProduct InvCode = "43" InvType = "ROOM"/>
            </SellableProducts>
            <Supplements>
              <Supplement Start = "2014-01-01" End = "2014-02-01" AgeQualifyingCode = "10" Amount = "20.00" InvCode = "1" SupplementType = "Board"/>
              <Supplement Start = "2014-01-01" End = "2014-02-01" AgeQualifyingCode = "8" Amount = "10.00" InvCode = "1" SupplementType = "Board"/>
            </Supplements>
          </RatePlan>
        </RatePlans>
      </request>
    </HotelRatePlanNotif>
~~~


**Example for Derived RatePlan**


~~~xml
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
~~~


| **Element**				| **Number** | **Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| HotelRatePlanNotif/request		| 1 	     |		| Root Node.						|
| RatePlans			   	| 1   	     |		|							|
| @HotelCode				| 1	     | String	| Hotel code whose information is provided by the method. |
| RatePlans/RatePlan			| 1..n	     |		| Present if rate exists.				|
| @RatePlanCode				| 1	     | String	| Rate code.						|
| @RatePlanStatusType			| 0..1	     | String	| Active or Deactivated (You can save prices with initial status deactivated if you want). If this attribute is missing, the price will be saved as active. |
| @BaseRatePlanCode			| 0..1	     | String	| Rate code of the base RatePlan. Only used for derived rates. |
| @CurrencyCode				| 0..1	     | String	| ISO Currency (EUR). Not used for derived rates.	|
| RatePlans/RatePlan/Rates/Rate		| 1	     |		|							|
| @Start 				| 1	     | Date	| Start date of rate.					|
| @End   				| 1	     | Date	| End date of rate.					|
| @AdjustedPercentage			| 0..1	     | Decimal	| The percentage off the base rate plan amount used to determine the price of this derived rate plan. Only used for derived rates. |
| @AdjustedAmount			| 0..1	     | Decimal	| The amount which should be added to the base rate plan to determine the price of this derived rate plan. Only used for derived rates. |
| @AdjustUpIndicator			| 0..1	     | Boolean	| When true, the adjusted amount or adjusted percentage is added to the amount specified for the base rate plan to determine the derived rate amount. When false, the adjusted amount or adjusted percentage is subtracted from the amount specified for the base rate plan to determine the derived rate amount. Only used for derived rates. |
| RatePlans/RatePlan/Rates/Rate/BaseByGuestAmts | 0..1 | Different types of price can come in the same BaseByGuestAmts element.	|							|
| RatePlans/RatePlan/Rates/Rate/BaseByGuestAmts/BaseByGuestAmt | 1..n |	|						|
| @AmountAfterTax			| 1	     | Decimal	| Total amount for @NumberOfGuests by day indicated. This amount doesn't include tax.	|
| @NumberOfGuests			| 0..1	     | Integer	| How many adults are the @AmountAfterTax for day indicated. If @NumberOfGuests is not informed then @Type must be informed. The maximum @NumberOfGuests is the standard occupancy of the room. |
| @Type  				| 0..1	     | Integer	| Amounts are per Room or per Occupancy instead of per Pax. If @Type=25. If @Type=14, price is per occupancy, @Code is mandatory and @NumberOfGuests and AdditionalGuestAmounts are not allowed. |
| @Code  				| 0..1	     | String	| Mandatory if @Type=14. The occupancy code is defined by AdultNumber-ChildNumber-InfantNumber. @Code for an occupancy of 2 adults, 1 child and 0 babies would be "2-1-0". |
| .../Rate/AdditionalGuestAmounts	| 0..1 | | Not used for derived rates.				|
| .../AdditionalGuestAmounts/AdditionalGuestAmount | 1..n | | Price and information about the additional pax (children, infants or extra adults). |
| @MaxAdditionalGuests			| 1	    | Integer	| Number of additional pax, one node for each additional pax, int the above example has one for first child, and one for second. |
| @Type  				| 0..1	    | String	| OTA AmountDeterminationType. If not specified then the price is a supplement, if @Type is Exclusive then the the price is absolute. |
| @AgeQualifyingCode			| 1	    | Integer	| (10 - Adult,8 - Child,7 - Infant).			|
| @Amount				| 0..1	    | Decimal	| Price for each additional pax.			|
| @Percent				| 0..1	    | Decimal	| Percent for each additional pax.			|
| RatePlans/Supplements			| 0..1	    | 		|  Present if supplements by board exists. Not used for derived rates. |
| RatePlans/Supplements/Supplement	| 1..n	    |		|							|
| @Start 				| 1	    | Date	| Start date of this supplement.			|
| @End   				| 1	    | Date	| End date of this supplement.				|
| @AgeQualifyingCode			| 0..1	    | Integer	| Age qualifyingCode which affects this supplement (10 - Adult,8 - Child,7 - Infant). Not allowed if charging board supplement by occupancy. |
| @ChargeTypeCode			| 0..1	    | String	| Indicates the board supplement occupancy. Only allowed if charging board supplement by occupancy. The occupancy code is defined by AdultNumber-ChildNumber-InfantNumber. @ChargeTypeCode for an occupancy of 2 adults, 1 child and 0 babies would be "2-1-0". |
| @Amount				| 1	    | Decimal	| Amount of supplement.					|
| @SupplementType			| 1	    | String	| (Board).						|
| @InvCode				| 1	    | String	| OTA MPT Code if @SupplementType is Board. 		|
| RatePlans/RatePlan/SellableProducts	| 0..1	    |		| List of sellable products. Null for derived rates. 	|
| RatePlans/SellableProducts/SellableProduct | 1..n |		|							|
| @InvCode				| 1	    | Integer	| Sellable Product Code.				|
| @InvType				| 1	    | Integer	| Sellable product type (ROOM).				|



**Important information:**

-   The prices under the standard occupancy are ALWAYS loaded with
    BaseByGuestAmts.
-   Children and babies are not allowed in BaseByGuestAmts. Children and
    babies must be always defined in AdditionalGuestAmounts.
-   The possible Type values in the AdditionalGuestAmount tag are
    Exclusive and not specified.

   > -   If there's no value specified then the price is a relative.
   >     And it's added to the price of the current pax.
   > -   If the value is "Exclusive" then the price is absolute. And
   >     it's the total price of the current pax.

-   If NumberOfGuests is not specified in tag BaseByGuestAmt then
    Type="25" (price per room) or Type="14" (price per occupancy) must
    be specified. If Type="25" only one tag BaseByGuestAmt is allowed.
-   If the price is per room then all AdditionalGuestAmount must be
    relative.

- If the price is per occupancy then Type should be 14 and Code should
be specified. 

The occupancy code is defined by
AdultNumber-ChildNumber-InfantNumber, for an occupancy of 2 adults, 1
child and 0 babies should be "2-1-0".

-   In samples room uses are specified using = AdultNumber -
    ChildNumber - InfantNumber.



**Notify amounts by Guests:**

Case 1:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0.

We only load the price for standard occupancy.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>  
~~~


There is no price for one adult, so it wont be available.

The price of two adults will be 100 = 2\*(100/2).



Case 2:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0.

We load the price for standard occupancy and the price for 1 Adult.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax="100.00"/>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="130.00"/>
    </BaseByGuestAmts>
~~~

The price of one Adult (Also known as Double Single Use) will be 100 =
100.

The price of two adults will be 130 = 2\*(130/2).



Case 3:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0.

We load the price for standard occupancy and the price for 1 additional
Adult Type default.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10"/>
    </AdditionalGuestAmounts>
~~~


There is no price for one adult, so it wont be available.

The price of two Adult will be 100 = 2\*(100/2).

The price of three Adults will be 190 = (100/2) + (100/2) + ((100/2) +
(40).



Case 4:

Standard occupancy = 2

Room uses = 1-0-0, 2-0-0, 3-0-0

We load the price for standard occupancy and the price for 1 additional
Adult Type Exclusive.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10" Type="Exclusive"/>
    </AdditionalGuestAmounts>
~~~


There is no price for one adult, so it wont be available.

The price of two Adult will be 100 = 2*(100/2).

The price of three Adults will be 140 = (100/2) + (100/2) + 40.



Case 5:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 1-1-0.

We load price for standard occupancy and the price for 1 additional
Child (AgeQualifyingCode = "8") Type default.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>
~~~


There is no price for one adult, so it wont be available.

The price of two Adult will be 100 = 2*(100/2).

The price of one Adult and one Child will be 100 = 2*(100/2). All pax
under standard occupancy are considered as adults.



Case 5.1:

standard occupancy = 2.

room uses = 1-0-0, 2-0-0, 1-0-1.

NOTE: The same samples with children are valid for babies specifying
AgeQualifyingCode = "7".

We load price for standard occupancy and the price for 1 additional Baby
(AgeQualifyingCode = "7") Type default.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "7" />
    </AdditionalGuestAmounts>
~~~


There is no price for one adult, so it wont be available.

The price of two Adult will be 100 = 2\*(100/2).

The price of one Adult and one Child will be 100 = 2\*(100/2). All pax
under standard occupancy are considered as adults.



Case 6:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 2-1-0.

We load price for standard occupancy and the price for 1 additional
Child Type default negative price


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-40.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>
~~~


There is no price for one adult, so it wont be available.

The price of two Adults will be 100 = 2*(100/2)

The price of one Adult and one Child will be 60 = 2*(100/2) +
((100/2) -40).



Case 7:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0.

We load the price of standard occupancy and the price for 1 additional
adult and the price for 2 additional adults.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "-15.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
~~~


There is no price for one adult, so it wont be available.

The price of two Adults will be 100 = 2*(100/2).

The price of three Adults will be 160 = (100/2) + (100/2) + ((100/2) +
10).

The price of four Adults will be 195 = (100/2) + (100/2) + ((100/2) +
10) + ((100/2) - 15).



Case 8:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0.

We load the price of standard occupancy and the price for each
additional adult (Without specifying MaxAdditionalGuests).


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
~~~


There is no price for one adult, so it wont be available.

The price of two Adults will be 100 = 2*(100/2).

The price of three Adults will be 140 = (100/2) + (100/2) +
((100/2) -10).

The price of four Adults will be 180 = (100/2) + (100/2) +
((100/2) -10) + ((100/2) - 10).



Case 9:

Standard occupancy = 3.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0, 5-0-0.

We load the price of standard occupancy and the price for 1 additional
adult and the price for 2 additional adults.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax="150.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "15.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
~~~


There is no price for one adult, so it won't be available.

There is no price for two adults, so it won't be available.

The price of three Adults will be 150 = 3\*(150/3).

The price of four Adults will be 190 = (150/3) + (150/3) + (150/3) +
((150/3) - 10).

The price of five Adults will be 255 = (150/3) + (150/3) + (150/3) +
((150/3) - 10) + ((150/3) + 15).



**Notify amounts with price per room and additional guests**

Case 1:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 1-1-0.

We load the price per room Type="25".


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
~~~


The price of one Adult will be 100.

The price of two Adults will be 100.

The price of one Adult and one Child will be 100.



Case 2:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0, 1-1-0, 3-1-0.

We load the price per room but also the price for 1 additional adult and
the price for 1 additional child.

~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>
~~~


The price of one Adult will be 100.

The price of two Adults will be 100.

The price of three Adults will be 170 = 100 + (100/2 + 20).

The price of one Adult and one Child will be 100.

The price of three Adults and one Child will be 230 = 100 + (100/2 + 20) + (100/2 + 10).



Case 3:

Standard occupancy = 3.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0.

We load the price per room but also the price for 1 additional adult.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="120.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
~~~


The price of one Adult will be 120.

The price of two Adults will be 120.

The price of three Adults will be 120.

The price of four Adults will be 180 = 120 + (120/3 + 20).



**Notify amounts by Occupancy:**

Case 1:

Room uses = 1-0-0, 2-0-0, 3-0-0.

We only load price occupancy = 2 adults, 0 child and 0 baby.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "14" AmountAfterTax="100.00" Code = "2-0-0"/>
    </BaseByGuestAmts> 
~~~


Room will not be available for 1 or 3 adults.

The price of 2 adults, 0 child and 0 baby will be 100.



Case 2:

Room uses = 2-1-0, 2-0-1.

We load price occupancy = 2 adults, 1 child and 0 baby; and for
occupancy = 2 adults, 0 child and 1 baby.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "14" AmountAfterTax="95.00" Code = "2-1-0"/>
        <BaseByGuestAmt Type = "14" AmountAfterTax="80.00" Code = "2-0-1"/>
    </BaseByGuestAmts>  
~~~


The price of 2 adults, 1 child and 0 baby will be 95.

The price of 2 adults, 0 child and 1 baby will be 80.



### HotelRatePlanNotifRS


Success Response


~~~xml
    <HotelRatePlanNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanNotifResult>
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelRatePlanNotifResult>
    </HotelRatePlanNotifResponse>
~~~


Error Response


~~~xml
    <HotelRatePlanNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
         <HotelRatePlanNotifResult>
            <Errors xmlns="http://www.opentravel.org/OTA/2003/05">
               <Error ShortText="Incomplete AdditionalGuestAmount values" Code="7"/>
            </Errors>
         </HotelRatePlanNotifResult>
      </HotelRatePlanNotifResponse>
~~~


### HotelAvailNotif


Provider will send an HotelAvailNotifRQ message to push availabilities
to seller. XTG will process data and response with error code if needed.



### HotelAvailNotifRQ


**Example for RatePlan**


~~~xml
    <HotelAvailNotif>
      <request>
        <POS>
          <Source>
            <RequestorID ID = "Provider1"></RequestorID>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"></CompanyName>
            </BookingChannel>
          </Source>
        </POS>
        <AvailStatusMessages HotelCode = "12">
          <AvailStatusMessage BookingLimit = "9">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-25" RatePlanCode = "BAR" InvCode = "APT" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "2" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "8" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Status = "Open" SellThroughOpenIndicator = "false" MinAdvancedBookingOffset = "5"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-21" RatePlanCode = "LOWCOST" InvCode = "JUN_1" InvType = "ROOM" Mon = "false" Tue = "false" Weds = "false" Thur = "false" Fri = "true" Sat = "true" Sun = "false"/>
            <RestrictionStatus Restriction = "Master" Status = "Close"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12">
            <StatusApplicationControl Start = "2013-12-22" End = "2013-12-25" RatePlanCode = "LOWCOST" InvCode = "JUN_1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "false" Sat = "false" Sun = "true"/>
            <RestrictionStatus Status = "Close" Restriction = "Arrival"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "7">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-25" RatePlanCode = "LOWCOST" InvCode = "STD1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "9" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus SellThroughOpenIndicator = "true" MinAdvancedBookingOffset = "6"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "5">
            <StatusApplicationControl Start = "2013-12-26" End = "2013-12-27" InvCode = "STD1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
          </AvailStatusMessage>
        </AvailStatusMessages>
      </request>
    </HotelAvailNotif>
~~~


**Example for Derived RatePlan**


~~~xml
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
          <AvailStatusMessage>
            <StatusApplicationControl Sun = "true" Sat = "true" Fri = "true" Thur = "true" Weds = "true" Tue = "true" Mon = "true" RatePlanCode = "DRV" Start = "2014-08-01" End = "2014-08-15"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "5" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "10" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Restriction="Master" Status="Close" />
          </AvailStatusMessage>
        </AvailStatusMessages>
      </request>
    </HotelAvailNotif>
~~~


| **Element**				| **Number** | **Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| HotelAvailNotif/request		| 1  	     |		| Root Node.						|
| AvailStatusMessages			| 1   	     |		|							|
| @HotelCode				| 1	     | String	| Hotel code whose information is provided by the method. |
| AvailStatusMessages/AvailStatusMessage | 1..n	     |		|							|
| @BookingLimit				| 0..1	     | Integer	| Identifies the number of available rooms per Room & RatePlan for the indicated dates. Not mandatory when the @Status is Close. Not used for derived rates. |
| AvailStatusMessages/AvailStatusMessage/StatusApplicationControl | 1 |	 |						|
| @Start				| 1	     | Date	| Start date.						|
| @End  				| 1	     | Date	| End date.						|
| @RatePlanCode				| 1	     | String	| Rate Plan Code.  |
| @InvCode				| 0..1	     | String	| Room Code. Not used for derived rates.		|
| @InvType				| 0..1	     | String	| Product type (ROOM). Not used for derived rates.	|
| @Mon  				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Mondays. |
| @Tue  				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Tuesdays. |
| @Weds 				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Wednesdays. |
| @Thur 				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Thursdays. |
| @Fri  				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Fridays. |
| @Sat  				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Saturdays. |
| @Sun  				| 1          | Boolean	| Indicates whether the AvailStatusMessage data applies to Sundays. |
| AvailStatusMessages/AvailStatusMessage/LengthsOfStay | 0..1 |	|							|
| @ArrivalDateBased			| 0..1	     | Boolean	| When its true, the minimum and maximum stay is checked ONLY the first day of the availability, when false or not indicated, the minimum and maximum stay is checked all the availability days. If both values are needed two AvailStatusMessage must be send. |
| AvailStatusMessages/AvailStatusMessage/LengthsOfStay/LengthOfStay | 1..2 | |						|
| @Time 				| 1	     | Integer	| Indicates the number of @TimeUnit for this stay.	|
| @TimeUnit				| 1	     | String	| Day.							|
| @MinMaxMessageType			| 1	     | String	| (MinLOS, MaxLOS) Indicates the minimum or maximum stay for his AvailStatusMessage. |
| AvailStatusMessages/AvailStatusMessage/RestrictionStatus | 0..1 |  |							|
| @Status				| 0..1	     | String	| (Open, Close).		|
| @Restriction				| 0..1	     | String	| Master. This is the master availability. If master availability is ‘Closed’, the product is not bookable if any of the stay dates includes one of the dates specified by the Application Control element. If master availability is ‘Open’, additional restrictions on arrival and departure may be placed (Master, Arrival, Departure). |
| @MinAdvancedBookingOffset		| 0..1	     | Integer	| Minimum number of days before the check-in date after which the product is not available to be booked. This restriction is usually used to offer discounts on early bookings. |
| @MaxAdvancedBookingOffset		| 0..1	     | Integer	| Maximum number of days before the check-in date after which the product is not available to be booked. This restriction is usually used to offer last minute discounts on unsold inventory. |
| @SellThroughOpenIndicator		| 0..1	     | Boolean	| When @Status is open, in this element you can indicate this room or room/ratePlan can be sold without limit(like BookingLimit=MaxInteger). Not used for derived rates. |



### HotelAvailNotifRS


Success Response


~~~xml
    <HotelAvailNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelAvailNotifResult>
        <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
      </HotelAvailNotifResult>
    </HotelAvailNotifResponse>
~~~


Error Response


~~~xml
    <HotelAvailNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelAvailNotifResult>
        <Errors xmlns="http://www.opentravel.org/OTA/2003/05">
          <Error ShortText="AvailStatusMessages not found" Code="2"/>
        </Errors>
      </HotelAvailNotifResult>
    </HotelAvailNotifResponse>
~~~


### HotelResNotif

Only implements if the Channel manager allows reservation delivery. 

During the booking process, we will send a HotelResNotifRQ message to the Channel to inform about the reservations. 
The Channel will process the booking info and will inform us of the reservation status. TGX will process the response from the Channel's system and will proceed with the reservation process.

If the Channel has the booking locator of the reservation, they can send it in the HotelResNotifRS.

Note that if the reservation into the Channel system fails, it will be considered NOK and we will inform the OTA with an error.

### HotelResNotifRQ

**Example for MerchantPayment**

~~~xml
    <OTA_HotelResRS xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" ResResponseType = "Committed" xmlns = "http://www.opentravel.org/OTA/2003/05">
      <HotelReservations>
        <HotelReservation CreateDateTime = "2018-08-01T09:07:28.5074165Z" ResStatus = "Confirmed">
          <RoomStays>
            <RoomStay>
              <RoomTypes>
                <RoomType RoomTypeCode = "STD" RoomID = "1">
                  <RoomDescription>
                    <Text>Standard</Text>
                  </RoomDescription>
                </RoomType>
              </RoomTypes>
              <RatePlans>
                <RatePlan RatePlanCode = "BAR" PriceViewableInd = "false">
                  <RatePlanDescription>
                    <Text>Best Available Rate</Text>
                  </RatePlanDescription>
                  <Commission Percent = "20"/>
                  <Guarantee PaymentCode = "MerchantPayment"/>
                </RatePlan>
              </RatePlans>
              <RoomRates>
                <RoomRate BookingCode = "1|30#30|1|2018-08-17|5|488654|38644|3|0|0" EffectiveDate = "2018-08-17" ExpireDate = "2018-08-22" RoomTypeCode = "STD" InvBlockCode = "3" NumberOfUnits = "37" RatePlanCode = "BAR" RoomID = "1">
                  <Rates>
                    <Rate EffectiveDate = "2018-08-17" ExpireDate = "2018-08-18">
                      <Base AmountBeforeTax = "201.37" AmountAfterTax = "201.37" CurrencyCode = "EUR" Type = "25"/>
                      <CancelPolicies>
                        <CancelPenalty PolicyCode = "c25b8026-5ca2-49ce-b62c-fe0b4945de01"/>
                      </CancelPolicies>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-18" ExpireDate = "2018-08-19">
                      <Base AmountBeforeTax = "219.19" AmountAfterTax = "219.19" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-19" ExpireDate = "2018-08-20">
                      <Base AmountBeforeTax = "130.09" AmountAfterTax = "130.09" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-20" ExpireDate = "2018-08-21">
                      <Base AmountBeforeTax = "156.82" AmountAfterTax = "156.82" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-21" ExpireDate = "2018-08-22">
                      <Base AmountBeforeTax = "165.73" AmountAfterTax = "165.73" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                  </Rates>
                  <Total AmountBeforeTax = "873.20" AmountAfterTax = "873.20" CurrencyCode = "EUR"/>
                </RoomRate>
              </RoomRates>
              <CancelPenalties>
                <CancelPenalty PolicyCode = "c25b8026-5ca2-49ce-b62c-fe0b4945de01" NonRefundable = "false">
                  <Deadline AbsoluteDeadline = "2018-08-16" OffsetTimeUnit = "Day" OffsetUnitMultiplier = "1" OffsetDropTime = "BeforeArrival"/>
                  <AmountPercent NmbrOfNights = "1" CurrencyCode = "EUR"/>
                </CancelPenalty>
              </CancelPenalties>
              <BasicPropertyInfo HotelCode = "1" HotelName = "Test Hotel"/>
              <Comments>
                <Comment>
                  <Text>Customer comments...</Text>
                </Comment>
              </Comments>
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
                        <GivenName>John</GivenName>
                        <Surname>Doe</Surname>
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
                        <GivenName>xxxxxxx</GivenName>
                        <Surname>xxxxxx</Surname>
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
            <Guarantee PaymentCode = "MerchantPayment"/>
            <Total AmountBeforeTax = "873.20" AmountAfterTax = "873.20" CurrencyCode = "EUR"/>
            <HotelReservationIDs>
              <HotelReservationID ResID_Value = "**clientLocator**" ResID_SourceContext = "Client"/>
              <HotelReservationID ResID_Value = "**internalLocator**" ResID_SourceContext = "Internal"/>
            </HotelReservationIDs>
            <Profiles>
              <ProfileInfo>
                <Profile>
                  <Customer>
                    <PersonName>
                      <NamePrefix>Mr</NamePrefix>
                      <GivenName>xxxxxx</GivenName>
                      <Surname>xxxxx</Surname>
                    </PersonName>
                    <Telephone PhoneTechType = "1" PhoneNumber = "900000000"/>
                    <Email EmailType = "1">"***agency_email@agency.com***"</Email>
                    <Address Type = "1">
                      <AddressLine>Address</AddressLine>
                      <CityName>Address</CityName>
                      <PostalCode>07121</PostalCode>
                      <CountryName>ES</CountryName>
                    </Address>
                  </Customer>
                </Profile>
              </ProfileInfo>
            </Profiles>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
      <Success/>
    </OTA_HotelResRS>
~~~~


**Example for VCC Payment**

~~~xml
    <OTA_HotelResRS>
      <HotelReservations>
        <HotelReservation CreateDateTime = "2018-08-01T08:44:18.7584388Z" ResStatus = "Confirmed">
          ..
          <ResGlobalInfo>
            <Guarantee PaymentCode = "DirectPayment">
              <GuaranteesAccepted>
                <GuaranteeAccepted>
                  <PaymentCard ExpireDate = "0614" CardCode = "VI">
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
            ..
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResRS>
~~~~

**Example for VCC Payment with URL**

~~~xml
    <OTA_HotelResRS>
      <HotelReservations>
        <HotelReservation CreateDateTime = "2018-08-01T08:44:18.7584388Z" ResStatus = "Confirmed">
          ..
          <ResGlobalInfo>
            <Guarantee PaymentCode = "DirectPayment">
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
            ..
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResRS>
~~~~


| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_HotelResRS		| 1     	|		| Root Node.					|
| OTA_HotelResRS/Success	| 0..1    	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| OTA_HotelResRS/HotelReservations | 0..1   	|		| Node containing the reservation.		|
| HotelReservations/HotelReservation	| 1     	|		| Node containing information about the reservation.|
| @ResStatus				| 1 		| String	| Status of the reservation. The possible status value is: 'Confirmed'|
| @CreateDateTime			| 1 		| DateTime	| Date and time when the reservation was made.	|
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
| RoomStay/Comments		| 0..1     	|		| Node containing information of the customer comments.|
| Comments/Comment		| 1..n     	| String	| Customer comment text|
| Comment/Text		| 1     	|		| Node containing information about one customer comment|
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
| @ResIDValue				| 1 		| String	| Value of the id.				|
| @ResIDSourceContext			| 1 		| String	| Id context.					|
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


### HotelResNotifRS


Success Response

~~~xml
    <OTA_HotelResNotifRS Timestamp = "2018-09-12T23:09:08+03:00">
      <HotelReservations>
        <HotelReservation ResStatus = "Confirmed">
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Value = "**providerLocator**" ResID_SourceContext = "Provider"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
      <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
    </OTA_HotelResNotifRS>
~~~


Error Response

~~~xml
    <OTA_HotelResNotifRS>
      <Errors xmlns = "http://www.opentravel.org/OTA/2003/05">
        <Error ShortText = "Confirmation error" Code = "50">Hotel doesn't exist</Error>
      </Errors>
    </OTA_HotelResNotifRS>
~~~

| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_HotelResRS		| 1     	|		| Root Node.					|
| OTA_HotelResRS/Success	| 0..1    	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| OTA_HotelResRS/Errors	| 0..1    	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| Errors/Error	| 1..n    	|		| Node containing the errors.|
| @ResIDValue_				| 1 		| String	| Value of the id.				|
| OTA_HotelResRS/HotelReservations | 0..1   	|		| Node containing the reservation. Only needed if locator is provided.		|
| HotelReservations/HotelReservation	| 1     	|		| Node containing information about the reservation.|
| @ResStatus				| 1 		| String	| Status of the reservation. The possible status value is: 'Confirmed'|
| ResGlobalInfo				| 1     	|		| Node containing general information about the reservation. |
| ResGlobalInfo/HotelReservationIDs	| 1     	|		| Node containing the ids of the reservation.	|
| HotelReservationIDs/HotelReservationID | 2     	|		| Node containing information of one reservation id. |
| @ResIDValue				| 1 		| String	| Value of the id.				|
| @ResIDSourceContext			| 1 		| String	| Id context.					|



### CancelNotif

Only implements if the Channel Manager allows cancellation delivery. 

During the cancellation process, we will send a CancelNotifRQ message to the Channel to inform of the cancellation. 
The Channel will process the cancellation info and will inform us of the reservation status. TGX will process the response from the Channel's system and will proceed with the cancellation process.

Note that if the cancellation into the Channel system fails, it will be considered NOK and we will inform the OTA with an error.

### CancelNotifRQ

~~~xml
    <OTA_HotelResRS xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" ResResponseType = "Cancelled" xmlns = "http://www.opentravel.org/OTA/2003/05">
      <HotelReservations>
        <HotelReservation CreateDateTime = "2018-08-01T09:07:28.5074165Z" ResStatus = "Cancelled">
          <RoomStays>
            <RoomStay>
              <RoomTypes>
                <RoomType RoomTypeCode = "STD" RoomID = "1">
                  <RoomDescription>
                    <Text>Standard</Text>
                  </RoomDescription>
                </RoomType>
              </RoomTypes>
              <RatePlans>
                <RatePlan RatePlanCode = "BAR" PriceViewableInd = "false">
                  <RatePlanDescription>
                    <Text>Best Available Rate</Text>
                  </RatePlanDescription>
                  <Commission Percent = "20"/>
                  <Guarantee PaymentCode = "MerchantPayment"/>
                </RatePlan>
              </RatePlans>
              <RoomRates>
                <RoomRate BookingCode = "1|30#30|1|2018-08-17|5|488654|38644|3|0|0" EffectiveDate = "2018-08-17" ExpireDate = "2018-08-22" RoomTypeCode = "STD" InvBlockCode = "3" NumberOfUnits = "37" RatePlanCode = "BAR" RoomID = "1">
                  <Rates>
                    <Rate EffectiveDate = "2018-08-17" ExpireDate = "2018-08-18">
                      <Base AmountBeforeTax = "201.37" AmountAfterTax = "201.37" CurrencyCode = "EUR" Type = "25"/>
                      <CancelPolicies>
                        <CancelPenalty PolicyCode = "c25b8026-5ca2-49ce-b62c-fe0b4945de01"/>
                      </CancelPolicies>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-18" ExpireDate = "2018-08-19">
                      <Base AmountBeforeTax = "219.19" AmountAfterTax = "219.19" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-19" ExpireDate = "2018-08-20">
                      <Base AmountBeforeTax = "130.09" AmountAfterTax = "130.09" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-20" ExpireDate = "2018-08-21">
                      <Base AmountBeforeTax = "156.82" AmountAfterTax = "156.82" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-21" ExpireDate = "2018-08-22">
                      <Base AmountBeforeTax = "165.73" AmountAfterTax = "165.73" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                  </Rates>
                  <Total AmountBeforeTax = "873.20" AmountAfterTax = "873.20" CurrencyCode = "EUR"/>
                </RoomRate>
              </RoomRates>
              <CancelPenalties>
                <CancelPenalty PolicyCode = "c25b8026-5ca2-49ce-b62c-fe0b4945de01" NonRefundable = "false">
                  <Deadline AbsoluteDeadline = "2018-08-16" OffsetTimeUnit = "Day" OffsetUnitMultiplier = "1" OffsetDropTime = "BeforeArrival"/>
                  <AmountPercent NmbrOfNights = "1" CurrencyCode = "EUR"/>
                </CancelPenalty>
              </CancelPenalties>
              <BasicPropertyInfo HotelCode = "1" HotelName = "Test Hotel"/>
              <Comments>
                <Comment>
                  <Text>Customer comments...</Text>
                </Comment>
              </Comments>
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
                        <GivenName>John</GivenName>
                        <Surname>Doe</Surname>
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
                        <GivenName>xxxxxxx</GivenName>
                        <Surname>xxxxxx</Surname>
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
            <Guarantee PaymentCode = "MerchantPayment"/>
            <Total AmountBeforeTax = "873.20" AmountAfterTax = "873.20" CurrencyCode = "EUR"/>
            <HotelReservationIDs>
              <HotelReservationID ResID_Value = "**clientLocator**" ResID_SourceContext = "Client"/>
              <HotelReservationID ResID_Value = "**internalLocator**" ResID_SourceContext = "Internal"/>
            </HotelReservationIDs>
            <Profiles>
              <ProfileInfo>
                <Profile>
                  <Customer>
                    <PersonName>
                      <NamePrefix>Mr</NamePrefix>
                      <GivenName>xxxxxx</GivenName>
                      <Surname>xxxxx</Surname>
                    </PersonName>
                    <Telephone PhoneTechType = "1" PhoneNumber = "900000000"/>
                    <Email EmailType = "1">"***agency_email@agency.com***"</Email>
                    <Address Type = "1">
                      <AddressLine>Address</AddressLine>
                      <CityName>Address</CityName>
                      <PostalCode>07121</PostalCode>
                      <CountryName>ES</CountryName>
                    </Address>
                  </Customer>
                </Profile>
              </ProfileInfo>
            </Profiles>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
      <Success/>
    </OTA_HotelResRS>
~~~~

| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_HotelResRS		| 1     	|		| Root Node.					|
| OTA_HotelResRS/Success	| 0..1    	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| OTA_HotelResRS/HotelReservations | 0..1   	|		| Node containing the reservation.		|
| HotelReservations/HotelReservation	| 1     	|		| Node containing information about the reservation.|
| @ResStatus				| 1 		| String	| Status of the reservation. The possible status value is: 'Cancelled'|
| @CreateDateTime			| 1 		| DateTime	| Date and time when the reservation was made.	|
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
| RoomStay/Comments		| 0..1     	|		| Node containing information of the customer comments.|
| Comments/Comment		| 1..n     	| String	| Customer comment text|
| Comment/Text		| 1     	|		| Node containing information about one customer comment|
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
| @ResIDValue				| 1 		| String	| Value of the id.				|
| @ResIDSourceContext			| 1 		| String	| Id context.					|
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

### CancelNotifRS


Success Response

~~~xml
    <OTA_HotelResNotifRS>
      <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
    </OTA_HotelResNotifRS>
~~~


Error Response

~~~xml
    <OTA_HotelResNotifRS>
      <Errors xmlns = "http://www.opentravel.org/OTA/2003/05">
        <Error ShortText = "Cancellation error" Code = "60">Reservation doesn't exist</Error>
      </Errors>
    </OTA_HotelResNotifRS>
~~~


### Error Codes


| **Error Code**	| **Error Description**						|
| --------------------- | ------------------------------------------------------------- |
| -1           		| Unexpected error						|
|  1           		| Validation error						|
| 10             	| HotelCode not found				|
| 11            	| Invalid Dates					|
| 14            	| Invalid Derived Rate			|
| 22            	| Rooms not found						|
| 23            	| Rates not found						|
| 30            	| Occupancy Error	|
| 31            	| RatePlan_Rate Error					|
| 38            	| POS credentials not found					|
| 50           		| Confirmation error						|
| 60           		| Cancellation error						|
