---
title: Reservation
keywords: transportation, data structure, ferries, reservation
search: Transportation - Ferries - Data Structure - Reservation
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/ferries/reservation
---



### Method Goals


This method aims to book one or more itineraries.



### Request Format


The request format works the same way as the Valuation request. It can
work with one Itinerary or with two.

This request also holds the passengers and payment data.



### Response Format


The result returns a list of Locator (booking codes). It can be the
supplier's or the one sent in the request. It also returns all the
charges associated to the booking.



### Remarks




### ReservationRQ


~~~xml
    <ReservationRQ>
    <Itineraries>
        <Itinerary id = "0">
            <Conditions>
                <Condition id = "0" language = "ES">
                    <Text>CAFETERIA#CAFETERIA##RTN#TARIFA IDA Y VUELTA#F0-TRAYECTO SIN RESTRICCIONES#F0#2.09</Text>
                </Condition>
                <Condition id = "1" language = "ES">
                    <Text>CAFETERIA#CAFETERIA##RTN#TARIFA IDA Y VUELTA#F0-TRAYECTO SIN RESTRICCIONES#F0#1.87</Text>
                </Condition>
            </Conditions>
            <Journeys>
                <Journey id = "0" Duracion = "0">
                    <Segments>
                        <Segment id = "0">
                            <SegmentInfo
                                id = "1"
                                transportationId = "BJ1#VISEMAR ONE#FERRY"
                                transportationType = "F"
                                operatingCarrier = "BAL"
                                marketingCarrier = "BAL"
                                departureTerminal = "PAL"
                                arrivalTerminal = "VAL"
                                departureDate = "2015-08-27T11:30:00"
                                arrivalDate = "2015-08-27T19:30:00"
                                transportationName = "VISEMAR ONE"
                                transportationCode = "BJ1"
                                segmentStatus = "HK"
                                tieneParadaTecnica = "false">
                                <OriginLoc type = "P" code = "PAL" citycode = "false"/>
                                <DestinationLoc type = "P" code = "VAL" citycode = "false"/>
                            </SegmentInfo>
                            <SegmentClasses>
                                <SegmentClass cabinClass = "N" class = "CAFETERIA" paxRef = "0" fareType = "PUB">
                                    <CancellationPolicies>
                                        <CancellationPolicy amount = "0" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-19T10:16:00" refundable = "true"/>
                                        <CancellationPolicy amount = "10" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-20T11:30:00" refundable = "true"/>
                                        <CancellationPolicy amount = "20" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-25T11:30:00" refundable = "true"/>
                                        <CancellationPolicy amount = "100" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-27T11:30:00" refundable = "true"/>
                                    </CancellationPolicies>
                                    <Modifiable modifiable = "true" amount = "0" currency = "EUR" amountType = "AMOUNT">
                                        <Description>Admite cambios sin cargos</Description>
                                    </Modifiable>
                                </SegmentClass>
                            </SegmentClasses>
                        </Segment>
                    </Segments>
                </Journey>
                <Journey id = "0" Duracion = "0">
                    <Segments>
                        <Segment id = "0">
                            <SegmentInfo
                                id = "2"
                                transportationId = "BJ1#VISEMAR ONE#FERRY"
                                transportationType = "F"
                                operatingCarrier = "BAL"
                                marketingCarrier = "BAL"
                                departureTerminal = "VAL"
                                arrivalTerminal = "PAL"
                                departureDate = "2015-09-04T22:15:00"
                                arrivalDate = "2015-09-05T06:00:00"
                                transportationName = "VISEMAR ONE"
                                transportationCode = "BJ1"
                                segmentStatus = "HK"
                                tieneParadaTecnica = "false">
                                <OriginLoc type = "P" code = "VAL" citycode = "false"/>
                                <DestinationLoc type = "P" code = "PAL" citycode = "false"/>
                            </SegmentInfo>
                            <SegmentClasses>
                                <SegmentClass cabinClass = "N" class = "CAFETERIA" paxRef = "0" fareType = "PUB">
                                    <CancellationPolicies>
                                        <CancellationPolicy amount = "0" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-19T10:16:00" refundable = "true"/>
                                        <CancellationPolicy amount = "10" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-28T22:15:00" refundable = "true"/>
                                        <CancellationPolicy amount = "20" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-09-02T22:15:00" refundable = "true"/>
                                        <CancellationPolicy amount = "100" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-09-04T22:15:00" refundable = "true"/>
                                    </CancellationPolicies>
                                    <Modifiable modifiable = "true" amount = "0" currency = "EUR" amountType = "AMOUNT">
                                        <Description>Admite cambios sin cargos</Description>
                                    </Modifiable>
                                </SegmentClass>
                            </SegmentClasses>
                        </Segment>
                    </Segments>
                </Journey>
            </Journeys>
            <AmountBreakdown currency = "EUR" totalAmount = "420" nonCommissionableAmount = "0" commission = "0.942857142857136">
                <ChargeBreakdowns>
                    <ChargeBreakdown type = "VEHICLE" amount = "269.0" currency = "EUR">
                        <Concept id = "0" language = "ES">
                            <Texto>PRECIO VEHICULO</Texto>
                        </Concept>
                    </ChargeBreakdown>
                    <ChargeBreakdown type = "VEHICULE_FEE" amount = "11" currency = "EUR">
                        <Concept id = "1" language = "ES">
                            <Text>FEE VEHICULO</Text>
                        </Concept>
                    </ChargeBreakdown>
                </ChargeBreakdowns>
                <PaxBreakdowns>
                    <PaxBreakdown paxType = "ADT" amount = "140" taxes = "11" currency = "EUR"/>
                </PaxBreakdowns>
            </AmountBreakdown>
            <PaxConfigurations>
                <PaxConfiguration id = "0" paxRef = "0" age = "30" paxType = "ADT">
                    <AppliedBonuses resident = "N" largeFamily = "N" discountCard = "N"/>
                </PaxConfiguration>
            </PaxConfigurations>
            <VehicleConfigurations>
                <VehicleConfiguration vehicleRef = "1" height = "160" length = "350" type = "Tourism" code = "T1" name = "Turismo"/>
            </VehicleConfigurations>
        </Itinerary>
    </Itineraries>
    <Passengers>
        <Passenger
            id = "0"
            passengerType = "MR"
            name = "TestName"
            surname = "TestSurname"
            birthDate = "1985-08-19T12:11:38.577517+02:00"
            documentType = "NATIONAL_ID"
            documentId = "44183932N"
            documentExpiration = "2015-08-19T12:15:33.503954+02:00"
            documentExpedition = "0001-01-01T00:00:00"
            nationality = "ESP"
            gender = "72">
            <PaxBonusDetails>
                <AppliedBonuses resident = "N" largeFamily = "N" discountCard = "N"/>
                <ResidentCityCode>070146</ResidentCityCode>
                <LargeFamilyId/>
                <LargeFamilyCityCode/>
                <ResidentCertificateId>1234567890</ResidentCertificateId>
            </PaxBonusDetails>
        </Passenger>
    </Passengers>
    <Vehicles>
        <Vehicle licensePlate = "0000abc" brand = "testMarca" model = "testModelo" code = "T1" height = "160" length = "350" type = "Tourism"/>
    </Vehicles>
    <Client passengerType = "MR" name = "TestNom" surname = "TestApe" eMail = "transportation@xmltravelgate.com" countryPrefix = "+34" telephone = "+34 858 275 617" mobilephone = "+34 858 275 617">
        <Address zipCode = "12159" countryCode = "es">
            <Street>C/ test, 28</Street>
            <City>test</City>
        </Address>
    </Client>
    <Locators>
        <Locator>
            <Id>123456</Id>
            <Type>PROVEEDOR</Type>
        </Locator>
    </Locators>
    <DeltaPrice>0</DeltaPrice>
    </ReservationRQ>
