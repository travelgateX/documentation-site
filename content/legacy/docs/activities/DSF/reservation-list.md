---
title: Reservation List
keywords: activities, data structure, reservation list
search: Activities - Data Structure - Reservation List
sidebar: mydoc_sidebar
permalink: /docs/activities/DSF/reservation-list
---



### Method Goals


This method aims to return all the reservation list of each activity
confirm for a given specific date from which you want to search and Date
type.



### Request Format


It is mandatory to pass a date range and a Date type. Depends the Date
type, you obtain different reservation list.

**Date types**

-   ArrivalDate : The arrival date of the reservation.
-   CreateDate : The date the reservation was created.
-   DepartureDate : The departure date of the reservation.
-   LastUpdateDate : The date the reservation was last updated.



### ReservationsListRQ Example



~~~xml
    <OTA_ReadRQ>
        xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xsd = "http://www.w3.org/2001/XMLSchema"
        PrimaryLangID = "es">
        <ReadRequests>
            <TourActivityReadRequest>
                <SelectionCriteria
                    DateType = "ArrivalDate"
                    End = "2013-12-19T12:32:15"
                    Start = "2013-12-18T12:32:15"/>
            </TourActivityReadRequest>
        </ReadRequests>
    </OTA_ReadRQ>
~~~


### ReservationsListRQ Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_ReadRQ     			| 1      	|		| Root node.					|
| @PrimaryLangID  			| 1  		| String	| Language code (ISO 3166-1 alpha-2) format.	|
| ReadRequests    			| 1      	|		| Retrieve a activity reservation list when the booking reference is not known. |
| ReadRequests/TourActivityReadRequest	| 1      	|		| Retrieve a activity reservation list when the booking reference is not known. |
| ReadRequests/TourActivityReadRequest/SelectionCriteria | 1  |		| Retrieve a activity reservation list with range date.  |
| @DateType       			| 1  		| Enum		| Specifies the type of date provided in the date time span attributes (Possible values:  "ArrivalDate", "CreateDate", "ArrivalDate", "DepartureDate", "LastUpdateDate"). |
| @End            			| 1  		| Date		| End date from which you want to search reservation list. |
| @Start          			| 1  		| Date		| Start date from which you want to search reservation list. |



### ReservationsListRS Example



~~~xml
    <OTA_TourActivityResRetrieveRS xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
        <operationImplemented>true</operationImplemented>
        <Detail ResStatus = "Confirmed" CreateDateTime = "2013-11-21T00:00:00">
            <BasicInfo Name = "Palma Aquarium" TourActivityID = "000200515"/>
            <Confirmation ID = "1283712#1" type = "PROVIDER"/>
            <Pricing>
                <Summary Amount = "33.341" CurrencyCode = "EUR">
                    <PricingType Extension = "PerTotal">Other_</PricingType>
                </Summary>
            </Pricing>
            <Schedule>
                <Detail>
                    <OperationTimes>
                        <OperationTime Start = "2013-12-18T00:00:00" End = "2013-12-18T00:00:00"/>
                    </OperationTimes>
                </Detail>
            </Schedule>
        </Detail>
        <Detail ResStatus = "Cancel" CreateDateTime = "2013-11-21T00:00:00">
            <BasicInfo Name = "Palma Aquarium" TourActivityID = "000200515"/>
            <Confirmation ID = "1283722#1" type = "PROVIDER"/>
            <Pricing>
                <Summary Amount = "0.000" CurrencyCode = "EUR">
                    <PricingType Extension = "PerTotal">Other_</PricingType>
                </Summary>
            </Pricing>
            <Schedule>
                <Detail>
                    <OperationTimes>
                        <OperationTime Start = "2013-12-18T00:00:00" End = "2013-12-18T00:00:00"/>
                    </OperationTimes>
                </Detail>
            </Schedule>
        </Detail>
        <Detail ResStatus = "Confirmed" CreateDateTime = "2013-11-21T00:00:00">
            <BasicInfo Name = "Palma Aquarium" TourActivityID = "000200515"/>
            <Confirmation ID = "1283723#1" type = "PROVIDER"/>
            <Pricing>
                <Summary Amount = "19.660" CurrencyCode = "EUR">
                    <PricingType Extension = "PerTotal">Other_</PricingType>
                </Summary>
            </Pricing>
            <Schedule>
                <Detail>
                    <OperationTimes>
                        <OperationTime Start = "2013-12-19T00:00:00" End = "2013-12-19T00:00:00"/>
                    </OperationTimes>
                </Detail>
            </Schedule>
        </Detail>
    </OTA_TourActivityResRetrieveRS>
