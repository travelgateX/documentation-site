---
title: Availability
keywords: transfers, availability, avail
search: Transfers - Data Structure - Availability
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/avail
---



### Method Goals


This method aims to return all the available options for a given dates
and destinations.



### Remarks


This method **must** be called **before** the RateRule method.



### AvailabilityRQ Example



~~~xml
    <AvailabilityRQ>
        <echoToken>test</echoToken>
        <timeoutMilliseconds>60000</timeoutMilliseconds>
        <source>
            <agencyCode>xxxx</agencyCode>
            <languageCode>xx</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>true</registerTransactions>
        </filterAuditData>
        <Configuration codeProvider = "xxx">
            <Credentials user = "xxxx" password = "xxxx">
                <UrlGeneric>xxxx</UrlGeneric>
                <UrlIdentification xsi:nil = "true"/>
                <UrlAvailability xsi:nil = "true"/>
                <UrlRateRule xsi:nil = "true"/>
                <UrlBook xsi:nil = "true"/>
                <UrlsSpecific xsi:nil = "true"/>
            </Credentials>
            <Attributes>
            </Attributes>
        </Configuration>
        <Segments>
            <Segment id = "0">
                <Origin type = "ARP" code = "xxx" date = "2014-09-19T17:15:00">
                    <FlightInfo flightNumber = "xxxx">
                        <Arrival terminal = "xxx" date = "2014-09-19T17:45:00"/>
                        <Departure terminal = "xxx" date = "2014-09-19T17:15:00"/>
                    </FlightInfo>
                </Origin>
                <Destination type = "HOT" code = "xxxx" date = "2014-09-30T00:00:00">
                    <HotelInfo name="xxxx" address="xxxxx"></HotelInfo>
                </Destination>
            </Segment>
            <Segment id = "1">
                <Origin type = "HOT" code = "xxxx" date = "2014-09-01T17:15:00"/>
                    <HotelInfo name="xxxx" address="xxxxx"></HotelInfo>
                </Origin>
                <Destination type = "ARP" code = "xxx" date = "2014-09-02T00:00:00">
                    <FlightInfo flightNumber = "xxxx">
                        <Arrival terminal = "xxx" date = "2014-09-01T16:25:00"/>
                        <Departure terminal = "xxx" date = "2014-09-01T15:55:00"/>
                    </FlightInfo>
                </Destination>
            </Segment>
        </Segments>
        <Passengers>
            <Passenger id = "0" age = "30">
                <RefSegments>
                    <RefSegment refSegment = "0" bags = "0"/>
                    <RefSegment refSegment = "1" bags = "0"/>
                </RefSegments>
            </Passenger>
        </Passengers>
    </AvailabilityRQ>
~~~


### AvailabilityRQ Description


