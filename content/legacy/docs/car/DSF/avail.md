---
title: Availability
keywords: transfers, data structure, availability
search: Car - Data Structure - Availability
sidebar: mydoc_sidebar
permalink: /docs/car/DSF/avail
---



### Method Goals


This method aims to return all the available options for a given date
and offices.



### Remarks


This method **must** be called **before** the OTA VehRateRule method.



### OTA VehAvailRateRQ Example



~~~xml
    <OTA_VehAvailRateRQ>
        <timeoutMilliseconds>60000</timeoutMilliseconds>
      <filterAuditData>
        <registerTransactions>true</registerTransactions>
      </filterAuditData>
      <Configuration ProviderCode="AVI">
        <Credentials user="testuser" password="testpass">
          <genericURL>https://testURL</genericURL>
          <identificationURL xsi:nil="true" />
          <availRateURL xsi:nil="true" />
          <rateRuleURL xsi:nil="true" />
          <vehResURL xsi:nil="true" />
          <specificURLs xsi:nil="true" />
        </Credentials>
        <Attributes>
          <Attribute key="RateCategory" value="2" />
        </Attributes>
      </Configuration>
      <ClientConfiguration agency="testAgency" SellCurrency="EUR" />
      <POS>
        <Source ISOCountry="ESP">
          <RequestorID Type="LAN" ID="es" />
        </Source>
      </POS>
      <VehAvailRQCore>
        <VehRentalCore PickUpDateTime="2014-04-07T12:00:00" ReturnDateTime="2014-04-14T12:00:00">
          <PickUpLocation LocationCode="SXF" CodeContext="IATA" />
          <ReturnLocation LocationCode="SXF" CodeContext="IATA" />
        </VehRentalCore>
        <DriverType Age="30" />
      </VehAvailRQCore>
      <VehAvailRQInfo>
        <Customer>
          <Primary>
            <CitizenCountryName Code="ES" />
          </Primary>
        </Customer>
      </VehAvailRQInfo>
    </OTA_VehAvailRateRQ>
~~~


### OTA VehAvailRateRQ Description


The availability request is very straight forward. It only requires the
offices (airport ISO code, office code or city code), the required dates
and a few other optional filters.



| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_VehAvailRateRQ			| 1         	|		| Root Node.					|
| OTA_VehAvailRateRQ/Configuration	| 1 		| ConfiguracionProveedor | Configuration needed to send the transaction to racionP the provider.  |
| OTA_VehAvailRateRQ/ClientConfiguration | 1		| ConfiguracionCliente | Client configuration information. 	|
| OTA_VehAvailRateRQ/POS		| 1 		| Pos    	| Contains information of the Point Of Sale.	|
| OTA_VehAvailRateRQ/Pos/Source		| 1..n		| List of SourceOTA | Contains a list of SourceOTA.		|
| OTA_VehAvailRateRQ/Pos/Source/SourceOTA | 1 		| SourceOTA	| This object has information on the market to which the search belongs. |
| @OTA_VehAvailRateRQ/Pos/Source/SourceOTA/ISOCountry | 1 | String	| ISO code of the country of the requestor.	|
| OTA_VehAvailRateRQ/Pos/Source/SourceOTA/RequestorID | 1 | List of RequestorID | An identifier of the entity making the request. Currently not used. |
| OTA_VehAvailRateRQ/VehAvailRQCore	| 1 		| VehAvailRQCore | Contains the dates, locations and preferences for the availability search. |
| OTA_VehAvailRateRQ/VehAvailRQCore/VehRentalCore | 1 	| VehRentalCore | Contains the dates and locations of the rental. |
| OTA_VehAvailRateRQ/VehAvailRQCore/PickupLocation | 1 	| Location	| Location object that represents where the customer is going to pick up the car. |
| @Location/locationCode		| 1 		| String 	| Code that represents the location of the search. |
| @Location/CodeContext			| 1 		| eLocationCodeContextType | Indicates the type of code. The possible values are IATA, OFFICE and CITY. |
| OTA_VehAvailRateRQ/VehAvailRQCore/ReturnLocation | 1 	| Location	| Location object that represents where the customer is going to return the car. |
| OTA_VehAvailRateRQ/VehAvailRQCore/PickUpDateTime | 1 	| DateTime	| Indicates the date the customer wants to pick up the car. |
| OTA_VehAvailRateRQ/VehAvailRQCore/ReturnDateTime | 1 	| DateTime	| Indicates the date the customer wants to return the car. |
| OTA_VehAvailRateRQ/VendorPrefs	| 1 		| VendorPrefs	| Contains a list of VendorPref. A VendorPref is the vendor specific code used to identify a special rate associated with a specific organization. Used when multiple vendors have been requested and there is a different code for each. |
| OTA_VehAvailRateRQ/VendorPrefs/VendorPref | 1 	| List of VendorPref | List of VendorPref.			|
| @VendorPref/CorpDiscountNmbr 		| 1 		| String 	| This is the vendor specific code used to identify a special rate associated with a specific organization. Used when multiple vendors have been requested and there is a different code for each. |
| OTA_VehAvailRateRQ/VehPrefs		| 1 		| VehPrefs	| Contains a list of VehiclePref. A vehiclePref has information related to the vehicle model. |
| OTA_VehAvailRateRQ/VehPrefs/VehPref	| 1 		| List Of VehiclePref | List of VehiclePref.			|
| VehiclePref/VehMakeModel		| 1 		| VehicleMakeModelGroup | Information related to the car model. |
| @VehiclePref/VehMakeModel/name	| 1 		| String	|  Name of the vehicle model in the provider's system. |
| @VehiclePref/VehMakeModel/Code	| 1 		| String 	| Código en formato SIPP.			|
| @VehiclePref/VendorCarType		| 1 		| String 	| The provider's code for the vehicle.		|
| @VehiclePref/AirConditionInd		| 1 		| String 	| Indicates if the vehicle has air condition. Possible values are "true" or "false". |
| @VehiclePref/TransmissionType		| 1 		| String 	| Indicates the transmission type of the vehicle.  |
| VehiclePref/VehType			| 1 		| VehicleTypeGroup | Specifies the vehicle category and the number of doors. |
| VehicleTypeGroup/VehicleCategory	| 1 		| String 	| Indicates the category of the vehicle.  	|
| VehicleTypeGroup/doorCount		| 1 		| String 	| Indicates the number of doors of the vehicle. |
| VehiclePref/VehClass			| 1 		| VehicleClassGroup | Contains the size of the vehicle.     	|
| @VehicleClassGroup/Size		| 1 		| String 	| Size of the vehicle.  			|
| OTA_VehAvailRateRQ/VehAvailRQCore/DirverType | 1 	| DriverType	| Contains information related to the driver.   |
| @DriverType/Age			| 1 		| String 	| Indicates the age of the driver.  		|
| OTA_VehAvailRateRQ/VehAvailRQInfo	| 1 		| VehicleAvailRQAdditionalInfoType | Contains the information related to the customer. |
| OTA_VehAvailRateRQ/VehAvailRQInfo/Customer | 1 	| CustomerPrimaryAdditional | Contains the information related to the customer. |
| OTA_VehAvailRateRQ/VehAvailRQInfo/Customer/Primary | 1 | Primary	| Contains the information related to the customer. |
| Primary/PersonName			| 1 		| PersonName	|Contains the name of the customer.   		|
| PersonName/GivenName			| 1 		| String 	| Name of the customer.				|
| PersonName/Surname			| 1 		| String 	| Surname of the customer.      		|
| Primary/Telephone			| 1 		| List of Telephone | Contains the info of the customer's telephone. |
| @Telephone/PhoneTechType		| 1 		| ePhoneTechnologyType | Type of technology used by the phone. Possible values: VOICE, DATA, FAX, PAGER, MOBILE, TTY, TELEX, VOICEOVERIP. |
| @Telephone/PhoneNumber		| 1 		| String 	| Number of the phone.				|
| Primary/Email				| 1 		| Email  	| Specifies the email direction of the customer. |
| Primary/Email/Text			| 1 		| String 	| Text that represents the email of the customer. |
| Primary/Document 			| 1 		| Document	| Specifies the information of the document that identificates the customer. |
| Document/DocID			| 1 		| String 	| String that contains the DocumentID of the customer. |
| Document/DocType			| 1 		| eDocumentType	| Represents the type of Document sent by the customer. |
| Primary/Address			| 1 		| Address	| Contains the address of the customer.  	|
| Address/AddressLine			| 1 		| List of String | A list that contains 1 or more addresses of the customer. |
| Address/CityName			| 1 		| String 	| The name of the city where the customer lives. |
| Address/PostalCode			| 1 		| String 	| The postal code of the customer's address.    |
| Address/CountryName			| 1 		| CountryName	| This object contains the code of the country of the customer. |
| @CountryName/Code			| 1 		| String 	| The country code in ISO3166 format.  		|
| CountryName/Text			| 1 		| String 	| Name of the country.     			|
| Primary/CitizenCountryName		| 1 		| CitizenCountryNameGroup | The country code of the driver.     |
| @CitizenCountryNameGroup/Code		| 1 		| String 	| The country code of the driver.       	|
| Primary/birthdate			| 1 		| String 	| Birthdate in ISO 8601 prescribed format (YYYY-MM-DD). |



