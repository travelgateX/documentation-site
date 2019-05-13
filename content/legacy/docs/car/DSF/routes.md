---
title: Routes (Offices)
keywords: transfers, data structure, routes, offices
search: Car - Data Structure - Routes (Offices)
sidebar: mydoc_sidebar
permalink: /docs/car/DSF/routes
---



### Method Goals


This method aims to return all the available offices for the selected
carrier.



### Remarks


This method should be cached internally and only called once a week and
in most cases once a month.



### OTA VehLocSearchRQ Example



~~~xml
    <OTA_VehLocSearchRQ>
        <timeoutMilliseconds>999999</timeoutMilliseconds>
        <filterAuditData>
            <registerTransactions>false</registerTransactions>
        </filterAuditData>
        <Configuration ProviderCode="CT">
            <Credentials user="1234" password="">
                <genericURL>https://otatest.cartrawler.com:20000/cartrawlerota</genericURL>
                <identificationURL xsi:nil="true" />
                <availRateURL xsi:nil="true" />
                <rateRuleURL xsi:nil="true" />
                <vehResURL xsi:nil="true" />
                <specificURLs>
                    <Attribute key="URL_OFICINAS" value="https://ota.cartrawler.com/cartrawlerota/files/static/ctlocation.EN.xml" />
                </specificURLs>
            </Credentials>
            <Attributes>
                <Attribute key="ISOCurrency" value="EUR" />
                <Attribute key="ConsumerIP" value="95.39.27.98" />
            </Attributes>
        </Configuration>
        <ClientConfiguration agency="agencyName" SellCurrency="EUR" />
        <POS>
            <Source ISOCountry = "ESP">
                <RequestorID Type = "LAN" ID = "es"/>
            </Source>
        </POS>
    </OTA_VehLocSearchRQ>
~~~


### OTA VehLocSearchRQ Description


The request requires a POS object. This method also accepts an office
code in order to retrieve the specific information related to this
office if the provider allows it.



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| OTA_VehLocSearchRQ				| 1             |            	| Root Node            				|
| OTA_VehLocSearchRQ/POS			| 1  		| Pos           | Contains information of the Point Of Sale.	|
| OTA_VehLocSearchRQ/VehLocSearchCriterion	| 1  		| ItemSearch	| CriterionType Contains the coordinates of the office and a reference point to locate the office.	|
| ItemSearchCriterionType/Position		| 1  		| Position      | Object that contains the coordinates of the office.	|
| Position/Latitude				| 1  		|		| Latitude of the  position of the office.		|
| Position/Longitude				| 1  		|		| Longitude of the position of the office.		|
| ItemSearchCriterionType/RefPoint		| 1  		|		| This string contains a  reference point to locate the office.     	|
| OTA_VehLocSearchRQ/Vendor			| 1  		| CompanyName   | Identifies the provider who owns that office.		|



### OTA VehLocSearchRS Example



