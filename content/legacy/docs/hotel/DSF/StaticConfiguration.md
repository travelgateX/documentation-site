---
title: StaticConfiguration
keywords: hotel, data structure, static configuration, static
search: Hotel - Data Structure - StaticConfiguration
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/StaticConfiguration
---




### Method Goals


This method provides information about the static configuration of the
supplier so that it can be effectively configured.



### Request Format


The request does not require any elements - empty request.



### Response Format


The XML response contains many elements of the supplier's configuration: number of
hotels, number of cities and number of areas available, maximum number of
*roomcandidate*, maximum number of paxes in a *roomcandidate*, release days,
minimum stay, list of languages supported ...



### StaticConfigurationRQ Example


~~~xml
    <StaticConfigurationRQ>
    </StaticConfigurationRQ>
~~~


### StaticConfigurationRQ Description


  
| **Element**			| **Number**	| **Type**	| **Description**	|
| ----------------------------- | ------------- | ------------- | --------------------- |
| StaticConfigurationRQ		| 1          	|		| Root node.		|
                
  

### StaticConfigurationRS Example


~~~xml
    <StaticConfigurationRS>
        <MaxNumberHotels>2000</MaxNumberHotels>
        <MaxNumberCities>1</MaxNumberCities>
        <MaxNumberZones>1</MaxNumberZones>
        <MaxNumberGeoCodes>0</MaxNumberGeoCodes>
        <RequiredRoomList>false</RequiredRoomList>
        <InformCancelPolicies>true</InformCancelPolicies>
        <InformBindingPriceValuation>true</InformBindingPriceValuation>
        <InformBindingPrice>true</InformBindingPrice>
        <InformNRFValuation>true</InformNRFValuation>
        <InformNRFRate>true</InformNRFRate>
        <Inform55Rate>true</Inform55Rate>
        <InformPackageRate>true</InformPackageRate>
        <InformExtraActivity>false</InformExtraActivity>
        <InformForfait>true</InformForfait>
        <RemarksValuation>true</RemarksValuation>
        <MaxNumberRoomCandidates>9</MaxNumberRoomCandidates>
        <MaxPaxInRoomCandidates>9</MaxPaxInRoomCandidates>
        <Release>0</Release>
        <MinimumStay>0</MinimumStay>
        <InformBillingSupplierReservation>false</InformBillingSupplierReservation>
        <ImplementsProvideLocatorReservationRead>true</ImplementsProvideLocatorReservationRead>
        <ImplementsClientLocatorReservationRead>true</ImplementsClientLocatorReservationRead>
        <ImplementsCancel>true</ImplementsCancel>
        <InformPriceReservation>true</InformPriceReservation>
        <HotelListLanguages>
            <Languages>
                <Language>en</Language>
                <Language>es</Language>
                <Language>de</Language>
                <Language>pt</Language>
                <Language>fr</Language>
                <Language>it</Language>
            </Languages>
        </HotelListLanguages>
        <ReservationListCreationDate>true</ReservationListCreationDate>
        <ReservationListCheckDate>true</ReservationListCheckDate>
        <HotelListType>OffLineCompleted</HotelListType>
        <DescriptiveInfoType>NotImplemented</DescriptiveInfoType>
        <GeographicDestinationTreeType>OffLine</GeographicDestinationTreeType>
        <AvailDestinationTreeType>OffLine</AvailDestinationTreeType>
        <RoomListType>OnLine</RoomListType>
        <InformCancelPoliciesReservationRead>false</InformCancelPoliciesReservationRead>
        <InformCancelPoliciesReservationList>false</InformCancelPoliciesReservationList>
        <InformCancelPoliciesAvail>false</InformCancelPoliciesAvail>
        <InformChangesPolicies>false</InformChangesPolicies>
        <ImplementsDeltaPrice>false</ImplementsDeltaPrice>
        <RequiredAllPassengers>true</RequiredAllPassengers>
        <InformBedsAvail>false</InformBedsAvail>
        <InformModificationPolicies>false</InformModificationPolicies>
        <ModifyTransactions>
            <ModifyTransaction>
                <Modify>ModifyStartDateAddDays</Modify>
                <Modify>ModifyEndDateAddDays</Modify>
            </ModifyTransaction>
            <ModifyTransaction>
                <Modify>ModifyHolder</Modify>
                <Modify>ModifyRoomsAddRooms</Modify>
                <Modify>ModifyRoomsRemoveRooms</Modify>
            </ModifyTransaction>
        </ModifyTransactions>
        <AllowsCurrencyAvail>true</AllowsCurrencyAvail>
        <InformCancelPoliciesModify>false</InformCancelPoliciesModify>
        <AllowOnRequest>false</AllowOnRequest>
        <ImplementsDailyRatePlan>false</ImplementsDailyRatePlan>
        <AllowRemarks>false</AllowRemarks>
        <InformSharedBed>false</InformSharedBed>
        <InformBedType>false</InformBedType>
        <InformNumberOfBeds>false</InformNumberOfBeds>  
        <AllowBlockOption>false</AllowBlockOption>  
        <InformExclusiveDeal>false</InformExclusiveDeal>    
        <InformPriceCancel>false</InformPriceCancel>
        <AllowUrlCard>false</AllowUrlCard>
        <InformCancelPoliciesDescription>false</InformCancelPoliciesDescription>        
        <PaymentTypes>
             <PaymentType>LaterPay</PaymentType>
             <PaymentType>MerchantPay</PaymentType>
        </PaymentTypes>     
        <InformAvailableModificationsInReservationRead>false</InformAvailableModificationsInReservationRead>    
        <RequiredNationality>false</RequiredNationality>    
        <Inform60Rate>false</Inform60Rate>
        <Inform65Rate>false</Inform65Rate>
        <InformCanaryResidentRate>false</InformCanaryResidentRate>
        <InformBalearicResidentRate>false</InformBalearicResidentRate>
        <InformLargeFamilyRate>false</InformLargeFamilyRate>
        <InformHoneymoonRate>false</InformHoneymoonRate>        
        <ImplementsBusinessRules>false</ImplementsBusinessRules>    
        <ImplementsProviderLocatorCancel>false</ImplementsProviderLocatorCancel>    
        <ImplementsClientLocatorCancel>false</ImplementsClientLocatorCancel>            
        <NumMarketsAllowed>5</NumMarketsAllowed>            
        <InformTiket>false</InformTiket>
        <ImplementsDescriptiveInfoExtended>false</ImplementsDescriptiveInfoExtended>
        <InformNumberOfUnits>true</InformNumberOfUnits>     
        <AgeRange>
           <Age min = "0" max = "2"/>
           <Age min = "3" max = "12"/>
           <Age min = "13" max = "999"/>
        </AgeRange>
        <DestinationRegex>
            <Regex>HOT</Regex>
        </DestinationRegex>
    </StaticConfigurationRS>
