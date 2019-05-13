---
title: Booking
keywords: transfers, booking
search: Transfers - Data Structure - Booking
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/reservation
---



### Method Goals


This method aims to book the selected options.



### BookRQ Example


~~~xml
    <BookRQ>
        <timeoutMilliseconds>60000</timeoutMilliseconds>
        <source>
            <agencyCode>test</agencyCode>
            <languageCode>es</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>true</registerTransactions>
        </filterAuditData>
        <Configuration codeProvider = "XXX">
            <Credentials user = "XXX" password = "XXX">
                <UrlGeneric>XXX</UrlGeneric>
                <UrlIdentification xsi:nil = "true"/>
                <UrlAvailability xsi:nil = "true"/>
                <UrlRateRule xsi:nil = "true"/>
                <UrlBook xsi:nil = "true"/>
                <UrlsSpecific xsi:nil = "true"/>
            </Credentials>
            <Attributes>

            </Attributes>
        </Configuration>
        <Locator id = "XXX" type = "CLIENT"/>
        <SelectedRates>
            <SelectedRate id = "0" rateType = "OW">
                <SelectedOptions>
                    <SelectedOption status = "NEW" id = "0">
                        <Transfers>
                            <Transfer id = "0">
                                <Info type = "BUS" code = "XXX" typeVeh = "XXX"/>
                                <LocOrigin type = "ARP" code = "PMI" date = "2014-09-19T00:00:00"/>
                                <LocDestination type = "HOT" code = "XXX" date = "2014-09-19T00:00:00"/>
                            </Transfer>
                        </Transfers>
                        <Parameters></Parameters>
                    </SelectedOption>
                </SelectedOptions>
                <TotalRate currency = "EUR" amount = "5.350" priceType = "NET" commission = "0.640"/>
            </SelectedRate>
            <SelectedRate id = "0" rateType = "OW">
                <SelectedOptions>
                    <SelectedOption status = "NEW" id = "0">
                        <Transfers>
                            <Transfer id = "0">
                                <Info type = "BUS" code = "XXX" typeVeh = "XXX"/>
                                <LocOrigin type = "ARP" code = "PMI" date = "2014-09-19T00:00:00"/>
                                <LocDestination type = "HOT" code = "XXX" date = "2014-09-19T00:00:00"/>
                            </Transfer>
                        </Transfers>
                        <Parameters></Parameters>
                    </SelectedOption>
                </SelectedOptions>
                <TotalRate currency = "EUR" amount = "5.350" priceType = "NET" commission = "0.640"/>
            </SelectedRate>
        </SelectedRates>
        <PassengersConfirm>
            <PassengerConfirm>
                <InfoPassenger id = "0" age = "30">
                    <RefSegments>
                        <RefSegment refSegment = "0" bags = "0"/>
                        <RefSegment refSegment = "1" bags = "0"/>
                    </RefSegments>
                </InfoPassenger>
                <DataPassenger name = "xxx" surname = "XXXX" holder = "true"/>
            </PassengerConfirm>
        </PassengersConfirm>
        <Customer name = "xxx" surname = "XXXX" age = "30" phone = "+34665246787"/>
    </BookRQ>
~~~


### BookRQ Description


The request format works the same way as the RateRule request. The main
difference is that the passengers also include name and surname
information and indicate which of them is the customer of the
reservation. This request also contains a locator that identifies the
reservation in the client system (the types of this locator must be
always CLIENT).


 
| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| BookRQ        				| 1         	|		| Root Node.						|
| BookRQ/Locator				| 1  		| Locator	| Contains the locator that will identify the reservation in the agency's system.	|
| BookRQ/Locator/id				| 1  		| String	| Indicates the locator value.   			|
| BookRQ/Locator/type				| 1  		| eLocatorType	| Indicates the type of the locator. The possible values are: **CLIENT**.	|
| BookRQ/SelectedRates				| 1  		| SelectedRates	| Contains a list of the selectedRates to be booked.   	|
| BookRQ/PassengersConfirm			| 1  		| PassengersConfirm | Contains a list of passengers with their information. | 
| BookRQ/PassengersConfirm /PassengerConfirm	| 1..n		| PassengerConfirm | Contains a list of PassengerConfirm.		|
| @PassengerConfirm/Passenger			| 1  		| Passenger	| Contains information related to the passenger (the id that identifies the passenger, his age and the references of the segments where he wants to be transfered).	|
| @PassengerConfirm/DataPassenger		| 1  		| DataPassenger	| Indicates the name of the passenger and contains a boolean that represents if this passenger is the customer of the reservation.	|
| @DataPassenger/name				| 1  		| String	| Contains the name of the passenger.   		|
| @DataPassenger/surname			| 1  		| String	| Contains the surname of the passenger.		|
| @DataPassenger/holder				| 1  		| Boolean	| Indicates if this passenger is the holder of the reservation.	|
| BookRQ/Customer				| 1  		| Customer	| Contains Contact information of the customer.		|
| BookRQ/Customer/name				| 1  		| String	| Contains the name of the customer.			|
| BookRQ/Customer/surname			| 1  		| String	| Contains the surname of the customer.			|
| BookRQ/Customer/age				| 1  		| Integer	| Contains the age of the customer.			|
| BookRQ/Customer/phone				| 1  		| String	| Contains the contact phone number of the customer.	|



### BookRS Example


~~~xml
    <BookRS> 
        <auditData>
            <transactions>
                <timeStamp>2014-09-19T13:44:18.716787+01:00</timeStamp>
                <RQ></RQ>
                <RS></RS>
            </transactions>
            <timeStamp>2014-09-19T13:44:17.2162683+01:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <Warnings>
            <Warning Code="XXXX">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
            </Warning>
            <Warning Code="XXXX">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
            </Warning>
        </Warnings>
        <Locators>
            <Locator id = "123456" type = "PROVIDER"/>
            <Locator id = "XXX" type = "CLIENT"/>
        </Locators>
        <TotalPrice currency = "EUR" amount = "5.350" priceType = "NET" commission = "0.640"/>
        <ReservationStatus>RESERVED</ReservationStatus>
    </BookRS>
~~~


### BookRS Description


The result returns a list of Locator (booking codes) the pricing of the
reservation and the reservation status, Also we added important but not
critical information, in format Warning, returned in the provider's
response.

| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| BookRS					| 1    		|		| Root Node.						|
| BookRS/Locators				| 1 		| Locators	| Contains a list of locators.				|
| BookRS/Locators/Locator			| 1..n		| Locator	| Contains a list of Locator.				|
| @Locator/id					| 1		| String	| Indicates the locator value.				|
| @Locator/type					| 1		| eLocatorType	| Indicates the type of the locator. The possible values are: **CLIENT** (This locator is from the agency's system. This is the type of locator that the agency sends in the BookRQ. If the provider accepts that locator, the BookRS will contain the same locator with this type); **PROVIDER** (This locator is from the provider's system); **OTHER** (This locator is not from the agency nor the provider, this locator belongs to a third party member involved in the reservation).	|
| BookRS/TotalPrice				| 1		| Price		| Contains information about the pricing of the reservation.	|
| BookRS/ReservationStatus			| 1		| eTransaction StatusType | Indicates the status of the reservation. The possible values are: **UNSUCCESSFUL**(There has been an error in the reservation process, Normaly the error is identified in node Errors); **REQUESTED**( The reservation is pending); **RESERVED**; **CANCELLED**.	|


