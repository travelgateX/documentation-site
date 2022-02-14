+++
title= "Lists of Data"
keywords= "hotel, data structure, list data"
search= "Hotel - Data Structure - Lists of Data"
sidebar= "mydoc_sidebar"
permalink= "/docs/hotel/DSF/ListData"
weight = 8
+++



### Method Goals


This paragraph aims to return all of the data lists used in our system: language codes, error codes,currency list, credit cards, nationality and market.


### Language Codes


| **Language**	| **Code**	|
| ------------- | ------------- |
|  English      | en		|
|  Spanish      | es		|
|  Portuguese   | pt		|
|  Italian      | it		|
|  French       | fr		|
|  German       | de		|
|  Brazilian    | br		|




### Error codes



| **Code**	| **Description**												|
| ------------- | ------------------------------------------------------------------------------------------------------------- |
|  101         	| Unspecified Error (Exception not controlled or not classified as controlled error). This could be caused by an integration error or an unexpected supplier response. 		|
|  102         	| Supplier Error.					|
|  103         	| Too many requests to the supplier.					|
|  104         	| Timeout (Timeout during the execution of an operation (look in the common attribute timeout )).		|
|  105         	| Communication Error. 		|
|  204         	| Supplier returns 0 results in availability.									|
|  205         	| The Supplier doesn't accept the distribution RQ.								|
|  206         	| The Supplier doesn't accept the dates RQ.									|
|  207         	| The Supplier doesn't accept the request RQ.									|
|  301         	| Option not found in policies.											|
|  302         	| Hotel Not Found in DescriptiveInfo.											|
|  303         	| Booking not confirmed in the supplier's system.											|
  



### Currency codes


Our system uses a standard ISO - 3 for all suppliers.



### Credit Cards



| **Codes**	| **Names**			|
| ------------- | ----------------------------- |
|  VI      	| Visa				|
|  AX      	| American Express		|
|  BC      	| BC Card			|
|  CA      	| MasterCard			|
|  CB      	| Carte Blanche			|
|  CU      	| China Union Pay		|
|  DS      	| Discover			|
|  DC      	| Diners Club			|
|  T       	| Carta Si			|
|  R       	| Carte Bleue			|
|  N       	| Dankort			|
|  L       	| Delta				|
|  E       	| Electron			|
|  JC      	| Japan Credit Bureau		|
|  TO      	| Maestro			|
|  S       	| Switch			|
|  EC      	| Electronic Cash		|
|  EU      	| EuroCard			|
|  TP      	| universal air travel card	|
|  OP      	| optima			|
|  ER      	| Air Canada/RnRoute		|
|  XS      	| access			|
|  O       	| others			|




### Currency codes


Our system uses a standard ISO - 3 for all suppliers.



### Markets


Most suppliers use a standard ISO - 3166_1_alfa_2, but it depends on each individual supplier.




### Nationality


We use a standard ISO - 3166_1_alfa_2.




### Payment Types


| **Codes**	| **Description**			|
| ------------- | ----------------------------- |
|  MerchantPay      	| The payment is managed by the supplier.				|
|  LaterPay      	| The payment is managed by the hotel. The customer will use a credit-card as a guarantee for the hotel and the payment will be completed at check in.		|
|  CardBookingPay      	| The payment is managed by the supplier. The payment is effectuated at the time of booking.			|
|  CardCheckInPay      	| The payment is managed by the supplier. The payment is effectuated at check in in the hotel.			|
|  PayX      	| The payment is managed by TravelgateX's payment system.			|


### Electronic Commerce Indicator Codes

#### Visa, American Express, Diners Club and JCB

| **ECI Value**	| **Description**	|
| ------------- | ------------- |
|  05           | 3DS authentication was successful, transactions are secured by 3DS.		|
|  06           | Authentication was attempted but was not or could not be completed; possible reasons being either the card or its Issuing Bank has yet to participate in 3DS.		|
|  07           | 3DS authentication is either failed or could not be attempted; possible reasons being both card and Issuing Bank are not secured by 3DS, technical errors, or improper configuration.		|

#### MasterCard

| **ECI Value**	| **Description**	|
| ------------- | ------------- |
|  00           | 3DS authentication is either failed or could not be attempted; possible reasons being both card and Issuing Bank are not secured by 3DS, technical errors, or improper configuration.		|
|  01           | 3DS authentication was attempted but was not or could not be completed; possible reasons being either the card or its Issuing Bank has yet to participate in 3DS, or cardholder ran out of time to authorize.		|
|  02           | 3DS authentication is successful.		|

### PARes Status

| **Status Value**	| **Description**	|
| -------------     | ----------------- |
|  Y                | Successful Authentication.	|
|  N                | Failed Authentication.		|
|  U                | Unable to complete Authentication.		|
|  A                | Successful Attempts Transaction.		|
|  B                | You can proceed to authorisation using the information received.		|
|  R                | Authentication Rejected.		|

### Card Enrollment Status

| **Status Value**	| **Description**	|
| -------------     | ----------------- |
|  Y                | Cardholder is enrolled. Bank is participating in 3-D Secure protocol and will return the ACSUrl.	|
|  N                | Cardholder Not Participating – Cardholder is not enrolled.		|
|  U                | Unavailable. The DS or ACS is not available for authentication at the time of the request.		|

### Signature Verification Status

| **Status Value**	| **Description**	|
| -------------     | ----------------- |
|  Y                | Signature of the PARes has been validated successfully.	|
|  N                | PARes could not be validated.	|


### Rate Conditions

| **Codes**	| **Description**			|
| ------------- | ----------------------------- |
| NonRefundable | Cancellation fee is a 100% from the moment the reservation is create|
| Older55 | Rate that can only be sold to people who are 55 yeasrs or older.|
| Older60 | Rate that can only be sold to people who are 60 yeasrs or older.|
| Older65 | Rate that can only be sold to people who are 65 yeasrs or older.|
| Package | Rate can't be sold separately from another product attached to it, such as a flight.|
| CanaryResident | Rate applicable to Canary Islands residents only.|
| BalearicResident | Rate applicable to Balearic Islands residents only.|
| largeFamily | Rate applied to large families and is determined by each supplier.Check *remarks* for more details.|
| honeymoon | Rate applied to those who just got married and is determined by each supplier. Check *remarks* for more details. |
| publicServant | Rate applicable to public servants only. |
| unemployed | Rate applied to those without work. |
| mobile | Rate applicable to options booked by mobile. |
| warranty | Rate applicable to options with cancellation warranty. |
