---
title: RateRule (Pre-Booking)
keywords: transfers, rate rule
search: Transfers - Data Structure - RateRule (Pre-Booking)
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/rate-rule
---



### Method Goals


This method aims to return price of the SelectedOptions . This options
**must** be selected in the previous step ( Availability ).

This message allows the partners to know the applied conditions on the
chosen transfers.



### Remarks


Some suppliers do not provide this method. If this is the case, our
integration will internally call an Availability method and will filter
the results in order to refresh the information and produce a RateRuleRS.



### RateRule RQ Example



~~~xml
    <RateRuleRQ>
       <timeoutMilliseconds>60000</timeoutMilliseconds>
        <source>
            <agencyCode>test</agencyCode>
            <languageCode>es</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>true</registerTransactions>
        </filterAuditData>
        <Configuration codeProvider = "XXX">
            <Credentials user = "XXXX" password = "XXXX">
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
        <SelectedRates>
            <SelectedRate id = "0" code = "0" providerCode = "XXX" rateType = "OW">
                <SelectedOptions>
                    <SelectedOption status = "" id = "0">
                        <Segment id = "0">
                            <Origin type = "ARP" code = "XXX" date = "2014-09-19T17:15:00">
                                <FlightInfo flightNumber = "XXX">
                                    <Arrival terminal = "XXX" date = "2014-09-19T17:45:00"/>
                                    <Departure terminal = "XXX" date = "2014-09-19T17:15:00"/>
                                </FlightInfo>
                            </Origin>
                            <Destination type = "HOT" code = "XXX" date = "2014-09-30T00:00:00"/>
                        </Segment>
                        <Transfers>
                            <Transfer id = "0">
                                <Info type = "BUS" code = "XXXX" typeVeh = "XXX"/>
                                <LocOrigin type = "ARP" code = "XXX" date = "2014-09-19T17:17:00"/>
                                <LocDestination type = "HOT" code = "XXX" date = "0001-01-01T00:00:00"/>
                            </Transfer>
                        </Transfers>
                        <Parameters>
                        </Parameters>
                    </SelectedOption>
                </SelectedOptions>
                <TotalRate currency = "EUR" amount = "5.350" priceType = "BINDING"/>
                <CancellationPolicy/>
            </SelectedRate>
            <SelectedRate id = "5" code = "5" providerCode = "XXX" rateType = "OW">
                <SelectedOptions>
                    <SelectedOption status = "" id = "5">
                        <Segment id = "0">
                            <Origin type = "ARP" code = "XXX" date = "2014-09-19T17:15:00">
                                <FlightInfo flightNumber = "XXX">
                                    <Arrival terminal = "XXX" date = "2014-09-19T17:45:00"/>
                                    <Departure terminal = "XXX" date = "2014-09-19T17:15:00"/>
                                </FlightInfo>
                            </Origin>
                            <Destination type = "HOT" code = "XXX" date = "2014-09-30T00:00:00"/>
                        </Segment>
                        <Transfers>
                            <Transfer id = "5">
                                <Info type = "BUS" code = "XXX" typeVeh = "XXX"/>
                                <LocOrigin type = "HOT" code = "XXX" date = "2014-09-01T17:17:00"/>
                                <LocDestination type = "ARP" code = "XXX" date = "0001-01-01T00:00:00"/>
                            </Transfer>
                        </Transfers>
                        <Parameters>
                        </Parameters>
                    </SelectedOption>
                </SelectedOptions>
                <TotalRate currency = "EUR" amount = "23.390" priceType = "BINDING"/>
                <CancellationPolicy/>
            </SelectedRate>
        </SelectedRates>
        <Passengers>
            <Passenger id = "0" age = "30">
                <RefSegments>
                    <RefSegment refSegment = "0" bags = "0"/>
                    <RefSegment refSegment = "1" bags = "0"/>
                </RefSegments>
            </Passenger>
        </Passengers>
    </RateRuleRQ>
~~~


### RateRule RQ Description


The RateRule request requires the following information:

