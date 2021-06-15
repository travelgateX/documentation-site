+++
title= "Overview"
keywords= "suppliers, hotel"
search= "Hotel - suppliers info"
sidebar= "mydoc_sidebar"
permalink = "/docs/hotel/data-structure"
weight = 1
+++

TravelgateX works like a switch connecting Buyers to Sellers and transforing the requests from TravelgateX's API to the Seller's API. But, when the Seller integrates into TravelgateX's API they will receive the same request the Buyer sends, without any transformation. In other words, the sSller will receive the same request the Buyer sends.

The Seller has to be able to receive requests for TravelgateX's API [methods](https://docs.travelgatex.com/legacy/hotel/methods/messages/). In every request there is a [configuration](/legacy/hotel/how-to-guides/suppliers/configuration/) element with the credential information.

The connectivity will be by POST method, you can find more information at our [suppliers connectivity page](/legacy/hotel/how-to-guides/suppliers/connectivity/).

Example of request the seller will receive from TravelgateX system:

Post headers:

~~~xml
Content-Type: text/xml; charset=utf-8
Accept: application/xml
Host: hubxtghotel.xmltravelgate.com
Content-Length: 3806
Expect: 100-continue
Accept-Encoding: gzip
Connection: Keep-Alive
~~~
Post body:
~~~xml
<AvailRQ>
    <timeoutMilliseconds>24700</timeoutMilliseconds>
    <source>
        <languageCode>en</languageCode>
    </source>
    <optionsQuota>0</optionsQuota>
    <Configuration>
        <User>USERXX</User>
        <Password>PWXX</Password>
        <UrlAvail>www.supplier.com/avail</UrlAvail>
        <UrlReservation>www.supplier.com/reservation</UrlReservation>
        <UrlValuation>www.supplier.com/valuation</UrlValuation>
        <UrlGeneric>www.supplier.com</UrlGeneric>
        <Parameters>
            <Parameter key = "SegundoPW" value = "PWXML"/>
        </Parameters>
    </Configuration>
    <CancellationPolicies>false</CancellationPolicies>
    <RoomCancellationPolicies>false</RoomCancellationPolicies>
    <DailyPrices>false</DailyPrices>
    <DailyRatePlans>false</DailyRatePlans>
    <OnRequest>false</OnRequest>
    <BusinessRules>CheaperAmount</BusinessRules>
    <AvailDestinations>
        <Destination type = "HOT" code = "5"/>
    </AvailDestinations>
    <StartDate>28/01/2022</StartDate>
    <EndDate>29/01/2022</EndDate>
    <Currency>EUR</Currency>
    <Nationality>ES</Nationality>
    <Markets>
        <Market>ES</Market>
        <Market>EN</Market>
    </Markets>
    <RoomCandidates>
        <RoomCandidate id = "1">
            <Paxes>
                <Pax age = "30" id = "1"/>
                <Pax age = "30" id = "2"/>
            </Paxes>
        </RoomCandidate>
        <RoomCandidate id = "2">
            <Paxes>
                <Pax age = "35" id = "1"/>
                <Pax age = "42" id = "2"/>
                <Pax age = "5" id = "3"/>
            </Paxes>
        </RoomCandidate>
    </RoomCandidates>
</AvailRQ>

~~~
