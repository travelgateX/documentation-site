---
title: Search
keywords: activities, data structure, search
search: Activities - Data Structure -  Search
sidebar: mydoc_sidebar
permalink: /docs/activities/DSF/search
---



### Method Goals


This method aims to return all the activities planned on a future. Sometimes the response size is very large, so a Search Criteria must be applied.



### Request Format


It is not necessary to specify anything as long as usually the provider



### Response Format


The response contains information of each activity that provider return.




### SearchRQ Example



~~~xml
	<OTA_TourActivitySearchRQ 
	xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" PrimaryLangID = "es">
		<!-- Node for Country/Region filter -->
		<SearchCriteria>
			<CountryCode>ES</CountryCode>
		</SearchCriteria>
	</OTA_TourActivitySearchRQ>    
~~~


### SearchRQ Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
|OTA_TourActivitySearchRQ 		| 1	|	|	Root node.		|
| @PrimaryLangID      			| 1   	| String	| Language code (ISO 3166-1 alpha-2) format.	|
| SearchCriteria    			| 0..n  |			| Adds filters to the activity search.		|
| SearchCriteria/CountryCode	| 0..1  | String	| Filter by ISO Country Code.           	|
| SearchCriteria/RegionCode     | 0..1  | String	| Filter by region Code.           	|




### SearchRS Example



~~~xml
    <OTA_TourActivitySearchRS 
	xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
		<TourActivityInfo>
			<BasicInfo Name="PortAventura Park" TourActivityID="2840"/>
			<CategoryAndType>
				<Category Code="APRTEM" Extension="Other_"/>
			</CategoryAndType>
			<Location>
				<Region RegionCode="Costa Dorada" RegionName="Tarragona"/>
				<Address>
					<AddressLine/>
					<CityName>Costa Dorada</CityName>
					<PostalCode/>
					<County>ES</County>
					<StateProv/>
				</Address>
			</Location>
		</TourActivityInfo>
		<TourActivityInfo>
			<BasicInfo Name="PortAventura Caribe Aquatic Park" TourActivityID="2843"/>
			<CategoryAndType>
				<Category Code="APRTEM" Extension="Other_"/>
			</CategoryAndType>
			<Location>
				<Region RegionCode="Costa Dorada" RegionName="Tarragona"/>
				<Address>
					<AddressLine>Av. de l'Alcalde Pere Molas, km 2</AddressLine>
					<CityName>Costa Dorada</CityName>
					<PostalCode/>
					<County>ES</County>
					<StateProv/>
				</Address>
			</Location>
		</TourActivityInfo>
		<TourActivityInfo>
			<BasicInfo Name="Packs Promocionales" TourActivityID="2841"/>
			<CategoryAndType>
				<Category Code="APRTEM" Extension="Other_"/>
			</CategoryAndType>
			<Location>
				<Region RegionCode="Costa Dorada" RegionName="Tarragona"/>
				<Address>
					<AddressLine/>
					<CityName>Costa Dorada</CityName>
					<PostalCode/>
					<County>ES</County>
					<StateProv/>
				</Address>
			</Location>
		</TourActivityInfo>
                    .
                    .
	</OTA_TourActivitySearchRS>
~~~


