---
title: SOAP Examples
keywords: hotel, soap, examples
search: Hotel - SOAP Examples
sidebar: mydoc_sidebar
permalink: /docs/hotel/soap-examples
---


### Avail

~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:Avail>
          <ns:availRQ>
            <ns:timeoutMilliseconds>18000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQs>
              <ns:ProviderRQ>
                <ns:code>XXX</ns:code>
                <ns:id>1</ns:id>
                <ns:rqXML>
                  <AvailRQ>
                    <timeoutMilliseconds>99999</timeoutMilliseconds>
                    <source>
                      <languageCode>en</languageCode>
                    </source>
                    <filterAuditData>
                      <registerTransactions>false</registerTransactions>
                    </filterAuditData>
                    <Configuration>
                      <User></User>
                      <Password></Password>
                      <UrlAvail>http://www.test.net/test_XML_V10.php?</UrlAvail>
                      <UrlReservation>http://www.test.net/scr/reservation_xml.php</UrlReservation>
                      <Parameters>
                        <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                        <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                        <Parameter key = "office" value = "55555"></Parameter>
                        <Parameter key = "password" value = "XXXXXX"></Parameter>
                      </Parameters>
                    </Configuration>
                    <AvailDestinations>
                      <Destination type = "CTY" code = "XXX"/>
                    </AvailDestinations>
                    <StartDate>08/08/2012</StartDate>
                    <EndDate>12/12/2012</EndDate>
                    <Currency>EUR</Currency>
                    <RoomCandidates>
                      <RoomCandidate id = "1">
                        <Paxes>
                          <Pax age = "30" id = "1"/>
                          <Pax age = "30" id = "2"/>
                        </Paxes>
                      </RoomCandidate>
                    </RoomCandidates>
                  </AvailRQ>
                </ns:rqXML>
              </ns:ProviderRQ>
            </ns:providerRQs>
          </ns:availRQ>
        </ns:Avail>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### Multi Avail



