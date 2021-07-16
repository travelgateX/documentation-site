+++
title= "Configuration Method"
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


~~~xml
    <ConfigurationRQ>
        <timeoutMilliseconds>2000</timeoutMilliseconds>
    </ConfigurationRQ>
~~~


### ConfigurationRQ Description



| **Element**			| **Number**	| **Type**	| **Description**	    |
| ----------------------| ------------- | ----------| --------------------- |
| ConfigurationRQ	    | 1          	|		    | Root node.		    |
| ConfigurationRQ/timeoutMilliseconds	    | 1          	|		    | 	Maximum time for a response from the system.    |
                 



### ConfigurationRS Example


~~~xml
<ConfigurationRS xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
    <operationImplemented>true</operationImplemented>
    <Parameters>
        <Parameter>
            <TagRunTime>User</TagRunTime>
            <ProviderTagName>AgentID</ProviderTagName>
            <Show>true</Show>
            <Mandatory>true</Mandatory>
            <Pattern>[-A-Za-z0-9+&amp;@#/%=~_|]</Pattern>
            <Description>User Name</Description>
            <Type>string</Type>
            <ApplyMethods>
                <Method>Avail</Method>
                <Method>Valuation</Method>
                <Method>Reservation</Method>
                <Method>ReservationRead</Method>
                <Method>ReservationList</Method>
                <Method>Cancel</Method>
                <Method>HotelList</Method>
                <Method>DescriptiveInfo</Method>
                <Method>GeographicDestinationTree</Method>
            </ApplyMethods>
        </Parameter>
        <Parameter>
            <TagRunTime>Password</TagRunTime>
            <ProviderTagName>Password</ProviderTagName>
            <Show>true</Show>
            <Mandatory>true</Mandatory>
            <Pattern>[-A-Za-z0-9+&amp;@#/%=~_|]</Pattern>
            <Description>User Password</Description>
            <Type>string</Type>
            <ApplyMethods>
                <Method>Avail</Method>
                <Method>Valuation</Method>
                <Method>Reservation</Method>
                <Method>ReservationRead</Method>
                <Method>ReservationList</Method>
                <Method>Cancel</Method>
                <Method>HotelList</Method>
                <Method>DescriptiveInfo</Method>
                <Method>GeographicDestinationTree</Method>
            </ApplyMethods>
        </Parameter>
        <Parameter>
            <TagRunTime>UrlGeneric</TagRunTime>
            <Show>true</Show>
            <Mandatory>true</Mandatory>
            <Pattern>^(?:(http(s)?|ftp|file):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&amp;'\(\)\*\+,;=.]+$</Pattern>
            <Description>Generic URL</Description>
            <Type>uri</Type>
            <ExampleValue>http://live.integraciones.ilunionhotels.com:5555/partner</ExampleValue>
            <ApplyMethods>
                <Method>Avail</Method>
                <Method>Valuation</Method>
                <Method>Reservation</Method>
                <Method>ReservationRead</Method>
                <Method>ReservationList</Method>
                <Method>Cancel</Method>
                <Method>HotelList</Method>
                <Method>DescriptiveInfo</Method>
                <Method>GeographicDestinationTree</Method>
            </ApplyMethods>
        </Parameter>
        <Parameter>
            <TagRunTime>Parameter</TagRunTime>
            <Show>true</Show>
            <Mandatory>false</Mandatory>
            <Pattern>[-A-Za-z0-9+&amp;@#/%=~_|]</Pattern>
            <Description>Range of infants, children and adults. from 0 to 2 infants, from 3 to 12 children, 13+ adults</Description>
            <Type>string</Type>
            <Key>RangoEdades</Key>
            <ExampleValue>2|12|18</ExampleValue>
            <ApplyMethods>
                <Method>Avail</Method>
                <Method>Valuation</Method>
                <Method>Reservation</Method>
            </ApplyMethods>
        </Parameter>
    </Parameters>
</ConfigurationRS>
~~~


### ConfiguracionRS Description


 
| **Element**			| **Number**	| **Type**	| **Description**			|
| ----------------------------- | ------------- | ------------- | ------------------------------------- |
| ConfigurationRS	            | 1          	|		        | Root node.				            |
| Parameters	                | 1          	|               | 				|
| Parameters/Parameter	        | 1..n          |               | 				| 
| Parameters/Parameter/TagRunTime |  1        	|Enum               | This is the tag of the configuration node in the requests that you want to contextualize in the activation form. Possible values: _User_, _Password_, _UrlAvail_, _UrlReservation_, _UrlValuation_, _UrlGeneric_, _Parameter_. See [Configuration] (/connectiontypessellers/hotelpullsellers/how-to-guides/configuration/)			| 
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
| Parameters/Parameter/PossibleValues/PossibleValue	            | 1..n         	| String   | If you return a list of possible parameter values, in the connection form the Buyer only can choose one of this values.   | 
| Parameters/Parameter/ApplyMethods	            | 1         	|   | 				| 
| Parameters/Parameter/ApplyMethods/Method	            | 1..n         	|  Enum | Method where the parameter is used. The values are: _Avail_, _Cancel_, _CategoryList_, _CurrencyList_, _DescriptiveInfo_, _GeographicDestinationTree_, _HotelList_, _MarketList_, _MealPlanList_, _MetaData_, _Reservation_, _ReservationList_, _ReservationRead_, _RoomList_, _Valuation_| 
\
\
#### **Patterns** {#paterns}

All the patterns must work with Golang and ECMAScript(javaScript). You can validate your regular expressions by this two laguanges at [regex101](https://regex101.com/).

The pattern for _eUri_ type is: <code>^(?:(http(s)?\|ftp\|file):\\/\\/\)?\[\\w\.\-\]\+\(?:\\\.\[\\w\\\.\-\]\+\)\+\[\\w\\\-\\\.\_~:/?\#\[\\]@\!\\$&'\\\(\\\)\\\*\\\+,;=\.\]\+$</code>

The pattern for _eBoolean_ type is:<code>true|false</code>

Here you have an example of the regex for an email: <code>^\(\\D\)\+\(\\w\)\*\(\(\\\.\(\\w\)\+\)?\)\+@\(\\D\)\+\(\\w\)\*\(\(\\\.\(\\D\)\+\(\\w\)\*\)\+\)?\(\\\.\)\[a\-z\]\{2,\}$</code>
