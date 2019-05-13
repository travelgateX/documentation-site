---
title: Valuation
keywords: hotel, data structure, valuation
search: Hotel - Data Structure - Valuation
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/Valuation
---



### Method Goals


This method aims to return the total price and cancellation policies of the *Option*
selected  in the previous step (*Avail*).



### Request Format


The *Valuation* request format is similar to that of availabilityRQ. It's here you will add  data to the *option* selected.



### Response Format


The returned XML contains the total price and list of cancellation policies. 



### Remarks


Our system allows for a maximum of **180000** milliseconds before the connection is closed.



### ValuationRQ Example


~~~xml
<ValuationRQ>
   <StartDate>04/07/2016</StartDate>
   <EndDate>11/07/2016</EndDate>
   <MealPlanCode>15</MealPlanCode>
   <HotelCode>6259</HotelCode>
   <PaymentType>MerchantPay</PaymentType>
   <OptionType>Hotel</OptionType>
   <OnRequest>false</OnRequest>
   <BlockOption>false</BlockOption>
   <Nationality>ES</Nationality>
   <Parameters>
       <Parameter key = "ID1" value = "ID#1#VR"/>
       <Parameter key = "ID2" value = "ID#2#FGR#45187#10-5"/>
       <Parameter key = "PSR" value = "511.28"/>
   </Parameters>
   <Rooms>
       <Room id = "ITD10" roomCandidateRefId = "1" code = "TW" description = "Twinn"/>
       <Room id = "IOG22" roomCandidateRefId = "2" code = "IND" description = "Individual"/>
   </Rooms>
   <RoomCandidates>
       <RoomCandidate id = "1">
           <Paxes>
               <Pax age = "30" id = "1"/>
               <Pax age = "30" id = "2"/>
           </Paxes>
       </RoomCandidate>
       <RoomCandidate id = "2">
           <Paxes>
               <Pax age = "30" id = "1"/>
           </Paxes>
       </RoomCandidate>
   </RoomCandidates>
</ValuationRQ>
~~~


### ValuationRQ Description


| **Element**                            | **Number** | **Type** | **Description** |
| -------------------------------------- | ---------- | -------- | --------------- |
| ValuationRQ                            | 1          |          | Root node.      |
| StartDate                              | 1          | String   | Start date of rate search. |
| EndDate                                | 1          | String   | End date of rates search. |
| OnRequest                              | 1          | Boolean  | Indicates if you want to receive the on request options in AvailRS, as long as the supplier returns it in this method (see StaticConfiguration). |
| BlockOption                            | 1          | Boolean  | Indicates if you want to block the option selected in AvailRS, as long as the supplier allows it in this method (see StaticConfiguration). |
| MealPlanCode                           | 1          | String   | MealPlan code.  |
| HotelCode                              | 1          | String   | Hotel code.     |
| PaymentType                            | 1          | String   | Indicates payment type. |
| OptionType                             | 1          | String   | Indicates option types. |
| Nationality                            | 1       | String   | Guest nationality (use ISO3166_1_alfa_2). |
| Rooms                                  | 1          |          | Rooms in this option (room list). |
| Rooms/Room                             | 1..n       |          | Room Details. |
| @id                                    | 1          | String   | Room Identifier. |
| @roomCandidateRefId                    | 1          | Integer  | Room candidate Identifier. |
| @code                                  | 1          | String   | Room code.      |
| @description                           | 1          | String   | Room description. |
| RoomCandidates/RoomCandidate           | 1..n       |          | Room required.  |
| @id                                    | 1          | Integer  | Id of requested room (starting at 1). |
| RoomCandidates/RoomCandidate/Paxes/Pax | 1..n       |          | Pax required.   |
| @age                                   | 1          | Integer  | Passenger age. |
| @id                                    | 1          | Integer  | Passenger id (starting at 1). |
| Parameters                             | 0..1       |          | Additional parameters reported in AvailRS. |
| Parameters/Parameter                   | 0..n       |          | Additional parameter requiring integration. |
| @key                                   | 1          | String   | Contains keyword/Id to identify a parameter. |
| @value                                 | 1          | String   | Contains parameter value. |



### ValuationRS Example


~~~xml
    <ValuationRS>
        <Parameters>
            <Parameter key = "bd1" value = "43"/>
        </Parameters>
        <Status>OK</Status>
        <Price currency = "EUR" amount = "36.20" binding = "false" commission = "-1"/>
        <CancelPenalties nonRefundable = "false">
            <CancelPenalty>
                <HoursBefore>48</HoursBefore>
                <Penalty type = "Importe"  paymentType = "MerchantPay" currency = "EUR">72.40</Penalty>
            </CancelPenalty>
        </CancelPenalties>
        <Fees>
            <Fee includedPriceOption = "true" description = "TaxAndServiceFee">
                <Price currency = "EUR" amount = "8.11" binding = "false" commission = "-1"/>
            </Fee>
        </Fees>
        <Remarks/>
        <PaymentOptions cash="false" bankAcct="false">
            <Cards>
                <Card code="VI"/>
                <Card code="AX"/>
                <Card code="CA"/>  
            </Cards> 
        <PaymentOptions/>       
       <CancelPoliciesDescription/>
    </ValuationRS>
~~~


### ValuationRS Description


