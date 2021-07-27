+++
title= "Examples"
keywords= "hotel, examples"
search= "Hotel - Examples"
weight = 30
icon = "fa-life-ring"
+++

In this page you can download a Postman project where you will find an example of each request from TravelgateX API with the connectivity already configured.

Only changes needed are the endpoint and the configuration in the requests:

{{< figure src="/images/hotel_suppliers_example_postman.png#center" attr="" >}}

You can download the Postman example project [here](/content/API TravelGateX.postman_collection.zip)



Example of request the seller will receive from TravelgateX system:

Post headers:

~~~xml
Content-Type: text/xml; charset=utf-8
Accept: application/xml
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
            <Parameter key = "param" value = "PWXML"/>
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



