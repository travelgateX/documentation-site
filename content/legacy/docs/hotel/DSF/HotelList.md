---
title: HotelList
keywords: hotel, data structure, hotel list, list
search: Hotel - Data Structure - HotelList
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/HotelList
---



### Method Goals


This method returns a list of hotels with basic information (code, name, address, phone, etc.) for each hotel



### Request Format


The request does not require any elements. Empty request.



### Response Format


The result returns a list of *Hotel* (hotels).



### Remarks


The maximum time permitted in our system before the connection is closed is **240000** milliseconds.

This method may be preloaded in **XML Travelgate**'s system if it takes more than 3 minutes to download.

The **ContinuationToken** can be used in this request - the specification can be found in the Common-Elements section_.



### HotelListRQ Example


~~~xml
    <HotelListRQ>
    </HotelListRQ>
~~~


### HotelListRQ Description



| **Element**		| **Number**	| **Type**	| **Description**	|
| --------------------- | ------------- | ------------- | --------------------- |
| HotelListRQ		| 1          	|		| Root node.		|
  


### HotelListRS Example


~~~xml
    <HotelListRS>
        <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
        <Hotels>
            <Hotel>
                <Code>5</Code>              
                <GiataId source = "http://urlGiata">1200</GiataId>
                <Name>BADAJOZ</Name>
                <Address>CTRA.NACIONAL V, KM 393</Address>
                <Airports>
                    <Airport>
                        <IATACode>BJZ</IATACode>
                    </Airport>
                </Airports>
                <Town>BADAJOZ</Town>
                <ZipCode>06002</ZipCode>
                <CountryISOCode>ES</CountryISOCode>
                <AvailDestination code = "06" name = "BADAJOZ"/>
                <GeographicDestination code = "06" name = "BADAJOZ" avail = "true"/>
                <Latitude>38.893839</Latitude>
                <Longitude>-7.014112</Longitude>
                <Contact>
                    <Email>badajoz@xxx.com</Email>
                    <Telephone>91425891</Telephone>
                    <Fax>910200200</Fax>
                </Contact>
                <CategoryCode>4 Estrellas</CategoryCode>
                <PaymentOptions cash="false" bankAcct="false">
                    <Cards>
                        <Card code="VI"/>
                        <Card code="AX"/>
                        <Card code="CA"/>  
                    </Cards> 
                <PaymentOptions/>               
                <ExclusiveDeal>true</ExclusiveDeal>     
                <PropertyCategory>
                     <Code>1</Code>
                     <Name>Hotel</Name>             
                </PropertyCategory>                 
            </Hotel>
            <Hotel>
                <Code>65#7</Code>
                <ProviderCode>7</ProviderCode>              
                <GiataId source = "http://urlGiata">1200</GiataId>
                <Name>ILLA</Name>
                <Address>AVDA. ILLA S/N</Address>
                <Town>HUELVA</Town>
                <ZipCode>21449</ZipCode>
                <CountryISOCode>ES</CountryISOCode>
                <AvailDestination code = "2" name = "HUELVA"/>
                <GeographicDestination code = "2" name = "HUELVA" avail = "true"/>
                <Latitude>37.207295</Latitude>
                <Longitude>-7.23768</Longitude>
                <Contact>
                    <Email>emailhotel@xxx.es</Email>
                    <Telephone>95124578</Telephone>
                    <Fax>910200200</Fax>
                </Contact>
                <CategoryCode>4 Estrellas</CategoryCode>   
                <PropertyCategory>
                     <Code>2</Code>
                     <Name>Home</Name>              
                </PropertyCategory>                 
            </Hotel>
            <Hotel>...</Hotel>
        </Hotels>
    </HotelListRS>
~~~


