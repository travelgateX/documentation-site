---
title: Reservation Read
keywords: activities, data structure, reservation read
search: Activities - Data Structure - Reservation Read
sidebar: mydoc_sidebar
permalink: /docs/activities/DSF/reservation-read
---



### Method Goals


This method aims to consult a reservation



### Request Format


The request requires the booking code and the name of the customer



### Response Format


The result returns the new status of the reservation and the possible
cost of the consultation.



### Remarks


Not implemented by all suppliers



### ReservationReadRQ Example



~~~xml
    <OTA_ReadRQ
	 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	 xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
	 PrimaryLangID="es">
        <UniqueID ID="1283712#1" Type="PROVIDER"/>
    </OTA_ReadRQ>
~~~


### ReservationReadRQ Description




| **Element**			| **Number**	| **Type**	| **Description**				|
| ----------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_ReadRQ			| 1         |		| Root node.					|
| @PrimaryLangID		| 1    		| String	| Language code (ISO 3166-1 alpha-2) format. 	|
| UniqueID  			| 1         |		| Contains information of the activity booked. 	|
| @ID       			| 1    		| String	| Activity booked identifier.			|
| @type     			| 1    		| String	| Activity booked type (Possible values: "PROVIDER" or "CLIENT"). Usually by provider locator. |
| ReadRequests 			| 0..1      |		| To retrieve activities booked by dates. (Only if suppler allows it)	|
| @Start       			| 1    		| Date	| start date of search.			|
| @End      			| 1    		| Date	| end date of search.			|
| @DateType				| 1    		| Enum	| See table of eDateReservationType.|




### ReservationReadRS Example



~~~xml
    <OTA_TourActivityResRetrieveRS xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
        <operationImplemented>true</operationImplemented>
        <Detail ResStatus = "Confirmed" CreateDateTime = "2013-11-21T00:00:00" LastModifyDateTime="2014-02-19T00:00:00">
            <BasicInfo Name = "Palma Aquarium" TourActivityID = "000200515"/>
            <Confirmation ID = "1283712#1" type = "PROVIDER"/>
            <PaymentInfo Description = "El importe total de esta factura PRO-FORMA debe obrar en poder de Beds On Line, Banco: CITIBANK(Avenida de Europa, 19 - P.E. la Moraleja, 108 - Alcobendas, Madrid) Cuenta:ES35 1474 0000 10 0012272006,  SWIFT:CITIESMX,  7 das antes de la llegada de los clientes (excepto reservas de grupos. Das de antelacin fijados en el momento de la confirmacin). En la orden de pago rogamos indiquen nuestro nmero de referencia.    Gracias por su colaboracin., AVISO: CAMBIO CDIGO SWIFT"/>
            <PickupDropoff OtherInfo = "El cliente puede canjear el bono en la oficina de billetes de Aquarium en C/ Manuela de los Herreros i Sor, 21 | 07610 Palma de Mallorca 

            Invierno (1 de noviembre a 31 de marzo):
            Lunes a viernes de 10:00 a 15:30 h
            Sbado & Domingo de 10:00h a 16:30h
            Verano (1 de abril a 31 de octubre):
            Todos los das de 9:30h a 18:30h

            El cliente no puede olvidar llevar su documento de identidad.

            En caso de emergencia, el cliente deber llamar al siguiente nmero: (+34) 902 430 419

             "/>
            <Pricing>
                <Summary Amount = "33.340" CurrencyCode = "EUR">
                    <PricingType Extension = "PerTotal">Other_</PricingType>
                </Summary>
                <ParticipantCategory age = "30">
                    <QualifierInfo>Adult</QualifierInfo>
                    <Price
                        Amount = "19.660"
                        CurrencyCode = "EUR"/>
                </ParticipantCategory>
                <ParticipantCategory age = "2">
                    <QualifierInfo>Infant</QualifierInfo>
                    <Price
                        Amount = "0.000"
                        CurrencyCode = "EUR"/>
                </ParticipantCategory>
                <ParticipantCategory age = "10">
                    <QualifierInfo>Children</QualifierInfo>
                    <Price
                        Amount = "13.681"
                        CurrencyCode = "EUR"/>
                </ParticipantCategory>
            </Pricing>
            <Schedule>
                <Detail>
                    <OperationTimes>
                        <OperationTime StartDate = "2013-12-18T00:00:00" EndDate = "2013-12-18T00:00:00"/>
                    </OperationTimes>
                </Detail>
            </Schedule>
        </Detail>
    </OTA_TourActivityResRetrieveRS>
~~~