### OTA VehAvailRateRS Example



~~~xml
    <OTA_VehAvailRateRS xmlns = "" xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance">
        <auditData>
            <transactions>
                <timeStamp>2014-02-24T09:36:27.5336632+00:00</timeStamp>
                <RQ></RQ>
                <RS></RS>
            </transactions>
            <timeStamp>2014-02-24T09:36:27.5336632+00:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <VehAvailRSCore>
            <VehRentalCore PickUpDateTime = "2014-04-07T12:00:00" ReturnDateTime = "2014-04-14T12:00:00">
                <PickUpLocation LocationCode = "SXF" CodeContext = "IATA"/>
                <ReturnLocation LocationCode = "SXF" CodeContext = "IATA"/>
            </VehRentalCore>
            <VehVendorAvails>
                <VehVendorAvail>
                    <VehAvails>
                        <VehAvail>
                            <VehAvailCore Status = "Available">
                                <Vehicle AirConditionInd = "true" TransmissionType = "MANUAL" VendorCarType = "FVMR">
                                    <VehType VehicleCategory = "2" doorCount = "0"/>
                                    <VehClass Size = "8"/>
                                    <VehMakeModel Name = "Group O - Ford Galaxy or similar" Code = "FVMR"/>
                                </Vehicle>
                                <RentalRate>
                                    <RateDistance Unlimited = "true" DistUnitName = "kilometer"/>
                                    <RateQualifier RateCategory = "2" CorpDiscountNmbr = "U617107" RateQualifier = "6Z"/>
                                    <VehicleCharges>
                                        <VehicleCharge Amount = "729.01" CurrencyCode = "EUR" TaxInclusive = "true" IncludedInRate = "true" Purpose = "VEHICLE_RENTAL">
                                            <Description>Minimum 1 Day(s)</Description>
                                        </VehicleCharge>
                                    </VehicleCharges>
                                </RentalRate>
                                <TotalCharge RateTotalAmount = "729.01" CurrencyCode = "EUR"/>
                                <Vendor Code = "Avis"/>
                                <VendorLocation LocationCode = "SXF" CodeContext = "IATA"/>
                                <DropOffLocation LocationCode = "SXF" CodeContext = "IATA"/>
                            </VehAvailCore>
                        </VehAvail>
                        <VehAvail>
                            <VehAvailCore Status = "Available">
                                <Vehicle AirConditionInd = "true" TransmissionType = "MANUAL" VendorCarType = "ECMR">
                                    <VehType VehicleCategory = "1" doorCount = "0"/>
                                    <VehClass Size = "3"/>
                                    <VehMakeModel Name = "Group A - Volkswagen Polo or similar" Code = "ECMR"/>
                                </Vehicle>
                                <RentalRate>
                                    <RateDistance Unlimited = "true" DistUnitName = "kilometre"/>
                                    <RateQualifier RateCategory = "2" CorpDiscountNmbr = "U617107" RateQualifier = "6Z"/>
                                    <VehicleCharges>
                                        <VehicleCharge Amount = "339.98" CurrencyCode = "EUR" TaxInclusive = "true" IncludedInRate = "true" Purpose = "VEHICLE_RENTAL">
                                            <Description>Minimum 1 Day(s)</Description>
                                        </VehicleCharge>
                                    </VehicleCharges>
                                </RentalRate>
                                <TotalCharge RateTotalAmount = "339.98" CurrencyCode = "EUR"/>
                                <Vendor Code = "Avis"/>
                                <VendorLocation LocationCode = "SXF" CodeContext = "IATA"/>
                                <DropOffLocation LocationCode = "SXF" CodeContext = "IATA"/>
                            </VehAvailCore>
                        </VehAvail>
                    </VehAvails>
                </VehVendorAvail>
            </VehVendorAvails>
        </VehAvailRSCore>
    </OTA_VehAvailRateRS>
~~~


### OTA VehAvailRateRS Description


