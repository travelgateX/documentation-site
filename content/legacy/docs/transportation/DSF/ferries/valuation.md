---
title: Valuation
keywords: transportation, data structure, ferries, valuation
search: Transportation - Ferries - Data Structure - Valuation
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/ferries/valuation
---



### Method Goals


This method aims to do a prebook of the selected Option. This Option
**must** be selected in the previous step ( Availability ).

The Valuation request must be built from results of a single
Availability. Mixing OneWay options from different Availability calls do
not grant the correct functionability of the Valuation.



### Request Format


The Valuation request can be done by two different ways: with a single
Itinerary or multiple Itineraries.

-   Multiple Itineraries :

In this method, the request will have as many Itineraries as there are
Journeys . Mainly used for **one-way** tickets. There's a total price
for each selected SegmentInfo.

-   Single Itinerary with one or more Journeys :

This case is used for **round trip** tickets. There's only one
**totalAmount** (fare, tax and discount) for all the selected Journey .

The decision of which strategy to take is done beforehand, depending on
the business rules.



### Response Format


The returned XML is very similar to the result in the Availability call.
The main difference is that there is only one node Option returned. The
totalAmount is definitive. Sometimes this method will fail since the
selected Option at Availability may not be available for this stage. In
this case the integration returns an error code 301 ( link missing ).



### Remarks


Some suppliers do not provide this method. If this is the case then all
of the information **must** be returned in the Availability, therefore
the Valuation call will do the Availability process again filtered by
the selected Option.



### ValuationRQ Example


~~~xml
    <ValuationRQ>
    <Itineraries>
        <Itinerary id = "0">
            <Conditions>
                <Condition id = "0" language = "ES">
                    <Text>CAFETERIA#CAFETERIA##RTN#TARIFA IDA Y VUELTA#F0-TRAYECTO SIN RESTRICCIONES#F0#2.09</Text>
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
            </Journeys>
            <AmountBreakdown currency = "EUR" totalAmount = "221" nonCommissionableAmount = "0" commission = "0.945701357466064">
                <ChargeBreakdowns>
                    <ChargeBreakdown type = "VEHICLE" amount = "134.5" currency = "EUR">
                        <Concept id = "0" language = "ES">
                            <Texto>PRECIO VEHICULO IDA</Texto>
                        </Concept>
                    </ChargeBreakdown>
                    <ChargeBreakdown type = "VEHICLE_FEE" amount = "11" currency = "EUR">
                        <Concept id = "1" language = "ES">
                            <Text>FEE VEHICULO IDA</Text>
                        </Concept>
                    </ChargeBreakdown>
                </ChargeBreakdowns>
                <PaxBreakdowns>
                    <PaxBreakdown paxType = "ADT" amount = "75.5" currency = "EUR" taxes = "11"/>
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
        <Itinerary id = "0">
            <Conditions>
                <Condition id = "0" language = "ES">
                    <Text>CAFETERIA#CAFETERIA##RTN#TARIFA IDA Y VUELTA#F0-TRAYECTO SIN RESTRICCIONES#F0#1.87</Text>
                </Condition>
            </Conditions>
            <Journeys>
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
                            <TokensReserva/>
                        </Segment>
                    </Segments>
                </Journey>
            </Journeys>
            <AmountBreakdown currency = "EUR" totalAmount = "199" nonCommissionableAmount = "0" commission = "0.939698492462313">
                <ChargeBreakdowns>
                    <ChargeBreakdown type = "VEHICLE" amount = "134.5">
                        <Concept id = "0" language = "ES">
                            <Text>PRECIO VEHICULO VUELTA</Text>
                        </Concept>
                    </ChargeBreakdown>
                </ChargeBreakdowns>
                <PaxBreakdowns>
                    <PaxBreakdown paxType = "ADT" amount = "64.5" taxes = "0"/>
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
    </ValuationRQ>
~~~



### ValuationRQ Description



