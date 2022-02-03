+++
title= "Examples"
keywords= "hotel, examples"
search= "Hotel - Examples"
weight = 5
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
    <filterAuditData>
        <registerTransactions>true</registerTransactions>
    </filterAuditData>
    <optionsQuota>0</optionsQuota>
    <hubUser>xxx</hubUser>
    <hubProvider>XXX</hubProvider>
    <hubProviderInstanceCode>XYX</hubProviderInstanceCode>
    <Configuration>
        <User>USERXX</User>
        <Password>PWXX</Password>
        <UrlGeneric>www.supplier.com</UrlGeneric>
        <UrlAvail>www.supplier.com/avail</UrlAvail>
        <UrlValuation>www.supplier.com/valuation</UrlValuation>
        <UrlReservation>www.supplier.com/reservation</UrlReservation>       
        <Parameters>
            <Parameter key = "param" value = "PWXML"/>
        </Parameters>
    </Configuration>
    <SearchType>Combined</SearchType>
    <CancellationPolicies>false</CancellationPolicies>
    <RoomCancellationPolicies>false</RoomCancellationPolicies>
    <DailyPrices>false</DailyPrices>
    <DailyRatePlans>false</DailyRatePlans>
    <Attributes>false</Attributes>
    <OnRequest>false</OnRequest>
    <BusinessRules>CheaperAmount</BusinessRules>
    <AvailDestinations>
        <Destination type = "HOT" code = "157"/>
    </AvailDestinations>
    <StartDate>28/10/2022</StartDate>
    <EndDate>29/10/2022</EndDate>
    <Currency>EUR</Currency>
    <Nationality>ES</Nationality>
    <Markets>
        <Market>ES</Market>
        <Market>EN</Market>
    </Markets>
    <RoomCandidates>
        <RoomCandidate cantidad = "1" id = "1">
            <Paxes>
                <Pax age = "30" id = "1"/>
                <Pax age = "30" id = "2"/>
            </Paxes>
        </RoomCandidate>
        <RoomCandidate cantidad = "2" id = "2">
            <Paxes>
                <Pax age = "35" id = "1"/>
                <Pax age = "42" id = "2"/>
                <Pax age = "5" id = "3"/>
            </Paxes>
        </RoomCandidate>
        <Remarks>true</Remarks>
    </RoomCandidates>
</AvailRQ>


~~~



