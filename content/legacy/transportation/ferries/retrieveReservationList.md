---
title: RetrieveReservationList
keywords: transportation, data structure, ferries, retrieve reservation list
search: Transportation - Ferries - Data Structure - RetrieveReservationList
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/ferries/retrieveReservationList
---



### Method Goals


This method aims to return a list of bookings for a given time period
being that either booking date or the travelling date.



### Request Format


The request requires a date (of reservation or departure) and all the
bookings that match this date will be returned.



### Response Format


The response contains a list of bookings that match the requested date.

### RetrieveReservationListRQ Example


~~~xml
    <RetrieveReservationListRQ>
        <Configuration/>
        <ClientConfiguration currencyCode = "EUR"/>
        <ReservationDate>2014-03-04T00:00:00</ReservationDate>
        <DepartureDate>2010-09-09T00:00:00</DepartureDate>
        <ClientEmail>client@clientmail.com</ClientEmail>
        <OriginCode></OriginCode>
        <DestinationCode></DestinationCode>
        <AgencyCode></AgencyCode>
    </RetrieveReservationListRQ>
~~~


### RetrieveReservationListRQ Description



| **Element**				| **Number**	| **Type**	| **Description**					|
| ------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| RetrieveReservationListRQ     	| 1    		|		| Root node.						|
| ReservationDate               	| 1 		| String	| Reservation date.					|
| DepartureDate                 	| 1 		| String	| Departure date.					|
| ClientEmail                   	| 1  		| String	| Client's email.					|
| OriginCode                    	| 1 		| String	| Origin code.						|
| DestinationCode               	| 1 		| String	| Destination code.					|
| AgencyCode                    	| 1 		| String	| Contains a list of Passengers.			|




### RetrieveReservationListRS Example


~~~xml
    <RetrieveReservationListRS xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
    <ResponseStatus tripType = "IDA" petitionType = "OW" status = "ok"/>
    <ReservationList>
        <PaymentInfo locator = "V65CQC" totalAmount = "0">
            <OriginCode>PAL</OriginCode>
            <DestinationCode>BAR</DestinationCode>
            <ReservationDate>0001-01-01T00:00:00</ReservationDate>
            <DepartureDate>2014-03-25T20:30:00</DepartureDate>
            <MainPaxName/>
            <HolderName>TESTNAME1</HolderName>
            <ProviderReservationStatus/>
            <ReservationStatus>
                <ReservationStatusType>CONFIRMED</ReservationStatusType>
            </ReservationStatus>
        </PaymentInfo>
        <PaymentInfo locator = "M3LIUI" totalAmount = "0">
            <OriginCode>PAL</OriginCode>
            <DestinationCode>VAL</DestinationCode>
            <ReservationDate>0001-01-01T00:00:00</ReservationDate>
            <DepartureDate>2014-05-12T16:10:00</DepartureDate>
            <MainPaxName/>
            <HolderName>TESTNAME2</HolderName>
            <ProviderReservationStatus/>
            <ReservationStatus>
                <ReservationStatusType>CONFIRMED</ReservationStatusType>
            </ReservationStatus>
        </PaymentInfo>
    </ReservationList>
    </RetrieveReservationListRS>
~~~


### RetrieveReservationListRS Description



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| RetrieveReservationListRS     	| 1    		|		| Root node.							|
| ReservationList               	| 1    		|		| Contains a list of Reservations.				|
| ReservationList/PaymentInfo   	| 1..n   	|		| Contains the information of the payment.			|
| @locator                 		| 1 		| String	| Unique identifier of the locator.				|
| @totalAmount             		| 1 		| Decimal	| Total amount. with taxes and other charges included.		|
| @currency                		| 1 		| String	| Currency code of the fare.					|
| ReservationList/PaymentInfo /OriginCode | 1 		| String	| Trip origin location code.					|
| ReservationList/PaymentInfo /DestinationCode | 1 	| String	| Trip destination location code.				|
| ReservationList/PaymentInfo /ReservationDate | 1 	| Date		| Date on which the reservation was made.			|
| ReservationList/PaymentInfo /DepartureDate | 1 	| Date		| Departure date.						|
| ReservationList/PaymentInfo /MainPaxName | 1 		| String	| Name and surname of the main passenger of the reservation.	|
| ReservationList/PaymentInfo /HolderName | 1 		| String	| Name of the holder of the reservation.			|
| ReservationList/PaymentInfo /ReservationStatus | 1    |		| Current status of the reservation.				|
| ReservationList/PaymentInfo /ReservationStatus/ReservationStatusType | 1 | String | Reservation status: CONFIRMED (OK), CANCELLED (Change of programming).	|