| **Element**				| **Number**	| **Type**	| **Description**					|
| ------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| ValuationRQ                 		| 1     	|		| Root node.						|
| @specialSupplments     		| 1 		| Boolean	| Special supplements. 					|
| @extendedFareRules     		| 1 		| Boolean	| Extended Fare Rules.					|
| @seating               		| 1 		| Boolean	| Map of available seats.				|
| Itineraries                 		| 1     	|		| List of Itineraries.					|
| Itineraries/Itinerary      	 	| 1..n    	|		| Details of the Itinerary.    				|
| @id                    		| 1 		| Integer	| Unique identifier of the Itinerary. 			|
| @fareRef               		| 1 		| Integer	| Reference identifier to the original Fare. Flights parameter.  |
| @HasObFees             		| 1 		| Boolean	| If true then there is an extra fee for using credit card.  |
| @carrier                		| 1 		| String	| Validating carrier. Flights parameter.		|
| Itineraries/Itinerary/Conditions 	| 0..1    	|		| Contains a list of Conditions.			|
| Itineraries/Itinerary/Conditions /Condition | 0..n    |		| Contains details of the Condition.			|
| @id                    		| 1 		| String	| Indicates if the conditions are of one way ( with a 0 ) or round trip ( with a 1 ). Ferries parameter.  |
| @language             		| 1 		| String	| Language.						|
| Itineraries/Itinerary /Conditions/Condition /Text | 1 | String	| Remarks.						|
| Itineraries/Itinerary /Journeys	| 0..1    	|		| Contains a list of Journeys.				|
| Itineraries/Itinerary /Journeys/Journey | 0..n    	|		| Contains details of the Journeys.			|
| @id                    		| 1 		| Integer	| Unique identifier of the Journey in scope.		|
| @duration              		| 1 		| Integer	| Duration of the Journey in minutes.			|
| Itineraries/Itinerary /Journeys/Journey /Segments | 0..1 |   		| Contains a list of Segments associated to the Journey.  |
| Itineraries/Itinerary /Journeys/Journey /Segments/Segment | 0..n |   	| Contains details of the SegmentInfo.			|
| @id                    		| 1 		| Integer	| Unique SegmentInfo identifier.			|
| Itineraries/Itinerary /Journeys/Journey/Segments /Segment/SegmentInfo | 0..n |   | Contains information of the SegmentInfo.	|
| @id                    		| 1 		| Integer	| Unique identifier of the SegmentInfo. 		|
| @transportationId      		| 1 		| String	| Unique Id of the transportation.			|
| @transportationType    		| 1 		| String	| Transport type: F ( Flight ), T ( Train ), B ( Bus ) & F ( Ferry ). |
| @operatinCarrier       		| 1 		| String	| Company which operates the transportation.		|
| @marketingCarrier      		| 1 		| String	| Company which commercializes the transportation.	|
| @departureTerminal     		| 1 		| String	| Departure terminal.					|
| @arrivalTerminal       		| 1 		| String	| Arrival terminal.					|
| @departureDate         		| 1 		| Date		| Departure date.					|
| @arrivalDate           		| 1 		| Date		| Arrival date.  					|
| @segmentDuration       		| 1 		| Integer	| Transport duration ( in minutes ).  			|
| @planeType             		| 1 		| String	| Plane type. Flights parameter.			|
| @maxCheckinDate        		| 1 		| String	| Maximum date to make the check-in.			|
| @segmentStatus         		| 1 		| String	| SegmentInfo status: HK (OK), TK (Change of programming), UC (Unconfirmed), UN( Unable), NO (No action taken) & UD (Undefined).   |
| @hasTechnicalStop      		| 1 		| Boolean	| If true, the SegmentInfo has a technical stop.	|
| @electronicTicket      		| 1 		| Boolean	| If true, the SegmentInfo uses a electronic ticket. 	|
| @secureFlight          		| 0..1		| Boolean	| If true, the provider requires extra information of the passengers. Flights parameter.	|
| Itineraries/Itinerary /Journeys/Journey/Segments /Segment/SegmentInfo/OriginLoc | 1  |  | Origin location.			|
| @type                  		| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                  		| 1 		| String	| Location code.					|
| @cityCode              		| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /SegmentInfo/DestinationLoc | 1 |  | Destination location.		|
| @type                  		| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                  		| 1 		| String	| Location code.					|
| @cityCode              		| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /SegmentClasses | 0..1 |   | Contains a list of SegmentClasses.	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /SegmentClasses/SegmentClass | 0..n |   | Contains details of the SegmentClass. |
| @cabinClass            		| 1 		| String	| Cabin class of the seat: N (Not specified), Y (Tourist), C (Business), F (First), CA (Cabin, only for ferries), YP (Tourist Plus). 	|
| @class                 		| 1 		| String	| Fare class.						|
| @paxRef                		| 1 		| Integer	| Reference for the passenger which is using this fare in the transport.	|
| @fareBasis             		| 1 		| String	| Fare basis.						|
| @fareType              		| 1 		| String	| Fare type: PUB ( Public ), PRI ( Private ), NEGO ( Negotiated ) & CORP ( Corporate ).	|
| @avail                 		| 1 		| Integer	| Available seats remaining for this class (In flights, the maximum is 9).	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /ReservationToken | 0..1 |  | Contains specific attributes of each provider.  |
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /ReservationToken/Attribute | 0..n |  | Contains details of the attribute.	|
| @key                   		| 1 		| String	| Keyword or id to identify a parameter.		|
| @value                 		| 1 		| String	| Value of the parameter.				|
| Itineraries/Itinerary /AmountBreakdown | 1     	|		| Contains details of the AmountBreakdown.		|
| @currency              		| 1 		| String	| Currency code of the fare.				|
| @totalAmount           		| 1 		| Decimal	| Total amount. with taxes and other charges included. 	|
| @notCommissionableAmount		| 1 		| Decimal	| Total amount that can not be commissioned.		|
| @commission            		| 1 		| Decimal	| Commission percentage. A -1 value will be returned if the provider doesn't return any comission information.	|
| Itineraries/Itinerary /AmountBreakdown/ChargeBreakdowns | 0..1 |   	| Contains a list of ChargeBreakdowns.			|
| Itineraries/Itinerary /AmountBreakdown/PaxBreakdowns | 0..1 |   	| Contains a list of breakdown amounts for each passenger ( ADT amount, etc. ).	|
| Itineraries/Itinerary /AmountBreakdown/PaxBreakdowns /PaxBreakdown | 0..n  |  | Contains details of breakdown amounts for each passenger. |
| @paxType               		| 1 		| String	| Passenger type: ADT ( Adult ), CHD ( Child ) & INF ( Infant ).  |
| @amount                		| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger. |
| @taxes                 		| 1 		| Integer	| If they exist, taxes are applied for this passenger type.	|
| @tasaDU                		| 1 		| Integer	| Deprecated.						|
| Itineraries/Itinerary /PaxConfigurations | 1     	|		| Contains a list of PaxConfigurations.			|
| Itineraries/Itinerary	/PaxConfigurations/PaxConfiguration | 1 |    	| Contains details of the PaxConfiguration.		|
| @id                    		| 1 		| Integer	| Unique identifier of the PaxConfiguration.  		|
| @paxRef                		| 1 		| Integer	| Reference to the passenger Id from the request. 	|
| @age                   		| 1 		| Integer	| Age of the passenger. 				|
| @paxType               		| 1 		| String	| Passenger type based on the age of the passenger: ADT (Adult), CHD (Child), INF (Infant), YOU (Young) and SEN (Senior).  |
| Fares/Fare/PaxConfigurations /PaxConfiguration/AppliedBonuses | 0..1 |  | Applied discounts.					|
| @resident              		| 1 		| String	| Resident discount type: N(None), BP(Balearic Islands resident flying to mainland), BI(Balearic Islands resident flying to another balearic island), DC(Canarian Islands resident flying to another Canarian Island), RC(Canarian Islands resident flying to mainland),RM(Ceuta/Melilla resident), STR(Italian resident discount), ELB(Italian resident Elba), SDG(Italian resident Sardegna), SCL(Italian resident Sicily).	|
| @largeFamily           		| 1 		| String	| Family discount type: N(None), F1(Large family), F2 (Special large family).	|
| @discountCard          		| 1 		| String	| Discount card type (for more details, see information below).  |
| Fares/Fare/PaxConfigurations /PaxConfiguration/AppliedBonuses /PaxTypeCodes | 0..1 |  | Contains a list of PaxTypeCodes.	|
| Fares/Fare/PaxConfigurations /PaxConfiguration/AppliedBonuses /PaxTypeCodes/PaxTypeCode | 0..n |  | Contains details of the PTC.	|
| @code                  		| 1 		| String	| String with the PTC code.				|
| Fares/Fare/VehicleConfigurations  	| 0..1    	|		| Contains a list of VehicleConfiguration.		|
| Fares/Fare/VehicleConfigurations /VehicleConfiguration | 1..2 |   	| Contains details of VehicleConfiguration.		|
| @vehicleRef            		| 1 		| String	| References the vehicle id of the request.		|
| @height                		| 1 		| Integer	| Height of the vehicle. 				|
| @length                		| 1 		| Integer	| Length of the vehicle.				|
| @type                  		| 1     	|		| Vehicle type: N (None/Unknown), Tourism, 4x4, MPV, MotorbikeMax50 (motorbike with less than 50 cc), MotorbikeMin50Max250 (motorbike with 50 - 250 cc), MotorbikeMin250Max500 (motorbike with 250 - 500 cc), MotorbikeMin500 (motorbike with more than 500 cc), Bicicle, Van, LongVehicleMax6 (vehicle larger than 6 meters), Emission0Vehicle (vehicle with no emissions), Caravan, Trailer.  |
| @code                  		| 1 		| String	| The code that identifies this type of vehicle in the providers system. 	|
| @name                  		| 0..1		| String	| Name of the vehicle type				|




