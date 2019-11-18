# StaticConfiguration

**Method Goals**
This method returns important information about the behavior of the integration.

**Request Format**
The request only requires the provider code. 

**Response Format**
The response contains a list of parameters that will inform how to configure the integration.

## StaticConfigurationRQ_ Example

~~~xml
<StaticConfigurationRQ>
</StaticConfigurationRQ>
~~~

### StaticConfigurationRQ

Only the structure defined on [common-structure](../common-structure) is needed

## StaticConfigurationRS Example

~~~xml
<StaticConfigurationRS>
    <operationImplemented>True</operationImplemented>
    <ImplementsRedirect>True</ImplementsRedirect>
    <ImplementsRefund>True</ImplementsRefund>
    <ImplementsDetails>True</ImplementsDetails>
    <ImplementsDetailsByDate>True</ImplementsDetailsByDate>
    <ImplementsSeedAuthentication>True</ImplementsSeedAuthentication>
    <ImplementsItemsDetails>True</ImplementsItemsDetails>
    <RequiresNotificationACK>True</RequiresNotificationACK>
    <ImplementsUrls>
        <Url>Success</Url>
        <Url>Fail</Url>
        <Url>Notification</Url>
        <UrlsNotifications>
            <Status>Denied</Status>
            <Status>Received</Status>
            <Status>Refunded</Status>
        </UrlsNotifications>
    </ImplementsUrls>
</StaticConfigurationRS>
~~~

### StaticConfigurationRS

|Element|Number|Type|Description|
| ----- | ----- | ----- | ----- |
|StaticConfigurationRS|1| | Root node. |
|ImplementsRedirect|1| Boolean | Informs if the provider implements client redirect. This means if is necessary to redirect the client to the providers web page to confirm the payment. |
|ImplementsRefund|1| Boolean | Informs if the provider allows to refund a payment. If true, "RefundPayment" is available. |
|ImplementsDetails|1| Boolean | Informs if the provider allows to get payment details. If true, "DetailsPayment" is available. |
|ImplementsDetailsByDate|1| Boolean | Informs if the provider allows to get payment details searching by date. If true, "DetailsPayment" is available to search by start and end sate. |
|ImplementsSeedAuthentication|1| Boolean | Informs if the provider allows to Authenticate the client redirection with a Seed. |
|ImplementsItemsDetails|1| Boolean | Informs if the provider allows to send the items information in the CreatePaymentRquest to show this information in the providers payment page. This means the client will see this information when it's redirected to the providers page to confirm the payment. |
|RequiresNotificationACK|1| Boolean | Informs if the provider requires a response to the notification sent. |
|ImplementsUrls|0..1| | Informs if the provider allows to specify redirect and notification urls. |
|ImplementsUrls/Url|1..n| String | List of url. Informs if the provider allows to specific type of url (posible values: "Success", "Fail" or "Notification"). |
|ImplementsUrls/UrlsNotifications|0..1| | Informs of different notification type urls the provider allows. |
|ImplementsUrls/UrlsNotifications/Status|1..n| String | List of Status. Informs of notification type urls allowed by the provider (possible values: "Received", "Denied", "Refunded" or "Pending"). |
