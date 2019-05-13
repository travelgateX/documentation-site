---
title: MetaData
keywords: hotel, data structure, meta data
search: Hotel - Data Structure - MetaData
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/MetaData
---

### Method Goals


This method provides information about the meta data of the
supplier so that it can be effectively configured.



### Request Format


The request does not require any elements - empty request.



### Response Format


The XML response contains many elements of the supplier's meta data: number of hotels, number of cities and number of areas available, maximum number of *roomcandidate*, maximum number of paxes in a *roomcandidate*, release days, minimum stay, 
list of languages supported ...

It is separated in the following sections:

- Avail
- Valuation
- Reservation
- ReservationRead
- ReservationList
- Cancel
- Batch
- Generic

Clarification - All information contained within the Avail section relates to the availability method and all information contained within the Valuation section, relates to the valuation method, and so on.


### MetaDataRQ Example


~~~xml
    <MetaDataRQ>
    </MetaDataRQ>
~~~


### MetaDataRQ Description


  
| **Element**			| **Number**	| **Type**	| **Description**	|
| ----------------------------- | ------------- | ------------- | --------------------- |
| MetaDataRQ		| 1          	|		| Root node.		|

### MetaDataRS Example


~~~xml
    <MetaDataRS>
    <operationImplemented>true</operationImplemented>
    <Avail>
        <Destinations>
            <MaxNumberHotels reviewDate = "20/06/2015">0</MaxNumberHotels>
            <MaxNumberHotelsRecommended reviewDate = "20/06/2015">0</MaxNumberHotelsRecommended>
            <MaxNumberCities reviewDate = "20/06/2015">0</MaxNumberCities>
            <MaxNumberCitiesRecommended reviewDate = "20/06/2015">0</MaxNumberCitiesRecommended>
            <MaxNumberZones reviewDate = "20/06/2015">0</MaxNumberZones>
            <MaxNumberZonesRecommended reviewDate = "20/06/2015">0</MaxNumberZonesRecommended>
            <MaxNumberGeoCodes reviewDate = "20/06/2015">0</MaxNumberGeoCodes>
            <MaxNumberGeoCodesRecommended reviewDate = "20/06/2015">0</MaxNumberGeoCodesRecommended>
            <HotelSameDestinationRestriction reviewDate = "20/06/2015">false</HotelSameDestinationRestriction>
            <DestinationSameCountryRestriction reviewDate = "20/06/2015">false</DestinationSameCountryRestriction>
        </Destinations>
        <AllowsCurrency reviewDate = "20/06/2015">false</AllowsCurrency>
        <AllowsBusinessRules reviewDate = "20/06/2015">false</AllowsBusinessRules>
        <NumMarketsAllowed reviewDate = "20/06/2015">0</NumMarketsAllowed>
        <Release reviewDate = "20/06/2015">0</Release>
        <MinimumStay reviewDate = "20/06/2015">0</MinimumStay>
        <MaxStay reviewDate = "20/06/2015">0</MaxStay>
        <RoomCandidates>
            <MaxNumberRoomCandidates reviewDate = "20/06/2015">0</MaxNumberRoomCandidates>
            <PaxTypeRangeInRoomCandidates reviewDate = "20/06/2015">
                <Candidate type = "Adult" min = "1" max = "3"/>
                <Candidate type = "Child" min = "0" max = "2"/>
                <Candidate type = "Infant" min = "0" max = "0"/>
            </PaxTypeRangeInRoomCandidates>
            <MaxPaxInRoomCandidates reviewDate = "20/06/2015">0</MaxPaxInRoomCandidates>
            <MaxPaxInAllRooms reviewDate = "20/06/2015">0</MaxPaxInAllRooms>
            <RequiredRoomWithSamePaxConfiguration>
                <SamePaxNumber reviewDate = "20/06/2015">false</SamePaxNumber>
                <SamePaxAge reviewDate = "20/06/2015">false</SamePaxAge>
            </RequiredRoomWithSamePaxConfiguration>
            <AgeRange reviewDate = "11/11/2016">
                <Age type = "Child" min = "2" max = "5"/>
            </AgeRange>
        <RoomCandidates>
        <RateRules>
            <RateRule reviewDate = "20/06/2015">NonRefundable</RateRule>
            <RateRule reviewDate = "20/06/2015">largeFamily</RateRule>
        </RateRules>
        <Beds>
            <InformNumberOfUnits reviewDate = "20/06/2015">false</InformNumberOfUnits>
            <InformSharedBed reviewDate = "20/06/2015">false</InformSharedBed>
            <InformBedType reviewDate = "20/06/2015">false</InformBedType>
            <InformNumberOfBeds reviewDate = "20/06/2015">false</InformNumberOfBeds>
        </Beds>
        <InformBindingPrice reviewDate = "20/06/2015">false</InformBindingPrice>
        <InformCancelPolicies reviewDate = "20/06/2015">false</InformCancelPolicies>
        <InformRoomCancelPolicies reviewDate = "20/06/2015">false</InformRoomCancelPolicies>
        <ImplementsCombination reviewDate = "20/06/2015">false</ImplementsCombination>
        <InformRoomFees reviewDate = "20/06/2015">false</InformRoomFees>
        <InformRemarks reviewDate = "20/06/2015">false</InformRemarks>
        <PaymentTypes>
            <PaymentType reviewDate = "20/06/2015">MerchantPay</PaymentType>
            <PaymentType reviewDate = "20/06/2015">LaterPay</PaymentType>
        </PaymentTypes>
        <OptionTypes>
            <OptionType reviewDate = "20/06/2015">Hotel</OptionType>
        </OptionTypes>
        <Languages>
            <Language reviewDate = "20/06/2015">en</Language>
            <Language reviewDate = "20/06/2015">es</Language>
        </Languages>
        <InformDailyPrice reviewDate = "20/06/2015">false</InformDailyPrice>
        <InformDailyRatePlan reviewDate = "20/06/2015">false</InformDailyRatePlan>
        <InformOffers reviewDate = "20/06/2015">false</InformOffers>
        <InformNRFRateByRoom reviewDate = "20/06/2015">false</InformNRFRateByRoom>
        <InformFees reviewDate = "20/06/2015">false</InformFees>
    </Avail>
    <Valuation>
        <AllowsBlockOption reviewDate = "20/06/2015">false</AllowsBlockOption>
        <InformBindingPrice reviewDate = "20/06/2015">false</InformBindingPrice>
        <InformNRFRate reviewDate = "20/06/2015">false</InformNRFRate>
        <InformRemarks reviewDate = "20/06/2015">false</InformRemarks>
        <InformCancelPolicies reviewDate = "20/06/2015">false</InformCancelPolicies>
        <InformCancelPoliciesDescription reviewDate = "20/06/2015">false</InformCancelPoliciesDescription>
        <InformFees reviewDate = "20/06/2015">false</InformFees>
    </Valuation>
    <Reservation>
        <AllowsDeltaPrice reviewDate = "20/06/2015">false</AllowsDeltaPrice>
        <InformPropertyReservationNumber reviewDate = "20/06/2015">false</InformPropertyReservationNumber>
        <RequiredAllPassengers reviewDate = "20/06/2015">false</RequiredAllPassengers>
        <AllowsRemarks reviewDate = "20/06/2015">false</AllowsRemarks>
        <AllowsUrlCard reviewDate = "20/06/2015">false</AllowsUrlCard>
        <InformBillingSupplier reviewDate = "20/06/2015">false</InformBillingSupplier>
        <InformPrice reviewDate = "20/06/2015">false</InformPrice>
        <AllowsPreferences>
            <Preference hotel = "false" room = "true">
                <PreferenceType>Smoker</PreferenceType>
                <Value mandatory = "false"/>
            </Preference>
            <Preference hotel = "false" room = "true">
                <PreferenceType>ExtraBed</PreferenceType>
                <Value mandatory = "false"/>
            </Preference>
            <Preference hotel = "true" room = "false">
                <PreferenceType>LateArrival</PreferenceType>
                <Value mandatory = "true" type = "numeric"/>
            </Preference>
        </AllowsPreferences>
    </Reservation>
    <ReservationRead>
        <Implements reviewDate = "20/06/2015">false</Implements>
        <InformPropertyReservationNumber reviewDate = "20/06/2015">false</InformPropertyReservationNumber>
        <AllowsProvideLocator reviewDate = "20/06/2015">false</AllowsProvideLocator>
        <AllowsClientLocator reviewDate = "20/06/2015">false</AllowsClientLocator>
        <InformCancelPolicies reviewDate = "20/06/2015">false</InformCancelPolicies>
        <InformPriceCancel reviewDate = "20/06/2015">false</InformPriceCancel>
    </ReservationRead>
    <ReservationList>
        <Implements reviewDate = "20/06/2015">false</Implements>
        <InformPropertyReservationNumber reviewDate = "20/06/2015">false</InformPropertyReservationNumber>
        <AllowsCreationDate reviewDate = "20/06/2015">false</AllowsCreationDate>
        <AllowsCheckDate reviewDate = "20/06/2015">false</AllowsCheckDate>
        <InformCancelPolicies reviewDate = "20/06/2015">false</InformCancelPolicies>
        <InformPriceCancel reviewDate = "20/06/2015">false</InformPriceCancel>
    </ReservationList>
    <Cancel>
        <Implements reviewDate = "20/06/2015">false</Implements>
        <AllowsProvideLocator reviewDate = "20/06/2015">false</AllowsProvideLocator>
        <AllowsClientLocator reviewDate = "20/06/2015">false</AllowsClientLocator>
        <InformPriceCancel reviewDate = "20/06/2015">false</InformPriceCancel>
    </Cancel>
    <Batch>
        <InformExclusiveDeal reviewDate = "20/06/2015">false</InformExclusiveDeal>
        <HotelList>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
                <Language reviewDate = "20/06/2015">es</Language>
            </Languages>
        </HotelList>
        <DescriptiveInfo>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
                <Language reviewDate = "20/06/2015">es</Language>
            </Languages>
        </DescriptiveInfo>
        <GeographicDestinationTree>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
                <Language reviewDate = "20/06/2015">es</Language>
            </Languages>
        </GeographicDestinationTree>
        <AvailDestinationTree>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
            </Languages>
        </AvailDestinationTree>
        <RoomList>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
                <Language reviewDate = "20/06/2015">es</Language>
            </Languages>
        </RoomList>
        <MealPlanList>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
                <Language reviewDate = "20/06/2015">es</Language>
            </Languages>
        </MealPlanList>
        <CategoryList>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
                <Language reviewDate = "20/06/2015">es</Language>
            </Languages>
        </CategoryList>
        <DescriptiveInfoExtended>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
                <Language reviewDate = "20/06/2015">es</Language>
            </Languages>
        </DescriptiveInfoExtended>
        <MarketList>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
                <Language reviewDate = "20/06/2015">es</Language>
            </Languages>
        </MarketList>
        <CurrencyList>
            <StaticType reviewDate = "20/06/2015">NotImplemented</StaticType>
            <Languages>
                <Language reviewDate = "20/06/2015">en</Language>
                <Language reviewDate = "20/06/2015">es</Language>
            </Languages>
        </CurrencyList>
    </Batch>
    <Generic>
        <RequiredNationality reviewDate = "20/06/2015">false</RequiredNationality>
        <AllowsOnRequest reviewDate = "20/06/2015">false</AllowsOnRequest>
    </Generic>
