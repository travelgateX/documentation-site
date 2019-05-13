---
title: Reservation
keywords: activities, data structure, reservation
search: Activities - Data Structure - Reservation
sidebar: mydoc_sidebar
permalink: /docs/activities/DSF/reservation
---



### ReservationRQ Example



~~~xml
    <OTA_TourActivityBookRQ        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" PrimaryLangID="es">
        <ContactDetail>
            <BirthDate>1984-02-19T00:00:00</BirthDate>
            <PersonName>
                <GivenName>TestNameClient</GivenName>
                <Surname>TestApClient</Surname>
            </PersonName>
        </ContactDetail>
        <BookingInfo>
            <BasicInfo Name="Palma Aquarium" TourActivityID="000200515"/>
            <Schedule StartPeriod="2014-02-26T00:00:00" EndPeriod="2014-02-27T00:00:00"/>
            <ParticipantInfo>
                <Individual LeadCustomerInd="true" age="30">
                    <GivenName>TestName1</GivenName>
                    <Surname>TestAp1</Surname>
                </Individual>
            </ParticipantInfo>
            <Pricing>
                <Summary Amount="19.660" CurrencyCode="EUR">
                    <PricingType Extension="PerTotal">Other_</PricingType>
                </Summary>
                <ParticipantCategory age="30">
                    <QualifierInfo>Adult</QualifierInfo>
                    <Price
                        Amount="19.660"
                        CurrencyCode="EUR"/>
                </ParticipantCategory>
            </Pricing>
            <TPA_Extensions>
                <Confirmation ID="4791780" type="CLIENT"/>
                <!--OpenAvailability ="true" -->
                <Issue Mandatory="true"/>
                <Attributes>
                    <!--Attributes mandatory for confirmation. Specific for IMP -->
                    <Attribute key="idAgrupacion" value="8181"/>
                    <Attribute key="idPago" value="1"/>
                </Attributes>
            </TPA_Extensions>
        </BookingInfo>
    </OTA_TourActivityBookRQ>
~~~


