---
title: Reservation
keywords: hotel, data structure, reservation
search: Hotel - Data Structure - Reservation
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/Reservation
---



### Method Goals


This method aims to book an option.



### Request Format


The request format works the same way as *Valuation* but
with the list of passengers.



### Response Format


The result returns the booking locator (booking code), which could be the
supplier's own code or the one sent in request.



It also returns all the charges associated with the booking as well as its status.



### Remarks


**180000** milliseconds is the maximum amount of time permitted in our system before the connection
is closed. 



### ReservationRQ Example


~~~xml
    <ReservationRQ>
        <ClientLocator>2537459</ClientLocator>
        <OnRequest>false</OnRequest>
        <Parameters>
            <Parameter key = "extra" value = "31"/>
        </Parameters>
        <DeltaPrice amount="10" percent="5" applyBoth="false"/>
        <StartDate>28/01/2014</StartDate>
        <EndDate>29/01/2014</EndDate>
        <MealPlanCode>D</MealPlanCode>
        <HotelCode>10</HotelCode>
        <Nationality>ES</Nationality>
        <Price currency = "EUR" amount = "36.20" binding = "false" commission = "-1"/>
        <ResGuests> 
            <Guests>
                <Guest roomCandidateId = "1" paxId = "1">
                    <GivenName>Test11</GivenName>
                    <SurName>TestAp11</SurName>
                </Guest>
                <Guest roomCandidateId = "1" paxId = "2">
                    <GivenName>Test12</GivenName>
                    <SurName>TestAp12</SurName>
                </Guest>
            </Guests>
        </ResGuests>
        <PaymentType>MerchantPay</PaymentType>
        <Rooms>
            <Room id = "4582" roomCandidateRefId = "1" code = "506" description = "Double Standard.."/>
            <Preferences>
                <Preference type = "Smoker"/>
                <Preference type = "NonSmoker"/>
                <Preference type = "ExtraBed"/>
                <Preference type = "Cradle"/>
                <Preference type = "DoubleBed"/>
                <Preference type = "TwinBeds"/>
            </Preferences>
        </Rooms>
        <RoomCandidates>
            <RoomCandidate id = "1">
                <Paxes>
                    <Pax age = "30" id = "1"/>
                    <Pax age = "30" id = "2"/>
                </Paxes>
            </RoomCandidate>
        </RoomCandidates>
        <Remarks>I want it a double bed.</Remarks>
        <Preferences>
            <Preference type = "ContiguosRooms"/>
            <Preference type = "Wedding"/>
            <Preference type = "LateArrival">14:00</Preference>
            <Preference type = "LateCheckOut"/>
            <Preference type = "GroundFloor"/>
            <Preference type = "TopFlor"/>
            <Preference type = "WithoutVoucher"/>
        </Preferences>
    </ReservationRQ>
~~~