</MetaDataRS>
~~~

### MetaDataRS Description

| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| MetaDataRS			| 1        	|		| Root node.							|
| Avail			| 1        	| 	| Avail node.		|
| Avail/Destinations			| 1        	| 	| Contains information regarding the destinations for *AvailRQ*.		|
| Avail/Destinations/MaxNumberHotels			| 1        	| Integer	| Maximum number of hotels that can be requested. |
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Destinations/MaxNumberHotelsRecommended			| 1        	| Integer	| Maximum number of hotels recommended by the supplier.|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Destinations/MaxNumberCities			| 1        	| Integer	| Maximum number of cities that can be requested.|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Destinations/MaxNumberCitiesRecommended			| 1        	| Integer	| Maximum number of cities recommended by the supplier.|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Destinations/MaxNumberZones			| 1        	| Integer	| Maximum number of zones that can be requested.|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Destinations/MaxNumberZonesRecommended			| 1        	| Integer	| Maximum number of zones recommended by the supplier.|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Destinations/MaxNumberGeoCodes			| 1        	| Integer	| Maximum number of GeoCodes that can be requested.|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Destinations/ MaxNumberGeoCodesRecommended			| 1        	| Integer	| Maximum number of GeoCodes recommended by the supplier.|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Destinations/HotelSameDestinationRestriction			| 1        	| Boolean | If the supplier allows the availability for N hotels, this tag indicates whether those hotels must be within the same destination.			|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Destinations/DestinationSameCountryRestriction			| 1        	| Boolean | If the supplier allows the availability for N destinations, this tag indicates whether those destinations must be within the same country.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/AllowsCurrency			| 1        	| Boolean	| If true, it is possible to request the currency.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/AllowsBusinessRules			| 1        	| Boolean	| Specifies if this supplier allows *businessrules*.|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/NumMarketsAllowed			| 1        	| Integer	| Number of markets supported by the supplier in the same request. |
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Release			| 1        	| Integer	| Minimum days required in between booking date and checking date ( days in advance ). If the value is zero then there is no limitation.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/MinimumStay			| 1        	| Integer	| Minimum number of days required for booking. If the value is zero then there is no limitation.  |
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/MaxStay			| 1        	| Integer	| Maximum number of days allowed for booking.  |
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/RoomCandidates			| 1        	|  | Contains information about the restrictions of the rooms.		|
| Avail/RoomCandidates/MaxNumberRoomCandidates			| 1        	| Integer | Maximum number of room candidates that can be requested in the same avail request.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/RoomCandidates/PaxTypeRangeInRoomCandidates			| 0..1        	|  | Contains information about the age restrictions of the guests in a room.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/RoomCandidates/PaxTypeRangeInRoomCandidates/Candidate			| 1        	|  | Guest restrictions for each candidate type in a room.		|
| @type		| 1        	| Enum | Candidate classification type.(Adult, Child, Infant)		|
| @min		| 1        	| Integer | Minimum required number of guest of this type.		|
| @max		| 1        	| Integer | Maximum number of guest of this type allowed.		|
| Avail/RoomCandidates/MaxPaxInRoomCandidates			| 1        	| Integer | Maximum number paxs in same room that can be requested in the same avail request.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/RoomCandidates/MaxPaxInAllRooms			| 1        	| Integer | Total amount of paxs that can be requested in the same avail request.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/RoomCandidates/RequiredRoomWithSamePaxConfiguration			| 1        	| 	| Indicates whether all of the distributions must have the same configuration.		|
| Avail/RoomCandidates/RequiredRoomWithSamePaxConfiguration/SamePaxNumber			| 1        	| Boolean	| Indicates whether it is necessary that the number of guests be the same in all of the configurations.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/RoomCandidates/RequiredRoomWithSamePaxConfiguration/SamePaxAge			| 1        	| Boolean	| Indicates whether all of the guests in a particular distribution must be the same age.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/RoomCandidates/AgeRange			| 0..1        	| 	| The age range used by the supplier.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/RoomCandidates/AgeRange/Age			| 1..n        	| 	| Age range.	|
| @type 		| 1   		| String	| Type of classification according to age.(Adult, Child, Infant) |
| @min 			| 1   		| String	| Minimum age in range. |
| @max 			| 1		| String	|  Max age in range. |
| Avail/RateRules			| 1        	| 	| List of rate rule types.		|
| Avail/RateRules/RateRule			| 1..n        	| Enum	| Rate rules supported by the supplier (You can check these Rate conditions in our Avail section).		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Beds			| 1        	| 	| Information about beds.		|
| Avail/Beds/InformNumberOfUnits			| 1        	| Boolean | Indicates the number of units available per room.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Beds/InformSharedBed			| 1        	| Boolean | Informs in availability response if beds in the room are shared. |
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Beds/InformBedType			| 1        	| Boolean	| Informs if the supplier returns the beds types.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Beds/InformNumberOfBeds			| 1        	| Boolean 	| Informs if the supplier returns the number of beds for each room.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformBindingPrice			| 1        	| Boolean	| Supplier returns binding PVPs.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformCancelPolicies			| 1        	| Boolean	| Returns cancellation policies.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformRoomCancelPolicies 			| 1        	| Boolean	| Returns cancellation policies at room level.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformRoomFees			| 1        	| Boolean	| Returns fees at room level.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/ImplementsCombination			| 1        	| Boolean	| Informs whether the integration allows room combination or not.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformRemarks			| 1        	| Boolean	| Space available for any remarks or comments aimed at the client.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/PaymentTypes			| 1        	| 	| List of payment types accepted by the supplier.		|
| Avail/PaymentTypes/PaymentType			| 1..n        	| 	| Indicates the types of payment (Merchant, Direct, ...).		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/OptionTypes			| 1        	| 	| List of option types accepted by the supplier.		|
| Avail/OptionTypes/OptionType			| 1..n        	| 	| Indicates the types of option.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/Languages			| 1        	| 	| List of languages.		|
| Avail/Languages/Language			| 1..n        	| String	| 	Language code. 		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformDailyPrice			| 1        	| Boolean	| Informs if the supplier returns the daily price. 		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformDailyRatePlan			| 1        	| Boolean	| Informs if the supplier returns the daily rate.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformOffers			| 1        	| Boolean	| If true, the supplier returns the offers applied. 		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformNRFRateByRoom			| 1        	| Boolean	| The supplier can inform in availability if the room is non-refundable. 		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Avail/InformFees			| 1        	| Boolean 	| Informs if the supplier returns fees.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Valuation			| 1        	| 	| Valuation node.		|
| Valuation/AllowsBlockOption			| 1        	| Boolean	| Informs if the supplier can block the option.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Valuation/InformBindingPrice			| 1        	| Boolean	| Informs if the price is binding in valuation response.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Valuation/InformNRFRate			| 1        	| Boolean	| The supplier can inform in valuation if the rate is non-refundable.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Valuation/InformRemarks			| 1        	| Boolean	| Returns remarks.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Valuation/InformCancelPolicies			| 1        	| Boolean 	| Informs cancellation policies.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Valuation/InformCancelPoliciesDescription			| 1        	| Boolean	| Specifies if the supplier informs the cancel policies in free text.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Valuation/InformFees			| 1        	| Boolean	| Informs if the supplier returns fees.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Reservation			| 1        	| 	| Reservation node.		|
| Reservation/AllowsDeltaPrice			| 1        	| Boolean	| Allows a margin stipulated by the client for booking with a higher price (delta).		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Reservation/InformPropertyReservationNumber			| 1        	| Boolean	| Informs if the supplier returns the property reservation number.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Reservation/RequiredAllPassengers			| 1        	| Boolean	| Required data for all passengers (names and surnames).		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Reservation/AllowsRemarks			| 1        	| Boolean	| Informs if the supplier allows send remarks.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Reservation/AllowsUrlCard			| 1        	| Boolean 	| Specifies if the supplier allows url card data encode when the paymente type is LaterPay.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Reservation/InformBillingSupplier			| 1        	| Boolean	| Informs data of the external supplier in the booking.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Reservation/InformPrice			| 1        	| Boolean 	| The supplier informs the booking price.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Reservation/AllowsPreferences			| 0..1        	|  	| Preference filters allowed by the provider.		|
| Reservation/AllowsPreferences/Preference		| 1        	|  	| Each filter of preference and its values.		|
| @hotel		| 1        	| Boolean 	|  At the option / general level.		|
| @room		| 1        	| Boolean 	|  At the room level.		|
| Reservation/AllowsPreferences/Preference/PreferenceType		| 1        	|  	| Type of preference allowed. See types allowed in ** Reservation:** .		|
| Reservation/AllowsPreferences/Preference/Value		| 1        	|  	| Definition of the type of preference.		|
| @mandatory		| 1        	| Boolean 	| If it is necessary to pass a value in the Preference tag in reservation request.		|
| @type		| 0..1       	| String 	| Type of the required value. (string, numeric, boolean)		|
| ReservationRead			| 1        	| 	| ReservationRead node.		|
| ReservationRead/InformPropertyReservationNumber			| 1        	| Boolean	| Informs if the supplier returns the property reservation number.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationRead/Implements			| 1        	| Boolean	| Informs if the supplier implements this method.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationRead/AllowsProvideLocator			| 1        	| Boolean	| The supplier allows provider locator.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationRead/AllowsClientLocator			| 1        	| Boolean	| The supplier allows client locator.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationRead/InformCancelPolicies			| 1        	| Boolean	| Informs cancellation policies.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationRead/InformPriceCancel			| 1        	| Boolean	| The supplier informs the cancellation price.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationList			| 1        	| 	| ReservationList node.		|
| ReservationList/Implements			| 1        	| Boolean	| Informs if the supplier implements this method.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationList/InformPropertyReservationNumber			| 1        	| Boolean	| Informs if the supplier returns the property reservation number.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationList/AllowsCreationDate			| 1        	| Boolean	| The supplier allows search by creation date.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationList/AllowsCheckDate			| 1        	| Boolean	| The supplier allows search by check in date.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationList/InformCancelPolicies			| 1        	| Boolean	| Informs cancellation policies.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| ReservationList/InformPriceCancel			| 1        	| Boolean	| The supplier informs the cancellation price.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Cancel			| 1        	| 	| Cancel node.		|
| Cancel/Implements			| 1        	| Boolean	| Informs if the supplier implements this method.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Cancel/AllowsProvideLocator			| 1        	| Boolean	| The supplier allows provider locator.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Cancel/AllowsClientLocator			| 1        	| Boolean	| The supplier allows client locator.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Cancel/InformPriceCancel			| 1        	| Boolean	| The supplier informs the cancellation price.			|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch			| 1        	| 	| Batch node.		|
| Batch/InformExclusiveDeal			| 1        	| Boolean	| The supplier indicates if a Hotel is an Exclusive Deal in HotelList and/or DescriptiveInfo.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/HotelList			| 1        	| 	| Contains information regarding HotelList.		|
| Batch/HotelList/StaticType			| 1        	| Enum	| Informs the static type.The possible values are:	Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed.  |
| Batch/HotelList/Languages			| 1        	| 	| 	List of languages.		|
| Batch/HotelList/Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/DescriptiveInfo			| 1        	| 	| Contains information regarding DescriptiveInfo.		|
| Batch/DescriptiveInfo/StaticType			| 1        	| Enum	| Informs the static type.The possible values are:	Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed.  |
| Batch/DescriptiveInfo/Languages			| 1        	| 	| 	List of languages.		|
| Batch/DescriptiveInfo/Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/GeographicDestinationTree			| 1        	| 	| Contains information regarding GeographicDestinationTree.		|
| Batch/GeographicDestinationTree/StaticType			| 1        	| Enum	| Informs the static type.The possible values are:	Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed.  |
| Batch/GeographicDestinationTree/Languages			| 1        	| 	| 	List of languages.		|
| Batch/GeographicDestinationTree/ Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/AvailDestinationTree			| 1        	| 	| Contains information regarding AvailDestinationTree.		|
| Batch/AvailDestinationTree/StaticType			| 1        	| Enum	| Informs the static type.The possible values are:	Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed.  |
| Batch/AvailDestinationTree/Languages			| 1        	| 	| 	List of languages.		|
| Batch/AvailDestinationTree/Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/RoomList			| 1        	| 	| Contains information regarding RoomList.		|
| Batch/RoomList/StaticType			| 1        	| Enum	| Informs the static type.The possible values are:	Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed.  |
| Batch/RoomList/Languages			| 1        	| 	| 	List of languages.		|
| Batch/RoomList/Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/MealPlanList			| 1        	| 	| Contains information regarding MealPlanList.		|
| Batch/MealPlanList/StaticType			| 1        	| Enum	| Informs the static type.The possible values are:	Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed.  |
| Batch/MealPlanList/Languages			| 1        	| 	| 	List of languages.		|
| Batch/MealPlanList/Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/CategoryList			| 1        	| 	| Contains information regarding CategoryList.		|
| Batch/CategoryList/StaticType			| 1        	| Enum	| Informs the static type.The possible values are:	Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed.  |
| Batch/CategoryList/Languages			| 1        	| 	| 	List of languages.		|
| Batch/CategoryList/Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/DescriptiveInfoExtended			| 1        	| 	| Contains information regarding DescriptiveInfoExtended. 		|
| Batch/DescriptiveInfoExtended/StaticType			| 1        	| Enum	| Informs the static type.	The possible values are: Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/DescriptiveInfoExtended/Languages			| 1        	| 	| 	List of languages.		|
| Batch/DescriptiveInfoExtended/Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/MarketList			| 1        	| 	| Contains information regarding MarketList.		|
| Batch/MarketList/StaticType			| 1        	| Enum	| Informs the static type.The possible values are:	Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed.  |
| Batch/MarketList/Languages			| 1        	| 	| 	List of languages.		|
| Batch/MarketList/Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Batch/CurrencyList			| 1        	| 	| Contains information regarding CurrencyList.	|
| Batch/CurrencyList/StaticType			| 1        	| Enum	| Informs the static type.The possible values are:	Offline, OfflineCompleted or NotImplemented.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed.  |
| Batch/CurrencyList/Languages			| 1        	| 	| 	List of languages.		|
| Batch/CurrencyList/Languages/Language			| 1..n        	| String	| Language code.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Generic			| 1        	| 	| Generic node.		|
| Generic/RequiredNationality			| 1        	| Boolean	| Informs if the supplier requires nationality in Avail, Valuation and Reservation.		|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |
| Generic/AllowsOnRequest			| 1        	| Boolean	| If true, the supplier informs the onrequest status option in Avail, Valuation, and Reservation.	|
| @reviewDate 			| 1   		| String	| Informs of the date when the field was last reviewed. |


