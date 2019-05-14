---
title: Run Time Configuration
keywords: transfers, data structure, run time configuration
search: Car - Data Structure - Run Time Configuration
sidebar: mydoc_sidebar
permalink: /docs/car/DSF/runtimeconfiguration
---



### Method Goals


This method returns a list of "atributos" that should be included in
each request for the selected provider.



### Request Format


The request only requires the provider code.



### Response Format


The response contains a list of "attribute".



### RunTimeConfigurationRQ Example



~~~xml
    <RunTimeConfigurationRQ xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <timeoutMilliseconds>999999</timeoutMilliseconds>
      <filterAuditData>
        <registerTransactions>false</registerTransactions>
      </filterAuditData>
      <Configuration ProviderCode="AVI">
        <Credentials user="1234" password="">
          <genericURL>https://qaservices.carrental.com/wsbang/HTTPSOAPRouter/ws9071</UrlGenerica>
          <identificationURL xsi:nil="true" />
          <availRateURL xsi:nil="true" />
          <rateRuleURL xsi:nil="true" />
          <vehResURL xsi:nil="true" />
          <specificURLs xsi:nil="true" />
        </Credentials>
        <Attributes>
        </Attributes>
      </Configuration>
      <ClientConfiguration agency="testAgency" SellCurrency="EUR" />
    </RunTimeConfigurationRQ>
~~~


### RunTimeConfiguration Description




### RunTimeConfigurationRS Example



~~~xml
    <RunTimeConfigurationRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <operationImplemented>true</operationImplemented>
      <Configuration ProviderCode="AVI">
        <Credentials user="" password="">
          <genericURL xsi:nil="true" />
          <identificationURL xsi:nil="true" />
          <availRateURL xsi:nil="true" />
          <rateRuleURL xsi:nil="true" />
          <vehResURL xsi:nil="true" />
          <specificURLs xsi:nil="true" />
        </Credentials>
        <Attributes>
          <Attribute key="AVIFtp" value="" />
          <Attribute key="AVIFtpUser" value="" />
          <Attribute key="AVIFtpPassword" value="" />
          <Attribute key="Target" value="" />
          <Attribute key="maxResponses" value="" />
          <Attribute key="echoToken" value="" />
          <Attribute key="companyShortName" value="" />
          <Attribute key="version" value="" />
          <Attribute key="requestorID" value="" />
          <Attribute key="assignedIATA" value="" />
          <Attribute key="AVIFtp" value="" />
          <Attribute key="rateQualifier" value="" />
          <Attribute key="membershipID" value="" />
          <Attribute key="CorpDiscountNmbr" value="" />
        </Attributes>
      </Configuration>
    </RunTimeConfigurationRS>
~~~


### RunTimeConfigurationRS Description



