# CreatePayment 

**Method Goals**
This method aims to create a payment request of the indicated amount.

**Request Format**
The CreatePayment request requires a Transaction object.

**Response Format**
The response contains a payment Id and a url to redirect the customer. If the payment doesn't require the clients redirect it won't return the "Redirects" object and will return information about the payment.

## CreatePaymentRQ Example

~~~xml
<CreatePaymentRQ>
    <Configuracion/>
    <BaseCallBacks/>
    <TransactionDetails Id="4235669432">
        <SenderDetails>
            <SenderBankDetails>
                <Holder>Max Mustermann</Holder>
                <BankAccount Number = " " SecurityCode = " "/>
                <CountryCode></CountryCode>
                <IBAN>DE11888888882222222222</IBAN>
                <BIC>PNAGDE45920</BIC>
            </SenderBankDetails>
        </SenderDetails>
    </TransactionDetails>
    <CurrencyAmount CurrencyCode = "EUR" Amount = "2.20"/>
    <MerchantReference>12346879</MerchantReference>
    <Reasons>
        <Reason Id = "Reference">123456798</Reason>
        <Reason Id = " "></Reason>
        ... 
    </Reasons>
    <PaymentItemsDetails>
        <Item Id = "123456789">
            <Name>RH Bayren Hotel SPA</Name>
            <Description>1 habitación doble. Fecha entrada: 09/10/2015 Fecha salida: 12/10/2015</Description>
            <Date Start = "2014-03-13" End = "2014-03-18"/>
            <Quantity>1</Quantity>
            <CurrencyAmount CurrencyCode = "EUR" Amount = "303.50"/>
            <ImageUrl>http://media-cdn.tripadvisor.com/media/photo-s/04/2b/f8/eb/hotel-rh-bayren-i.jpg</ImageUrl>
        </Item>
    </PaymentItemsDetails>
    <CallBacks>
        <Seed>a35gv5yj0173ljni565aertcs</Seed>
        <Urls>
            <Url type = "Success">https://www.example.com/payment/success.php</Url>
            <Url type = "Fail">https://www.example.com/payment/abort.php</Url>
            <Url type = "Notification" Status = "Received">https://www.example.com/notify.php</Url>
        </Urls>
    </CallBacks>
</CreatePaymentRQ>
~~~

### CreatePaymentRQ