~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:Avail>
          <ns:availRQ>
            <ns:timeoutMilliseconds>18000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQs>
              <ns:ProviderRQ>
                <ns:code>XXX</ns:code>
                <ns:id>1</ns:id>
                <ns:rqXML>
                  <AvailRQ>
                    <timeoutMilliseconds>17700</timeoutMilliseconds>
                    <source>
                      <languageCode>en</languageCode>
                    </source>
                    <filterAuditData>
                      <registerTransactions>false</registerTransactions>
                    </filterAuditData>
                    <Configuration>
                      <User></User>
                      <Password></Password>
                      <UrlAvail>http://www.test.net/test_XML_V10.php?</UrlAvail>
                      <UrlReservation>http://www.test.net/scr/reservation_xml.php</UrlReservation>
                      <Parameters>
                        <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                        <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                        <Parameter key = "office" value = "55555"></Parameter>
                        <Parameter key = "password" value = "XXXXXX"></Parameter>
                      </Parameters>
                    </Configuration>
                    <SearchType>Combined</SearchType>
                    <CancellationPolicies>true</CancellationPolicies>
                    <AvailDestinations>
                      <Destination type = "CTY" code = "1"/>
                    </AvailDestinations>
                    <StartDate>10/12/2014</StartDate>
                    <EndDate>12/12/2014</EndDate>
                    <Currency>EUR</Currency>
                    <RoomCandidates>
                      <RoomCandidate id = "1">
                        <Paxes>
                          <Pax age = "30" id = "1"/>
                          <Pax age = "30" id = "2"/>
                        </Paxes>
                      </RoomCandidate>
                    </RoomCandidates>
                  </AvailRQ>
                </ns:rqXML>
              </ns:ProviderRQ>
              <ns:ProviderRQ>
                <ns:code>XXX</ns:code>
                <ns:id>2</ns:id>
                <ns:rqXML>
                  <AvailRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                    <timeoutMilliseconds>18000</timeoutMilliseconds>
                    <source>
                      <languageCode>en</languageCode>
                    </source>
                    <filterAuditData>
                      <registerTransactions>false</registerTransactions>
                    </filterAuditData>
                    <Configuration>
                      <User></User>
                      <Password></Password>
                      <UrlAvail>http://www.test.net/test_XML_V10.php?</UrlAvail>
                      <UrlReservation>http://www.test.net/scr/reservation_xml.php</UrlReservation>
                      <Parameters>
                        <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                        <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                        <Parameter key = "office" value = "55555"></Parameter>
                        <Parameter key = "password" value = "XXXXXX"></Parameter>
                      </Parameters>
                    </Configuration>
                    <SearchType>Combined</SearchType>
                    <CancellationPolicies>false</CancellationPolicies>
                    <AvailDestinations>
                      <Destination type = "CTY" code = "2"/>
                    </AvailDestinations>
                    <StartDate>05/11/2014</StartDate>
                    <EndDate>06/11/2014</EndDate>
                    <Currency>EUR</Currency>
                    <RoomCandidates>
                      <RoomCandidate cantidad = "1" id = "1">
                        <Paxes>
                          <Pax age = "30" id = "1"/>
                          <Pax age = "30" id = "2"/>
                        </Paxes>
                      </RoomCandidate>
                    </RoomCandidates>
                  </AvailRQ>
                </ns:rqXML>
              </ns:ProviderRQ>
            </ns:providerRQs>
          </ns:availRQ>
        </ns:Avail>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### Valuation


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:Valuation>
          <ns:valuationRQ>
            <ns:timeoutMilliseconds>180000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <ValuationRQ>
                  <timeoutMilliseconds>10000</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>true</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlAvail>http://www.test.net/test_XML_V10.php?</UrlAvail>
                    <UrlReservation>http://www.test.net/scr/reservation_xml.php</UrlReservation>
                    <Parameters>
                      <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                      <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                      <Parameter key = "office" value = "55555"></Parameter>
                      <Parameter key = "password" value = "XXXXXX"></Parameter>
                    </Parameters>
                  </Configuration>
                  <StartDate>08/08/2014</StartDate>
                  <EndDate>07/11/2014</EndDate>
                  <MealPlanCode>AC</MealPlanCode>
                  <HotelCode>0001</HotelCode>
                  <PaymentType>MerchantPay</PaymentType>
                  <OptionType>Hotel</OptionType>
                  <Rooms>
                    <Room id = "91" roomCandidateRefId = "1" code = "91" description = "Standard Room"/>
                  </Rooms>
                  <RoomCandidates>
                    <RoomCandidate id = "1">
                      <Paxes>
                        <Pax age = "30" id = "1"/>
                        <Pax age = "30" id = "2"/>
                      </Paxes>
                    </RoomCandidate>
                  </RoomCandidates>
                </ValuationRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:valuationRQ>
        </ns:Valuation>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### GeographicalDestinationTree


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:GeographicDestinationTree>
          <ns:geographicDestinationTreeRQ>
            <ns:timeoutMilliseconds>300000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <GeographicDestinationTreeRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                  <timeoutMilliseconds>999999</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>false</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlGeneric>http://test.Service</UrlGeneric>
                    <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                    <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                    <Parameter key = "office" value = "55555"></Parameter>
                    <Parameter key = "password" value = "XXXXXX"></Parameter>
                  </Configuration>
                </GeographicDestinationTreeRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:geographicDestinationTreeRQ>
        </ns:GeographicDestinationTree>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### Hotel List


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:HotelList>
          <ns:hotelListRQ>
            <ns:timeoutMilliseconds>300000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <HotelListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                  <timeoutMilliseconds>270000</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>false</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlGeneric>http://test.Service</UrlGeneric>
                    <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                    <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                    <Parameter key = "office" value = "55555"></Parameter>
                    <Parameter key = "password" value = "XXXXXX"></Parameter>
                  </Configuration>
                </HotelListRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:hotelListRQ>
        </ns:HotelList>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### DescriptiveInfo


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <soapenv:Header>
            <wsse:Security>
                <wsse:UsernameToken>
                    <wsse:Username>XXXXXX</wsse:Username>
                    <wsse:Password>XXXXXX</wsse:Password>
                </wsse:UsernameToken>
            </wsse:Security>
        </soapenv:Header>
        <soapenv:Body>
            <ns:DescriptiveInfo>
                <ns:descriptiveInfoRQ>
                    <ns:timeoutMilliseconds>180000</ns:timeoutMilliseconds>
                    <ns:version>1</ns:version>
                    <ns:providerRQ>
                        <ns:code>XXX</ns:code>
                        <ns:id>1</ns:id>
                        <ns:rqXML>
                            <DescriptiveInfoRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                                <timeoutMilliseconds>999999</timeoutMilliseconds>
                                <source>
                                    <languageCode>en</languageCode>
                                </source>
                                <filterAuditData>
                                    <registerTransactions>false</registerTransactions>
                                </filterAuditData>
                                <Configuration>
                                    <User></User>
                                    <Password></Password>
                                    <UrlGeneric>http://test.Service</UrlGeneric>
                                    <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                                    <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                                    <Parameter key = "office" value = "55555"></Parameter>
                                    <Parameter key = "password" value = "XXXXXX"></Parameter>
                                </Configuration>
                                <Hotel>
                                    <Code>XXXX</Code>
                                </Hotel>
                            </DescriptiveInfoRQ>
                        </ns:rqXML>
                    </ns:providerRQ>
                </ns:descriptiveInfoRQ>
            </ns:DescriptiveInfo>
        </soapenv:Body>
    </soapenv:Envelope>