### Detailed description

**reviewDate attribute:**

The attribute called reviewDate will let you know when the field was last reviewed, thus ensuring that you can trust the information as being up to date.

**Tags structure:**

Some tags were renamed, so that they follow a certain standard of coherence. With this in mind, we will differentiate between 4 types of tags, depending on how it starts:

- *Implements:* It shows whether a call has been implemented or not.

- *Inform:* It indicates whether the information provided in our RS lets you see any optional fields such as rates.

- *Required:* It indicates whether any field, either in our RQ or in our RS, is required, in order for the logs to be valid. For example, whether the Nationality field is required or whether it is required to implement the list of rooms because we do not provide a description for them.

- *Allows:* It indicates whether an optional field in our RQ is allowed to display additional items. For example the onrequest in availability.

**Avail:**

*MaxNumberHotelsRecommended, MaxNumberCitiesRecommended, MaxNumberZonesRecommended, MaxNumberGeoCodesRecommended:* These tags indicate what the recommended number of Cities/Hotels/Zones or Geocodes is for each supplier are. This means that even if a supplier allows for a search of up to 500 at a time, they may recommend that you do not exceed 200, thus way avoiding TimeOut errors and showing results in time. In the majority of cases the maximum number of hotels allowed is the same as the recommended number of hotels (MaxNumberHotels = MaxNumberHotelsRecommended). There are, however, a few cases in which it can be different.