~~~


### ReservationRQ Description



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| ReservationRQ               			| 1     	|		| Root node.						|
| Passengers                  			| 1     	|		| Paxes information.					|
| Passengers/Passenger        			| 1..n    	|		| List of Passenger.   					|
| @passengerType         			| 1 		| String	| Possible values: MR, MRS, CHD, INF.			|
| @name                  			| 1 		| String	| Name of the passenger.				|
| @surname               			| 1 		| String	| Surname of the passenger.				|
| @birthDate             			| 1 		| Date		| Date of birth of the passenger.			|
| @documentType          			| 1 		| String	| Possible values: NATIONAL_ID, PASSPORT, RESIDENT_ID, FOREIGN_PASSPORT.	|
| @documentId            			| 1 		| String	| Document ID.						|
| @documentExpiration   			| 1 		| Date		| Date of expiration of the document.			|
| @documentExpedition    			| 1 		| Date		| Date of expedition of the document.			|
| @nationality           			| 1 		| String	| Nationality code (ISO 3166-1 alphaa-3).		|
| @gender                			| 1 		| Char		| Possible values: 72 (male), 77 (female).		|
| Passenger/PaxBonusDetails   			| 1     	|		| Details of the discount bonus applied to the passenger.  |
| Passenger/PaxBonusDetails /AppliedBonuses	| 0..1    	|		| Applied discounts.					|
| @resident              			| 1     	|		| Resident discount type: N(None), BP(Balearic Islands resident flying to mainland), BI(Balearic Islands resident flying to another balearic island), DC(Canarian Islands resident flying to another Canarian Island), RC(Canarian Islands resident flying to mainland),RM(Ceuta/Melilla resident), STR(Italian resident discount), ELB(Italian resident Elba), SDG(Italian resident Sardegna), SCL(Italian resident Sicily).	|
| @largeFamily           			| 1 		| String	| Family discount type: N(None), F1(Large family), F2 (Special large family).	|
| @discountCard          			| 1 		| String	| Discount card type (for more details, see information below). 	|
| Passenger/PaxBonusDetails /ResidentCityCode 	| 0..1		| String	| If required, city code for the Spanish Resident discount.  |
| Passenger/PaxBonusDetails /LargeFamilyId	| 0..1		| String	| Mandatory if customer wants to apply Spanish family discount.  |
| Passenger/PaxBonusDetails /LargeFamilyCityCode | 0..1		| String	| City code for the Spanish Family discount.		|
| Passenger/PaxBonusDetails /ResidentCertificateId | 0..1	| String	| Mandatory if requested Spanish Resident discount.	|
| Itineraries                   		| 1     	|		| List of Itineraries.					|
| Itineraries/Itinerary       			| 1..n    	|		| Details of the Itinerary.    				|
| @id                    			| 1 		| Integer	| Unique identifier of the Itinerary. 			|
| @fareRef               			| 1 		| Integer	| Reference identifier to the original Fare. Flights parameter.  	|
| Itineraries/Itinerary /Conditions		| 0..1    	|		| Contains a list of Conditions.    			|
| Itineraries/Itinerary /Journeys		| 0..1    	|		| Contains a list of Journeys.				|
| Itineraries/Itinerary /Journeys/Journey	| 0..n    	|		|Contains details of the Journeys.			|
| @id                    			| 1 		| Integer	| Unique identifier of the Journey in scope.		|
| @duration              			| 1 		| Integer	| Duration of the Journey in minutes. 			|
| Itineraries/Itinerary /Journeys/Journey/Segments | 0..1    	|		| Contains a list of Segments associated to the Journey.  |
| Itineraries/Itinerary /Journeys/Journey/Segments /Segment | 0..n |   		| Contains details of the SegmentInfo.			|
| @id                    			| 1 		| Integer	| Unique SegmentInfo identifier.			|
| Itineraries/Itinerary /Journeys/Journey/Segments /Segment/SegmentInfo | 0..n | | Contains information of the SegmentInfo.		|
| @id                    			| 1 		| Integer	| Unique identifier of the SegmentInfo.			|
| @transportationId      			| 1 		| String	| Unique Id of the transportation.			|
| @transportationType    			| 1 		| String	| Transport type: F ( Flight ), T ( Train ), B ( Bus ) & F ( Ferry ).	|
| @operatinCarrier       			| 1 		| String	| Company which operates the transportation.		|
| @marketingCarrier      			| 1 		| String	| Company which commercializes the transportation.	|
| @departureTerminal     			| 1 		| String	| Departure terminal. 					|
| @arrivalTerminal       			| 1 		| String	| Arrival terminal.					|
| @departureDate         			| 1 		| Date		| Departure date.					|
| @arrivalDate           			| 1 		| Date		| Arrival date.						|
| @segmentDuration       			| 1 		| Integer	| Transport duration ( in minutes ).  			|
| @maxCheckinDate        			| 1 		| String	| Maximum date to make the check-in.			|
| @segmentStatus         			| 1 		| String	| SegmentInfo status: HK (OK), TK (Change of programming), UC (Unconfirmed), UN( Unable), NO (No action taken) & UD (Undefined).	|
| @hasTechnicalStop      			| 1 		| Boolean	| If true, the SegmentInfo has a technical stop.	|
| Itineraries/Itinerary /Journeys/Journey/Segments /Segment/SegmentInfo/OriginLoc | 1 |  | Origin location.				|
| @type                  			| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                  			| 1 		| String	| Location code.					|
| @cityCode              			| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.	|
| Itineraries/Itinerary /Journeys/Journey/Segments /Segment/SegmentInfo/DestinationLoc | 1  |  | Destination location.			|
| @type                  			| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                  			| 1 		| String	| Location code.					|
| @cityCode              			| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /SegmentClasses | 0..1 |   | Contains a list of SegmentClasses.		|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /SegmentClasses/SegmentClass | 0..n |  | Contains details of the SegmentClass.  |
| @cabinClass            			| 1 		| String	| Cabin class of the seat: N (Not specified), Y (Tourist), C (Business), F (First), CA (Cabin, only for ferries), YP (Tourist Plus).	|
| @class                 			| 1 		| String	| Fare class.						|
| @paxRef                			| 1 		| Integer	| Reference for the passenger which is using this fare in the transport.	|
| @fareBasis             			| 1 		| String	| Fare basis.						|
| @fareType              			| 1 		| String	| Fare type: PUB ( Public ), PRI ( Private ), NEGO ( Negotiated ) & CORP ( Corporate ).	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /ReservationToken | 0..1 |  | Contains specific attributes of each provider.	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /ReservationToken/Attribute | 0..n |  | Contains details of the attribute.	|
| @key                   			| 1 		| String	| Keyword or id to identify a parameter.		|
| @value                 			| 1 		| String	| Value of the parameter.				|
| Itineraries/Itinerary/AmountBreakdown  	| 1     	|		| Contains details of the AmountBreakdown.		|
| @currency               			| 1 		| String	| Currency code of the fare.				|
| @totalAmount           			| 1 		| Decimal	| Total amount. with taxes and other charges included.	|
| @notCommissionableAmount			| 1 		| Decimal	| Total amount that can not be commissioned.		|
| @commission            			| 1 		| Decimal	| Commission percentage. A -1 value will be returned if the provider doesn't return any comission information.	|
| Itineraries/Itinerary /AmountBreakdown/ChargeBreakdowns | 0..1 |   		| Contains a list of ChargeBreakdowns.			|
| Itineraries/Itinerary /AmountBreakdown/ChargeBreakdowns /ChargeBreakdown | 1..n |  | Contains details of the ChargeBreakdown.		|
| @type                  			| 1 		| String	| ChargeBreakdown type.					|
| @amount                			| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger.	|
| Itineraries/Itinerary /AmountBreakdown/ChargeBreakdowns /ChargeBreakdown/Concept | 1 |  | Charge concept.				|
| @id                    			| 1 		| String	| Indicates if the conditions are of one way ( with a 0 ) or round trip ( with a 1 ). Ferries parameter.  |
| @language              			| 1 		| String	| Language.						|
| Itineraries/Itinerary /AmountBreakdown/ChargeBreakdowns /ChargeBreakdown/Concept /Text | 1 | String | Remarks.			|
| Itineraries/Itinerary /AmountBreakdown/PaxBreakdowns |  0..1  |  		| Contains a list of breakdown amounts for each passenger ( ADT amount, etc. ).	|
| Itineraries/Itinerary /AmountBreakdown/PaxBreakdowns /PaxBreakdown | 0..n |   | Contains details of breakdown amounts for each passenger. |
| @paxType               			| 1 		| String	| Passenger type: ADT ( Adult ), CHD ( Child ) & INF ( Infant ). 	|
| @amount                			| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger.  	|
| @taxes                 			| 1 		| Integer	| If they exist, taxes are applied for this passenger type.  |
| @tasaDU                			| 1 		| Integer	| Deprecated.						|
| Itineraries/Itinerary /PaxConfigurations	| 1     	|		| Contains a list of PaxConfigurations.			|
| Itineraries/Itinerary /PaxConfigurations/PaxConfiguration | 1 |    		| Contains details of the PaxConfiguration.		|
| @id                    			| 1 		| Integer	| Unique identifier of the PaxConfiguration.  		|
| @paxRef                			| 1 		| Integer	| Reference to the passenger Id from the request.	|
| @age                   			| 1 		| Integer	| Age of the passenger.					|
| @paxType               			| 1 		| String	| Passenger type based on the age of the passenger: ADT (Adult), CHD (Child), INF (Infant), YOU (Young) and SEN (Senior).	|
| Itineraries/Itinerary /PaxConfigurations/PaxConfiguration /AppliedBonuses | 0..1 |   | Applied discounts.				|
| @resident              			| 1 		| String	| Resident discount type: N(None), BP(Balearic Islands resident flying to mainland), BI(Balearic Islands resident flying to another balearic island), DC(Canarian Islands resident flying to another Canarian Island), RC(Canarian Islands resident flying to mainland),RM(Ceuta/Melilla resident), STR(Italian resident discount), ELB(Italian resident  Elba), SDG(Italian resident Sardegna), SCL(Italian resident Sicily).	|
| @largeFamily           			| 1 		| String	| Family discount type: N(None), F1(Large family), F2 (Special large family).	|
| @discountCard          			| 1 		| String	| Discount card type (for more details, see information below). 	|
| Itineraries/Itinerary /PaxConfigurations/PaxConfiguration /AppliedBonuses/PaxTypeCodes | 0..1 |  | Contains a list of PaxTypeCodes.	|
| Itineraries/Itinerary /PaxConfigurations/PaxConfiguration /AppliebBonuses/PaxTypeCodes /PaxTypeCode | 0..n |  | Contains details of the PTC. |
| @code                  			| 1 		| String	| String with the PTC code.				|
| Vehicles                    			| 0..1    	|		| List of Vehicle.   					|
| Vehicles/Vehicle            			| 1..2    	|		| Contains the information of the vehicle.		|
| @name                  			| 0..1		| String	| Name of the vehicle type.				|
| @licensePlate          			| 1 		| String	| License plate of the vehicle.				|
| @brand                 			| 1 		| String	| Brand name of the vehicle.				|
| @model                 			| 1 		| String	| Model of the vehicle.					|
| @code                  			| 1 		| String	| Code of the vehicle returned by the provider in the previous steps.	|
| @height                			| 1 		| Integer	| Height of the vehicle.				|
| @length                			| 1 		| Integer	| Length of the vehicle.				|
| @type                  			| 1     	|		| Vehicle type: N (None/Unknown), Tourism, 4x4, MPV, MotorbikeMax50 (motorbike with less than 50 cc), MotorbikeMin50Max250 (motorbike with 50 - 250 cc), MotorbikeMin250Max500 (motorbike with 250 - 500 cc),  MotorbikeMin500 (motorbike with more than 500 cc), Bicicle, Van, LongVehicleMax6 (vehicle larger than 6 meters), Emission0Vehicle (vehicle with no emissions), Caravan, Trailer.	  |
| Client                      			| 1     	|		| Contains client's information.			|
| @passengerType         			| 1 		| String	| Treatment.						|
| @name                  			| 1 		| String	| Name.							|
| @surname               			| 1 		| String	| SurName.						|
| @eMail                 			| 1 		| String	| eMail address.					|
| @countryPrefix         			| 1 		| String	| Country telephone prefix.				|
| @telephone             			| 1 		| String	| Telephone.						|
| @mobilephone           			| 1 		| String	| mobilephone Telephone.				|
| Client/Address              			| 1     	|		| Contains the client's address.			|
| @zipCode               			| 1 		| String	| Zip code.						|
| @countryCode           			| 1 		| String	| Country code.						|
| Client/Address/Street       			| 1 		| String	| Contains the street name of the address.		|
| Locators                    			| 1     	|		| Contains a list of locators.				|
| Locators/Locator            			| 1     	|		| Contains details of the locator.			|
| Locators/Locator/Id         			| 1 		| String	| Unique identifier of the locator.			|
| Locators/Locator/Type       			| 1 		| String	| Locator type: PROVIDER, TFBOOKINGREFERENCE, UNIVERSAL, EMISSION and CARRIER.	|
| deltaPrice                  			| 1 		| Decimal	| Maximum amount increasement allowed between "Valoracion" and "Reserva".	|