### ReservationRQ Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_TourActivityBookRQ|	1	|		|		Root node.		|		
| @PrimaryLangID     			| 1  		| String	| Language code (ISO 3166-1 alpha-2) format.	|
| ContactDetail      			| 0..1    	|		| Information about holder client.    		|
| ContactDetail/BirthDate		| 0..1		| Date		| Holder BirthDate.				|
| ContactDetail/BirthDate/PersonName	| 0..1		| Date		| Information about name holder.		|
| ContactDetail/BirthDate/PersonName/GivenName | 0..1	| String	| Name holder.                        		|
| ContactDetail/BirthDate/PersonName/Surname | 0..1	| String	| Surname holder.				|
| BookingInfo        			| 0..1    	|		| Information about specific ticket.   		|
| BookingInfo/BasicInfo			| 0..1    	|		| If need search by activity provider code.	|
| @Name              			| 0..1		| String	| Name of ticket.				|
| @TourActivityID    			| 1  		| String	| Code of ticket, mandatory if need search by activity provider code. |
| BookingInfo/Schedule			| 1      	|		| Information about dates range on which you can enjoy the activity. |
| BookingInfo/Schedule			| 1      	|		| Information about dates range on which you can enjoy the activity. |
| @StartPeriod       			| 1  		| Date		| Start date that you apply availability.	|
| @EndPeriod         			| 1  		| Date		| End date that you apply availability.		|
| BookingInfo/CategoryAndType		| 0..1    	|		| Category of Ticket.				|
| BookingInfo/CategoryAndType/Category	| 0..1   	|		| Category of Ticket.				|
| @Code              			| 0..1		| String	| A category code from a predefined list, if Extension="Other" then will be provider code. |
| @Extension         			| 0..1		| String | Enter a category here if you have selected "Other" from the pre-defined list. |
| BookingInfo/ParticipantInfo		| 1..n    	|		| Information about all participants.		|
| @OtherInfo         			| 0..1		| String	| Other instructions pertaining to the pickup/dropoff. |
| BookingInfo/ParticipantInfo/Individual | 1      	|		| Information about each participant.		|
| @LeadCustomerInd   			| 1  		| Boolean	| When 'true', indicates that this is the 'lead' participant (i.e., the primary contact making the booking). |
| @Age               			| 1  		| Integer	| Age of participant.  				|
| BookingInfo/ParticipantInfo/Individual/GivenName | 1 	| String	| Participant Name.				|
| BookingInfo/ParticipantInfo/Individual/Surname | 1 	| String	| Participant Surname.				|
| Pricing/ParticipantCategory/QualifierInfo | 0..1	| String	| Specifies participant type (Adult, Children or Babie). If value="Other_" then then is mandatory specify Extension provider type. See table of eQualifierInfo. |
| Pricing/ParticipantCategory/Price	| 1      	|		| Specific price for each participantCategory.	|
| @Amount            			| 1  		| String	| ParticipantCategory price.			|
| @CurrencyCode      			| 0..1		| String	| Currency code (ISO 4217).			|
| @Commission | 0..1		| decimal | Percentage commission of Amount |
| Pricing/ParticipantCategory/TPA_Extensions | 0..1    	|		| Necessary information that we need send  between calls. |
| Pricing/ParticipantCategory/TPA_Extensions/DynamicToken | 0..1 | String | Inform about the participant types to valuate (if more than one type, the participant Types  must be separated by ";"). |
| Pricing/ParticipantCategory/TPA_Extensions/Issue | 0..1 |   		| Contains information about ticket printing.	|
| @Mandatory         			| 0..1		| Boolean	| Specifies if the ticket should be printed by the client. |
| Pricing/ParticipantCategory/TPA_Extensions/Attributes | 0..1 |    	| Attributes that we need send between calls.	|
| Pricing/ParticipantCategory/TPA_Extensions/Attributes/Attribute | 0..n |  | Attributes that we need send between calls.  |
| @idAgrupacion      			| 1  		| String	| In this case, is specific attribute mandatory for IMP. This can obtain in iFRAME, from UrlSitting that we return in availabilityRS, this is for preBook reservation. |
| @idPago            			| 1  		| String	| In this case, is specific attribute mandatory for IMP. This can obtain in iFRAME, from  UrlSitting that we return in availabilityRS, this is for preBook reservation. |



### ReservationRS Example



~~~xml
    <OTA_TourActivityBookRS>
        <ReservationDetails>
            <BasicInfo Name="Palma Aquarium" TourActivityID="000200515"/>
            <Confirmation ID="1314215#1" type="PROVIDER"/>
            <Schedule>
                <Detail>
                    <OperationTimes>
                        <OperationTime Start="2014-03-07T21:00:00" End="2014-03-07T23:00:00"/>
                    </OperationTimes>
                </Detail>
            </Schedule>
            <PaymentInfo Description="El importe total de esta factura PRO-FORMA debe obrar en poder de Beds On Line, Banco: CITIBANK(Avenida de Europa, 19 - P.E. la Moraleja, 108 - Alcobendas, Madrid) Cuenta:ES35 1474 0000 10 0012272006,  SWIFT:CITIESMX,  7 das antes de la llegada de los clientes (excepto reservas de grupos. Das de antelacin fijados en el momento de la confirmacin). En la orden de pago rogamos indiquen nuestro nmero de referencia.    Gracias por su colaboracin., AVISO: CAMBIO CDIGO SWIFT"/>
            <Pricing>
                <Summary Amount="19.660" CurrencyCode="EUR"/>
                <ParticipantCategory age="30">
                    <QualifierInfo>Adult</QualifierInfo>
                    <Price
                        Amount="19.660"
                        CurrencyCode="EUR"/>
                </ParticipantCategory>
            </Pricing>
            <TPA_Extensions>
                <Issue Mandatory="true">
                    <Tickets>
                        <Ticket idTicket="15782" url="http://93.90.21.40:8080/Janto_4TICK/GetHomeTicket?xmlDoc=%0d%0a%3cGetHomeTicket++%3e%0d%0a++%3cIdCookie%3e9999999787%3c%2fIdCookie%3e%0d%0a++%3cUsuario+%2f%3e%0d%0a++%3cRefOperacion%3e15782%3c%2fRefOperacion%3e%0d%0a++%3cReimpresion%3eS%3c%2fReimpresion%3e%0d%0a%3c%2fGetHomeTicket%3e"/>
                    </Tickets>
                </Issue>
            </TPA_Extensions>
        </ReservationDetails>
    </OTA_TourActivityBookRS>