~~~


### StaticConfigurationRS Description



| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| StaticConfigurationRS			| 1        	|		| Root node.							|
| MaxNumberHotels      			| 1   		| Integer	| Maximum number of hotel that can be requested in an *AvailRQ*.|
| MaxNumberCities      			| 1   		| Integer	| Maximum number of cities that can be requested in an *AvailRQ*.|
| MaxNumberZones       			| 1   		| Integer	| Maximum number of zones that can be requested in an *AvailRQ*.|
| MaxNumberGeoCodes    			| 1   		| Integer	| Maximum number of GeoCodes that can be requested in an *AvailRQ*.|
| RequiredRoomList     			| 1   		| Boolean	| The supplier has implemented a list of rooms in which the room description is returned in availability.(not a mandatory call)|
| InformCancelPolicies 			| 1   		| Boolean	| Returns cancellation policies.|
| InformBindingPriceValuation		| 1   		| Boolean	| Informs if the price is binding in valuation response.|
| InformBindingPrice   			| 1   		| Boolean	| Supplier returns binding PVPs in availability.|
| InformNRFValuation   			| 1   		| Boolean	| The supplier can inform in valuation if the rate is non-refundable. |
| InformNRFRate        			| 1   		| Boolean	| The supplier can inform in availability if the rate is non-refundable. |
| InformNRFRateByRoom   		| 1   		| Boolean	| The supplier can inform in availability if the room is non-refundable. |
| Inform55Rate         			| 1   		| Boolean	| Returns options for over 55s rates (senior rates) in availability.	|
| InformPackageRate    			| 1   		| Boolean	| Informs package rates options in availability. These options can't be sold separately.|
| InformExtraActivity  			| 1   		| Boolean	| Informs of the possible option type Hotel+entrance.|
| InformForfait        			| 1   		| Boolean	| Informs of the possible option type Hotel+Forfait.|
| RemarksValuation     			| 1   		| Boolean	| Returns remarks in Valuation.	|
| MaxNumberRoomCandidates		| 1   		| Integer	| Maximum number of room candidates that can be requested in the same avail request.	|
| MaxPaxInRoomCandidates		| 1   		| Integer	| Maximum number paxs in same room that can be requested in the same avail request.	|
| Release              			| 1   		| Integer	| Minimum days required in between booking date and checking date ( days in advance ). If the value is zero then there is no limitation.	|
| MinimumStay          			| 1   		| Integer	| Minimum number of days required for booking. If the value is zero then there is no limitation.  |
| InformBillingSupplier Reservation	| 1   		| Boolean	| Informs data of the external supplier in the booking.	|
| ImplementsProvideLocator ReservationRead | 1   	| Boolean	| The supplier implements ReservationRead using **provider** locator.	|
| ImplementsClientLocator ReservationRead | 1   	| Boolean	| The supplier implements ReservationRead using **client** locator.	|
| ImplementsCancel     			| 1   		| Boolean	| The supplier implements the Cancel method.|
| InformPriceReservation		| 1   		| Boolean	| The supplier informs the booking price in the reservation method.|
| HotelListLanguages   			| 1        	|		|Languages that the supplier returns their information in.|
| HotelListLanguages/Languages		| 1        	|		|List of languages.							| 
| HotelListLanguages/Languages /Language | 1..n 	| String	| Language code.					|
| ReservationListCreationDate		| 1   		| Boolean	| The supplier implements ReservationList by creation date.	|
| ReservationListCheckDate		| 1   		| Boolean	| The supplier implements ReservationList by check in date.	|
| HotelListType        			| 1   		| Enum		| XMLTravelgate's internal parameter, see the specification in _Detailed description_.		|
| DescriptiveInfoType  			| 1   		| Enum		| XMLTravelgate's internal parameter, see the specification in _Detailed description_.		|
| GeographicDestination TreeType	| 1   		| Enum		| XMLTravelgate's internal parameter, see the specification in _Detailed description_.		|
| AvailDestinationTreeType		| 1   		| Enum		| XMLTravelgate's internal parameter, see the specification in _Detailed description_.		|
| RoomListType         			| 1   		| Enum		| XMLTravelgate's internal parameter, see the specification in _Detailed description_.		|
| InformCancelPolicies ReservationRead	| 1   		| Boolean	| Informs cancellation policies in ReservationRead. |
| InformCancelPolicies ReservationList	| 1   		| Boolean	| Informs cancellation policies in ReservationList.	|
| InformCancelPoliciesAvail		| 1   		| Boolean	| Informs cancellation policies in Avail.		|
| InformChangesPolicies			| 1   		| Boolean	| The supplier informs if there is an extra fee for any booking modification.|
| ImplementsDeltaPrice 			| 1   		| Boolean	| Implements a margin stipulated by the client for booking with a higher price (delta).	|
| RequiredAllPassengers			| 1   		| Boolean	| Required data for all passengers (names and surnames).|
| ImplementsOffersAvail			| 1   		| Boolean	|If true, the supplier returns the offers applied in Avail.|
| ImplementsRemarksAvail		| 1   		| Boolean	| Space available for any remarks or comments aimed at the client in Avail.					|
| AllowsCurrencyAvail  			| 1   		| Boolean	| If true, it is possible to request the currency in Avail.	|
| AllowOnRequest      	 		| 1   		| Boolean	| If true, the supplier informs the onrequest status option in Avail,  Valuation, and Reservation. |
| InformCancelPoliciesModify		| 1   		| Boolean	| Informs the cancellation policies in Modification methods.	|
| ImplementsDailyPrice 			| 1   		| Boolean	| Informs if the supplier returns the daily price in Avail.	|
| ImplementsDailyRatePlan		| 1   		| Boolean	| Informs if the supplier returns the daily rate in Avail.|
| AllowRemarks         			| 1   		| Boolean	| Informs if the supplier allows send remarks in Reservation.|
| InformSharedBed      			| 1   		| Boolean	| Informs in availability response if beds in the room are shared.	|
| InformBedType        			| 1   		| Boolean	| Informs if the supplier returns the beds types in Avail.	|
| InformNumberOfBeds   			| 1   		| Boolean	| Informs if the supplier returns the number of beds for each room in Avail.	|
| AllowBlockOption     			| 1   		| Boolean	| Informs if the supplier can block the option in Valuation.	|
| InformExclusiveDeal  			| 1   		| Boolean	| The supplier indicates if a Hotel is an Exclusive Deal in HotelList and/or DescriptiveInfo.	|
| InformPriceCancel    			| 1   		| Boolean	| The supplier informs about the cancelation price in the cancel response.	|
| AllowUrlCard         			| 1   		| Boolean	| Specifies if the supplier allows url card data encode when the paymente type is LaterPay.	|
| InformCancelPolicies Description	| 1   		| Boolean	| Specifies if the supplier informs the cancel policies in free text in Valuation.	|
| ImplementsBusinessRules		| 1   		| Boolean	| Specifies if this supplier uses *businessrules* in Avail.|
| PaymentTypes         			| 1        	|		| List of payment types accepted by the supplier.		|
| PaymentTypes/PaymentType		| 1..n     	|		| Indicates the types of payment (Merchant, Direct ...) .	|
| InformAvailableModifications InReservationRead | 1   	| Boolean	| Specifies if the supplier informs of the possible modifications in ReservationRead.|
| RequiredNationality  			| 1   		| Boolean	| Informs if the supplier requires nationality in Avail, Valuation and Reservation.	|
| Inform60Rate         			| 1   		| Boolean	| The supplier informs the options with rates of pax of 60 years old or over in availability.	|
| Inform65Rate         			| 1   		| Boolean	| The supplier informs the options with rates of pax of 65 years old or over in availability.	|
| InformCanaryResidentRate		| 1   		| Boolean	| The supplier informs rates for canary residents in Avail. |
| InformBalearicResidentRate		| 1   		| Boolean	| The supplier informs rates for balearic residents in Avail. 	|
| InformLargeFamilyRate			| 1   		| Boolean	| The supplier informs rates for large families in Avail. |
| InformHoneymoonRate  			| 1   		| Boolean	| The supplier informs rates for honeymoon in Avail. |
| ImplementsProviderLocatorCancel	| 1   		| Boolean	| The supplier implements cancel transaction using  **provider** locator.	|
| ImplementsClientLocatorCancel		| 1   		| Boolean	| The supplier implements cancel transaction using  **client** locator.	|
| InformModificationPolicies 		| 1   		| Boolean	| The supplier informs of the modification policies in Valuation.	|
| ModifyTransactions   			| 0..1     	|		| Modifications allowed by the supplier.			|
| ModifyTransactions /ModifyTransaction | 1..n     	|		| Modifications allowed in the same request by the supplier. |
| ModifyTransactions /ModifyTransaction/Modify | 1..n   |  		| Modification type (ModifyStartDateAddDays, ModifyStartDateSubtractDays, ModifyEndDateAddDays, ModifyEndDateSubtractDays, ModifyHolder, ModifyRoomsAddRooms, ModifyRoomsRemoveRooms, ModifyMealPlan or ModifyAddComment). |
| NumMarketsAllowed    			| 1   		| Integer	| Number of markets supported by the supplier in the same request. |
| InformTiket          			| 1   		| Boolean	| Informs of the possible option type Hotel+Ticket.	|
| ImplementsDescriptive InfoExtended	| 1   		| Boolean	|Indicates whether the new DescriptiveInfo is implemented.	|
| InformNumberOfUnits  			| 1   		| Boolean	| Indicates the number of units available per room.  |
| AgeRange  			| 0..1   		| 	|  The age range used by the supplier. |
| AgeRange /Age  			| 1..n   		| 	|  Age range |
| @min 			| 1   		| String	| Minimum age in range |
| @max 			| 1		| String	|  Max age in range |
| DestinationRegex			| 0..1		| 	| List of regex. |
| DestinationRegex /Regex			| 1..n		| String | Regex. |


