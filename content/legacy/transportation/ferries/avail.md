---
title: Availability
keywords: transportation, data structure, ferries, availability
search: Transportation - Ferries - Data Structure - Availability
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/ferries/avail
---



### Method Goals


This method aims to complete the common side of the petition with the
ferries specifications, if any, and therefore have the complete petition
for ferries.



### Request Format


The request needs a list of journeys (each one with the desired dates
and ports), a list of the passengers and an optional vehicle list.



### Response Format


The response contains a list of fares with the available options.



### AvailabilityRQ


~~~xml
    <AvailabilityRQ xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" travelType = "RT">
        <Journeys>
            <Journey id = "0" departureDate = "27/08/2015" departureTime = "">
                <OriginLoc type = "A" code = "PAL" citycode = "false"/>
                <DestinationLoc type = "A" code = "VAL" citycode = "false"/>
            </Journey>
            <Journey id = "1" departureDate = "04/09/2015" departureTime = "">
                <OriginLoc type = "A" code = "VAL" citycode = "false"/>
                <DestinationLoc type = "A" code  = "PAL" citycode = "false"/>
            </Journey>
        </Journeys>
        <Passengers>
            <Passenger id = "0" age = "30">
                <Bonuses resident = "N" largeFamily = "N" discountCard = "N"/>
            </Passenger>
        </Passengers>
        <Vehicles>
            <AvailabilityVehicle id = "1" height = "160" length = "350" type = "Tourism"/>
        </Vehicles>
    </AvailabilityRQ>
~~~


### AvailabilityRQ Description



| **Element**				| **Number**	| **Type**	| **Description**					|
| ------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| AvailabilityRQ                  	| 1    		|		| Root node.						|
| Journeys                        	| 1    		|		| Contains a list of Journeys.				|
| Journeys/Journey                	| 1..n   	|		| Contains the information about the requested Journey in the availability.	|
| @id                        		| 1  		| Integer	| Unique identifier of the Journey. 			|
| @departureDate             		| 1 		| String	| Departure date.					|
| @departureTime             		| 1 		| String	| Departure time.					|
| Journeys/Journey/OriginLoc      	| 1    		|		| Origin location.					|
| @type                      		| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                      		| 1 		| String	| Location code.					|
| @cityCode                  		| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code. 	|
| Journeys/Journey/DestinationLoc 	| 1    		|		| Destination location.					|
| @type                      		| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                      		| 1 		| String	| Location code.					|
| @cityCode                  		| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.	|
| Passengers                      	| 1    		|		| Contains a list of Passengers.			|
| Passengers/Passenger            	| 1..n   	|		| Contains information of the Passenger.		|
| @id                        		| 1 		| Integer	| Unique identifier of the Passenger. 			|
| @age                       		| 1 		| Integer	| Age of the Passenger.					|
| Passengers/Passenger/Bonuses    	| 0..1   	|		| Possible discount or bonuses. 			|
| @resident                  		| 1 		| String	| Resident discount. 					|
| @largeFamily               		| 1 		| String	| Family discount.					|
| @discountCard              		| 1 		| String	| Discount card.					|
| Passengers/Passenger/Bonuses /PaxTypeCodes | 0..1   	|		| Contains a list of additional passengers types.	|
| Passengers/Passenger/Bonuses /PaxTypeCodes/PaxTypeCode | 1..n |  	| Contains information of the additional passenger type.  |
| @code                      		| 1 		| String	| Specific discounts by passenger type in a provider format.  |
| Vehicles                        	| 0..1   	|		| Contains a list of vehicles.				|
| AvailabilityVehicle             	| 1..2   	|		| Contains details of the vehicles.			|
| @id                        		| 1    		|		| Unique identifier of the vehicle.			|
| @height                    		| 1    		|		| Dimension of the vehicle: height.			|
| @length                    		| 1    		|		| Dimension of the vehicle: width.			|
| @type                      		| 1    		|		| Type of vehicle.					|




### AvailabilityRS


