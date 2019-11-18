+++
title = "Common Elements"
pagetitle = "Common Elements Across Calls"
description = "List of the most repeated elements across diferent calls"
icon = "fa-list"
weight = 4
alwaysopen = false
+++

# Common Elements

In this section most common elements, which are used in various calls, will be explained.

In some cases the root node name changes, in those cases the name provided by the specific call documentation prevails over the name stated here.

## Reasons

### Reasons Example

~~~xml
<Reasons>
    <Reason Id = "Reference">123456798</Reason>
    ...
</Reasons>
~~~

### Reasons Description

|Element|Number|Type|Description|
| ---- | ---- | ---- | ---- |
| Reasons | | | Reasons of the payment. Those are included in the transaction information if the provider allows it. |
| Reasons/Reason | 1..n | String | A reason for the payment. |
| @Id | 1 | String | Id of the reason. |

## Fees

### Fees Example

~~~xml
<Fees>
    <Fee Id = " ">
        <CurrencyAmount CurrencyCode = "EUR" Amount = "0.00"/>
        <ExchangeRate>1.0000</ExchangeRate>
        <Description></Description>
    </Fee>
    ...
</Fees>
~~~

### Fees Description

|Element|Number|Type|Description|
| ---- | ---- | ---- | ---- |
|Fees| | | List of Fees included in a transaction. |
| Fees/Fee | 1..n | | Information about a fee included in a transaction. |
| @Id | 1 | String | Id of the fee. |
| Fees/Fee/CurrencyAmount | 1 | CurrencyAmount | Cost of the fee. See [common elements](../common-elements/#CurrencyAmount)|
| Fees/Fee/ExchangeRate | 1 | String | Rate of the currency echange |
| Fees/Fee/Description | 1 | String | Description of the fee content |

## BaseCallBacks

### BaseCallBacks Example

~~~xml
<BaseCallBacks>
    <Urls>
        <Url Type = "Success">https://success-url.com/</Url>
        <Url Type = "Fail">https://fail-url.com/</Url>
        <Url Type = "Notification">https://notification-url.com/</Url>
    </Urls>
</BaseCallBacks>
~~~

### BaseCallBacks Description

|Element|Number|Type|Description|
| ---- | ---- | ---- | ---- |
|BaseCallBacks| 1 |  | Contains information about the payment redirection of the client from the providers web page. (Obsolete: Use BaseCallBacks from common-elements instead) |
|BaseCallBacks/Urls| 1 |  | List of Url. A Url contains information of where the provider will redirect the client of the payment goes good or wrong. |
|BaseCallBacis/Urls/Url| 1..n | String | Redirect url value |
|@Type| 1 | String | Type of the Url (possible values: "Success", "Fail" or "Notification"). |
|@Status| 0..1 | String | If the Url type is Notification, you can define what type of notification you what to receive in this Url. Only if provider allows it, check StaticConfiguration. (possible values: "Received", "Denied", "Refunded" or "Pending"). |

## CurrencyAmount

### CurrencyAmount Example

~~~xml
<CurrencyAmount CurrencyCode = "EUR" Amount = "20.00" />
~~~

### CurrencyAmount Description

|Element|Number|Type|Description|
| ---- | ---- | ---- | ---- |
|CurrencyAmount | | | Contains the currency and the amount of a payment. |
|@CurrencyCode|1|String | Currency of the payment. |
|@Amount|1|Decimal | Price of the payment.|

## Redirects

### Redirects Example

~~~xml
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
        ...
    </HTTPRequests>
</Redirects>
~~~

### Redirects Description

|Element|Number|Type|Description|
| ---- | ---- | ---- | ---- |
| Redirects | 1 |  | Information about where to redirect after the call |
| Redirects/HTTPRequests | 1 |  | List of all the redirects |
| Redirects/HTTPRequests/HTTPRequest | 1..n |  | Information about a given redirect |
| Redirects/HTTPRequests/HTTPRequest/Method | 1 | String | Method of the call |
| Redirects/HTTPRequests/HTTPRequest/Protocol | 1 | String | Protocol to use on the call |
| Redirects/HTTPRequests/HTTPRequest/FormInputs | 0..1 |  | List of inputs if a form needs to be constructed |
| Redirects/HTTPRequests/HTTPRequest/FormInputs/Input | 1..n |  | Information about a single Input |
| @key | 1 | String | Name of the input |
| @value | 1 | String | Value of the input |

## NetworkDetails

### NetworkDetails Example

~~~xml
<NetworkDetails>
    <BrowserDetails>
        <AcceptHeader>text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,application/json</AcceptHeader>
        <UserAgent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36</UserAgent>
        <JavaEnabled>False</JavaEnabled>
        <Language>ES-es</Language>
        <ColorDepth>24</ColorDepth>
        <ScreenHeight>1250</ScreenHeight>
        <ScreenWidth>1320</ScreenWidth>
        <browserTZ>52</browserTZ>
    </BrowserDetails>
</NetworkDetails>
~~~

### NetworkDetails Description

|Element|Number|Type|Description|
| ---- | ---- | ---- | ---- |
| NetworkDetails | | | Information about the buyer device and configuration. |
| NetworkDetails/UserIp | 0..1 | String | Ip address of the buyer. |
| NetworkDetails/SalesChannel | 0..1 | String | Device used by the user, can have any of the following values: Unkown, Desktop, App, Tablet, Tablet_Android, Tablet_Ipad, Smartphone, Smartphone_Android, Smartphone_Iphone. |
| NetworkDetails/BrowserDetails | 0..1 | String | Information about the browser used by the buyer.|
| NetworkDetails/BrowserDetails/AcceptHeader | 1 | String | Accept header values.|
| NetworkDetails/BrowserDetails/UserAgent | 1 | String | Broser used by the buyer. |
| NetworkDetails/BrowserDetails/JavaEnabled | 1 | String | Can only have the values of "True" or "False". |
| NetworkDetails/BrowserDetails/Language | 1 | String | Language code of the buyer. |
| NetworkDetails/BrowserDetails/ColorDepth | 1 | String | Browser configuration. |
| NetworkDetails/BrowserDetails/ScreenHeight | 1 | String | Browser configuration. |
| NetworkDetails/BrowserDetails/ScreenWidth | 1 | String | Browser configuration. |
| NetworkDetails/BrowserDetails/browserTZ | 1 | String | Browser configuration. |

## TransactionTokens

### TransactionTokens Example

~~~xml
<TransactionTokens>
    <Attribute key = "att1" value = "val1"/>
    <Attribute key = "att2" value = "val2"/>
</TransactionTokens>
~~~

### TransactionTokens Description

|Element|Number|Type|Description|
| ---- | ---- | ---- | ---- |
| TransactionTokens | | | List of key-value elements that offer additional info about the transaction not covered by other elements. |
| TransactionTokens/Attribute | 1..n | | Extra information about the transaction. |
| @key | 1 | String | Key of the token. |
| @value | 1 | String | Value of the token. |

## PaymentItemDetails

### PaymentItemDetails Example

~~~xml
<PaymentItemsDetails>
    <Item Id = "123456789">
        <Name>RH Bayren Hotel SPA</Name>
        <Description>1 habitación doble. Fecha entrada: 09/10/2015 Fecha salida: 12/10/2015</Description>
        <Date Start = "2014-03-13" End = "2014-03-18"/>
        <Quantity>1</Quantity>
        <CurrencyAmount CurrencyCode = "EUR" Amount = "20.00"/>
        <ImageUrl>http://media-cdn.tripadvisor.com/media/photo-s/04/2b/f8/eb/hotel-rh-bayren-i.jpg</ImageUrl>
    </Item>
    ...
</PaymentItemsDetails>
~~~

### PaymentItemDetails Description

|Element|Number|Type|Description|
| ---- | ---- | ---- | ---- |
| PaymentItemDetails | | | Information about the items included in the payment. |
| PaymentItemDetails/Item | 1..n | | List of all items included. |
| @Id | 0..1 | String | Id of the item. |
| PaymentItemDetails/Item/Name | 1 | String | Name of the item. |
| PaymentItemDetails/Item/Description | 1 | String | Long description of the item. |
| PaymentItemDetails/Item/Date | 0..1 | | If necessary, date information about the item. |
| @Start | 1 | Date | Start date for the Item. |
| @End | 1 | Date | End date for the Item. |
| PaymentItemDetails/Item/Quantity | 1 | String | Number of units of the given Item included. |
| PaymentItemDetails/Item/CurrencyAmount | 1 | CurrencyAmount | Price of the Item. See [common elements](../common-elements/#CurrencyAmount)|
| PaymentItemDetails/Item/ImageUrl | 0..1 | fooType | Url of the image of the Item. |

## SenderDetails

### SenderDetails Example

~~~xml
<SenderDetails Id = "148755214">
    <Email>test@example.com</Email>
    <Name>John</Name>
    <Surname>Doe</Surname>
    <SenderBankDetails>
        <Holder>John Doe</Holder>
        <CountryCode>ES</CountryCode>
        <IBAN>ES11888888882222222222</IBAN>
        <BIC>AAAAAA44444</BIC>
    </SenderBankDetails>
</SenderDetails>
~~~

### SenderDetails Description

|Element|Number|Type|Description|
| ---- | ---- | ---- | ---- |
|SenderDetails|| | Contains information about the payment sender. |
|@Id|0..1| String | Identifier of the payment sender. |
|SenderDetails/Email|0..1| String | Email of the payment sender. |
|SenderDetails/Name|0..1| String | Name of the payment sender. |
|SenderDetails/Surname|0..1| String | Surname of the payment sender. |
|SenderDetails/BirthDate|0..1| Date | BirthDate of the payment sender. |
|SenderDetails/Gender|0..1| String | Allows values of "Male" and "Female" |
|SenderDetails/Civility|0..1| String | Accepts the values of "Unknown", "Mr", "Mrs", "Ms", "INF", "CHD". |
|SenderDetails/MaidenName|0..1| String | Female surname before marriage. |
|SenderDetails/Email|0..1| String | Email of the payment sender. |
|SenderDetails/PhoneNumber|0..1| String | Phone number of the payment sender. |
|SenderDetails/MobilePhoneNumber|0..1| String | Mobile phone mumber of the payment sender. |
|SenderDetails/Document|0..1| String | Identity document of the payment sender. |
|SenderDetails/Document/DocumentId|0..1| String | Document number. |
|SenderDetails/Document/DocumentExpiration|0..1| Date | Expiration date of the Identity document. |
|SenderDetails/Document/DocumentType|0..1| String | Type of identity document. Can take the values of "NATIONAL_ID", "PASSPORT", "RESIDENT_ID", "FOREIGN_PASSPORT", "COMPANY_ID". COMPANY_ID is the CIF number. |
|SenderDetails/Document/IssuanceCountry|0..1| String | Origin country of the Identity document. |
|SenderDetails/SSN|0..1| String | Social security number of the payment sender. |
|SenderDetails/Address|0..1| | Address inforamtion of the payment sender. |
|SenderDetails/Address/countryCode|0..1|String | Country code of the Address.|
|SenderDetails/Address/city|0..1|String | City of the Address. |
|SenderDetails/Address/street|0..1|String | Street of the Address. |
|SenderDetails/Address/houseNumber|0..1| String| Door number of the Address. |
|SenderDetails/Address/houseExtension|0..1|String | Additional data of the address door.  |
|SenderDetails/Address/zipCode|0..1|String | Zip code of the Address. |
|SenderDetails/BillingAddress|0..1| | Billing address inforamtion for the payment. |
|SenderDetails/BillingAddress/countryCode|0..1|String |Country code of the billing address.  |
|SenderDetails/BillingAddress/city|0..1|String | City of the billing address. |
|SenderDetails/BillingAddress/street|0..1|String |Street of the billing address.  |
|SenderDetails/BillingAddress/houseNumber|0..1|String | Door number of the billing address. |
|SenderDetails/BillingAddress/houseExtension|0..1|String | Additional data of the billing address door. |
|SenderDetails/BillingAddress/zipCode|0..1|String | Zip code of the Address. |
|SenderDetails/City|0..1| String | Contains the city of the payment sender. |
|SenderDetails/State|0..1| String | Contains the state of the payment sender. |
|SenderDetails/ZipCode|0..1| String | Contains zip code of the payment sender. |
|SenderDetails/Country|0..1| String | Contains country of the payment sender. |
|SenderDetails/SenderBankDetails|0..1| String | Bank details of the payment sender. - obsolete |
|SenderDetails/SenderBankDetails/Holder|0..1| String | Complete name of the payment sender. |
|SenderDetails/SenderBankDetails/BankAccount|0..1| | Contains the payment sender bank number and bank security code. |
|SenderDetails/SenderBankDetails/BankAccount/Number|0..1| String | Contains the payment sender bank number and bank security code. |
|SenderDetails/SenderBankDetails/BankAccount/SecurityCode|0..1| String | Contains the payment sender bank number and bank security code. |
|SenderDetails/SenderBankDetails/IBAN|0..1| String | Contains the payment sender IBAN number. |
|SenderDetails/SenderBankDetails/BIC|0..1| String | Contains the payment sender BIC number. |
|SenderDetails/SenderBankDetails/CountryCode|0..1| String | Contains the payment sender country code. |
|SenderDetails/BankDetails|0..1| String | Bank details of the payment sender. |
|SenderDetails/BankDetails/Holder|0..1| String | Complete name of the payment sender. |
|SenderDetails/BankDetails/BankAccount|0..1| | Contains the payment sender bank number and bank security code. |
|SenderDetails/BankDetails/BankAccount/Number|0..1| String | Contains the payment sender bank number and bank security code. |
|SenderDetails/BankDetails/BankAccount/SecurityCode|0..1| String | Contains the payment sender bank number and bank security code. |
|SenderDetails/BankDetails/IBAN|0..1| String | Contains the payment sender IBAN number. |
|SenderDetails/BankDetails/BIC|0..1| String | Contains the payment sender BIC number. |
|SenderDetails/BankDetails/CountryCode|0..1| String | Contains the payment sender country code. |
