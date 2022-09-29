+++
title = "Authentication"
pagetitle = "Authentication"
description = "How to sign in"
icon = "fa-sign-in"
weight = 3
alwaysopen = false
isDirectory = false
+++

The messages have two levels of authentication, named Security and POS.

## Security Level

The Security level is in the SOAP envelope header, where you send the user and password of our Inventory system. Here you have an example:

~~~xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1 = "http://www.opentravel.org/OTA/2003/05" xmlns:ns2 = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:ns3 = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
    <SOAP-ENV:Header>
        <ns3:Security SOAP-ENV:mustUnderstand = "1">
            <ns3:UsernameToken>
                <ns3:Username>XXXXX</ns3:Username>
                <ns3:Password>XXXXXXX</ns3:Password>
            </ns3:UsernameToken>
        </ns3:Security>
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <!--Your request-->
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
~~~

## POS Level

The POS level comes in the body that all the requests have. This has two fields: *RequestorID*, the seller code asigned which send the request, and *CompanyName*, the buyer code asigned which receives the updates. Here you have an example:

~~~xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1 = "http://www.opentravel.org/OTA/2003/05" xmlns:ns2 = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:ns3 = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
    <SOAP-ENV:Header>
        <ns3:Security SOAP-ENV:mustUnderstand = "1">
            <ns3:UsernameToken>
                <ns3:Username>XXXXX</ns3:Username>
                <ns3:Password>XXXXXXX</ns3:Password>
            </ns3:UsernameToken>
        </ns3:Security>
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <ns:HotelRatePlanNotif><!--Your request, ex: HotelAvailNotif, HotelRatePlanInventoryRetrieve ...-->
            <ns:request>
                <ns1:POS>
                    <ns1:Source>
                        <ns1:RequestorID ID="Seller Code"/>
                        <ns1:BookingChannel>
                            <ns1:CompanyName Code="Buyer Code"/>
                        </ns1:BookingChannel>
                    </ns1:Source>
                </ns1:POS>
                ...
                ...
            </ns:request>
      </ns:HotelRatePlanNotif>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
~~~
