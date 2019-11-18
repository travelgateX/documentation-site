+++
title = "Runtime Configuration"
pagetitle = "Runtime Configuration Call"
description = "Information about the Runtime Configuration call"
icon = "fa-ellipsis-h"
weight = 7
alwaysopen = false
+++

# RunTimeConfiguration

**Method Goals**
This method returns a list of Attributes that should be included in each request for the selected provider.

**Request Format**
The request only requires the provider code.

**Response Format**
The response contains a list of Attributes.

## RunTimeConfigurationRQ_ Example

~~~xml
<RunTimeConfigurationRQ>
</RunTimeConfigurationRQ>
~~~

### RunTimeConfiguration


| Element | Number | Type | Description |
| ----- | ----- | ----- | ----- |
RunTimeConfigurationRQ|1| | Root node.

## RunTimeConfigurationRS Example

~~~xml
<RunTimeConfigurationRS>
    <ConfigurationProvider>
        <Credentials user = " " password = " ">
            <UrlGeneric></UrlGeneric>
            <UrlTransactionReport xsi:nil = "true" />
        </Credentials>
        <Attributes>
            <Attribute key = " " value = " " />
            <Attribute key = " " value = " " />
            ...
        </Attributes>
    </ConfigurationProvider>
</RunTimeConfigurationRS>
~~~

### RunTimeConfigurationRS


|Element|Number|Type|Description|
| ----- | ----- | ----- | ----- |
|RunTimeConfigurationRS|1| | Root node.|
|ConfigurationProvider|1| | Information about source requesting the operation. |
|ConfigurationProvider/Credentials|1| | Provider credentials. |
|@User|0..1| String | User code for connection. |
|@Password|0..1| String | Password for connection. |
|ConfigurationProvider/Credentials/UrlGeneric|0..1| String | Url generic for connection. |
|ConfigurationProvider/Credentials/UrlTransactionReport|0..1|String | Url for Daily and Monthly Transactions methods. |
|ConfigurationProvider/Attributes|0..1| |Parameters for additional information. |
|Attributes/Attribute|1..n| | List of Attribute. |
|@key|1| String | Contains the keyword/Id to identify a parameter. |
|@value|1| String | Contains the value of the parameter|
