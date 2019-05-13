---
title: Booking
keywords: transfers, data structure, booking
search: Car - Data Structure - Booking
sidebar: mydoc_sidebar
permalink: /docs/car/DSF/reservation
---



### Method Goals


This method aims to book the selected vehicle.



### Remarks




### OTA VehResRQ Example



~~~xml
    <OTA_VehResRQ>
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
            <Source ISOCountry = "ESP">
                <RequestorID Type = "LAN" ID = "es"/>
            </Source>
        </POS>
        <VehResRQCore Status = "Available">
            <VehRentalCore PickUpDateTime = "2012-11-29T09:30:00" ReturnDateTime = "2012-12-01T17:00:00">
                <PickUpLocation LocationCode = "PMI" CodeContext = "IATA"/>
                <ReturnLocation LocationCode = "PMI" CodeContext = "IATA"/>
            </VehRentalCore>
            <Customer>
                <Primary BirthDate = "17/07/1980 10:39:13">
                    <PersonName>
                        <GivenName>TEST_NOM</GivenName>
                        <Surname>TEST_COG</Surname>
                    </PersonName>
                    <Telephone PhoneTechType = "VOICE" PhoneNumber = "68181"/>
                    <Email>car@xmltravelgate.com</Email>
                    <Document DocID = "12345678M" DocType = "NATIONAL_IDENTITY_DOCUMENT"/>
                </Primary>
            </Customer>
            <VehPref AirConditionInd = "true" TransmissionType = "MANUAL">
                <VehType VehicleCategory = "1" doorCount = "2"/>
                <VehClass Size = "1"/>
                <VehMakeModel Name = "n/a" Code = "MBMR"/>
            </VehPref>
            <RateQualifier RateCategory = "3" RateQualifier = "GN"/>
            <TotalCharge RateTotalAmount = "106.00" CurrencyCode = "EUR"/>
            <UniqueID ID = "Travel123456" Type = "1"/>
        </VehResRQCore>
    </OTA_VehResRQ>
~~~


### OTA VehResRQ Description


The request format works the same way as the OTA VehRateRule request.
The main difference is that in addition to vehicle information, it is
also necessary the customer information.



| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| OTA_VehResRQ					| 1             |		| Root Node.				|
| OTA_VehResRQ/POS				| 1 		| Pos         	| Contains information of the Point Of Sale.		|
| OTA_VehResRQ/VehResRQCore			| 1 		| VehResRQCore	| Includes information about the customer and the rental, such as dates, model, locations.	|
| VehResRQCore/Status				| 1 		| eInventoryStatus | Status of the option. It's possible values are Available, OnRequest and All.  	|
| VehResRQCore/VehRentalCore			| 1 		| VehRentalCore	| Contains the dates and locations of the rental. 	|
| VehResRQCore/Customer				| 1 		| CustomerPrimary Additional | Information of the customer.		|
| VehResRQCore/VendorPref			| 1 		| CompanyNamePref | Name of the rental company. 			|
| VehResRQCore/VendorPref/Code			| 1 		|		| Identifies the company that offers the option.  	|
| VehResRQCore/VehPref				| 1 		| VehiclePref 	| Information of the rented car.			|
| VehResRQCore/DriverType			| 1 		| DriverType  	| Indicates the age of the driver.			|
| DriverType/Age				| 1 		| Integer     	| The age of the driver.      				|
| VehResRQCore/RateQualifier			| 1 		| RateQualifier	| Information about the selected rate.			|
| VehResRQCore/TotalCharge			| 1 		| VehicleTotal ChargeGroup | Indicates the total cost of the rental.  	|
| VehResRQCore/UniqueID				| 1 		| UniqueID    	| It has the UniqueID that identifies the reservation for the provider to cancel it.	|
| @UniqueID/ID					| 1 		| String      	| ID of the locator that identifies the booking. 	|
| @UniqueID/Type				| 1 		| eUniqueIdType	| Type of locator. It's possible values are CUSTOMER (if sent from a customer agency), CORPORATIONREPRESENTATIVE (if sent by a third party company), COMPANY (if sent by the provider company). 	|
| VehResRQCore/TPAExtensions			| 1 		| TPAExtensions	| Contains an Atributos object.          	|
| OTA_VehResRQ/VehResRQInfo			| 1 		| VehResRQInfo	| Contains information about the credit card. It's only mandatory when a credit card payment is needed.  	|
| VehResRQInfo/ArrivalDetails			| 1 		| ArrivalDetails | Currently unused.			|
| VehResRQInfo/RentalPaymentPref		| 1 		| RentalPaymentPref | Contains information needed if a card is required.		|
| RentalPaymentPref/PaymentCard 		| 1 		| PaymentCard 	| Contains the information of the card for the payment.		|
| PaymentCard/CardType				| 1 		| CardType    	| Indicates the type of card. It represents if the card is Credit, Debit of a Central bill.	|
| PaymentCard/CardCode				| 1 		| String      	| Card code in the provider's format. Example: "VI" for Visa.	|
| PaymentCard/CardNumber			| 1 		| String      	| The number that identifies the card.		|
| PaymentCard/ExpireDate			| 1 		| String      	| The month and year of expiration of the card in mmYY format.		|
| PaymentCard/CardHolderName			| 1 		| The name that appears on the card | Indicates the owner of the reservation.		|



