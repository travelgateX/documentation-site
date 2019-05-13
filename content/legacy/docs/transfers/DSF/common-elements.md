---
title: Common Elements
keywords: transfers, common elements, elements
search: Transfers - Data Structure - Common Elements
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/common-elements
---

This node will be in every request and response objects.

The request objects contains the supplier's configuration, urls and
credentials.

The response object contains the operation status and errors if any.



### Common Elements RQ Example



~~~xml
    <TransfersBaseRQ>
        <echoToken>TEST</echoToken>
        <timeoutMilliseconds>60000</timeoutMilliseconds>
        <source>
            <agencyCode>xxxx</agencyCode>
            <languageCode>xx</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>true</registerTransactions>
        </filterAuditData>
        <Configuration codeProvider = "xxx">
            <Credentials user = "xxxx" password = "xxxx">
                <UrlGeneric>xxxxx</UrlGeneric>
                <UrlIdentification xsi:nil = "true"/>
                <UrlAvailability xsi:nil = "true"/>
                <UrlRateRule xsi:nil = "true"/>
                <UrlBook xsi:nil = "true"/>
                <UrlsSpecific xsi:nil = "true"/>
            </Credentials>
            <Attributes>
                <Attribute key = "xxx" value = "xxx"/>
                <Attribute key = "xxx" value = "xxx"/>
                <Attribute key = "xxx" value = "xxx"/>
            </Attributes>
        </Configuration>
       …
    </TransfersBaseRQ>
~~~


### Common Elements RQ Description


 

| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| TransfersBaseRQ          			| 1             |               | Root node.						|
| echoToken                			| 0..1          | String        | Echo token to be returned in response (valid for test purposes). 	|
| timeoutMilliseconds      			| 1             | Integer       | Timeout in milliseconds that the client will be waiting for a response.	|
| source                   			| 1            	| source        | Information about source requesting the operation.	|
| source/agencyCode        			| 0..1         	| String        | Agency code that requests the operation.		|
| source/languageCode      			| 1            	| String        | Language code (ISO 3166-1 alpha-2) format.		|
| filterAuditData          			| 1             | FilterAuditData | Information about enable or enable information returned in audit data.	|
| filterAuditData/registerTransactions		| 1            	| Boolean       | Active register of transactions with provider.	|
| TransfersBaseRQ/Configuration			| 1             | ConfigurationProvider | Configuration needed to send thetransaction to the provider.	|
| @Configuration/ProviderCode			| 1            	| String        | Provider’s code.					|
| Configuration/Credentials			| 1             | ConfigurationCredentials | Connection credentials.			|
| @Credentials/user        			| 1             | String        | User of the session for the connection.		|
| @Credentials/password     			| 1            	| String        | Password of the session for the connection.		|
| Credentials/UrlGeneric   			| 0..1          | String        | Generic URL.						|
| Credentials/UrlIdentification			| 0..1          | String        | Specific URL for identification.			|
| Credentials/UrlAvailability			| 0..1          | String        | Specific URL for Availability operation.		|
| Credentials/UrlRateRule  			| 0..1          | String        | Specific URL for RateRule operation.			|
| Credentials/UrlBook      			| 0..1          | String        | Specific URL for Book operation.			|
| Credentials/UrlsSpecific 			| 0..1          | Atributos     | Specific URLs organized in Key/value pairs.		|
| Configuration/Attributes 			| 0..1         	| Attribute     | Specific parameter configuration for this connector.	|
| Configuration/Attributes/Attribute		| 0..n         	| List of Attribute | List of Attribute.				|
| @Atributo/key            			| 1            	| String        | Unique key that identifies the value.			|
| @Atributo/value          			| 1            	| String        | Value of the Attribute.				|



### Common Elements RS Example



~~~xml
    <TransfersBaseRS>
       <operationImplemented>true</operationImplemented>
       <Errors>
            <Error Code = "101" ShortText = "3">Unable to make a reservation</Error>
       </Errors>
       <auditData>
          <transactions>
             <Transaction>
                <timeStamp>2014-09-6T15:19:45.3544495+02:00</timeStamp>
                <RQ />
                <RS />
             </Transaction>
          </transactions>
          <timeStamp>2014-09-16T15:19:43.4014745+02:00</timeStamp>
          <processTimeMilliseconds>19532</processTimeMilliseconds>
       </auditData>
       <Warnings>
         <Warning Code = " ">
            xxxxxxxxxxxxxxxxxxxxxxxxxxx.
         </Warning>
       </Warnings>
       …
    </TransfersBaseRS>
~~~


### Common Elements RS Description


 
  
| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| TransfersBaseRS            			| 1             |               | Root node.						|
| TransfersBaseRS/Success    			| 0..1          | String        | This object doesn’t contain any information. A response with a “Success” object indicates that everything went ok.	|
| TransfersBaseRS/Warnings   			| 0..1          | Warnings      | Contains a list of warning elements. Important but non critical information returned in the provider’s response is shown in this object.	|
| Warning/code               			| 1             | String        | A code that identifies the warning.			|
| Warning/text               			| 1             | String        | Message of the warning.				|
| TransfersBaseRS/Errors     			| 0..1          | Errors        | Contains a list of error elements. Important and critical information returned in the provider’s response is shown in this object.	|
| Errors/Error               			| 0..n          | List of MyError | Important and critical information returned in the provider’s response is shown in this object.	|
| @Error/Code                			| 1             | errorCodesType | Code that indicates the error type.			|
| @Error/ShortText           			| 1             | String        | Brief description of the returned error.		|
| Error/text                 			| 1             | String        | Complete error message.				|
| TransfersBaseRS/auditData  			| 1             | AuditData     | In case registerTransactions has been set to true on the request this object will provide information about the communication with the provider. Otherwise it will be null.	|
| auditData/Transactions     			| 1             | List of Transaction | Object that contains information of a transaction sent to the provider’s system.	|
| transaction/timeStamp      			| 1             | timeStamp     | Indicates the time in which the message has been sent.	|
| transaction/RQ             			| 1             | String        | Serialized request object sent to the provider.	|
| transaction/RS             			| 1             | String        | Serialized response object sent to the provider.	|
| auditData/timeStamp        			| 1             | TimeStamp     | Time in which our response has been generated.	|
| auditData/processTimeMilliseconds		| 1             | Integer       | Time in milliseconds consumed by this method. (currently unused).	|

