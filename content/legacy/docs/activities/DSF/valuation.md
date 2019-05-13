---
title: Valuation
keywords: activities, data structure, valuation
search: Activities - Data Structure - Valuation
sidebar: mydoc_sidebar
permalink: /docs/activities/DSF/valuation
---



### ValuationRQ Example

~~~xml
   <OTA_TourActivityBookRQ xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" PrimaryLangID="es">
  <BookingInfo>
    <BasicInfo Name="Caldea - Centro Termolúdico" TourActivityID="E-D01-CALDEA"/>
    <Location LocationId="0">
      <Position Latitude="42.511595" Longitude="1.537232"/>
      <Address>
        <AddressLine>Parc de la Mola, 10</AddressLine>
        <CityName>ESCALDES</CityName>
        <County>Andorra</County>
      </Address>
    </Location>
    <Schedule StartPeriod="2018-08-21T00:00:00" EndPeriod="2018-08-22T00:00:00">
      <Detail id="0">
        <OperationTimes>
          <OperationTime Start="2018-08-21T00:00:00" End="2018-08-21T00:00:00"/>
        </OperationTimes>
        <TPA_Extensions>
          <Attributes>
            <Attribute key="ActivityType" value=""/>
            <Attribute key="ActivityRateKey" value="4cibvn26c7f80ro75k5d8fv8dq"/>
            <Attribute key="ModalityName" value="EG00001 Entrada general 3 Horas"/>
            <Attribute key="ModalityCode" value="GENERAL@STANDARD||"/>
          </Attributes>
        </TPA_Extensions>
      </Detail>
    </Schedule>
    <ParticipantInfo refId="0" Condition="Generic">
      <Individual Age="30">
        <NamePrefix>MR</NamePrefix>
      </Individual>
    </ParticipantInfo>
    <ActivityRate RateID="GENERIC" isNominative="false" hiddenRate="false" RateCode="0">
      <Summary Amount="36.50" ReferencePriceAmount="36.50" CurrencyCode="EUR" Commission="0"/>
      <RateParticipants>
        <ParticipantCategory Age="999" minAge="12" refId="0">
          <QualifierInfo>Adult</QualifierInfo>
          <Price Amount="36.50" CurrencyCode="EUR" Commission="0" ReferencePriceAmount="36.50"/>
          <TPA_Extensions>
            <Attributes>
              <Attribute key="ActivityType" value=""/>
              <Attribute key="ActivityRateKey" value="4cibvn26c7f80ro75k5d8fv8dq"/>
              <Attribute key="contractRemarks" value="EG13687 ADULTO -EG13328 (3-4 años)- EG03481(5-8 años) -EG13350 (9-11 años ) - Rogamos se dirija con el bono a la recepción de Caldea. Franja horaria de:10:00 hs a 16.30 hs y de 20:30hs a 21:00hs. Hora de cierre temporada baja: 22 horas y temporada alta: 24 horas. Días de apertura: todos los días excepto el 25/12/2017 y el cierre técnico del 28/05/18 al 08/06/18, donde los clientes serán desviados al Inuu. Por favor no olvide llevar su documento de identidad.&#xA;T. baja: del  01/12/17 al 05/12/17, del  10/12/17 al 22/07/17 y del 03/04/18 al 12/07/18, del 30/07/18 al 05/08/18, del 28/08/18 al 30/11/18 excepto los sábados. &#xA;T.Media : DEL 06/12/17 AL 09/12/17. DEL 08/01/18 AL 23/03/18, DEL 13/07/18 AL 29/07/18.&#xA;T. alta: todos los sábados. Del 23/12/17  al 07/01/18 y del 24/03/1 al 02/04/18 y del 12/08/18 al 20/08/18. Los días 24/12 y 31/12 Caldea abre de las 10 a las 20 hora.&#xA;Recuerda llevar toalla sino ,pueda alquilarla en la recepcion con un coste de 3 €.&#xA; Por razones de seguridad, no se admiten menores de 5 años. Niños de 5 a 11 años, es necesario presentar un documento acreditativo de la edad y deben ir obligatoriamente acompañados por un adulto (es imprescindible un adulto por cada tres niños). Todas las personas con una altura inferior a 1,30 m deberán entrar con flotadores de brazos. Por razones de higiene, no se admiten personas con heridas externas o algún miembro del cuerpo vendado o escayolado. Caldea no se hace responsable de las incidencias ocasionadas por el incumplimiento de las normas o por el uso incorrecto de las instalaciones y servicios. Así mismo, los accidentes producidos por resbalones quedan bajo la responsabilidad del cliente."/>
              <Attribute key="supplierName" value="CEL OBERT, S.L."/>
              <Attribute key="providerName" value="SEMTEE, S.A"/>
            </Attributes>
          </TPA_Extensions>
        </ParticipantCategory>
      </RateParticipants>
    </ActivityRate>
    <Option refDetail="0" refActivityRate="0" refLocation="0">
      <Promotions>
        <Promotion code="GENERAL@STANDARD||" pricePerPax="false">
          <Description>EG00001 Entrada general 3 Horas</Description>
        </Promotion>
      </Promotions>
    </Option>
  </BookingInfo>