### OTA VehResRS Example



~~~xml
    <OTA_VehResRS> 
        <auditData>
            <transactions>
                <timeStamp>2013-06-12T13:30:51.6688071+02:00</timeStamp>
                <processTimeMilliseconds>0</processTimeMilliseconds>
            </transactions>
            <timeStamp>2013-06-12T13:30:47.5856234+02:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <VehResRSCore>
            <VehReservation ReservationStatus = "RESERVED">
                <VehSegmentCore>
                    <ConfID ID = "ES289589400" Type = "4"/>
                    <Vendor Code = "84"/>
                    <Vehicle AirConditionInd = "True" TransmissionType = "MANUAL" PassengerQuantity = "5" BaggageQuantity = "3" VendorCarType = "ECMR">
                        <VehType VehicleCategory = "1" doorCount = "2/4"/>
                        <VehClass Size = "3"/>
                        <VehMakeModel Name = "Peugeot 207 or similar" Code = "ECMR"/>
                        <PictureURL>https://cdn.cartrawler.com/otaimages/peugeot/207_nologo.jpeg</PictureURL>
                    </Vehicle>
                    <TotalCharge RateTotalAmount = "66.99" CurrencyCode = "EUR"/>
                </VehSegmentCore>
            </VehReservation>
        </VehResRSCore>
    </OTA_VehResRS>
~~~


### OTA VehResRS Description


The result returns a list of ConfID (booking codes). It can be the
supplier's or the one sent in the request. It also returns all the
charges associated to the booking.


 
| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| OTA_VehResRS					| 1         	|		| Root Node.					|
| OTA_VehResRS/vehResRSCore			| 1 		| VehResRSCore	| Contains the information of the reservation.          |
| VehResRSCore/VehReservation			| 1 		| VehicleReservation | Contains information about the reservation.	|
| VehicleReservation/VehSegmentCore		| 1 		| VehSegmentCore | Contains the confID that identifies the booking, the selected vehicle and the total charge.	|
| VehicleSegmentCore/ConfID			| 1 		| List of ConfID | Contains the confID that identifies the booking, the selected vehicle and the total charge.	|
| @ConfID/ID  					| 1  		| String 	| ID of the locator that identifies the booking.	|
| @ConfID/Type					| 1 		| eUniqueType	| Type of locator. It's possible values are CUSTOMER (if sent from a customer agency), CORPORATIONREPRESENTATIVE (if sent by a third party company), COMPANY (if sent by the provider company). 	|
| VehicleSegmentCore/Vendor			| 1 		| CompanyName	| Indicates the Company that rents the car.	|
| VehicleSegmentCore/Vehicle			| 1 		| Vehicle	| Contains information about the vehicle.  	|
| VehicleSegmentCore/VehicleTotalChargeGroup	| 1 		| VehicleTotal ChargeGroup | Indicates the total charge of the rental returned by the provider.	|
| VehicleReservation/ReservationStatus		| 1 		| eTransaction StatusType | Indicates the status of the reservation.	|
       

