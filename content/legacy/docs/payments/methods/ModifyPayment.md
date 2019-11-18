# ModifyPayment

**Method Goals**
This method aims to change the specification of an already created payment. Providers could allow complete modification, no modification at all or even just the modification of some parameters of the payment.

**Request Format**
The ModifyPayment request requires an ationType, indicating the type of modification. As well as an identification of the payment to update and the new values.

**Response Format**
The response contains information about the payment that has been modified.

## ModifyPaymentRQ Example

~~~xml
<ModifyPaymentRQ>
    <Action>Modify</Action>
    <BillingAgreementDetails>
        <ReferenceID>9999-53245-4578-8421</ReferenceID>
        <BillingAgreementDescription>Billing Description</BillingAgreementDescription>
        <BillingAgreementMax CurrencyCode = "EUR" Amount = "23.50"/>
        <BillingAgreementStatus>Modify</BillingAgreementStatus>
        <PayerInfo>...</PayerInfo>
    </BillingAgreementDetails>
    <Transaction Id = "99999-53245-5483-4891">
        <MerchantReference>12346879</MerchantReference>
        <CurrencyAmount CurrencyCode = "EUR" Amount = "20.00" />
        <AuthorizationCode></AuthorizationCode>
        <SenderDetails Id = "PI8542256813" />
        <TransactionTokens>
            <Attribute key = "att1" value = ""/>
            ...
        </TransactionTokens>
    </Transaction>
</ModifyPaymentRQ>
~~~

### ModifyPaymentRQ


|Element|Number|Type|Description|
| -----| ----- | ----- | ----- |
|ModifyPaymentRQ|1| | Root node.|
|Action |1| String | Type of update, its values can be: "Modify", "Cancel", "Update", "Reactivate"|
|RecurringPaymentProfileDetails |0..1|  | Information used for recurring payments |
|RecurringPaymentProfileDetails/BillingStartDate |1| DateTime | Date when billing for this profile begins|
|RecurringPaymentProfileDetails/ProfileReference |1| String | Merchants own unique reference or invoice number|
|BillingAgreementDetails |0..1|  |  |
|BillingAgreementDetails/ReferenceID |1|  | Id of the billing agreement|
|BillingAgreementDetails/BillingAgreementDescription |1| | Description of the billing agreement |
|BillingAgreementDetails/BillingAgreementMax |1| CurrencyAmount | Maximum value allowed by the agreement. See [common elements](../common-elements/#CurrencyAmount)|
|BillingAgreementDetails/BillingAgreementStatus |1| string | Action to be applied to the billig agreement, valid values are "Modify", "Cancel", "Update", Reactivate" |
|BillingAgreementDetails/PayerInfo |1| SenderDetails | Information about the payer. See [common elements](../common-elements/#SenderDetails). |
|Transaction|1| | Contains information about the payment transaction to modify. |
|@Id|1| String | Transaction identifier. |
|Transaction/MerchantReference|1| String | Payment reference in the merchants system. |
|Transaction/CurrencyAmount|1| CurrencyAmount | Contains the new amount for the payment. See [common elements](../common-elements/#CurrencyAmount)|
|Transaction/AuthorizationCode|1| String | Contains the Authorization Code of the transaction. Necesary if returned in the ProcessNotificationRS. |
|Transaction/SenderDetails|0..1|SenderDetails| Contains information about the payment sender. Necesary if returned in the ProcessNotificationRS. See [common elements](../common-elements/#SenderDetails). |
|Transaction/PaymentItemsDetails|0..1|PaymentItemsDetails| Contains a list of items that are related to this payment. This items are add to the transaction information if the provider admits it, check StaticConfiguration. See [common elements](../common-elements/#PaymentItemsDetails). |
|Transaction/TransactionTokens|0..1|TransactionTokens|List of elements with additional data without specific place on the RQ. See [common elements](../common-elements/#TransactionTokens).|

## ModifyPaymentRS Example

~~~xml
<ModifyPaymentRS>
    <ProfileID>684214784</ProfileID>
    <BillingAgreementDetails>
        <ReferenceID>9999-53245-4578-8421</ReferenceID>
        <BillingAgreementDescription>Billing Description</BillingAgreementDescription>
        <BillingAgreementMax CurrencyCode = "EUR" Amount = "23.50"/>
        <BillingAgreementStatus>Modify</BillingAgreementStatus>
        <PayerInfo>...</PayerInfo>
    </BillingAgreementDetails>
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
</ModifyPaymentRS>
~~~

### ModifyPaymentRS


|Element|Number|Type|Description|
| -----| ----- | ----- | ----- |
|CapturePaymentRS|1| | Root node.|
|ProfileId |0..1| String |  |
|BillingAgreementDetails |0..1|  |  |
|BillingAgreementDetails/ReferenceID |1| String | Id of the billing agreement|
|BillingAgreementDetails/BillingAgreementDescription |1| String | Description of the billing agreement |
|BillingAgreementDetails/BillingAgreementMax |1| CurrencyAmount | Maximum value it will be paid. See [common elements](../common-elements/#CurrencyAmount)|
|BillingAgreementDetails/BillingAgreementStatus |1| string | Action to be applied to the billig agreement, valid values are "Modify", "Cancel", "Update", Reactivate" |
|BillingAgreementDetails/PayerInfo |1| SenderDetails | Information about the payer. See [common elements](../common-elements/#SenderDetails). |
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
|Transaction/Fees|0..1| Fees | Contains information about the transaction fees. See [common elements](../common-elements/#Fees)|
|Transaction/Reasons|0..1| Reasons | Reasons of the payment. This reasons are add to the transaction information if the provider admits it. See [common elements](../common-elements/#Reasons)|
|Redirects |0..1| Redirects | Information about where to redirect the user if needed. See [common elements](../common-elements/#Redirects)|
