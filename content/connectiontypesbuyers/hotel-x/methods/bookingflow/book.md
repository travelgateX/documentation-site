{
"title": "Book",
"pagetitle": "Book",
"description": "How to perform a booking",
"icon": "fa-money",
"weight": 3,
"alwaysopen": false,
"default_ak": "8626cf56-e364-4fd1-4fe0-311e23ac6355",
"default_user": "",
"gists": [
    {
        "n":"1 Room",
        "g":"fb4cf9773a63b7bf222011c211de6b4a",
        "o":["graphiql"],
        "u":"xsolano",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
        ]
}

This Book operation requests a reservation confirmation for the specified optionId returned in Quote.

## Advanced criteria

Within the Query Variables, you should modify the optionRefId with the optionRefId value returned in the Quote response and send the Query with the other mandatory information.

Also, please specify advanced criteria if it’s necessary:

**auditTransactions:** It returns all the transactions exchanged with the supplier.
We recommend to set it to "true" for possible claiming purposes with the supplier - if set to "true", the system will return the logs from the Seller in the response.

{{% alert theme="info" %}} When making a booking, you get the **Book status** in the response of our API. There are 4 different status: 

1. ***OK***: The reservation was completed with no problems.

2. ***ON_REQUEST***: The reservation was completed but the product is still not available, so the reservation goes into a waiting list. It is the Buyer’s responsibility to check if the booking is OK.
 
3. ***UNKNOWN***: The reservation process through TGX was completed but due to a supplier error or a timeout, the reservation status is unknown. It is the Buyer’s responsibility to check if the booking is OK. 
 
4. ***PENDING_COMMIT***: The payment has been confirmed in provider's side, but is necessary to make a commit in order to confirm the reservation.  .{{% /alert %}}

## How to confirm a reservation

{{% graphiql-tabs %}}

fb4cf9773a63b7bf222011c211de6b4a
Please, bear in mind that the clientReference should be different for every test that you are performing.
/fb4cf9773a63b7bf222011c211de6b4a

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}



## Payment Card

The example of payment card input 
``` json
{
			"cardType": "VI",
			"holder": {
				"name": "test_name",
				"surname": "test_surname"
			},
			"number": "4874495143042809",
			"CVC": "330",
			"expire": {
				"month": 9,
				"year": 2028
			},
			"isVCC": true,
			"virtualCreditCard": {
				"activationDate": "2020-10-02",
				"deactivationDate": "2021-01-02",
				"currentBalance": 50.58,
				"currencyCode": "EUR"
			},
			"threeDomainSecurity": {
				"version": "1.0.1",
				"DSTransactionID": "transaction 1",
				"XID": "id123456",
				"ECI": "05",
				"CAVV": "CAVV",
				"payerResponse": "base64xml response",
				"payerResponseStatus": "AUTHENTICATION_SUCCESS",
				"cardEnrolledStatus": "CARD_ENROLLED",
				"merchantName": "test_name",
				"signatureStatus": "SIGNATURE_NOT_VALIDATED"
			}
		}
```
isVCC, virtualCreditCard and threeDomainSecurity, are all optionals

### isVCC

This field is optional, *isVCC = true* does not have to be mandatory to send 3DS or Virtual Credit Card, because neither of them is mandatory

### Strong Customer Authentication (3DS) 

The possible values for the threeDomainSecurity fields

#### Visa, American Express, Diners Club and JCB

| **ECI Value** | **Description**                                                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 05            | 3DS authentication was successful, transactions are secured by 3DS.                                                                                                                   |
| 06            | Authentication was attempted but was not or could not be completed; possible reasons being either the card or its Issuing Bank has yet to participate in 3DS.                         |
| 07            | 3DS authentication is either failed or could not be attempted; possible reasons being both card and Issuing Bank are not secured by 3DS, technical errors, or improper configuration. |

#### MasterCard

| **ECI Value** | **Description**                                                                                                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00            | 3DS authentication is either failed or could not be attempted; possible reasons being both card and Issuing Bank are not secured by 3DS, technical errors, or improper configuration.                         |
| 01            | 3DS authentication was attempted but was not or could not be completed; possible reasons being either the card or its Issuing Bank has yet to participate in 3DS, or cardholder ran out of time to authorize. |
| 02            | 3DS authentication is successful.                                                                                                                                                                             |

### Payer Response Status

| **Status Value**              | **Description**                                                  |
| ----------------------------- | ---------------------------------------------------------------- |
| AUTHENTICATION_SUCCESS        | Successful Authentication.                                       |
| AUTHENTICATION_FAILED         | Failed Authentication.                                           |
| AUTHENTICATION_INCOMPLETE     | Unable to complete Authentication.                               |
| TRANSACTION_ATTEMPT_SUCCESS_A | Successful Attempts Transaction.                                 |
| TRANSACTION_ATTEMPT_SUCCESS_B | You can proceed to authorisation using the information received. |
| AUTHENTICATION_REJECTED       | Authentication Rejected.                                         |



### Card Enrollment Status

| **Status Value**  | **Description**                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| CARD_ENROLLED     | Cardholder is enrolled. Bank is participating in 3-D Secure protocol and will return the ACSUrl. |
| CARD_NOT_ENROLLED | Cardholder Not Participating – Cardholder is not enrolled.                                       |
| CANT_AUTHENTICATE | Unavailable. The DS or ACS is not available for authentication at the time of the request.       |

### Signature Verification Status

| **Status Value**        | **Description**                                         |
| ----------------------- | ------------------------------------------------------- |
| SIGNATURE_VALIDATED     | Signature of the PARes has been validated successfully. |
| SIGNATURE_NOT_VALIDATED | PARes could not be validated.                           |