~~~xml
    <AvailabilityRS xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
    <operationImplemented>true</operationImplemented>
    <EstadoRespuesta tipoTrayecto = "IDA" tipoPet = "OW" estado = "ok"/>
    <Transportation>
        <Segments>
            <Segment id = "1" transportationId = "BJ1#VISEMAR ONE#FERRY" transportationType = "F" operatingCarrier = "BAL" marketingCarrier = "BAL" departureTerminal = "PAL" arrivalTerminal = "VAL" departureDate = "2015-08-27T11:30:00" arrivalDate = "2015-08-27T19:30:00"  transportationName = "VISEMAR ONE" transportationCode = "BJ1" segmentStatus = "HK"  tieneParadaTecnica = "false">
                <OriginLoc type = "P" code = "PAL" citycode = "false"/>
                <DestinationLoc type = "P" code = "VAL" citycode = "false"/>
            </Segment>
            <Segment id = "2" transportationId = "BJ1#VISEMAR ONE#FERRY" transportationType = "F" operatingCarrier = "BAL" marketingCarrier = "BAL" departureTerminal = "VAL" arrivalTerminal = "PAL" departureDate = "2015-09-04T22:15:00" arrivalDate = "2015-09-05T06:00:00"  transportationName = "VISEMAR ONE" transportationCode = "BJ1" segmentStatus = "HK"  tieneParadaTecnica = "false">
                <OriginLoc type = "P" code = "VAL" citycode = "false"/>
                <DestinationLoc type = "P" code = "PAL" citycode = "false"/>
            </Segment>
        </Segments>
        <Fares>
            <Fare id = "0" providerCode = "BAL" fareType = "OW">
                <Conditions>
                    <Condition id = "0" language = "ES">
                        <Text>CAFETERIA#CAFETERIA##RTN#TARIFA IDA Y VUELTA#F0-TRAYECTO SIN RESTRICCIONES#F0#2.09</Text>
                    </Condition>
                </Conditions>
                <Options>
                    <Option id = "-1" availabilityJourneyRef = "0" numStopOvers = "0">
                        <SegmentReferences>
                            <SegmentReference segmentRef = "1">
                                <SegmentClasses>
                                    <SegmentClass cabinClass = "N" class = "CAFETERIA" paxRef = "0" fareType = "PUB">
                                        <CancellationPolicies>
                                            <CancellationPolicy amount = "0" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-19T10:16:00" refundable = "true"/>
                                            <CancellationPolicy amount = "10" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-20T11:30:00" refundable = "true"/>
                                            <CancellationPolicy amount = "20" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-25T11:30:00" refundable = "true"/>
                                            <CancellationPolicy amount = "100" currency = "EUR" amountType = "PERCENTUAL" fromDate = "2015-08-27T11:30:00" refundable = "true"/>
                                        </CancellationPolicies>
                                        <Modifiable modifiable = "true" amount = "0" amountType = "AMOUNT">
                                            <Description>Admite cambios sin cargos</Description>
                                        </Modifiable>
                                    </SegmentClass>
                                </SegmentClasses>
                                <ReservationTokens/>
                            </SegmentReference>
                        </SegmentReferences>
                    </Option>
                </Options>
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
                        <PaxBreakdown paxType = "ADT" amount = "75.5" currency = "EUR" taxes = "11" />
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
            </Fare>
            <Fare id = "1" providerCode = "BAL" fareType = "OW">
                <Conditions>
                    <Condition id = "0" language = "ES">
                        <Text>C4#CAMAROTE CUADRUPLE#ACOMODACION EN CAMAROTE CUADRUPLE EXCLUSIVO Y ACCESO AL SALON NEPTUNO SUJETO A DISPONIBILIDAD#RTN#TARIFA IDA Y VUELTA#F0-TRAYECTO SIN RESTRICCIONES#F0#3.19</Text>
                    </Condition>
                </Conditions>
                <Options>
                    <Option id = "-1" availabilityJourneyRef = "0" numStopOvers = "0">
                        <SegmentReferences>
                            <SegmentReference segmentRef = "1">
                                <SegmentClasses>
                                    <SegmentClass cabinClass = "CA" class = "C4" paxRef = "0" fareType = "PUB">
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
                                <ReservationTokens/>
                            </SegmentReference>
                        </SegmentReferences>
                    </Option>
                </Options>
                <AmountBreakdown currency = "EUR" totalAmount = "331" nonCommissionableAmount = "0" commission = "0.963746223564954">
                    <ChargeBreakdowns>
                        <ChargeBreakdown type = "VEHICLE" amount = "134.5" currency = "EUR">
                            <Concept id = "0" language = "ES">
                                <Text>PRECIO VEHICULO IDA</Text>
                            </Concept>
                        </ChargeBreakdown>
                        <ChargeBreakdown type = "VEHICLE_FEE" amount = "11" currency = "EUR">
                            <Concept id = "1" language = "ES">
                                <Text>FEE VEHICULO IDA</Text>
                            </Concept>
                        </ChargeBreakdown>
                    </ChargeBreakdowns>
                    <PaxBreakdowns>
                        <PaxBreakdown paxType = "ADT" amount = "185.5" currency = "EUR" taxes = "11"/>
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
            </Fare>
            <Fare id = "2" providerCode = "BAL" fareType = "OW">
                <Conditions>
                    <Condition id = "0" language = "ES">
                        <Text>CAFETERIA#CAFETERIA##RTN#TARIFA IDA Y VUELTA#F0-TRAYECTO SIN RESTRICCIONES#F0#1.87</Text>
                    </Condition>
                </Conditions>
                <Options>
                    <Option id = "-1" availabilityJourneyRef = "1" numStopOvers = "0">
                        <SegmentReferences>
                            <SegmentReference segmentRef = "2">
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
                                <ReservationTokens/>
                            </SegmentReference>
                        </SegmentReferences>
                    </Option>
                </Options>
                <AmountBreakdown currency = "EUR" totalAmount = "199" nonCommissionableAmount = "0" commission = "0.939698492462313">
                    <ChargeBreakdowns>
                        <ChargeBreakdown type = "VEHICLE" amount = "134.5" currency = "EUR">
                            <Concept id = "0" language = "ES">
                                <Text>PRECIO VEHICULO VUELTA</Text>
                            </Concept>
                        </ChargeBreakdown>
                    </ChargeBreakdowns>
                    <PaxBreakdowns>
                        <PaxBreakdown paxType = "ADT" amount = "64.5" currency = "EUR" taxes = "0" />
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
            </Fare>
            <Fare id = "3" providerCode = "BAL" fareType = "OW">
                <Conditions>
                    <Condition id = "0" language = "ES">
                        <Text>C4#CAMAROTE CUADRUPLE#ACOMODACION EN CAMAROTE CUADRUPLE EXCLUSIVO Y ACCESO AL SALON NEPTUNO SUJETO A DISPONIBILIDAD#RTN#TARIFA IDA Y VUELTA#F0-TRAYECTO SIN RESTRICCIONES#F0#2.97</Text>
                    </Condition>
                </Conditions>
                <Options>
                    <Option id = "-1" availabilityJourneyRef = "1" numStopOvers = "0">
                        <SegmentReferences>
                            <SegmentReference segmentRef = "2">
                                <SegmentClasses>
                                    <SegmentClass cabinClass = "CA" class = "C4" paxRef = "0" fareType = "PUB">
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
                                <ReservationTokens/>
                            </SegmentReference>
                        </SegmentReferences>
                    </Option>
                </Options>
                <AmountBreakdown currency = "EUR" totalAmount = "309" nonCommissionableAmount = "0" commission = "0.961165048543705">
                    <ChargeBreakdowns>
                        <ChargeBreakdown type = "VEHICLE" amount = "134.5" currency = "EUR">
                            <Concept id = "0" language = "ES">
                                <Text>PRECIO VEHICULO VUELTA</Text>
                            </Concept>
                        </ChargeBreakdown>
                    </ChargeBreakdowns>
                    <PaxBreakdowns>
                        <PaxBreakdown paxType = "ADT" amount = "174.5" currency = "EUR" taxes = "0" />
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
            </Fare>           
        </Fares>
    </Transportation>
    </AvailabilityRS>
