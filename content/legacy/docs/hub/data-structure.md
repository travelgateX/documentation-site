---
title: Data Structure
keywords: intro
search: Hub - Data Structure
sidebar: mydoc_sidebar
permalink: /docs/hub/data-structure
---

There is one XML API structure used for all integration
services.

The API structure has common elements and inside the body there are
specific XML elements depending on the type of integration .

For more detailed information on the specific XML elements inside the
requests and response objects, please choose from the API documentations below:


-   [Hotel API](/docs/hotel/index)
-   [Transportation API](/docs/transportation/index)
-   [Car API](/docs/car/index)
-   [Transfers API](/docs/transfers/index)
-   [Tour Activity API](/docs/activities/index) 


## API Methods

All API methods support one supplier per transaction except for Availability. 
Supplier response will be sent when timeout limit is reached or
when the supplier has responded.


### Availability Method

The Availability method supports requests to 1 or more (1..n) suppliers in a single availability request.
All  supplier requests will be sent to each supplier simultaneously and the responses aggregated into one single response. If the
timeout limit is reached and a supplier has not responded on time, an empty response will be returned for this specific supplier.

Please check Hub Quotas for some limitations to requests.

### Availability RQ Example

~~~xml
    
<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
   <soapenv:Header>
       <wsse:Security>
           <wsse:UsernameToken>
               <wsse:Username>user</wsse:Username>
               <wsse:Password>password</wsse:Password>
           </wsse:UsernameToken>
       </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
       <ns:Avail><!-- Specific by API -->
           <ns:availRQ> <!-- Specific by API -->
               <ns:timeoutMilliseconds>25000</ns:timeoutMilliseconds>
               <ns:version>1</ns:version>
               <ns:providerRQs>
                   <ns:ProviderRQ>
                       <ns:code>AXI</ns:code>
                       <ns:id>1</ns:id>
                       <ns:rqXML>
                        <!-- XML RQ Specific by API --> 
                       </ns:rqXML>
                   </ns:ProviderRQ>
                   <ns:ProviderRQ>
                       <ns:code>TEST</ns:code>
                       <ns:id>2</ns:id>
                       <ns:rqXML>
                             <!-- XML RQ Specific by API --> 
                       </ns:rqXML>
                   </ns:ProviderRQ>
               </ns:providerRQs>
           </ns:availRQ>
       </ns:Avail>
   </soapenv:Body>
</soapenv:Envelope>
~~~


### Availability RQ Description


| **Element**                   | **Number**  | **Type** | **Description** |
| ------------                  | ----------- | -------- | --------------- |
| Envelope                      |   1         |          | Root Node       |
| Header/Security/UserNameToken | 1           |          | Web Services Security UsernameToken Profile 1.0 |
| Body                          | 1           |          | Request Body    |
| timeoutMilliseconds           | 1           | Integer  | Maximum time in milliseconds awaiting possible responses |
| version                       | 1           | String   | API specification version (1) |
| providersRQs/ProviderRQ       | 1..n        |          | Supplier you wish to connect to |
| providersRQs/ProviderRQ/code  | 1           | String   | Supplier code|
| providersRQs/ProviderRQ/id    | 1           | String   | Id to correlate requests with responses |
| providersRQs/ProviderRQ/rqXML | 1           | String   | XML request specific by API |

 

### Availability RS Example