A list of VehAvail (Available vehicles) is returned. Each of this
vehAvails contains the details of the vehicle. The price returned should
be "all inclusive". All fares, taxes and discounts are already included
in the total price.



| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_VehAvailRateRS			| 1  		|		| Root Node.      				|
| OTA_VehAvailRateRS/VehAvailRSCore	| 1 		| VehAvailRSCore | Contains the received options of the availability search. |
| VehAvailRSCore/VehRentalCore		| 1 		| VehRentalCore	| Contains the dates and locations of the rental. |
| VehAvailRSCore/VehVendorAvails	| 1 		| VehVendorAvails | Contains a List of VehAvail. Each vehAvail is a vehicle rental option. |
| VehAvailRSCore/VehVendorAvails/VehVendorAvail | 1 	| VehVendorAvail | List of VehAvail. Each vehAvail is a vehicle rental option. |
| VehAvailRSCore/VehVendorAvails/VehVendorAvail/VehAvails | 1 | List of VehAvail | List of VehAvail. Each vehAvail is a vehicle rental option. |
| VehAvailRSCore/VehVendorAvails/VehVendorAvail/VehAvails/VehAvail | 1..n | VehAvail | This is a rental option.		|
| VehAvail/VehAvailCore			| 1 		| VehAvailCore	| Core of the option. It contains all the information related to the vehicle, cost and included equipments. |
| VehAvail/VehAvailCore/Status		| 1 		| eInventoryStatus | Status of the option. It's possible values are Available, OnRequest and All. |
| VehAvail/VehAvaiCore/Vehicle		| 1 		| Vehicle  	| Includes information about the vehicle model.	|
| Vehicle/AirConditionInd		| 1 		| String   	| Indicates if the vehicle has air condition. Possible values are "true" or "false". |
| Vehicle/TransmissionType		| 1 		| eVehicleTransmissionType | Indicates the transmission type of the vehicle. |
| Vehicle/VehType  			| 1 		| VehicleTypeGroup | Specifies the vehicle category and the number of doors. |
| Vehicle/VehClass 			| 1 		| VehicleClassGroup | Contains the size of the vehicle.		|
| Vehicle/VehMakeModel			| 1 		| VehicleMakeModelGroup | Contains information related to the vehicle model. |
| Vehicle/PictureURL			| 1 		| String   	| Imagen del vehiculo.				|
| @Vehicle/PassengerQuantity		| 1 		| String   	| Máx number of passengers permitted for this car.		|
| @Vehicle/BaggageQuantity		| 1 		| String   	| Trunk capacity to transport luggage. |
| @Vehicle/VendorCarType		| 1 		| String   	| Code of the vehicle in the provider's format.	|
| VehAvail/VehAvailCore/RentalRate	| 1 		| VehicleRentalRate | Contains information of the allowed distance, the selected rate, and the associated charges. |
| VehicleRentalRate/RateDistance	| 1 		| VehicleRateDistanceGroup | Information about the permitted distance for this rate. 	|
| @VehicleRentalRate/RateDistance/Unlimited | 1 	| Boolean  	| Indicates if the permitted distance is unlimited.	|
| VehicleRentalRate/RateDistance/Quantity | 1 		| String   	| Indicates the quantity of permitted distance.	|
| VehicleRentalRate/RateDistance/DistUnitName | 1 	| eDistanceUnitType | Indicates the unit in which the quantity of distance is represented.	|
| VehicleRentalRate/RateQualifier	| 1 		| RateQualifier	| Information about the rate.		|
| VehicleRentalRate/RateQualifier/RateCategory | 1 	| String   	| OTA Classification Code.		|
| VehicleRentalRate/RateQualifier/CorpDiscountNmbr | 1 	| String   	| This is the vendor specific code used to identify a special rate associated with a specific organization. |
| VehicleRentalRate/RateQualifier/RateQualifier | 1 	| String   	| This is the vendor specific code for rate codes (e.g. WES, 2A, DLY00).	|
| VehicleRentalRate/VehicleCharges	| 1 		| List of VehicleChargePurpose | Charges associated to this rate.	|
| VehicleCharges/VehicleCharge		| 1..n		| VehicleChargePurpose | Charge associated to this rate.	|
| @VehicleChargePurpose/Amount		| 1 		| Decimal  	| Cost of the charge. 		|
| @VehicleChargePurpose/CurrencyCode	| 1 		| String   	| Currency in which the amount is returned.	|
| @VehicleChargePurpose/TaxInclusive	| 1 		| Boolean  	| Indicates if the taxes are already applied to the amount.	|
| @VehicleChargePurpose/IncludedInRate	| 1 		| Boolean  	| Indicates if the amount of this charge has been added to the total cost of the rental.	|
| VehicleChargePurpose/Description	| 1 		| Description	| Text returned by the provider that describes the charge.	|
| Description/Text 			| 1 		| String   	| Descriptive Text.	|
| @VehicleChargePurpose/Purpose		| 1 		| eVehicleChargePurposeType | Indicates the type of the charge.		|
| VehAvail/VehAvailCore/PricedEquips	| 1 		| List of VehicleEquipmentPriced | List of equipments for the vehicle.	|
| VehAvail/VehAvailCore/PricedEquips/PricedEquip | 1..n	| VehicleEquipmentPriced | Equipment for the vehicle.		|
| @VehicleEquipmentPriced/Required	| 1 		| Boolean  	| Indicates if the equipment is required.	|
| VehicleEquipmentPriced/Equipment	| 1 		| VehicleEquipment | The included equipment associated to this VehicleEquipmentPriced.	|
| VehicleEquipment/EquipType		| 1 		| eEquipmentType | Type of the equipment.	|
| VehicleEquipment/Quantity		| 1 		| String   	| Quantity included.		|
| VehicleEquipment/Description		| 1 		| Description	| Description of the equipment. 	|
| VehicleEquipmentPriced/Charge		| 1 		| VehicleChargeType | Charge associated to this VehicleEquipmentPriced.		|
| @VehicleChargeType/Amount		| 1 		| Decimal  	| Cost of the charge.    	|
| @VehicleChargeType/CurrencyCode	| 1 		| String   	| Currency in which the amount is returned.	|
| @VehicleChargeType/TaxInclusive	| 1 		| Boolean  	| Indicates if the taxes are already applied to the amount.	|
| @VehicleChargeType/IncludedInRate	| 1 		| String   	| Indicates if the amount of this charge has been added to the total cost of the rental.	|
| VehicleChargeType/Description		| 1 		| Description	| Text returned by the provider that describes the charge.	|
| VehAvail/VehAvailCore/TotalCharge	| 1 		| VehicleTotalChargeGroup | Total cost of the rental.      |
| @VehicleTotalChargeGroup/RateTotalAmount | 1 		| Decimal  	| Total cost of the rental.	|
| @VehicleTotalChargeGroup/CurrencyCode	| 1 		| String   	| Currency in which the amount is returned. 	|
| VehAvail/VehAvailCore/Fees		| 1 		| List of VehicleChargePurpose | List of fees related to this rental.	|
| VehAvail/VehAvailCore/Fees/Fee	| 1..n		| VehicleChargePurpose | Fee related to this rental.	|
| VehAvail/VehAvailCore/Vendor		| 1 		| CompanyName	| Company that provides this option.	|
| @CompanyName/Code			| 1 		| String   	| Identifies the company that offers the option.	|
| VehAvail/VehAvailCore/VendorLocation	| 1..n 		| List of VendorLocation | Location where the vehicle is picked up.          |
| @VendorLocation/LocationCode		| 1 		| String   	| Code that represents the location of the search.	|
| @VendorLocation/CodeContext		| 1 		| eLocationCodeContextType | Indicates the type of code. The possible values are IATA, OFFICE and CITY.		|
| @VendorLocation/ExtendedLocationCode	| 1 		| String   	| Contains information about the Location where the vehicle will be picked up or returned.	|
| @VendorLocation/Name			| 1 		| String   	| Indicates the name of the location.        |
| VehAvail/VehAvailCore/DropOffLocation	| 1..n		| List of VendorLocation | Location where the vehicle is returned.     |
| VehAvail/VehAvailCore/TPAExtensions	| 1 		| TPAExtensions	| Contains an Atributos object.		|
| VehAvail/VehAvailCore/TPA_Extensions/Atributos | 1 	| Atributos	| List of atributo, This is a Key-Value structure used to configure specific information for each integration or to save certain information for subsequent calls. |
| VehAvail/VehAvailCore/TPA_Extensions/Atributos/Atributo | 1..n | Atributo | This is a Key-Value structure used to configure specific information for each integration or to save certain information for subsequent calls. |
| @Atributo/key    			| 1 		| String   	| Unique key that identifies the value.		|
| @Atributo/value  			| 1 		| String   	| Value of the Atributo.		|