~~~


### Reservation RS Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_TourActivityBookRS|	1	|		|		Root node.		|		
| ReservationDetails| 1 | | information of the reservation done.|
| @ResStatus	| 1 |  Enum | See table of eStatusType.|
| ReservationDetails/Confirmation	| 1      	|		| Contains information of the activity booked.	|
| @ID                  			| 1  		| String	| Activity booked identifier.			|
| @type                			| 1  		| String	| Activity booked type See table of eLocatorType.|
| ReservationDetails/BasicInfo			| 1     	|		| Basic information of activity.	|
| @Name               			| 0..1		| String	| Name of ticket.				|
| @TourActivityID     			| 0..1		| String	| Code of ticket, mandatory if need search by activity provider code. |
| ReservationDetails/ReservationDetails/CategoryAndType		| 0..1    	|		| Category of Ticket.				|
| ReservationDetails/ReservationDetails/CategoryAndType/Category 	| 0..1    	|		| Category of Ticket.				|
| @Code               			| 0..1		| String	| A category code from a predefined list, if Extension = "Other" then will be provider code. |
| @Extension          			| 0..1		| String	| Enter a category here if you have selected "Other" from the pre-defined list. |
| ReservationDetails/PickupDropoff	| 0..1    	|		| The pickup and/or dropoff information if transportation is provided to/ from the tour/activity location. |
| @OtherInfo          			| 0..1		| String	| Other instructions pertaining to the pickup/dropoff. |
| ParticipantCategory 			| 0..n    	|		| Information about participant type, specifying age for each participant. |
| @Age                			| 1 		| Integer	| Age of participant.				|
| ReservationDetails/Pricing/ParticipantCategory/QualifierInfo | 0..1	| String	| Specifies participant type (Adult, Children or Baby). If value = "Other_" then then is mandatory specify Extension provider type. |
| ReservationDetails/Pricing/ParticipantCategory/Price	| 1     	|		| Specific price for each participantCategory.	|
| @Amount             			| 1 		| String	| ParticipantCategory price.			|
| @CurrencyCode       			| 0..1		| String	| Currency code (ISO 4217).			|
| ReservationDetails/Pricing/ParticipantCategory/TPA_Extensions | 0..1     |		| Necessary information that we need send between calls. |
| ReservationDetails/Pricing/ParticipantCategory/TPA_Extensions/DynamicToken | 0..1 | String | Inform about the participant types to valuate (if more than one type, the participant Types must be separated by ";"). |
| ReservationDetails/Pricing/ParticipantCategory/TPA_Extensions/Issue | 0..1 |   		| Contains information about ticket printing. 	|
| @Mandatory          			| 0..1		| Boolean	| Specifies if the ticket should be printed by the client. |
| ReservationDetails/Location | 1      	|		| Information of the location.		|
| ReservationDetails/Location/Region          		| 1      	|		| Describes regional information.		|
| @RegionCode              		| 1  		| String	| Specifies a region code.			|
| @RegionName              		| 1  		| String	| Specifies the region name.			|
| ReservationDetails/Location/Address         		| 0..1    	|		| Identifies the physical address of the tour departure and/or activity location. |
| ReservationDetails/Location/Address/AddressLine		| 0..1		| String	| These lines will contain free form address details.|
| ReservationDetails/Location/Address/CityName| 0..1		| String	| Contains the city name.|
| ReservationDetails/Location/Address/countryCode| 0..1		| String	| Contains the supplier country code.|
| ReservationDetails/Location/Address/countryISO| 0..1		| String	| Contains the country code in format ISO ISO 3166-1 alpha-2 |
| ReservationDetails/Location/Address/CityName| 0..1		| String	| Contains the city name.|
| ReservationDetails/Location/Address/CityName| 0..1		| String	| Contains the city name.|
| ReservationDetails/Location/Address/PostalCode		| 0..1		| String	| Post Office Code number.			|
| ReservationDetails/Location/Address/County  		| 0..1		| String	| County name.	|		
| ReservationDetails/Location/Address/StateProv| 0..1		| String	| Province/stat|
| ReservationDetails/Location/Position| 0..1		| | Position of location. 	|
| @Latitude| 1  		| String	| 			|
| @Longitude| 1  		| String	| 			|
| ReservationDetails/Location/PositionArea| 0..1 |  | Information of pickup area.|
| ReservationDetails/Location/PositionArea/position| 1..n |  | list of position|
| @latitude| 1   		| String| Latitude position.	|
| @longitude| 1   		| String|  Longitude position. |
| ReservationDetails/Location/Region | 1      	|		| Describes regional information.		|
| ReservationDetails/Schedule		| 1      	|		| Information about dates range on which you can enjoy the activity. |
| ReservationDetails/Schedule/Summary	| 1      	|		| Information dates range that you apply availability. |
| @Start                   		| 1  		| Date		| Start date that you apply availability. 	|
| @End                     		| 1  		| Date		| End date that you apply availability.		|
| ReservationDetails/Schedule/Detail	| 1..n    	|		| Information when activity starts and attributes that we need to send between calls. |
| @id                     		| 1  		| String| Detail id.	|
| ReservationDetails/Schedule/Detail/OperationTimes | 0..1 |		| Information when activity starts.		|
| ReservationDetails/Schedule/Detail/OperationTimes/OperationTime | 0..1 || Information when activity starts and information about the seats number.		|
| ReservationDetails/Schedule/Detail/OperationTimes/OperationTime/Start| 0..1		| Date		| Start date activity.|
| ReservationDetails/Schedule/Detail/OperationTimes/OperationTime/End| 0..1		| Date		| End date activity.|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| ReservationDetails/Schedule/Detail/TPA_Extensions | 0..1 |		| Necessary information that we need to send between calls. |
| ReservationDetails/SupplierOperator| 0..n | Date |List the suppliers that operates the activity. |
| ReservationDetails/SupplierOperator/Name| 1 | Date |Basic information of supplier. |
| @Code| 1   		| String|  Supplier code. |
| @CodeContext| 1   		| Enum|  See table of eSupplierOperatorCodeContext. |
| @CompanyShortName| 1   		| String|  Supplier name. |