~~~xml
   <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <u:Timestamp u:Id="_0">
            <u:Created>2016-06-01T07:21:05.671Z</u:Created>
            <u:Expires>2016-06-01T07:26:05.671Z</u:Expires>
         </u:Timestamp>
      </o:Security>
   </s:Header>
   <s:Body>
      <AvailResponse xmlns="http://schemas.xmltravelgate.com/hub/2012/06">   <!-- Specific by API -->
         <AvailResult xmlns:i="http://www.w3.org/2001/XMLSchema-instance">     <!-- Specific by API -->
            <hubStatus>
               <code>1</code>
               <warnings i:nil="true"/>
               <exceptionString i:nil="true"/>
               <roleInstanceId>ne-0/HubFrontendWebRole_IN_1</roleInstanceId>
               <channelId i:nil="true"/>
               <messageWebRoleStats>
                  <startAtUtc>2016-06-01T07:21:04.8852599Z</startAtUtc>
                  <endAtUtc>2016-06-01T07:21:05.6716951Z</endAtUtc>
                  <execution>PT0.7864352S</execution>
                  <messageExpiresAtUtc>2016-06-01T07:21:29.8852599Z</messageExpiresAtUtc>
                  <getValidationConfiguration>PT0S</getValidationConfiguration>
                  <buildHubMessageRQ>PT0S</buildHubMessageRQ>
               </messageWebRoleStats>
            </hubStatus>
            <providerRSs>
               <ProviderRS>
                  <hubProviderStatus>
                     <channelId>http://100.86.112.84:10101/ServiceHotel</channelId>
                     <code>1</code>
                     <exceptionString i:nil="true"/>
                     <hubProviderError i:nil="true"/>
                     <invocationWorkerRoleStats>
                        <startAtUtc>2016-06-01T07:21:04.8706611Z</startAtUtc>
                        <receiveBrokeredMessageRQ>2016-06-01T07:21:04.8706611Z</receiveBrokeredMessageRQ>
                        <buildAssembly>PT0.0155795S</buildAssembly>
                        <buildInvokeRQ>PT0S</buildInvokeRQ>
                        <invoke>PT0.7869013S</invoke>
                        <invokeProvider>PT0.7869013S</invokeProvider>
                        <buildInvokeRS>PT0S</buildInvokeRS>
                        <buildBrokeredMessageRS>PT0S</buildBrokeredMessageRS>
                     </invocationWorkerRoleStats>
                     <roleInstanceId>HubTravelHotelWorkerRole_IN_0</roleInstanceId>
                  </hubProviderStatus>
                  <refId>1</refId>
                  <rs>
                   <!-- XML RS Specific by API -->
                  </rs>
                  <rsXML i:nil="true"/>
               </ProviderRS>
                <ProviderRS>
                  <hubProviderStatus>
                     <channelId>http://100.86.112.84:10101/ServiceHotel</channelId>
                     <code>1</code>
                     <exceptionString i:nil="true"/>
                     <hubProviderError i:nil="true"/>
                     <invocationWorkerRoleStats>
                        <startAtUtc>2016-06-01T07:21:04.8706611Z</startAtUtc>
                        <receiveBrokeredMessageRQ>2016-06-01T07:21:04.8706611Z</receiveBrokeredMessageRQ>
                        <buildAssembly>PT0.0155795S</buildAssembly>
                        <buildInvokeRQ>PT0S</buildInvokeRQ>
                        <invoke>PT0.7869013S</invoke>
                        <invokeProvider>PT0.7869013S</invokeProvider>
                        <buildInvokeRS>PT0S</buildInvokeRS>
                        <buildBrokeredMessageRS>PT0S</buildBrokeredMessageRS>
                     </invocationWorkerRoleStats>
                     <roleInstanceId>HubTravelHotelWorkerRole_IN_0</roleInstanceId>
                  </hubProviderStatus>
                  <refId>2</refId>
                  <rs>
                   <!-- XML RS Specific by API -->
                  </rs>
                  <rsXML i:nil="true"/>
               </ProviderRS>
            </providerRSs>
         </AvailResult>
      </AvailResponse>
   </s:Body>
</s:Envelope>
~~~


### Availability RS Description


| **Element**                                | **Number**  | **Type** | **Description** |
| ------------                               | ----------- | -------- | --------------- |
| Envelope                                   | 1           |          | Root Node       |
| Header/Security                            | 1           |          | Auto generated by SOAP framework based on Web Services Security UsernameToken Profile 1.0 |
| Body                                       | 1           |          | Response Body    |
| hubStatus                                  | 1           |          | Trace information only for XMLTravelgate purposes |
| providersRSs/ProviderRS                    | 1..n        |          | Response of suppliers requested |
| providersRSs/ProviderRS/hubProviderStatus  | 1           |          | Trace information only for XMLTravelgate purposes |
| providersRSs/ProviderRS/refId              | 1           | String   | Id to correlate response with request. It's a reference to the id set in request |
| providersRSs/ProviderRS/rsXML              | 1           | String   | XML response specific by API |