~~~


### AvailabilityRS Description



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| AvailabilityRS              			| 1     	|		| Root node.						|
| Transportation              			| 1     	|		| Contains all of the Segments and Fares.		|
| Transportation/Segments     			| 1     	|		| Contains a list of the Segments.			|
| Transportation/Segments/Segment		| 1..n    	|		| Contains the information of the segment.		|
| @id                    			| 1 		| Integer	| Unique identifier of the segment.			|
| @transportationId      			| 1 		| String	| Unique Id of the transportation.			|
| @transportationType    			| 1 		| String	| Transport type: F ( Flight ), T ( Train ), B ( Bus ) & F ( Ferry).	|
| @operatingCarrier      			| 1 		| String	| Company which operates the transportation.		|
| @marketingCarrier      			| 1 		| String	| Company which commercializes the transportation.	|
| @departureTerminal     			| 1 		| String	| Departure terminal.					|
| @arrivalTerminal       			| 1 		| String	| Arrival terminal.					|
| @departureDate         			| 1 		| Date		| Departure date. 					|
| @arrivalDate           			| 1 		| Date		| Arrival date.						|
| @segmentDuration       			| 1 		| Integer	| Transport duration ( in minutes ).			|
| @maxCheckinDate        			| 1 		| String	| Maximum date to make the check-in.			|
| @transportationName    			| 0..1		| String	| Name of the vessel.					|
| @transportationCode    			| 0..1		| String	| Code that identifies the vessel. 			|
| @segmentStatus         			| 1 		| String	| Segment status: HK (OK), TK (Change of programming), UC (Unconfirmed), UN( Unable), NO (No action taken) & UD (Undefined).	|
| @hasTechnicalStop      			| 1 		| Boolean	| If true, the segment has a technical stop.		|
| Transportation/Segments/Segment /OriginLoc	| 1     	|		| Origin location.					|
| @type                  			| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                  			| 1 		| String	| Location code.					|
| @cityCode              			| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.	|
| Transportation/Segments/Segment /DestinationLoc | 1     	|		| Destination location.					|
| @type                  			| 1 		| String	| Type of station of the location indicated with A ( AirPort ), T ( Train Station ) & P ( Port ).	|
| @code                  			| 1 		| String	| Location code.					|
| @cityCode              			| 1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.	|
| Transportation/Segments/Segment /TechnicalStops | 0..1    	|		| Contains a list of TechnicalStops.			|
| @totalTechnicalStops   			| 1 		| Integer	| Total number of TechnicalStops. 			|
| Transportation/Segments/Segment /TechnicalStops/TechnicalStop | 1..n |   	| Contains the details of the TechnicalStop.		|
| @location              			| 1 		| String	| TechnicalStop location.				|
| @stopDate              			| 1 		| Date		| Approx. stop date and time.  				|
| @departureDate         			| 1 		| Date		| Approx. departure date and time.			|
| Fares                       			| 1     	|		| Contains a list of Fares.				|
| Fares/Fare                  			| 1..n    	|		| Contains details of Fare.    				|
| @id                    			| 1 		| Integer	| Unique identifier of the Fare. 			|
| @providerCode          			| 1 		| String	| Code of the provider that offers this fare.		|
| @fareType              			| 1 		| String	| Fare type: OW ( one way ), RT ( round trip ), OJ (Open jaw) & CT ( Circle trip ).	|
| Fares/Fare/Conditions       			| 1     	|		| Contains a list of Fare Conditions.			|
| Fares/Fare/Conditions/Condition		| 1..n    	|		| Contains details of the Fare Condition.		|
| @id                   			| 1 		| String	| Indicates if the conditions are of one way ( with a 0 ) or round trip ( with a 1 ). Ferries parameter.  |
| @language              			| 1 		| String	| Language.						|
| Fares/Fare/Conditions /Condition/Text		| 1 		| String	| In Ferries it contains the following: "AccomodationCode#AccomodationName# AccomodationDescription#FareCode#Fa reName#FareDescription".	|
| Fares/Fare/Options          			| 1     	|		| Contains a list of Fare Options.			|
| Fares/Fare/Options/Option   			| 1..n    	|		| Contains details of the Fare Options.    		|
| @id                    			| 1 		| Integer	| Deprecated attribute. 				|
| @availJourneyRef       			| 1 		| Integer	| Reference number of the availability Journey. 	|
| @numStopOver           			| 1 		| Integer	| Number of StopOvers. If -1, then we cannot know how many StopOvers via XML.	|
| @carrier               			| 1 		| String	| Validating carrier.					|
| Fares/Fare/Options/Option /SegmentReferences	| 1     	|		| Contains a list of SegmentReferences.			|
| Fares/Fare/Options/Option /SegmentReferences/SegmentReference | 1..n |   	| Contains details of the SegmentReference of each option. |
| @segmentRef            			| 1 		| Integer	| Reference of the Segment.				|
| Fares/Fare/Options/Option /SegmentReferences/SegmentReference /SegmentClasses | 1 |  | Contains a list of SegmentClasses.		|
| Fares/Fare/Options/Option /SegmentReferences/SegmentReference /SegmentClasses/SegmentClass | 1..n | | Contains details of the SegmentClass. |
| @cabinClass            			| 1 		| String	| Cabin class of the seat: N (Not specified), Y (Tourist), C (Business), F (First), CA (Cabin, only for ferries), YP (Tourist Plus).	|
| @class                 			| 1 		| String	| Fare class. In ferries indicates the accomodation code.  |
| @paxRef                			| 1 		| Integer	| Passenger reference. 					|
| @fareBasis             			| 1 		| String	| Identifier of the fare.				|
| @fareType              			| 1 		| String	| Fare type: PUB ( Public ), PRI ( Private ), NEGO ( Negotiated ) and CORP ( Corporate ).	|
| @avail                 			| 1 		| Integer	| Available seats remaining for this class (In flights, the maximum is 9).  |
| Fares/Fare/Options/Option /SegmentReferences/SegmentReference /ReservationTokens | 0..1 |  | Specific attribute used for each provider.  |
| Fares/Fare/Options/Option /SegmentReferences/SegmentReference /ReservationTokens/Attribute | 0..n |  | Type of attribute.		|
| @key                   			| 1 		| String	| Contains the keyword/ Id to identify a parameter.	|
| @value                 			| 1 		| String	| Contains the value of the parameter.			|
| Fares/Fare/AmountBreakdown  			| 1     	|		| Breakdown of the fare amount.				|
| @currency              			| 1 		| String	| Currency code of the fare.				|
| @totalAmount           			| 1 		| Decimal	| Total amount. with taxes and other charges included.	|
| @notCommissionableAmount			| 1 		| Decimal	| Total amount that can not be commissioned.		|
| @commission            			| 1 		| Decimal	| Commission percentage. A -1 value will be returned if the provider doesn't return any comission information.	|
| Fares/Fare/AmountBreakdown /ChargeBreakdowns	| 0..1    	|		| Contains a list of breakdown amounts ( taxes, mandatory charges.. ).	|
| Fares/Fare/AmountBreakdown /ChargeBreakdowns/ChargeBreakdown | 1..n |   	| Contains details of the BreakdownAmount.		|
| @type                  			| 1 		| String	| Charge type.						|
| @amount                			| 1     	|		| Charge amount.					|
| Fares/Fare/AmountBreakdown /ChargeBreakdowns/ChargeBreakdown /Concept | 0..1 | | Contains a list of breakdown amounts ( taxes, mandatory charges.. ). 	|
| @id                    			| 1 		| String	| Indicates if the conditions are of one way ( with a 0 ) or round trip (  with a 1 ). Ferries parameter.  |
| @language              			| 1 		| String	| Language.						|
| Fares/Fare/AmountBreakdown /ChargeBreakDowns/ChargeBreakdown /Concept/Text | 1 | String | Remarks.					|
| Fares/Fare/AmountBreakdown /PaxBreakdown	| 0..1    	|		| Contains a list of breakdown amounts for each passenger ( ADT amount, etc. ).	|
| Fares/Fare/AmountBreakdown /PaxBreakdowns/PaxBreakdown | 0..n |   		| Contains details of breakdown amounts for each passenger. |
| @paxType               			| 1 		| String	| Passenger type:ADT ( Adult ), CHD ( Child ) & INF ( Infant). |
| @amount                			| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger.	|
| @taxes                 			| 1 		| Integer	| If they exist, taxes are applied for this passenger type.  |
| Fares/Fare/PaxConfigurations			| 1     	|		| Contains a list of PaxConfiguration.			|
| Fares/Fare/PaxConfigurations /PaxConfiguration | 1..n    	|		| Contains details of PaxConfiguration.			|
| @id                    			| 1 		| Integer	| Unique identifier of the PaxConfiguration.		|
| @paxRef                			| 1 		| Integer	| Reference to the passenger Id from the request.	|
| @age                   			| 1 		| Integer	| Age of the passenger.					|
| @paxType               			| 1 		| String	| Passenger type based on the age of the passenger: ADT (Adult), CHD (Child), INF (Infant), YOU (Young) and SEN (Senior).	|
| Fares/Fare/PaxConfigurations /PaxConfiguration/AppliedBonuses | 0..1 |   	| Applied discounts.					|
| @resident              			| 1     	|		| Resident discount type: N(None), BP(Balearic Islands resident flying to mainland), BI(Balearic Islands resident flying to another balearic island), DC(Canarian Islands resident flying to another Canarian Island), RC(Canarian Islands resident flying¡ to mainland),RM(Ceuta/Melilla resident), STR(Italian resident  discount), ELB(Italian resident Elba), SDG(Italian resident Sardegna), SCL(Italian resident Sicily).	|
| @largeFamily           			| 1 		| String	| Family discount type: N(None), F1(Large family), F2 (Special large family).	|
| @discountCard          			| 1  		| String	| Discount card type (for more details, see information below).|
| Fares/Fare/PaxConfigurations /PaxConfiguration/AppliedBonuses /PaxTypeCodes | 0..1 |   | Contains a list of PaxTypeCodes.		|
| Fares/Fare/PaxConfigurations /PaxConfiguration/AppliedBonuses /PaxTypeCodes/PaxTypeCode | 0..n |  | Contains details of the PTC.      |
| @code                  			| 1 		| String	| String with the PTC code.				|
| Fares/Fare/VehicleConfigurations		| 0..1    	|		| Contains a list of VehicleConfiguration.		|
| Fares/Fare/VehicleConfigurations /VehicleConfiguration | 1..2 |   		| Contains details of VehicleConfiguration.		|
| @vehicleRef            			| 1 		| String	| References the vehicle id of the request.		|
| @height                			| 1 		| Integer 	| Height of the vehicle.				|
| @length                			| 1 		| Integer	| Length of the vehicle.				|
| @type                  			| 1     	|		| Vehicle type: N (None/Unknown), Tourism, 4x4, MPV, MotorbikeMax50 (motorbike with less than 50 cc), MotorbikeMin50Max250 (motorbike with 50 - 250 cc), MotorbikeMin250Max500 (motorbike with 250 - 500 cc), MotorbikeMin500 (motorbike with more than 500 cc), Bicicle, Van, LongVehicleMax6 (vehicle larger than 6 meters), Emission0Vehicle (vehicle with no emissions), Caravan, Trailer.	|
| @code                  			| 1 		| String	| The code that identifies this type of vehicle in the providers system.	|
| @name                  			| 0..1		| String	| Name of the vehicle type.				|

