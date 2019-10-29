---
title: ReservationList
keywords: hotel, data structure, reservation
search: Hotel - Data Structure - ReservationList
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/ReservationList
---



### Method Goals


This method aims to return a list of bookings for a given time period
being that either booking date or the travelling date.



### Request Format


The request requires one of the following data depending on provider:

-   *DateType*: indicates the date type: either booking creation date or
    booking start date
-   *Start*: the date from
-   *End*: the date to



### Response Format


The result returns a list of bookings details, with the same format as
*ReservationReadRS*.



### Remarks


The maximum time, that is permitted in our system, before the connection
is closed, is of **240000** milliseconds.



### ReservationListRQ Example


~~~xml
    <ReservationListRQ>
        <DateType>E</DateType>
        <Start>01/01/2014</Start>
        <End>22/02/2014</End>
    </ReservationListRQ>
~~~


### ReservationListRQ Description


| **Element**		| **Number**	| **Type**	| **Description**					|
| --------------------- | ------------- | ------------- | ----------------------------------------------------- |
| ReservationListRQ	| 1             |		| Root node.						|
| DateType       	| 1      	| String 	| Type search (A = arrival date, B = booking creation). |
| Start          	| 1      	| String 	| Start date.						|
| End            	| 1      	| String 	| End date. 						|
| Currency       	| 1      	| String 	| Currency code.					|



### ReservationListRS Example


~~~xml
    <ReservationListRS>
        <Reservations>
            <Reservation>
                <auditData>
                    <timeStamp>2014-01-21T15:12:12.0558866+00:00</timeStamp>
                    <processTimeMilliseconds>0</processTimeMilliseconds>
                </auditData>
                <operationImplemented>true</operationImplemented>
                <Locators>
                    <Client>2196</Client>
                    <Provider>1AAAA966</Provider>
                    <Property>HCN8273</Property>
                </Locators>
                <Hotel>
                    <Name>LAS VEGAS (BENIDORM)</Name>
                    <Code>58475</Code>
                    <CreationDate>30/09/2013</CreationDate>
                    <StartDate>25/01/2014</StartDate>
                    <EndDate>16/02/2014</EndDate>
                    <Holder name = "AAAA" surname = "Test"/>
                    <Price currency = "EUR" amount = "658.94" binding = "false" commission = "-1"/>
                    <Rooms>
                        <Room id = "27441" roomCandidateRefId = "1" description = "Doble Standard"/>
                    </Rooms>
                    <CancelPenalties nonRefundable = "false">
                        <CancelPenalty>
                            <HoursBefore>72</HoursBefore>
                            <Penalty type = "Importe" paymentType = "pagoMinorista" currency = "EUR">29.95</Penalty>
                        </CancelPenalty>
                    </CancelPenalties>
                </Hotel>
                <TransactionStatus>
                    <ComunicationStatus>OK</ComunicationStatus>
                    <RSStatus>EXISTE</RSStatus>
                    <ResStatus>OK</ResStatus>
                </TransactionStatus>
            </Reservation>
            <Reservation>
                <auditData>
                    <timeStamp>2014-01-21T15:12:12.6657414+00:00</timeStamp>
                    <processTimeMilliseconds>0</processTimeMilliseconds>
                </auditData>
                <operationImplemented>true</operationImplemented>
                <Locators>
                    <Client>2578478</Client>
                    <Provider>10TTT31</Provider>
                </Locators>
                <Hotel>
                    <Name>LEO</Name>
                    <Code>10</Code>
                    <CreationDate>17/01/2014</CreationDate>
                    <StartDate>28/01/2014</StartDate>
                    <EndDate>29/01/2014</EndDate>
                    <Holder name = "Test11" surname = "TestAp11"/>
                    <Price currency = "EUR" amount = "36.20" binding = "false" commission = "-1"/>
                    <Rooms>
                        <Room id = "4582" roomCandidateRefId = "1" description = "Doble Standard.."/>
                    </Rooms>
                    <CancelPenalties nonRefundable = "false">
                        <CancelPenalty>
                            <HoursBefore>120</HoursBefore>
                            <Penalty type = "Importe" paymentType = "pagoMinorista" currency = "EUR">72.40</Penalty>
                        </CancelPenalty>
                    </CancelPenalties>
                </Hotel>
                <TransactionStatus>
                    <ComunicationStatus>OK</ComunicationStatus>
                    <RSStatus>EXISTE</RSStatus>
                    <ResStatus>OK</ResStatus>
                </TransactionStatus>
            </Reservation>
    ...
        </Reservations>
    </ReservationListRS>
~~~


### ReservationListRS Description


| **Element**					| **Number**	| **Type** | **Description**				|
| --------------------------------------------- | ------------- | -------- | ------------------------------------------ |
| ReservationListRS              		| 1             |	   | Root node.					|
| ReservationListRS/Reservations 		| 0..1          |	   | Reservations.				|
| ReservationListRS/Reservations/Reservation	| 1..n             |	   | Same structure as [ReservationReadRS](/legacy/docs/hotel/methods/reservationread/).	|


