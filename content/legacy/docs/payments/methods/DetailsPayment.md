+++
title = "Details Payment"
pagetitle = "Details Payment Call"
description = "Information about the DetailsPayment call"
icon = "fa-ellipsis-h"
weight = 3
alwaysopen = false
+++

# DetailsPayment

**Method Goals**
This method aims to return information about a payment that has been confirmed. Payment details can be search by transaction id or by date (only if provider allows it, check StaticConfiguration).

**Request Format**
The PaymentDetails request requires a TransactionId object.

**Response Format**
The response contains information about the payment transaction which refers to the TransactionId sent in the request.

## DetailsPaymentRQ Example

~~~xml
<DetailsPaymentRQ>
    <Transaction Id = "99999-53245-5483-4891" />
        <TransactionStartTime></TransactionStartTime>
        <TransactionEndTime></TransactionEndTime>
    </Transaction>
</DetailsPaymentRQ>
~~~

### DetailsPaymentRQ


|Element|Number|Type|Description|
| ----- | ----- | ----- | ----- |
|DetailsPaymentRQ|1| | Root node.|
|Transaction|1| | Contains information about the transaction to get details. |
|@Id|0..1| String | Transaction identifier to get details. Mandatory if no TransactionStartTime and TransactionEndTime are not informed. |
|Transaction/TransactionStartTime|0..1| Date | If searching transaction details by date, provides the start date. Mandatory if no transaction id informed. |
|Transaction/TransactionEndTime|0..1| Date | If searching transaction details by date, provides the end date. Mandatory if no transaction id informed. |

## DetailsPaymentRS Example

~~~xml
<DetailsPaymentRS>
    <Transactions>
        <Transaction Id = "99999-53245-5483-4891" IdType = "Final" Status = "Pending" PendingReason = "PendingCapture" StatusDescription = "Credited" >
            <MerchantReference>12346879</MerchantReference>
            <TransactionDate>2013-12-20T10:48:52.00000Z</TransactionDate>
            <RefundedCurrencyAmount CurrencyCode="EUR" Amount="2.00" />
            <CurrencyAmount CurrencyCode = "EUR" Amount = "2.20" />
            <SenderDetails Id = " ">
                <Email>test@example.com</Email>
                <Name>Max</Name>
                <Surname>Mustermann</Surname>
                <SenderBankDetails>
                    <Holder>Max Mustermann</Holder>
                    <BankAccount Number = " " SecurityCode = " " />
                    <CountryCode>ES</CountryCode>
                    <IBAN>DE11888888882222222222</IBAN>
                    <BIC>PNAGDE45920</BIC>
                </SenderBankDetails>
            </SenderDetails>
            <RecipientDetails Id = " ">
                <RecipientBankDetails>
                    <Holder>Erika Mustermann</Holder>
                    <BankAccount Number = " " SecurityCode = " " />
                    <CountryCode>ES</CountryCode>
                    <IBAN>DE16888888889999999999</IBAN>
                    <BIC>PNAGDE00000</BIC>
                </RecipientBankDetails>
            </RecipientDetails>
            <Fees>
                <Fee Id = " ">
                    <CurrencyAmount CurrencyCode = "EUR" Amount = "0.00" />
                    <ExchangeRate>1.0000</ExchangeRate>
                    <Description></Description>
                </Fee>
            </Fees>
            <Reasons>
                <Reason Id = " ">Payment of a hotel booking.</Reason>
            </Reasons>
            <PaymentItemsDetails>
                <Item Id = "123456789">
                    <Name>RH Bayern Hotel SPA</Name>
                    <Description>1 habitación doble. Fecha entrada: 09/10/2015 Fecha salida: 12/10/2015</Description>
                    <Date Start = "2015-10-09" End = "2015-10-12"/>
                    <Quantity>1</Quantity>
                    <CurrencyAmount CurrencyCode = "EUR" Amount = "303.50" />
                    <ImageUrl>http://media-cdn.tripadvisor.com/media/photo-s/04/2b/f8/eb/hotel-rh-bayren-i.jpg</ImageUrl>
                </Item>
            </PaymentItemsDetails>
        </Transaction>
    </Transactions>
</DetailsPaymentRS>
~~~

### DetailsPaymentRS


|Element|Number|Type|Description|
| ----- | ----- | ----- | ----- |
|DetailsPaymentRS|1| | Root node.|
|Transactions|1|  | Contains information about payment transactions. |
|Transaction/Transaction|1..n| | List of transaction. |
|@Id|1| String | Transaction identifier. |
|@IdType|1| String | Transaction Id type (possible values: "Expirable" or "Final"). If "Final", the transaction id will not change. If "Expirable", the transaction id returned is only valid until the ExpiryDate and the final id will be returned in other calls like CapturePayment. |
|@ExpiryDate|0..1| DateTime | Transaction id expiration date. Only returned if IdType = Expirable. |
|@Status|1| String | Transaction status (possible values: "Received", "Refunded", "Cancel", "Pending" or "Unknown"). |
|@PendingReason|0..1| String | If the transaction status is Pending, informs the reason of this status (possible values: "PendingCredit", "PendingCapture", "PendingVerification" or "Unknown"). |
|@StatusDescription|0..1| String | Additional information about the transaction status. |
|Transaction/MerchantReference|1| String | Payment reference in the merchants system. |
|Transaction/TransactionDate|1| DateTime | Transaction date. |
|Transaction/CurrencyAmount|1| CurrencyAmount | Contains the currency and the amount of the transaction. See [common elements](../common-elements/#CurrencyAmount)|
|Transaction/RefundedCurrencyAmount|0..1| CurrencyAmount | Contains the currency and the amount refunded in a transaction. See [common elements](../common-elements/#CurrencyAmount)|
|Transaction/SenderDetails|0..1| SenderDetails | Contains information about the payment sender. See [common elements](../common-elements/#SenderDetails). |
|Transaction/RecipientDetails|0..1| SenderDetails | Contains information about the payment recipient. See [common elements](../common-elements/#SenderDetails). |
|Transaction/Fees|0..1| Fees | Contains information about the transaction fees. See [common elements](../common-elements/#Fees)|
|Transaction/Reasons|0..1| Reasons | Reasons of the payment. This reasons are add to the transaction information if the provider admits it. See [common elements](../common-elements/#Reasons) |
|Transaction/PaymentItemsDetails|0..1| PaymentItemsDetails| Contains a list of items that are related to this payment. See [common elements](../common-elements/#PaymentItemsDetails). |
|Redirects|0..1| Redirects| Contains information about where to redirect the user if needed. See [common elements](../common-elements/#Redirects)|