</OTA_TourActivityBookRQ>
~~~


### ValuationRQ Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_TourActivityBookRQ 		| 1 		|  			| Root node.|
| @PrimaryLangID      			| 1  		| String	| Language code (ISO 3166-1 alpha-2) format.	|
| BookingInfo         			| 0..1     	|		| Information about specific ticket. 		|
| BookingInfo/BasicInfo			| 1     	|		| If need search by activity provider code.	|
| @Name               			| 0..1		| String	| Name of ticket.				|
| @TourActivityID     			| 0..1		| String	| Code of ticket, mandatory if need search by activity provider code. |
| BookingInfo/Schedule		| 1      	|		| Information about dates range on which you can enjoy the activity. |
| BookingInfo/Schedule/Summary	| 1      	|		| Information dates range that you apply availability. |
| @Start                   		| 1  		| Date		| Start date that you apply availability. 	|
| @End                     		| 1  		| Date		| End date that you apply availability.		|
| BookingInfo/Schedule/Detail	| 1..n    	|		| Information when activity starts and attributes that we need to send between calls. |
| @id                     		| 1  		| String| Detail id.	|
| BookingInfo/Schedule/Detail/OperationTimes | 0..1 |		| Information when activity starts.		|
| BookingInfo/Schedule/Detail/OperationTimes/OperationTime | 0..1 || Information when activity starts and information about the seats number.		|
| BookingInfo/Schedule/Detail/OperationTimes/OperationTime/Start| 0..1		| Date		| Start date activity.|
| BookingInfo/Schedule/Detail/OperationTimes/OperationTime/End| 0..1		| Date		| End date activity.|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| BookingInfo/Schedule/Detail/TPA_Extensions | 0..1 |		| Necessary information that we need to send between calls. |
| BookingInfo/Location | 1      	|		| Information of the location.		|
| BookingInfo/Location/Region          		| 1      	|		| Describes regional information.		|
| @RegionCode              		| 1  		| String	| Specifies a region code.			|
| @RegionName              		| 1  		| String	| Specifies the region name.			|
| BookingInfo/Location/Address         		| 0..1    	|		| Identifies the physical address of the tour departure and/or activity location. |
| BookingInfo/Location/Address/AddressLine		| 0..1		| String	| These lines will contain free form address details.|
| BookingInfo/Location/Address/CityName | 0..1		| String	| Contains the city name.|
| BookingInfo/Location/Address/countryCode | 0..1		| String	| Contains the supplier country code.|
| BookingInfo/Location/Address/countryISO | 0..1		| String	| Contains the country code in format ISO ISO 3166-1 alpha-2 |
| BookingInfo/Location/Address/CityName | 0..1		| String	| Contains the city name.|
| BookingInfo/Location/Address/CityName | 0..1		| String	| Contains the city name.|
| BookingInfo/Location/Address/PostalCode		| 0..1		| String	| Post Office Code number.			|
| BookingInfo/Location/Address/County  		| 0..1		| String	| County name.	|		
| BookingInfo/Location/Address/StateProv | 0..1		| String	| Province/stat|
| BookingInfo/Location/Position | 0..1		|  | Position of location. 	|
| @Latitude | 1  		| String	| 			|
| @Longitude | 1  		| String	| 			|
| BookingInfo/Location/PositionArea| 0..1 |  | Information of pickup area.|
| BookingInfo/Location/PositionArea/position| 1..n |  | list of position|
| @latitude| 1   		| String| Latitude position.	|
| @longitude| 1   		| String|  Longitude position. |
| BookingInfo/Location/Region | 1      	|		| Describes regional information.		|
| @RegionCode              		| 1  		| String	| Specifies a region code.			|
| @RegionName              		| 1  		| String	| Specifies the region name.			|
| BookingInfo/ParticipantCount    			| 0..n      	|		| Information about participant type, specifying age for each participant. |
| @id                			| 0..1 		| Integer	| Age of participant.				|
| @Age                			| 1   		| Integer	| Age of participant.				|
| @Quantity           			| 1   		| Integer	| Number of participant with same age.		|
| @Condition           			| 1   		| Enum | See table of eConditionType		|
| BookingInfo/ActivityRates/ActivityRate/| 1..n    	|		| 	Information of the  rate selected|
| @hiddenRate| 1  		| Boolean| 	|
| @isNominative| 1  		| Boolean| 	|
| @name| 1  		| Boolean| Rate name.	|
| @RateID| 1  		| Boolean| Supplier code.	|
| @dateFrom| 0..1  		| Date| Date from which the rate is available.|
| @dateTo| 0..1  		| Date|Date to which the rate is available. |
| @RateCode| 1  		| String| Id to identify the rate of an activity. |
| @release| 0..1  		| Integer| Not in use.  |
| BookingInfo/ActivityRates/ActivityRate/CancellationPolicies| 0..1 |		| 	List of cancellation policies information.|
| BookingInfo/ActivityRates/ActivityRate/CancellationPolicies/CancellationPolicies| 1..n |		| Information of a cancellation policies.	|
| @Amount| 1  		| String| Amount to pay for cancellation.|
| @NoRefundable| 1  		| Boolean| True if the reservation is not refundable.|
| @DateFrom| 1  		| Date| Date from which the cancellation policy applies.|
| @PenaltyType| 1  		| Enum| See table of ePenaltyType.	|
| BookingInfo/ActivityRates/ActivityRate/BasicRateInfo| 1 	|		| 	Basic information of the rate.|
| BookingInfo/ActivityRates/ActivityRate/BasicRateInfo/Description| 1 	|		| Description of the rate.|
| @longDescription| 1  		| String | The long description of the rate.	|
| @shortDescription| 1  		| String | The short description of the rate.	|
| BookingInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia| 0..1 |		| Contains multimedia data. |
| BookingInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia/MultimediaDescription| 0..1 |		| Contains multimedia data. |
| BookingInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia/MultimediaDescription/ImageItems| 0..1 |		| Array of images. |
| BookingInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia/MultimediaDescription/ImageItems/ImageItem| 1..n |		| List of URL to images.|
| BookingInfo/ActivityRates/ActivityRate/BasicRateInfo/Description/multimedia/MultimediaDescription/ImageItems/ImageItem/ImageFormat| 1..n |		| |
| @URL| 1  | String | url to get an image.	|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants| 1 	|		| 	List of participants.|
| @maxAge| 0..1  | Integer | Maximum age permitted by supplier.	|
| @minAge| 0..1  | Integer | Minimum age permitted by supplier.	|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory| 0..n 	|		| 	Participant information.|
| @minAge| 0..1  | Integer | Minimum age permitted for this paxType.	|
| @maxAge| 0..1  | Integer | Maximum age permitted for this paxType.	|
| @age| 0..1  | Integer | Age of participant.	|
| @id| 1  | Integer | To identify the participanttype of this rate.	|
| @isTTOO| 0..1  | Boolean| If true the rate is for TourOperator.	|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/QualifierInfo| 1 	|		| Indicate the type of participant.|
| @age| 0..1  | String| Has to be informed if text=other	|
| @text| 1  | Enum| See table of eQualifierInfo	|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/Conditions| 0..1 	|		| List of special conditions of pax to this rate.|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/Conditions/Conditions| 0..1n	|		| Conditions type.|
| @type| 1  | Enum| See table of eConditionType	|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/Price| 0..1 	|		| Information about the price of this participant type.|
| @Amount| 1  | Decimal| Amount of the participant type for this rate.	|
| @Commission| 1  | Decimal| Commission applied to the amount. Format Percentage(%)	|
| @CurrencyCode| 1  | String| Indicated the currency code of the Amount, Format ISO-4217	|
| @IsBinding| 0..1  | Boolean| If true the rate has to be sold with the amount indicated.|
| @referencePriceAmount| 0..1  | Decimal| A supplier can send the price which should be sold to be competitive. |
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions| 0..1 	|		|Additional information need between calls. |
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Attributes | 0..1 |	| Attributes that we need to send between calls.	|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Attributes/Attribute | 0..n || Attributes that we need to send between calls.|
| @key| 1  		| string| 		|
| @value| 1  		| string| 		|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Confirmation | 0..n |  | Locator confirmation. Not used in Availability.|
| @id| 1  		| string| 		|
| @type| 1  		| Enum| 	See table of eLocatorType.	|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/DynamicToken | 0..1 |  | |
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Issue| 0..1 |  | Information about ticket.|
| @Mandatory| 1  		| Boolean| |
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Issue/Tickets| 0..1 || List of tickets id.|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Issue/Tickets/ticket| 1..n || ticket information.|
| @idTicket| 1  		| String| 		|
| @url| 1  		| string| 		|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat | 0..1 |		| Information about seat. |
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/urlSitting | 0..1 |		| url to choose the seat.|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/Area | 0..1 |		| Seat area information.|
| @id| 1  		| String| 		|
| @description| 0..1  		| String| 		|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/Sector| 0..1 |		| Seat sector information.|
| @id| 1  		| String| 		|
| @description| 0..1  		| String| 		|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/Level| 0..1 |		| Seat level information.|
| @id| 1  		| String| 		|
| @description| 0..1  		| String| 		|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| BookingInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory/TPA_Extensions/Seat/Zone| 0..1 |		| Seat zone information.|
| @id| 1  		| String| 		|
| @description| 0..1  		| String| 		|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer| 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| BookingInfo/ActivityRates/ActivityRate/Summary| 1 	|		| 	Summary of this rate.|
| @Amount| 1  | Decimal| Total Amount of this rate.	|
| @Commission| 1  | Decimal| Commission applied to the amount. Format Percentage(%)	|
| @CurrencyCode| 1  | String| Indicated the currency code of the Amount, Format ISO-4217	|
| @IsBinding| 0..1  | Boolean| If true the rate has to be sold with the amount indicated.|
| @referencePriceAmount| 0..1  | Decimal| A supplier can send the price which should be sold to be competitive. |
| @isTTOO| 0..1  | Boolean| If true the rate is for TourOperator.	|
| BookingInfo/ActivityRates/ActivityRate/Summary/PricingType| 1 |	| 	Indicates the pricing type.|
| @text| 1  | Enum | See table of ePricingType.	|
| @Extension| 1  | Enum | used if text is Other. See table eExtensionPricingType.	|
| BookingInfo/ActivityRates/ActivityRate/Summary/TaxAmounts| 0..1 |	| Taxes included in Amount.|
| BookingInfo/ActivityRates/ActivityRate/Summary/TaxAmounts/TaxAmount| 1 |	| Tax information.|
| @Description| 0..1  | String| Description tax	|
| @Percentage| 0..1  | String| Percentage from the amount.	|
| @Total| 0..1  | String| Amount tax.	|
| BookingInfo/ActivityRates/ActivityRate/Summary/ValidCountries| 0..1 |	| List of valid countries for this rate.|
| BookingInfo/ActivityRates/ActivityRate/Summary/ValidCountries/ValidCountry| 1..n |	| Information of the country. |
| @Name| 1  | String| The Name of the country.	|
| @Code| 1  | String| Country code in format **3166-1 alpha-2**	|
| BookingInfo/Option| 1 |	| Information of an option.|
| @refActivityRate| 1  | String| reference of the rate (rate Code)|
| @refDetail| 1  | String| reference of the dates (Detail id)	|
| @refLocation| 1  | String|reference of a location (location id) 	|
| BookingInfo/Options/Option/Promotions| 1 |	| List of included in rate.|
| BookingInfo/Options/Option/Promotions/Promotion | 1 |	 |  |
| @code| 1  | String|modality code of supplier. |
| BookingInfo/Options/Option/Promotions/Promotion/Description |  1  |String	| Short description|




