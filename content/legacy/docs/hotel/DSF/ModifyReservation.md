---
title: ModifyReservation
keywords: hotel, data structure, modify reservation
search: Hotel - Data Structure - ModifyReservation
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/ModifyReservation
---



### Method Goals


This message confirms a booking change



### Request Format


The request requires the valuation returned for ModifyValuationRS



### Response Format


The XML returned contains a booking confirmation



### Remarks


The maximum time permitted in our system before the connection
is closed is **180000** milliseconds.



### ModifyReservationRQ Example


~~~xml
    <ModifyReservationRQ>
        <OnRequest>false</OnRequest>
        <Nationality>ES</Nationality>
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
                    </Room>
                </Rooms>
            </ModifyRoomsRemoveRooms>
        </Modifications>
        <ModifyPenalty currency = "EUR" amount = "0" binding = "false" commission = "-1"/>
        <HotelReservation>
           <Price currency = "EUR" amount = "86.20" binding = "false" commission = "-1"/>
        </HotelReservation>
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
        <Parameters>
            <Parameter key = "bd1" value = "43"/>
        </Parameters>
    </ModifyReservationRQ>
~~~


### ModifyReservationRQ Description



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| ModifyReservationRQ  			| 1      	|		| Root node.							|
| OnRequest            			| 1  		| Boolean	| Indicates if you want to receive the on request options in AvailRS, as long as the supplier returns it in this call (see StaticConfiguration).	|
| Nationality          			| 0..1		| String	| Nationality of the Holder (use ISO3166_1_alfa_2). This informations is mandatory depending on the supplier, as long as the supplier returns it in this call (see StaticConfiguration).		|
| Reservation          			| 1      	|		| Reservation data.						|
| Reservation/Locators 			| 1      	|		| Locators id (it is mandatory indicate one of two, or client or provider).	|
| Reservation/Locators/Client		| 0..1		| String	| Client locator.						|
| Reservation/Locators/Provider		| 0..1		| String	| Provider locator.						|
| Reservation/Currency 			| 1  		| String	| Currency code.						|
| Reservation/StartDate			| 1  		| String	| Start date of booking.					|
| Reservation/EndDate  			| 1  		| String	| End date of booking.						|
| Reservation/CreationDate		| 1  		| String	| Creation date of booking.					|
| Modifications        			| 1      	|		| Modifications.						|
| Modifications /ModifyStartDateAddDays	| 0..1    	|		| Add days of check-in.						|
| Modifications /ModifyStartDateAddDays/StartDate | 1  | String	| New check-in.							|
| Modifications /ModifyStartDateSubtractDays | 0..1    	|		| Substract days of check-in.					|
| Modifications /ModifyStartDateSubtractDays /StartDate | 1  | String	| New chekc-in.							|
| Modifications /ModifyEndDateAddDays 	| 0..1    	|		| Add days of check-out.					|
| Modifications /ModifyEndDateAddDays /EndDate | 1  	| String	| New check-out.						|
| Modifications /ModifyEndtDateSubtractDays | 0..1    	|		| Substract days of check-out.					|
| Modifications /ModifyEndtDateSubtractDays /EndDate | 1 | String	| New check-out.						|
| Modifications/ModifyHolder		| 0..1    	|		| Modify holder.						|
| Modifications/ModifyHolder /Holder	| 1      	|		| New holder.							|
| @name           			| 1  		| String	| Holder name.							|
| @surname        			| 1  		| String	| Holder surname.						|
| @nationality    			| 0..1		| String	| Nationality of the Holder (use ISO3166_1_alfa_2). This informations will be mandatory depending on the provider, as long as the provider returns it in this call (see StaticConfiguration).	|
| Modifications/ModifyRoomsAddRooms	| 0..1    	|		| Add Rooms structure.						|
| Modifications /ModifyRoomsAddRooms/Rooms | 1      	|		| Rooms Add.							|
| Modifications /ModifyRoomsAddRooms/Rooms /Room | 1..n |   		| Room Add.							|
| @code           			| 1  		| String	| Room code. 							|
| Modifications /ModifyRoomsAddRooms/Rooms /Room/PaxGuests | 1  |    	| List of passenger.						|
| Modifications /ModifyRoomsAddRooms/Rooms /Room/PaxGuests/PaxGuest | 1..n |   | Detail of each passenger.				|
| @age            			| 1  		| String	| Age pax.							|
| Modifications /ModifyRoomsAddRooms/Rooms /Room/PaxGuests/PaxGuest /GivenName | 1 | String | Given Name.				|
| Modifications /ModifyRoomsAddRooms/Rooms /Room/PaxGuests/PaxGuest /SurName | 1 | String | Surname.					|
| Modifications /ModifyRoomsRemoveRooms | 0..1    	|		| Remove Rooms structure.					|
| Modifications /ModifyRoomsRemoveRooms/Rooms | 1     	|		|  Rooms Remove.						|
| Modifications /ModifyRoomsRemoveRooms/Rooms /Room | 1..n |   		| Room Remove.							|
| @code           			| 1 	 	| String	| Room code.							|
| Modifications /ModifyRoomsRemoveRooms/Rooms /Room/Price | 1 |     	| Price Room.							|
| @currency       			| 1  		| String	| Currency code.						|
| @amount         			| 1  		| Decimal	| Room Amount.							|
| @binding        			| 1  		| Boolean	| Identifies if is the price is binding ( When true the sale price returned **must** not be less than the price informed. |
| @commission     			| 1  		| Decimal	| Commission ( -1 = not specified (will come indicated with the provider contract ), 0 = net price, X = % of the commission that applies to the amount).	|
| ModifyPenalty        			| 1      	|		| Price of penalty modification (element returned in ModifyValuationRS). 	|
| @currency       			| 1  		| String	| Currency code.						|
| @amount         			| 1  		| Decimal	| Penalty Amount.						|
| @binding        			| 1  		| Boolean	| Identifies if is the price is binding ( When true the sale price returned **must** not be less than the price informed. |
| @commission     			| 1  		| Decimal	| Commission ( -1 = not specified (will come indicated with the provider contract ), 0 = net price, X = % of the commission that applies to the amount).	|
| HotelReservation      		| 1      	|		| HotelReservation (element returned in ModifyValuationRS).	|
| HotelReservation/Price		| 1      	|		| New total reservation price.					|
| @currency       			| 1  		| String	| Currency code.						|
| @amount         			| 1  		| Decimal	| Reservation Amount.						|
| @binding        			| 1  		| Boolean	| Identifies if is the price is binding ( When true the sale price returned **must** not be less than the price informed. |
| @commission     			| 1  		| Decimal	| Commission ( -1 = not specified (will come indicated with the provider contract ), 0 = net price, X = % of the commission that applies to the amount).	|
| PaymentType          			| 0..1    	|		| Information of the credit card.    				|
| PaymentType/CardInfo 			| 1      	|		| Information of the credit card.				|
| PaymentType/CardCode 			| 1      	|		| Indicates the card type.					|
| PaymentType/Number   			| 1  		| Decimal	| Number of the credit card.					|
| PaymentType/Holder   			| 1  		| String	| Holder of the credit card.					|
| PaymentType/ValidityDate		| 1      	|		| Expiry date.						|
| PaymentType/ValidityDate/Month	| 1  		| Decimal	| Month of the expiry date.					|
| PaymentType/ValidityDate/Year		| 1  		| Decimal	| Year of the expiry date.					|
| PaymentType/CVC      			| 1  		| Decimal	| CVC of the credit card.					|
| Parameters           			| 0..1    	|		| Parameters for additional information (element returned in ModifyValuationRS).	|
| Parameters/Parameter 			| 1..n    	|		| List of parameter.    					|
| @key            			| 1  		| String	| Contains the keyword/Id to identify a parameter.		|
| @value          			| 1  		| String	| Contains the value of the parameter.				|
                            



### ModifyReservationRS Example


~~~xml
    <ModifyReservationRS>
        <ProviderLocator>XXXXXX</ProviderLocator>
        <Price currency = "EUR" amount = "86.20" binding = "false" commission = "-1"/>
        <ResStatus>OK</ResStatus>
        <Remarks>The option has the following features: One Bed, Suite</Remarks>
        <BillingSupplierCode>Proveedor facturacion Externa</BillingSupplierCode>
        <Payable>Payment is guaranteed by: DESTINATIONS OF THE WORLD - DMCC as per final booking form reference  HTL-AE2-80989482</Payable>
    </ModifyReservationRS>
~~~


### ModifyReservationRS Description



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| ModifyValuationRS			| 1       	|		| Root node.							|
| ProviderLocator			| 1  		| String	| Provider locator.						|
| ResStatus				| 1  		| String	| Status of book (OK = confirmed, RQ = on request, CN = cancelled, UN = unknown ).	|
| Price  				| 0..1     	|		| Total price of this book.     				|
| @currency				| 1  		| String	| Currency code.						|
| @amount				| 1  		| Decimal	| Book Amount.							|
| @binding				| 1  		| Boolean	| Identifies if is the price is binding ( When true the sale price returned **must** not be less than the price informed. |
| @commission				| 1  		| Decimal	| Commission ( -1 = not specified (will come indicated with the provider contract ), 0 = net price, X = % of the commission that applies to the amount).	|
| Remarks				| 0..1		| String	| Remarks.							|
| BillingSupplierCode			| 0..1		| String	| Indicates which typo of billing.				|
| Payable				| 0..1		| String	| Indicates which type of payment.				|

