---
title: Avail
keywords: activities, data structure, avail
search: Activities - Data Structure -  Avail
sidebar: mydoc_sidebar
permalink: /docs/activities/DSF/avail
---



### Method Goals


This method aims to return all the available options for a given date
and search type. It does not filter different classes, times or fares.
It will always return all results returned by the supplier between
specific date range.



### Request Format


It is mandatory to pass a date range and a search type. Depends if
OpenAvailability is true or false (this attribute return in
StaticConfiguration call), you need specify passengers.

**Search types**

-   RegionCode : Specify a provider region code where you want to
    perform availability.
-   Activity ID : Specify a provider activity code of the desired
    activity.
-   Mutiple Activity ID : Specify provider activities codes of the desired
    activities.
-   Category/Code : Specify a provider category code of the desired
    activity category.



### Response Format


The response contains information of each activity that provider return.
Depends if OpenAvailability is true or false (this attribute return in
StaticConfiguration call).

**OpenAvailability**

-   OpenAvailability = false: Need specify passengers in avail request.
    In response, provider return price of option that you specify.
-   OpenAvailability = true: Not necessary specify passengers in avail
    request. In this case provider return all possible participant types
    that can provide, and you can choose the participants types that you
    are interested.



### AvailRQ Example



~~~xml
    <OTA_TourActivityAvailRQ>
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        PrimaryLangID="es">
        <TourActivity>
            <!--Search by activity provider code-->
            <BasicInfo TourActivityID="PRUEBAPORESPECT1"/>
            <Schedule StartPeriod="2014-03-20T00:00:00" EndPeriod="2014-03-21T00:00:00"/>
            <!--Search by provider category code-->
            <CategoryAndTypes>
                <Category Code="1" Extension="Other"/>
            </CategoryAndTypes>
            <!--Search by provider region code-->
            <Location>
                <Region RegionCode="PMI"/>
            </Location>
            <!--Mandatory specify if OpenAvailability=false-->
            <ParticipantCount Age="30" Quantity="1"/>
        </TourActivity>
    </OTA_TourActivityAvailRQ>
~~~


### AvailRQ Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------- | ------------- | ----------| ------------------------------|
| OTA_TourActivityAvailRQ 	|     1   		|          	| Root node.    				|
| @PrimaryLangID      			| 1   		| String	| Language code (ISO 3166-1 alpha-2) format.	|
| TourActivityInfo    			| 0..n      	|		| Information about specific ticket.		|
| TourActivityInfo/BasicInfo		| 0..1      	|		| If need search by activity provider code.	|
| @Name               			| 0..1		| String	| Name of ticket.				|
| @TourActivityID     			| 0..1		| String	| Code of ticket, mandatory if need search  by activity provider code. |
| TourActivityInfo/Schedule		| 1         	|		| Information about dates range on which you can enjoy the activity. |
| TourActivityInfo/Schedule/Summary	| 1         	|		| Information dates range that you apply availability. |
| @Start              			| 1   		| Date		| Start date that you apply availability.	|
| @End                			| 1   		| Date 		| End date that you apply availability.		|
| TourActivityInfo/CategoryAndType/Category | 0..1      |		| Category of Ticket.				|
| @Code               			| 0..1		| String	| A category code from a predefined list, if Extension="Other" then will be provider code. |
| @Extension          			| 0..1		| String	| Enter a category here if you have selected "Other" from the pre-defined list.|
| TourActivityInfo/CategoryAndType	| 0..1      	|		| Category of Ticket.				|
| TourActivityInfo/CategoryAndType/Category | 0..1      |		| Category of Ticket.				|
| @Code               			| 0..1		| String	| A category code from a predefined list, if Extension="Other" then will be provider code. |
| @Extension          			| 0..1      |		| Enter a category here if you have selected "Other" from the pre-defined list. |
| Location            			| 0..1      |		| The location of the tour/ activity.		|
| Location/Region     			| 0..1      |		| Describes regional information.		|
| @RegionCode         			| 0..1		| String	| Specifies a region code.  			|
| @RegionName         			| 0..1		| String	| Specifies the region name.			|
| ParticipantCount    			| 0..n      	|		| Information about participant type, specifying age for each participant. |
| @Age                			| 1   		| Integer	| Age of participant.				|
| @Quantity           			| 1   		| Integer	| Number of participant with same age.		|