### SearchRS Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_TourActivitySearchRS |	1	|			|	Root node.		|
| TourActivityInfo         		| 0..n    	|		| Information about specific ticket.		|
| TourActivityInfo/BasicInfo		| 1..1    	|		| Basic Information of ticket.			|
| @Name                   		| 0..1		| String	| Name of ticket.				|
| @TourActivityID          		| 1..1		| String	| Code of ticket.				|
| TourActivityInfo/BasicInfo/MultipleTourActivitySearch		| 0..1    	|		| In case of multiple activities, contains all the ticket codes (not used in Search). |
| TourActivityInfo/BasicInfo/MultipleTourActivitySearch/TourActivityID		| 1..n    	|		| Code of ticket (not used in Search). |
| TourActivityInfo/BasicInfo/IncludedServices		| 0..n    	| Text	| Description of the services included on the activity. |
| TourActivityInfo/Extra		| 0..n      	| 		| List of extras in the activity. |
| @SupplierCode		| 0..1      	| String		| Activity extra supplier code. |
| @Name		| 0..1      	| String		| Activity extra name. |
| @Quantity		| 0..1      	| Integer		| Quantity of extras. |
| @Description		| 0..1      	| String		| Description about the extra. |
| TourActivityInfo/Extra/Pricing		| 0..1      	| 		| Information about pricing of the Extra. |
| TourActivityInfo/Extra/Pricing/Rate		| 0..1      	| 		| Information about the rate involved on the pricing. |
| @RateID            		| 1..1		| String	| Indicates the code of the rate.			|
| @Name            		| 1..1		| String	| Indicates the name of the rate.			|
| @isNominative            		| 1..1		| Boolean	| True if it is a nominative rate.			|
| @hiddenRate            		| 0..1		| Boolean	| True if it is a hidden/opaque rate.			|
| TourActivityInfo/Extra/Pricing/IncludedCharges		| 0..1      	| 		| Information about the included charges. |
| TourActivityInfo/Extra/Pricing/IncludedCharges/includedCharge		| 0..n      	| 		| List of the included charges. |
| @code		| 0..1      	| 	String	| included charge code. |
| @description		| 0..1      	| 	String	| Information about the included charge. |
| @name		| 0..1      	| 	String	| included charge name. |
| @type		| 0..1      	| 	String	| included charge type. |
| TourActivityInfo/Extra/Pricing/IncludedCharges/includedCharge/summary		| 0..1      	| 		| Summary of the pricing. |
| @amount	| 0..1      	| 	String	| Total amount. |
| @Commission	| 0..1      	| 	String	| Amount commission. |
| @currencyCode 	| 0..1      	| 	String	| Amount currency. ISO 4217. For example: *EUR* |
| @IsBinding	 | 0..1      	| 	String	|  |
| @IsTTOO 	| 0..1      	| 	String	|  TourOperator price.|
| @referencePriceAmount 	| 0..1      	| 	String	|  |
| TourActivityInfo/Extra/Pricing/Rate/CancellationPolicies		| 0..1      	| 		| List of rate's cancellation policies. |
| TourActivityInfo/Extra/Pricing/Rate/CancellationPolicies/CancellationPolicy		| 1..n      	| 		| Cancellation policy. |
| @amount            		| 1..1		| Decimal	| Value of the penalty.			|
| @dateFrom            		| 1..1		| DateTime	| Date from which the penalty is applied.			|
| @penaltyType            		| 0..1		| Enum	| Indicates the type of penalty. See table ePenaltyType.			|
| @NoRefundable            		| 1..1		| Boolean	| True if it is no refundable.			|
| TourActivityInfo/Extra/Pricing/Summary          		| 0..1    	|		| Summary price for option, this element we return if OpenAvailability = false. |
| @Amount                  		| 1..1		| Decimal	| Option price.					|
| @ReferencePriceAmount		| 0..1		| Decimal	| Price reference.			|
| @isTTOO           		| 0..1		| Boolean	| Tells if is a TourOperation price.			|
| @CurrencyCode            		| 0..1		| String	| Currency code (ISO 4217).			|
| @IsBinding            		| 0..1		| String	| Tells if is a binding price.			|
| @Commission            		| 0..1		| Decimal 	| Price commission.			|
| @CurrencyCode            		| 0..1		| String	| Currency code (ISO 4217).			|
| TourActivityInfo/Extra/Pricing/Summary/TaxAmounts          		| 0..1    	|		| Taxes applied on the price. |
| TourActivityInfo/Extra/Pricing/Summary/TaxAmount          		| 0..1    	|		| Tax applied on the price. |
| @Description          		| 0..1    	| String	| Description about the price. |
| @Percentage          		| 0..1    	| String	| Percentage of the price . |
| @Total         		| 0..1    	| String	| Total amount. |
| TourActivityInfo/Extra/Pricing/Summary/PricingType		| 0..1		| String	| Specifies type of the option price, if value = Other then is mandatory specify Extension type. |
| @Extension               		| 0..1		| String	| Specifies type of the option price.	(see Table *eExtensionPricingType*)	|
| @Text               		| 0..1		| String	| Specifies the applicability of the price. (see Table *ePricingType*)	|
| TourActivityInfo/Extra/Pricing/IncludedCharges		| 0..1		| 	| List of charges included in the pricing. |
| TourActivityInfo/Extra/Pricing/IncludedCharges		| 1..n		| String	| List of charges included in the pricing. |
| @code                   		| 1..1		| String	| Charge code.			|
| @type                     		| 0..1		| String	| Charge type.			|
| @name                     		| 0..1		| String	| Charge name.			|
| @description                     		| 0..1		| String	| Charge description.			|
| TourActivityInfo/Extra/Pricing/IncludedCharges/Summary		| 0..1		| 	| Charge summary price (same as the explained in "TourActivityInfo/Extra/Pricing/Summary"). |
| TourActivityInfo/Extra/Pricing/IncludedTaxes		| 0..1		| | List of taxes included in the pricing. |
| TourActivityInfo/Extra/Pricing/IncludedTaxes		| 1..n		| String	| List of taxes included in the pricing. |
| @id                     		| 0..1		| Enum	| tax type. (See table of eTaxId)		|
| TourActivityInfo/Extra/Pricing/ParticipantCategory		| 0..n		| String	| Specifies price and participant category.	|
| @age                     		| 1..1		| Integer	| Maximum age of participant category.			|
| @minAge                     		| 0..1		| Integer	| Minimum age of participant category.			|
| @isTTOO                   		| 0..1		| Boolean	| True if it is a Tour Operation participant category.			|
| @refId                     		| 0..1		| Integer	| Reference ID of the participant category.			|
| @minPax                     		| 0..1		| Integer	| Minimum number of passengers allowed for the participant category.			|
| @maxPax                     		| 0..1		| Integer	| Maximum number of passengers allowed for the participant category.			|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/QualifierInfo | 1..1	| String	| |
| @Extension               		| 0..1		| String	| Specifies provider code of participant category. |
| @Text               		| 1..1		| Enum | Specifies participant type. (See Table)|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/Price	| 1..1      	|		| Specific price for each participantCategory.	|
| @Amount                  		| 1  		| Decimal	| ParticipantCategory price.			|
| @CurrencyCode            		| 0..1		| String	| Currency code (ISO 4217).			|
| @IsBinding            		| 0..1		| Boolean	| Tells if price is binding.			|
| @Commission            		| 0..1		| Decimal	| Commission of the price.			|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions | 0..1    	|		| Necessary information that we need send between calls. |
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Seat | 0..1 |		| Information about location of seat.		|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Seat/Level | 0..1 |		| Information about level/floor of seat.	|
| @id                      		| 0..1		| String	| Provider code about location of seat.		|
| @description             		| 0..1		| String	| Description about location of seat.		|
| @totalSeats                      		| 0..1		| Integer	| Number of seats.		|
| @totalSeatsForSale                      		| 0..1		| Integer	| Number of salable seats.		|
| @occupiedSeats                      		| 0..1		| Integer	| Number of occupied seats.		|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Seat/Area | 0..1 |   		| Area where the site is located.		|
| @id                      		| 0..1		| String	| Provider code about location of seat.		|
| @description             		| 0..1		| String	| Description about location of seat.		|
| @totalSeats                      		| 0..1		| Integer	| Number of seats.		|
| @totalSeatsForSale                      		| 0..1		| Integer	| Number of salable seats.		|
| @occupiedSeats                      		| 0..1		| Integer	| Number of occupied seats.		|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Seat/Zone | 0..1 |    		| Zone where the site is located.		|
| @id                      		| 0..1		| String	| Provider code about location of seat.		|
| @description             		| 0..1		| String	| Description about location of seat.		|
| @totalSeats                      		| 0..1		| Integer	| Number of seats.		|
| @totalSeatsForSale                      		| 0..1		| Integer	| Number of salable seats.		|
| @occupiedSeats                      		| 0..1		| Integer	| Number of occupied seats.		|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Seat/Sector | 0..1 |    	| Sector where the site is located.		|
| @id                      		| 0..1		| String	| Provider code about location of seat.		|
| @description             		| 0..1		| String	| Description about location of seat.		|
| @totalSeats                      		| 0..1		| Integer	| Number of seats.		|
| @totalSeatsForSale                      		| 0..1		| Integer	| Number of salable seats.		|
| @occupiedSeats                      		| 0..1		| Integer	| Number of occupied seats.		|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Seat/UrlSitting | 0..1 | String	| Specify the interface provider access where client can choose seat. |
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Confirmation | 0..1 | 	| Contains the locator of confirmation. | 
| @id                     		| 0..1		| String	| Locator.		|
| @eLocatorType                      		| 0..1		| 	| Locator Type (Client / Provider / Ticket / Other) .		|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/DynamicToken | 0..1 | String | If openAvailability is true, dynamicToken will be Nothing/Empty. | 
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Issue | 0..1 |   		| Contains information about ticket printing.	|
| @Mandatory               		| 0..1		| Boolean	| Specifies if the ticket should be printed by the client. |
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Issue/Tickets | 0..1 |   		| Contains information about ticket printing.	|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Issue/Tickets/Ticket | 0..n |   		| Contains information about every ticket.	|
| @id               		| 0..1		| String	| Ticket ID. |
| @url               		| 0..1		| String	| Tieket URL. |
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Attributes | 0..1 |   	| Attributes that we need send between calls.	|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Attributes/Attribute | 0..n | | Attributes that we need send between calls. |
| @key               		| 0..1		| String	| Attribute identifier. |
| @value               		| 0..1		| String	| Attribute content. |
| TourActivityInfo/Extra/Pricing/Promotions | 0..1 | | Promotions related to the pricing. |
| TourActivityInfo/Extra/Pricing/Promotion | 1..n | | Promotion related to the pricing. |
| @code               		| 1..1		| String	| Promotion code. |
| @pricePerPax               		| 0..1		| Boolean	| Promotion price per passenger. |
| @minPax               		| 0..1		| Integer	| Promotion minimum passenger number. |
| @maxPax               		| 0..1		| Integer	| Promotion maximum passenger number. |
| @description               		| 0..1		| String	| Promotion description. |
| TourActivityInfo/Extra/Pricing/ParticipantCategory/Conditions| 0..1	| | List of conditions|
| TourActivityInfo/Extra/Pricing/ParticipantCategory/Conditions/Condition| 1..n	| | Elements of the list |
| @conditionType | 1..1 | | (see table eConditionType) |
| TourActivityInfo/Extra/Pricing/Promotion/Summary | 0..n | | Promotion summary price (same as the explained on "TourActivityInfo/Extra/Pricing/Summary"). |
| TourActivityInfo/Extra/Pricing/Promotion/ParticipantCategory | 0..1 | | Affected participantCategories. |
| TourActivityInfo/Extra/Pricing/Promotion/ParticipantCategory/ParticipantCategory | 0..n | | Affected participantCategory (same as the explained in "TourActivityInfo/Extra/Pricing/ParticipantCategory"). |
| TourActivityInfo/Extra/Pricing/ValidCountries| 0..1 | | List of valid countries to sell. |
| TourActivityInfo/Extra/Pricing/ValidCountries/ValidCountries| 1..n | | List of valid countries to sell. |
| @code                   		| 1  		| String | Country code. (ISO Alpha-2) 	|
| @name                   		| 1  		| String | Country name.  	|
| TourActivityInfo/Schedule		| 0..1      	|		| Information about dates range on which you can enjoy the activity. |
| TourActivityInfo/Schedule/Summary	| 0..1      	|		| Information dates range that you apply availability. |
| @Start                   		| 1  		| Date		| Start date that you apply availability. 	|
| @End                     		| 0..1  		| Date		| End date that you apply availability.		|
| TourActivityInfo/Schedule/Detail	| 0..1    	|		| Information when activity starts and attributes that we need send between calls. |
| TourActivityInfo/Schedule/Detail/OperationTimes | 0..1 |		| Information when activity starts.		|
| TourActivityInfo/Schedule/Detail/OperationTimes/OperationTime | 1..n || Information when activity starts.		|
| @Start                   		| 1..1		| Date		| Start date activity.				|
| @End                     		| 1..1		| Date		| End date activity. 				|
| @totalSeats                      		| 0..1		| Integer	| Number of seats.		|
| @totalSeatsForSale                      		| 0..1		| Integer	| Number of salable seats.		|
| @occupiedSeats                      		| 0..1		| Integer	| Number of occupied seats.		|
| TourActivityInfo/Schedule/Detail/OperationTimes/OperationTime/Duration                     		| 0..1		| 	| Duration of the activity.		|
| @value                      		| 0..1		| Integer	| Value of the duration.		|
| @unity                      		| 0..1		| Integer	| In which unit the value is expressed (Hours / Days / Weeks / Months / Minutes).		|
| TourActivityInfo/Schedule/Detail/TPA_Extensions | 0..1 |		| Necessary information that we need send between calls (same as the explained in "TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions"). |
| TourActivityInfo/CategoryAndType	| 1..1    	|		| Category of Ticket.				|
| TourActivityInfo/CategoryAndType/Category | 0..1    	|		| Category of Ticket.				|
| @Code                    		| 1..1		| String	| A category code from a predefined list, if Extension = "Other" then will be provider code. |
| @Extension               		| 1..1		| String	| Enter a category here if you have selected "Other" from the pre-defined list. |
| TourActivityInfo/CategoryAndType/TypeTags | 1..1    	|		| Ticket type related tags.				|
| TourActivityInfo/CategoryAndType/TypeTag | 1..n    	|		| Ticket type related tags.				|
| @id               		| 1..1		| String	| Tag id. |
| @name               		| 1..1		| String	| Tag name. |
| TourActivityInfo/Location                 		| 1..1      	|		| The location of the tour/ activity.		|
| TourActivityInfo/Location/Region          		| 0..1      	|		| Describes regional information.		|
| @RegionCode              		| 1..1  		| String	| Specifies a region code.			|
| @RegionName              		| 0..1  		| String	| Specifies the region name.			|
| TourActivityInfo/Location/Position         		| 0..1    	|		| Geolocation of the activity. |
| @Latitude               		| 1..1		| String	| Latitude coordinate. |
| @Longitude               		| 1..1		| String	| Longitude coordinate. |
| TourActivityInfo/Location/PositionArea         		| 0..1    	|		| List of positions that define the activity area. |
| TourActivityInfo/Location/PositionArea/Position         		| 1..n    	|		| Geolocation of the activity (same as the explained in "TourActivityInfo/Location/Position"). |
| TourActivityInfo/Location/Address         		| 0..1    	|		| Identifies the physical address of the tour departure and/or activity location. |
| TourActivityInfo/Location/Address/AddressLine		| 1..1		| String	| These lines will contain free form address details.|
| TourActivityInfo/Location/Address/CityName		| 0..1		| String	| City name.			|
| TourActivityInfo/Location/Address/PostalCode		| 0..1		| String	| Post Office Code number.			|
| TourActivityInfo/Location/Address/County  		| 0..1		| String	| County or Region Name.			|
| TourActivityInfo/Location/Address/CountyIso  		| 0..1		| String	| Country code (ISO Alpha-2)			|
| TourActivityInfo/Location/Address/CountyName  		| 0..1		| String	| County Name.			|
| TourActivityInfo/Locoation/Address/StateProv		| 0..1		| String	| State of province.			|
| TourActivityInfo/PickupDropoffList		| 0..1		| 	| List of Pickup and Dropoff locations.			|
| TourActivityInfo/PickupDropoffList/PickupDropoff		| 1..n		| 	| Pickup and/or Dropoff location.			|
| @PickupInd		| 1..1		| Boolean	| Tells if Pickup location is specified.			|
| @DropoffInd		| 1..1		| Boolean	| Tells if Dropoff location is specified.			|
| @OtherInfo		| 0..1		| String	| Extra information.			|
| @dateTimePickup		| 0..1		| Date	| Pickup date.			|
| @dateTimeDropOff		| 0..1		| Date	| Dropoff date.			|
| @locationName		| 0..1		| String	| Name of the location.			|
| @AddressLine		| 1..1		| String	| Address of the location .			|
| TourActivityInfo/PickupDropoffList/PickupDropoff/PickupValidity		| 0..1		| 	| Tells when location is valid.			|
| @FromDate		| 0..1		| Date	| Begining of the valid period.			|
| @ToDate		| 0..1		| Date	| End of the valid period.			|
| TourActivityInfo/PickupDropoffList/PickupDropoff/PickupValidity/DaysOfWeek		| 0..1		| 	| Days when location is valid.			|
| TourActivityInfo/PickupDropoffList/PickupDropoff/PickupValidity/DaysOfWeek/DayOfWeek		| 1..n		| String	| Day when location is valid.			|
| TourActivityInfo/PickupDropoffList/PickupDropoff/PickupPosition		| 0..1		| 	| Position of the location (same as the explained in "TourActivityInfo/Location/Position").			|
| TourActivityInfo/PickupDropoffList/PickupDropoff/PickupArea		| 0..1		| 	| Pickup and/or Dropoff location area (same as the explained in "TourActivityInfo/Location/PositionArea").			|
| TourActivityInfo/ParticipantCount		| 0..n		| 	| Groups of participants on the activity (Not used on TourActivitySearchRS).			|
| @refId		| 1..1		| Integer	| Reference to the ParticipantCategory.			|
| @Age		| 1..1		| Integer	| Participant Age.			|
| @Quantity		| 1..1		| Integer	| Quantity of passengers of this type.			|
| TourActivityInfo/ParticipantCount/Price		| 0..1		| 	| Price per participant.			|
| @Amount		| 1..1		| Decimal	| Price amount.			|
| @currencyCode		| 1..1		| String	| Currency ISO code.			|
| @IsBinding		| 0..1		| Boolean	| True if it is a binding price.			|
| @Commission		| 0..1		| Decimal	| Commission applied to the price.			|
| @referencePriceAmount		| 0..1		| Decimal	| Quantity of passengers of this type.			|
| TourActivityInfo/Description              		| 1..1    	|		| Images and descriptions of the activity.	|
| TourActivityInfo/Description/ShortDescription		| 1..1		| String	| Short description of the activity.		|
| TourActivityInfo/Description/LongDescription		| 0..1		| String	| Long description of the activity.		|
| TourActivityInfo/Description/Multimedia   		| 0..1    	|		| Information and url images. 			|
| TourActivityInfo/Description/Multimedia/MultimediaDescription | 0..1   | 		| Information and url images.			|
| TourActivityInfo/Description/Multimedia/MultimediaDescription/ImageItems | 0..1 |   	| Information and url images.			|
| TourActivityInfo/Description/Multimedia/MultimediaDescription/ImageItems/ImageItem | 0..n || Information for each image.		|
| TourActivityInfo/Description/Multimedia/MultimediaDescription/ImageItems/ImageItem/ImageFormat | 0..n || Url image.			|
| TourActivityInfo/Description/Multimedia/MultimediaDescription/ImageItems/ImageItem/ImageFormat/URL | 0..1 | String | Access to image url.|
| TourActivityInfo/Pricing                  		| 0..1      	|		| Price for option if OpenAvailability = false and price for each  participantCategory if OpenAvailability = true (same as the explained in "TourActivityInfo/Extra/Pricing"). (not in use) |
| TourActivityInfo/SupplierOperator                  		| 0..n      	|		| Information about the offices/operators. |
| TourActivityInfo/SupplierOperator/Name                  		| 0..1      	|		| Name of the office/operator. |
| @Code               		| 1..1      	| String	| Office/operator code. 		|
| @CompanyShortName               		| 0..1      	| String	| Office/operator short name. 		|
| @CodeContext               		| 0..1      	| String	| Specifies if it is an "Internal" or "External" office/operator. 		|
| TourActivityInfo/SupplierOperator/ContactPhoneList                  		| 0..1      	|		| Contact phones of the office/operator. |
| TourActivityInfo/SupplierOperator/ContactPhoneList/ContectPhone                  		| 0..n      	|		| Contact phone of the office/operator. |
| @phoneNumber               		| 1..1      	| String	| Phone number itself. 		|
| @phoneTechType               		| 0..1      	| 	| Phone type (Voice, Data, Fax, Pager, Mobile, TTY, Telex, VoiceOverIP). 		|
| @phoneUseType              		| 0..1      	| 	| Phone use (Emergency, Travel Arranger, Daytime contact, Evening contact, Contact, Toll free number, Guest use, Pickup contact, Electronic document reference). 		|
| TourActivityInfo/Communication                 		| 0..1      	|		| Node used for client-provider communication. 		|
| TourActivityInfo/Communication/Conversations                 		| 0..n      	|		| Conversations on a communication. 		|
| TourActivityInfo/Communication/Conversations/Conversation                 		| 0..n      	|		| Elements of a conversation. 		|
| @id               		| 1..1      	| String	| Conversations on a communication. 		|
| TourActivityInfo/Communication/Conversations/Conversation/Attributes                 		| 0..1      	|		| Attribute list, containing information of the communication (same as explained in "TourActivityInfo/Extra/Pricing/ParticipantCategory/TPA_Extensions/Attributes"). 		|
| TourActivityInfo/ActivityRates                 		| 0..1      	|		| Specifies the quantity of 		|
| TourActivityInfo/ActivityRates/ActivityRate                 		| 0..n      	|		| Specifies the quantity of 		|
| @RateID            		| 1..1		| String	| Indicates the code of the rate.			|
| @name            		| 1..1		| String	| Indicates the name of the rate.			|
| @isNominative            		| 0..1		| Boolean	| True if it is a nominative rate.			|
| @hiddenRate            		| 0..1		| Boolean	| True if it is a hidden/opaque rate.			|
| @release            		| 0..1		| Integer	| 		|
| @dateFrom            		| 0..1		| Date	| Indicates the beginning of the Activity Rate.			|
| @dateTo            		| 0..1		| Date	| Indicates the ending of the Activity Rate.			|
| TourActivityInfo/ActivityRates/ActivityRate/CancellationPolicies		| 0..1      	| 		| List of rate's cancellation policies. |
| TourActivityInfo/ActivityRates/ActivityRate/CancellationPolicies/CancellationPolicy		| 1..n      	| 		| Cancellation policy. |
| @amount		| 0..1   	|String 		| Amount to pay to cancellation. |
| @noRefundable		| 1..1   	|Boolean | (see table noRefundable) |
| @penaltyType		| 1..1   	|Enum | (see table ePenaltyType) |
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants		| 0..1      	| 		| Price per passenger category. |
| @minPax            		| 0..1		| Date	| Rate minimum passenger number.			|
| @maxPax            		| 0..1		| Date	| Rate maximum passenger number.			|
| TourActivityInfo/ActivityRates/ActivityRate/RateParticipants/ParticipantCategory		| 0..n      	| 		| ParticipantCategories on the rate (same as the explained in "TourActivityInfo/Extra/Pricing/ParticipantCategory").|


### Types tables

#### eExtensionPricingType 
| **Type** | **Description** |
| --------- | --------------- | 
| Other | |
| PerGroupPerDay | Amount per group day|
| PerPersonPerDay | Amount per person day|
| PerTotal |  Total amount|
| PerPerson | Amount per person |

#### ePricingType 
| **Type** | **Description** |
| ---------| --------------- | 
| Other | |
| PerGroup | Amount per group|
| PerPerson | Amount per person|

#### eQualifierType 
| **Type** | **Description** |
| --------- | --------------- | 
| Adult | |
| Children | |
| Infant | |
| Other | Is mandatory specify Extension provider type. |
| Young | |
| Senior | |

#### eTaxId 
| **Type** | **Description** |
| --------- | --------------- | 
| V | |
| G | |
| O | |

#### ePenaltyType 
| **Type** | **Description** |
| --------- | --------------- | 
| PERCENTUAL | Amount is % |
| PER_DAY | Total Amount is per day |
| TOTAL_AMOUNT | Amount is the total to pay|

#### eConditionType
| **Type** | **Description** |
| --------- | --------------- | 
| Generic | |
| Disabled | |
| Student | |
| Resident | |
| LargeFamility | |
| Retired | |

