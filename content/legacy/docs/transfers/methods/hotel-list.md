---
title: HotelList
keywords: transfers, hotel list, list
search: Transfers - Data Structure - HotelList
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/hotel-list
---


### Method Goals


This method aims to retrieve a list of the hotels that can be used as a
destination in the provider's system. The information details is
provided by the provider.



### Remarks


This method should be cached internally and only called once a week and
in most cases once a month. The information details is provided by the
provider.



### HotelListRQ Example


~~~xml
    <HotelListRQ xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
        <timeoutMilliseconds>900000</timeoutMilliseconds>
        <source>
            <agencyCode>test</agencyCode>
            <languageCode>es</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>false</registerTransactions>
        </filterAuditData>
        <Configuration codeProvider = "XXX">
            <Credentials user = "xxxx" password = "xxxxxxx">
                <UrlGeneric>xxxxxxxx</UrlGeneric>
                <UrlIdentification xsi:nil = "true"/>
                <UrlAvailability xsi:nil = "true"/>
                <UrlRateRule xsi:nil = "true"/>
                <UrlBook xsi:nil = "true"/>
                <UrlsSpecific xsi:nil = "true"/>
            </Credentials>
            <Attributes>
                <Attribute key = "XXX" value = "xxxxxx"/>
            </Attributes>
        </Configuration>
    </HotelListRQ>
~~~


### HotelListRQ Description


The request just contains the elements of BaseRQ.

| **Element**		| **Number**	| **Type**	| **Description**		|
| --------------------- | ------------- | ------------- | ----------------------------- |
| HotelListRQ        	| 1           	|		| Root node.			|



### HotelListRS Example


~~~xml
    <HotelListRS xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
        <auditData>
            <timeStamp>2014-09-11T17:46:22.3354117+02:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <Hotel
            code = "XXXX"
            name = "xxxxxxxxxx"
            type = "XXXX"
            address = "xxxxxxxx"
            town = "XXXXXX"
            postalCode = "07840"
            ISOCountryCode = "ES"
            lat = "39.73544"
            lon = "2.80332">
            <MinimumLevelDestination code = "XXXX"/>
            <ContactInfo email = "test@testmail.com" PhoneNmbr = "+34971249625" Fax = "+34971810719"/>
        </Hotel>
        <Hotel
            code = "XXXX"
            name = "xxxxxxxxxxx"
            type = "XXXX"
            address = "xxxxxxxxxxxx"
            town = "xxxxxxxx"
            postalCode = "07340"
            ISOCountryCode = "ES"
            lat = "39.70589"
            lon = "2.78973">
            <MinimumLevelDestination code = "XXXX"/>
            <ContactInfo email = "test@testmail.com" PhoneNmbr = "0034971762343" Fax = "0034971532645"/>
        </Hotel>
        ...
    </HotelListRS>
~~~


### HotelListRS Description


The result returns a list of the hotels that can be used as a
destination in the provider's system. Each of the retrieved Hotel
objects contain a basic information that make possible the corresponding
mapping on the client's system.



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| HotelListRS 				| 1            	|		| Root Node.							|
| HotelListRS/Hotel			| 1..n		| Hotel    	| Contains a list of hotels. Each hotel provides a basic information in order to make possible the mapping.	|
| @Hotel/code 				| 1  		| String   	| Contains the code that must be used in Availability in order to Search for this location.	|
| @Hotel/name 				| 1  		| String   	| It is the full name of the Hotel in the provider's system.	|
| @Hotel/type 				| 1  		| String   	| Indicates the category of the hotel. this information is specified by the provider.	|
| @Hotel/address			| 1  		| String   	| Contains the full address of the hotel. 			|
| @Hotel/town 				| 1  		| String   	| Indicates the town where the hotel belongs.			|
| @Hotel/postalCode			| 1  		| String   	| Indicates the postal code where the hotel belongs.		|
| @Hotel/ISOCountryCode			| 1  		| String   	| Indicates the country of the hotel in ISO format.		|
| @Hotel/lat  				| 1  		| String   	| Indicates the latitude coordinate of the hotel.		|
| @Hotel/log  				| 1  		| String   	| Indicates the longitude coordinate of the hotel.		|
| @Hotel/MinimumLevelDestination	| 1  		| MinimumLevel Destination | Contains information of the lower level destination that contains this hotel as a child. Not always this information is provided.	|
| @MinimumLevelDestination/code		| 1  		| String   	| Indicates the code of the destination.			|
| @MinimumLevelDestination/name		| 1  		| String   	| Indicates the name of the destination.			|
| @Hotel/ContactInfo			| 1  		| ContactInfo	| Contains the information necessary to contact the hotel.	|
| @ContactInfo/email			| 1  		| String   	| Indicates the email.						|
| @ContactInfo/PhoneNmbr		| 1  		| String   	| Indicates the phone number of the hotel.			|
| @ContactInfo/Fax			| 1  		| String   	| Indicates the fax of the hotel.				|
                         

