---
title: Avail
keywords: hotel, data structure, avail
search: Hotel - Data Structure - Avail
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/Avail
---


### Method Goals


This method aims to return all the available options for a given date
and itinerary. It does not filter different classes, times or fares. It
will always retrieve all results returned by the supplier.


### Request Format


The availability request is very straight forward. It only requires
destination, travel dates and the number of pax in each room.


### Response Format


Results are organized in this hierarchy:

-   *Hotel* :

A list with all the hotels, including hotel name and code, *mealplans*
list, etc. returned by the supplier.

-   *Mealplans* :

A list of all MealPlans returned by the supplier, every *mealplan* and
its code. Every *mealplan* also contains a list of *options* for this
availability.

-   *Options* :

A list with all the *options* returned for each mealplan, every *option*
includes the total price, the conditions and room description.

The price returned should be "all inclusive". All fares, taxes and
discounts are included in the total price.



### Observations


This method **must** be called **before** the *Valuation* method.

Our system allows for a max **25000** milliseconds before the connection
is closed.



### AvailRQ Example


~~~xml
    <AvailRQ>
        <CancellationPolicies>false</CancellationPolicies>
        <RoomCancellationPolicies>false</RoomCancellationPolicies>
        <OnRequest>false</OnRequest>
        <BusinessRules>CheaperAmount</BusinessRules>
        <AvailDestinations> list of destinations
            <Destination type = "CTY" code = "5"/>
            <Destination type = "CTY" code = "15"/>
            ....
        </AvailDestinations>
        <StartDate>28/01/2014</StartDate>
        <EndDate>29/01/2014</EndDate>
        <Currency>EUR</Currency>
        <Nationality>ES</Nationality>
        <Markets>
            <Market>ES</Market>
            <Market>EN</Market>
            ....
        </Markets>
        <RoomCandidates>
            <RoomCandidate id = "1">
                <Paxes>
                    <Pax age = "30" id = "1"/>
                    <Pax age = "30" id = "2"/>
                </Paxes>
            </RoomCandidate>
            <RoomCandidate id = "2">
                <Paxes>
                    <Pax age = "35" id = "1"/>
                    <Pax age = "42" id = "2"/>
                    <Pax age = "5" id = "3"/>
                </Paxes>
            </RoomCandidate>
            ....
        </RoomCandidates>
    </AvailRQ>
~~~


### AvailRQ Description



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| AvailRQ               		| 1            	|		| Root node.							|
| CancellationPolicies 			| 1     	| Boolean	| Indicates if you want to receive the cancellation policies in AvailRS, as long as the supplier returns it in this method (see StaticConfiguration in order to verify if a supplier implements it).	|
| RoomCancellationPolicies 			| 1     	| Boolean	| Indicates if you want to receive the cancellation policies at room level in AvailRS, as long as the supplier returns it in this method (see Metadata method in order to verify if a supplier implements it).	|
| OnRequest            			| 1     	| Boolean	| Indicates if you want to receive the onrequest options in AvailRS, as long as the supplier returns it in this method (see StaticConfiguration in order to verify if a supplier implements it).		|
| BusinessRules        			| 1            	|		| Indicates the business rules the client wants to apply in availability, as long as the supplier returns it in this method (see StaticConfiguration in order to verify if a supplier implements it).	|
| AvailDestinations/Destination		| 1..n         	|		| Contains the list of destinations filters (hotels or cities or zones or geocodes). The number of Destinations is defined in StaticConfiguration.	|
| @type           			| 1     	| String	| Destination type (HOT, CTY, ZON, GEO). Clarification: ZONs contains CTYs. ZONs are higher nodes and CTY are lower nodes. It is not possible to mix types of destinations in the same request.  |
| @code           			| 1     	| String	| Native destination code as returned by supplier in *HotelList* or *AvailDestinationTree*.	|
| StartDate            			| 1     	| String	| 'Search from' date.						|
| EndDate              			| 1     	| String	| 'Search til' date.						|
| Currency             			| 1  	| String	| Currency requested if supported by supplier. 	|
| Nationality          			| 1  	| String	| Nationality of the guest (use ISO3166_1_alfa_2). This information is mandatory. (see StaticConfiguration in order to verify if a supplier implements it).	|
| Markets              			| 1         	|		| List of Market requested (see StaticConfiguration in order to verify if a supplier implements it).				|
| Markets/Market       			| 1..n  	| String	| Targeted zone/ country/ Point of sale.			|
| RoomCandidates/RoomCandidate 		| 1..n         	|		| Room required.						|
| @id             			| 1     	| Integer	| Id of the requested room (starting at 1).			|
| RoomCandidates/RoomCandidate /Paxes/Pax | 1..n        |		|  Pax required.  						|
| @age            			| 1     	| Integer	| Pax age.							|
| @id             			| 1     	| Integer	| Pax id (starts at 1).						|



