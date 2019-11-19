+++
title = "Common Structure"
pagetitle = "Common structure on all calls"
description = "List of the most repeated elements across diferent calls"
icon = "fa-list"
weight = 3
alwaysopen = false
+++

The following structure will be common through all transactions.
Additionally every operation will have it's specific elements.

The request objects contains the supplier's configuration, urls and credentials.
The response object contains the operation details and errors if any.

## Common Structure RQ Example

~~~xml
<MethodRQ>
    <timeoutMilliseconds>60000</timeoutMilliseconds>
    <source>
        <languageCode>es</languageCode>
    </source>
    <filterAuditData>
        <registerTransactions>false</registerTransactions>
    </filterAuditData>
    <Configuration codeProvider = "SFT">
        <Credentials user = "test53245" password = "pn_test_1">
            <UrlGeneric>https://providerurl.com/api</UrlGeneric>
            <UrlTransactionReport>https://providerurl.com/report</UrlTransactionReport>
        </Credentials>
        <Attributes>
            <Attribute key = " " value = " "/>
            ...
        </Attributes>
    </Configuration>
    <BaseCallBacks>
        <Urls>
            <Url Type="Success" Label="myLabel">http://travelgatex.com/callback</Url>
            ...
        </Urls>
    </BaseCallBacks>
</MethodRQ>
~~~

### Common Structure RQ Description

|Element|Number|Type|Description|
| ----- | ----- | ----- | ----- |
|MethodRQ|1| | Root node. It's tag won't be MethodRQ but the actual method rq root node name. CreatePaymentRQ, CapturePaymentRQ, ... |
|timeoutMillisencods|1|Integer | Timeout in milliseconds that client will be waiting the response. |
|source|1| | Information about source requesting the operation. |
|source/languageCode|1|String |Language code (ISO 3166-1 alpha-2) format. |
|source/agencyCode|1|String |Client's agency code |
|filterAuditData|1| | Information about enable or disable information returned in audit data. |
|filterAuditData/registerTransactions|1|Boolean | If true, registers the transactions with provider. |
|Configuration|1| | Information about source requesting the operation. |
|@codeProvider|1|String | Agency code of the Provider. |
|Configuration/Credentials|1| | Provider credentials. |
|@User|0..1| String | User code for connection. |
|@Password|0..1| String | Password for connection. |
|Configuration/Credentials/UrlGeneric|0..1| String | Url generic for connection. |
|Configuration/Credentials/UrlTransactionReport|0..1| String | Url for connection to provider reports |
|Configuration/Attributes|0..1| |Parameters for additional information. |
|Configuration/Attributes/Attribute|1..n| | List of Attributes. |
|@key|1| String | Contains the keyword/Id to identify a parameter. |
|@value|1| String | Contains the value of the parameter|
|@mandatory|0..1| boolean | Indicates if the attribute is mandatory in all calls or not|
|BaseCallBacks| 1 | | Contains information about the payment redirection of the client from the providers web page. |
|BaseCallBacks/Urls| 1 |  | [List of Url] Contains information about urls to redirect the client from the providers web page. |
|BaseCallBacks/Urls/Url| 1..n | String | Contains information of where the provider will redirect the client of the payment goes good or wrong. |
|@Type| 1 | String | Type of the Url (possible values: "Success", "Fail" or "Notification"). |
|@Status| 0..1 | String | If the Url type is Notification, you can define what type of notification you what to receive in this Url. Only if provider allows it, check StaticConfiguration. (possible values: "Received", "Denied", "Refunded" or "Pending"). |

## Common Structure RS Example

~~~xml
<MethodRS>
    <operationImplemented>true</operationImplemented>
    <Success>True</Success>
    <Warnings>
        <Warning Code="123">Warning Description</Warning>
        ...
    </Warnings>
    <Errors>
        <Error Code = "101" ShortText = "3">Unable to make a reservation</Error>
        ...
    </Errors>
    <auditData>
        <transactions>
            <Transaction>
                <timeStamp>2011-10-6T15:19:45.3544495+02:00</timeStamp>
                <RQ />
                <RS />
            </Transaction>
        </transactions>
        <timeStamp>2013-11-18T15:19:43.4014745+02:00</timeStamp>
        <processTimeMilliseconds>19532</processTimeMilliseconds>
    </auditData>
</MethodRS>
~~~

### Common Structure RS Description

|Element|Number|Type|Description|
| ----- | ----- | ----- | ----- |
|MethodRS|1| | Root node. It's tag won't be MethosRS but the actual method rs root node name. CreatePaymentRS, CapturePaymentRS, ... |
|OperationImplemented|1| Boolean | If the operation is implemented by this provider or not. |
|Success|1| String | Indicates the result of the action. |
|Warnings|0..1| | List of warnings reported by provider. |
|Warnings/Warning| 1..n | String | Warning description |
|@Code| 1 | String | Typified warning of TravelgateX. |
|Errors|0..1| | List of errors reported by provider. |
|Errors/Error|1..n| String | Error description |
|@Code|1| String | Typified error of TravelgateX. |
|@ShortText|1| String |Native error code reported by provider. |
|auditData|1| | Information about processing that transaction. |
|auditData/transactions|0..1| | List of transactions communicated with provider. |
|auditData/transactions/transaction|1..n| | Transaction communicated with provider. |
|auditData/transactions/transaction/timeStamp|1| Integer | TimeStamp in which has been generated that transaction. |
|auditData/transactions/transaction/RQ|1| String | Transaction Request. |
|auditData/transactions/transaction/RS|1| String | Transaction Response. |
|auditData/timeStamp|1| Integer | TimeStamp which response has been generated. |
|auditData/processTimeMilliseconds|1| Integer | Time in milliseconds consumed by this method. |
