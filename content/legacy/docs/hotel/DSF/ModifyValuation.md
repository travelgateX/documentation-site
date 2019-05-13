---
title: ModifyValuation
keywords: hotel, data structure, modify valuation
search: Hotel - Data Structure - ModifyValuation
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/ModifyValuation
---



### Method Goals


This message lets you know if it is possible to modify a booking and the proposed new price.



### Request Format


The request requires the reservation details and the changes you want to make.
(As always, please check if the supplier allows for changes in the booking and what these changes are - you can find this info in the *StaticConfiguration*).



### Response Format


The XML returned contains a simulation of the new booking.



### Remarks


The maximum time permitted in our system before the connection
is closed is **180000** milliseconds.



### ModifyValuationRQ Example


~~~xml
    <ModifyValuationRQ>
        <OnRequest>false</OnRequest>
        <Nationality>ES</Nationality>
        <BlockOption>true</BlockOption>
        <Reservation>
            <Locators>
                <Client>5356342</Client>
                <Provider>MGNZ12345</Provider>
            </Locators>
            <Currency>EUR</Currency>
            <StartDate>28/01/2014</StartDate>
            <EndDate>29/01/2014</EndDate>
            <CreationDate>17/01/2014</CreationDate>
        </Reservation>
        <Modifications>
            <ModifyMealPlan></ModifyMealPlan>
            <ModifyStartDateAddDays>
                <StartDate>29/01/2014</StartDate>
            </ModifyStartDateAddDays>
            <ModifyEndDateAddDays>
                <EndDate>30/01/2014</EndDate>
            </ModifyEndDateAddDays>
             <ModifyHolder>
                <Holder name = "Test11Modify" surname = "TestSur11Modify"/>
            </ModifyHolder>
            <ModifyRoomsAddRooms>
                <Rooms>
                    <Room code = "506">
                        <PaxGuests>
                            <PaxGuest age = "30">
                                <GivenName>name1</GivenName>
                                <SurName>surname1</SurName>
                            </PaxGuest>
                            <PaxGuest age = "30">
                                <GivenName>name2</GivenName>
                                <SurName>surname2</SurName>
                            </PaxGuest>
                        </PaxGuests>
                    </Room>
                </Rooms>
            </ModifyRoomsAddRooms>
            <ModifyRoomsRemoveRooms>
                <Rooms>
                    <Room code = "500">
                        <Price currency = "EUR" amount = "36.20" binding = "false" commission = "-1"/>
                        <PaxGuests>
                            <PaxGuest age = "30">
                                <GivenName>name1</GivenName>
                                <SurName>surname1</SurName>
                            </PaxGuest>
                            <PaxGuest age = "30">
                                <GivenName>name2</GivenName>
                                <SurName>surname2</SurName>
                            </PaxGuest>
                        </PaxGuests>                        
                    </Room>
                </Rooms>
            </ModifyRoomsRemoveRooms>
        </Modifications>
    </ModifyValuationRQ>
~~~