### ReservationRS


~~~xml
    <ReservationRS>
    <Locators>
        <Id>BFRFKVM</Id>
        <Type>PROVEEDOR</Type>
    </Locators>
    <Invoice carrier = "BAL" installmentsNum = "0" lastTicketingDateUTC = "0001-01-01T00:00:00">
        <AmountBreakdown currency = "EUR" totalAmount = "420" nonCommissionableAmount = "0" commission = "0.942857142857136">
            <ChargeBreakdowns>
                <ChargeBreakdown type = "VEHICLE" amount = "269.0" currency = "EUR">
                    <Concept id = "0" language = "ES">
                        <Texto>PRECIO VEHICULO</Texto>
                    </Concept>
                </ChargeBreakdown>
                <ChargeBreakdown type = "VEHICLE_FEE" amount = "11" currency = "EUR">
                    <Concept id = "1" language = "ES">
                        <Text>FEE VEHICULO</Text>
                    </Concept>
                </ChargeBreakdown>
            </ChargeBreakdowns>
            <PaxBreakdowns>
                <PaxBreakdown paxType = "ADT" amount = "140" taxes = "11" currency = "EUR"/>
            </PaxBreakdowns>
        </AmountBreakdown>
    </Invoice>
    </ReservationRS>
~~~


### ReservationRS Description



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| ReservationRS               			| 1     	|		| Root node.						|
| Locator                     			| 0..n    	|		| List of locators given by the provider.		|
| Locators/Locator/Id         			| 1 		| String	| Unique identifier of the locator.			|
| Locators/Locator/Type       			| 1 		| String	| Locator type: PROVIDER, TFBOOKINGREFERENCE, UNIVERSAL, EMISSION and CARRIER.	|
| Passengers                  			| 1     	|		| Contains a list of Passengers.			|
| Passengers/Passenger        			| 1..n    	|		| Contains information of the Passenger.		|
| @passengerType         			| 1 		| String	| Treatment: MR, MRS, CHD and INF. 			|
| @name                  			| 1 		| String	| Name of the Passenger.				|
| @surname               			| 1 		| String	| Surname/s of the Passenger.				|
| @bithDate              			| 1 		| String	| Date of birth.					|
| @codeDCO               			| 1 		| String	| Document code.					|
| @documentType          			| 1 		| String	| Documentation type.					|
| @documentId            			| 1 		| String	| Unique identifier of the documentation.		|
| @documentExpiration    			| 1 		| String	| Expiration date of the documentation.			|
| @nationality           			| 1 		| String	| Nationality.						|
| Invoice                     			| 1      	|		|							|
| Invoice/AmountBreakdown     			| 1      	|		|							|
| @currency               			| 1 		| String	| Currency code of the fare.				|
| @totalAmount           			| 1 		| Decimal	| Total amount. with taxes and other charges included.	|
| @notCommissionableAmount			| 1 		| Decimal	| Total amount that can not be commissioned. 		|
| @commission					| 1 		| Decimal	 Commission percentage. A -1 value will be returned if the provider doesn't return any comission information.	|
| Invoice/AmountBreakdown /ChargeBreakdowns	| 0..1    	|		| Contains a list of ChargeBreakdowns.			|
| Invoice/AmountBreakdown /PaxBreakdowns	| 0..1    	|		| Contains a list of breakdown amounts for each Passenger ( ADT amount, etc. ).	|
| Invoice/AmountBreakdown /PaxBreakdowns/PaxBreakdown | 0..n    |		| Contains details of breakdown amounts for each Passenger. |
| @paxType               			| 1 		| String	| Passenger type: ADT ( Adult ), CHD ( Child ) & INF ( Infant ). 	|
| @amount                			| 1 		| Decimal	| Total amount, with taxes included, associated to the Passenger.	|
| @taxes                 			| 1 		| Integer	| If they exist, taxes are applied for this Passenger type. |

