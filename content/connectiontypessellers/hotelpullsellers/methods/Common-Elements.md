+++
title= "Common Elements"
keywords= "common elements, elements, hotel"
search= "Hotel - Data Structure - Common Elements"
sidebar= "mydoc_sidebar"
permalink= "/docs/hotel/DSF/Common-Elements"
weight = 3
icon = "fa-repeat"
+++



This node will be in every request and response objects.

The request object contains the supplier's configuration, urls and
credentials.

The response object contains the status of the request and any possible errors as well as possible messages from the supplier (if previously requested).



### Common Elements RQ Example

~~~xml
    <HotelBaseRQ>
        <timeoutMilliseconds>20000</timeoutMilliseconds>
        <source>
            <agencyCode>XXXX</agencyCode>
            <languageCode>es</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>true</registerTransactions>
        </filterAuditData>
        <Configuration>
            <UrlGeneric>www.supplier.com</UrlGeneric>
            <Parameters>
                <Parameter key = "SegundoPW" value = "PWXML"/>
                <Parameter key = "User" value = "userXML"/>
                <Parameter key = "Password" value = "passwordXML"/>
            </Parameters>
        </Configuration>
        …
    </HotelBaseRQ>
~~~



### Important

{{% alert theme="warning" %}}**Cardinal Number**: 

Indicates the number or quantity of elements of a set, whether this quantity is finite. And at the same time, whether or not it is mandatory.

> -  1 = Mandatory (One)
> -  1..n = Mandatory (One-to-Many)
> -  0 = Optional (Zero)
> -  0..n = Optional (Zero-to-Many)
{{% /alert %}}



### Common Elements RQ Description


| **Element**                          | **Number** | **Type** | **Description** |
| ------------------------------------ | ---------- | -------- | --------------- |
| HotelBaseRQ                          | 1          |          | Root node. |
| timeoutMilliseconds                  | 1          | Integer  | Maximum time for a response from the supplier's system. |
| source /                             | 1          |          |  	Information about source requesting the operation. |
| source /agencyCode                   | 0..1       | String   |  	Agency code requesting the operation (deprecated). |
| source /languageCode                 | 1          | String   |  	Language code (ISO 3166-1 alpha-2) format lowercase. |
| filterAuditData /                    | 1          |          | Activates transaction data sent & received in the supplier's native format. |
| filterAuditData /registerTransactions | 1          | Boolean  | Returns all the transactions (XMLs) exchanged with the supplier. |
| Configuration /                      | 1          |          | The info required to access the supplier's system. |
| Configuration /UrlGeneric            | 0..1       | String   | Supplier URL used for multiple methods.|
| Configuration /Parameters /          | 0..1       |          | Parameters for additional information. |
| Configuration /Parameters /Parameter | 0..n       |          | List of parameters. |
| @key                                 | 1          | String   | Contains the keyword/Id to identify a parameter. |
| @value                               | 1          | String   | Contains the parameter values |



### Common Elements RS Example

~~~xml
    <HotelBaseRS>
        <operationImplemented>true</operationImplemented>
        <applicationErrors>
            <type>102</type>
            <code>xxx</code>
            <description>xxx</description>
        </applicationErrors>
        …
        <auditData>
            <transactions>
                <timeStamp>2011-10-6T15:19:45.3544495+02:00</timeStamp>
                <RQ/>
                <RS/>
            </transactions>
            …
            <timeStamp>2011-10-26T15:19:43.4014745+02:00</timeStamp>
            <processTimeMilliseconds>19532</processTimeMilliseconds>
        </auditData>
        …
    </HotelBaseRS>
~~~



### Common Elements RS Description


| **Element**                       | **Number** | **Type** | **Description**|
| --------------------------------- | ---------- | -------- | -------------- |
| HotelBaseRS                       | 1          |          | Root node.     |
| operationImplemented              | 1          | Boolean  | Informs whether the method has been implemented by the supplier. |
| applicationErrors /                | 0..n       |          | Application errors reported by supplier. |
| applicationErrors /type            | 1          | String   | [Error Type as specified by XML Travelgate](/connectiontypessellers/hotelpullsellers/listsdata/#error-codes). |
| applicationErrors /code            | 1          | String   | Native error code reported by supplier. |
| applicationErrors /description     | 1          | String   | Error description. |
| auditData /                        | 1          |          | Data sent & received in the supplier's native format.|
| auditData /transactions /          | 0..n       |          | List of transactions data. |
| auditData /transactions /timeStamp | 1          | Integer  | TimeStamp of each transaction. |
| auditData /transactions /RQ        | 1          | String   | Transaction Request. |
| auditData /transactions /RS        | 1          | String   | Transaction Response. |
| auditData /timeStamp               | 1          | Integer  | Time when the request has been processed.  |
| auditData /processTimeMilliseconds | 1          | Integer  | Process time in milliseconds |