### ReservationRQ Description



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| ReservationRQ 				| 1      	|		| Root node.						|
| ClientLocator 				| 1  		| String	| Booking ID in client's system.					|
| OnRequest     				| 1  		| Boolean	| Indicates if you want to receive the onrequest options in AvailRS, as long as the supplier returns it in this method (see StaticConfiguration in order to verify if a supplier implements it).	|
| Parameters    				| 0..1    	|		| Parameters for additional information that have been reported in ValuationRS.	|
| Parameters/Parameter				| 1..n    	|		| List of parameters.					|
| @key     					| 1  		| String	| Contains the keyword/Id to identify a parameter.	|
| @value   					| 1  		| String	| Contains the value of the parameter.			|
| DeltaPrice    				| 0..1    	|		| Indicates price variation permitted by the client (see StaticConfiguration in order to verify if a supplier implements it).	|
| @amount  					| 0..1		| String	| Amount (in the currency returned into the option) that is accepted by the client to be higher than the valuation price. |
| @percent 					| 0..1		| String	| Percentage accepted by the client to be higher than the valuation price.	|
| @applyBoth					| 1  		| Boolean	| Indicates that the range between valuation price and the new price does not exceed the amount and/or porcentage indicated by the client.  |
| StartDate     				| 1  		| String 	| Start date to search rates.				|
| EndDate       				| 1  		| String	| End date to search rates.				|
| MealPlanCode  				| 1  		| String	| MealPlan code.					|
| HotelCode     				| 1  		| String	| Hotel code.						|
| Nationality   				| 1		| String	| Nationality of the Holder (use ISO3166_1_alfa_2 , see StaticConfiguration in order to verify if a supplier implements it).  |
| Price         				| 1      	|		| Total price of this valuation.			|
| @currency					| 1  		| String	| Currency code.					|
| @amount  					| 1  		| Decimal	| Option Amount.					|
| @binding 					| 1  		| Boolean	| Identifies if is the price is binding (When true the sale price returned **must** not be less than the price informed.  |
| @commission					| 1  		| Decimal	| Commission (-1 = not specified, 0 = net price, X = % of the commission applied to the amount.	|
| ResGuests     				| 1      	|		| 				|
| ResGuests/Guests				| 1      	|		| List of passengers.					|
| ResGuests/Guests/Guest			| 1..n    	|		| Detail of each passenger.				|
| @roomCandidateId				| 1  		| Integer	| Room candidate Identifier				|
| @paxId   					| 1  		| Integer	| Passenger id (starting at 1).				|
| ResGuests/Guests/Guest/GivenName		| 1 	 	| String	| Guest's given name.						|
| ResGuests/Guests/Guest/SurName		| 1   		| String	| Guest's last name.						|
| PaymentType   				| 1  		| String	| Indicates the type of payment.			|
| Rooms          				| 1      	|		| Rooms within this option (room list).			|
| Rooms/Room    				| 1..n    	|		| Detail of room. 					|
| @id      					| 1  		| String	| Room identifier.				|
| @roomCandidateRefId				| 1  		| Integer	| Room candidate identifier.				|
| @code    					| 1  		| String	| Room code.						|
| @description					| 1  		| String	| Room description.					|
| Rooms/Preferences    				| 0..1    	|		| Preference filters at room level. 					|
| Rooms/Preferences/Preference   				| 1..n    	|		| Each filter of preference and its values. 		|
| @type   				| 1    	|		| Type of preference allowed. See types allowed in ** PreferenceType:**  					|
| RoomCandidates/RoomCandidate			| 1..n    	|		| Room required.					|
| @id      					| 1  		| Integer	| Id of the requested room (starting at 1).		|
| RoomCandidates/RoomCandidate/Paxes/Pax	| 1..n    	|		| Pax required.						|
| @age     					| 1  		| Integer	| Passenger age. 					|
| @id      					| 1  		| Integer	| Passenger id (starting at 1). 			|
| Remarks       				| 0..1    	| 		| Any customer comments for the supplier to consider (see StaticConfiguration in order to verify if a supplier implements it).	|
| Preferences    				| 0..1    	|		| Preference filters at the option / general level. 					|
| Preferences/Preference   				| 1..n    	|		| Each filter of preference and its values. 		|
| @type   				| 1    	|		| Type of preference allowed. See types allowed in ** PreferenceType:**  					|
  



### ReservationRS Example


~~~xml
    <ReservationRS>
        <ProviderLocator>102</ProviderLocator>
        <PropertyReservationNumber>HCN8273</PropertyReservationNumber>
        <ResStatus>OK</ResStatus>
        <Price currency = "EUR" amount = "36.20" binding = "false" commission = "-1"/>
    </ReservationRS>
~~~


### ReservationRS Description



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| ReservationRS					| 1       	|		| Root node.						|
| ProviderLocator 				| 1  		| String	| Booking ID in the Supplier´s system					|
| PropertyReservationNumber 				| 0..1  		| String	| Booking Number in the property´s system (see Metadata method in order to verify if a supplier implements it).	|
| ResStatus					| 1  		| String	| reservation status  (OK = confirmed, RQ = on request, CN = cancelled, UN = unknown.	|
| Price  					| 0..1     	|		| Total price of this reservation (see StaticConfiguration in order to verify if a supplier implements it).				|
| @currency					| 1  		| String	| Currency code.					|
| @amount					| 1  		| Decimal	| Book Amount.						|
| @binding					| 1  		| Boolean	| Identifies if is the price is binding (when true the sale price returned **must** not be less than the price informed. |
| @commission					| 1  		| Decimal	| Commission (-1 = not specified, 0 = net price, X = % of the commission that applies to the amount.	|
| Remarks					| 0..1		| String	| Any remarks about this reservation			|
| BillingSupplierCode				| 0..1		| String	| Supplier's billing code. Will be returned if the supplier has different billing accounts and this is informed in the reservation (see StaticConfiguration in order to verify if a supplier implements it).	|
| Payable					| 0..1     	|		| Payable.						|
| @value					| 1       	|		| Informs Payable.					|
  



### Detailed description

**PreferenceType**: The types that allow, the possible values are:
    - Smoker
    - NonSmoker
    - ExtraBed
    - Cradle
    - DoubleBed
    - TwinBeds
    - ContiguosRooms
    - Wedding
    - LateArrival
    - LateCheckOut
    - EarlyCheckIn
    - GroundFloor
    - TopFlor
    - WithoutVoucher

**ResStatus:**

When making a reservation,  there will be a field named
ResStatus in the response indicating the status of the reservation. It
can have four values: OK, RQ, CN and UN.

-   *OK:* The reservation was completed with no problems.
-   *RQ:* The reservation was completed but the product is still not
    available, so the reservation goes into a waiting list (Request).
-   *CN:* The reservation was completed but due to a supplier error or a timeout
    the system will immediately cancel the reservation to prevent further possible errors.
-   *UN:* The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.
   It is the client's responsibility to check if the booking is OK.



**Note:** *Keep the parameters in the valuation response to include them in the reservation request.*



**MerchantPay, LaterPay, CardBookingPay & CardCheckInPay**

- PaymentOptions:

- *MerchantPay*: The payment is managed by the supplier.
- *LaterPay*: The payment is managed by the hotel. The customer will use a credit-card as a guarantee for the hotel and the payment
will be completed at check in.
- *CardBookingPay*: The payment is managed by the supplier. The payment is effectuated at the time of booking.
- *CardChekInPay*: The payment is managed by the supplier. The payment is effectuated at check in in the hotel. 


~~~xml
    <PaymentType>MerchantPay</PaymentType>
~~~

If the payment is done by credit card, is it mandatory to specify the payment type and the credit card information in the XML request as in the example below:

~~~xml
    <PaymentType>LaterPay/CardBookingPay/CardCheckInPay</PaymentType>
      <CardInfo>
       <CardCode>XX</CardCode>
       <Number>XXXXXXXXXX</Number>
       <Holder>XXXX</Holder>
       <ValidityDate>   
         <Month>XX</Month>
         <Year>XX</Year>
       </ValidityDate>
       <CVC>XXX</CVC>
     </CardInfo>    
~~~


### DeltaPrice description


**applyBoth:**

Depending on the value of applyBoth:

-   *applyBoth ="false"*: Indicates that one of the conditions (amount
    or percentage) has to meet the criteria before reservation.
-   *applyBoth ="true"*: Indicates that the new price cannot exceed
    the amount or percentage indicated by the client.

An error will be returned if the new price does not abide to *DeltaPrice*. If DeltaPrice tag is not sent and 
the integration implements it, we assume that the price
range is 0 and the process will continue (price is lower
or equal to the price showed in valuation).

This field is implemented if it's native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method. This information is available in the Static configuration of
each supplier.

### Price difference between the Reservation and Valuation methods

We cannot guarantee that the price will be returned in Reservation, given that this is something which depends on the supplier, and unless they provide us the price in their response, there is no way for us to return it to you.

If the price returned in Reservation method is different than the one returned in the Valuation method, 4 cases could occur. Below, we have explained each of these cases and what should be done if either of them occur:

**Case 1:**

The price in Reservation is lower than the price in Valuation. The selling price for the final customer will be the one in valuation, as this is the one that will be accepted by them at the time of booking. The final price that you should pay the supplier will be the price in Reservation.

**Case 2:**

The price in Reservation is higher than the price in valuation:

**Case 2.1:**

The supplier allows DeltaPrice and you allow a price change of, for example, up to €10, indicating it in through our DeltaPrice field (explained in the previous section):

Valuation: 
~~~xml 
<Price currency = "EUR" amount = "110" binding = "false" commission = "0"/>
~~~
Reservation: 
~~~xml 
<Price currency = "EUR" amount = "110" binding = "false" commission = "0"/>
~~~

When making reservation, you must pay the supplier €110, given that you have decided not to lose the booking even though the price has increased with €10 compared to Valuation.

**Case 2.2:**

The supplier allows DeltaPrice and you DO NOT allow price change. In this case we will return an error, as you do not permit a higher reservation price than the one already established in Valuation.

**Case 2.3:**

The supplier DOES NOT allow DeltaPrice. If the supplier returns a higher price in Reservation than he does in Valuation, then the difference should be reported, as you have not specified in any way that the price can be changed. In this case the supplier has to cover the price change.