### HotelListRS Description



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| HotelListRS/UpgradeUTCDate		| 1       	|	DateTime	| Indicates the update date of the information in UTC format.	|
| HotelListRS/Hotels/Hotel		| 0..n       	|		| Root node. Hotel sheet.          				|
| Code       				| 1    		| String	| Internal code to perform availability and/or supplier code.	|
| ProviderCode				| 0..1 		| String	| Internal code established by the supplier (see StaticConfiguration). |
| GiataId    				| 0..1       	|		| Giata System ID.							|
| @source    				| 0..1 		| String	| Giata url	|
| @value     				| 0..1 		| String	| Giata code (more on detailed description)	|
| Name       				| 1    		| String	| Name.								|
| Address    				| 1    		| String	| Address.							|
| Airports 				| 0..1       	|		| List of airports.							|
| Airports/Airport			| 1..n       	|		| Specific airport near the hotel.	|
| Airports/Airport/IATACode		| 1    		| String	| IATA airport Code.								|
| Town       				| 1    		| String	| Town.								|
| ZipCode    				| 0..1    		| String	| ZipCode.							|
| CountryISOCode			| 1    		| String	| CountryISOCode.						|
| AvailDestination			| 0..1       	|		| Avail Destination (will only be returned if requested in availability, and the type is CTY).  |
| @code      				| 1    		| String	| Destination code.						|
| @name      				| 1    		| String	| Destination name.						|
| GeographicDestination			| 1          	|		| Geographic Destination.					|
| @code      				| 1    		| String	| Destination code.						|
| @name      				| 1    		| String	| Destination name.						|
| @avail      				| 1    		| Boolean	| Indicates if it is allowed in availability.		|
| Latitude   				| 0..1    		| String	| Latitude.							|
| Longitude  				| 0..1    		| String	| Longitude.							|
| Contact    				| 0..1          	|		| Contact.							|
| Contact/Email				| 1    		| String	| Email.							|
| Contact/Telephone			| 1    		| String	| Telephone.							|
| Contact/Fax				| 1    		| String	| Fax. 								|
| CategoryCode				| 1    		| String	| CategoryCode.							|
| Type       				| 0..1 		| String	| Hotel type: please see detailed description	|
| PaymentOptions			| 0..1 		| String	| Type of cards allowed by the supplier. This tag is only mandatory if payment type is different than *MerchantPay*.	|				|
| PaymentOptions/Cards/Cards		| 1          	|		| List of cards allowed.					|
| PaymentOptions/Cards/Card		| 1..n       	|		| Type of card allowed.    					|
| @code 				| 1    		| String	| Code card (see *Lists of Data* (VI,AX,BV,CA...)).		|
| ExclusiveDeal				| 0..1  	| Boolean	| Indicates that the Hotel has an Exclusive Deal.	|
| PropertyCategory			| 0..1       	|		| Hotels property type. Similar to <Type>, but on supplier's side.  |
| PropertyCategory/Code			| 1    		| String	| Supplier's property code.       				|
| PropertyCategory/Name			| 1    		| String	| Supplier's property name.					|
                     
 



### Detailed Description


**Giata Code:**

A Giata code is a hotel code that provides information of said hotel.
This code is common for all the suppliers.

*For example:*

For the supplier TravellingTest:

~~~xml
    <Hotel>
        <Code>5</Code>
        <GiataFormatCode>254</GiataFormatCodez>
        <Name>BADAJOZ</Name>
    </Hotel>
~~~

For the supplier TestOnTour:

~~~xml
    <Hotel>
        <Code>14</Code>
        <GiataFormatCode>254</GiataFormatCodez>
        <Name>BADAJOZ</Name>
    </Hotel>
~~~

Please note that for the same hotel, the internal code of each supplier is different, but the Giata code stays the same. Giata system it is an external company that does a generic mapping of all of the hotels information.



**AvailDestination & GeographicDestination:**

Please note that the code for these parameters needs to be the lowest destination level and these values are available in
AvailDestinationTree & GeographicDestinationTree respectively.



**Hotel types:**

H (Hotel)

A (apartment)

AH (apartment Hotel)

C (Club)

AT (agrotourism)

HS (hostel)

CA (House)

V (Ville)

B (Bungalows)

D (Disco club)



**Supplier Code:**

The hotel code can returned combined with other codes, like the city
code. In these case, it's necessary to perform an availability request.
I.e, if you are making an availability search by hotel code and, the
city code is also needed, our system will combine them so you can
use it in Availability request. In this case, the code will be the one
generated by us, combining the hotel code and the city code, and not
the supplier's native code. This can also happen with other code types
instead of city code (i.e. country code).In these cases we return
the *ProviderCode* tag containing the internal code used by the
supplier (see StaticConfiguration).