-   The selected rates with their corresponding selected options.
-   The passengers of the booking.


 
| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| RateRuleRQ					| 1       	|		| Root Node.						|
| RateRuleRQ/SelectedRates			| 1 		| SelectedRates	| Contains a list with the selected rates from availability response.	 |
| RateRuleRQ/SelectedRates/SelectedRate		| 1..n		| SelectedRate	| Contains a list of SelectedRate.			|
| @SelectedRate/id				| 1	 	| Integer	| This id identifies the rate.				|
| @SelectedRate/code				| 1 		| String	| Contains the code of the rate if the provider returns it.	|
| @SelectedRate/providerCode			| 1 		| String	| Contains the code of the provider that offers this rate.	|
| @SelectedRate/rateType			| 1 		| eRateType	| Indicates if the rate is OW (one-way) or RT (return). |
| @SelectedRate/SelectedOptions			| 1 		| SelectedOptions | Contains a list of SelectedOptions that belong to this rate.	|
| @SelectedRate/SelectedOptions/SelectedOption	| 1..n		| SelectedOption | Contains a list of SelectedOption.			|
| @SelectedOption/status			| 1 		| String	| Indicates the status of the option if the provider returns this information. This is a plain text of the status returned by the provider, this means that each provider may send it's own status codes/messages.	|
| @SelectedOption/id				| 1 		| Integer	| This code identifies the option.			|
| @SelectedOption/Segment			| 1 		| Segment	| Contains the segment which is served with this option.	|
| @SelectedOption/Transfers			| 1 		| Transfers	| Contains a list of different transfers that serve the segment of this option.		|
| @SelectedOption/Transfers/Transfer		| 1..n		| Transfer	| Contains a list of transfers which is served with this option.	|
| @SelectedOption/Parameters			| 1 		| Parameters	| Contains a list of Parameter objects. The parameter returned in AvailabilityRS should be received by the integration on RateRuleRQ.	|
| @SelectedRate/TotalRate			| 1 		| Price		| Contains information about the price of this rate. If the rate is OW this price correspond to each option included in this *SelectedRate* object, if the rate is RT correspond to the pair of options included in this *SelectedRate* object.		|
| @SelectedRate/CancellationPolicy		| 1 		| CancellationPolicies | Contains a list of conditions of the penalties for the cancellation of the reservation. This object normaly is not used because in this moments the providers not return this informacion in *AvailabilityRS*, if there are any will be returned in *RateRuleRS*.		|
| RateRuleRQ/Passengers				| 1 		| Passengers	| Contains a list of the passengers that participate in this reservation.	|
| RateRuleRQ/Passengers/Passenger		| 1..n		| Passenger	| Contains a list of Passenger objects.			|



### RateRuleRS Example



~~~xml
    <RateRuleRS>
        <auditData>
            <transactions>
                <timeStamp>2014-09-19T13:43:32.2921652+01:00</timeStamp>
                <RQ></RQ>
                <RS></RS>
            </transactions>
            <transactions>
                <timeStamp>2014-09-19T13:43:33.79646+01:00</timeStamp>
                <RQ></RQ>
                <RS></RS>
            </transactions>
            <timeStamp>2014-09-19T13:43:30.7950125+01:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <SelectedRates>
            <SelectedRate id = "0" rateType = "OW">
                <SelectedOptions>
                    <SelectedOption status = "NEW" id = "0">
                        <Transfers>
                            <Transfer id = "0">
                                <Info type = "BUS" code = "XXX" typeVeh = "XXX">
                                    <vendorMessages>
                                        <vendorMessage>
                                            <Tittle>XXX</Tittle>
                                            XXXXXXXXXXXXXXXXXXXXXX
                                        </vendorMessage>
                                    </vendorMessages>
                                </Info>
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
                <TotalRate currency = "EUR" amount = "5.350" priceType = "NET" commission = "0.640"/>
            </SelectedRate>
        </SelectedRates>
        <Warnings> 
            <Warning>…</Warning>
                . . .
        </Warnings> 
        <Errors>
            <Error>…</Error>
            . . .    
        </Errors>
     </RateRuleRS>
~~~


### RateRuleRS Description


The returned XML is similar to the result of the Availability call. The
main difference is that instead of receiving Rates the client receives a
list of SelectedRate . This object is almost the same as a Rate but it
contains the transfer information instead of just a reference and it
contains messages with important information from the provider.


 
| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| RateRuleRS          				| 1        	|		| Root Node.						|
| RateRuleRS/SelectedRates			| 1  		| SelectedRates	| Contains a list of the requested selected rates. The information of this rates is refreshed with the new information received from the provider.	|
| RateRuleRS/SelectedRates /SelectedRate	| 1..n		| SelectedRate	| Contains a list of SelectedRate.			|
| @SelectedRate/SelectedOptions /SelectedOption/Transfers /Transfer/Info | 1 | InfoTransfer | Contains information related to the vehicle that operates the transfer.	|
| @InfoTransfer/vendorMessages			| 1..n		| vendorMessage	| Contains vendorMessage objects that have important information about the transfer.	|
| @vendorMessage/Language			| 1  		| String	| Indicates the language in which the text is written.	|
| @vendorMessage/Tittle				| 1  		| String	| Tittle of the message.				|
| @vendorMessage/Text 				| 1  		| String	| Contains the text.					|