~~~


### ReservationsListRS Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_TourActivityResRetrieveRS		| 1       	|		| Root node.					|
| Detail            			| 1..n    	|		| Information about reservation status and date time for each reservation activity. |
| @ResStatus        			| 1   		| Enum		| Information about reservation status (Possibles types: "Confirmed", "Cancel" or "Unknow"). |
| @CreateDateTime   			| 1   		| Date		| Information about create reservation date time. |
| @LastModifyDateTime			| 0..1		| Date		| Information about last modify reservation date time. For example, if cancel we return date time when client cancel this reservation. |
| Detail/BasicInfo  			| 0..1    	|		| If need search by activity provider code.	|
| @Name             			| 0..1		| String	| Name of ticket.				|
| @TourActivityID   			| 0..1		| String	| Code of ticket.				|
| Detail/Confirmation			| 1       	|		| Contains information of the activity booked.	|
| @ID               			| 1   		| String	| Activity booked identifier.			|
| @type             			| 1   		| String	| Activity booked type (Possible values: "PROVIDER").|
| Detail/PaymentInfo			| 0..1    	|		| Payment details that may be associated with an individual participant, a participant category and/or a group. |
| @Description      			| 0..1		| String	| A description of the charge.			|
| Detail/PickupDropoff			| 0..1		| String	| The pickup and/or dropoff information if transportation is provided to/ from the tour/activity location. |
| @OtherInfo        			| 0..1		| String	| Other instructions pertaining to the pickup/dropoff. |
| Pricing/Summary   			| 0..1    	|		| Summary price for option, this element we return if OpenAvailability = false. |
| @Amount           			| 0..1		| Decimal	| Option price.					|
| @CurrencyCode     			| 0..1		| String	| Currency code (ISO 4217).			|
| Detail/Pricing/Summary/PricingType	| 0..1		| String	| Specifies type of the option price, if value = Other then is mandatory specify Extension type. |
| @Extension        			| 0..1		| String	| Specifies type of the option price.		|
| Detail/Pricing/ParticipantCategory	| 0..n		| String	| Specifies price and participant category.	|
| @age              			| 0..1		| Integer	| Age of participant category.			|
| Detail/Pricing/ParticipantCategory/QualifierInfo | 0..1 | String	| Specifies participant type (Adult, Children or Baby). If value = Other then then is mandatory specify Extension provider type. |
| @Extension        			| 0..1		| String	| Specifies provider code of participant category. |
| Detail/Pricing/ParticipantCategory/Price | 1  	|		| Specific price for each participantCategory.	|
| @Amount           			| 1   		| String	| ParticipantCategory price.			|
| @CurrencyCode     			| 0..1		| String	| Currency code (ISO 4217).			|
| Detail/Schedule   			| 0..1    	|		| Information about dates range on which you can enjoy the activity. The same information that send in request. |
| Detail/Schedule/Detail		| 0..1    	|		| Information about specify dates on which you can enjoy the activity. |
| Detail/Schedule/Detail/OperationTimes	| 0..1    	|		| Information about specify dates on which you can enjoy the activity. |
| Detail/Schedule/Detail/OperationTimes/OperationTime | 0..1 | 		| Information when activity starts.		|
| @Start            			| 0..1		| Date		| Start date activity.				|
| @End              			| 0..1		| Date		| End date activity.				|


