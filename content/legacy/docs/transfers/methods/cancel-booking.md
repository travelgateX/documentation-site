---
title: CancelBooking
keywords: transfers, cancel booking
search: Transfers - Data Structure - CancelBooking
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/cancel-booking
---



### Method Goals


This method aims to cancel a booking.



### CancelBookingRQ Example


~~~xml
    <CancelBookingRQ>
    <timeoutMilliseconds>XXXX</timeoutMilliseconds>
    <source>
        <agencyCode>XXXX</agencyCode>
        <languageCode>es</languageCode>
    </source>
    <filterAuditData>
        <registerTransactions>false</registerTransactions>
    </filterAuditData>
    <Configuration codeProvider = "XXX">
        <Credentials user = "XXX" password = "XXX">
            <UrlGeneric>http://examples.com</UrlGeneric>
            <UrlIdentification>http://examples.com</UrlIdentification>
            <UrlAvailability xsi:nil = "true"/>
            <UrlRateRule xsi:nil = "true"/>
            <UrlBook xsi:nil = "true"/>
            <UrlsSpecific xsi:nil = "true"/>
        </Credentials>
        <Attributes/>
    </Configuration>
    <Locator id = "94" type = "PROVIDER"/>
    </CancelBookingRQ>
~~~



### CancelBookingRQ Description




| **Element**			| **Number**	| **Type**	| **Description**		|
| ----------------------------- | ------------- | ------------- | ----------------------------- |
| CancelBookingRQ		| 1          	|		| Root node.			|



### CancelBookingRS Example


~~~xml
    <CancelBookingRS xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
    <auditData>
        <timeStamp>2015-03-05T10:54:41.5860766+01:00</timeStamp>
        <processTimeMilliseconds>0</processTimeMilliseconds>
    </auditData>
    <operationImplemented>true</operationImplemented>
    <Locators>
        <Locator id = "ABCD" type = "CLIENT"/>
        <Locator id = "XYZ" type = "PROVIDER"/>
    </Locators>
    <CanceledRates>
        <CanceledRate id = "74" providerCode = "5" providerExternalCode = "UXB-A07012339" rateType = "RT">
          <SelectedOptions>
                    <SelectedOption status = "NEW" id = "0">
                        <Transfers>
                            <Transfer id = "0">
                                <Info type = "BUS" code = "XXX" typeVeh = "XXX">
                                    <vendorMessages>
                                        <vendorMessage>
                                            <Tittle>XXXX</Tittle>
                                            XXXXXXXXXX
                                        </vendorMessage>
                                    </vendorMessages>
                                </Info>
                                <LocOrigin type = "ARP" code = "XXX" date = "2014-09-19T00:00:00"/>
                                <LocDestination type = "HOT" code = "XXX" date = "2014-09-19T00:00:00"/>
                            </Transfer>
                        </Transfers>
                        <Parameters></Parameters>
                    </SelectedOption>
                </SelectedOptions>
            <CancellationPenalty currency = "EUR" amount = "0" priceType = "NET" commission = "0"/>
        </CanceledRate>
    </CanceledRates>
    <ReservationStatus>CANCELLED</ReservationStatus></CancelBookingRS>
~~~



### GetTransferTypesRS Description


| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| CancelBookingRS			| 1       	|		| Root node.							|
| @id       				| 1 		| String	| Code of the supplement. Sole codes. 				|
| @name     				| 1 		| String	| Name of the supplement.					|
| CancelBookingRS/Locators		| 0..1		|		|								|
| CancelBookingRS/Locators /Locator	| 1..n		| Locator	| Contains the locator of the provider's system.		|
| CancelBookingRS/Locators /Locator/id	| 1 		| String	| The code that's identifies the reservation in the provider's system.	|
| CancelBookingRS/Locators /Locator/type | 1 		| eLocatorType	| Indicates the type of the locator. The possible values are: **PROVIDER**.	|
| CancelBookingRS/CanceledRates  	| 0..1		| Rate 		| If the provider returns information related to the cancelled rates, this will be returned.	|
| CancelBookingRS /CanceledRates/CancelledRate | 1..n	| SelectedRate	| Contains a list of SelectedRate.				|
| @SelectedRate/id			| 1 		| Integer	| This id identifies the rate.					|
| @SelectedRate/code			| 1 		| String	| Contains the code of the rate if the provider returns it.	|
| @SelectedRate/providerCode		| 1 		| String	| Contains the code of the provider that offers this rate.	|
| @SelectedRate/rateType		| 1 		| eRateType	| Indicates if the rate is OW (one-way) or RT (return).		|
| @SelectedRate/SelectedOptions		| 1 		| SelectedOptions | Contains a list of SelectedOptions that belong to this rate.	|
| @SelectedRate /SelectedOptions/SelectedOption | 1..n	| SelectedOption | Contains a list of SelectedOption.				|
| @SelectedOption/status		| 1 		| String	| Indicates the status of the option if the provider returns this information. This is a plain text of the status returned by the provider, this means that each provider may send it's own status codes/messages.	|
| @SelectedOption/id			| 1 		| Integer	| This code identifies the option.				|
| @SelectedOption/Segment		| 1 		| Segment	| Contains the segment which is served with this option.	|
| @SelectedOption/Transfers		| 1 		| Transfers	| Contains a list of different transfers that serve the segment of this option.	|
| @SelectedOption/Transfers /Transfer	| 1..n		| Transfer	| Contains a list of transfers which is served with this option.	|
| @SelectedOption/Parameters 		| 1 		| Parameters	| Contains a list of Parameter objects. The parameter returned in AvailabilityRS should be received by the integration on RateRuleRQ.	|
| @SelectedRate/TotalRate		| 1 		| Price	| Contains information about the price of this rate. If the rate is OW this price correspond to each option included in this *SelectedRate* object, if the rate is RT correspond to the pair of options included in this *SelectedRate* object.	|
| @SelectedRate/CancellationPolicy	| 1 		| Cancellation	| Policies 1 Contains a list of conditions of the penalties for the cancellation of the reservation. This object normaly is not used because in this moments the providers not return this informacion in *AvailabilityRS*, if there are any will be returned in *RateRuleRS*.	|