### AvailRS Example


~~~xml
    <AvailRS xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
      <Hotels>
        <Hotel code = "10" name = "LEO">
          <MealPlans>
            <MealPlan code = "D">
              <Options>
                <Option type = "Hotel" paymentType = "MerchantPay" status = "OK">
                  <Rooms>
                    <Room id = "4145" roomCandidateRefId = "1" code = "DBL#STAND" description = "Doble Standard" nonRefundable = "false" numberOfUnits = "5" >
                      <Price currency = "EUR" amount = "36.20" binding = "false" commission = "-1"/>
                      <Fees>
                          <Fee includedPriceOption = "true" description = "TaxAndServiceFee" mandatory = "true" refundable = "false">
                              <Price currency = "EUR" amount = "8.11" binding = "false" commission = "-1"/>
                          </Fee>
                      </Fees>
                      <CancelPenalties nonRefundable = "false">
                          <CancelPenalty>
                              <HoursBefore>24</HoursBefore>
                              <Penalty type = "Importe" currency = "EUR">20</Penalty>
                          </CancelPenalty>
                      </CancelPenalties>
                      <Beds sharedBed = "false">
                        <Bed numberOfBeds = "1" type = "Doble"/>
                      </Beds>
                      <Features>
                         <Feature code = "Double with spa"/>
                      </Features>
                      <DailyPrices>
                        <DailyPrice effectiveDate = "28/01/2014" expireDate = "29/01/2014">
                          <Price
                            currency = "EUR"
                            amount = "36.20"
                            binding = "false"
                            commission = "-1"/>
                        </DailyPrice>
                      </DailyPrices>
                      <DailyRatePlans>
                        <DailyRatePlan
                            effectiveDate = "28/01/2014"
                            expireDate = "29/01/2014"
                            code = "XAD"
                            name = "Flexy Rate Only Adults"/>
                      </DailyRatePlans>                      
                    </Room>
                  </Rooms>
                  <Price currency = "EUR" amount = "36.20" binding = "false" commission = "-1"/>
                  <Offers>
                    <Offer code = "EBI" name = "Early booking"/>
                  </Offers>
                  <Fees>
                    <Fee includedPriceOption = "true" description = "TaxAndServiceFee" mandatory ="true" refundable="false">
                        <Price currency = "EUR" amount = "8.11" binding = "false" commission = "-1"/>
                    </Fee>
                  </Fees>
                </Option>
              </Options>
            </MealPlan>
            <MealPlan code = "M">
              <Options>
                <Option type = "Hotel" paymentType = "MerchantPay" status = "OK">
                  <Rooms>
                    <Room id = "4146" roomCandidateRefId = "1" code = "TWN#STAND" description = "Twin Standard" nonRefundable = "false" numberOfUnits = "5">
                      <Price currency = "EUR" amount = "42.90" binding = "false" commission = "-1"/>
                      <Offers>
                        <Offer code = "EBI" name = "Early booking"/>
                      </Offers>
                    <Beds sharedBed = "false">
                        <Bed numberOfBeds = "2" type = "Twin"/>
                    </Beds>
                    <DailyPrices>
                        <DailyPrice effectiveDate = "28/01/2014" expireDate = "29/01/2014">
                            <Price
                                currency = "EUR"
                                amount = "42.90"
                                binding = "false"
                                commission = "-1"/>
                        </DailyPrice>
                    </DailyPrices>
                    <DailyRatePlans>
                        <DailyRatePlan
                            effectiveDate = "28/01/2014"
                            expireDate = "29/01/2014"
                            code = "XAT"
                            name="Flexy Rate"/>
                    </DailyRatePlans>
                    </Room>
                  </Rooms>
                  <Price currency = "EUR" amount = "42.90" binding = "false" commission = "-1"/>
                </Option>
              </Options>
              ...
            </MealPlan>
            <MealPlan code = "MP">
              <Options>
                <Option type = "HotelSkiPass" paymentType = "MerchantPay" status = "OK">
                  <Rooms>
                    <Room id = "4145" roomCandidateRefId = "1" code = "DBL#STAND" description = "Doble Standard" nonRefundable = "false">
                      <Price currency = "EUR" amount = "636.80" binding = "false" commission = "-1"/>
                    </Room>
                  </Rooms>
                  <Detail>
                    <POIs>
                      <POI code = "8A" Description = "Andorra">
                        <Services>
                          <Service type = "SkiPass" code = "F1" description = "Forfait" durationType = "Range" quantity = "0" unit = "Day">
                            <RangeDates startDate = "28/01/2014" endDate = "29/01/2014"/>
                          </Service>
                        </Services>
                      </POI>
                    </POIs>
                  </Detail>
                  <Price currency = "EUR" amount = "636.80" binding = "false" commission = "-1"/>
                  <Parameters>
                    <Parameter key = "sesion" value = "888de014"/>
                  </Parameters>
                </Option>
                <Option type = "HotelSkiPass" paymentType = "MerchantPay" status = "OK">
                  <Rooms>
                    <Room id = "4145" roomCandidateRefId = "1" code = "DBL#STAND" description = "Doble Standard" nonRefundable = "false">
                      <Price currency = "EUR" amount = "636.80" binding = "false" commission = "-1"/>
                    </Room>
                  </Rooms>
                  <Detail>
                    <POIs>
                      <POI code = "8A" Description = "Andorra">
                        <Services>
                          <Service type = "SkiPass" code = "F1" description = "Forfait" durationType = "open" quantity = "5" unit = "Hour"></Service>
                        </Services>
                      </POI>
                    </POIs>
                  </Detail>
                  <Price currency = "EUR" amount = "636.80" binding = "false" commission = "-1"/>
                  <Parameters>
                    <Parameter key = "sesion" value = "888de014"/>
                  </Parameters>
                  <RateRules>
                    <Rules>
                      <Rule type = "NonRefundable"/>
                    </Rules>
                  </RateRules>
                </Option>
                <Option type = "HotelSkiPass" paymentType = "MerchantPay" status = "OK">
                  <Rooms>
                    <Room id = "4145" roomCandidateRefId = "1" code = "DBL#STAND" description = "Doble Standard" nonRefundable = "false">
                      <Price currency = "EUR" amount = "636.80" binding = "false" commission = "-1"/>
                    </Room>
                  </Rooms>
                  <Detail>
                    <POIs>
                      <POI code = "8A" Description = "Andorra">
                        <Services>
                          <Service type = "SkiPass" code = "F1" description = "Forfait" durationType = "open" quantity = "2" unit = "Day"></Service>
                        </Services>
                      </POI>
                    </POIs>
                  </Detail>
                  <Price currency = "EUR" amount = "636.80" binding = "false" commission = "-1"/>
                  <Parameters>
                    <Parameter key = "sesion" value = "888de014"/>
                  </Parameters>
                  <CancelPenalties nonRefundable = "false">
                    <CancelPenalty>
                      <HoursBefore>24</HoursBefore>
                      <Penalty type = "Importe" currency = "EUR">20</Penalty>
                    </CancelPenalty>
                  </CancelPenalties>
                </Option>
              </Options>
            </MealPlan>
            ...
          </MealPlans>
        </Hotel>
        ...
      </Hotels>
    </AvailRS>
