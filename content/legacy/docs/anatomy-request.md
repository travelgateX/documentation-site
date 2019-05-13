---
title: Anatomy of Request
keywords:
search: Anatomy of Request
sidebar: mydoc_sidebar
permalink: /docs/anatomy-request/
---


The request is basically made up of two parts: the hub structure and
then the XML request.

The hub structure is a generic structure wrapping the XML request which
will indicate the following information:

-   Hub credentials.
-   Connection time out measured in Milliseconds.
-   XML Travelgate's API version - usually indicated with a 1.
-   Code for the Supplier you wish to connect to.
-   Id to correlate providerRQ in Request with Response

**Observations:**

For each request or call there will be **only one** supplier per
request, i.e. the example below is a cancellation request where we use
the supplier TEST with the supplier code TST (\<ns:code\>TST/ns:code\>).
The response of this call will be exclusively for the supplier TST.


~~~xml
    <soapenv:Envelope
    xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06"
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
    <soapenv:Header>
        <wsse:Security>
            <wsse:UsernameToken>
                <wsse:Username>xxxxxxxxxx</wsse:Username> <!--Hub Credentials-->
                <wsse:Password>xxxxxxxxxx</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
       <soapenv:Body>
          <ns:Cancel>
             <ns:cancelRQ>
                <ns:timeoutMilliseconds>xxxxxx</ns:timeoutMilliseconds> <!--Hub timeoutMillisecond-->
                <ns:version>x</ns:version> <!--request version-->
                <ns:providerRQ>
                   <ns:code>xxx/ns:code> <!--Supplier's code-->
                   <ns:id>x/ns:id> <!--Id-->
                   <ns:rqXML>
                      <!--XML request, for example, the cancellation of a hotel reservation-->
                   </ns:rqXML>
                </ns:providerRQ>
             </ns:cancelRQ>
          </ns:Cancel>
       </soapenv:Body>
    </soapenv:Envelope>
~~~

The only exception where there is a possibility of using one or more
providerRQs in the same request is when using the call Avail. To
identify which providerRQ is used in the Avail call use the field id.
For example, for TST the id will be 1 (<ns:id>1</ns:id>) and for the
supplier TST2 the id will be 2 (<ns:id>2</ns:id>), then in the
response for the supplier TST the refId will be 1 (<refId>1</refId>)
and for the second supplier TST2 the refID will be 2
(<refId>2</refId>). This will be visually shown in the [Soap Example](/docs/hotel/soap-examples).

