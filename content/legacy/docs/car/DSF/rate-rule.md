---
title: Pre-Booking (Rate Rule)
keywords: transfers, data structure, pre booking, rate rule
search: Car - Data Structure - Pre-Booking (Rate Rule)
sidebar: mydoc_sidebar
permalink: /docs/car/DSF/rate-rule
---



### Method Goals


This method aims to return the total price of the selected VehAvail
(option). This VehAvail option **must** be selected in the previous step
( OTA VehAvailRate).

This message allows the partners to know the applied conditions on the
chosen car and also shows the breakdown of the applied charges and fees
including the final price.



Remarks Some suppliers do not provide this method. If this is the case
all the info **must** be returned in OTA VehAvailRate and this method
will do a OTA VehAvailRate again filtered by the selected option.



### OTA VehRateRule RQ Example


~~~xml
    <OTA_VehRateRuleRQ xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <timeoutMilliseconds>60000</timeoutMilliseconds>
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
        <Source ISOCountry="ESP">
          <RequestorID Type="LAN" ID="es" />
        </Source>
      </POS>
      <RentalInfo Status="Available">
        <VehRentalCore PickUpDateTime="2014-02-25T09:30:00Z" ReturnDateTime="2014-02-27T17:00:00Z">
          <PickUpLocation LocationCode="71" CodeContext="IATA" />
          <ReturnLocation LocationCode="71" CodeContext="IATA" />
        </VehRentalCore>
        <VehicleInfo AirConditionInd="True" TransmissionType="MANUAL" VendorCarType="EDMR">
          <VehType VehicleCategory="1" doorCount="5" />
          <VehClass Size="3" />
          <VehMakeModel Name="Peugeot 207 or similar" Code="EDMR" />
        </VehicleInfo>
        <RateQualifier RateCategory="3" RateQualifier="PREPAID-IN" />
        <TPA_Extensions>
          <Atributos></Atributos>
        </TPA_Extensions>
      </RentalInfo>
    </OTA_VehRateRuleRQ>
~~~


### OTA VehRateRuleRQ Description


The VehRateRule request requires the following information:

-   Pick up location and return location with its corresponding dates.
-   The selected vehicle information. This refers to the make model, the
    vehicle type, transmission type and also if it has air condition or
    not.
-   The selected rate for the chosen option.

 
  
| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| OTA_VehRateRuleRQ				| 1             |		| Root Node.           					|
| OTA_VehRateRuleRQ/POS 			| 1   		| Pos      	| Contains information of the Point Of Sale.     	|
| OTA_VehRateRuleRQ/RentalInfo			| 1   		| RentalInfo	| Contains the info related to the rental.			|
| RentalInfo/VehRentalCore			| 1   		| VehRentalCore	| Contains the dates and locations of the rental.		|
| RentalInfo/VehicleInfo			| 1   		| VehiclePref	| Contains a list of VehiclePref. A vehiclePref has information related to the vehicle model.	|
| RentalInfo/RateQualifier			| 1   		| RateQualifier	| This is the vendor specific code for rate codes (e.g. WES, 2A, DLY00).	|
| RentalInfo/TPAExtensions			| 1   		| TPAExtensions	| Contains an Atributos object.					|
| RentalInfo/Status				| 1   		| eInventoryStatus | Status of the option. It's possible values are Available, OnRequest and All.	|



### OTA VehRateRuleRS Example



