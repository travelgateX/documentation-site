# CapturePayment

**Method Goals**
This method aims to capture a payment. Some providers require to capture the payment to transfer the funds to the merchant, in this case you will need to do a CapturePayment call. If this call is needed you will receive a pending reason as "PendingCapture" in the ProcessNotification o the DetailsPayment response.

**Request Format**
The CapturePayment request requires a TransactionId and a CurrencyAmount object.

**Response Format**
The response contains information about the payment that has been captured.

## CapturePaymentRQ Example

~~~xml
<CapturePaymentRQ>
    <Transaction Id = "99999-53245-5483-4891">
        <MerchantReference>12346879</MerchantReference>
        <CurrencyAmount CurrencyCode = "EUR" Amount = "20.00" />
        <AuthorizationCode></AuthorizationCode>
        <SenderDetails Id = "PI8542256813" />
        <PaymentItemsDetails>
            <Item Id = "123456789">
                <Name>RH Bayren Hotel SPA</Name>
                <Description>1 habitación doble. Fecha entrada: 09/10/2015 Fecha salida: 12/10/2015</Description>
                <Date Start = "2014-03-13" End = "2014-03-18"/>
                <Quantity>1</Quantity>
                <CurrencyAmount CurrencyCode = "EUR" Amount = "20.00"/>
                <ImageUrl>http://media-cdn.tripadvisor.com/media/photo-s/04/2b/f8/eb/hotel-rh-bayren-i.jpg</ImageUrl>
            </Item>
        </PaymentItemsDetails>
        <TransactionTokens>
            <Attribute key = "att1" value = ""/>
            ...
        </TransactionTokens>
    </Transaction>
</CapturePaymentRQ>
~~~

### CapturePaymentRQ


|Element|Number|Type|Description|
| -----| ----- | ----- | ----- |
|CapturePaymentRQ|1| | Root node.|
|Transaction|1| | Contains information about the payment transaction to capture. |
|@Id|1| String | Transaction identifier. |
|Transaction/MerchantReference|1| String | Payment reference in the merchants system. |
|Transaction/CurrencyAmount|1| CurrencyAmount | Contains the currency and the amount to capture. See [common elements](../common-elements/#CurrencyAmount) |
|Transaction/AuthorizationCode|1| String | Contains the Authorization Code of the transaction. Necesary if returned in the ProcessNotificationRS. |
|Transaction/SenderDetails|0..1|SenderDetails| Contains information about the payment sender. Necesary if returned in the ProcessNotificationRS. See [common elements](../common-elements/#SenderDetails).|
|Transaction/PaymentItemsDetails|0..1|PaymentItemsDetails| Contains a list of items that are related to this payment. This items are add to the transaction information if the provider admits it, check StaticConfiguration. See [common elements](../common-elements/#PaymentItemsDetails). |
|Transaction/NetworkDetails|0..1| NetworkDetails | Information about the payer configuration. Needed for PSD2 payments. See [common elements](../common-elements/#NetworkDetails). |
|Transaction/TransactionTokens|0..1|TransactionTokens|List of elements with additional data without specific place on the RQ. See [common elements](../common-elements/#TransactionTokens).|

## CapturePaymentRS Example

~~~xml
<CapturePaymentRS>
    <Transaction Id = "99999-53245-5483-4891" IdType = "Final" Status = "Success" StatusDescription = "credited">
        <TransactionDate>2013-12-20T10:48:52.00000Z</TransactionDate>
        <CurrencyAmount CurrencyCode = "EUR" Amount = "2.20"/>
        <AuthorizationCode>1951673</AuthorizationCode>
        <SenderDetails Id = " ">
            <Email>test@example.com</Email>
            <Name>Max</Name>
            <Surname>Mustermann</Surname>
            <SenderBankDetails>
                <Holder>Max Mustermann</Holder>
                <CountryCode>ES</CountryCode>
                <IBAN>DE11888888882222222222</IBAN>
                <BIC>PNAGDE45920</BIC>
            </SenderBankDetails>
        </SenderDetails>
        <Fees>
            <Fee Id = " ">
                <CurrencyAmount CurrencyCode = "EUR" Amount = "0.00"/>
                <ExchangeRate>1.0000</ExchangeRate>
                <Description></Description>
            </Fee>
        </Fees>
        <Reasons>
            <Reason Id = "Reference">123456798</Reason>
        </Reasons>
    </Transaction>
</CapturePaymentRS>
~~~

### CapturePaymentRS


|Element|Number|Type|Description|
| -----| ----- | ----- | ----- |
|CapturePaymentRS|1| | Root node.|
|Transaction|0..1|  | Contains information about the payment transaction. |
|@Id|1| String | Transaction identifier. |
|@IdType|1| String | Transaction Id type (possible values: "Expirable" or "Final"). If "Final", the transaction id will not change. If "Expirable", the transaction id returned is only valid until the ExpiryDate. |
|@ExpiryDate|0..1| DateTime | Transaction id expiration date. Only returned if IdType = Expirable. |
|@Status|1| String | Transaction status (possible value: "Success" or "Unknown"). |
|@StatusDescription|0..1| String | Additional information about the transaction status. |
|Transaction/TransactionDate|0..1| DateTime | Transaction date. |
|Transaction/CurrencyAmount|0..1|CurrencyAmount| Contains the currency and the amount of the transaction. See [common elements](../common-elements/#CurrencyAmount)|
|Transaction/AuthorizationCode|0..1| String | Contains the Authorization Code of the transaction. |
|Transaction/SenderDetails|0..1| SenderDetails | Contains information about the payment sender. See [common elements](../common-elements/#SenderDetails). |
|Transaction/Fees|0..1| Fees | Contains information about the transaction fees. See [common elements](../common-elements/#Fees) |
|Transaction/Reasons|0..1| Reasons | Reasons of the payment. This reasons are add to the transaction information if the provider admits it. See [common elements](../common-elements/#Reasons)|
