---
title: Static Configuration
keywords: activities, data structure, static configuration
search: Activities - Data Structure - Static Configuration
sidebar: mydoc_sidebar
permalink: /docs/activities/DSF/static-configuration
---



### Method Goals


This method returns important information about the behavior of the
integration (specific provider).



### Request Format


The request only requires the provider code and credentials.



### Response Format


The response contains a list of basic information about the limitations
of the integration / provider.

#### OpenAvailability
| **Type** | **Description** |
| --------- | --------------- | 
| false | Need specify passengers in avail request. In response, provider return price of option that you specify. |
| true | Not necessary specify passengers in avail request. In this case provider return all possible participant types that can provide, and you can choose the participants types that you are interested. |

#### Range
| **Type** | **Description** |
| --------- | --------------- | 
| R | Range date, means that provider return options between range of dates send in Avail request, anyone who is between these dates. |
| S | Specific date, means that provider return options for specific range of dates send in Avail request. |

### StaticConfigurationRQ Example



~~~xml
    <StaticConfigurationRQ xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <timeoutMilliseconds>60000</timeoutMilliseconds>
      <filterAuditData>
        <registerTransactions>false</registerTransactions>
      </filterAuditData>
      <Configuration codeProvider="XXX">
        <Credentials user="XXXX" password="XXXXX">
          <UrlGeneric>www.test.com</UrlGeneric>
          <UrlIdentification xsi:nil="true" />
          <UrlAvailability xsi:nil="true" />
          <UrlBook xsi:nil="true" />
          <UrlsSpecific xsi:nil="true" />
        </Credentials>
        <Attributes>
          <Attribute key="destinationId" value="
          Testing.com" />
          <Attribute key="destinationName" value="Testing.com" />
        </Attributes>
      </Configuration>
    </StaticConfigurationRQ>
~~~


### StaticConfigurationRQ Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| StaticConfigurationRQ			| 1           	|		| Root node.					|
| timeoutMilliseconds  			| 1    		| Integer	| Timeout in milliseconds that client will be waiting the response. |
| source               			| 1           	|		| Information about source requesting the operation. |
| source/languageCode  			| 1    		| String	| Language code (ISO 3166-1 alpha-2) format.	|
| filterAuditData      			| 1           	|		| Information about enable or disable information returned in audit data. |
| filterAuditData/registerTransactions	| 1    		| Boolean	| If true, registers the transactions with provider. |
| Configuration        			| 1           	|		| Information about source requesting the operation. |
| @codeProvider        			| 1    		| String	| Agency code of the provider.			|
| Configuration/Credentials		| 1           	|		| Provider credentials.				|
| Configuration/Credentials/User	| 0..1 		| String	| User code for connection.			|
| Configuration/Credentials/Password	| 0..1 		| String	| Password for connection.			|
| Configuration/Credentials/UrlGeneric	| 0..1 		| String	| Url generic connection.			|
| Configuration/UrlAvail		| 0..1 		| String	| Url for Avail method.				|
| Configuration/UrlValuation		| 0..1 		| String	| Url for Valuation method.			|
| Configuration/UrlBook			| 0..1 		| String	| Url for Reservation method.			|
| Configuration/Attributes		| 0..1        	|		| Parameters for additional information.	|
| Configuration/Attributes/Attribute	| 0..n        	|		| List of parameter.				|
| @key            			| 1    		| String	| Contains the keyword/Id to identify a parameter. |
| @value          			| 1    		| String	| Contains the value of the parameter.		|



### StaticConfigurationRS Example



~~~xml
    <StaticConfigurationRS xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <operationImplemented>true</operationImplemented>
      <NumOfDestinations>1</NumOfDestinations>
      <NumOfEvents>0</NumOfEvents>
      <NumOfEventTypes>0</NumOfEventTypes>
      <DateRange>
        <Range>S</Range>
        <MaxDays>5</MaxDays>
      </DateRange>
      <Languages>
        <Language>es</Language>
      </Languages>
      <OpenAvailability>false</OpenAvailability>
      <NumMaxParticipants>12</NumMaxParticipants>
    </StaticConfigurationRS>
~~~


### StaticConfigurationRS Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| StaticConfigurationRS			| 1           	|		| Root node.					|
| AvailabilityByRegion | 1  		| Boolean | Indicates if it is possible to get availability by Region |
| AvailabilityByPosition | 1  		| Boolean | Indicates if it is possible to get availability by Position |
| AvailabilityByTourActivityID | 1  		| Boolean | Indicates if it is possible to get availability by TourActivityID|
| AvailabilityByMultipleTourActivitySearch| 1  		| Boolean | Indicates if it is possible to get availability by MultipleTourActivitySearch|
| NumOfDestinations			| 1  		| Integer	| Number of destination that specific integration can provider/returned in one same Avail. |
| NumOfEvents				| 1  		| Integer	| Number of TourActivityID that specific integration can provider/returned in one same Avail. |
| NumOfEventTypes			| 1  		| Integer	| Number of Category Code that specific integration can provider/returned in one same Avail. |
| DateRange				| 1       	|		| Number of destination that specific integration can provider in one same Avail. |
| Range   				| 1  		| Enum		| Type of range that identifying how we can get the different options for each activity depending on the date range sent on Avail request. |
| MaxDays 				| 1  		| Integer	| Maximum of days that you can send in Avail request. In case that we return 999, means that the provider doesn't specify a maximum. (Possibles case: "R" or "S"). |
| Languages				| 1       	|		| List of languages that provider can return different response. |
| Languages/Language			| 1..n		| String	| Language code (ISO 3166-1 alpha-2) format.	|
| OpenAvailability			| 1  		| Boolean	| Type of provider, the difference is in avail response. |
| NumMaxParticipants			| 1  		| Integer	| Maximum number of participants/Tickets you can request in availability. |