### ReservationReadRS Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_TourActivityResRetrieveRS			| 1         |		| Root node.					|
| Detail|1		|		|	List of reservations details.	|
| @ResStatus	| 1 |  Enum | See table of eStatusType.|
| Detail/Confirmation	| 1      	|		| Contains information of the activity booked.	|
| @ID                  			| 1  		| String	| Activity booked identifier.			|
| @type                			| 1  		| String	| Activity booked type See table of eLocatorType.|
| Detail/BasicInfo			| 1     	|		| Basic information of activity.	|
| @Name               			| 0..1		| String	| Name of ticket.				|
| @TourActivityID     			| 0..1		| String	| Code of ticket, mandatory if need search by activity provider code. |
| Detail/Detail/CategoryAndType		| 0..1    	|		| Category of Ticket.				|
| Detail/Detail/CategoryAndType/Category 	| 0..1    	|		| Category of Ticket.				|
| @Code               			| 0..1		| String	| A category code from a predefined list, if Extension = "Other" then will be provider code. |
| @Extension          			| 0..1		| String	| Enter a category here if you have selected "Other" from the pre-defined list. |
| Detail/PickupDropoff	| 0..1    	|		| The pickup and/or dropoff information if transportation is provided to/ from the tour/activity location. |
| @OtherInfo          			| 0..1		| String	| Other instructions pertaining to the pickup/dropoff. |
| ParticipantCategory 			| 0..n    	|		| Information about participant type, specifying age for each participant. |
| @Age                			| 1 		| Integer	| Age of participant.				|
| Detail/Pricing/ParticipantCategory/QualifierInfo | 0..1	| String	| Specifies participant type (Adult, Children or Baby). If value = "Other_" then then is mandatory specify Extension provider type. |
| Detail/Pricing/ParticipantCategory/Price	| 1     	|		| Specific price for each participantCategory.	|
| @Amount             			| 1 		| String	| ParticipantCategory price.			|
| @CurrencyCode       			| 0..1		| String	| Currency code (ISO 4217).			|
| Detail/Pricing/ParticipantCategory/TPA_Extensions | 0..1     |		| Necessary information that we need send between calls. |
| Detail/Pricing/ParticipantCategory/TPA_Extensions/DynamicToken | 0..1 | String | Inform about the participant types to valuate (if more than one type, the participant Types must be separated by ";"). |
| Detail/Pricing/ParticipantCategory/TPA_Extensions/Issue | 0..1 |   		| Contains information about ticket printing. 	|
| @Mandatory          			| 0..1		| Boolean	| Specifies if the ticket should be printed by the client. |
| Detail/Location | 1      	|		| Information of the location.		|
| Detail/Location/Region          		| 1      	|		| Describes regional information.		|
| @RegionCode              		| 1  		| String	| Specifies a region code.			|
| @RegionName              		| 1  		| String	| Specifies the region name.			|
| Detail/Location/Address         		| 0..1    	|		| Identifies the physical address of the tour departure and/or activity location. |
| Detail/Location/Address/AddressLine		| 0..1		| String	| These lines will contain free form address details.|
| Detail/Location/Address/CityName| 0..1		| String	| Contains the city name.|
| Detail/Location/Address/countryCode| 0..1		| String	| Contains the supplier country code.|
| Detail/Location/Address/countryISO| 0..1		| String	| Contains the country code in format ISO ISO 3166-1 alpha-2 |
| Detail/Location/Address/CityName| 0..1		| String	| Contains the city name.|
| Detail/Location/Address/CityName| 0..1		| String	| Contains the city name.|
| Detail/Location/Address/PostalCode		| 0..1		| String	| Post Office Code number.			|
| Detail/Location/Address/County  		| 0..1		| String	| County name.	|		
| Detail/Location/Address/StateProv| 0..1		| String	| Province/stat|
| Detail/Location/Position| 0..1		| | Position of location. 	|
| @Latitude| 1  		| String	| 			|
| @Longitude| 1  		| String	| 			|
| Detail/Location/PositionArea| 0..1 |  | Information of pickup area.|
| Detail/Location/PositionArea/position| 1..n |  | list of position|
| @latitude| 1   		| String| Latitude position.	|
| @longitude| 1   		| String|  Longitude position. |
| Detail/Location/Region | 1      	|		| Describes regional information.		|
| Detail/Schedule		| 1      	|		| Information about dates range on which you can enjoy the activity. |
| Detail/Schedule/Summary	| 1      	|		| Information dates range that you apply availability. |
| @Start                   		| 1  		| Date		| Start date that you apply availability. 	|
| @End                     		| 1  		| Date		| End date that you apply availability.		|
| Detail/Schedule/Detail	| 1..n    	|		| Information when activity starts and attributes that we need to send between calls. |
| @id                     		| 1  		| String| Detail id.	|
| Detail/Schedule/Detail/OperationTimes | 0..1 |		| Information when activity starts.		|
| Detail/Schedule/Detail/OperationTimes/OperationTime | 0..1 || Information when activity starts and information about the seats number.		|
| Detail/Schedule/Detail/OperationTimes/OperationTime/Start| 0..1		| Date		| Start date activity.|
| Detail/Schedule/Detail/OperationTimes/OperationTime/End| 0..1		| Date		| End date activity.|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| Detail/Schedule/Detail/TPA_Extensions | 0..1 |		| Necessary information that we need to send between calls. |
| Detail/SupplierOperator| 0..n | Date |List the suppliers that operates the activity. |
| Detail/SupplierOperator/Name| 1 | Date |Basic information of supplier. |
| @Code| 1   		| String|  Supplier code. |
| @CodeContext| 1   		| Enum|  See table of eSupplierOperatorCodeContext. |
| @CompanyShortName| 1   		| String|  Supplier name. |

### Types tables


#### eDateReservationType
| **Type** | **Description** |
| --------- | --------------- | 
| ArrivalDate | Start date of activity. |
| CreateDate | Date of reservationDetails. |
| DepartureDate | End date of activity. |

#### eStatusType
| **Type** | **Description** |
| --------- | --------------- | 
| Confirmed | Reservation is confirmed. |
| OnRequest | Reservation is onRequest, nor confirmed yet.  |
| Unknown | An error during the confirmation |


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
| Internal | Our supplier code. |
| External | Code returned by supplier.|

#### eExtensionClassType
| **Type** | **Description** |
| ---------| --------------- | 
| Cultural | |
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
| --------- | --------------- | 
| Other | |
| PerGroupPerDay | |
| PerPersonPerDay | |
| PerTotal | |
| PerPerson | |

#### eLocatorType 

Indicates which type of locator is sent.

| **Type** | **Description** |
| ---------| --------------- | 
| Client | Locator get in our request. |
| Provider | Locator send by the supplier |
| Ticket |Locator for specific ticket |
| Other | Other type of locator. |

