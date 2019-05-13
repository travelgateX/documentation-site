---
title: Common Elements
keywords: activities, data structure, common elements
search: Activities - Data Structure - Common Elements
sidebar: mydoc_sidebar
permalink: /docs/activities/DSF/common-elements
---

This node will be in every request and response objects.

The request objects contains the supplier's configuration, urls and
credentials.

The response object contains the operation status and errors if any.



### Common Elements RQ Example



~~~xml
    <TicketBaseRQ>
           <timeoutMilliseconds>60000</timeoutMilliseconds>
        <source>
            <!--  <agencyCode>test</agencyCode> -->
            <languageCode>es</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>false</registerTransactions>
        </filterAuditData>
        <Configuration codeProvider = "HBA">
            <Credentials user = "XXX" password = "XXX">
                <UrlGeneric>http://testapi.interface-xml.com/appservices/http/FrontendService</UrlGeneric>
                <UrlIdentification xsi:nil = "true"/>
                <UrlAvailability xsi:nil = "true"/>
                <UrlBook xsi:nil = "true"/>
                <UrlsSpecific xsi:nil = "true"/>
            </Credentials>
            <Attributes>
                <Attribute key = "urlFTP" value = "ftp://ftp.bedsonline.com/Hoteles/"/>
                <Attribute key = "userFTP" value = "xxx"/>
                <Attribute key = "passFTP" value = "xxx"/>
            </Attributes>
        </Configuration>
       …
    </TicketBaseRQ>
~~~


### Common Elements RQ Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| TicketBaseRQ         			| 1           	|		| Root node.					|
| timeoutMillisencods  			| 1    		| Integer	| Timeout in milliseconds that client will be waiting the response. |
| source               			| 1           	|		| Information about source requesting the operation. |
| source/languageCode  			| 1    		| String	| Language code (ISO 3166-1 alpha-2) format.	|
| filterAuditData      			| 1           	|		| Information about enable or disable information returned in audit data. |
| filterAuditData/registerTransactions	| 1    		| Boolean	| If true, registers the transactions  with provider.|
| Configuration        			| 1           	|		| Information about source requesting the  operation.|
| @codeProvider        			| 1    		| String	| Agency code of the provider.			|
| Configuration/Credentials		| 1           	|		| Provider credentials.				|
| Configuration/Credentials/User	| 0..1		| String	| User code for connection.			|
| Configuration/Credentials/Password	| 0..1 		| String	| Password for connection.			|
| Configuration/Credentials/UrlGeneric	| 0..1 		| String	| Url generic connection.			|
| Configuration/UrlAvail		| 0..1 		| String	| Url for Avail method.				|
| Configuration/UrlValuation		| 0..1 		| String	| Url for Valuation method.    			|
| Configuration/UrlBook			| 0..1 		| String	| Url for Reservation method.			|
| Configuration/Attributes		| 0..1        	|		| Parameters for additional information.	|
| Configuration/Attributes/Attribute	| 0..n        	|		| List of parameter.				1
| @key                 			| 1    		| String	| Contains the keyword/Id to identify a parameter. |
| @value               			| 1    		| String	| Contains the value of the parameter.		|



### Common Elements RS Example



~~~xml
    <TicketBaseRS>
       <operationImplemented>true</operationImplemented>
       <Errors>
            <Error Code = "204" ShortText = "">Provider returns 0 results</Error>
       </Errors>
       <auditData>
          <transactions>
           <timeStamp>2013-12-11T15:19:45.3544495+02:00</timeStamp>
                <RQ />
                <RS />
          </transactions>
                    .
                .
                .
       </auditData>

    </TicketBaseRS>
~~~


### Common Elements RS Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| TicketBaseRS          		| 1             |		| Root node.					|
| OperationImplemented  		| 1     	| Boolean	| If the operation is implemented by this provider or not. |
| Errors                		| 0..1  	| Errors	| Errors reported by provider.			|
| Errors/Error          		| 0..n  	| Error  	| List of errors reported by provider.		|
| @Error/Code           		| 1     	| String	|  Typified error of XML Travelgate.		|
| @Error/ShortText      		| 1     	| String 	| Native error code reported by provider.	|
| Error/Text            		| 1     	| String	| Error description.				|
| auditData             		| 1             |		| Information about processing that transaction. | 
| auditData/transactions		| 0..n          |		| List of transactions communicated with provider. |
| auditData/transactions/timeStamp 	| 1     	| Integer	| TimeStamp in which has been generated that transaction. |
| auditData/transactions/RQ		| 1     	| String	| Transaction Request.				|
| auditData/transactions/RS		| 1     	| String	| Transaction Response.				|
| auditData/timeStamp   		| 1     	| Integer	| TimeStamp which response has been generated.	|


