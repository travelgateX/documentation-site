---
title: Run Time Configuration
keywords: activities, data structure, run time configuration
search: Activities - Data Structure - Run Time Configuration
sidebar: mydoc_sidebar
permalink: /docs/activities/DSF/runtimeconfiguration
---



### Method Goals


This method returns a list of Attributes that should be included in
each request for the selected provider.



### Request Format


The request only requires the provider code.



### Response Format


The response contains a list of Attribute.



### RunTimeConfigurationRQ Example



~~~xml
    <RunTimeConfigurationRQ xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <timeoutMilliseconds>60000</timeoutMilliseconds>
      <filterAuditData>
        <registerTransactions>false</registerTransactions>
      </filterAuditData>
      <Configuration codeProvider="HBA">
        <Credentials user="TRAVELTNETES41375" password="TRAVELTNETES41375">
          <UrlGeneric>http://testapi.interface-xml.com/appservices/http/FrontendService</UrlGeneric>
          <UrlIdentification xsi:nil="true" />
          <UrlAvailability xsi:nil="true" />
          <UrlBook xsi:nil="true" />
          <UrlsSpecific xsi:nil="true" />
        </Credentials>
        <Attributes>
          <Attribute key="destinationId" value="http://xtghubstatic.blob.core.windows.net/int-static-activities/HBA-DestinationIDs.csv" />
          <Attribute key="destinationName" value="http://xtghubstatic.blob.core.windows.net/int-static-activities/HBA-TicketDestinations.csv" />
        </Attributes>
      </Configuration>
    </RunTimeConfigurationRQ>
~~~


### RunTimeConfiguration Description




### RunTimeConfigurationRS Example



~~~xml
    <RunTimeConfigurationRS xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <operationImplemented>true</operationImplemented>
      <ConfigurationProvider>
        <Credentials user="" password="">
          <UrlGeneric />
          <UrlIdentification xsi:nil="true" />
          <UrlAvailability xsi:nil="true" />
          <UrlBook xsi:nil="true" />
          <UrlsSpecific xsi:nil="true" />
        </Credentials>
        <Attributes>
          <Attribute key="destinationId" value="" />
          <Attribute key="destinationName" value="" />
        </Attributes>
      </ConfigurationProvider>
    </RunTimeConfigurationRS>
~~~


### RunTimeConfigurationRS Description



