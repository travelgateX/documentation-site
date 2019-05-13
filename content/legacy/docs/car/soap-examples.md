---
title: Full SOAP Examples
...

  -------------------------------------------------------------------------
  Example   Description                                               Sette
  Parameter                                                           d
                                                                      by
  --------- --------------------------------------------------------- -----
  YOUR\_TRA This is the User to access the HUB                        XMLTr
  VELGATE\_                                                           avelg
  USERNAME                                                            ate

  YOUR\_TRA This is the Passwords to access the HUB                   XMLTr
  VELGATE\_                                                           avelg
  PASSWORD                                                            ate

  TIMEOUT\_ This timeout is set for the HUB. Note that this should be Runti
  FOR\_THE\ at least 1 second higher than the Provider's Request      me
  _HUB\_REQ Timeout. This way you can ensure that the HUB has time to param
  UEST      receive the response from our integration and responds it eter
            back to you.                                              

  TIMEOUT\_ This timeout is set for the message that will be sent to  Runti
  FOR\_THE\ the provider's system. If this time is exceeded, the      me
  _PROVIDER integration will respond to the HUB with a timeout error. param
  \_REQUEST                                                           eter

  YOUR\_PRO This is the user to access the provider's system          Provi
  VIDER\_US                                                           der
  ER                                                                  

  YOUR\_PRO This is the password to access the provider's system      Provi
  VIDER\_PA                                                           der
  SS                                                                  
  -------------------------------------------------------------------------

|

OTA\_VehAvailRate Method SOAP Example
=====================================

:

    <s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:u = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <s:Header>
            <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <o:UsernameToken u:Id = "uuid-e4476494-521f-4268-938d-2f44e89797be-1">
                    <o:Username>YOUR_TRAVELGATE_USERNAME</o:Username>
                    <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">YOUR_TRAVELGATE_PASSWORD</o:Password>
                </o:UsernameToken>
            </o:Security>
        </s:Header>
        <s:Body>
            <OTA_VehAvailRate xmlns = "http://schemas.xmltravelgate.com/hub/2012/06">
                <vehAvailRateRQ xmlns:i = "http://www.w3.org/2001/XMLSchema-instance">
                    <timeoutMilliseconds>THE_TIMEOUT_FOR _THE_HUB_REQUEST</timeoutMilliseconds>
                    <version i:nil = "true"/>
                    <providerRQs>
                        <ProviderRQ>
                            <code>SXT</code>
                            <id>1</id>
                            <rqXML>
                                <OTA_VehAvailRateRQ xmlns = "" xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
                                    <timeoutMilliseconds>THE_TIMEOUT_FOR_THE_PROVIDER'S_REQUEST</timeoutMilliseconds>
                                    <filterAuditData>
                                        <registerTransactions>false</registerTransactions>
                                    </filterAuditData>
                                    <Configuration ProviderCode = "SXT">
                                        <Credentials user = "YOUR_PROVIDER'S_USER" password = "YOUR_PROVIDER'S_PASS">
                                            <genericURL>https://webservices.sixt.de/webservices/reservation/test/soap_2.00</genericURL>
                                            <identificationURL xsi:nil = "true"/>
                                            <availRateURL xsi:nil = "true"/>
                                            <rateRuleURL xsi:nil = "true"/>
                                            <vehResURLrmacion xsi:nil = "true"/>
                                            <specificURLs xsi:nil = "true"/>
                                        </Credentials>
                                        <Attributes>
                                        </Attributes>
                                    </Configuration>
                                    <ClientConfiguration agency = "testAgency" SellCurrency = "EUR"/>
                                    <POS>
                                        <Source ISOCountry = "ESP">
                                            <RequestorID Type = "LAN" ID = "es"/>
                                        </Source>
                                    </POS>
                                    <VehAvailRQCore>
                                        <VehRentalCore PickUpDateTime = "2014-05-15T09:30:00" ReturnDateTime = "2014-05-17T10:00:00">
                                            <PickUpLocation LocationCode = "7412" CodeContext = "IATA"/>
                                            <ReturnLocation LocationCode = "7412" CodeContext = "IATA"/>
                                        </VehRentalCore>
                                        <DriverType Age = "30"/>
                                    </VehAvailRQCore>
                                    <VehAvailRQInfo>
                                        <Customer>
                                            <Primary>
                                                <CitizenCountryName Code = "ES"/>
                                            </Primary>
                                        </Customer>
                                    </VehAvailRQInfo>
                                </OTA_VehAvailRateRQ>
                            </rqXML>
                        </ProviderRQ>
                    </providerRQs>
                </vehAvailRateRQ>
            </OTA_VehAvailRate>
        </s:Body>
    </s:Envelope>