~~~

### AvailRS Description

| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| AvailRS/Hotels/Hotel 			| 0..n 		| 		| Root node.							|
| @code 				| 1 		| String 	| Hotel code.							|
| @name 				| 0..1 		| String 	| Hotel name.							|
| MealPlans 				| 1 		| 		| Retrieves a list of available mealplans for this hotel.					|
| MealPlans/MealPlan 			| 1..n 		| 		| List of mealplan types.				|
| @code 				| 1 		| String 	| MealPlan code.						|
| MealPlans/MealPlan/Options 		| 1 		| 		| List of options					|
| MealPlans/MealPlan /Options/Option 	| 1..n 		| 		| Detail of option.						|
| @type 				| 1 		| String 	| Indicates option type (only hotel, hotel with ski pass, hotel with entrance...).	|
| @paymentType 				| 1 		| String 	| Indicates payment type (Merchant, Direct ...) .	|
| @status 				| 1 		| String 	| Status option (OK = available, RQ = on request).		|
| MealPlans/MealPlan/Options /Option/Parameters | 0..1 	| 		| Additional parameters that must be reported on the ValuationRQ. Parameters, if this option is required.	  |
| MealPlans/MealPlan/Options /Option/Parameters/Parameter | 0..n | 	| Additional parameter requiring integration.		|
| @key 					| 1 		| String 	| Contains the keyword/Id to identify a parameter.		|
| @value 				| 1 		| String 	| Contains  parameter value.				|
| MealPlans/MealPlan/Options /Option/CancelPenalties /CancelPenalty | 0..1|  | List of cancellation penalties. (see StaticConfiguration in order to verify if a supplier implements it)				|
| MealPlans/MealPlan/Options /Option/CancelPenalties /CancelPenalty/HoursBefore| 1 | String | Number of hours prior to arrival day in which this Cancellation policy applies. | 
| MealPlans/MealPlan/Options /Option/CancelPenalties /CancelPenalty | 1..n| | Contains the value to apply.				|
| @type 				| 1 		| String 	| Type of penalty -possible values: "Noches" (nights), "Porcentaje" (percentage), "Importe" (price value).  |
| @currency 				| 1 		| String 	| Currency code.						|
| MealPlans/MealPlan/Options /Option/RateRules | 0..1 	| 		| Option restrictions.					|
| MealPlans/MealPlan/Options /Option/RateRules/Rules | 0..n | 		| Rules.							|
| MealPlans/MealPlan/Options /Option/RateRules/Rules /Rule | 1 | 	| Rule.								|
| @type 				| 1 		| String 	| Possible values (NonRefundable, Older55, Package,...).	|
| MealPlans/MealPlan/Options /Option/Rooms | 1 		| 		| Rooms in this option (room list).				|
| MealPlans/MealPlan/Options /Option/Rooms/Room | 1..n 	| 		| Room details.						|
| @id 					| 1 		| String 	| Room ID.					|
| @roomCandidateRefId 			| 1 		| Integer 	| Room candidate ID.					|
| @code 				| 1 		| String 	| Room code.							|
| @description 				| 1 		| String 	| Room description.						|
| @nonRefundable 			| 0..1 		| String 	| Identifies if the room is refundable or not.			|
| @numberOfUnits 			| 0..1 		| Integer 	| Number of rooms available with the same type (see StaticConfiguration).	|
| MealPlans/MealPlan/Options /Option/Rooms/Room/Offers | 0..1 	| 		| The supplier returns in response which offer is applicable for each room (see StaticConfiguration in order to verify if a supplier implements it).	|
| MealPlans/MealPlan/Options /Option/Rooms/Room/Offers/Offer | 1..n | 		| List of offers.						|
| @code 				| 1 		| String 	| Contains the code to identify a offer.			|
| @name 				| 1 		| String 	| Contains the name of the offer.				|
| MealPlans/MealPlan/Options /Option/Rooms/Room/Beds | 0..1 | 		| Detail of beds (see StaticConfiguration in order to verify if a supplier implements it).						|
| @sharedBed 				| 0..1 		| Boolean 	| Specifies if the beds in the room are shared.			|
| MealPlans/MealPlan/Options /Option/Rooms/Room /Beds/Bed | 0..n | 	| Identifies types of beds.					|
| @numberOfBeds 			| 0..1 		| String 	| Indicates number of beds in the room.				|
| @type 				| 0..1 		| String 	| Indicates the type of bed.					|
| MealPlans/MealPlan/Options /Option/Rooms/Room /Features | 0..1 | 	| Features of this room (features list).	| 
| MealPlans/MealPlan/Options /Option/Rooms/Room /Features/Feature | 1..n | 	| Detail of feature	| 
|@code   | 1 | String| Feature code or text|
| MealPlans/MealPlan/Options /Option/Rooms/Room /DailyPrices | 0..1 | 	| Specifies daily price, as long as the supplier returns it in this method (see StaticConfiguration in order to verify if a supplier implements it).	| 
| MealPlans/MealPlan/Options /Option/Rooms/Room /DailyPrices/DailyPrice | 1..n | | Specifies the price for each day.			|
| @effectiveDate 			| 1 		| String 	| Start date in which the price becomes effective.		|
| @expireDate 				| 1 		| String 	| Expiry date of price.						|
| MealPlans/MealPlan/Options /Option/Rooms/Room /DailyPrices/DailyPrice /Price| 1 | | Day price.					|
| @currency 				| 1 		| String 	| Currency code.						|
| @amount 				| 1 		| Decimal 	| Day Amount.							|
| @binding 				| 1 		| Boolean 	| Identifies if the price is binding (When true, the sale price returned **must** not be less than the price informed. |
| @commission 				| 1 		| Decimal 	| Commission: -1 = not specified (information available in  contract with the supplier ), 0 = net price, X = % of the commission applied to the amount. |
| MealPlans/MealPlan/Options /Option/Rooms/Room /DailyRatePlans | 0..1 | | Specifies the daily rate, as long as the supplier returns it in this method (see StaticConfiguration in order to verify if a supplier implements it).  |
| MealPlans/MealPlan/Options /Option/Rooms/Room /DailyRatePlans/DailyRatePlan | 1..n | | Specifies the rates for each day.		|
| @effectiveDate 			| 1 		| String 	| Start date in which the rate becomes effective.		|
| @expireDate 				| 1 		| String 	| Expirty date of rate.			|
| @code 				| 1 		| String 	| Indicates the supplier's rate code. This code specifies the rate applied to those days.	|
| @name 				| 0		| String 	| Indicates the supplier's rate name.	|
| MealPlans/MealPlan/Options /Option/Rooms/Room /Price | 1 | 		| Room price.							|
| @currency 				| 1 		| String 	| Currency code.						|
| @amount 				| 1 		| Decimal 	| Room Amount.							|
| @binding 				| 1 		| Boolean 	| Identifies if is the price is binding (When true the sale price returned **must** not be less than the price informed).|
| @commission 				| 1 		| Decimal 	| Commission: -1 = not specified (information available in  contract with the supplier ), 0 = net price, X = % of the commission applied to the amount.  |
| MealPlans/MealPlan/Options /Option/Rooms/Room/Fees					    | 0..1       | 	    | Contains a list of fees. |
| MealPlans/MealPlan/Options /Option/Rooms/Room/Fees/Fee				    | 1..n       |      | Contains details of the fee. |
| @includedPriceOption			    | 1		 | Boolean  | Indicates if the fee is included or not in the final price. |
| @description				    | 1          | String   | Remarks regarding fee. |
| @mandatory 				    | 1          | Boolean   | If the fee is obligatory, depending on the includedPriceOption to know if it is paid at the time of booking or at the hotel. In case it is false, it could be a fee such as "cleaning" that the consumer could hire if he wanted. |
| @refundable 				    | 1          | Boolean   | This field will serve to know if the rate to be paid is returned, for example when it is a deposit type that is returned once the stay ends. |
| MealPlans/MealPlan/Options /Option/Rooms/Room/Fees/Fee/Price			    | 1          |          | Contains details of price. |
| @currency 				    | 1          | String   | Currency code. |
| @amount 				    | 1          | Decimal  | Fee Amount. |
| @binding				    | 1          | Boolean  | Identifies if is the price is binding (When true the sale price returned must not be less than the price informed. |
| @commission				    | 1          | Decimal  | Commission: -1 = not specified (indicated in contract with supplier), 0 = net price, X = % of the commission applied to the amount. |
| MealPlans/MealPlan/Options /Option/Rooms/Room/CancelPenalties /CancelPenalty | 0..1|  | List of cancellation penalties. (see StaticConfiguration in order to verify if a supplier implements it)				|
| MealPlans/MealPlan/Options /Option/Rooms/Room/CancelPenalties /CancelPenalty/HoursBefore| 1 | String | Number of hours prior to arrival day in which this Cancellation policy applies. | 
| MealPlans/MealPlan/Options /Option/Rooms/Room/CancelPenalties /CancelPenalty | 1..n| | Contains the value to apply.				|
| @type 				| 1 		| String 	| Type of penalty -possible values: "Noches" (nights), "Porcentaje" (percentage), "Importe" (price value).  |
| @currency 				| 1 		| String 	| Currency code.						|
| MealPlans/MealPlan/Options /Option/Price | 1 		| 		| Option price ( it is the total price of option).		|
| @currency 				| 1 		| String 	| Currency code.						|
| @amount 				| 1 		| Decimal 	| Option Amount.						|
| @binding 				| 1 		| Boolean 	| Identifies if is the price is binding (When true the sale price returned **must** not be less than the price informed.|
| @commission 				| 1 		| Decimal 	| Commission:  -1 = not specified (information available in  contract with the supplier ), 0 = net price, X = % of the commission applied to the amount.	|
| MealPlans/MealPlan/Options /Option/Detail | 0..1 	| 		| Detail of option (if the option is different from the type\<\> Hotel and see StaticConfiguration in order to verify if a supplier implements it).  |
| MealPlans/MealPlan/Options /Option/Detail/POIs | 1 	| 		| Points of interest.						|
| MealPlans/MealPlan/Options /Option/Detail/POIs/POI | 1..n | 		| Point of interest.						|
| @code 				| 1 		| String 	| POI code.							|
| @description 				| 1 		| String 	| POI description.						|
| MealPlans/MealPlan/Options /Option/Detail/POIs/POI /Services | 1 | 	| Services containing this POI.				|
| MealPlans/MealPlan/Options /Option/Detail/POIs/POI	/Services/Service | 1..n | | Service detail.					|
| @type 				| 1 		| String 	| Service type (SkiPass, Lessons, Meals, Equipment, Ticket, Transfers or Gala).	|
| @code 				| 1 		| String 	| Service code.							|
| @description 				| 1 		| String 	| Service description.						|
| @durationType 			| 1 		| String 	|  Date of service. If range= date range is set, then the element "RangeDates" is returned - Open= not restricted by date. Elements "quantity" and "unit" are returned to specify type and quantity.|
| @quantity 				| 1 		| Integer 	| Indicates the quantity of field in the element "unit".		|
| @unit 				| 0..1 		| String 	| Day or Hour.							|
| MealPlans/MealPlan/Options /Option/Detail/POIs/POI /Services/Service/RangeDates| 0..1 | | Service date range (Only specified if durationType=Range).	|
| @startDate 				| 1 		| String 	| Start date of service.					|
| @endDate 				| 1 		| String 	| End date of service.						|
| MealPlans/MealPlan/Options /Option/Remarks | 0..1 	| 		| List of remarks (see StaticConfiguration in order to verify if a supplier implements it).						|
| MealPlans/MealPlan/Options /Option/Remarks/Remark | 1..n | 		| Remark.							|
| MealPlans/MealPlan/Options /Option/Offers | 0..1 	| 		| The supplier returns in response which offer is applicable for each option (see StaticConfiguration in order to verify if a supplier implements it).	|
| MealPlans/MealPlan/Options /Option/Offers/Offer | 1..n | 		| List of offers.						|
| @code 				| 1 		| String 	| Contains the code to identify a offer.			|
| @name 				| 1 		| String 	| Contains the name of the offer.				|
| MealPlans/MealPlan/Options /Option/Fees					    | 0..1       | 	    | Contains a list of fees. |
| MealPlans/MealPlan/Options /Option/Fees/Fee				    | 1..n       |      | Contains details of the fee. |
| @includedPriceOption			    | 1		 | Boolean  | Indicates if the fee is included or not in the final price. |
| @description				    | 1          | String   | Remarks regarding fee. |
| @mandatory 				    | 1          | Boolean   | If the fee is obligatory, depending on the includedPriceOption to know if it is paid at the time of booking or at the hotel. In case it is false, it could be a fee such as "cleaning" that the consumer could hire if he wanted. |
| @refundable 				    | 1          | Boolean   | This field will serve to know if the rate to be paid is returned, for example when it is a deposit type that is returned once the stay ends. |
| MealPlans/MealPlan/Options /Option/Fees/Fee/Price			    | 1          |          | Contains details of price. |
| @currency 				    | 1          | String   | Currency code. |
| @amount 				    | 1          | Decimal  | Fee Amount. |
| @binding				    | 1          | Boolean  | Identifies if is the price is binding (When true the sale price returned must not be less than the price informed. |
| @commission				    | 1          | Decimal  | Commission: -1 = not specified (indicated in contract with supplier), 0 = net price, X = % of the commission applied to the amount. |


### Detailed description

**AvailDestinations:**

AvailDestinations indicates what destinations will be requested to the supplier. 

Hotel codes or other destination codes must be defined using information specified in  [StaticConfigurationRS Description](/docs/hotel/DSF/StaticConfiguration).

*MaxNumberHotels*, *MaxNumberCities*, *MaxNumberZones* and *MaxNumberGeoCodes* indicates how client should group avail requests to supplier.

It's the client's resposability to do performance tests in order to determine what's the best strategy regarding group destinations in an Avail Request. This strategy may vary depending on execution time, response size or other client's expectations.


**BusinessRules:**

BusinessRules uses *optionsQuota*, go to [Common-Elements](/hotel/DSF/Common-Elements) for more
information.

This tag will only be used for suppliers availability responses
returning a very large number of options, about 20.000+ in same
response.

Currently, the client can configure the following BusinessRules:

* *CheaperAmount*:

  The cheapest options is returned without exceeding the
  *optionsQuota* limit.

* *RoomType*: 

  The options are filtered using a limited combination of
  rooms types. First, we group same room types so you receive
  options with the same type/classificatory (For example:
  Standard-Standard-Standard-Standard, Junior-Junior-Junior-Junior...). Then
  we combine the cheapest rooms with the remaining rooms, always
  checking for duplicates and without execeeding the *optionsQuota* limit.

  If the client sets BusinessRules value, then these will be applied
  when number of options returned exceeds *optionsQuota*. If the client
  does not set any BusinessRules values, then the *CheaperAmount*
  BusinessRule is applied by default.



**Price, binding price and commission:**

Every option has a price and every price indicates the currency,
amount, if it is binding and the commission.

-   *Binding:*

If binding is set as true, then the client can't sell the product for a
lower price then the one set by the supplier. If it set as as false, the
client can sell the product for a lower price.

-   *Commission:*

   > -   Commission = 0: the price returned is net.
   > -   Commission = -1: the supplier has not supplied the sale price
   >     nor the commission. This information is in the commercial contract with the supplier.
   > -   Commission is greater than 0: X = % of the commission applied to the amount

*Below are 4 possible scenarios:*

~~~xml
    <Price currency = "EUR" amount = "200" binding = "false" commission = "-1"/>
~~~
We have no way of knowing if the price is PVP or net, given that
the commission is not sent to us via XML. The commission is established
by contract.

~~~xml
    <Price currency = "EUR" amount = "300" binding = "true" commission = "-1"/>
~~~
The price is PVP, the commission is not sent to us via XML. The
commission is established by contract.

~~~xml
    <Price currency = "EUR" amount = "150" binding = "true/false" commission = "20"/>
~~~
The price is PVP with a commission of 20%. The binding in this case can
be true or false.

~~~xml
    <Price currency = "EUR" amount = "100" binding = "false" commission = "0"/>
~~~
The price is net.



**Currency:**

The currency node indicates which currency you want to use in your
request.

This field will be sent to the supplier provided that the the supplier
allows for it in this method, otherwise it won't be sent.

If the supplier allows for the field currency to be used, we can't
guarantee that the response will be returned in the currency you requested, as we
always work with the native code of the supplier. For example if you
requested EUR but the supplier only works with GBP, the supplier will
return in GBP, and we will pass it on to you in GBP.



**PAX ages:**

The range of what is considered an adult, infant or baby is particular
to each supplier.

We don't have a standardization of the paxs ages, we adapt to what the
suppliers determine. For one supplier a child age might range from 1 to 15
years old, for others, a 13 years old is considered an adult. We will
always use the supplier´s definition. If the suppliers requires it, we
will convert the age of a pax to a pax type (for example, convert a 30
year old pax to an adult ) or send directly the age of the pax. This
depends on the supplier's request.   


**Note:** *Once the age as been established for each pax then it must not be
modified in the remaining methods, like for example in valuation.*   



**Cancellation policies:**

The cancellation policies or penalties may be displayed in the
response, as long as the parameter <CancellationPolicies> is set as
true in the request and that the supplier provides this information in
the availability method.

**HoursBefore:** cancellation fees applicable *x* number of hours before the check in date.

**Type:** 
There are three values that can be inside types:

> -   *Noches:* Indicates the number of nights to be penalized.

> -   *Porcentaje:*Indicates the percentage to pay based on the option price.

> -   *Importe:* Indicates the exact amount  payable.


**On Request:**

The on request option may be displayed in the response provided that the
parameter <OnRequest> is set as true in the request. In case that the
parameter <OnRequest> is set as false, the integration will filter
this option in AvailRS only if the supplier provides us this information
in the availability method.



**PaymentOptions:**

-   **MerchantPay:** The payment is managed by the supplier.
-   **LaterPay:** The payment is managed by the hotel. The customer will
    use a credit-card as a guarantee for the hotel and the payment will
    be completed at check in.
-   **CardBookingPay:** The payment is managed by the supplier. The
    payment is effectuated at the time of booking.
-   **CardChekInPay:** The payment is managed by the supplier. The
    payment is effectuated at check in in the hotel.



**Rate conditions:**

-   The extra fee for a **nonRefundable** cancellation is a 100% from
    the moment the reservation is created.
-   The supplier can return options for pax: older than 55 years old,
    i.e. options that can only be sold to people who are 55 and older.
    In this case we will return the condition: rate 55 years old.
-   In the case of pax older than **60 years** and **65 years** the same
    process applies.
-   The rate **package** means that the product can't be sold separately
    from another product attached to it, such as a flight.
-   The rate **CanaryResident** is applicable to Canary Islands
    residents only.
-   The rate **BalearicResident** is applicable to Balearic Islands
    residents only.
-   The rate **largeFamily** is applied to large families and is
    determined by each supplier.Check *remarks* for more details.
-   The rate **honeymoon** is applied to those who just got married and
    is determined by each supplier. Check *remarks* for more details.
-   The rate **publicServant** is applicable to public servants only.
-   The rate **unemployed** is applied to those without work.

**Offers:**

Depending on the supplier, the information concerning offers can be displayed at a room level or in the option level in AvailRS.

**Status options:**

The possible values in status in response are OK or RQ:

~~~xml
    <Option type = "Hotel" paymentType = "MerchantPay" status = "OK">
~~~

In the case  the client doesn't want to display the options in a
status RQ, we can filter the options as long as the supplier specifies
the status and the <OnRequest> tag is set in AvailRQ. In
case the supplier doesn't specify the status, the element AllowOnRequest in [StaticConfigurationRS Description](/docs/hotel/DSF/StaticConfiguration) needs to be set as FALSE.





**POI cases Examples:**

Case 1:

~~~xml
    <POIs>
      <POI code = "8A" Description = "Andorra">
        <Services>
          <Service type = "SkiPass" code = "F1"
          description = "Forfait" durationType = "Range"
          quantity = "0" unit = "Day">
            <RangeDates startDate = "28/01/2014"
            endDate = "29/01/2014"/>
          </Service>
        </Services>
      </POI>
    </POIs>
~~~

Specifying the quantity is unnecessary as the start and end dates for the service have already been set.



Case 2:

~~~xml
    <POIs>
      <POI code = "8A" Description = "Andorra">
        <Services>
          <Service type = "SkiPass" code = "F1"
          description = "Forfait" durationType = "open"
          quantity = "5" unit = "Hour">
          </Service>
        </Services>
      </POI>
    </POIs>
~~~

In this case, quantity is applicable for the entire stay, i.e., the client
can enjoy the skipass for 5 hours any day of the stay.



Case 3:

~~~xml
    <POIs>
      <POI code = "8A" Description = "Andorra">
        <Services>
          <Service type = "SkiPass" code = "F1"
          description = "Forfait" durationType = "open"
          quantity = "2" unit = "Day">
          </Service>
        </Services>
      </POI>
    </POIs>
~~~

In this case, quantity is applicable for the entire stay, i.e., the client
can enjoy until 2 days of skipass in between the check in and check out.



**Note:** *Keep the parameters in the avail response to include them in the valuation request.*

~~~xml
    <Parameters>
       <Parameter key = "sesion" value = "888de014"/>
    </Parameters>
~~~

**Fees:**

If the supplier is returning fees, we need to know whether those have to be paid when the consumer gets to the hotel or beforehand. Keep in mind the type of payment for the option and that payment of the fees is MANDATORY:

* MerchantPay/CardBookingPay/CardChekInPay: if includedPriceOption = True the amount of the fee is already included in the price and is paid at the time of booking. If, however, includedPriceOption = False, said fee have to be paid in the hotel.

* LaterPay: In both cases if includedPriceOption = True/False,  the amount of the fee has to be paid in the hotel, as the type of payment is LaterPay. The difference is that if  includedPriceOption = False the client would have to sum the amount on their end. This is done if the supplier does not include it. This way, the client can show the fee on their web separated from the option price, and it’s now the client’s own decision how they should treat it.