### AvailRS Example



~~~xml
    <OTA_TourActivityAvailRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">  
  <operationImplemented>true</operationImplemented>
  <OTA_TourActivityInfo>
    <BasicInfo Name="School of Rock" TourActivityID="E-U10-SCHOOLROCK"/>
    <ParticipantCount refId="0" Age="30" Condition="Generic" Quantity="2"/>
    <Description>
      <LongDescription>&lt;p&gt;Basado en la película homónima, School of Rock, el musical cuenta la historia del aspirante a estrella de rock, Dewey Finn, que se presenta como maestro suplente de una prestigiosa escuela preparatoria.&lt;/p&gt;
&lt;p&gt;Al descubrir el talento musical de sus estudiantes, convence a sus alumnos de quinto grado para formar un grupo de rock y conquistar la Batalla de las Bandas.&lt;/p&gt;
&lt;br /&gt;&lt;br /&gt;\n&lt;strong&gt;Instrucciones para canjear el bono&lt;/strong&gt;&lt;br /&gt;&lt;u&gt;Tipo de bono&lt;/u&gt;: Impreso&lt;br /&gt;Bono impreso. Imprime y lleva el bono para disfrutar de la actividad.&lt;br /&gt;&lt;br /&gt;&lt;strong&gt;Ubicación&lt;/strong&gt;&lt;br /&gt;&lt;u&gt;Punto de encuentro:&lt;/u&gt; &lt;br /&gt;Winter Garden Theatre&lt;br /&gt;&lt;br /&gt;&lt;u&gt;Punto de retorno&lt;/u&gt;: Mismo que el punto de partida&lt;br /&gt;&lt;br /&gt;&lt;strong&gt;Horario&lt;/strong&gt;&lt;br /&gt;&lt;u&gt;Días de apertura&lt;/u&gt;&lt;br /&gt;13:00 - 15:15&lt;br /&gt;14:00 - 16:15&lt;br /&gt;18:00 - 20:15&lt;br /&gt;19:00 - 21:15&lt;br /&gt;20:00 - 22:15&lt;br /&gt;&lt;br /&gt;&lt;u&gt;Duración&lt;/u&gt;: 135 Horas&lt;br /&gt;&lt;br /&gt;&lt;strong&gt;Requisitos&lt;/strong&gt;&lt;br /&gt;Los horarios varían y están sujetos a posibles cambios.&lt;br /&gt;\n</LongDescription>
      <Multimedia>
        <MultimediaDescription>
          <ImageItems>
            <ImageItem>
              <ImageFormat>
                <URL>https://media.activitiesbank.com/42819/ENG/S/42819_5.jpg</URL>
              </ImageFormat>
            </ImageItem>
            <ImageItem>
              <ImageFormat>
                <URL>https://media.activitiesbank.com/42819/ENG/XL/42819_5.jpg</URL>
              </ImageFormat>
            </ImageItem>
            <ImageItem>
              <ImageFormat>
                <URL>https://media.activitiesbank.com/42819/ENG/B/42819_5.jpg</URL>
              </ImageFormat>
            </ImageItem>
            <ImageItem>
              <ImageFormat>
                <URL>https://media.activitiesbank.com/42819/ENG/LPP/42819_5.jpg</URL>
              </ImageFormat>
            </ImageItem>
          </ImageItems>
        </MultimediaDescription>
      </Multimedia>
    </Description>
    <Schedule StartPeriod="2018-04-07T00:00:00" EndPeriod="2018-04-28T00:00:00">
      <Summary Start="2018-04-07T00:00:00" End="2018-04-28T00:00:00"/>
      <Detail id="0">
        <OperationTimes>
          <OperationTime Start="2018-04-07T00:00:00" End="2018-04-07T00:00:00"/>
          <OperationTime Start="2018-04-13T00:00:00" End="2018-04-13T00:00:00"/>
          <OperationTime Start="2018-04-14T00:00:00" End="2018-04-14T00:00:00"/>
          <OperationTime Start="2018-04-20T00:00:00" End="2018-04-20T00:00:00"/>
          <OperationTime Start="2018-04-21T00:00:00" End="2018-04-21T00:00:00"/>
          <OperationTime Start="2018-04-27T00:00:00" End="2018-04-27T00:00:00"/>
          <OperationTime Start="2018-04-28T00:00:00" End="2018-04-28T00:00:00"/>
        </OperationTimes>
        <TPA_Extensions>
          <Attributes>
            <Attribute key="ActivityType" value=""/>
            <Attribute key="ActivityRateKey" value="bl2m586tjpd9767rshhpnf0a9v"/>
            <Attribute key="ModalityName" value="Entrada general (20:00 Orchestra A-V,Mezzanine Center Rows A-D)"/>
            <Attribute key="ModalityCode" value="TICKET"/>
          </Attributes>
        </TPA_Extensions>
      </Detail>
    </Schedule>
    <Locations>
      <Location LocationId="0">
        <Position Latitude="40.761631" Longitude="-73.983412"/>
        <Address>
          <AddressLine>1634 Broadway</AddressLine>
          <CityName>New York</CityName>
          <County>Estados Unidos</County>
        </Address>
      </Location>
    </Locations>
    <ActivityRates>
      <ActivityRate RateID="GENERIC" isNominative="false" hiddenRate="false" RateCode="0">
        <Summary Amount="247.32" ReferencePriceAmount="310.00" CurrencyCode="USD" Commission="0"/>
        <RateParticipants>
          <ParticipantCategory Age="99" minAge="18" refId="0">
            <QualifierInfo>Adult</QualifierInfo>
            <Price Amount="123.66" CurrencyCode="USD" Commission="0" ReferencePriceAmount="155.00"/>
            <TPA_Extensions>
              <Attributes>
                <Attribute key="ActivityType" value=""/>
                <Attribute key="ActivityRateKey" value="bl2m586tjpd9767rshhpnf0a9v"/>
                <Attribute key="contractRemarks" value="Por favor intercambie este documento por sus entradas para el teatro. Las entradas o tickets solo se las darán directamente en la taquilla del teatro y bajo el nombre del pasajero principal que aparezca en el bono. El bono debe ser presentado en la taquilla antes de la entrada al teatro. Por favor recuerde traer con usted un documento de identidad con fotografía válida. Los pasajeros deben llegar con al menos una hora de antelación del show. Los asientos para las personas que lleguen tarde al show son enteramente a discreción de la dirección del teatro. ¡Por favor, no llegue tarde! Ya que usted no querrá perderse nada! INFORMACION IMPORTANTE: Por favor apague todos los teléfonos celulares y los beepers antes del comienzo del show. No sólo es ser cortés con los otros clientes: es la ley en Nueva York. Todos los que entran al teatro deben tener su ticket. La mayoría de los teatros de Broadway no permiten que los niños menores de 4 años asistan al espectáculo. También algunos espectáculos pueden no ser adecuados para niños menores de 12 años. Por favor, consulte con nosotros si no está seguro. Tenga en cuenta que  los espectáculos de entrada de Broadway son 100% NO REEMBOLSABLES. Si tiene alguna pregunta con respecto a sus tickets, no dude en llamar a Hotelbeds al siguiente número: +1 407 345 4996"/>
                <Attribute key="supplierName" value="HOTELBEDS USA, INC"/>
                <Attribute key="providerName" value="BROADWAY INBOUND"/>
              </Attributes>
            </TPA_Extensions>
          </ParticipantCategory>
        </RateParticipants>
      </ActivityRate>
    </ActivityRates>
    <Options>
      <Option refDetail="0" refActivityRate="0" refLocation="0">
        <Promotions>
          <Promotion code="TICKET" pricePerPax="false">
            <Description>Entrada general (20:00 Orchestra A-V,Mezzanine Center Rows A-D)</Description>
          </Promotion>
        </Promotions>
      </Option>
    </Options>
  </OTA_TourActivityInfo>
  <TourActivityInfo>
    <CategoryAndType>
      <Category Code="14" Extension="Cultural"/>
      <TypeTags>
        <TypeTag id="14" Name="Teatro, espectáculos y musicales"/>
      </TypeTags>
    </CategoryAndType>
  </TourActivityInfo>
    </OTA_TourActivityAvailRS>