### ValuationRS Example



~~~xml
  <OTA_TourActivityBookRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  
  <operationImplemented>true</operationImplemented>
  <ReservationDetails>
    <BasicInfo Name="Caldea - Centro Termolúdico" TourActivityID="E-D01-CALDEA"/>
    <Description>
      <LongDescription>&lt;strong&gt;Experimenta el hielo, el vapor y el agua en nuestras espectaculares instalaciones y siente cómo tu estrés desaparece.&lt;/strong&gt;&lt;br /&gt;
 &lt;br /&gt;&lt;br /&gt;&lt;strong&gt;Destacamos&lt;/strong&gt;&lt;br /&gt;- Siéntete revitalizado y renovado &lt;br /&gt;- Propiedades curativas de aguas ricas en minerales &lt;br /&gt;- Las instalaciones incluyen una laguna exterior, cascadas, jacuzzis y servicio de masajes &lt;br /&gt;&lt;br /&gt;Caldea, en Andorra, es mucho más que un spa. Viaja a las profundidades de un mundo de sensaciones en el Espacio Termolúdico, un nuevo concepto enfocado al placer y la relajación.&lt;br /&gt;
&lt;br /&gt;
Las propiedades curativas de las aguas termales ricas en minerales que brotan de un manantial natural, a una temperatura de 70 °C, se conocen desde hace siglos. Sin embargo, estas instalaciones de última generación abrieron sus puertas por primera vez en 1994.&lt;br /&gt;
&lt;br /&gt;
La entrada general te permitirá disfrutar de todos los servicios del Espacio Termolúdico durante 3 horas. Esta zona, con su inmensa laguna interior (superficie de 600m2) ofrece una amplia gama de actividades, incluyendo todos los tipos de hidromasajes, jacuzzis con cascadas y máscaras de agua vaporizada. Sigue el flujo de la corriente hacia la laguna exterior, con una agradable temperatura de 34° C durante todo el año, y disfruta del calor aun cuando fuera pueda estar nevando. Sentirás cómo el estrés te abandona, dejándote relajado y fresco.&lt;br /&gt;
&lt;br /&gt;
En Caldea también encontrarás dos restaurantes que ofrecen bebidas, aperitivos y platos gourmet, además de una tienda con lo último en ropa de baño exclusiva.&lt;br /&gt;
&lt;br /&gt;
&lt;strong&gt;Duración:&lt;/strong&gt;&lt;br /&gt;
En función del servicio contratado.&lt;br /&gt;
&lt;strong&gt;Hora de inicio o apertura:&lt;/strong&gt;&lt;br /&gt;
10:00 h.&lt;br /&gt;
&lt;strong&gt;Hora final o cierre:&lt;/strong&gt;&lt;br /&gt;
Temporada baja a las 22.00 horas; temporada alta a las 24.00 horas.&lt;br /&gt;&lt;br /&gt;\n&lt;strong&gt;Instrucciones para canjear el bono&lt;/strong&gt;&lt;br /&gt;&lt;u&gt;Tipo de bono&lt;/u&gt;: Impreso&lt;br /&gt;Bono impreso. Imprime y lleva el bono para disfrutar de la actividad.&lt;br /&gt;&lt;br /&gt;&lt;strong&gt;Ubicación&lt;/strong&gt;&lt;br /&gt;&lt;u&gt;Starting point:&lt;/u&gt; &lt;br /&gt;Caldea&lt;br /&gt;&lt;br /&gt;&lt;u&gt;Punto de retorno&lt;/u&gt;: Mismo que el punto de partida\n</LongDescription>
      <Multimedia>
        <MultimediaDescription>
          <ImageItems>
            <ImageItem>
              <ImageFormat>
                <URL>https://media.activitiesbank.com/11041/ENG/S/11041_1.jpg</URL>
              </ImageFormat>
            </ImageItem>
            <ImageItem>
              <ImageFormat>
                <URL>https://media.activitiesbank.com/11041/ENG/XL/11041_1.jpg</URL>
              </ImageFormat>
            </ImageItem>
            <ImageItem>
              <ImageFormat>
                <URL>https://media.activitiesbank.com/11041/ENG/B/11041_1.jpg</URL>
              </ImageFormat>
            </ImageItem>

          </ImageItems>
        </MultimediaDescription>
      </Multimedia>
    </Description>
    <ParticipantInfo refId="0" Condition="Generic">
      <Individual Age="30">
        <NamePrefix>MR</NamePrefix>
      </Individual>
    </ParticipantInfo>
    <Schedule StartPeriod="2018-08-21T00:00:00" EndPeriod="2018-08-22T00:00:00">
      <Detail id="0">
        <OperationTimes>
          <OperationTime Start="2018-08-21T00:00:00" End="2018-08-21T00:00:00"/>
        </OperationTimes>
        <TPA_Extensions>
          <Attributes>
            <Attribute key="ActivityType" value="TICKET"/>
            <Attribute key="ActivityRateKey" value="tmiqn1ojuglu0sdgk994r376ao"/>
          </Attributes>
        </TPA_Extensions>
      </Detail>
    </Schedule>
    <Location>
      <Position Latitude="42.511595" Longitude="1.537232"/>
      <Address>
        <AddressLine>Parc de la Mola, 10</AddressLine>
        <CityName>ESCALDES</CityName>
        <County>Andorra</County>
      </Address>
    </Location>
    <Pricing>
      <Rate RateID="GENERIC" isNominative="false" hiddenRate="false">
        <CancellationPolicies>
          <CancellationPolicies Amount="36.5" DateFrom="2018-08-19T00:00:00Z" PenaltyType="TOTAL_AMOUNT" NoRefundable="false"/>
        </CancellationPolicies>
      </Rate>
      <Summary Amount="36.5" ReferencePriceAmount="36.5" CurrencyCode="EUR" Commission="0"/>
      <ParticipantCategory Age="999" minAge="12" refId="0">
        <QualifierInfo>Adult</QualifierInfo>
        <Price Amount="36.5" CurrencyCode="EUR" Commission="0" ReferencePriceAmount="36.5"/>
        <TPA_Extensions>
          <Attributes>
            <Attribute key="ActivityType" value=""/>
            <Attribute key="ActivityRateKey" value="tmiqn1ojuglu0sdgk994r376ao"/>
          </Attributes>
        </TPA_Extensions>
      </ParticipantCategory>
      <Promotions>
        <Promotion code="GENERAL@STANDARD||" pricePerPax="false">
          <Description>EG00001 Entrada general 3 Horas</Description>
        </Promotion>
      </Promotions>
    </Pricing>
    <SupplierOperator>
      <Name Code="CEL OBERT, S.L." CodeContext="Internal"/>
    </SupplierOperator>
    <SupplierOperator>
      <Name Code="SEMTEE, S.A" CodeContext="External"/>
    </SupplierOperator>
    <TPA_Extensions>
      <Attributes>
        <Attribute key="contractRemarks" value="EG13687 ADULTO -EG13328 (3-4 años)- EG03481(5-8 años) -EG13350 (9-11 años ) - Rogamos se dirija con el bono a la recepción de Caldea. Franja horaria de:10:00 hs a 16.30 hs y de 20:30hs a 21:00hs. Hora de cierre temporada baja: 22 horas y temporada alta: 24 horas. Días de apertura: todos los días excepto el 25/12/2017 y el cierre técnico del 28/05/18 al 08/06/18, donde los clientes serán desviados al Inuu. Por favor no olvide llevar su documento de identidad.&#xA;T. baja: del  01/12/17 al 05/12/17, del  10/12/17 al 22/07/17 y del 03/04/18 al 12/07/18, del 30/07/18 al 05/08/18, del 28/08/18 al 30/11/18 excepto los sábados. &#xA;T.Media : DEL 06/12/17 AL 09/12/17. DEL 08/01/18 AL 23/03/18, DEL 13/07/18 AL 29/07/18.&#xA;T. alta: todos los sábados. Del 23/12/17  al 07/01/18 y del 24/03/1 al 02/04/18 y del 12/08/18 al 20/08/18. Los días 24/12 y 31/12 Caldea abre de las 10 a las 20 hora.&#xA;Recuerda llevar toalla sino ,pueda alquilarla en la recepcion con un coste de 3 €.&#xA; Por razones de seguridad, no se admiten menores de 5 años. Niños de 5 a 11 años, es necesario presentar un documento acreditativo de la edad y deben ir obligatoriamente acompañados por un adulto (es imprescindible un adulto por cada tres niños). Todas las personas con una altura inferior a 1,30 m deberán entrar con flotadores de brazos. Por razones de higiene, no se admiten personas con heridas externas o algún miembro del cuerpo vendado o escayolado. Caldea no se hace responsable de las incidencias ocasionadas por el incumplimiento de las normas o por el uso incorrecto de las instalaciones y servicios. Así mismo, los accidentes producidos por resbalones quedan bajo la responsabilidad del cliente."/>
        <Attribute key="valuationTime" value="2018-06-06T10:34:40.861"/>
      </Attributes>
    </TPA_Extensions>
  </ReservationDetails>
