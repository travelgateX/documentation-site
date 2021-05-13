+++
title = "API reference"
pagetitle = "Channel-X API"
description = "Channel-X API messages for buyers"
weight = 2
icon="fa-code"
alwaysopen = false
isDirectory = false
+++
The API described in this document is used to transmit rate, availability and inventory, data between Channel-X and a partner system. A full implementation of this API requires that the partner system provides a service endpoint that accepts requests from Channel-X of the following types: *HotelRatePlanInventoryNotif*, *HotelRatePlanNotif*, *HotelAvailNotif*.

{{%custom-children%}}

## Global Details

In this section you can find the three methods you need to implement to receive from Channel-X and all its specifications:

* [HotelRatePlanInventoryNotif](#hotelrateplaninventorynotif)
* [HotelRatePlanNotif](#hotelrateplannotif)
* [HotelAvailNotif](#hotelavailnotif)

### Protocol and Headers
All requests are expected to be standard HTTP POST requests in which the POST body is the request XML and the Content-Type header is set to ``"application/xml"``.

### Authentication

Requests will be sent with a authentication encoded in *Base-64*. Credentials may be found in **Authorization** header tag, with value **Basic (encoded credentials)** as follows:\
`Authorization: Basic aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1RWWg2bVlJSkcyWQ==`

### Summary 

BR = Only used for: 'Basic Rates'\
DV = Only used for: 'Derived Rates'\
N = Names allowed for a specific element

</br>


## HotelRatePlanInventoryNotif

The ``HotelRatePlanInventoryNotif`` message contains information about the inventory setup information that should be followed by the structure: Hotel > Rate > Room.

```xml
<HotelRatePlanInventoryNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
    <request PrimaryLangID = "ES" Version = "0">
        <RatePlans HotelCode = "1" HotelStatusType = "Active" xmlns = "http://www.opentravel.org/OTA/2003/05">
            <RatePlan Duration = "0" CurrencyCode = "EUR" RatePlanCode = "BAR" FreeChild = "true" FreeBaby = "false" RatePlanStatusType = "Active" RatePlanNotifType = "New">
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
                            <GuaranteePayment PaymentCode = "BookingDatePayment">
                                <AcceptedPayments>
                                    <AcceptedPayment>
                                        <PaymentCard CardCode = "VI"/>
                                    </AcceptedPayment>
                                    <AcceptedPayment>
                                        <PaymentCard CardCode = "AX"/>
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
                            <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "10"/>
                            <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "8"/>
                            <Occupancy MinOccupancy = "1" MaxOccupancy = "1" AgeQualifyingCode = "7"/>
                            <Room RoomTypeCode = "STD" RoomID = "1"/>
                            <Description>
                                <Text>Standard</Text>
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
```

**Example for Derived RatePlan**
```xml
<HotelRatePlanInventoryNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
    <request PrimaryLangID = "ES" Version = "0"/>
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
```

**Example for Offers**
```xml
<HotelRatePlanInventoryNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
    <request PrimaryLangID = "ES" Version = "0"/>
    <RatePlans HotelCode = "1" HotelStatusType = "Active" xmlns = "http://www.opentravel.org/OTA/2003/05">
        <RatePlan BaseRatePlanCode = "BAR" RatePlanStatusType = "Active" RatePlanCode = "DERIVED" RateReturn = "false">
            <Offers>
                <Offer OfferCode = "offer" OfferStatusType = "Active" OfferNotifType = "New">
                    <OfferRules>
                        <OfferRule>
                            <LengthsOfStay ArrivalDateBased = "false">
                                <LengthOfStay Time = "2" MinMaxMessageType = "MinLOS"/>
                                <LengthOfStay Time = "6" MinMaxMessageType = "MaxLOS"/>
                            </LengthsOfStay>
                            <DOW_Restrictions>
                                <AvailableDaysOfWeek Mon = "true" Tue = "true" Weds = "true" Thur = "true" Fri = "true" Sat = "true" Sun = "true"/>
                            </DOW_Restrictions>
                            <Inventories>
                                <Inventory InvCode = "1BDAPT"/>
                            </Inventories>
                        </OfferRule>
                    </OfferRules>
                    <Discount NightsDiscounted = "1" DiscountPattern = "Last"/>
                    <OfferDescription>
                        <Text>Offer Test</Text>
                    </OfferDescription>
                </Offer>
            </Offers>
        </RatePlan>
    </RatePlans>
</HotelRatePlanInventoryNotif>
```

| **Element**	                  | **Rel** | **Type** | **Description**					                                             |
| :---------------------------- | :-----: | :------: | --------------------------------------------------------------------- |
| HotelRatePlanInventoryNotif  	| 1 	    |		       | 						                                                 |
| ../request                 	    | 1 	    |		       |          						                                                 |
| ../RatePlans			   	            | 1   	  |		       |							                                                         |
| @HotelCode				            | 1	      | String	 |                                                                       |
| @HotelStatusType			        | 1	      | String	 | *N*: Active, Deactivated				                                         |
| ../RatePlan  		                | 0..n	  |		       |                        				                                       |
| @FreeChild				          | 1	      | Boolean	 | Indicates if the child is free at that rate. Find here the [price calculation](https://docs.travelgatex.com/inventory-x/extranet/faq/free-children-baby/)    |
| @FreeBaby				          | 1	      | Boolean	 | Indicates if the baby is free at that rate. Find here the [price calculation](https://docs.travelgatex.com/inventory-x/extranet/faq/free-children-baby/) |
| @RatePlanCode				          | 1	      | String	 | Rate code						                                                 |
| @BaseRatePlanCode			        | 0..1	  | String	 | *DV*. Rate code of the base RatePlan                                  |
| @RateReturn			              | 0..1	  | String	 | -                                                                     |
| @RatePlanNotifType			      | 0..1	  | String	 | *N*: New, Delta, Remove                                                  |
| @RatePlanStatusType			      | 1		    | String   | *N*: Active, Deactivated				                                         |
| @CurrencyCode				          | 0..1	  | String	 | *BR*. ISO Currency (EUR)	                                             |
| @Start      				          | 0..1 	  | Date	   | Booking Start Date for which the rate will be available.               |
| @End        				          | 0..1	  | Date     | Booking Start Date for which the rate will be available.               |
| RatePlan/BookingRules            	    | 0..1    |	         |                                                                       |
| ../BookingRule		                | 1..n    |	         | 					                                                             |
| @Code       				          | 0..1	  | String   | Empty if there are viewships conditions                               |
| ../CancelPenalties               | 1       | 	       |                                               	                       |
| ../CancelPenalty                 | 1..n    |	         |              					                                               |
| @NonRefundable			          | 1 	    | Boolean  |                                                 	                     |
| CancelPenalty/Deadline 		                  | 1       |	         |                                                                       |
| @OffsetTimeUnit			          | 1 	    | String   |                                                                       |
| @OffsetUnitMultiplier			    | 1 	    | Integer      |                                          	                           |
| @OffsetDropTime			          | 1 	    | String   |                                                                       |
| CancelPenalty/AmountPercent   | 1       |	         | NmbrOfNights, Percent or Amount tag must be present                       |
| @NmbrOfNights				          | 0..1	  | Integer  | Number of nights that will be charged                                 |
| @Percent    				          | 0..1	  | Decimal  | Percent of the total amount that will be charged in case of cancellation applying the current cancel penalty |
| @Amount     				          | 0..1	  | Decimal   | Amount that will be charged                                          |
| @CurrencyCode				          | 0..1	  | String    | Must be present if amount tag is present                             |
| ../Viewerships		                | 0..1    |	          |                                          		                         |
| ../Viewership	                  | 1..n	  |	          |							                                                         |
| ../LocationCodes                 | 1       |	          |                                       		                           |
| @LocationCodesInclusive		    | 1 	    | Boolean   | Can or cannot be requested from this countryCode                     |
| /LocationCode                  | 0..1    |           | If it is missing, applies to all countryCodes |
| @CountryCode				          | 1 		  | String    | Country ISO2 code can or cannot be requested from this rate.        |
| RatePlan/Rates		                      | 1	      |		        | 							                                                       |
| ../Rate                          | 1..n	  |		        |							                                                         |
| Rate/AdditionalGuestAmounts		    | 1	      |		        |							                                                         |
| ../AdditionalGuestAmount		      | 1..2	  |		        |							                                                         |
| @AgeQualifyingCode		        | 1	      |	Integer	  |	*N*: 8, 7. Child, Baby			 |
| @MaxAge		                    | 1	      |	Integer	  |	Max age (not inclusive) of the additional guest			   |
| Rate/PaymentPolicies			          | 1     	|	          |                 |
| ../GuaranteePayment	            | 1..n    |	          | Information about an accepted payment            |
| @PaymentCode				          | 1     	|	          | Payment method accepted by the rate. Check *Documentation > Code Lists > Payment Type Codes*|
| ../AcceptedPayments	            | 0..1    |	          | Accepted payments information. Only present if *PaymentCode* is not "MerchantPayment" |
| /AcceptedPayment	              | 1..n    |	          | 	                                                                   |
| ../PaymentCard		                | 1..n    |	          |                                             	                       |
| @CardCode        			        | 1     	| String    | Check *Documentation > Code Lists > Credit Cards*                         |
| Rate/MealsIncluded                 | 0..1	  |	          | Present if board is included within the rate	                       |
| @MealPlanCodes			          | 1 		  | Integer   | Check *Documentation > Code Lists > Meal Plan Codes (OTA MPT)* |
| RatePlan/SellableProducts	            | 0..1    |	          | List of sellable products. When derived rate and not present, it applies to all rooms. In other cases, it informs about the rooms to which it applies |
| ../SellableProduct               | 0..n    |	          | Present if rooms are associated with this rate		                         |
| @InvCode    				          | 1 		  | String    | Sellable Product Code				                                       |
| @InvTypeCode    			        | 0..1 	  | String    | External information about the room (own code, own description, etc.) |
| @InvType    				          | 1 		  | String    | *N*: ROOM		                                   |
| @InvStatusType			          | 1 	 	  | String    | *N*: Active, Deactivated.				                                       |
| @InvNotifType			            | 0..1	  | String	  | *N*: New, Delta, Remove                                                 |
| ../GuestRoom                     | 1..n	  |	          |							                                                         |
| GuestRoom/Quantities                    | 1       |	          |      						                                                     |
| @StandardNumBeds			        | 1 		  | Integer   | Standard occupation of the room 			                                   |
| GuestRoom/Occupancy                     | 1       |	          |     						                                                     |
| @MinOccupancy				          | 1 		  | Integer   | 					                                                           |
| @MaxOccupancy				          | 1 		  | Integer   |                 					                                           |
| @AgeQualifyingCode			      | 1 		  | Integer   | *N*: 10, 8, 7. Adult, Child, Infant.		                                   |
| GuestRoom/Room                          | 1       |           | 			                                                               |
| @RoomTypeCode    				      | 1 		  | String    | Room Code 				                                                   |
| @RoomID    				            | 1 		  | Integer   |         				                                                     |
| GuestRoom/Description                          | 0..1       |     | Room description			                                               |
| Text                          | 1       | String    | 			                                               |
| RatePlan/Taxes                         | 0..1    |	          |	 	                                                                   |
| ../Tax                           | 1..n    |	          | Tax that applies to the room prices of the rate 			                   |
| @Amount/Percent               | 1       | Decimal   | Tax will be applied relative to an amount or a percentage            |
| @ChargeFrequency              | 0..1    | Boolean   | Tax is/isn't applied relative to the Amount of Nights booked         |
| @ChargeUnit                   | 0..1    | Boolean   | Tax is/isn't applied relative to the Amount of Paxes booked          |
| ../TaxDescription                | 1       |	          |  			                                                               |
| ../Text                          | 1       | String	  | Description of tax type 			                                       |
| ../RatePlanInclusionsType        |	0..1    |	          | *DV*                  			                                         |
| ../RatePlanInclusionDescription  |	1       |	          |	*DV* 			                                                           |
| ../Name                          |	1       |	          |	*DV*.	                                                                                                  |         
| RatePlan/Description             |	0..1       |    |	Rate description 			                                             |
| ../Text                          |	1       |	String    |				                                             |
| RatePlan/Offers                  | 0..1    |           |                                                                      |
| ../Offer                         | 1..n    |           | 			                                                               |
| @OfferCode                    | 1       | String    |                                                                      |
| @OfferStatusType              | 1       | String    | *N*: Active, Deactivated                                             |
| @OfferNotifType			          | 0..1	  | String	  | *N*: New, Delta, Remove                                              |
| ../OfferRules                    | 1       |           | 			                                                               |
| ../OfferRule                     | 1       |           |		                                                                   |
| ../LengthsOfStay                 | 1       |           | 			                                                               |
| ../LengthOfStay                  | 1..2    |           |						                                                           |
| @Time 				                | 1	      | Integer	  | It indicates the number of nights for this stay	                       |
| @MinMaxMessageType			      | 1	      | String	  | *N*: MinLOS, MaxLOS. Minimum or Maximum stay for the Offer           |
| ../DOW_Restrictions              | 1       |           | 			                                                               |
| ../AvailableDaysOfWeek           | 1       |           |It indicates whether the Offer data applies to a certain day of the week |
| @Mon  				| 1	     | Boolean	|  |
| @Tue  				| 1	     | Boolean	|  |
| @Weds 				| 1	     | Boolean	|  |
| @Thur 				| 1	     | Boolean	|  |
| @Fri  				| 1	     | Boolean	|  |
| @Sat  				| 1	     | Boolean	|  |
| @Sun  				| 1      | Boolean	|  |
| ../Inventories                   | 0..1    |           | Rooms to which the offer will apply. If no Inventories are sent, the offer will apply to all the rooms in the Rate |
| ../Inventory                     | 1..n    |           | 		                                                                 |
| @InvCode                      | 1       | String    | Room code                                                            |
| ../Discount                       | 1       |           | 			                                                               |
| @NightsDiscounted             | 1       | String    | Nights discounted by the offer from the total stay amount           |
| @DiscountPattern              | 1       | String    | *N*: First, Last, Cheapest. Booking night/s the offer will dicount   |
| ../OfferDescription                          | 0..1       |     | Offer description                         
| ../Text                          | 1       | String    |                                                      |
| ../TPA_Extensions			   	      | 0..1    |		        | Only added when creating or deleting a hotel                 |
| ../TPA_Extensions/Attribute      | 1       |		        |							                                                         |
| @key        			            | 1  		  | String	  | *N*: HotelNotifType						                                       |
| @value      			            | 1  		  | String	  | *N*: New, Remove. To create a hotel or remove all the hotel setup.   |



## HotelRatePlanNotif 

The ``HotelRatePlanNotif`` message contains information about rate prices.

```xml
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
            <RatePlan RatePlanCode = "TAR333" CurrencyCode = "EUR" FreeChild = "true" FreeBaby = "false" RatePlanStatusType = "Deactivated">
                <Rates>
                    <Rate Start = "2013-04-01" End = "2013-12-31">
                        <BaseByGuestAmts>
                            <BaseByGuestAmt Type = "25" AmountAfterTax = "80.00"/>
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
                            <BaseByGuestAmt Type = "14" Code = "3-0-0" AmountAfterTax = "-1"/>
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
        </RatePlans>
    </request>
</HotelRatePlanNotif>
```

**Example for Derived RatePlan**
```xml
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
```

| **Element**	                  | **Rel** | **Type** | **Description**					                                             |
| :---------------------------- | :-----: | :------: | --------------------------------------------------------------------- |
| HotelRatePlanNotif		| 1 	    |		       | Root Node						                                                 |
| ../request		| 1 	    |		       | 				                                                 |
| request/RatePlans			   	            | 1   	  |		       |							                                                         |
| @HotelCode				            | 1	      | String	 |                                                                       |
| ../RatePlan			                | 1..n	  |		       |                        				                                       |
| @RatePlanCode				          | 1	      | String	 |          						                                                 |
| @FreeChild				          | 1	      | Boolean	 | Indicates if the child is free at that rate. Find here the [price calculation](https://docs.travelgatex.com/inventory-x/extranet/faq/free-children-baby/)    |
| @FreeBaby				          | 1	      | Boolean	 | Indicates if the baby is free at that rate. Find here the [price calculation](https://docs.travelgatex.com/inventory-x/extranet/faq/free-children-baby/) |
| @RatePlanStatusType			      | 0..1	  | String	 | *N*: Active, Deactivated. Informative tag that indicates wheter RatePlan is active or not |
| @BaseRatePlanCode			        | 0..1	  | String	 | *DV*. Rate code of the base RatePlan                                  |
| @CurrencyCode				          | 0..1	  | String	 | *BR*. ISO Currency	                                             |
| RatePlan/Rates	                        | 1	      |		       |							                                                         |
| ../Rate	                        | 1..n	      |		       |							                                                         |
| @Start 				                | 1	      | Date	   | Start date of rate 					                                         |
| @End   				                | 1	      | Date	   | End date of rate 					                                           |
| @AdjustedPercentage			      | 0..1	  | Decimal	 | *DV*. The percentage off the base rate plan amount used to determine the price of the Derived RatePlan |
| @AdjustedAmount			          | 0..1	  | Decimal	 | *DV*. The amount which should be added to the Base RatePlan to determine the price of the Derived RatePlan |
| @AdjustUpIndicator			      | 0..1	  | Boolean	 | *DV*: **true**: the adjusted amount/percentage is added to the amount specified for the Base RatePlan to determine the Derived RateAmount. **false**: the adjusted amount or adjusted percentage is subtracted from the amount specified for the Base RatePlan to determine the Derived RatePlan amount |
| Rate/BaseByGuestAmts               | 0..1 | | Different types of price can come in the same BaseByGuestAmts element.	             |
| ../BaseByGuestAmt                | 1..n |	|					 |                                                                       | 
| @AmountAfterTax			          | 1	      | Decimal	 | Total amount for the @NumberOfGuests indicated per day. This amount doesn't include tax. When value is *-1*, price should be deleted from the system.	|
| @NumberOfGuests			          | 0..1	  | Integer	 | How many adults are indicated per day. If @NumberOfGuests is not informed then @Type must be informed. The maximum @NumberOfGuests is the standard occupancy of the room       |
| @Type  				                | 0..1	  | Integer	 | If amounts are per Room or per Occupancy instead of per Pax. **@Type=25**: price is per Room. **@Type=14**: price is per occupancy, @Code is mandatory, AdditionalGuestAmounts are not allowed |
| @Code  				                | 0..1	  | String   | Mandatory if **@Type=14**.                                  |
| Rate/AdditionalGuestAmounts	      | 0..1 |  | *BR*				                                               |
| ../AdditionalGuestAmount         | 1..n |  | Price and information about the additional pax (children, infants or extra adults|
| @MaxAdditionalGuests			    | 1	      | Integer	 | Number of the additional pax |
| @AgeQualifyingCode			      | 1	      | Integer	 | *N*: 10, 8, 7. Adult, child or baby                            			|
| @Type  				                | 0..1	  | String	 | *N*: Exclusive. If present price is absolute and price tag is @Amount |
| @Amount				                | 0..1	  | Decimal	 | Price for each additional pax			|
| @Percent				              | 0..1	  | Decimal	 | Percent for each additional pax			|
| RatePlan/Supplements			              | 0..1	  | 		     | *BR*. Present if supplements by board exists |
| ../Supplement	                  | 1..n	  |		       |							|
| @Start 				                | 1	      | Date	   | Start date of this supplement			|
| @End   				                | 1	      | Date	   | End date of this supplement				|
| @AgeQualifyingCode			      | 0..1	  | Integer	 | *N*: 10, 8, 7. Adult, child, baby. Not allowed if charging Supplement Board by Occupancy |
| @ChargeTypeCode			          | 0..1	  | String	 | Occupancy Supplement Board. Only allowed if charging Supplement Board by Occupancy.
| @Amount				                | 1	      | Decimal	 | Amount of the supplement					|
| @SupplementType			          | 1	      | String	 | *N*: Board						|
| @InvCode				              | 1	      | String	 | OTA MPT Code if @SupplementType is Board. Check *Documentation > Code Lists > Meal Plan Codes (OTA MPT)*		|
| RatePlan/SellableProducts	            | 0..1	  |		| *BR*. List of sellable products 	|
| ../SellableProduct               | 1..n    |          |							|
| @InvCode				              | 1	      | Integer	 | Sellable Product Code				|
| @InvType				              | 1	      | Integer	 | *N*: ROOM. Sellable product type.				|


## HotelAvailNotif

The ``HotelAvailNotif`` message contains information about rate availability and allotment conditions.

```xml 
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
            <AvailStatusMessage BookingLimit = "9" BookingSold = "1">
                <StatusApplicationControl Start = "2013-12-20" End = "2013-12-25" RatePlanCode = "BAR" InvCode = "APT" InvType = "ROOM"/>
                <LengthsOfStay ArrivalDateBased = "true">
                    <LengthOfStay Time = "2" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
                    <LengthOfStay Time = "-1" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
                </LengthsOfStay>
                <RestrictionStatus SellThroughOpenIndicator = "false" MinAdvancedBookingOffset = "5"/>
            </AvailStatusMessage>
            <AvailStatusMessage BookingLimit = "12">
                <StatusApplicationControl Start = "2013-12-20" End = "2013-12-21" RatePlanCode = "LOWCOST" InvCode = "JUN_1" InvType = "ROOM"/>
                <RestrictionStatus Restriction = "Master" Status = "Close"/>
            </AvailStatusMessage>
        </AvailStatusMessages>
    </request>
</HotelAvailNotif>
```

| **Element**	                  | **Rel** | **Type** | **Description**					                                             |
| :---------------------------- | :-----: | :------: | --------------------------------------------------------------------- |
| HotelAvailNotif		    | 1  	    |		       | 						                                                 |
| ../request		    | 1  	    |		       | 						                                                 |
| request/AvailStatusMessages			      | 1   	  |		       |							                                                         |
| @HotelCode				            | 1	      | String	 |                                                                       |
| ../AvailStatusMessage            | 1..n	  |		       |							                                                         |
| @BookingLimit				          | 0..1	  | Integer	 | *DV*. Number of available rooms per Room-RatePlan for the indicated dates                                                                  |
| @BookingSold			          | 0..1	  | Integer	 | *DV*. Number of booked rooms per Room-RatePlan for the indicated dates. The available allotment is the difference between BookingLimit and BookingSold                                                                  |
| AvailStatusMessage/StatusApplicationControl      | 1       |	         |						                                                           |
| @Start				                | 1	      | Date	   | Start date						                                               |
| @End  				                | 1	      | Date	   | End date						                                                 |
| @RatePlanCode				          | 1	      | String	 |                                                       |
| @InvCode				              | 0..1	  | String	 | *BR*. Room Code		                             |
| @InvType				              | 0..1	  | String	 | *BR*. *N*: ROOM	                     |
| AvailStatusMessage/LengthsOfStay                 | 0..1    |	         |							                                                         |
| @ArrivalDateBased			        | 0..1	  | Boolean	 | **true**: the Minimum and Maximum Stay is checked ONLY the first day of the availability. **false or null**: the Minimum and Maximum Stay is checked all the availability days. If both values are needed, two AvailStatusMessage will be sent. |
| ../LengthOfStay                  | 1..2    |         |						                                                             |
| @Time 				                | 1	      | Integer	| Indicates the number of @TimeUnit for this stay. When value is *-1*, condition should be deleted from the system.	                     |
| @TimeUnit				              | 1	      | String	| *N*: Day 						                                                   |
| @MinMaxMessageType			      | 1	      | String	| *N*: MinLOS, MaxLOS. Minimum or maximum stay                           |
| AvailStatusMessage/RestrictionStatus             | 0..1    |         |							                                                           |
| @Status				                | 0..1	  | String	| *N*: Open Close	                                                       |
| @Restriction				          | 0..1	  | String	| *N*: Master, Arrival, Departure.                                       |  
| @MinAdvancedBookingOffset		  | 0..1	  | Integer	| Minimum number of days before the check-in date to be available to be booked. This restriction is usually used to offer discounts on early bookings. When value is *-1*, condition should be deleted from the system.                             |
| @MaxAdvancedBookingOffset		  | 0..1	  | Integer	| Maximum number of days before the check-in date to be available to be booked. This restriction is usually used to offer last minute discounts on unsold inventory. When value is *-1*, condition should be deleted from the system.               |
| @SellThroughOpenIndicator		  | 0..1	  | Boolean	| *BR*. Room-RatePlan can be sold with no limit if @Status is Open  |


## Response messages

Each request should provide a response for the same type of element that has been sent. For example, if a *HotelRatePlanNotif* request is received, a *HotelRatePlanNotif* response should be sent and so on.

| **Possible combination Elements regarding Request** |
| :---------------------------- |
| HotelAvailNotifResponse / HotelAvailNotifResult  |
| HotelRatePlanNotifResponse / HotelRatePlanNotifResult  |
| HotelRatePlanInventoryNotifResponse / HotelRatePlanInventoryNotifResult  |

</br>

### Success

For all successful requests is expected to be returned a *Success* element in the response. On a *HotelAvailNotif* request it should be looking like the following:

```xml
<HotelAvailNotifResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
    <HotelAvailNotifResult>
        <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
    </HotelAvailNotifResult>
</HotelAvailNotifResponse>
```

</br>

### Error

On the other hand, when request provides any error, the response should look like:

```xml
<HotelAvailNotifResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
    <HotelAvailNotifResult>
        <Errors xmlns = "http://www.opentravel.org/OTA/2003/05">
            <Error ShortText = "AvailStatusMessages not found" Code = "2"/>
        </Errors>
    </HotelAvailNotifResult>
</HotelAvailNotifResponse>
```

| **Element**	                  | **Rel** | **Type** | **Description**					                                             |
| :---------------------------- | :-----: | :------: | --------------------------------------------------------------------- |
| Errors | 1 | | |
| Error | 1..n | | Displays error information that has occurred in the system |
| @ShortText | 1 | String | Brief description of the error |
| @Code | 1 | Integer | Check *General Details > Error Table* |