The availability request is very straight forward. It only requires a
list of segments and a list of passengers. Each segment represents the
route that a transfer has to do, it contains the origin and destination
codes and dates. If the segment contains an Hotel destination or an
Airport destination, extra information must be sent in FlightInfo object
and HotelInfo object.



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| AvailabilityRQ				| 1        	|		| Root Node.						|
| AvailabilityRQ/Configuration			| 1 		| ConfigurationProvider | Configuration needed to send the transaction to the provider.	|
| AvailabilityRQ/Segments			| 1 		| Segments	| Contains a List of Segment. Each segment represents the route that a transfer has to do, it contains the origin and destination codes and dates.	|
| AvailabilityRQ/Segments/Segment		| 1..n		| Segment	| Each segment represents the route that a transfer has to do.	|
| @Segment/id					| 1 		| Integer	| Integer that contains the ID of the Segment.		|
| @Segment/Origin				| 1 		| Location	| This location object contains information related to the origin of the transfer.		|
| @Segment/Destination				| 1 		| Location	| This location object contains information related to the destination of the transfer.	|
| @Location/type				| 1 		| eLocationType	| Indicates the location type. The possible values are: **CTY**(City); **ZON**(Zone); **ARP**(Airport) **STA**(Train/Bus station); **PRT**(Port); **HOT**(Hotel); **PDI**(Point of interest); **OTH**(Other).	|
| @Location/code				| 1 		| String	| Code that identifies the location in the provider's system.	|
| @Location/date				| 1 		| DateTime	| Indicates the date associated with this location.	|
| @Location/FlightInfo				| 0..1		| FlightInfo	| Contains a flight information if this location is an airport.	|
| @Location/FlightInfo/flightNumber		| 1 		| String	| Indicates the flight number.				|
| @Location/FlightInfo/Departure		| 1 		| TerminalInfo	| Contains the information related to the departure terminal.	|
| @Location/FlightInfo/Arrival 			| 1 		| TerminalInfo	| Contains the information related to the arrival terminal.	|
| @TerminalInfo/terminal			| 1 		| String	| Indicates the code that identifies the terminal on the providers system.	|
| @TerminalInfo/date				| 1 		| DateTime	| Indicates the date in which the customer must arrive or depart.	|
| @Location/HotelInfo				| 0..1		| HotelInfo	| Contains an hotel information if this location is an hotel.	|
| @HotelInfo/name				| 1 		| String	| Indicates the full name of the hotel (as it appears in the provider's system).	|
| @HotelInfo/address				| 1 		| String	| Indicates the address of the hotel.			|
| AvailabilityRQ/Passengers			| 1 		| Passengers	| Contains the passengers that are involved in the reservation.	|
| AvailabilityRQ/Passengers/Passenger		| 1..n		| Passenger	| Contains the passenger information. 			|
| @Passenger/id					| 1 		| Integer	| This id identifies the passenger.			|
| @Passenger/age				| 1 		| Integer	| Indicates the age of the passenger.			|
| @Passenger/RefSegments			| 1 		| RefSegments	| Contains a list of references to the segments where the passenger wants to be transfered.	|
| @Passenger/RefSegments/RefSegment		| 1..n		| RefSegment	| Contains a list of references to segments.		|
| @RefSegment/refSegment			| 1 		| Integer	| This reference represents the id of the segment which is served with this option.	|
| @RefSegment/bags				| 1 		| Integer	| Indicates the number of bags carried by the passenger.	|



### AvailabilityRS Example



~~~xml
    <AvailabilityRS>
        <auditData>
            <transactions>
                <timeStamp>2014-09-19T13:42:56.304353+01:00</timeStamp>
                <RQ>xxxx</RQ>
                <RS>xxxx</RS>
            </transactions>
            <timeStamp>2014-09-19T13:42:54.5681506+01:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <Transfers>
            <Transfer id = "0">
                <Info type = "BUS" code = "XXX" typeVeh = "XXX"/>
                <LocOrigin type = "ARP" code = "PMI" date = "2014-09-19T17:17:00"/>
                <LocDestination type = "HOT" code = "XXX" date = "0001-01-01T00:00:00"/>
            </Transfer>
            <Transfer id = "1">
                <Info type = "PRV" code = "XXX" typeVeh = "XXXX"/>
                <LocOrigin type = "ARP" code = "PMI" date = "2014-09-19T17:17:00"/>
                <LocDestination type = "HOT" code = "XXX" date = "0001-01-01T00:00:00"/>
            </Transfer>
            <Transfer id = "2">
                <Info type = "BUS" code = "XXX" typeVeh = "XXXX"/>
                <LocOrigin type = "ARP" code = "PMI" date = "2014-09-19T17:17:00"/>
                <LocDestination type = "HOT" code = "XXX" date = "0001-01-01T00:00:00"/>
            </Transfer>
            <Transfer id = "3">
                <Info type = "BUS" code = "XXX" typeVeh = "XXX"/>
                <LocOrigin type = "HOT" code = "XXX" date = "2014-09-01T17:17:00"/>
                <LocDestination type = "ARP" code = "PMI" date = "0001-01-01T00:00:00"/>
            </Transfer>
            <Transfer id = "4">
                <Info type = "PRV" code = "XXX" typeVeh = "XXX"/>
                <LocOrigin type = "HOT" code = "XXX" date = "2014-09-01T17:17:00"/>
                <LocDestination type = "ARP" code = "PMI" date = "0001-01-01T00:00:00"/>
            </Transfer>
            <Transfer id = "5">
                <Info type = "BUS" code = "XXX" typeVeh = "XXXX"/>
                <LocOrigin type = "HOT" code = "XXX" date = "2014-09-01T17:17:00"/>
                <LocDestination type = "ARP" code = "PMI" date = "0001-01-01T00:00:00"/>
            </Transfer>
        </Transfers>
        <Rates>
            <Rate id = "0" code = "0" providerCode = "XXX" rateType = "OW">
                <Options>
                    <Option status = "" id = "0" refSegment = "0">
                        <RefTransfers>
                            <RefTransfer refTransfer = "0" dateStart = "2014-09-19T17:17:00" dateEnd = "0001-01-01T00:00:00"/>
                        </RefTransfers>
                        <Parameters>
                        </Parameters>
                    </Option>
                </Options>
                <TotalRate currency = "EUR" amount = "5.350" priceType = "BINDING"/>
                <RefTransfers>
                    <RefTransfer refTransfer = "0" dateStart = "2014-09-19T17:17:00" dateEnd = "0001-01-01T00:00:00"/>
                </RefTransfers>
            </Rate>
            <Rate id = "1" code = "1" providerCode = "XXX" rateType = "OW">
                <Options>
                    <Option status = "" id = "1" refSegment = "0">
                        <RefTransfers>
                            <RefTransfer refTransfer = "1" dateStart = "2014-09-19T17:17:00" dateEnd = "0001-01-01T00:00:00"/>
                        </RefTransfers>
                        <Parameters>
                        </Parameters>
                    </Option>
                </Options>
                <TotalRate currency = "EUR" amount = "39.060" priceType = "BINDING"/>
                <RefTransfers>
                    <RefTransfer refTransfer = "1" dateStart = "2014-09-19T17:17:00" dateEnd = "0001-01-01T00:00:00"/>
                </RefTransfers>
            </Rate>
           ...
        </Rates>
        <Errors>
            <Error>…</Error>
            <Error>…</Error>
            ...
        </Errors>
        <Warnings>
            <Warning>…</Warning>
            <Warning>…</Warning>
            ...
        </Warnings>
    </AvailabilityRS>
~~~


### AvailabilityRS Description


The response of this method will contain a list of transfers and a list
of rates. The transfer object contains information related to the
vehicle that operates the transfer (it also contains the destination
codes and dates). Each received rate contains a pricing and a list of
options that reference a transfer on the transfer list. All the options
received in a rate have the same price. If the rate is OW their options
are combinable with options of other rates but if the rate is RT, they
are just combinable with other options of the same rate.


 
| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| AvailabilityRS				| 1  		|		| Root Node.						|
| AvailabilityRS/Transfers			| 1		| Tranfers	| Contains a list of available transfers with its information.	|
| AvailabilityRS/Transfers/Transfer		| 1..n		| Transfer	| Contains a list of transfers.
| @Transfer/id					| 1 		| Integer	| This id identifies the transfer.			|
| @Transfer/Info				| 1		| InfoTransfer	| Contains information related to the vehicle that operates the transfer.	|
| @InfoTransfer/type				| 1		| eTransferType	| This value classifies the vehicle in the following types: **LIM**(Limousine); CAR(Car); **BUS**(Bus); **TAX**(Taxi); **PRV**(Private vehicle).	|
| @InfoTransfer/code				| 1		| String	| Indicates the code of the transfer if the provider returns it.	|
| @InfoTransfer/name				| 1		| String	| Indicates the name of the transfer if the provider returns it.	|
| @InfoTransfer/typeVeh				| 1		| String	| Indicates the name of the transfer if the provider returns it.	|
| @InfoTransfer/codeVeh				| 1		| String	| Indicates the code of the vehicle as it's returned in the provider's response.	|
| @Transfer/LocOrigin				| 1		| Location	| This location object contains information related to the origin of the transfer.		|
| @Transfer/LocDestination			| 1		| Location	| This location object contains information related to the destination of the transfer.		|
| @Transfer/routeId				| 0..1		| String	| This is a code that pairs an origin and a destination ( remark: contamplates the direction of the route ).	|
| AvailabilityRS/Rates				| 1		| Rates		| Contains a list of available rates. From each rate there are available options and each option references the transfers that operate them.	|
| AvailabilityRS/Rates/Rate			| 1.n		| Rate		| Contains a list of Rate.				|
| @Rate/id					| 1		| Integer	| This id identifies the rate.				|
| @Rate/code					| 1		| String	| Contains the code of the rate if the provider returns it.	|
| @Rate/providerCode				| 1		| String	| Contains the code of the provider that offers this rate.	|
| @Rate/rateType				| 1		| eRateType	| Indicates if the rate is OW (one-way) or RT (return). The One-Way rates are combinable, but the return ones are not combinable.	|
| @Rate/Options					| 1 		| Options	| Contains a list of options that belong to this rate.	|
| @Options/Option				| 1..n		| OptionRate	| Contains a list of OptionRate.			|
| @OptionRate/status				| 1		| String	| Indicates the status of the option if the provider returns this information. This is a plain text of the status returned by the provider, this means that each provider may send it's own status codes/messages. 	|
| @OptionRate/id				| 1		| Integer	| This code identifies the option.			|
| @OptionRate/refSegment			| 1		| Integer	| This reference represents the id of the segment which is served with this option.	 |
| @OptionRate/RefTransfers			| 1		| RefTrasfers	| Contains a list of references of different transfers that serve the segment indicated on "refSegment" field.	|
| @OptionRate/RefTransfers/RefTransfer		| 1..n		| RefTransfer	|							|
| @RefTransfer/refTransfer			| 1		| Integer	| This reference represents the id of a transfer.	|
| @RefTransfer/dateStart			| 1		| DateTime	| Indicates the start date/time of the service.		|
| @RefTransfer/dateEnd				| 1		| DateTime	| Indicates the end date/time of the service.		|
| @OptionRate/Parameters			| 1		| Parameters	| Contains a list of Parameter objects. These objects contain information that the integration needs to proceed with the booking process. The information contained in this objects is not relevant for the agency but is really important to spread it during the booking process. This means that a parameter returned in AvailabilityRS should be received by the integration on RateRuleRQ, returned on RateRuleRS and received by the integration again on BookRQ. This is very important to ensure the correct functionality of the integration. One of the most typical Parameter's use is to spread a sessionID.		|
| @OptionRate/Parameters/Parameter		| 1..n		| Parameter	| This is a list of Parameter objects.			|
| @Parameter/key				| 1		| String	| This is the key that identifies the parameter.	|
| @Parameter/value				| 1		| String	| This is the value of the parameter.			|
| @Rate/TotalRate				| 1		| Price		| Contains information about the price of this rate.	|
| @Price/currency				| 1 		| String	| Indicates the currency in which the amount is represented.	|
| @Price/amount					| 1		| Decimal	| Indicates the total amount of the reservation. If the rate is OW this price correspond to each option included in this *Rate* object, if the rate is RT correspond to the pair of options included in this *Rate* object.	|
| @Price/priceType				| 1		| ePriceType	| Contains the price type. The possible values are: **NET**: The returned price is a net price; **BINDING**: The returned price is a retail pric; **COMMISSION**: The returned price is commissionable.	|
| @Price/commission				| 1		| Decimal	| This value indicates the % of commission if the provider returns it.	|
| @Rate/RefTransfers				| 1		| RefTransfers	| Contains a list of transfer references.		|
| @Rate/RefTransfers/RefTransfer		| 1..n		| RefTransfer	| Contains a list of references of different transfers that serve the segment indicated on "refSegment" field.	|
   