### Types tables

#### eStatusType
| **Type** | **Description** |
| --------- | --------------- | 
| Confirmed | Reservation is confirmed. |
| OnRequest | Reservation is onRequest, nor confirmed yet.  |
| Unknown | An error during the confirmation|

#### eConditionType 

Indicates the condition that the person must meet.

| **Type** | **Description** |
| --------- | --------------- | 
| Generic | |
| Disabled | |
| Student | |
| Resident |  |
| LargeFamily |  |
| Retired | |

#### eSupplierOperatorCodeContext

Indicates the type of supplier code.

| **Type** | **Description** |
| --------- | --------------- | 
| Internal | Our supplier code.|
| External | Code returned by supplier.|

#### eExtensionClassType
| **Type** | **Description** |
| --------- | --------------- | 
| Cultural ||
| EcoAdventure | |
| Educational | |
| FamilyFun | |
| FoodBeverage | |
| Free | |
| Other_ | |
| Romantic | |
| SportsRecreation | |
| WheelchairAccess | |

#### eQualifierInfo 

Indicates the type of a Participant. The range of what is considered an adult, children, infant, etc is particular to each supplier.

| **Type** | **Description** |
| --------- | --------------- | 
| Adult | |
| Children | |
| Infant | |
| Other | |
| Young | |
| Senior | |

#### eExtensionPricingType
| **Type** | **Description** |
| ---------| --------------- | 
| Other | |
| PerGroupPerDay | |
| PerPersonPerDay | |
| PerTotal | |
| PerPerson | |

#### eLocatorType 

Indicates which type of locator is sent.

| **Type** | **Description** |
| ---------| --------------- | 
| Client | locator get in our request.|
| Provider | locator send by the supplier |
| Ticket | locator for specific ticket |
| Other | Other type of locator.|