~~~


### AvailRS Description


| **Element**	| **Number**	| **Type**	| **Description**|
| ----------------------------- | ------------- | ------------- | -------------------------------|
| OTA_TourActivityAvailRS 		|     1   		|          |          Root node.    |
| TourActivityInfo         		| 0..n    	|		| Information about specific ticket.		|
| TourActivityInfo/BasicInfo		| 0..1    	|		| Basic Information of activity.			|
| @Name                   		| 0..1		| String	| Name of activity.				|
| @TourActivityID          		| 0..1		| String	| Code of activity.				|
| TourActivityInfo/BasicInfo/multipleTourActivitySearch	| 0..1		|  | List of activity codes.|
| TourActivityInfo/BasicInfo/multipleTourActivitySearch/TourActivityID	| 1..n		|  | Code of activity.|
| @id          		| 1..1		| String	| Code of ticket.				|
| TourActivityInfo/BasicInfo/IncludedServices	| 0..n		|  | List of included services for ticket.|
| @text	| 1..1		|  | name of service.|
| TourActivityInfo/Description | 0..1    	|		| Images and descriptions of the activity.	|
| TourActivityInfo/Description/LongDescription | 0..1    	|		| Extensive description of activity.|
| TourActivityInfo/Description/ShortDescription		| 0..1		| String	| Short description of the activity.		|
| TourActivityInfo/Description/Multimedia   		| 0..1    	|		| Information and url images. 	|
| TourActivityInfo/Description/Multimedia/MultimediaDescription | 0..1   ||Information and url images.|
| TourActivityInfo/Description/Multimedia/MultimediaDescription/ImageItems | 0..1 |   	| Information and url images.			|
| TourActivityInfo/Description/Multimedia/MultimediaDescription/ImageItems/ImageItem | 0..n || Information for each image.		|
| TourActivityInfo/Description/Multimedia/MultimediaDescription/ImageItems/ImageItem/ImageFormat | 0..1 || Url image.			|
| TourActivityInfo/Description/Multimedia/MultimediaDescription/ImageItems/ImageItem/ImageFormat/URL | 0..1 | String | Access to image url.|
| TourActivityInfo/ParticipantCount    			| 0..n      	|		| Information about participant type, specifying age for each participant. |
| @id                			| 0..1 		| Integer	| Age of participant.				|
| @Age                			| 1   		| Integer	| Age of participant.				|
| @Quantity           			| 1   		| Integer	| Number of participant with same age.		|
| @Condition           			| 1   		| Enum| See table of eConditionType		|
| TourActivityInfo/ParticipantCount/Price | 0..1 | String |  |
| @amount| 1   		| Decimal| 		|
| @Commission| 0..1   		| Decimal	| |
| @currencyCode| 1   		| String| 		|
| @IsBinding| 1   		| Boolean| 	|
| @ReferencePriceAmount| 0..1        | Decimal| 	Price reference indicate by the supplier.	|
| TourActivityInfo/PickupDropoffList | 0..1 | | List of pickup/Dropoff |
| TourActivityInfo/PickupDropoffList/PickupDropoff | 1..n |  | Information of pickup/dropoff|
| @AddressLine| 1   		| String| General Address.|
| @DropoffInd| 1   		| Boolean| True if there is Dropoff.	|
| @OtherInfo| 1   		| String| Other relevant information.	|
| @PickupInd| 1   		| Boolean| True if there is Pickup.	|
| TourActivityInfo/PickupDropoffList/DateTimeDropOff | 0..1 | Date | Date of Dropoff|
| TourActivityInfo/PickupDropoffList/DateTimePickup| 0..1 | Date | Date of Pickup|
| TourActivityInfo/PickupDropoffList/PickupArea| 0..1 |  | Information of pickup area.|
| TourActivityInfo/PickupDropoffList/PickupArea/position| 1..n |  | list of position|
| @latitude| 1   		| String| Latitude position.	|
| @longitude| 1   		| String|  Longitude position. |
| TourActivityInfo/PickupDropoffList/Position| 0..1 |  | Unique position pickup|
| @latitude| 1   		| String| Latitude position.	|
| @longitude| 1   		| String|  Longitude position. |
| TourActivityInfo/PickupValidity/DaysOfWeek| 0..1 |  | List of valid days.|
| TourActivityInfo/PickupValidity/DaysOfWeek/DayOfWeek| 1..n | String | Element of week. |
| TourActivityInfo/PickupValidity/FromDate| 0..1 | Date  |First day of valid pickup. |
| TourActivityInfo/PickupValidity/ToDate| 0..1 | Date |Last day of valid pickup. |
| TourActivityInfo/SupplierOperator| 0..n | Date |List the supplier that operates the activity. |
| TourActivityInfo/SupplierOperator/Name| 1 | Date |Basic information of supplier. |
| @Code| 1   		| String|  Supplier code. |
| @CodeContext| 1   		| Enum|  See table of eSupplierOperatorCodeContext. |
| @CompanyShortName| 1   		| String|  Supplier name. |
| TourActivityInfo/Schedule		| 1      	|		| Information about dates range on which you can enjoy the activity. |
| TourActivityInfo/Schedule/Summary	| 1      	|		| Information dates range that you apply availability. |
| @Start                   		| 1  		| Date		| Start date that you apply availability. 	|
| @End                     		| 1  		| Date		| End date that you apply availability.		|
| TourActivityInfo/Schedule/Detail	| 1..n    	|		| Information when activity starts and attributes that we need to send between calls. |
| @id                     		| 1  		| String| Detail id.	|
| TourActivityInfo/Schedule/Detail/OperationTimes | 0..1 |		| Information when activity starts.		|
| TourActivityInfo/Schedule/Detail/OperationTimes/OperationTime | 0..1 || Information when activity starts and infromation about the seats number.		|
| TourActivityInfo/Schedule/Detail/OperationTimes/OperationTime/Start| 0..1		| Date		| Start date activity.|
| TourActivityInfo/Schedule/Detail/OperationTimes/OperationTime/End| 0..1		| Date		| End date activity.|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| TourActivityInfo/Schedule/Detail/TPA_Extensions | 0..1 |		| Necessary information that we need to send between calls. |
| TourActivityInfo/Locations| 0..1 |		| List of locations for the activity.|
| TourActivityInfo/Locations/Location | 1      	|		| Information of a location.		|
| TourActivityInfo/Locations/Location/Region          		| 1      	|		| Describes regional information.		|
| @RegionCode              		| 1  		| String	| Specifies a region code.			|
| @RegionName              		| 1  		| String	| Specifies the region name.			|
| TourActivityInfo/Locations/Location/Address         		| 0..1    	|		| Identifies the physical address of the tour departure and/or activity location. |
| TourActivityInfo/Locations/Location/Address/AddressLine		| 0..1		| String	| These lines will contain free form address details.|
| TourActivityInfo/Locations/Location/Address/CityName| 0..1		| String	| Contains the city name.|
| TourActivityInfo/Locations/Location/Address/countryCode| 0..1		| String	| Contains the supplier country code.|
| TourActivityInfo/Locations/Location/Address/countryISO| 0..1		| String	| Contains the country code in format ISO ISO 3166-1 alpha-2 |
| TourActivityInfo/Locations/Location/Address/CityName| 0..1		| String	| Contains the city name.|
| TourActivityInfo/Locations/Location/Address/CityName| 0..1		| String	| Contains the city name.|
| TourActivityInfo/Locations/Location/Address/PostalCode		| 0..1		| String	| Post Office Code number.			|
| TourActivityInfo/Locations/Location/Address/County  		| 0..1		| String	| County name.	|		
| TourActivityInfo/Locations/Location/Address/StateProv| 0..1		| String	| Province/stat|
| TourActivityInfo/Locations/Location/Position| 0..1		| | Position of location. 	|
| @Latitude| 1  		| String	| 			|
| @Longitude| 1  		| String	| 			|
| TourActivityInfo/Locations/Location/PositionArea| 0..1 |  | Information of pickup area.|
| TourActivityInfo/Locations/Location/PositionArea/position| 1..n |  | list of position|
| @latitude| 1   		| String| Latitude position.	|
| @longitude| 1   		| String|  Longitude position. |
| TourActivityInfo/Locations/Location/Region | 1      	|		| Describes regional information.		|
| @RegionCode              		| 1  		| String	| Specifies a region code.			|
| @RegionName              		| 1  		| String	| Specifies the region name.			|
| TourActivityInfo/categoryAndTypes | 0..1    	|		| List of categories and types of activities.|
| TourActivityInfo/categoryAndTypes/Category | 0..1    	|		| List of categories and types of activities.|
| TourActivityInfo/CategoryAndType/Category | 0..1    	|		| Category of Ticket.				|
| @Code                    		| 0..1		| String	| A category code from a predefined list, if Extension="Other" then will be provider code. |
| @Extension               		| 0..1		| String	| Enter a category here if you have selected "Other" from the pre-defined list. See table of  eExtensionClassType.|
| TourActivityInfo/CategoryAndType/TypeTags| 0..1    	|		| 	List of types for the activity.	|
| TourActivityInfo/CategoryAndType/TypeTags/TypeTag| 1..n    	|		| 	TypeTag information.	|
| @id| 1  		| String	| Code type.|
| @Name| 1  		| String	| Type name.	|
| TourActivityInfo/ActivityRates| 0..1    	|		| 	List of posible rates for the activity.	|
| TourActivityInfo/ActivityRates/ActivityRate/| 1..n    	|		| 	Information of a rate.|
| @hiddenRate| 1  		| Boolean| 	|
| @isNominative| 1  		| Boolean| 	|
| @name| 1  		| Boolean| Rate name.	|
| @RateID| 1  		| Boolean| Supplier code.	|
| @dateFrom| 0..1  		| Date| Date from which the rate is available.|
| @dateTo| 0..1  		| Date|Date to which the rate is available. |
| @RateCode| 1  		| String| Id to identify the rate of an activity. |
| @release| 0..1  		| Integer| Not in use.  |
| TourActivityInfo/ActivityRates/ActivityRate/CancellationPolicies| 0..1 |		| 	List of cancellation policies information.|
| TourActivityInfo/ActivityRates/ActivityRate/CancellationPolicies/CancellationPolicies| 1..n |		| Infromation of a cancellation policies.	|
| @Amount| 1  		| String| Amount to pay for cancellation.|
| @NoRefundable| 1  		| Boolean| True if the reservation is not refundable.|
| @DateFrom| 1  		| Date| Date from which the cancellation policy applies.|
| @PenaltyType| 1  		| Enum| See table of ePenaltyType.	|
| TourActivityInfo/ActivityRates/ActivityRate/BasicRateInfo| 1 	|		| 	Basic information of the rate.|
| TourActivityInfo/ActivityRates/ActivityRate/BasicRateInfo/Description| 1 	|		| Description of the rate.|
| @longDescription| 1  		| String | The long decription of the rate.	|
| @shortDescription| 1  		| String | The short decription of the rate.	|
| TourActivityInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia| 0..1 |		| Contains multimedia data. |
| TourActivityInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia/MultimediaDescription| 0..1 |		| Contains multimedia data. |
| TourActivityInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia/MultimediaDescription/ImageItems| 0..1 |		| Array of images. |
| TourActivityInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia/MultimediaDescription/ImageItems/ImageItem| 1..n || List of URL to images.|
|TourActivityInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia/MultimediaDescription/ImageItems/ImageItem/ImageFormat| 1..n |		| |
| @URL| 1  | String | url to get an image.	|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants| 1 	|		| 	List of participants.|
| @maxAge| 0..1  | Integer | Maximum age permitted by supplier.	|
| @minAge| 0..1  | Integer | Minimum age permitted by supplier.	|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory| 0..n 	|		| 	Participant information.|
| @minAge| 0..1  | Integer | Minimum age permitted for this paxType.	|
| @maxAge| 0..1  | Integer | Maximum age permitted for this paxType.	|
| @age| 0..1  | Integer | Age of participant.	|
| @id| 1  | Integer | To identify the participanttype of this rate.	|
| @isTTOO| 0..1  | Boolean| If true the rate is for TourOperator.	|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/QualifierInfo| 1 	|		| Indicate the type of participant.|
| @age| 0..1  | String| Has to be informed if text=other	|
| @text| 1  | Enum| See table of eQualifierInfo	|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/Conditions| 0..1 	|		| List of special conditions of pax to this rate.|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/Conditions/Conditions| 0..1n	|		| Conditions type.|
| @type| 1  | Enum| See table of eConditionType	|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/Price| 0..1 	|		| Information about the price of this participant type.|
| @Amount| 1  | Decimal| Amount of the participant type for this rate.	|
| @Commission| 1  | Decimal| Commission applied to the amount. Format Percentage(%)	|
| @CurrencyCode| 1  | String| Indicated the currency code of the Amount, Format ISO-4217	|
| @IsBinding| 0..1  | Boolean| If true the rate has to be sold with the amount indicated.|
| @referencePriceAmount| 0..1  | Decimal| A supplier can send the price which should be sold to be competitive. |
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions| 0..1 	|		|Additional information need between calls. |
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Attributes | 0..1 |	| Attributes that we need to send between calls.	|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Attributes/Attribute | 0..n || Attributes that we need to send between calls.|
| @key| 1  		| string| 		|
| @value| 1  		| string| 		|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Confirmation| 0..n || Locator confirmation. Not used in Availability.|
| @id| 1  		| string| 		|
| @type| 1  		| Enum| 	See table of eLocatorType.	|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/DynamicToken | 0..1 || |
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Issue| 0..1 || Information about ticket.|
| @Mandatory| 1  		| Boolean| |
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Issue/Tickets| 0..1 || List of tickets id.|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Issue/Tickets/ticket| 1..n || ticket information.|
| @idTicket| 1  		| String| 		|
| @url| 1  		| string| 		|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat | 0..1 |		| Information about seat. |
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/urlSitting | 0..1 |		| url to choose the seat.|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/Area | 0..1 |		| Seat area information.|
| @id| 1  		| String| 		|
| @description| 0..1  		| String| 		|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/Sector| 0..1 |		| Seat sector information.|
| @id| 1  		| String| 		|
| @description| 0..1  		| String| 		|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/Level| 0..1 |		| Seat level information.|
| @id| 1  		| String| 		|
| @description| 0..1  		| String| 		|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/Zone| 0..1 |		| Seat zone information.|
| @id| 1  		| String| 		|
| @description| 0..1  		| String| 		|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| TourActivityInfo/ActivityRates/ActivityRate/Summary| 1 	|		| 	Summary of this rate.|
| @Amount| 1  | Decimal| Total Amount of this rate.	|
| @Commission| 1  | Decimal| Commission applied to the amount. Format Percentage(%)	|
| @CurrencyCode| 1  | String| Indicated the currency code of the Amount, Format ISO-4217	|
| @IsBinding| 0..1  | Boolean| If true the rate has to be sold with the amount indicated.|
| @referencePriceAmount| 0..1  | Decimal| A supplier can send the price which should be sold to be competitive. |
| @isTTOO| 0..1  | Boolean| If true the rate is for TourOperator.	|
| TourActivityInfo/ActivityRates/ActivityRate/Summary/PricingType| 1 |	| 	Indicates the pricing type.|
| @text| 1  | Enum| See table of ePricingType.	|
| @Extension| 1  | Enum| used if text is Other. See table eExtensionPricingType.	|
| TourActivityInfo/ActivityRates/ActivityRate/Summary/TaxAmounts| 0..1 |	| Taxes included in Amount.|
| TourActivityInfo/ActivityRates/ActivityRate/Summary/TaxAmounts/TaxAmount| 1 |	| Tax information.|
| @Description| 0..1  | String| Description tax	|
| @Percentage| 0..1  | String| Percentage from the amount.	|
| @Total| 0..1  | String| Amount tax.	|
| TourActivityInfo/ActivityRates/ActivityRate/Summary/ValidCountries| 0..1 |	| List of valid countries for this rate.|
| TourActivityInfo/ActivityRates/ActivityRate/Summary/ValidCountries/ValidCountry| 1..n |	| Information of the country. |
| @Name| 1  | String| The Name of the country.	|
| @Code| 1  | String| Country code in format **3166-1 alpha-2**	|
| TourActivityInfo/Options| 1 |	| List of possible options for this activity. Combine a rate, a location and a group of dates. |
| TourActivityInfo/Options/Option| 1 |	| Information of an option.|
| @refActivityRate| 1  | String| reference of the rate (rate Code)|
| @refDetail| 1  | String| reference of the dates (Detail id)	|
| @refLocation| 1  | String|reference of a location (location id) 	|
| TourActivityInfo/Options/Option/Promotions| 1 |	| List of included in rate.|
| TourActivityInfo/Options/Option/Promotions/Promotion| 1 |	| |
| @code| 1  | String|modality code of supplier.|
| TourActivityInfo/Options/Option/Promotions/Promotion/Description| 1 |String	| Short description|

### Types tables

#### eConditionType 

Indicates the condition that the person must meet.

| **Type** 	| **Description** |
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
| ---------| --------------- | 
| Internal | Our supplier code. |
| External | Code returned by supplier. |

#### eLocatorType 
Indicates which type of locator is sent.

| **Type** | **Description** |
| ---------| --------------- | 
| Client | locator get in our request. |
| Provider | locator send by the supplier |
| Ticket | locator for specific ticket |
| Other | Other type of locator. |

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

#### ePenaltyType 

Indicates the type of a policy penalty.

| **Type** | **Description** |
| ---------| --------------- | 
| PERCENTUAL | Indicates from the total Amount of the reservation. |
| PER_DAY |Not used. |
| TOTAL_AMONT | Amount to pay. |

#### eQualifierInfo 

Indicates the type of a Participant. The range of what is considered an adult, children, infant, etc is particular to each supplier.

| **Type** | **Description** |
| ---------| --------------- | 
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