~~~


### AvailDestinationTree


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:AvailDestinationTree>
          <ns:availDestinationTreeRQ>
            <ns:timeoutMilliseconds>240000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <AvailDestinationTreeRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                  <timeoutMilliseconds>999999</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>false</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlGeneric>http://test.Service</UrlGeneric>
                    <Parameters>
                      <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                      <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                      <Parameter key = "office" value = "55555"></Parameter>
                      <Parameter key = "password" value = "XXXXXX"></Parameter>
                    </Parameters>
                  </Configuration>
                </AvailDestinationTreeRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:availDestinationTreeRQ>
        </ns:AvailDestinationTree>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### Room List


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
            >
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:RoomList>
          <ns:roomListRQ>
            <ns:timeoutMilliseconds>240000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <RoomListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                  <timeoutMilliseconds>999999</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>false</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlAvail>http://www.test.net/test_XML_V10.php?</UrlAvail>
                    <UrlReservation>http://www.test.net/scr/reservation_xml.php</UrlReservation>
                    <Parameters>
                      <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                      <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                      <Parameter key = "office" value = "55555"></Parameter>
                      <Parameter key = "password" value = "XXXXXX"></Parameter>
                    </Parameters>
                  </Configuration>
                </RoomListRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:roomListRQ>
        </ns:RoomList>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### MealPlanList


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
            >
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:MealPlanList>
          <ns:mealPlanListRQ>
            <ns:timeoutMilliseconds>240000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <MealPlanListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                  <timeoutMilliseconds>999999</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>false</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlAvail>http://www.test.net/test_XML_V10.php?</UrlAvail>
                    <UrlReservation>http://www.test.net/scr/reservation_xml.php</UrlReservation>
                    <Parameters>
                      <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                      <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                      <Parameter key = "office" value = "55555"></Parameter>
                      <Parameter key = "password" value = "XXXXXX"></Parameter>
                    </Parameters>
                  </Configuration>
                </MealPlanListRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:mealPlanListRQ>
        </ns:MealPlanList>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### Reservation


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>xxx</wsse:Username>
            <wsse:Password>xxxx</wsse:Password>
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:Reservation>
          <ns:reservationRQ>
            <ns:timeoutMilliseconds>15000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <ReservationRQ>
                  <echoToken>TEST</echoToken>
                  <timeoutMilliseconds>14000</timeoutMilliseconds>
                  <source>
                    <agencyCode>XXXX</agencyCode>
                    <languageCode>es</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>true</registerTransactions>
                  </filterAuditData>
                  <Configuration></Configuration>
                  <ClientLocator>XXXXXXX</ClientLocator>
                  <StartDate>28/07/2014</StartDate>
                  <EndDate>31/07/2014</EndDate>
                  <MealPlanCode>XX</MealPlanCode>
                  <HotelCode>XXX</HotelCode>
                  <Price currency = "EUR" amount = "500.00" binding = "true" commission = "-1"/>
                  <ResGuests>
                    <Guests>
                      <Guest roomCandidateId = "1" paxId = "1">
                        <GivenName>PRUEBAS</GivenName>
                        <SurName>TEST</SurName>
                      </Guest>
                      <Guest roomCandidateId = "1" paxId = "2">
                        <GivenName>PRUEBAS</GivenName>
                        <SurName>TEST</SurName>
                      </Guest>
                    </Guests>
                  </ResGuests>
                  <PaymentType>MerchantPay</PaymentType>
                  <Rooms>
                    <Room roomCandidateRefId = "1" code = "10" description = "Superior"/>
                  </Rooms>
                  <RoomCandidates>
                    <RoomCandidate id = "1">
                      <Paxes>
                        <Pax age = "30" id = "1"/>
                        <Pax age = "30" id = "2"/>
                      </Paxes>
                    </RoomCandidate>
                  </RoomCandidates>
                  <Parameters>
                    <Parameter key = "codigoOferta" value = "XXX"/>
                  </Parameters>
                </ReservationRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:reservationRQ>
        </ns:Reservation>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### Cancel


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
            >
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:Cancel>
          <ns:cancelRQ>
            <ns:timeoutMilliseconds>180000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <CancelRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema" hotelCode = "">
                  <timeoutMilliseconds>999999</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>true</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlAvail>http://www.test.net/test_XML_V10.php?</UrlAvail>
                    <UrlReservation>http://www.test.net/scr/reservation_xml.php</UrlReservation>
                    <Parameters>
                      <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                      <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                      <Parameter key = "office" value = "55555"></Parameter>
                      <Parameter key = "password" value = "XXXXXX"></Parameter>
                    </Parameters>
                  </Configuration>
                  <Locators>
                    <Provider>XXXXXXX</Provider>
                  </Locators>
                  <StartDate>28/11/2014</StartDate>
                  <EndDate>28/11/2014</EndDate>
                </CancelRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:cancelRQ>
        </ns:Cancel>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### ReservationRead


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
    <soapenv:Header>
    <wsse:Security>
      <wsse:UsernameToken>
        <wsse:Username>XXXXXX</wsse:Username>
        <wsse:Password>XXXXXX</wsse:Password>
        >
      </wsse:UsernameToken>
    </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
    <ns:ReservationRead>
      <ns:reservationReadRQ>
        <ns:timeoutMilliseconds>180000</ns:timeoutMilliseconds>
        <ns:version>1</ns:version>
        <ns:providerRQ>
          <ns:code>XXX</ns:code>
          <ns:id>1</ns:id>
          <ns:rqXML>
            <ReservationReadRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
              <timeoutMilliseconds>999999</timeoutMilliseconds>
              <source>
                <languageCode>en</languageCode>
              </source>
              <filterAuditData>
                <registerTransactions>true</registerTransactions>
              </filterAuditData>
              <Configuration/>
              <Locators>
                <Client>XXXXXXX</Client>
                <Provider>XXXXXXX</Provider>
              </Locators>
              <StartDate>28/11/2014</StartDate>
              <EndDate>28/11/2014</EndDate>
              <CreationDate>28/11/2014</CreationDate>
              <Currency>XXXX</Currency>
            </ReservationReadRQ>
          </ns:rqXML>
        </ns:providerRQ>
      </ns:reservationReadRQ>
    </ns:ReservationRead>
    </soapenv:Body>
    </soapenv:Envelope>