|

OTA\_VehRateRule Method SOAP Example
====================================

:

    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
    <soapenv:Header>
        <wsse:Security>
            <wsse:UsernameToken>
                <wsse:Username>YOUR_TRAVELGATE_USERNAME</wsse:Username>
                <wsse:Password>YOUR_TRAVELGATE_PASSWORD</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <ns:OTA_VehRateRule>
            <ns:vehRateRuleRQ>
                <ns:timeoutMilliseconds>30000</ns:timeoutMilliseconds>
                <ns:version>1</ns:version>
                <ns:providerRQ>
                    <ns:code>SXT</ns:code>
                    <ns:id>1</ns:id>
                    <ns:rqXML>
                        <OTA_VehRateRuleRQ xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
                            <timeoutMilliseconds>28000</timeoutMilliseconds>
                            <filterAuditData>
                                <registerTransactions>false</registerTransactions>
                            </filterAuditData>
                            <Configuration ProviderCode = "SXT">
                                <Credentials user = "YOUR_PROVIDER'S_USER" password = "YOUR_PROVIDER'S_PASS">
                                    <genericURL>https://webservices.sixt.de/webservices/reservation/test/soap_2.00</genericURL>
                                    <identificationURL xsi:nil = "true"/>
                                    <availRateURL xsi:nil = "true"/>
                                    <rateRuleURL xsi:nil = "true"/>
                                    <vehResURLrmacion xsi:nil = "true"/>
                                    <specificURLs xsi:nil = "true"/>
                                </Credentials>
                                <Attributes>
                                </Attributes>
                            </Configuration>
                            <ClientConfiguration agency = "testAgency" SellCurrency = "EUR"/>
                            <POS>
                                <Source ISOCountry = "ESP">
                                    <RequestorID Type = "LAN" ID = "es"/>
                                </Source>
                            </POS>
                            <RentalInfo Status = "Available">
                                <VehRentalCore PickUpDateTime = "2014-05-15T09:30:00" ReturnDateTime = "2014-05-17T10:00:00">
                                    <PickUpLocation LocationCode = "7412" CodeContext = "OFFICE"/>
                                    <ReturnLocation LocationCode = "7412" CodeContext = "OFFICE"/>
                                </VehRentalCore>
                                <VehicleInfo AirConditionInd = "false" TransmissionType = "MANUAL" VendorCarType = "GB91M000@1@MCMN">
                                    <VehType VehicleCategory = "" doorCount = "3"/>
                                    <VehMakeModel Name = " - Renault Twingo" Code = "MCMN"/>
                                </VehicleInfo>
                                <RateQualifier RateQualifier = "GB91M000"/>
                                <TPA_Extensions>
                                    <Atributos>
                                    </Atributos>
                                </TPA_Extensions>
                            </RentalInfo>
                        </OTA_VehRateRuleRQ>
                    </ns:rqXML>
                </ns:providerRQ>
            </ns:vehRateRuleRQ>
        </ns:OTA_VehRateRule>
    </soapenv:Body>

> \</soapenv:Envelope\>

|

OTA\_VehRes Method SOAP Example
===============================