~~~xml
    <?xml version="1.0"?>
    <OTA_VehRateRuleRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <auditData>
        <timeStamp>0001-01-01T00:00:00</timeStamp>
        <processTimeMilliseconds>0</processTimeMilliseconds>
      </auditData>
      <operationImplemented>true</operationImplemented>
      <VehRentalCore PickUpDateTime="2014-02-25T09:30:00Z" ReturnDateTime="2014-02-27T17:00:00Z">
        <PickUpLocation LocationCode="71" CodeContext="IATA" />
        <ReturnLocation LocationCode="71" CodeContext="IATA" />
      </VehRentalCore>
      <Vehicle AirConditionInd="True" TransmissionType="MANUAL" PassengerQuantity="5" BaggageQuantity="3" VendorCarType="EDMR">
        <VehType VehicleCategory="1" doorCount="5" />
        <VehClass Size="3" />
        <VehMakeModel Name="Peugeot 207 or similar" Code="EDMR" />
        <PictureURL>https://cdn.cartrawler.com/otaimages/peugeot/207_nologo.jpg</PictureURL>
      </Vehicle>
      <RentalRate Status="All">
        <RateDistance Unlimited="true" DistUnitName="kilometer" />
        <RateQualifier RateCategory="3" RateQualifier="PREPAID-IN" />
        <VehicleCharges>
          <VehicleCharge Amount="0" CurrencyCode="EUR" TaxInclusive="true" IncludedInRate="true" Purpose="ADJUSTMENT">
            <Description>Breakdown assistance</Description>
          </VehicleCharge>
          <VehicleCharge Amount="0" CurrencyCode="EUR" TaxInclusive="true" IncludedInRate="true" Purpose="ADJUSTMENT">
            <Description>Airport fee</Description>
          </VehicleCharge>
          <VehicleCharge Amount="0" CurrencyCode="EUR" TaxInclusive="true" IncludedInRate="true" Purpose="ADJUSTMENT">
            <Description>Road tax</Description>
          </VehicleCharge>
          <VehicleCharge Amount="5.54" CurrencyCode="EUR" TaxInclusive="true" IncludedInRate="false" Purpose="ADJUSTMENT">
            <Description>Tolls</Description>
          </VehicleCharge>
          <VehicleCharge Amount="0" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="true" Purpose="ADJUSTMENT">
            <Description>Tax</Description>
          </VehicleCharge>
          <VehicleCharge Amount="0" CurrencyCode="EUR" TaxInclusive="true" IncludedInRate="true" Purpose="ADJUSTMENT">
            <Description>Unlimited mileage</Description>
          </VehicleCharge>
          <VehicleCharge Amount="36.96" CurrencyCode="EUR" TaxInclusive="true" IncludedInRate="true" Purpose="VEHICLE_RENTAL">
            <Description>Importe Alquiler</Description>
          </VehicleCharge>
        </VehicleCharges>
      </RentalRate>
      <TotalCharge RateTotalAmount="36.96" CurrencyCode="EUR" />
      <PricedEquips>
        <PricedEquip Required="false">
          <Equipment EquipType="OTHER">
            <Description>Booster seat</Description>
          </Equipment>
          <Charge Amount="15.00" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="false">
            <Description />
          </Charge>
        </PricedEquip>
        <PricedEquip Required="false">
          <Equipment EquipType="OTHER">
            <Description>Child toddler seat</Description>
          </Equipment>
          <Charge Amount="25.50" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="false">
            <Description />
          </Charge>
        </PricedEquip>
        <PricedEquip Required="false">
          <Equipment EquipType="OTHER">
            <Description>Infant child seat</Description>
          </Equipment>
          <Charge Amount="24.00" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="false">
            <Description />
          </Charge>
        </PricedEquip>
        <PricedEquip Required="false">
          <Equipment EquipType="OTHER">
            <Description>GPS - Satellite Navigational System</Description>
          </Equipment>
          <Charge Amount="18.00" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="false">
            <Description />
          </Charge>
        </PricedEquip>
        <PricedEquip Required="false">
          <Equipment EquipType="OTHER">
            <Description>Toll payment tag/pass</Description>
          </Equipment>
          <Charge Amount="4.50" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="false">
            <Description />
          </Charge>
        </PricedEquip>
        <PricedEquip Required="false">
          <Equipment EquipType="OTHER">
            <Description>Additional Driver</Description>
          </Equipment>
          <Charge Amount="13.50" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="false">
            <Description />
          </Charge>
        </PricedEquip>
      </PricedEquips>
      <Fees>
        <Fee Amount="36.96" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="false" Purpose="PREPAY_AMOUNT">
          <Description />
        </Fee>
        <Fee Amount="0.00" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="false" Purpose="PAY_ON_ARRIVAL_AMOUNT">
          <Description />
        </Fee>
        <Fee Amount="0.00" CurrencyCode="EUR" TaxInclusive="false" IncludedInRate="false" Purpose="FEE">
          <Description />
        </Fee>
      </Fees>
      <PricedCoverages>
        <PricedCoverage>
          <Coverage CoverageType="6" Code="Collision damage waiver (CDW)">
            <Details>Collision damage waiver (CDW)</Details>
          </Coverage>
          <Charge Amount="0" CurrencyCode="ISOCurrency" TaxInclusive="false" IncludedInRate="true">
            <Description>Collision damage waiver (CDW)</Description>
          </Charge>
        </PricedCoverage>
        <PricedCoverage>
          <Coverage CoverageType="47" Code="Theft waiver (TW)">
            <Details>Theft waiver (TW)</Details>
          </Coverage>
          <Charge Amount="0" CurrencyCode="ISOCurrency" TaxInclusive="false" IncludedInRate="true">
            <Description>Theft waiver (TW)</Description>
          </Charge>
        </PricedCoverage>
        <PricedCoverage>
          <Coverage CoverageType="50" Code="Third party liability protection (TP)">
            <Details>Third party liability protection (TP)</Details>
          </Coverage>
          <Charge Amount="0" CurrencyCode="ISOCurrency" TaxInclusive="true" IncludedInRate="true">
            <Description>Third party liability protection (TP)</Description>
          </Charge>
        </PricedCoverage>
      </PricedCoverages>
      <VendorMessages />
      <TPA_Extensions>
        <Atributos></Atributos>
      </TPA_Extensions>
    </OTA_VehRateRuleRS>
