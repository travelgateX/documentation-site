+++
title= "Configuration"
keywords= "hotel, data structure, configuration, connection, template"
search= "Hotel - Data Structure - Configuration"
sidebar= "mydoc_sidebar"
permalink= "/docs/hotel/DSF/RuntimeConfiguration"
weight = 1
icon = "fa-cog" 
+++



### Method Goals


This message returns your connection configuration template as Seller in our platform. With this response we build a form, known as activation or connection form, where the Buyers fill the configuration parameters for the requests to you. In order to expedite the connections to your system through our platform it is important that all data in the configuration response is clear and explanatory as possible. [Here](https://knowledge.travelgatex.com/quickguide-to-auto-activations) you can read how the Buyers create a new connection in our platform. 



### Request Format


The request only requires the maximum time in milliseconds that is necessary respect when returning your response. 



### Response Format


The returned XML contains a template of all connection fields used in order to compose a form in our platform.



### ConfigurationRQ Example

In the request of this call it is only necessary to use the object: "HotelBaseRQ". You can find the info in the '[Common Elements](/connectiontypessellers/hotelpullsellers/methods/messages/common-elements/)' section.

~~~xml
<ConfigurationRQ xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
    <timeoutMilliseconds>999999</timeoutMilliseconds>
    <source>
        <languageCode>en</languageCode>
    </source>
    <filterAuditData>
        <registerTransactions>true</registerTransactions>
    </filterAuditData>
    <optionsQuota>0</optionsQuota>
    <hubProvider>XXX</hubProvider>
    <Configuration>
        <User>USERXX</User>
        <Password>PWXX</Password>
        <UrlAvail>https://www.supplier.com/tgx</UrlAvail>
        <UrlReservation>https://www.supplier.com/tgx</UrlReservation>
        <UrlValuation>https://www.supplier.com/tgx</UrlValuation>
        <UrlGeneric>https://www.supplier.com/tgx</UrlGeneric>
        <Parameters>
            <Parameter key = "param" value = "PWXML"/>
        </Parameters>
    </Configuration>
</ConfigurationRQ>
~~~


**Important information about Number (Cardinal):**

Go to [Common-Elements](/connectiontypessellers/hotelpullsellers/methods/common-elements/#Important) for more information.


### ConfigurationRQ Description



| **Element**			| **Number**	| **Type**	| **Description**	    |
| ----------------------| ------------- | ----------| --------------------- |
| ConfigurationRQ	    | 1          	|		    | Root node.		    |
                


### ConfigurationRS Example


~~~xml
<ConfigurationRS xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
    <operationImplemented>true</operationImplemented>
    <Parameters>
        <Parameter>
            <TagRunTime>UrlGeneric</TagRunTime>
            <ProviderTagName>Endpoint Supplier</ProviderTagName>
            <Show>true</Show>
            <Mandatory>true</Mandatory>
            <Pattern>^(?:(http(s)?|ftp|file):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&amp;'\(\)\*\+,;=.]+$</Pattern>
            <DescriptionPattern>Please, this field expects the value of a url.</DescriptionPattern>
            <Description>Endpoint Supplier Restel</Description>
            <Type>uri</Type>
            <DefaultValue>http://xml.hotelresb2b.com/xml/listen_xml.jsp</DefaultValue>
        </Parameter>
        <Parameter>
            <TagRunTime>Parameter</TagRunTime>
            <ProviderTagName>codigousu</ProviderTagName>
            <Show>true</Show>
            <Mandatory>true</Mandatory>
            <Description>User code, credentials</Description>
            <Type>string</Type>
            <Key>Usuario</Key>
            <ExampleValue>TravelgateTest</ExampleValue>
        </Parameter>
        <Parameter>
            <TagRunTime>Parameter</TagRunTime>
            <ProviderTagName>clausu</ProviderTagName>
            <Show>true</Show>
            <Mandatory>true</Mandatory>
            <Description>User Password, credentials</Description>
            <Type>string</Type>
            <Key>Password</Key>
            <ExampleValue>travelgate123</ExampleValue>
        </Parameter>
        <Parameter>
            <TagRunTime>Parameter</TagRunTime>
            <ProviderTagName>afiliacio</ProviderTagName>
            <Show>true</Show>
            <Mandatory>true</Mandatory>
            <Pattern>[A-Z]{2}</Pattern>
            <DescriptionPattern>Please, this field expects a 2 digit uppercase character value.</DescriptionPattern>
            <Description>Affiliation of the user, affiliation of the XML account created. Two digit code, exactly as it is supplied by HOTUSA.This code refers to which brand it belongs to</Description>
            <Type>string</Type>
            <Key>Afiliacion</Key>
            <ExampleValue>TS</ExampleValue>
        </Parameter>
        <Parameter>
            <TagRunTime>Parameter</TagRunTime>
            <ProviderTagName>codusu</ProviderTagName>
            <Show>true</Show>
            <Mandatory>true</Mandatory>
            <Pattern>[A-Z,0-9]{6}</Pattern>
            <DescriptionPattern>Please, this field expects a value of 6 digits, uppercase or numeric characters.</DescriptionPattern>
            <Description>User code</Description>
            <Type>string</Type>
            <Key>CodigoUsuario</Key>
            <ExampleValue>D65934</ExampleValue>
        </Parameter>
        <Parameter>
            <TagRunTime>Parameter</TagRunTime>
            <ProviderTagName>secacc</ProviderTagName>
            <Show>true</Show>
            <Mandatory>true</Mandatory>
            <Pattern>[0-9]{5,6}</Pattern>
            <DescriptionPattern>Please, this field expects a value of 5 or 6 numeric digits.</DescriptionPattern>
            <Description>Access code, access sequence</Description>
            <Type>string</Type>
            <Key>SecAcc</Key>
            <ExampleValue>245698</ExampleValue>
        </Parameter>
        <Parameter>
            <TagRunTime>Parameter</TagRunTime>
            <Show>true</Show>
            <Mandatory>false</Mandatory>
            <Pattern>true|false</Pattern>
            <DescriptionPattern>Please, this field expects a boolean value, 'true' or 'false'</DescriptionPattern>
            <Description>If the value is true, we show only the non-refundable options.</Description>
            <Type>boolean</Type>
            <Key>ShowRateNonRefundable</Key>
            <DefaultValue>false</DefaultValue>
            <PossibleValues>
                <PossibleValue>true</PossibleValue>
                <PossibleValue>false</PossibleValue>
            </PossibleValues>
        </Parameter>
        <Parameter>
            <TagRunTime>Parameter</TagRunTime>
            <ProviderTagName>duplicidad</ProviderTagName>
            <Show>false</Show>
            <Mandatory>false</Mandatory>
            <Description>Duplicity will serve to filter duplicates, that is, on some occasions,a hotel can offer us different offers, if we want them to appear all of them in the list, just do not include this tag or leave it to zero, if you want the list to appear of  better offers, label in value 1 (thebest offer criterion is based on this order: better availability / better price of the. first room / regime find).</Description>
            <Type>numeric</Type>
            <Key>duplicity</Key>
            <DefaultValue>0</DefaultValue>
            <PossibleValues>
                <PossibleValue>0</PossibleValue>
                <PossibleValue>1</PossibleValue>
            </PossibleValues>
        </Parameter>
        <Parameter>
            <TagRunTime>Parameter</TagRunTime>
            <Show>false</Show>
            <Mandatory>true</Mandatory>
            <Pattern>^(?:(http(s)?|ftp|file):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&amp;'\(\)\*\+,;=.]+$</Pattern>
            <DescriptionPattern>Please, this field expects the value of a url.</DescriptionPattern>
            <Description>Url Room List</Description>
            <Type>uri</Type>
            <Key>urlListRooms</Key>
            <DefaultValue>http://xtghubstatic.blob.core.windows.net/int-static-hotel/HOT-RoomTypes.csv</DefaultValue>
        </Parameter>
    </Parameters>
</ConfigurationRS>  
~~~  

\
\

This is the example of how the form is displayed with the previous xml response.



![This is the example of how the form is displayed with the previous xml response](/connectiontypessellers/hotelpullsellers/images/ExampleFormBuena.png)


**Important information about Number (Cardinal):**

Go to [Common-Elements](/connectiontypessellers/hotelpullsellers/methods/messages/common-elements/#Important) for more information.


### ConfiguracionRS Description


 
| **Element**			| **Number**	| **Type**	| **Description**			|
| ----------------------------- | ------------- | ------------- | ------------------------------------- |
| ConfigurationRS	            | 1          	|		        | Root node.				            |
| Parameters	                | 1          	|               | 				|
| Parameters/Parameter	        | 1..n          |               | 				| 
| Parameters/Parameter/TagRunTime |  1        	|Enum               | This is the tag of the configuration node in the requests that you want to contextualize in the activation form. Possible values: _User_, _Password_, _UrlAvail_, _UrlReservation_, _UrlValuation_, _UrlGeneric_, _Parameter_. See [Configuration](/connectiontypessellers/hotelpullsellers/how-to-guides/configuration/)			| 
| Parameters/Parameter/ProviderTagName	            | 1        	| String  | Name of the parameter in the activation form, as you use our PULL Seller API, it is recomendable to put similar names used on it in a human readbility format. For example: _Availability Url_, _Valuation Url_ ... If it is an extra parameter, you should put a name similar to the key used, and preferly with a human readbility format too. 				| 
| Parameters/Parameter/Show	            | 1         	| Boolean				| Indicates if you want to show the parameter in the connection form or not. May be you want that some parameter to be filled internally and you do not want the Buyer fill it in. |
| Parameters/Parameter/Mandatory	            | 1         	| Boolean  | Indicates if the parameter is compulsory or not in order to make a connection without any problem.		| 
| Parameters/Parameter/Type	            |1          	| Enum  |  The parameter value data type. Posible types are:  _eString_, _eBoolean_, _eUri_. 				| 
| Parameters/Parameter/Pattern	            |0..1          	| String  | Regular expression to validate the parameter value. If the parameter type is _eBoolean_ or _eUri_ the pattern is mandatory, and has a specific regular expresion. You can find more information about patterns [here](#patterns). If the type is _eString_ or you add the tag _PossibleValues_ the pattern is not mandatory.| 
| Parameters/Parameter/DescriptionPattern	            |0..1          	|String   | This is the error that the Buyer see if the parameter value do not validate the pattern. Please, fill this node if you want to expedite your connections and avoid future issues.				| 
| Parameters/Parameter/Description	            |0..1          	|String   |  Value of the tooltip that explains the parameter. Avoid use an only word, avoid use the same value than _ProviderTagName_, and if it is an aditional parameter, avoid use the same value than _Key_. Please, fill this information to help the Buyer to connect you.| 
| Parameters/Parameter/Key	            |0..1          	| String   | Value of the _key_ attribute as you accept in the xml requests in _Configuration_ node.				| 
| Parameters/Parameter/DefaultValue	            | 0..1         	| String   | Value by the default, if the Buyer do not change it, all connections to you are set up with this value. | 
| Parameters/Parameter/ExampleValue	            | 0..1         	| String   | Value of the placeholder for this parameter in the form. If the Buyer do not fill the parameter, the value is empty				| 
| Parameters/Parameter/PossibleValues	            | 0..1         	|   | 				| 
| Parameters/Parameter/PossibleValues/PossibleValue	            | 1..n         	| String   | If you return a list of possible parameter values, in the connection form the Buyer only can choose one of this values.|

\
\


#### **Patterns**{#paterns}

All the patterns must work with Golang and ECMAScript(javaScript). You can validate your regular expressions by this two laguanges at [regex101](https://regex101.com/).

The pattern for _eUri_ type is: <code>^(?:(http(s)?\|ftp\|file):\\/\\/\)?\[\\w\.\-\]\+\(?:\\\.\[\\w\\\.\-\]\+\)\+\[\\w\\\-\\\.\_~:/?\#\[\\]@\!\\$&'\\\(\\\)\\\*\\\+,;=\.\]\+$</code>

The pattern for _eBoolean_ type is:<code>true|false</code>

Here you have an example of the regex for an email: <code>^\(\\D\)\+\(\\w\)\*\(\(\\\.\(\\w\)\+\)?\)\+@\(\\D\)\+\(\\w\)\*\(\(\\\.\(\\D\)\+\(\\w\)\*\)\+\)?\(\\\.\)\[a\-z\]\{2,\}$</code>