|Element|Number|Type|Description|
| ----- | ----- | ----- | ----- |
|CreatePaymentRQ|1| | Root node.|
|AgencyCode| 0..1| String | If necessary, code of the agency related to the payment.|
|TransactionDetails| 0..1| | Information related to the payment|
|@Id| 0..1 | String | Id of the transaction. |
|TransactionDetails/SenderDetails|1| SenderDetails | Contains information about the payment sender. See [common elements](../common-elements/#SenderDetails). |
|TransactionDetails/RecipientDetalis|1| SenderDetails | Contains information about the payment receiver. See [common elements](../common-elements/#SenderDetails). |
|TransactionDetails/Participants|0..1| | All parties involved in the payment |
|TransactionDetails/Participants/Participant|1..n| SenderDetails | List of details of all parties involved in the transaction.  See [common elements](../common-elements/#SenderDetails). |
|TransactionDetails/ProductDetails|0..1| | Information about the product purchased |
|TransactionDetails/ProductDetails/TravelDetails|1| | Information about the flights |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/|1| | List of all flights |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo|1..n| | Information about individual flights. |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/FlightNumber |1| String | Number of the flight. |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/CompanyName |1| String | Name of the flight company. |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/Arrival |0..1| | Information about the arrival flight. |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/Arrival/Terminal |1| String | Arrival Flight Terminal. |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/Arrival/Date |1| DateTime| Arrival Flight Date. |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/Arrival/Country |1| String | Arrival Fligth Country. |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/Departure |0..1| | Information about departure flight. |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/Departure/Terminal |1| String | Depature Flight Terminal. |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/Departure/Date |1| DateTime| Departure Flight Date |
|TransactionDetails/ProductDetails/TravelDetails/FlightsList/FlightInfo/Departure/Country |1| String | Departure Flight Country |
|TransactionDetails/BillingType|0..1| String | Allowed values: "RecurringPayment", "ReferenceTransaction", "CreateBillingAgreement", "DoCheckoutAndCreateBillingAgreement", "Boleto", "DirectDebit", "Installments". |
|TransactionDetails/numInstallments|0..1| Integer |  |
|TransactionDetails/LoginToken|0..1| String | Value needed if login requires token. |
|TransactionDetails/deliveryDate|0..1| DateTime | Date in which the payment will take effect. |
|TransactionDetails/NetworkDetails|0..1| NetworkDetails | Information about the payer configuration. Needed for PSD2 payments. See [common elements](../common-elements/#NetworkDetails) |
|TransactionDetails/TransactionTokens|0..1| Attributes | List of attributes with extra data needed for the payment. See [common elements](../common-elements/#TransactionTokens). |
|CreditCardDetails|0..1| | Information about the credit card used for the payment. |
|CreditCardDetails/Number|0..1| String | Number of the CC. Either Number and Security Code must be provided. |
|CreditCardDetails/SecurityCode|0..1| String | Security code of the CC. Either Number and Security code or Token must be provided. |
|CreditCardDetails/Token|0..1| String | Card information as token if it has been tokenized. Either Token or Number and Security Code must be provided.|
|CreditCardDetails/Register|0..1| boolean | |
|CreditCardDetails/ExpiryMonth|0..1| String | Month of expiration of the CC. |
|CreditCardDetails/ExpiryYear|0..1| String | Year of expiration of the CC. |
|CreditCardDetails/CardHolderDetails|0..1| SenderDetails | Information about the card holder. See [common elements](../common-elements/#SenderDetails).|
|CurrencyAmount|1| CurrencyAmount | Contains the currency and the amount of the transaction. See [common elements](../common-elements/#CurrencyAmount)|
|Reasons|0..1| Reasons | Reasons of the payment. This reasons are add to the transaction information if the provider admits it. |
|PaymentItemsDetails|0..1| PaymentItemsDetails| Contains a list of items that are related to this payment. This items are add to the transaction information if the provider admits it, check StaticConfiguration. See [common elements](../common-elements/#PaymentItemsDetails). |
|CallBacks| 1 |  | Contains information about the payment redirection of the client from the providers web page. (Obsolete: Use BaseCallBacks from common-elements instead) See [common elements](../common-elements/#BaseCallBacks)|
|CallBacks/Urls| 1 |  | List of Url. A Url contains information of where the provider will redirect the client of the payment goes good or wrong. |
|CallBakcs/Urls/Url| 1..n | String | Url value to redirect. |
|@Type| 1 | String | Type of the Url (possible values: "Success", "Fail" or "Notification"). |
|@Status| 0..1 | String | If the Url type is Notification, you can define what type of notification you what to receive in this Url. Only if provider allows it, check StaticConfiguration. (possible values: "Received", "Denied", "Refunded" or "Pending"). |
|CallBacks/Seed| 1 | String | Seed to check providers authentication. Only if provider allows it, check StaticConfiguration. |

## CreatePaymentRS

~~~xml
<CreatePaymentRS>
    <Transaction Id = "99999-53245-5483-4891" IdType = "Expirable"  ExpiryDate = "2013-12-20T10:48:52.00000Z" Status = "Success" >
        <TransactionDate>2013-12-20T10:48:52.00000Z</TransactionDate>
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
            <Fee />
            ...
        </Fees>
        <Reasons>
            <Reason Id = "Reference">123456798</Reason>
            <Reason Id = " "></Reason>
            ... 
        </Reasons>
    <Transaction>
    <Redirects>
        <HTTPRequests>
            <HTTPRequest>
                <Method>POST</Method>
                <Url>https://www.sofort.com/payment/go/508712aa8572615d6151de6111349bc5872435987c23c</Url>
                <Protocol>HTTP/1.1</Protocol>
                <Headers/>
                <Body/>
                <FormInputs>
                    <Input key = "UTID" value = "1234567890ABCDEF1234"/>
                    <Input key = " " value = " "/>
                    ...
                </FormInputs>
            </HTTPRequest>
            <HTTPRequest/>
            ...
        </HTTPRequests>
    </Redirects>
</CreatePaymentRS>
~~~

### CreatePaymentRS


|Element|Number|Type|Description|
| ----- | ----- | ----- | ----- | 
|CreatePaymentRS|1| | Root node.|
|Transaction|1| Transaction | Contains information about the payment transaction. |
|@Transaction/Id|1| Transaction | Transaction identifier. |
|@Transaction/IdType|1| String | Transaction Id type (possible values: "Expirable" or "Final"). If "Final", the transaction id will not change. If "Expirable", the transaction id returned is only valid until the ExpiryDate and the final id will be returned in other calls like CapturePayment. |
|@Transaction/ExpiryDate|0..1| DateTime | Transaction id expiration date. Only returned if IdType = Expirable. |
|@Transaction/Status|0..1| String | Transaction status (possible values: "Success" or "Unknown"). |
|@Transaction/StatusDescription|0..1| String | Additional information about the transaction status. |
|Transaction/TransactionDate|0..1| DateTime | Transaction date. |
|Transaction/CurrencyAmount|0..1| CurrencyAmount | Contains the currency and the amount of the transaction. See [common elements](../common-elements/#CurrencyAmount)|
|Transaction/SenderDetails|0..1| SenderDetails | Contains information about the payment sender. See [common elements](../common-elements/#SenderDetails). |
|Transaction/RecipientDetails|0..1| SenderDetails | Contains information about the payment recipient. See [common elements](../common-elements/#SenderDetails). |
|Transaction/Fees|0..1| Fees | Contains information about the transaction fees. See [common elements](../common-elements/#Fees)|
|Transaction/Reasons|0..1| Reasons | Reasons of the payment. This reasons are add to the transaction information if the provider admits it. |
|Redirects|0..1| Redirects | Contains information about the payment redirection of the client to the providers web page. See [common elements](../common-elements/#Redirects)|