</OTA_TourActivityBookRS>
~~~


### ValuationRS Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_TourActivityBookRS 	| 1 		| 			| Root node. |
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
| ReservationDetails/Pricing/ParticipantCategory/QualifierInfo | 0..1	| String	| Specifies participant type (Adult, Children or Babie). If value = "Other_" then then is mandatory specify Extension provider type. |
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
| @latitude| 1   		| String | Latitude position.	|
| @longitude| 1   		| String |  Longitude position. |
| ReservationDetails/Location/Region | 1      	|		| Describes regional information.		|
| ReservationDetails/Schedule		| 1      	|		| Information about dates range on which you can enjoy the activity. |
| ReservationDetails/Schedule/Summary	| 1      	|		| Information dates range that you apply availability. |
| @Start                   		| 1  		| Date		| Start date that you apply availability. 	|
| @End                     		| 1  		| Date		| End date that you apply availability.		|
| ReservationDetails/Schedule/Detail	| 1..n    	|		| Information when activity starts and attributes that we need to send between calls. |
| @id                     		| 1  		| String| Detail id.	|
| ReservationDetails/Schedule/Detail/OperationTimes | 0..1 |		| Information when activity starts.		|
| ReservationDetails/Schedule/Detail/OperationTimes/OperationTime | 0..1 |  | Information when activity starts and information about the seats number.		|
| ReservationDetails/Schedule/Detail/OperationTimes/OperationTime/Start | 0..1		| Date		| Start date activity.|
| ReservationDetails/Schedule/Detail/OperationTimes/OperationTime/End | 0..1		| Date		| End date activity.|
| @occupiedSeats| 0..1  		| Integer| 		|
| @totalSeats| 0..1  		| Integer | 		|
| @totalSeatsForSale| 0..1  		| Integer| 		|
| ReservationDetails/Schedule/Detail/TPA_Extensions | 0..1 |		| Necessary information that we need to send between calls. |
| TourActivityInfo/SupplierOperator | 0..n | Date |List the suppliers that operates the activity. |
| TourActivityInfo/SupplierOperator/Name | 1 | Date |Basic information of supplier. |
| @Code| 1   		| String|  Supplier code. |
| @CodeContext| 1   		| Enum |  See table of eSupplierOperatorCodeContext. |
| @CompanyShortName| 1   		| String|  Supplier name. |

### Types tables

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
| External | Code returned by supplier. |

#### eExtensionClassType
| **Type** | **Description** |
| --------- | --------------- | 
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
| --------- | --------------- | 
| PERCENTUAL | Indicates from the total Amount of the reservation. |
| PER_DAY |Not used. |
| TOTAL_AMONT | Amount to pay.|

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

