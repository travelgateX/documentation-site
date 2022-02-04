+++
title= "CurrencyList"
keywords= "hotel, data structure, currency list, list"
search= "Hotel - Data Structure - CurrencyList"
sidebar= "mydoc_sidebar"
permalink= "/docs/hotel/DSF/CurrencyList"
weight = 7
icon = "fa-bitcoin"
+++



### Method Goals


This method returns a list of currencies the supplier supports in Avail.



### Request Format


The request does not require any elements. Empty request.



### Response Format


The result returns a list of currencies.


### CurrencyListRQ Example

In the request of this call it is only necessary to use the object: "HotelBaseRQ". You can find the info in the '[Common Elements](/connectiontypessellers/hotelpullsellers/methods/messages/common-elements/)' section.

~~~xml
    <CurrencyListRQ>
    </CurrencyListRQ>
~~~


**Important information about Number (Cardinal):**

Go to [Common-Elements](/connectiontypessellers/hotelpullsellers/methods/common-elements/#Important) for more information.


### CurrencyListRQ Description



| **Element**			| **Number**	| **Type**	| **Description**			|
| ----------------------------- | ------------- | ------------- | ------------------------------------- |
| CurrencyListRQ			| 1          	|		| Root node.				|




### CurrencyListRS Example


~~~xml
    <CurrencyListRS>
        <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
        <Currencies>
            <Currency>
                <Code>EUR</Code>
                <Name>Euro</Name>
            </Currency>
            <Currency>
                <Code>USD</Code>
                <Name>Dollar</Name>
            </Currency>
        </Currencies>
    </CurrencyListRS>
~~~


### CurrencyListRS Description



| **Element**			| **Number**	| **Type**	| **Description**			|
| ----------------------------- | ------------- | ------------- | ------------------------------------- |
| CurrencyListRS		| 1          	|		| Root node.       			|
| UpgradeUTCDate		| 1       	|	DateTime	| Indicates the update date of the information in UTC format.	|
| Currencies 			| 1           	|		| Contains a list of currencies.	|
| Currency   			| 0..n       	|		| Contains details of the currency.	|
| @code 			| 1    		| String	| ISO - 3 Code.    				|
| @Name 			| 1    		| String	| Name of the currency.			|



