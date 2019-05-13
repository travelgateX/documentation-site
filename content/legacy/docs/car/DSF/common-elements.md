---
title: Common Elements
keywords: transfers, data structure, common elements
search: Car - Data Structure - Common Elements
sidebar: mydoc_sidebar
permalink: /docs/car/DSF/common-elements
---


This node will be in every request and response objects.

The request objects contains the supplier's configuration, urls and
credentials.

The response object contains the operation status and errors if any.



### Common Elements RQ Example



~~~xml
    <CarBaseRQ>
       <timeoutMilliseconds>20000</timeoutMilliseconds>
       <filterAuditData>
          <registerTransactions>true</registerTransactions>
       </filterAuditData>
       <Configuration ProviderCode="xx">
          <Credentials user="testUser" password="testPass">
             <genericURL>https://xxx</genericURL>
             <identificationURL>https://xxx</identificationURL>
             <availRateURL>https://xxx</availRateURL>
             <rateRuleURL>https://xxx</rateRuleURL>
             <vehResURL>https://xxx</vehResURL>
             <specificURLs />
          </Credentials>
          <Attributes />
       </Configuration>
       <ClientConfiguration agency = "agencyName" SellCurrency = "EUR"/>
       …
    </CarBaseRQ>
~~~


### Common Elements RQ Description


| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| CarBaseRQ         			| 1             |		| Root node.							|
| echoToken         			| 0..1 		| String       	| Echo token to be returned in response (valid for test purposes). |
| timeoutMillisencods			| 1    		| Integer      	| Timeout in milliseconds that the client will be waiting for a response.	|
| source            			| 1    		| source       	| Information about source requesting the operation.		|
| source/agencyCode 			| 0..1 		| String       	| Agency code that requests the operation.			|
| source/languageCode			| 1    		| String       	| Language code (ISO 3166-1 alpha-2) format.			|
| filterAuditData   			| 1    		| FilterAuditData | Information about enable or enable information returned in audit data.	|
| filterAuditData/registerTransactions	| 1    		| Boolean      	| Active register of transactions with provider.		|
| CarBaseRQ/Configuration		| 1    		| Configuracion Proveedor | Configuration needed to send the transaction to the provider.	|
| @Configuration/ProviderCode		| 1    		| String       	| Provider's code.						|
| Configuration/Credentials		| 1    		| Configuracion Credenciales | Connection credentials.				|
| @Credentials/user 			| 1    		| String       	| User of the session for the connection.			|
| @Credentials/password			| 1    		| String       	| Password of the session for the connection.			|
| Credentials/genericURL		| 0..1 		| String       	| Generic URL.      						|
| Credentials/identificationURL		| 0..1 		| String       	| Specific URL for identification.				|
| Credentials/availRateURL		| 0..1 		| String       	| Specific URL for OTA_VehAvailRate operation.			|
| Credentials/rateRuleURL		| 0..1 		| String       	| Specific URL for OTA_VehRateRule operation.			|
| Credentials/vehResURL			| 0..1 		| String       	| Specific URL for OTA_VehRes operation.			|
| Credentials/specificURLs		| 0..1 		| Atributos    	| Specific URLs organized in Key/value pairs.			|
| Credentials/specificURLs /Configuration/Attributes | 0..1 | Atributos | Specific parameter configuration for this connector.		|
| Configuration/Attributes /Attribute	| 0..n 		| List of Atributo | List of Atributo.						|
| @Atributo/key     			| 1    		| String       	| Unique key that identifies the value.				|
| @Atributo/value   			| 1    		| String       	| Value of the Atributo.					|
| @Atributo/value   			| 1    		| String       	| Value of the Atributo.					|
| CarBaseRQ/ClientConfiguration		| 1    		| Configuracion Cliente | Client configuration information.			|
| @ClientConfiguration/agency		| 1    		| String       	| Agency name.        						|
| @ClientConfiguration/SellCurrency	| 1    		| String       	| Preferred currency code.					|



### Common Elements RS Example



~~~xml
    <CarBaseRS>
       <operationImplemented>true</operationImplemented>
       <Errors>
            <Error Code = "101" ShortText = "3">Unable to make a reservation</Error>
       </Errors>
       <auditData>
          <transactions>
             <Transaction>
                <timeStamp>2011-10-6T15:19:45.3544495+02:00</timeStamp>
                <RQ />
                <RS />
             </Transaction>
          </transactions>
          <timeStamp>2011-10-26T15:19:43.4014745+02:00</timeStamp>
          <processTimeMilliseconds>19532</processTimeMilliseconds>
       </auditData>
       <Warnings>
         <Warning Code = " " text = " " />
       </Warnings>
       …
    </CarBaseRS>
~~~


### Common Elements RS Description



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| CarBaseRS 					| 1         	|		| Root node.						|
| CarBaseRS/Success				| 0..1		| String	| This object doesn't contain any information. A response with a "Success" object indicates that everything went ok.	|
| CarBaseRS/Warnings 				| 0..1		| Warnings	| Contains a list of warning elements. Important but non critical information returned in the provider's response is shown in this object.	|
| Warning/code					| 1  		| String	| A code that identifies the warning.			|
| Warning/text					| 1  		| String	| Message of the warning.				|
| CarBaseRS/Errors				| 0..1		| Errors	| Contains a list of error elements. Important and critical information returned in the provider's response is shown in this object.  |
| Errors/Error					| 0..n		| List of MyError | Important and critical information returned in the provider's response is shown in this object.   		|
| @Error/Code					| 1  		| errorCodes Type | Code that indicates the error type. 		|
| @Error/ShortText				| 1  		| String	| Brief description of the returned error.		|
| Error/text					| 1  		| String	| Complete error message.				|
| CarBaseRS/auditData				| 1  		| AuditData	| In case registerTransactions has been set to true on the request this object will provide information about the communication with the provider. Otherwise it will be null.	|
| auditData/Transactions			| 1  		| List of Transaction | Object that contains information of a transaction sent to the provider's system.	|
| transaction/timeStamp 			| 1  		| timeStamp	| Indicates the time in which the message has been sent.  |
| transaction/RQ				| 1  		| String	| Serialized request object sent to the provider.     	|
| transaction/RS				| 1  		| String	| Serialized response object sent to the provider.     	|
| auditData/timeStamp				| 1  		| TimeStamp	| Time in which our response has been generated.	|
| auditData/processTime Milliseconds		| 1  		| Integer	| Time in milliseconds consumed by this method (currently unused).	|
                     


