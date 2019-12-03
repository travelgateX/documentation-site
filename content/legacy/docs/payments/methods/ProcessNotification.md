+++
title = "Process Notification"
pagetitle = "Process Notification Call"
description = "Information about the ProcessNotification call"
icon = "fa-ellipsis-h"
weight = 10
alwaysopen = false
+++

**Method Goals**
This method aims to process the notification from a payment that has been created.

**Request Format**
The ProcessNotification request requires a HTTPResponse object.

**Response Format**
The response contains information about the notification that has been confirmed.

## ProcessNotificationRQ Example

~~~xml
<ProcessNotificationRQ>
    <HTTPResponse>
        <Status>HTTP/1.1 200 OK</Status>
        <Url>https://api.test.com/api/xml?seed=aaaaabbbbb1111122222</Url>
        <Seed>aaaaabbbbb1111122222</Seed>
        <Headers></Headers>
        <Body>&lt;status_notification&gt;&lt;transaction&gt;99999-53245-5483-4891&lt;/transaction&gt;&lt;time&gt;2010-04-14T19:01:08+02:00&lt;/time&gt;&lt;/status_notification&gt;</Body>
    </HTTPResponse>
</ProcessNotificationRQ>
~~~

### ProcessNotificationRQ

|Element|Number|Type|Description|
| -----| -----| -----| ----- |
|ProcessNotificationRQ|1| | Root node.|
|HTTPResponse|1| | Contains information of the notification sent by the provider. |
|HTTPResponse/Status|1| String | Status of the notification sent by the provider. |
|HTTPResponse/Url|1| String | Url of the notification sent by the provider. |
|HTTPResponse/Headers|1| String | Headers of the notification sent by the provider. |
|HTTPResponse/Body|1| String | Body of the notification sent by the provider. |
|HTTPResponse/Seed| 0..1 | String | Seed to check providers authentication. Only if provider allows it, check StaticConfiguration. |

## ProcessNotificationRS Example

~~~xml
<ProcessNotificationRS>
    <Notification Id = "" Type = "" TypeInformation = "" CreationDate="">
        <AuthenticationStatus>Success</AuthenticationStatus>
        <Transaction Id = "99999-53245-5483-4891" IdType = "Expirable" ExpiryDate = "2013-12-20T10:48:52.00000Z" Status = "Pending" PendingReason = "PendingCapture" StatusDescription = "credited">
            <MerchantReference>12346879</MerchantReference>
            <TransactionDate>2013-12-20T10:48:52.00000Z</TransactionDate>
            <CurrencyAmount CurrencyCode = "EUR" Amount = "2.20" />
            <AuthorizationCode>1951673</AuthorizationCode>
            <SenderDetails Id = " ">
                <Email>test@example.com</Email>
                <Name>Max</Name>
                <Surname>Mustermann</Surname>
                <SenderBankDetails>
                    <Holder>Max Mustermann</Holder>
                    <BankAccount Number = " " SecurityCode = " " />
                    <CountryCode></CountryCode>
                    <IBAN>DE11888888882222222222</IBAN>
                    <BIC>PNAGDE45920</BIC>
                </SenderBankDetails>
            </SenderDetails>
            <Fees>
                <Fee Id = " ">
                    <CurrencyAmount CurrencyCode = "EUR" Amount = "0.00" />
                    <ExchangeRate>1.0000</ExchangeRate>
                    <Description></Description>
                </Fee>
                <Fee />
                ...
            </Fees>
            <Reasons>
                <Reason Id = " "></Reason>
                <Reason Id = " "></Reason>
                ...
            </Reasons>
        </Transaction>
        <HTTPACK Mandatory = "true">
            <HTTPRequests>
                <HTTPRequest>
                    <Headers>Content-Type: application/json; charset=utf-8&amp;Expect: 100-continue&amp;Accept-Encoding: gzip&amp;Connection: Close</Headers>
                    <Body>{"result": {"data": {"status": "OK" }, "method": "pending", "signature": "QAEBk53nnp9...92oyR9fQpoIMGqHg==", "uuid": "1772f7f5-9f19-4e79-90bd-551d28bed6db" }, "version": "1.1"}</Body>
                    <Method>POST</Method>
                    <Protocol>HTTP/1.1</Protocol>
                </HTTPRequest>
            </HTTPRequests>
        </HTTPACK>
    </Notification>
</ProcessNotificationRS>
~~~

### ProcessNotificationRS


|Element|Number|Type|Description|
| -----| -----| -----| ----- |
|ProcessNotificationRS|1| | Root node.|
|Notification|1| | Contains information about the payment notification. |
|@Id|0..1| String | Notification identifier. |
|@Type|0..1| String | Notification Type (possible values: "Pending", "Refund", "Received" or "Cancel"). |
|@TypeInformation|0..1| String | Additional information of the notification type. |
|@CreationDate|0..1| Date | Notification creation date. |
|Notification/AuthenticationStatus|1| String | Informs of the authentication of the notification (possibles values: "Success" or "Fail"). |
|Notification/Transaction|0..1| | Contains information about the payment transaction. |
|@Id|0..1| | Transaction identifier. |
|@IdType|1| String | Transaction Id type (possible values: "Expirable" or "Final"). If "Final", the transaction id will not change. If "Expirable", the transaction id returned is only valid until the ExpiryDate and the final id will be returned in other calls like CapturePayment. |
|@ExpiryDate|0..1| DateTime | Transaction id expiration date. Only returned if IdType = Expirable. |
|@Status|0..1| String | Transaction status (possible value: "Pending", "Refunded", "Received", "Cancel" or "Unknown"). |
|@PendingReason|0..1| String | If the transaction status is Pending, informs the reason of this status (possible values: "PendingCredit", "PendingCapture", "PendingVerification" or "Unknown"). |
|@StatusDescription|0..1| String | Additional information about the transaction status. |
|Transaction|0..1|  | Information about the payment transaction. |
|Transaction/MerchantReference|1| String | Payment reference in the merchants system. |
|Transaction/TransactionDate|0..1| DateTime | Transaction date. |
|Transaction/CurrencyAmount|0..1| CurrencyAmount | Contains the currency and the amount of the transaction. See [common elements](../../common-elements/#currencyamount)|
|Transaction/AuthorizationCode|0..1| String | Contains the Authorization Code of the transaction. |
|Transaction/SenderDetails|0..1| SenderDetails | Contains information about the payment sender. See [common elements](../../common-elements/#senderdetails). |
|Transaction/Fees|0..1| Fees | Contains information about the transaction fees. See [common elements](../../common-elements/#fees)|
|Transaction/Reasons|0..1| Reasons | Reasons of the payment. This reasons are add to the transaction information if the provider admits it. See [common elements](../../common-elements/#reasons)|
|Notification/HTTPACK|1| Redirects | Contains information about the notification ACK. See [common elements](../../common-elements/#redirects)|
|@Mandatory|1| Boolean | Informs if the notification sent by the provider requires an ACK response. If true, respond to the providers notification with information in the HTTPRequest object. |
