+++
title = "HotelRatePlanInventoryNotif"
pagetitle = "HotelRatePlanInventoryNotif"
description = "HotelRatePlanInventoryNotif message"
icon = "fa-cog" 
weight = 2
alwaysopen = false
isDirectory = false
+++


Providers send a HotelRatePlanInventoryNotifRQ message to push the Hotel SetUp information into the TGX database. TGX then processes the data and responds with an error code if needed or success if everything is correct.




## HotelRatePlanInventoryNotifRQ




**XML Example**



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
		    <Tax Amount = "20" ChargeFrequency = "PerNight" ChargeUnit = "">
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


**Example for a **Derived** RatePlan**


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
| @BaseRatePlanCode			| 0..1	     | String	| Rate code of the base RatePlan. Only used for derived rates. |@BaseRatePlanCode			| 0..1	     | String	| Rate code of the base RatePlan. Only used for derived rates. |
| @RateReturn			| 0..1	     | String	| Indicates if the Derived Rate Code should be passed to the channel manager in booking notifications or the Base Rate Code. Only used for derived rates. |
| @RatePlanNotifType			| 0..1	     | String	| New, Delta or Remove |
| @RatePlanStatusType			    | 1		 | String   | Active or Deactivated.				|
| @CurrencyCode				| 0..1	     | String	| ISO Currency (EUR). Not used for derived rates.	|
| @Start      				    | 0..1 	 | Date	    | Start date of the rate booking window (Booking Dates for which the rate will be available). |
| @End        				    | 0..1	 | Date     | End date of the rate booking window (Booking Dates for which the rate will be available). |
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
| @LocationCodesInclusive		    | 1 	 | Boolean  | When it's true, this rate can be request for next countryCode, when false cannot be requested for this country. |
| BookingRule/Viewerships/Viewership/LocationCodes/LocationCode | 0..1 |  | If it's missing, applies to all countryCode againthe other viewership condition. |
| @CountryCode				   | 1 		 | String   | Country ISO2 code from can or cannot be requested this rate. |
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
| @ChargeFrequency | 1 | String | If PerNight indicates that tax is applied relative to the Amount of Nights booked  |
| @ChargeUnit | 1 | String | If PerPax indicates that tax is applied relative to the Amount of Paxes booked  |
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


## HotelRatePlanInventoryNotifRS


**Success Response**


~~~xml
    <HotelRatePlanInventoryNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanInventoryNotifResult>
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelRatePlanInventoryNotifResult>
    </HotelRatePlanInventoryNotifResponse>
~~~


**Error Response**


~~~xml
    <HotelRatePlanInventoryNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
         <HotelRatePlanInventoryNotifResult>
            <Errors xmlns="http://www.opentravel.org/OTA/2003/05">
               <Error Language="en" ShortText="Unexpected error" Code="-1">Hotel 1610 already exists in CP.</Error>
            </Errors>
         </HotelRatePlanInventoryNotifResult>
      </HotelRatePlanInventoryNotifResponse>
~~~