### ModifyValuationRQ Description



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| ModifyValuationRQ     			| 1      	|		| Root node.						|
| OnRequest             			| 1  		| Boolean	| Indicates if you want to receive the on request options in AvailRS, as long as the supplier returns it in this call (see StaticConfiguration).	|
| Nationality           			| 0..1		| String	| Nationality of the Holder (use ISO3166_1_alfa_2). This informations will be mandatory depending on the supplier, as long as the supplier returns it in this call (see StaticConfiguration).  |
| BlockOption           			| 1  		| Boolean	| Indicates if you want to block the option selected in AvailRS, as long as the supplier allows it in this call (see StaticConfiguration).	|
| Reservation           			| 1      	|		| Reservation data.					|
| Reservation/Locators  			| 1      	|		| Locators info (it is mandatory to indicate either the client's or supplier's).	|
| Reservation/Locators/Client			| 0..1		| String	| Client locator.					|
| Reservation/Locators/Provides			| 0..1		| String	| Supplier locator.					|
| Reservation/Currency  			| 1  		| String	| Currency code.					|
| Reservation/StartDate 			| 1  		| String	| Start date of booking.				|
| Reservation/EndDate   			| 1  		| String	| End date of booking.					|
| Reservation/CreationDate			| 1  		| String	| Date the booking was created.				|
| Modifications         			| 1      	|		| Modifications.					|
| Modifications/ModifyStartDateAddDays		| 0..1    	|		|Move the check-in date forward.					|
| Modifications/ModifyStartDateAddDays /StartDate | 1  		| String	| New check-in date.						|
| Modifications/ModifyStartDateSubtractDays	| 0..1    	|		| Move the check-in date back.				|
| Modifications/ModifyStartDateSubtractDays /StartDate | 1  	| String	| New check-in date.						|
| Modifications/ModifyEndDateAddDays 		| 0..1    	|		| Move the check-out date back.				|
| Modifications/ModifyEndDateAddDays /EndDate	| 1  		| String	| New check-out date.					|
| Modifications/ModifyEndtDateSubtractDays	| 0..1    	|		| Move the check-out date forward.				|
| Modifications/ModifyEndtDateSubtractDays /EndDate | 1  	| String	| New check-out date.					|
| Modifications/ModifyHolder			| 0..1    	|		| Modify holder of booking.					|
| Modifications/ModifyHolder/Holder		| 1     	|		| New holder.						|
| @name            				| 1  		| String	| Holder's name.						|
| @surname         				| 1  		| String	| Holder's surname.					|
| Modifications/ModifyRoomsAddRooms		| 0..1    	|		| Add Rooms.					|
| Modifications/ModifyRoomsAddRooms/Rooms	| 1      	|		| Add another Room to booking.						|
| Modifications/ModifyRoomsAddRooms/Rooms /Room	| 1..n    	|		| Details of new room.						|
| @code            				| 1  		| String	| Room code.						|
| Modifications/ModifyRoomsAddRooms /Rooms/Room/PaxGuests | 1   |   		| List of passenger.					|
| Modifications/ModifyRoomsAddRooms /Rooms/Room/PaxGuests/PaxGuest | 1..n |   	| Detail of each passenger.				|
| @age             				| 1  		| String	| Age pax.						|
| Modifications/ModifyRoomsAddRooms /Rooms/Room/PaxGuests/PaxGuest /GivenName | 1 | String | Given Name.				| 
| Modifications/ModifyRoomsAddRooms /Rooms/Room/PaxGuests/PaxGuest /SurName | 1 | String | Surname.					|
| Modifications/ModifyRoomsRemoveRooms		| 0..1    	|		| Cancel rooms.				|
| Modifications/ModifyRoomsRemoveRooms/Rooms	| 1      	|		| List of rooms to be cancelled .						|
| Modifications/ModifyRoomsRemoveRooms /Rooms/Room | 1..n    	|		| Details of the room to be cancelled.						|
| @code            				| 1  		| String	| Room code.						|
| Modifications/ModifyRoomsRemoveRooms /Rooms/Room/Price | 1    |  		| Room Price .						|
| @currency        				| 1  		| String	| Currency code.					|
| @amount          				| 1  		| Decimal	| Room Cost.						|
| @binding         				| 1  		| Boolean	| Identifies if the price is binding (When true, the sale price returned must not be less than the price informed.  |
| @commission      				| 1  		| Decimal	| Commission: -1 = not specified (information available in contract with the supplier ), 0 = net price, X = % of the commission applied to the amount.	|
| Modifications/ModifyRoomsRemoveRooms /Rooms/Room/PaxGuests | 1 |     		| List of passenger.					|
| Modifications/ModifyRoomsRemoveRooms /Rooms/Room/PaxGuests/PaxGuest | 1..n |  | Detail of each passenger.				|
| @age             				| 1  		| String	| Age pax.						|
| Modifications/ModifyRoomsRemoveRooms /Rooms/Room/PaxGuests/PaxGuest /GivenName | 1 | String | Given Name.				|
| Modifications/ModifyRoomsRemoveRooms /Rooms/Room/PaxGuests/PaxGuest /SurName | 1 | String | Surname.					|
                         




### ModifyValuationRS Example


~~~xml
    <ModifyValuationRS>
        <Status>OK</Status>
        <ModifyPenalty currency = "EUR" amount = "0" binding = "false" commission = "-1"/>
        <HotelReservation>
            <Remarks>The option has the following features: One Bed, Suite</Remarks>
            <PaymentOptions cash = "false" bankAcct = "false">
                <Cards>
                    <Card code = "VI"/>
                    <Card code = "AX"/>
                    <Card code = "CB"/>
                    <Card code = "DS"/>
                    <Card code = "JC"/>
                    <Card code = "CA"/>
                </Cards>
            </PaymentOptions>
            <Price currency = "EUR" amount = "86.20" binding = "false" commission = "-1"/>
        </HotelReservation>
        <Parameters>
            <Parameter key = "bd1" value = "43"/>
        </Parameters>
    </ModifyValuationRS>
~~~


### ModifyValuationRS Description



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| ModifyValuationRS			| 1       	|		| Root node.							|
| Status   				| 1       	|		| Status option (OK = available, RQ = on request).		|
| ModifyPenalty				| 1       	|		| Booking change fee  .				|
| @currency				| 1 	 	| String	| Currency code.						|
| @amount				| 1  		| Decimal	| Fee amount.						|
| @binding				| 1  		| Boolean	| Identifies if the price is binding (When true, the sale price returned must not be less than the price informed. |
| @commission				| 1  		| Decimal	| Commission: -1 = not specified (information available in contract with the supplier ), 0 = net price, X = % of the commission applied to the amount.	|
| HotelReservation			| 1       	|		| HotelReservation.						|
| HotelReservation/Remarks		| 0..1		| String	| Remarks.							|
| HotelReservation/PaymentOptions	| 0..1     	|		| New total reservation price.					|
| @cash					| 1       	| 		| Boolean that indicates if it is cash or not.			|
| @bankAcct				| 1       	| 		| Boolean that indicates if there is a bank account.		|
| HotelReservation/PaymentOptions /Cards | 0..1     	|		| List of credit cards.						|
| HotelReservation/PaymentOptions /Cards/Card | 1..n   	|		| Credit card.							|
| @Card code 				| 1       	|		| Indicates the credit card.					|
| HotelReservation/Price		| 1       	|		| New total reservation price.					|
| @currency				| 1  		| String	| Currency code.						|
| @amount				| 1   		| Decimal	| Reservation Amount.						|
| @binding				| 1  		| Boolean	| Identifies if is the price is binding ( When true the sale price returned **must** not be less than the price informed. |
| @commission				| 1  		| Decimal	| Commission ( -1 = not specified (will come indicated with the provider contract ), 0 = net price, X = % of the commission that applies to the amount).	|
| CancelPenalties			| 0..1     	|		| New cancellation policies after booking changes.  |
| @nonRefundable			| 1  		| Boolean	| Indicate if this option is nonRefundable (true or false).	|
| CancelPenalties/CancelPenalty		| 0..n     	|		| Listing of cancellation penalties.				|
| CancelPenalties/CancelPenalty /HoursBefore | 1  	| String	| Number of hours prior to arrival day in which this Cancellation policy applies.	|
| CancelPenalties/CancelPenalty /Penalty | 1       	|		| Contains the value to apply.					|
| @type					| 1  		| String	| Type of penalty Possible values: "Noches" (nights) , "Porcentaje" (percentage) ,"Importe" (price value).  |
| @currency				| 1  		| String	| Currency code.						|
| Parameters				| 0..1     	|		| Parameters for additional information.			|
| Parameters/Parameter			| 1..n     	|		| List of parameter.						|
| @key					| 1  		| String	| Contains the keyword/Id to identify a parameter.		|
| @value				| 1  		| String	| Contains the value of the parameter.				|