### Detailed description


**HotelListType, DescriptiveInfoType, GeographicDestinationTreeType,
AvailDestinationTreeType and RoomListType:**

These parameters are XMLTravelgate's internal parameters. They define the type of download each method has for each supplier. If the parameter value is set as online, the method runs a direct call to the supplier's system because the method takes less than 4 minutes. Any other value will signify that the process takes more than 4 minutes, which means we have to cache the information in our BBDD (the methods with this feature are updated every week).



**The following tags are set as FALSE by default:**
(This is either because the supplier doesn't support it or because is has not been updated yet)

-   **ImplementsDailyRatePlan**
-   **InformSharedBed**
-   **InformBedType**
-   **InformNumberOfBeds**
-   **AllowBlockOption**
-   **InformPriceCancel**
-   **InformAvailableModificationsInReservationRead**
-   **RequiredNationality**
-   **Inform60Rate**
-   **Inform65Rate**
-   **InformCanaryResidentRate**
-   **InformBalearicResidentRate**
-   **InformLargeFamilyRate**
-   **InformHoneymoonRate**
-   **ImplementsProviderLocatorCancel**
-   **ImplementsClientLocatorCancel**
-   **NumMarketsAllowed**
-   **ImplementsDescriptiveInfoExtended**
-   **InformNumberOfUnits**

**Important:**
In the future, this method will be deprecated as MetaData is the new and improved version of StaticConfiguration. Once we have all of our integrations adapted, we will inform you, as this method will no longer receive updates.



