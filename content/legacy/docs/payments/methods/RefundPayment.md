+++
title = "Refund Payment"
pagetitle = "Refund Payment Call"
description = "Information about the Refund Payment call"
icon = "fa-ellipsis-h"
weight = 6
alwaysopen = false
+++

# RefundPayment

**Method Goals**
This method aims to refund a payment that has been confirmed.

**Request Format**
The RefundPayment request requires a TransactionId object and the amount to refund.

**Response Format**
The response contains information about the refund transaction.

## RefundPaymentRQ Example

~~~xml
<RefundPaymentRQ>
    <Transaction Id = "99999-55555-3333-4891">
        <CurrencyAmount CurrencyCode = "EUR" Amount = "2.20" />
        <SenderDetails>
            <SenderBankDetails>
                <Holder>Max Samplemerchant</Holder>
                <BankAccount Number = " " SecurityCode = " " />
                <CountryCode></CountryCode>
                <IBAN>DE11888888889999999999</IBAN>
                <BIC>PNAGDE00000</BIC>
            </SenderBankDetails>
        </SenderDetails>
        <Reason>
            <Reason Id = " ">Refund OrderID 123456</Reason>
            ...
        </Reason>
    </Transaction>
</RefundPaymentRQ>
~~~

### RefundPaymentRQ_ Description

|Element|Number|Type|Description|
| -----| -----| -----| ----- |
|RefundPaymentRQ|1| | Root node.|
|Transaction|1|  | Contains information about the refund transaction. |
|@Id|1| String | Transaction identifier of the payment to do a refund. |
|Transaction/CurrencyAmount|1| CurrencyAmount | Contains the currency and the amount to refund. See [common elements](../common-elements/#CurrencyAmount)|
|Transaction/SenderDetails|1| SenderDetails | Contains information about the sender of the refund. See [common elements](../common-elements/#SenderDetails). |
|Transaction/Reasons|0..1| Reasons | Reasons of the refund. This reasons are add to the refund transaction information if the provider admits it. See [common elements](../common-elements/#Reasons)|

## RefundPaymentRS Example

~~~xml
<RefundPaymentRS>
    <Transaction Id = "99999-33333-4444-5630" IdType = "Final" Status = "Success" StatusDescription = "Refunded">
        <PaymentTransaction Id = "99999-53245-5483-4891" />
        <CurrencyAmount CurrencyCode = "EUR" Amount = "2.20" />
        <RefundedCurrencyAmount CurrencyCode = "EUR" Amount = "1.00" />
        <TransactionDate>2013-12-05T16:31:59.00000Z</TransactionDate>
        <SenderDetails>
            <SenderBankDetails Id = " ">
                <Holder>Max Samplemerchant</Holder>
                <BankAccount Number = " " SecurityCode = " " />
                <BankName>Demo Bank<BankName>
                <CountryCode></CountryCode>
                <IBAN>DE11888888889999999999</IBAN>
                <BIC>PNAGDE00000</BIC>
            </SenderBankDetails>
        </SenderDetails>
        <RecipientDetails>
            <RecipientBankDetails>
                <Holder>Max Mustermann</Holder>
                <BankAccount Number = " " SecurityCode = " " />
                <BankName><BankName>
                <CountryCode></CountryCode>
                <IBAN>DE11888888882222222222</IBAN>
                <BIC>PNAGDE45920</BIC>
            </RecipientBankDetails>
         </RecipientDetails>
        <Fees>
            <Fee Id = " ">
                <CurrencyAmount CurrencyCode = "EUR" Amount = "0.00"/>
                <ExchangeRate>1.0000</ExchangeRate>
                <Description></Description>
            </Fee>
            ...
        </Fees>
        <Reasons>
            <Reason Id = " ">Refund OrderID 123456</Reason>
            ...
        </Reasons>
    </Transaction>
    <Redirects>
        <HTTPRequests>
        <HTTPRequest>
            <Url>https://redirect-url.com/</Url>
            <Method>POST</Method>
            <Protocol>HTTP/1.1</Protocol>
            <FormInputs>
            <Input key = "input1" value = "value1"/>
            <Input key = "input2" value = "value2"/>
            </FormInputs>
        </HTTPRequest>
        </HTTPRequests>
    </Redirects>
</RefundPaymentRS>
~~~

### RefundPaymentRS

|Element|Number|Type|Description|
| -----| -----| -----| ----- |
|RefundPaymentRS|1| | Root node.|
|Transaction|1| | Contains information about the refund transaction. |
|@Id|1| String | Refund transaction identifier if informed by provider. In other case this will contain the payment transaction identifier. |
|@IdType|1| String | Transaction Id type (possible values: "Expirable" or "Final"). If "Final", the transaction id will not change. If "Expirable", the transaction id returned is only valid until the ExpiryDate. |
|@ExpiryDate|0..1| DateTime | Transaction id expiration date. Only returned if IdType = Expirable. |
|@Status|1| String | Transaction status (possible value: "Success" or "Unknown"). |
|@StatusDescription|0..1| String | Additional information about the transaction status. |
|Transaction/PaymentTransaction|1| | Contains information about the payment refund. |
|@Id|1| String | Payment transaction identifier. |
|Transaction/CurrencyAmount|0..1| CurrencyAmount | Contains the currency and the amount of the payment transaction. See [common elements](../common-elements/#CurrencyAmount)|
|Transaction/RefundedCurrencyAmount|0..1| CurrencyAmount | Contains the currency and the amount of the refund transaction. See [common elements](../common-elements/#CurrencyAmount)|
|Transaction/TransactionDate|1| DateTime | Refund transaction date. |
|Transaction/SenderDetails|0..1| SenderDetails | Contains information about the refund sender. See [common elements](../common-elements/#SenderDetails). |
|Transaction/RecipientDetails|0..1| SenderDetails | Contains information about the refund recipient. Uses the same schema as the Sender Details. See [common elements](../common-elements/#SenderDetails). |
|Transaction/Fees|0..1| Fees | Contains information about the refund fees. See [common elements](../common-elements/#Fees)|
|Transaction/Reasons|0..1| Reasons | Reasons of the refund. See [common elements](../common-elements/#Reasons)|
|Redirects |0..1| Redirects | Information about how to redirect the user if needed. See [common elements](../common-elements/#Redirects)|