**Reservation:**

*AllowsPreferences:* In this tag it indicates what types of preferences the provider allows at the hotel and / or room level.

   - **Preference**: Each of these tags will specify the type of preference allowed and at what level it can be requested
    - hotel => at the option / general level.
    - room => at room level.
   - **PreferenceType**: The types that allow, the possible values are:
    - Smoker
    - NonSmoker
    - ExtraBed
    - Cradle
    - DoubleBed
    - TwinBeds
    - ContiguosRooms
    - Wedding
    - LateArrival
    - LateCheckOut
    - EarlyCheckIn
    - GroundFloor
    - TopFlor
    - WithoutVoucher
                    
   - **Value** :
    - **mandatory**: Here we will specify if it is necessary to pass a value in the Preference tag in reservation request.
    - **type**: Then you must specify the type of value that can be sent in tag type. This type is an Enum that could be:
        - string
        - numeric
        - boolean
                 
   - **Example 1**:
     - MetaData:
     ~~~xml
         <Preference hotel = "false" room = "true">
            <PreferenceType>Smoker</PreferenceType>
            <Value mandatory = "false"/>
         </Preference>
     ~~~
     - Reservation:
     ~~~xml
          <Preference type = "Smoker"></Preference>
     ~~~
   - **Example 2**:
     - MetaData:
     ~~~xml
         <Preference hotel = "false" room = "true">
            <PreferenceType>LateArrival</PreferenceType>
            <Value mandatory = "true" type = "string"/>
         </Preference>
     ~~~
     - Reservation:
     ~~~xml
          <Preference type = "LateArrival">14:00</Preference>
     ~~~

**Reservation Read, ReservationList:**

*InformPriceCancel:* In case the booking status is CN, this field allows us to show the price of the cancellation and not the price of the booking. 

**Batch:**

*Static type:* These parameters are XMLTravelgate’s internal parameters. They define the type of download each method has for each supplier. If the parameter value is set as online, the method runs a direct call to the supplier’s system because the method takes less than 4 minutes. Any other value will signify that the process takes more than 4 minutes, which means we have to cache the information in our BBDD (the methods with this feature are updated every week).
