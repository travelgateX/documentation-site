---
title: Refund
keywords: transportation, data structure, flights, refund
search: Transportation - Flights - Data Structure - Refund
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/flights/refund
---



### Method Goals


This method aims to refund tickets issued previously.



### Request Format


The request must indicate the tickets to be refunded, the refund operation desired (informative or process) and the refund type (fare, taxes, etc.).


### Response Format

The result returns a breakdown with all the amounts of the fare that will be refunded (Info) or that has been refunded (Process). The result returns also the tickets refunded (same ones of the request, only with the status updated), and it may return also a list of booking locators.


### Remarks


Not implemented by all suppliers.
For some suppliers the tickets must be refunded one by one (only one ticket would be allowed in the request). Other suppliers only allow to refund the whole booking, in which case it will only be necesarry to indicate one ticket with the PNR Locator of the Booking in it.


### RefundRQ Description



| **Element**						| **Number**| **Type**	| **Description**													|
| --------------------------------- | --------- | ----------|------------------------------------------------------------------	|
| RefundRQ              			| 1     	|			| Root node.|
| PenaltyAmount					    | 0..1     	| Decimal	| Penalty amount.|
| RefundProcess						| 1     	|			| Contains the operation process.|
| @process							| 1     	| [Refund Process Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#refund-process-type)	| Refund process type|
| RefundType						| 1     	|			| Contains the refund type.|
| @type								| 1     	|[Refund Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#refund-type) | Refund type|
| RefundAmounts			 			| 0..1     	|			| Contains the refund amounts|
| RefundAmounts/RefundAmount		| 1..n     	|			| Refund amounts.|
| @refundAmountType					| 1     	| [Refund Amount type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#refund-amount-type) 	| Refund amount type.|
| @amount							| 1     	| Decimal	| Amount value.|
| @amountCode						| 1     	| String	| Provider amount code.|
| Tickets							| 0..1		|			| Contains a list of the tickets to be refunded.|
| Tickets/Ticket					| 1..n		|			| Contains the details of the ticket.|
| @ticketNum						| 1			| String	| Ticket number.|
| @type								| 1			|[Ticket Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#ticket-type) | Ticket type|
| @status							| 1			|[Ticket Status type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#ticket-status-type)|Ticket Status type|
| @id								| 0..1		| Integer	| Unique identifier of the ticket.|
| @paxName							| 0..1		| String	| Passenger name.|
| @paxType							| 0..1		|[Passenger type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)|Passenger type based on the age of the passenger.|
| @url								| 0..1		| String	| Url.|
| Tickets/Ticket/PNRLoc				| 0..1		|			| Provider Locator associated to a Booking.|
| @code								| 1			| String	| Locator code.|


### RefundRS Description



| **Element**						| **Number**| **Type**	| **Description**													|
| --------------------------------- | --------- | ----------|------------------------------------------------------------------	|
| RefundRS                			| 1    		|			| Root node.|																							
| AmountBreakdown					| 1			|			| Breakdown of the fare amount.|
| @currency              			| 1 		| String	| Currency code of the fare.|
| @totalAmount           			| 1 		| Decimal	| Total amount. with taxes and other charges included.	|
| @notCommissionableAmount			| 0..1 		| Decimal	| Total amount that can not be commissioned.|
| @commission            			| 0..1 		| Decimal	| Commission.|
| AmountBreakdown/<br>ChargeBreakdowns						| 0..1   || Contains a list of breakdown amounts ( taxes, mandatory charges.. ).|
| AmountBreakdown/<br>ChargeBreakdowns/<br>ChargeBreakdown	| 1..n || Contains details of the BreakdownAmount.|
| @amount                			| 1    	 	| Decimal	| Charge amount.|
| @type                  			| 0..1 		| [Type of charge.](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#charge-type) | Type of charge. |
| @included							| 0..1		| Boolean	| If true, the charge is included to the total fare amount.|
| AmountBreakdown/<br>ChargeBreakdowns/<br>ChargeBreakdown/Concept | 0..1 || Contains details of the charge.|
| @id                    			| 0..1 		| String	| Unique id of the Concept.|
| @language              			| 0..1 		| String	| Language. ISO 3166-1 alpha-2 format lowercase.|
| @carrier              			| 0..1 		| String	| Carrier.|
| @code              				| 0..1 		| String	| Concept code.|
| AmountBreakdown/<br>ChargeBreakDowns/<br>ChargeBreakdown/Concept/Text | 0..1 | String | Remarks|
| AmountBreakdown/<br>ChargeBreakDowns/<br>ChargeBreakdown/Concept/Paragraph | 0..n || Contains a list of Sentences and titles.|
| @title							| 0..1		| String	| Title.|
| AmountBreakdown/<br>ChargeBreakDowns/<br>ChargeBreakdown/Concept/Paragraph/<br>Sentence | 0..n | String | Sentence|
| AmountBreakdown/<br>PaxBreakdown							| 1    || Contains a list of breakdown amounts for each passenger ( ADT amount, etc. ).|
| AmountBreakdown/<br>PaxBreakdowns/<br>PaxBreakdown		| 1..n || Contains details of breakdown amounts for each passenger.|
| @paxType               			| 1 		|[Passenger type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)|Passenger type|
| @amount                			| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger.|
| @taxes                 			| 1 		| Decimal	| If they exist, taxes are applied for this passenger type.|
| @taxesDU                			| 0..1 		| Decimal	| DU taxes.|
| @fees                				| 0..1 		| Decimal	| Fees.|
| AmountBreakdown/<br>PaxBreakdowns/PaxBreakdown/<br>Taxes	| 0..1 || Contains a list of Taxes.|
| AmountBreakdown/<br>PaxBreakdowns/PaxBreakdown/<br>Taxes/Tax | 1..n || Code and amount of each tax.|
| @code								| 1			| String	| Code.|
| @amount							| 1			| Decimal	| Amount.|								
| Tickets							| 1			|			| Contains a list of tickets associated to the booking.|
| Tickets/Ticket					| 1..n		|			| Contains the details of the ticket.|
| @ticketNum						| 1			| String	| Ticket number.|
| @type								| 1			|[Ticket Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#ticket-type) | Ticket type|
| @status							| 1			|[Ticket Status type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#ticket-status-type)|Ticket Status type|
| @id								| 0..1		| Integer	| Unique identifier of the ticket.|
| @paxName							| 0..1		| String	| Passenger name.|
| @paxType							| 0..1		|[Passenger type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)|Passenger type based on the age of the passenger.|
| @url								| 0..1		| String	| Url.|
| Tickets/Ticket/PNRLoc				| 0..1		|			| Provider Locator associated to a Booking.|
| @code								| 1			| String	| Locator code.|
| Locators               			| 0..1  	|    		| Contains a list of locators.|
| Locators/Locator               	| 1..n  	|    		| Contains details of the locator.|
| Locator/Id            			| 1  		| String 	| Unique identifier of the locator.|
| Locator/Type          			| 1  		| [Locator type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#locator-type)| The locator's type	| 




### RefundRQ Example


~~~xml
<RefundRQ penaltyAmount="0">
  <timeoutMilliseconds>18000</timeoutMilliseconds>
  <source>
    <languageCode>es</languageCode>
  </source>
  <filterAuditData>
    <registerTransactions>true</registerTransactions>
  </filterAuditData>
  <optionsQuota>0</optionsQuota>
  <Configuration providerCode="">
    <Credentials user="" password="">
      <UrlGeneric>xxxx</UrlGeneric>
    </Credentials>
    <Attributes>
      <Attribute key="" value="" />
    </Attributes>
   </Configuration>
  <ClientConfiguration agency="" mark="" businessLine="" mean="" accessLevel="" accessType="" currencyCode="" />
  <RefundProcess process="" />
  <RefundType type="" />
  <refundAmounts>
    <refundAmount refundAmountType="" amount="" amountCode="" />
  </refundAmounts>
  <Tickets>
    <Ticket ticketNum="">
      <PNRLoc code="" />
    </Ticket>
  </Tickets>
</RefundRQ>
~~~


### RefundRS Example

~~~xml
<RefundRS>
    <ResponseStatus tripType = "DEPARTURE" petitionType = "OW" status = "ok"/>
    <AmountBreakdown currency = "EUR" totalAmount = "15.00" nonCommissionableAmount = "0" commission = "-1">
        <PaxBreakdowns>
            <PaxBreakdown paxType = "ADT" amount = "5.00" taxes = "6.48" fees = "0" />
        </PaxBreakdowns>
    </AmountBreakdown>
    <Tickets>
        <Ticket
            id = "0"
            ticketNum = ""
            paxName = ""
            paxType = ""
            cancelled = "0"
            joined = "0"
            type = "eTicket"
            status = "Confirmed">
            <PNRLoc code = "xxxx"/>
        </Ticket>
        <RetrieveStatus>false</RetrieveStatus>
    </Tickets>
    <Locators>
        <Locator>
            <Id>xxxx</Id>
            <Type>PROVIDER</Type>
        </Locator>
    </Locators>
</RefundRS>
~~~