~~~xml
    <OTA_VehLocSearchRS>
        <auditData>
            <timeStamp>2012-07-19T12:33:07.6131251+02:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <VehMatchedLocs>
            <VehMatchedLoc>
                <LocationDetail Code = "A06" Name = "Newcastle">
                    <Address>
                        <AddressLine>23 Paterson Road  Cnr Paterson And Alyff Street</AddressLine>
                        <CityName>Newcastle</CityName>
                        <PostalCode>2940</PostalCode>
                        <CountryName Code = "ZA0">SOUTH AFRICA: SOUTH AFRICA (AL</CountryName>
                    </Address>
                    <Telephone PhoneTechType = "VOICE" PhoneNumber = "27 34 312 6452"/>
                    <AdditionalInfo>
                        <ParkLocation Location = "CITY_CENTERDOWNTOWN"/>
                        <OperationSchedules>
                            <OperationSchedule Start = "2012-07- 19T12:33:11.9453729+02:00" End = "2017-07-19T12:33:11.9453729+02:00">
                                <OperationTimes>
                                    <OperationTime
                                        Start = "08:00"
                                        End = "17:30"
                                        Mon = "true"
                                        Tue = "true"
                                        Weds = "true"
                                        Thur = "true"
                                        Fri = "true"
                                        Sat = "true"
                                        Sun = "true"/>
                                </OperationTimes>
                            </OperationSchedule>
                        </OperationSchedules>
                    </AdditionalInfo>
                </LocationDetail>
                <VehLocSearchCriterion>
                    <Position Latitude = "-27.7298999946" Longitude = "29.96030000359"/>
                </VehLocSearchCriterion>
            </VehMatchedLoc>
            <VehMatchedLoc>
                <LocationDetail Code = "A0G" Name = "Pune Airport">
                    <Address>
                        <AddressLine>Gera 77  Plot No. 1 S 206 /1 Fp 88</AddressLine>
                        <CityName>Office No 10</CityName>
                        <PostalCode>411 011</PostalCode>
                        <CountryName Code = "IN0">INDIA</CountryName>
                    </Address>
                    <Telephone PhoneTechType = "VOICE" PhoneNumber = "00912026615303"/>
                    <Telephone PhoneTechType = "FAX" PhoneNumber = "00919766587083"/>
                    <AdditionalInfo>
                        <ParkLocation Location = "CITY_CENTERDOWNTOWN"/>
                        <OperationSchedules>
                            <OperationSchedule Start = "2012-07- 19T12:33:11.9453729+02:00" End = "2017-07-19T12:33:11.9453729+02:00">
                                <OperationTimes>
                                    <OperationTime
                                        Start = "00:00"
                                        End = "23:59"
                                        Mon = "true"
                                        Tue = "true"
                                        Weds = "true"
                                        Thur = "true"
                                        Fri = "true"
                                        Sat = "true"
                                        Sun = "true"/>
                                </OperationTimes>
                            </OperationSchedule>
                        </OperationSchedules>
                    </AdditionalInfo>
                </LocationDetail>
                <VehLocSearchCriterion>
                    <Position Latitude = "0" Longitude = "0"/>
                </VehLocSearchCriterion>
            </VehMatchedLoc>
        </VehMatchedLocs>
    </OTA_VehLocSearchRS>
~~~


### OTA VehLocSearchRS Description


The result returns a list of VehMatchedLoc with the corresponding
information.


  
| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| OTA_VehLocSearchRS				| 1             |		| Root Node.						|
| OTA_VehLocSearchRS /VehMatchedLocs		| 1  		| List of VehicleMatchedLocation | List of offices.              	|
| VehicleMatchedLoc /LocationDetail		| 1  		| Vehicle LocationDetails	| Containts details of the location of the office.	|
| @VehicleLocationDetails/Code			| 1  		| String        | Code that identifies the office in the provider's system. This code should be used on OTA_VehAvailRateRQ. 	|
| @VehicleLocationDetails /Name			| 1  		| String        | Name of the office.		|
| @VehicleLocationDetails /ExtendedLocationCode	| 		| String	| Code that identifies the office in the provider's system.           |
| @VehicleLocationDetails /AssocAirportLocList	| 		| String	| Associated airport to this office.            |
| VehicleLocationDetails /Address		| 1  		| AddressInfo   | Indicates the address of the office.		|
| AddressInfo/AddressLine			| 1  		| List of String | A list that contains 1 or more addresses of the customer.		|
| AddressInfo/CityName				| 1  		| String        | The name of the city where the customer lives.	|
| AddressInfo/PostalCode			| 1  		| String        | The postal code of the customer's address.		|
| AddressInfo/CountryName			| 1  		| CountryName   | This object contains the code of the country of the customer.		|
| VehicleLocationDetails /Telephone		| 1  		| Telephone InfoGroup | Indicates the telephone number of the office.		|
| TelephoneInfoGroup /PhoneTechType		| 1  		| ePhoneTechnologyType | Type of technology used by the phone. Possible values: VOICE, DATA, FAX, PAGER ,MOBILE ,TTY,TELEX ,VOICEOVERIP.	|
| TelephoneInfoGroup /PhoneNumber		| 1   		| String        | Number of the phone.			|
| VehicleLocationDetails /AdditionalInfo		| 1  		| VehicleLocation AdditionalDetails | Contains the hours of the office and the type of location.	|
| VehicleLocationAdditionalDetails /ParkLocation	| 1  		| VehicleWhere AtFacilityType | Informs the type of location where the office is located.               |
| VehicleWhereAtFacilityType /Location		| 1  		| eVecinityCode | Informs the type of location where the office is located.		|
| VehicleLocationAdditionalDetails /OperationSchedules | 1  	| Operation Schedules | Informs the office hours.       	|
| OperationSchedules /OperationSchedule		| 1..n		| Operation Schedule | Informs the office hours.		|
| OperationSchedule/Start			| 1  		| DateTime      | Date in which this operationTimes become valid.		|
| OperationSchedule/End				| 1  		| 		| Date in which this operationTimes are no longer valid.	|
| OperationSchedule/OperationTimes		| 1  		| List of operationTime | List of operationTime.		|
| OperationTimes/OperationTime			| 1..n		| OperationTime | Each OperationTime indicate the office hours and the days of the week subject to these hours.	|
| @OperationTime/Start				| 1  		| String        | Opening time of the office in hh:mm format.		|
| @OperationTime/End				| 1  		| String        | Closing time of the office in hh:mm format.		|
| @OperationTime/Mon				| 1  		| Boolean       | Boolean that indicates if this hours correspond to Mondays.		|
| @OperationTime/Tue				| 1  		| Boolean       | Boolean that indicates if this hours correspond to Tuesdays.		|
| @OperationTime/Weds				| 1  		| Boolean       | Boolean that indicates if this hours correspond to Wednesday.		|
| @OperationTime/Thur				| 1  		| Boolean       | Boolean that indicates if this hours correspond to Thursdays.		|	
| @OperationTime/Fri				| 1  		| Boolean       | Boolean that indicates if this hours correspond to Fridays.		|
| @OperationTime/Sat				| 1  		| Boolean       | Boolean that indicates if this hours correspond to Saturdays.		|
| @OperationTime/Sun				| 1  		| Boolean       | Boolean that indicates if this hours correspond to Sundays.		|
| VehicleMatchedLocation /VehLocSearchCriterion	| 1  		| Vehicle LocationDetails | Containts details of the location of the office.		| 

