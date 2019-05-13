---
title: Cancel Booking
keywords: transfers, data structure, cancel booking, cancellation
search: Car - Data Structure - Cancel Booking
sidebar: mydoc_sidebar
permalink: /docs/car/DSF/cancel
---



### Method Goals


This method aims to cancel a booking



### Remarks


Not implemented by all suppliers



### OTA VehCancelRQ Example



~~~xml
    <OTA_VehCancelRQ>
        <POS>
            <Source ISOCountry = "ESP">
                <RequestorID Type = "LAN" ID = "es"/>
            </Source>
        </POS>
        <VehCancelRQCore>
            <UniqueID ID = "XXXX" Type = "4"/>
            <PersonName>
                <GivenName>TEST</GivenName>
                <Surname>TEST</Surname>
            </PersonName>
        </VehCancelRQCore>
    </OTA_VehCancelRQ>
~~~


### OTA VehCancelRQ Description


The request requires the booking code and the name of the customer.



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| OTA_VehCancelRQ			| 1           	|		| Root Node.        						|
| OTA_VehCancelRQ/POS			| 1   		| Pos    	| Contains information of the Point Of Sale. 			|
| OTA_VehCancelRQ /VehCancelRQCore	| 1   		| CancelInfoRQ	| It has the UniqueID that identifies the reservation for the provider to cancel it.	|
| VehCancelRQ/UniqueID			| 1   		| UniqueID	| Locator code that identifies the reservation. 		|
| VehCancelRQ/PersonName		| 1   		| PersonName	| Object that contains the name of the customer. 		|
| OTA_VehCancelRQ /VehCancelRQInfo	| 1   		| vehCancel RQInfo	| Contains the dates of the reservation and the selected offices. Most of the providers don't require this information.	|
| vehCancelRQInfo /RentalInfo		| 1   		| RentalInfo	| Contains the locations and dates of the rental.		|



### OTA VehCancelRS Example



~~~xml
    <OTA_VehCancelRS>
        <Success/>
        <VehCancelRSCore CancelStatus = " ">
            <CancelRules>
                <CancelRule Amount = " " CurrencyCode = " "/>
                ...
            </CancelRules>
            <UniqueID Type = " " ID = " "/>
        </VehCancelRSCore>
        <Errors>
            <Error></Error>
            ...
        </Errors>
        <Warnings>
            <Warning></Warning>
            ...
        </Warnings>
    </OTA_VehCancelRS>
~~~


### OTA VehCancelRS Description


The result returns the new status of the reservation and the possible
cost of the cancellation.


 
| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| OTA_VehCancelRS     			| 1             |        	| Root Node							|
| OTA_VehCancelRS /VehCancelRSCore	| 1     	| VehCancelRSCore | Contains the Cancelation rules.				|
| VehCancelRSCore /CancelStatus		| 1     	| eTransactionStatusType | It showns the new status of the reservation.		|

