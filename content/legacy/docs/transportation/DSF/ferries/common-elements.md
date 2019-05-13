---
title: Common Elements
keywords: transportation, data structure, ferries, common elements
search: Transportation - Ferries - Data Structure - Common Elements
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/ferries/common-elements
---



### Introduction


In every petition there some nodes which will always appear, there for
this chapter is dedicated for said nodes.



### Request Format


The common elements in all of the petitions are: source of the petition,
Timeout, the indication if you wish to register the transactions and the
provider configuration.



### Response Format


The response will contain the indication if the function is implemented
or not, application errors, if any, the providers traces if requested
and the response status.



### Common Elements RQ Example


~~~xml
    <TransportationBaseRQ>
       <source>
          <agencyCode>XXXXX</agencyCode>
          <languageCode>es</languageCode>
       </source>
       <timeoutMilliseconds>20000</timeoutMilliseconds>
       <filterAuditData>
          <registerTransactions>true</registerTransactions>
       </filterAuditData>
       <Configuration codigoProveedor="xx">
          <Credenciales User="xx " Password="xx">
             <UrlGeneric>https://xxx</UrlGeneric>
             <UrlAvail>https://xxx</UrlAvail>
             <UrlValuation>https://xxx</UrlValuation>
             <UrlReservation>https://xxx</UrlReservation>
             <UrlsEspecificas />
          </Credenciales>
       </Configuration>
       …
    </TransportationBaseRQ>
~~~


### Common Elements RQ Description



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| TransportationBaseRQ			| 1        	|		| Root node.							|
| timeoutMillisencods			| 1   		| Integer	| Timeout in milliseconds that the client will be waiting for the response.	|
| source          			| 1        	|		| Information about source requesting the operation.		|
| source/agencyCode			| 0..1		| String	| Agency code that requests the operation.			|
| source/languageCode			| 1   		| String	| Language code (ISO 3166-1 alpha-2) format lowercase.		|
| filterAuditData 			| 1        	|		| Enables or disables information returned in audit data.	|
| filterAuditData/registerTransactions	| 1   		| Boolean	| Returns all the transactions (XMLs) exchanged with the provider. |
| Configuration   			| 1        	|		| Information about source requesting the operation.		|
| Configuration/User			| 0..1		| String	| User code for connection.					| 
| Configuration/Password		| 0..1		| String	| Password for the connection.					|
| Configuration/UrlGeneric		| 0..1		| String	| Url generic connection.					|
| Configuration/UrlAvail		| 0..1		| String	| Url for Avail method.						|
| Configuration/UrlValuation		| 0..1		| String	| Url for Valuation method.					| 
| Configuration/UrlReservation		| 0..1		| String	| Url for Reservation method.					|
| Configuration/Parameters		| 0..1     	|		| Parameters for additional information.			|
| Configuration/Parameters/Parameter	| 0..n     	|		| List of parameter.  						|
| @key       				| 1   		| String	| Contains the keyword/Id to identify a parameter.		|
| @value     				| 1   		| String	| Contains the value of the parameter.				|
| ClientConfiguration			| 1        	|		| Client's configuration.					|
| @agency    				| 1   		| String	| Agency name.							|
| @mark      				| 1   		| String	| Mark.								|
| @businessLine				| 1   		| String	| Business line.						|
| @accessLevel				| 1   		| String	| Access level.							|
| @mean      				| 1   		| String	| Mean.								|
| @accessType				| 1   		| String	| Access type: WEB (Web) and WS (WebService).			|
| @currencyCode				| 1   		| String	| Currency code.						|




### Common Elements RS Example


~~~xml
    <TransportationBaseRS>
       <operationImplemented>true</operationImplemented>
       <applicationErrors>
          <ApplicationError>
             <type>102</type>
             <code>xxx</code>
             <description>xxx</description>
          </ApplicationError>
       </applicationErrors>
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
       <EstadoRespuesta tripType = "IDA" petitionType = "OW" status = "ok"/>
       …
    </TransportationBaseRS>
~~~


### Common Elements RS Description



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| TransportationBaseRS 				| 1            	|		| Root node.						|
| OperationImplemented 				| 1     	| Boolean	| If the operation is implemented by this provider or not. |
| applicationErrors    				| 0..n         	|		| Application errors reported by provider.		|
| applicationErrors/type			| 1     	| String	| Error Type as specified by XML Travelgate.		|
| applicationErrors/code			| 1     	| String	| Native error code reported by provider.		|
| applicationErrors/description			| 1     	| String	| Error description.					|
| auditData            				| 1            	|		| Information about processing that transaction.	|
| auditData/transactions			| 0..n         	|		|List of transactions communicated with provider.	|
| auditData/transactions/timeStamp		| 1     	| Integer	| TimeStamp in which has been generated that transaction. |
| auditData/transactions/RQ  			| 1     	| String	| Transaction Request.   				|
| auditData/transactions/RS			| 1     	| String	| Transaction Response.					|
| auditData/timeStamp  				| 1     	| Integer	| timeStamp in which response has been generated.	|
| auditData/processTimeMilliseconds		| 1     	| Integer	| Time in milliseconds consumed by this method.		|
| EstadoRespuesta      				| 1            	|		| Status of the ticket.					|
| @tripType       				| 1     	| String	| Journey type.						|
| @petitionType   				| 1     	| String	| Petition type: OW or RT.				|
| @status         				| 1     	| String	| Status.						|

