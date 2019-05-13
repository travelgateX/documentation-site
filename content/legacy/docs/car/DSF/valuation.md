---
title: OTA VehRetRes (Get Booking Details)
keywords: transfers, data structure, valuation
search: Car - Data Structure - OTA VehRetRes (Get Booking Details)
sidebar: mydoc_sidebar
permalink: /docs/car/DSF/valuation
---



### Method Goals


This method aims to retrieve a booking with its full details.



### Remarks


Some suppliers do not implement this method.



### OTA VehRetResRQ Example



~~~xml
    <OTA_VehRetResRQ>
        <POS>
            <Source ISOCountry = "ESP">
                <RequestorID Type = "LAN" ID = "es"/>
            </Source>
        </POS>
        <VehRetResRQCore>
            <UniqueID ID = "4564894564" Type = "4"/>
            <PersonName>
                <GivenName>TEST</GivenName>
                <Surname>TEST</Surname>
            </PersonName>
        </VehRetResRQCore>
    </OTA_VehRetResRQ>
~~~


### OTA VehRetResRQ Description


The request requires the UniqueID (locator) of the reservation and the
name of the customer to identify the reservation and retrieve its
information.

| **Element**				| **Number**	| **Type**	| **Description**					|
| ------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| OTA_VehRetResRQ			| 1           	|		| Root Node. 				|
| OTA_VehRetResRQ/POS			| 1   		| Pos    	| Contains information of the Point Of Sale.		|
| OTA_VehRetResRQ /VehRetResRQCore	| 1   		| VehRetResRQCore | Contains the locator and the name of the customer in order to identify and retrieve the booking information.	|
| VehRetResRQCore/UniqueID		| 1   		| UniqueID	| It has the UniqueID that identifies the reservation for the provider to cancel it.	|
| VehRetResRQCore/PersonName		| 1   		| PersonName	| Contains the name of the customer that made the reservation.		|



### OTA VehRetResRS Example



~~~xml
    <OTA_VehRetResRS>
        <Success/>
        <VehRetResRSCore>
            <VehReservation ReservationStatus = "">
                <VehSegmentCore>
                    <ConfID ID = " " Type = ""/>
                    ...
                    <Vendor Code = " "/>
                    <Vehicle AirConditionInd = " " TransmissionType = " " VendorCarType = " ">
                        <VehMakeModel Name = "" Code = ""/>
                        <VehType DoorCount = "" VehicleCategory = ""/>
                        <VehClass Size = ""/>
                    </Vehicle>
                    <TotalCharge CurrencyCode = " " RateTotalAmount = ""/>
                </VehSegmentCore>
            </VehReservation>
        </VehRetResRSCore>
        <Errors>
            <Error></Error>
            ...
        </Errors>
        <Warnings>
            <Warning>…</Warning>
            ...
        </Warnings>
    </OTA_VehRetResRS>
~~~


### OTA VehRetResRS Description


The result returns the full details of a booking. It is very similar to
the OTA VehRes Response.



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| OTA_VehRetResRS      				| 1             |       	| Root Node.						|
| OTA_VehRetResRS /VehRetResRSCore		| 1    		| Vehicle RetrieveResRSCore | Contains the information of the retrieved booking.	|
| VehicleRetrieveResRSCore /VehReservation	| 1     	| Vehicle Reservation | Contains the information of the retrieved booking.	|