:

    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <soapenv:Header>
            <wsse:Security>
                <wsse:UsernameToken>
                    <wsse:Username>YOUR_TRAVELGATE_USERNAME</wsse:Username>
                    <wsse:Password>YOUR_TRAVELGATE_PASSWORD</wsse:Password>
                </wsse:UsernameToken>
            </wsse:Security>
        </soapenv:Header>
        <soapenv:Body>
            <ns:OTA_VehRes>
                <ns:vehResRQ>
                    <ns:timeoutMilliseconds>60000</ns:timeoutMilliseconds>
                    <ns:version>1</ns:version>
                    <ns:providerRQ>
                        <ns:code>SXT</ns:code>
                        <ns:id>1</ns:id>
                        <ns:rqXML>
                            <OTA_VehResRQ xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
                                <timeoutMilliseconds>58000</timeoutMilliseconds>
                                <filterAuditData>
                                    <registerTransactions>false</registerTransactions>
                                </filterAuditData>
                                <Configuration ProviderCode = "SXT">
                                    <Credentials user = "YOUR_PROVIDER'S_USER" password = "YOUR_PROVIDER'S_PASS">
                                        <genericURL>https://webservices.sixt.de/webservices/reservation/test/soap_2.00</genericURL>
                                        <identificationURL xsi:nil = "true"/>
                                        <availRateURL xsi:nil = "true"/>
                                        <rateRuleURL xsi:nil = "true"/>
                                        <vehResURLrmacion xsi:nil = "true"/>
                                        <specificURLs xsi:nil = "true"/>
                                    </Credentials>
                                    <Attributes>
                                    </Attributes>
                                </Configuration>
                                <ClientConfiguration agency = "testAgency" SellCurrency = "EUR"/>
                                <POS>
                                    <Source ISOCountry = "ESP">
                                        <RequestorID Type = "LAN" ID = "es"/>
                                    </Source>
                                </POS>
                                <VehResRQCore Status = "Available">
                                    <VehRentalCore PickUpDateTime = "2014-05-15T09:30:00" ReturnDateTime = "2014-05-17T10:00:00">
                                        <PickUpLocation LocationCode = "7412" CodeContext = "OFFICE"/>
                                        <ReturnLocation LocationCode = "7412" CodeContext = "OFFICE"/>
                                    </VehRentalCore>
                                    <Customer>
                                        <Primary BirthDate = "1982-03-23">
                                            <PersonName>
                                                <GivenName>TEST</GivenName>
                                                <Surname>TEST</Surname>
                                            </PersonName>
                                            <Telephone PhoneTechType = "VOICE" PhoneNumber = "871 968 181"/>
                                            <Email>car@xmltravelgate.com</Email>
                                            <Document DocID = "07198262K" DocType = "NATIONAL_IDENTITY_DOCUMENT"/>
                                            <Address>
                                                <AddressLine>C/ TEST</AddressLine>
                                                <CityName>TEST</CityName>
                                                <PostalCode>07500</PostalCode>
                                                <CountryName Code = "ESP"/>
                                            </Address>
                                            <CitizenCountryName Code = "ES"/>
                                        </Primary>
                                    </Customer>
                                    <VehPref AirConditionInd = "false" TransmissionType = "MANUAL" VendorCarType = "GB91M000@1@MCMN">
                                        <VehType VehicleCategory = "" doorCount = "3"/>
                                        <VehMakeModel Name = " - Renault Twingo" Code = "MCMN"/>
                                    </VehPref>
                                    <DriverType Age = "32"/>
                                    <RateQualifier RateQualifier = "GB91M000"/>
                                    <TotalCharge RateTotalAmount = "68.40" CurrencyCode = "GBP"/>
                                    <UniqueID ID = "XTG-655288144" Type = "1"/>
                                    <TPA_Extensions>
                                        <Atributos>
                                            <Atributo key = "AvailabilityRow" value = "E13E1C-JKnwd0rXkhjsDVXlPW//WumA9b1+wTPjZtoYpQ/22ZbMrE/OBIU4EeQCfpMquZwg8kzy83wnHEoK6gbgxvdtf4tZhmb7iiJO4n6RXSPQNjop7iZkOLCTnedvfVJByD63PjB32XgWnogohuZYsua/7THPuUkt7KT8jRySWCfmsg1fBFJAJ/rh9PjOlBhafzoiWQ8XMdJ/Bvfi4vKPzVPiILZ7mLonMIMNLvtFWDz9r2gDkBwk1IgdduhFIMNLMeObKdPY8CBsSpQt7amleFKpCPiWLGKaaLGyAXYwTyjf/K6AqIDyL3h3cnGgVkEkcrs0H799q1sMrbbPH1GceS4gcSb3J+4BPtM5CrF7LAtKwAJuSTw30W/qIJd6ywutKpmjnPnwKIzujOnyb49F5sfS/Oi1pryOGnFxR6RBH2kM35BWYCB7LLdYfRSwgeDeGdxqyYRFuYRX5SxAUZratKokwioUqiMTU/87XIMNIofOxmc/jOpDgXH2NBvGQh5qFRsHdUGZYJPat8TyOk3ixiNlAeqSHXAoypCThET1i2s6v7GsYBGB/yVClCWPLhrT+hSYw2cOYafMPm2sEUXxXYI0LEF0MqlbsWs5xyA0CY6a058IHZjRUEVONWNvIbnd4iDF9V71ln7fhv3bMN/cqF3ZakN6D1pHhyTvocYA/tGrhvTfZWFuMJx+133lkNL8a7A3Cenpoxly/AbICU7AoJc0JwPUyuxTOEU6Kb32P92WP6A/a7rjbrGwrPlc5y3EuHAWm8R6+0rl1z/wWvdh+cZmH68HFmo7t++f"/>
                                        </Atributos>
                                    </TPA_Extensions>
                                </VehResRQCore>
                                <VehResRQInfo/>
                            </OTA_VehResRQ>
                        </ns:rqXML>
                    </ns:providerRQ>
                </ns:vehResRQ>
            </ns:OTA_VehRes>
        </soapenv:Body>
    </soapenv:Envelope> 

