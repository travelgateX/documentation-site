---
title: Cancel
keywords: hotel, data structure, cancel
search: Hotel - Data Structure - Cancel
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/Cancel
---



### Method Goals


This method aims to cancel a booking



### Request Format


The request requires one or more of the following data depending on the supplier:

-   *Locators*: booking codes (this element contains two elements
    *Client* (client's booking code) and *Provider* (supplier's booking
    code), one or both will be required depending on the supplier)
-   *hotelCode*: the hotel code
-   *StartDate*: the check-in date
-   *EndDate*: the check-out date



### Response Format


The result returns a response with the booking status, the
cancellation's ID and the fee for that cancellation.



### Remarks


The maximum times permitted in our system before the connection
is closed is **180000** milliseconds.



### CancelRQ Example


~~~xml
    <CancelRQ  hotelCode="H1548">
        <Locators>
            <Client>AFH123OP567</Client>
            <Provider>YYYYYYYY</Provider>
        </Locators>
        <StartDate>15/10/2012</StartDate>
        <EndDate>20/10/2015</EndDate>
    </CancelRQ>
~~~


### CancelRQ Description



| **Element**			| **Number**	| **Type**	| **Description**					|
| ----------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| CancelRQ   			| 1          	|		| Root node.						|
| @hotelCode 			| 1    		| String	| Hotel code.						|
| Locators   			| 1          	|		| Locator Information (it's mandatory to indicate either the client or supplier's).	|
| Locators/Client		| 0..1 		| String	| Client locator.					|
| Locators/Provider		| 0..1 		| String	| Supplier locator.					|
| StartDate  			| 1    		| String	| Start date of booking.				|
| EndDate    			| 1    		| String	| End date of booking.					|




### CancelRS Example


~~~xml
    <CancelRS>
        <ProviderLocator>YYYYYYYY</ProviderLocator> 
        <CancelId>0000000</CancelId>
          <TransactionStatus>
                <ComunicationStatus>OK</ComunicationStatus>
                <RSStatus>EXISTE</RSStatus>
                <ResStatus>OK</ResStatus>
          </TransactionStatus>
         <Price  currency="EUR" amount="120.5" binding="false" commission="-1"/>
    </CancelRS>
~~~


### CancelRS Description



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| CancelRS   				| 1          	|		| Root node.							|
| ProviderLocator			| 1    		| String	| Supplier locator.						|
| CancelId   				| 0..1 		| String	| Cancellation id.  						|
| Price      				| 0..1       	|		| Fee for the cancellation. (see StaticConfiguration in order to verify if supplier informs of it).						|
| @currency  				| 1    		| String	| Currency code. 						|
| @amount    				| 1    		| Decimal	| Amount.  						|
| @binding   				| 1    		| Boolean	| Identifies if is the price is binding (When true the sale price returned **must** not be less than the price informed. |
| @commission				| 1    		| Decimal	| Commission ( -1 = not specified - indicated with the supplier contract, 0 = net price, X = % of the commission that applies to the amount).		|
| TransactionStatus			| 1          	|		| Transaction Status.						|
| TransactionStatus/ComunicationStatus	| 1    		| String	| Status communication (OFFLINE, OK and KO).			|
| TransactionStatus/RSStatus		| 1    		| String	| Status response: DESCONOCIDO - Unknown; EXISTE - Exists; EXISTECANCELADA - Cancelled; NO_EXISTE - Does not exist	|
| TransactionStatus/ResStatus		| 1    		| String	| Status of the booking (OK = confirmed, RQ = on request, CN = cancelled, UN = unknown).	|



