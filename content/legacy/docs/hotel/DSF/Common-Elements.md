---
title: Common Elements
keywords: common elements, elements, hotel
search: Hotel - Data Structure - Common Elements
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/Common-Elements
---



This node will be in every request and response objects.

The request object contains the supplier's configuration, urls and
credentials.

The response object contains the status of the request and any possible errors as well as possible messages from the supplier (if previously requested).



### Common Elements RQ Example


~~~xml
    <HotelBaseRQ>
        <echoToken>TEST</echoToken>
        <timeoutMilliseconds>20000</timeoutMilliseconds>
        <source>
            <agencyCode>XXXX</agencyCode>
            <languageCode>es</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>true</registerTransactions>
        </filterAuditData>
        <optionsQuota>500</optionsQuota>
        <ContinuationToken expectedRange = "6000"></ContinuationToken>
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
        …
    </HotelBaseRQ>
~~~


### Common Elements RQ Description



| **Element**                          | **Number** | **Type** | **Description** |
| ------------------------------------ | ---------- | -------- | --------------- |
| HotelBaseRQ                          | 1          |          | Root node. |
| echoToken                            | 0..1       | String   | Echo token to be returned in response (used for test purposes only). 
| timeoutMilliseconds                  | 1          | Integer  | Maximum time for a response from the supplier's system. |
| source                               | 1          |          |  	Information about source requesting the operation. |
| source/agencyCode                    | 0..1       | String   |  	Agency code requesting the operation (deprecated). |
| source/languageCode                  | 1          | String   |  	Language code (ISO 3166-1 alpha-2) format lowercase. |
| filterAuditData                      | 1          |          | Activates transaction data sent & received in the supplier's native format. |
| filterAuditData/registerTransactions | 1          | Boolean  | Returns all the transactions (XMLs) exchanged with the supplier.|
| optionsQuota                         | 0..1       | Integer  | Sets the max number of options by MealPlan. |
| ContinuationToken                    | 0..1       | String   | Internal Token to identify the next set of HotelList or RoomList. |
| @expectedRange                       | 0..1       | Integer  |  	Number of hotels expected in HotelList call. |
| Configuration                        | 1          |          | The info required to access the supplier's system. |
| Configuration/User                   | 0..1       | String   | User code to connect to supplier. |
| Configuration/Password               | 0..1       | String   | Password for the connection. |
| Configuration/UrlGeneric             | 0..1       | String   | Supplier URL used for multiple methods.|
| Configuration/UrlAvail               | 0..1       | String   | Specific Url for Availability method. |
| Configuration/UrlValuation           | 0..1       | String   | Specific Url for Valuation method. |
| Configuration/UrlReservation         | 0..1       | String   | Specific Url for Reservation method. |
| Configuration/Parameters             | 0..1       |          | Parameters for additional information. |
| Configuration/Parameters/Parameter   | 0..n       |          | List of parameters. |
| @key                                 | 1          | String   | Contains the keyword/Id to identify a parameter. |
| @value                               | 1          | String   | Contains the parameter values |



### Detailed description

**optionsQuota:**

This new tag will be used only for those suppliers returning a very large number of options, about 20.000+ in the same response. In order to avoid this, the client can set the numbers of options wanted by MealPlan, as long as the supplier returns it in this call (see StaticConfiguration *ImplementsBusinessRules*). If the supplier has ImplementsBusinessRules = True, the client can then choose between differentbusiness rules to filter the options they are interested in (see in Avail). We also have established a system level limit, so that if the OptionsQuota set by the client is higher than the established limit we then use the smallest of those two values. 



### Common Elements RS Example


~~~xml
    <HotelBaseRS>
        <echoToken>TEST</echoToken>
        <OperationImplemented>true</OperationImplemented>
        <ContinuationToken expectedRange = "4000">&lt;?xml version="1.0" encoding="utf-16"?&gt;&lt;ContinuationToken&gt;&lt;ContinuationToken&gt;&lt;Version&gt;2.0&lt;/Version&gt;&lt;Type&gt;Table&lt;/Type&gt;&lt;NextPartitionKey&gt;1!24!bG93Y29zdGhvbGlkYXlfWk1U&lt;/NextPartitionKey&gt;&lt;NextRowKey&gt;1!40!bG93Y29zdGhvbGlkYXlfWk1UXzBoNFIlMjNvcXBr&lt;/NextRowKey&gt;&lt;TargetLocation&gt;Primary&lt;/TargetLocation&gt;&lt;/ContinuationToken&gt;&lt;/ContinuationToken&gt;</ContinuationToken>
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
| echoToken                         | 0..1       | String   | Echo token to be returned in response (used for test purposes only). |
| OperationImplemented              | 1          | Boolean  | Informs whether the method has been implemented by the supplier. |
| ContinuationToken                 | 0..1       | String   | Internal Token to identify the next set of HotelList or the next set of RoomList. |
| @expectedRange                    | 0..1       | Integer  | Number of hotels/rooms expected in HotelList/RoomList call. |
| applicationErrors                 | 0..n       |          | Application errors reported by supplier. |
| applicationErrors/type            | 1          | String   | Error Type as specified by XML Travelgate. |
| applicationErrors/code            | 1          | String   | Native error code reported by supplier. |
| applicationErrors/description     | 1          | String   | Error description. |
| auditData                         | 1          |          | Data sent & received in the supplier's native format.|
| auditData/transactions            | 0..n       |          | List of transactions data. |
| auditData/transactions/timeStamp  | 1          | Integer  | TimeStamp of each transaction. |
| auditData/transactions/RQ         | 1          | String   | Transaction Request. |
| auditData/transactions/RS         | 1          | String   | Transaction Response. |
| auditData/timeStamp                | 1          | Integer  | Time when the request has been processed.  |
| auditData/processTimeMilliseconds | 1          | Integer  | Process time in milliseconds |



### Detailed description


**ContinuationToken:**

This new tag is useful to split the hotel list or room list response. This is done
because there are suppliers with a large amount of hotels (over
200.000) or rooms (over 200.000). In those cases, the response has to be split in order to
retrieve all the hotels/rooms available. In case that ContinuationToken is not sent, the
HotelList and RoomList return a maximum of 200.000 hotels/rooms. Using this
ContinuationToken and the attribute *expectedRange* the client may
decide the number of hotels/rooms expected in each HotelList/RoomList call. If the
supplier has more than 200.000 hotels/rooms, in order to get 100% of the hotels/rooms available, the client will need to use the
ContinuationToken returned inside the HotelListRS/RoomListRS response until the
ContinuationToken field is no longer returned in the response (see the example
in Common Elements RS). Once the tag is not returned the hotel list or the room list are
complete. The value of this tag is an internal Token identifying
the next set of HotelList/RoomList to be returned.

**expectedRange** :

Specifies the hotel list range set by the client in each HotelList response.
The number of hotels returned is set in the expectedRange value, although it
is possible to get more hotels than requested. This means that
if the client requests 1000 hotels, the response may contain a range between
1000 to 1999 hotels. In the case this value is not set, the maximum
hotel range is 200.000. We strongly recommend using multiples of one thousand.