|

OTA\_VehLocSearch Method SOAP Example
=====================================

:

    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
    <soapenv:Header>
        <wsse:Security>
            <wsse:UsernameToken>
                <wsse:Username>YOUR_TRAVELGATE_USERNAME</wsse:Username>
                <wsse:Password>YOUR_TRAVELGATE_PASSWORD</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <ns:OTA_VehLocSearch>
            <ns:vehLocSearchRQ>
                <ns:timeoutMilliseconds>999999</ns:timeoutMilliseconds>
                <ns:version>1</ns:version>
                <ns:providerRQ>
                    <ns:code>SXT</ns:code>
                    <ns:id>1</ns:id>
                    <ns:rqXML>
                        <OTA_VehLocSearchRQ xmlns = "" xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
                            <timeoutMilliseconds>999999</timeoutMilliseconds>
                            <filterAuditData>
                                <registerTransactions>false</registerTransactions>
                            </filterAuditData>
                            <Configuration ProviderCode = "SXT">
                                <Credentials user = "YOUR_PROVIDER'S_USER" password = "YOUR_PROVIDER'S_PASS">
                                    <genericURL>https://webservices.sixt.de/webservices/reservation/test/soap_2.00</genericURL>
                                    <identificationURL xsi:nil = "true"/>
                                    <availRateURL xsi:nil = "true"/>
                                    <rateRuleURL xsi:nil = "true"/>
                                    <vehResURLrmacion xsi:nil = "true"/>
                                    <specificURLs xsi:nil = "true"/>
                                </Credentials>
                                <Attributes>
                                </Attributes>
                            </Configuration>
                            <ClientConfiguration agency = "testAgency" SellCurrency = "EUR"/>
                            <POS>
                                <Source ISOCountry = "ESP">
                                    <RequestorID Type = "LAN" ID = "es"/>
                                </Source>
                            </POS>
                        </OTA_VehLocSearchRQ>
                    </ns:rqXML>
                </ns:providerRQ>
            </ns:vehLocSearchRQ>
        </ns:OTA_VehLocSearch>
    </soapenv:Body>

> \</soapenv:Envelope\>

|