~~~


### OTA VehRateRuleRS Description


The returned XML is similar to the result of the OTA VehAvailRate call.
The main difference is that only one option is returned (the selected
one). The total price is definitive. Sometimes this method will fail
since the selected option at OTA VehAvailRate time will not be available
in this stage. In this case the integration returns an error code 204
(ERROR NO RESULTS)( link missing ).


 
| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| OTA_VehRateRuleRS     			| 1             |   		| Root Node.						|
| OTA_VehRateRuleRS /VehRentalCore		| 1  		| VehRentalCore	| Contains the dates and locations of the rental.			|
| OTA_VehRateRuleRS /Vehicle			| 1  		| Vehicle      	| Includes information about the vehicle model.				|
| OTAVeh*RateRuleRS* /RentalRate			| 1  	| OTAVehRate RuleRS_ VehicleRental Rate | Contains information of the allowed distance, the selected rate, and the associated charges. 	|
| @OTAVeh*RateRuleRS* VehicleRentalRate/Status	| 1  		| eInventoryStatus | Status of the option. It's possible values are Available, OnRequest and All.	|
| OTAVeh*RateRuleRS* VehicleRentalRate /RateDistance | 1  	| VehicleRate DistanceGroup | Information about the permitted distance for this rate.	|
| OTAVeh*RateRuleRS* VehicleRentalRate /RateQualifier | 1  	| RateQualifier	| Information about the rate.		|
| OTAVeh*RateRuleRS* VehicleRentalRate /VehicleCharges | 1  	| List of VehicleCharge Purpose | Charges associated to this rate.	|
| OTA*VehRateRuleRS* VehicleRentalRate /VehicleCharges/VehicleCharge | 1..n | VehicleCharge Purpose | Charge associated to this rate.	|
| OTA_VehRateRuleRS /TotalCharge			| 1  		| VehicleTotal ChargeGroup | Total cost of the rental.			|
| OTA_VehRateRuleRS /PricedEquips		| 1  		| List of VehicleEquipment Priced | List of equipments for the vehicle.              |
| OTA_VehRateRuleRS /PricedEquips/PricedEquip	| 1..n		| VehicleEquipment Priced | List of equipments for the vehicle.			|
| OTA_VehRateRuleRS/Fees			| 1  		| List of Vehicle ChargePurpose | List of fees related to this rental.		|
| OTA_VehRateRuleRS /Fees/Fee			| 1..n		| VehicleCharge Purpose | Fee related to this rental.      			|
| OTA_VehRateRuleRS /PricedCoverages		| 1  		| PricedCoverages | Contains information of the coverages offered by the provider.	|
| PricedCoverages /PricedCoverage		| 1..n		| PricedCoverage | List that contains the offered accident coverages.		|
| PricedCoverage/Coverage			| 1  		| Coverage 	| Accident coverage offered by the provider.			|
| @Coverage/CoverageType 			| 1  		| String     	| Provider's type of coverage.				|
| @Coverage/Code         			| 1  		| String       	| Provider's code of the coverage.			|
| @Coverage/Details      			| 1  		| Details      	| Details of the coverage returned by the provider.	|
| Details/Text           			| 1  		| String      	| Details.						|
| PricedCoverage/Charge  			| 1  		| VehicleCharge Type | Cost of the coverage.				|
| OTA_VehRateRuleRS /VendorMessages		| 1  		| VendorMessages | Messages received in the provider's response.	|
| OTA_VehRateRuleRS /VendorMessages/VendorMessage | 1..n	| VendorMessage	| List of messages received in the provider's response.		|
| @VendorMessage/InfoType			| 1  		| eInformationType | Indicates the type of information shown in the message.	|
| VendorMessage/Tittle   			| 1  		| String       	| Tittle of the message.			|
| VendorMessage/Language 			| 1  		| eLanguageType	| Indicates the language in which the message is written.	|
| VendorMessage/SubSection			| 1  		| list of Formatted TextSubSection | Contains a list of texts that compound the message.		|
| FormattedText SubSection/SubTitle		| 1  		| String       	| Tittle of the Paragraph.     			|
| FormattedText SubSection/Paragraph		| 1..n		| Paragraph    	| Contains a list of paragraphs that compound the message.		|
| FormattedTextSubSection /Paragraph/ListItem	| 1..n		| FormattedTextText | Contains messages recieved in the providers response and it's format (plain text or HTML).	|
| FormattedTextText /TextFormat			| 1 		| eTextFormat  	| Indicates the format of the text. If it is plain text or HTML.	|
| FormattedTextText /text 			| 1  		| String       	| Contains the text.			|
| OTA*VehRateRuleRS /TPA*Extensions		| 1  		| TPA_Extensions | Contains an Atributos object.		|