### ValuationRS Example


~~~xml
    <ValuationRS>
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
                            <TokensReserva/>
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
    </ValuationRS>
~~~


### ValuationRS Description



| **Element**				| **Number**	| **Type**	| **Description**					|
| ------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| ValuationRS                 		| 1     	|		| Root node.						|
| Itineraries                 		| 1     	|		| List of Itineraries.					|
| Itineraries/Itinerary       		| 1..n    	|		| Details of the Itinerary.   				|
| @id                    		| 1 		| Integer	| Unique identifier of the Itinerary. 			|
| @fareRef               		| 1 		| Integer	| Reference identifier to the original Fare. Flights parameter.  |
| Itineraries/Itinerary/Conditions	| 0..1    	|		| Contains a list of Conditions. 			|
| Itineraries/Itinerary/Journeys	| 0..1    	|		| Contains a list of Journeys.				|
| Itineraries/Itinerary /Journeys/Journey | 0..n    	|		| Contains details of the Journeys.			|
| @id                    		| 1 		| Integer	| Unique identifier of the Journey in scope.  		|
| @duration              		| 1 		| Integer	| Duration of the Journey in minutes.			|
| Itineraries/Itinerary /Journeys/Journey /Segments | 0..1 |   		| Contains a list of Segments associated to the Journey.  |
| Itineraries/Itinerary /Journeys/Journey /Segments/Segment | 0..n |   	| Contains details of the SegmentInfo.			|
| @id                    		| 1  		| Integer	| Unique SegmentInfo identifier.			|
| Itineraries/Itinerary /Journeys/Journey/Segments /Segment/SegmentInfo | 0..n |   | Contains information of the SegmentInfo.	|
| @id                    		| 1 		| Integer	| Unique identifier of the SegmentInfo.			|
| @transportationId      		| 1 		| String	| Unique Id of the transportation.			|
| @transportationType    		| 1  		| String	| Transport type: F ( Flight ), T ( Train ), B ( Bus ) & F ( Ferry ). |
| @operatinCarrier       		| 1 		| String	| Company which operates the transportation.		|
| @marketingCarrier      		| 1 		| String	| Company which commercializes the transportation.	|
| @departureTerminal     		| 1 		| String	| Departure terminal.					|
| @arrivalTerminal       		| 1 		| String	| Arrival terminal.					|
| @departureDate         		| 1 		| Date		| Departure date. 					|
| @arrivalDate          		| 1 		| Date		| Arrival date.						|
| @segmentDuration       		| 1 		| Integer	| Transport duration ( in minutes ).			|
| @maxCheckinDate        		| 1 		| String	| Maximum date to make the check-in.			|
| @segmentStatus        		| 1 		| String	| SegmentInfo status: HK (OK), TK (Change of programming), UC (Unconfirmed), UN( Unable), NO (No action taken) & UD (Undefined).  |
| @hasTechnicalStop      		| 1 		| Boolean	| If true, the SegmentInfo has a technical stop.	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /SegmentInfo/OriginLoc | 1 |   | Origin location.			|
| @type                  		| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                  		| 1 		| String	| Location code.					|
| @cityCode              		| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /SegmentInfo/DestinationLoc | 1 |   | Destination location.		|
| @type                  		| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                  		| 1 		| String	| Location code.					|
| @cityCode              		| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code. 	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /SegmentClasses | 0..1 |   | Contains a list of SegmentClasses.	|
| Itineraries/Itinerary/Journeys/Journey/Segments/Segment/SegmentClasses/SegmentClass | 0..n |   | Contains details of the SegmentClass. |
| @cabinClass            		| 1 		| String	| Cabin class of the seat: N (Not specified), Y (Tourist), C (Business), F (First), CA (Cabin, only for ferries), YP (Tourist Plus).   |
| @class                 		| 1 		| String	| Fare class.						|
| @paxRef                		| 1 		| Integer	| Reference for the passenger which is using this fare in the transport. 	|
| @fareBasis             		| 1 		| String	| Fare basis.						|
| @fareType              		| 1 		| String	| Fare type: PUB ( Public ), PRI ( Private ), NEGO ( Negotiated ) & CORP ( Corporate ).	|
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /ReservationToken | 0..1 |   | Contains specific attributes of each provider.  |
| Itineraries/Itinerary/Journeys /Journey/Segments/Segment /ReservationToken/Attribute | 0..n | | Contains details of the attribute.  |
| @key                  	 	| 1 		| String	| Keyword or id to identify a parameter.		|
| @value                 		| 1 		| String	| Value of the parameter.				|
| Itineraries/Itinerary/AmountBreakdown | 1     	|		| Contains details of the AmountBreakdown.		|
| @currency               		| 1  		| String	| Currency code of the fare.				|
| @totalAmount           		| 1 		| Decimal	| Total amount. with taxes and other charges included.	|
| @notCommissionableAmount		| 1 		| Decimal	| Total amount that can not be commissioned.		|
| @commission            		| 1 		| Decimal	| Commission percentage. A -1 value will be returned if the provider doesn't return any comission information.	|
| Itineraries/Itinerary /AmountBreakdown/ChargeBreakdowns | 0..1 |   	| Contains a list of ChargeBreakdowns.			|
| Itineraries/Itinerary /AmountBreakdown/ChargeBreakdowns /ChargeBreakdown | 1..n |   | Contains details of the ChargeBreakdown.   |
| @type                  		| 1 		| String	| ChargeBreakdown type.					|
| @amount                		| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger.   |
| Itineraries/Itinerary /AmountBreakdown/ChargeBreakdowns /ChargeBreakdown/Concept | 1 |  | Charge concept.			|
| @id                    		| 1 		| String	| Indicates if the conditions are of one way ( with a 0 ) or round trip ( with a 1 ). Ferries parameter.   |
| @language              		| 1 		| String	| Language.						|
| Itineraries/Itinerary /AmountBreakdown/ChargeBreakdowns /ChargeBreakdown/Concept/Text | 1 | String | Remarks.			|
| Itineraries/Itinerary /AmountBreakdown/PaxBreakdowns | 0..1 |   	| Contains a list of breakdown amounts for each passenger ( ADT amount, etc. ).	|
| Itineraries/Itinerary /AmountBreakdown/PaxBreakdowns /PaxBreakdown | 0..n |   | Contains details of breakdown amounts for each passenger.  |
| @paxType               		| 1 		| String	| Passenger type: ADT ( Adult ), CHD ( Child ) & INF ( Infant ).  |
| @amount                		| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger.  |
| @taxes                 		| 1 		| Integer	| If they exist, taxes are applied for this passenger type.	|
| @tasaDU                		| 1 		| Integer	| Deprecated.						|
| Itineraries/Itinerary /PaxConfigurations | 1     	|		| Contains a list of PaxConfigurations.			|
| Itineraries/Itinerary /PaxConfigurations/PaxConfiguration | 1 |    	| Contains details of the PaxConfiguration.		|
| @id                    		| 1 		| Integer	| Unique identifier of the PaxConfiguration.		|
| @paxRef                		| 1 		| Integer	| Reference to the passenger Id from the request. 	|
| @age                   		| 1 		| Integer	| Age of the passenger.  				|
| @paxType               		| 1 		| String	| Passenger type based on the age of the passenger: ADT (Adult), CHD (Child), INF (Infant), YOU (Young) and SEN (Senior).  |
| Itineraries/Itinerary /PaxConfigurations/PaxConfiguration /AppliedBonuses | 0..1 |   | Applied discounts.			|
| @resident              		| 1 		| String	| Resident discount type: N(None), BP(Balearic Islands resident flying to mainland), BI(Balearic Islands resident flying to another balearic island), DC(Canarian Islands resident flying to another Canarian Island), RC(Canarian Islands resident flying to mainland),RM(Ceuta/Melilla resident), STR(Italian resident discount), ELB(Italian resident Elba), SDG(Italian resident Sardegna), SCL(Italian resident Sicily).	|
| @largeFamily           		| 1 		| String	| Family discount type: N(None), F1(Large family), F2 (Special large family).	|
| @discountCard          		| 1 		| String	| Discount card type (for more details, see information below).  |
| Itineraries/Itinerary /PaxConfigurations/PaxConfiguration /AppliedBonuses/PaxTypeCodes | 0..1 |  | Contains a list of PaxTypeCodes.	|
| Itineraries/Itinerary /PaxConfigurations/PaxConfiguration /AppliebBonuses/PaxTypeCodes /PaxTypeCode | 0..n |  | Contains details of the PTC. |
| @code                  		| 1 		| String	| String with the PTC code.				|
| Fares/Fare/VehicleConfigurations  	| 0..1    	|		| Contains a list of VehicleConfiguration.		|
| Fares/Fare/VehicleConfigurations /VehicleConfiguration | 1..2 |   	| Contains details of VehicleConfiguration.		|
| @vehicleRef            		| 1 		| String	| References the vehicle id of the request.		|
| @height                		| 1 		| Integer	| Height of the vehicle.				|
| @length                		| 1 		| Integer	| Length of the vehicle. 				|
| @type                  		| 1    		|		| Vehicle type: N (None/Unknown), Tourism, 4x4, MPV, MotorbikeMax50 (motorbike with less than 50 cc), MotorbikeMin50Max250 (motorbike with 50 - 250 cc), MotorbikeMin250Max500 (motorbike with 250 - 500 cc), MotorbikeMin500 (motorbike with more than 500 cc), Bicicle, Van, LongVehicleMax6 (vehicle larger than 6 meters), Emission0Vehicle (vehicle with no emissions), Caravan, Trailer.   |
| @code                  		| 1 		| String	| The code that identifies this type of vehicle in the providers system. |
| @name                  		| 0..1		| String	| Name of the vehicle type				|


