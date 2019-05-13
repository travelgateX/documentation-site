---
title: Static Configuration
keywords: transfers, data structure, static configuration
search: Car - Data Structure - Static Configuration
sidebar: mydoc_sidebar
permalink: /docs/car/DSF/static-configuration
---



### Method Goals


This method returns important information about the behavior of the
integration.



### Request Format


The request only requires the provider code.



### Response Format


The response contains a list of parameters that will inform how to
configure the integration.



### StaticConfigurationRQ Example



~~~xml
    <StaticConfigurationRQ xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
        <timeoutMilliseconds>999999</timeoutMilliseconds>
        <filterAuditData>
            <registerTransactions>false</registerTransactions>
        </filterAuditData>
        <Configuration ProviderCode="AVI">
            <Credentials user="testuser" password="testpass">
                <genericURL>https://testURL</genericURL>
                <identificationURL xsi:nil="true" />
                <availRateURL xsi:nil="true" />
                <rateRuleURL xsi:nil="true" />
                <vehResURL xsi:nil="true" />
                <specificURLs xsi:nil="true" />
            </Credentials>
            <Attributes>
                <Attribute key="RateCategory" value="2" />
            </Attributes>
        </Configuration>
        <ClientConfiguration agency="testAgency" SellCurrency="EUR" />
    </StaticConfigurationRQ>
~~~


### StaticConfigurationRQ Description




### StaticConfigurationRS Example



~~~xml
    <StaticConfigurationRS xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
        <operationImplemented>true</operationImplemented>
        <ImplementsOTA_VehRetRes>true</ImplementsOTA_VehRetRes>
        <ImplementsOTA_VehCancel>true</ImplementsOTA_VehCancel>
        <PictureURLInformed>false</PictureURLInformed>
        <SupportedTypesOfPayment>CASH</SupportedTypesOfPayment>
        <SupportedLanguages>TestLanguage</SupportedLanguages>
        <MaxPickUpOfficeLocationsPerOTA_VehAvail>1</MaxPickUpOfficeLocationsPerOTA_VehAvail>
        <MaxReturnOfficeLocationsPerOTA_VehAvail>1</MaxReturnOfficeLocationsPerOTA_VehAvail>
        <MaxPickUpIATALocationsPerOTA_VehAvail>1</MaxPickUpIATALocationsPerOTA_VehAvail>
        <MaxReturnIATALocationsPerOTA_VehAvail>1</MaxReturnIATALocationsPerOTA_VehAvail>
    </StaticConfigurationRS>
~~~


### StaticConfigurationRS Description