~~~


### ReservationList


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
            >
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:ReservationList>
          <ns:reservationListRQ>
            <ns:timeoutMilliseconds>240000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <ReservationListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                  <timeoutMilliseconds>999999</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>false</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlAvail>http://www.test.net/test_XML_V10.php?</UrlAvail>
                    <UrlReservation>http://www.test.net/scr/reservation_xml.php</UrlReservation>
                    <Parameters>
                      <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                      <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                      <Parameter key = "office" value = "55555"></Parameter>
                      <Parameter key = "password" value = "XXXXXX"></Parameter>
                    </Parameters>
                  </Configuration>
                  <Start>28/11/2014</Start>
                  <End>28/11/2014</End>
                  <DateType>X</DateType>
                </ReservationListRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:reservationListRQ>
        </ns:ReservationList>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### RunTimeConfiguration


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:RuntimeConfiguration>
          <ns:runtimeConfigurationRQ>
            <ns:timeoutMilliseconds>10000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <RuntimeConfigurationRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                  <timeoutMilliseconds>999999</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>false</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlGeneric>http://test.Service</UrlGeneric>
                    <Parameters>
                      <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                      <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                      <Parameter key = "office" value = "55555"></Parameter>
                      <Parameter key = "password" value = "XXXXXX"></Parameter>
                    </Parameters>
                  </Configuration>
                </RuntimeConfigurationRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:runtimeConfigurationRQ>
        </ns:RuntimeConfiguration>
      </soapenv:Body>
    </soapenv:Envelope>
~~~


### StaticConfiguration


~~~xml
    <soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" 
    xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <soapenv:Header>
        <wsse:Security>
          <wsse:UsernameToken>
            <wsse:Username>XXXXXX</wsse:Username>
            <wsse:Password>XXXXXX</wsse:Password>
          </wsse:UsernameToken>
        </wsse:Security>
      </soapenv:Header>
      <soapenv:Body>
        <ns:StaticConfiguration>
          <ns:staticConfigurationRQ>
            <ns:timeoutMilliseconds>10000</ns:timeoutMilliseconds>
            <ns:version>1</ns:version>
            <ns:providerRQ>
              <ns:code>XXX</ns:code>
              <ns:id>1</ns:id>
              <ns:rqXML>
                <StaticConfigurationRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
                  <timeoutMilliseconds>999999</timeoutMilliseconds>
                  <source>
                    <languageCode>en</languageCode>
                  </source>
                  <filterAuditData>
                    <registerTransactions>false</registerTransactions>
                  </filterAuditData>
                  <Configuration>
                    <User></User>
                    <Password></Password>
                    <UrlGeneric>http://test.Service</UrlGeneric>
                    <Parameters>
                      <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>
                      <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>
                      <Parameter key = "office" value = "55555"></Parameter>
                      <Parameter key = "password" value = "XXXXXX"></Parameter>
                    </Parameters>
                  </Configuration>
                </StaticConfigurationRQ>
              </ns:rqXML>
            </ns:providerRQ>
          </ns:staticConfigurationRQ>
        </ns:StaticConfiguration>
      </soapenv:Body>
    </soapenv:Envelope>
~~~