| **Element**                               | **Number** | **Type** | **Description** |
| ----------------------------------------- | ---------- | -------- | --------------- |
| ValuationRS                               | 1          |          | Root node.      |
| Parameters                                | 0..1       |          | Parameters for additional information. |
| Parameters/Parameter                      | 1..n       |          | List of parameters. |
| @key                                      | 1          | String   | Contains the keyword/Id to identify a parameter. |
| @value                                    | 1          | String   | Contains parameter value. |
| Status                                    | 1          |          | Status option (OK = available, RQ = on request). |
| Price                                     | 1          |          | Total price of this valuation. |
| @currency				    | 1          | String   | Currency code. |
| @amount                                   | 1          | Decimal  | Option Amount. |
| @binding                                  | 1          | Boolean  | Identifies if the price is binding (When true the sale price returned must not be less than the price informed). |
| @commission                               | 1          | Decimal  | Commission: -1 = not specified (indicated in contract with the supplier), 0 = net price, X = % of the commission applied to the amount. |
| CancelPenalties                           | 1          |          | Cancellation policy details. |
| @nonRefundable                            | 1          | Boolean  | Indicate if this option is nonRefundable (true or false). |
| CancelPenalties/CancelPenalty             | 0..n       |          | Listing cancellation penalties. |
| CancelPenalties/CancelPenalty/HoursBefore | 1          | String   | Number of hours prior to checkin date in which this Cancellation policy applies . |
| CancelPenalties/CancelPenalty/Penalty     | 1          |          | Contains the value to apply. |
| @type					    | 1          | String   | Type of possible penalty values: “Noches” (nights) , “Porcentaje” (percentage) ,”Importe” (price value). |
| @currency				    | 1          | String   | Currency code. |
| @paymentType                            | 1          | String   | Indicates payment type of penalty. |
| Remarks 				    | 0..1       | String   | Remarks (see StaticConfiguration in order to verify if a supplier implements it).       |
| PaymentOptions			    | 0..1       | String   | Payment Types allowed by the supplier. This tag  is mandatory only if payment type is different than MerchantPay. |
| PaymentOptions/Cards			    | 1		 | 	    | List of cards allowed. |
| PaymentOptions/Cards/Card		    | 1..n       |          | Details of card. |
| @code   				    | 1          | String   | Code card. See in CardInfo the possible values, provided in Detailed Description (VI,AX,BV,CA...) |
| Fees					    | 0..1       | 	    | Contains a list of fees. |
| Fees/Fee				    | 1..n       |          | Contains details of the fee. |
| @includedPriceOption			    | 1		 | Boolean  | Indicates if the fee is included or not in the final price (value indicated in the node Price in ValuationRS). |
| @description				    | 1          | String   | Remarks regarding fee. |
| Fees/Fee/Price			    | 1          |          | Contains details of price. |
| @currency 				    | 1          | String   | Currency code. |
| @amount 				    | 1          | Decimal  | Fee Amount. |
| @binding				    | 1          | Boolean  | Identifies if is the price is binding (When true the sale price returned must not be less than the price informed. |
| @commission				    | 1          | Decimal  | Commission: -1 = not specified (indicated in contract with supplier), 0 = net price, X = % of the commission applied to the amount. |
| CancelPoliciesDescription                 | 0..1       | String   | Contains the cancellation penalties in free text (see StaticConfiguration in order to verify if a supplier implements it). |
 


### Detailed Description


**Suppliers with block allotment **

There are some suppliers who use block allotments, sometimes called pre-confirmation or quote.
In that case, you will have 30 minutes to complete the booking, if  not, you will have to re-launch Valuation 30 minutes after the last request, normally just before booking request.



**Status:**

The valuation response depends if the parameter <OnRequest> is set: if it is set as false, the integration will filter this option.  If the supplier provides us a new status in ValuationRS, then we return an error because the supplier changed the status option.



**CardInfo:**

| **Codes** | **Names**
| --------- | ------------------------- |
| VI        | Visa			|
| AX        | American Express		|
| BC        | BC Card			|
| CA        | MasterCard		|
| CB        | Carte Blanche		|
| CU        | China Union Pay		|
| DS        | Discover			|
| DC        | Diners Club		|
| T         | Carta Si			|
| R         | Carte Bleue		|
| N         | Dankort			|
| L         | Delta			|
| E         | Electron			|
| JC        | Japan Credit Bureau	|
| TO        | Maestro			|
| S         | Switch			|
| EC        | Electronic Cash		|
| EU        | EuroCard			|
| TP        | Universal air travel card |
| OP        | Optima			|
| ER        | Air Canada/RnRoute	|
| XS        | Access			|
| O         | Others			|



**CancelPenalty:**

Booking cancellation penalties are affected by the following elements:

-   **HoursBefore:** cancellation fees applicable x number of hours before the check in date

-   **Type:** There are three values that can be inside types:

> -   *Noches:* indicates the number of nights to be penalized.

> -   *Porcentaje:* indicates the percentage to pay based on the option price.

> -   *Importe:* indicates the exact amount payable

-   **Currency:** currency of the penalty fee.

**Final buying price:** 

If the price in the reservation is lower, we recommend taking into account the price in valuation, given that it is the price which the end customer will see. The price in reservation should always be kept in mind, especially in case it is higher than the one in valuation.

**Note:** 

*Keep the parameters in the avail response to include them in the valuation request.*

*Keep the parameters in the valuation response to include them in the reservation request.*


