---
title: Valuation
keywords: transportation, data structure, flights, valuation
search: Transportation - Flights - Data Structure - Valuation
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/flights/valuation
---



### Method Goals


This method aims to return the total price of the selected Option. This
Option **must** be selected in the previous step ( Availability ).


### Request Format


The Valuation request can be done by two different ways: with a single
Itinerary or multiple Itineraries.

-   Multiple Itineraries :

In this method, the request will have as many Itineraries as there are
Journeys . Mainly used for **one-way** tickets. There's a total price
for each selected SegmentInfo.

-   Single Itinerary with one or more Journeys :

This case is used for **round trip** tickets. There's only one
**totalAmount** (fare, tax and discount) for all the selected Journey .

The decision of which strategy to take is done beforehand, depending on
the business rules.



### Response Format


The returned XML is very similar to the result in the Availability call.
The main difference is that there is only one node Option returned. The
totalAmount is definitive. Sometimes this method will fail since the
selected Option at Availability may not be available for this stage.



### Remarks


Some suppliers do not provide this method. If this is the case then all
of the information **must** be returned in the Availability, therefore
the Valuation call will do the Availability process again filtered by
the selected Option.




### ValuationRQ Description



| **Element**						| **Number**| **Type**	| **Description**														  |
| --------------------------------- | --------- | --------- | ----------------------------------------------------------------------- |
| ValuationRQ                 		| 1     	|			| Root node.|
| Itineraries                 		| 1     	|			| Contains a list of Itineraries.|
| Itineraries/Itinerary       		| 1..n    	|			| Details of the Itinerary.|
| @id                    			| 1 		| Integer	| Unique identifier of the Itinerary.|
| @carrier               			| 1 		| String	| Validating carrier.|
| @fareRef	               			| 0..1 		| String	| Reference identifier to the original Fare.|
| @hasObFees             			| 0..1 		| Boolean	| If true then there is an extra fee for using credit card.|
| Itineraries/Itinerary/Conditions	| 0..1		|			| Contains a list of Fare Conditions.|
| Itineraries/Itinerary/Conditions/<br>Condition			| 1..n || Contains details of the Condition that applies to the condition.|
| @carrier							| 0..1		| String	| Carrier applying the condition.|
| @code								| 0..1		| String	| Code of the condition.|
| @id								| 0..1		| String	| Unique id of the condition.|
| @language							| 0..1		| String	| Language in which the condition is written.|
| Itineraries/Itinerary/Conditions/<br>Condition/Text		| 0..1 || Description of the condition.|
| Itineraries/Itinerary/Conditions/<br>Condition/Paragraph	| 0..n || List of Sentences and titles.|
| @title							| 0..1		| String	| Title content.|
| Itineraries/Itinerary/Conditions/<br>Condition/Paragraph/Sentence	| 0..n | String	| List of Sentences contents.|
| Itineraries/Itinerary/Journeys	| 1    		|			| Contains a list of Journeys.|
| Itineraries/Itinerary/Journeys/Journey					| 1..n    	|| Contains details of the Journeys.|
| @id								| 1 		| Integer	| Unique identifier of the Journey in scope.|
| @duration							| 0..1 		| Integer	| Duration of the Journey in minutes. |
| @familyFare						| 0..1 		| String	| Family fare name of the Journey.|
| @checkinStart						| 0..1 		| Date		| Checkin start date. Example: 2019-04-15T18:25:00|
| @checkinEnd						| 0..1 		| Date		| Checkin end date. Example: 2019-04-15T18:25:00|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments		| 1 || Contains a list of Segments associated to the Journey.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment | 1..n   || Contains details of the SegmentInfo.|
| @id								| 1 		| Integer	| Unique SegmentInfo identifier.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentInfo | 1 || Contains information of the Segment.|
| @id								| 1 		| Integer	| Unique identifier of the SegmentInfo.|
| @transportationId					| 1 		| String	| Unique Id of the transportation.|
| @operatingCarrier      			| 1 		| String	| Company which operates the transportation.|
| @marketingCarrier      			| 1 		| String	| Company which commercializes the transportation.|
| @departureDate         			| 1 		| Date		| Departure date. Example: 2019-04-15T18:25:00|
| @arrivalDate           			| 1 		| Date		| Arrival date. Example: 2019-04-15T18:25:00|
| @transportationType    			| 0..1 		| [Transport type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#transportation-type)	| Transport type|
| @transportationName    			| 0..1 		| String	| Name of the transportation.|
| @transportationCode				| 0..1		| String	| Code of the transportation.|
| @departureTerminal				| 0..1 		| String	| Departure terminal.|
| @arrivalTerminal       			| 0..1 		| String	| Arrival terminal.|
| @segmentDuration       			| 0..1 		| Integer	| Transport duration ( in minutes ).|
| @segmentStatus					| 0..1		| [Segment Status type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#segment-status-type)	| Segment Status|
| @planeType						| 0..1 		| String	| Plane type. Flights parameter.|
| @maxCheckinDate					| 0..1 		| Date		| Maximum date to make the check-in. Not filled by integrations|
| @hasTechnicalStop					| 0..1		| Boolean	| If true, the segment has a technical stop.|
| @electronicTicket      			| 0..1 		| Boolean	| If true, the segment uses a electronic ticket.|
| @secureFlight          			| 0..1		| Boolean	| If true, the provider requires extra information of the passengers. Flights parameter.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/OriginLoc | 1     	|| Origin location.|
| @code                  			| 1 		| String	| Location code.|
| @type                  			| 0..1 		| [Location type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| @name								| 0..1 		| String	| Location full name.|
| @radius							| 0..1		| Integer	| Area radius from location.|
| @cityCode              			| 0..1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/OriginLoc/<br>AlternativeLocations	| 0..1		|| Contains a list of AlternativeLocations.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/OriginLoc/<br>AlternativeLocations/AlternativeLocation	| 1..n	|| Contains the information of the alternative location.|
| @code								| 1			| String	| Location code.|
| @cityCode        					| 0..1  	| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @name								| 0..1		| String	| Location long name.|
| @type								| 0..1 		| [Location type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/DestinationLoc | 1   || Destination location.|
| @code                  			| 1 		| String	| Location code.|
| @type								| 0..1 		| [Location type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| @name								| 0..1 		| String	| Location full name.|
| @radius							| 0..1		| Integer	| Area radius from location.|
| @cityCode              			| 0..1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/<br>DestinationLoc/AlternativeLocations	| 0..1		|| Contains a list of AlternativeLocations.
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/<br>DestinationLoc/AlternativeLocations/<br>AlternativeLocation	| 1..n	|| Contains the information of the alternative location.|
| @code								| 1			| String	| Location code.|
| @cityCode        					| 0..1  	| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @name								| 0..1		| String	| Location long name.|
| @type								| 0..1 		| [Location type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/TechnicalStops | 0..1 || Contains a list of TechnicalStops.|
| @totalTechnicalStops				| 1 		| Integer	| Total number of TechnicalStops.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/TechnicalStops/<br>TechnicalStop | 0..n || Contains the details of the TechnicalStop.|
| @location							| 1 		| String	| TechnicalStop location.|
| @stopDate							| 1 		| Date		| Approx. stop date and time. Example: 2019-04-15T18:25:00|
| @departureDate					| 1 		| Date		| Approx. departure date and time. Example: 2019-04-15T18:25:00|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses | 1 | | Contains a list of SegmentClasses.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses/<br>SegmentClass | 1..n || Contains details of the SegmentClass.|
| @cabinClass            			| 1 		| [Cabin Class type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#cabin-class-type)	| Cabin class of the seat|
| @paxRef               	 		| 1 		| Integer	| Passenger reference.|
| @fareType              			| 1 		| [Fare type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Fare type.|
| @class                 			| 0..1 		| String	| Fare class.|
| @fareBasis             			| 0..1 		| String	| Identifier of the fare.|
| @avail                 			| 0..1 		| Integer	| Available seats remaining for this class (In flights, the maximum is 9).|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses/<br>SegmentClass/Modifiable | 0..1 || Contains the information of the modifiable fare.|
| @modifiable                 		| 1 		| Boolean	| If true, the fare allows this modification.|
| @Description                 		| 0..1 		| String	| Modification description.|
| @amount                 			| 0..1 		| Decimal	| Modification amount.|
| @currency                 		| 0..1 		| String	| Modification currency.|
| @amountType                 		| 0..1 		| [Amount type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-type)	| Modification amount type.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses/<br>SegmentClass/CancellationPolicies | 0..1 || Contains a list of CancellationPolicies.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses/<br>SegmentClass/CancellationPolicies/<br>CancellationPolicy | 1..n ||Contains details of the CancelationPolicy.	|
| @refundable                 		| 1 		| Boolean	| If true, the fare allows the refundation.|
| @fromDate                 		| 0..1 		| Date		| Date of the begining of the policy. Example: 2019-04-15T18:25:00|
| @amount                 			| 0..1 		| Decimal	| Policy amount.|
| @currency                 		| 0..1 		| String	| Policy currency.|
| @amountType                 		| 0..1 		| [Amount type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-type)	| Policy amount type|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/ReservationTokens | 0..1 |  | Specific attribute used for each provider.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/ReservationTokens/<br>Attribute | 1..n || Type of attribute.|
| @key								| 1 		| String	| Contains the keyword/ Id to identify a parameter.|
| @value							| 1 		| String	| Contains the value of the parameter.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/CheckinInformation | 0..1 || Checkin information.|
| @openingTime						| 0..1 		| Date		| Checkin opening time. Example: 2019-04-15T18:25:00|
| @closingTime						| 0..1 		| Date		| Checkin closing time. Example: 2019-04-15T18:25:00|
| @estimatedCheckinTime				| 0..1 		| Date		| Estimated checkin time.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/CheckinInformation/<br>Status | 0..1 || Status checkin information.|
| @isAvailable						| 0..1 		| Boolean	| If true, the cheking is available.|
| @direction						| 0..1 		| [Direction type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#direction-type)	| Direction of the journey about to checkin.|
| @status							| 0..1 		| [Checkin Status type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#checkin-status-type)	| Status of the checkin.|
| Itineraries/Itinerary/AmountBreakdown  					| 1     	|| Breakdown of the fare amount.|
| @currency							| 1 		| String	| Currency code of the fare.|
| @totalAmount           			| 1 		| Decimal	| Total amount. with taxes and other charges included.|
| @notCommissionableAmount			| 0..1 		| Decimal	| Total amount that can not be commissioned.|
| @commission            			| 0..1 		| Decimal	| Commission.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakdowns | 0..1   || Contains a list of breakdown amounts ( taxes, mandatory charges.. ).|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakdowns/ChargeBreakdown | 1..n || Contains details of the BreakdownAmount.|
| @amount                			| 1    	 	| Decimal	| Charge amount.|
| @type                  			| 0..1 		| [Charge type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#charge-type)	| The type of the charge|
| @included							| 0..1		| Boolean	| If true, the charge is included to the total fare amount.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakdowns/ChargeBreakdown<br>/Concept | 0..1 || Contains details of the charge.|
| @id                    			| 0..1 		| String	| Unique id of the Concept.|
| @language              			| 0..1 		| String	| Language. ISO 3166-1 alpha-2 format lowercase.|
| @carrier              			| 0..1 		| String	| Carrier.|
| @code              				| 0..1 		| String	| Concept code.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakDowns/ChargeBreakdown<br>/Concept/Text | 0..1 | String | Remarks.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakDowns/ChargeBreakdown<br>/Concept/Paragraph | 0..n || Contains a list of Sentences and titles.|
| @title							| 0..1		| String	| Title.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakDowns/ChargeBreakdown/<br>Concept/Paragraph/Sentence | 0..n | String | Sentence.|
| Itineraries/Itinerary/AmountBreakdown/<br>PaxBreakdown	| 1    	|| Contains a list of breakdown amounts for each passenger ( ADT amount, etc. ).|
| Itineraries/Itinerary/AmountBreakdown/<br>PaxBreakdowns/PaxBreakdown | 1..n || Contains details of breakdown amounts for each passenger.|
| @paxType               			| 1 		| [Passenger type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)	| Passenger type.|
| @amount                			| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger.|
| @taxes                 			| 1 		| Decimal	| If they exist, taxes are applied for this passenger type.|
| @taxesDU                			| 0..1 		| Decimal	| DU taxes.|
| @fees                				| 0..1 		| Decimal	| Fees.|
| Itineraries/Itinerary/AmountBreakdown/<br>PaxBreakdowns/PaxBreakdown/<br>Taxes | 0..1 || Contains a list of Taxes.|
| Itineraries/Itinerary/AmountBreakdown/<br>PaxBreakdowns/PaxBreakdown/<br>Taxes/Tax | 1..n || Code and amount of each tax.|
| @code								| 1			| String	| Code.|
| @amount							| 1			| Decimal	| Amount.|
| Itineraries/Itinerary/PaxConfigurations					| 1     	|| Contains a list of PaxConfiguration.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration | 1..n || Contains details of PaxConfiguration.|
| @id                    			| 1 		| Integer	| Unique identifier of the PaxConfiguration.|
| @paxRef                			| 1 		| Integer	| Reference to the passenger Id from the request.|
| @paxType               			| 1 		| [Passenger type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)	| Passenger type based on the age of the passenger.|
| @age                   			| 0..1 		| Integer	| Age of the passenger.|
| @nationality						| 0..1 		| String	| Nationality of the passenger.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses | 0..1 || Applied discounts.|
| @resident              			| 0..1 		| [Resident discount type.](#reservation-enumerate-description)	| Resident discount type|
| @largeFamily           			| 0..1 		| [Large Family discount type.](#reservation-enumerate-description)	| Family discount type.|
| @discountCardCode					| 0..1		| String	| Discount card code.|
| @discountCard						| 0..1		| [Discount card type](#reservation-enumerate-description)	| Discount card type|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses/<br>DiscountCards	| 0..1	|| Contains a list of DiscountCards.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses/<br>DiscountCards/DiscountCard| 1..n	|| DiscountCard details.|
| @type								| 1			| [Discount card type](#reservation-enumerate-description)	| Discount card type |
| @code								| 0..1		| String	| Discount card code.|
| @id								| 0..1		| String	| Unique identifier of discound card.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses/<br>PaxTypeCodes		| 0..1	|| Contains a list of PaxTypeCodes.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses/<br>PaxTypeCodes/PaxTypeCode	| 1..n	|| Contains the code type of the passenger.|
| @code								| 1			| String	| Code type of the passenger.|
| Preferences						| 0..1		|			| Valuation preferences.|
| @paymentMethods					| 0..1		| Boolean	| If true, the Valuation will return the list of payment methods available for the Itineraries.|
| @baggageTypes						| 0..1		| Boolean	| If true, the Valuation will return the list of baggage allowance available for the Itineraries.|
| @specialSupplements				| 0..1		| Boolean	| If true, the Valuation will return the list of special suplements available for the Itineraries.|
| @extendedFareRules				| 0..1		| Boolean	| If true, the Valuation will return a list of detailed fare rules of the Itineraries.|
| @summarizedFareRules				| 0..1		| Boolean	| If true, the Valuation will return a list of summarired fare rules of the Itineraries.|
| @seating							| 0..1		| Boolean	| If true, the Valuation will return the list of seats available in the plane.|
| @paymentByInstalments| 0..1		| Boolean	| If true, the Valuation will return the list of partial payment rules (instalments) available for the Itineraries.|



### ValuationRS Description



| **Element**						| **Number**| **Type**	| **Description**															|
| --------------------------------- | --------- | ---------	| --------------------------------------------------------------------------|
| ValuationRS                 		| 1     	|			| Root node.|
| Itineraries                 		| 1     	|			| Contains a list of Itineraries.|
| Itineraries/Itinerary       		| 1..n    	|			| Details of the Itinerary.|
| @id                    			| 1 		| Integer	| Unique identifier of the Itinerary.|
| @carrier               			| 1 		| String	| Validating carrier.|
| @fareRef	               			| 0..1 		| String	| Reference identifier to the original Fare.|
| @hasObFees             			| 0..1 		| Boolean	| If true then there is an extra fee for using credit card.|
| Itineraries/Itinerary/Conditions	| 0..1		|			| Contains a list of Fare Conditions.|
| Itineraries/Itinerary/Conditions/<br>Condition			| 1..n || Contains details of the Condition that applies to the condition.|
| @carrier							| 0..1		| String	| Carrier applying the condition.|
| @code								| 0..1		| String	| Code of the condition.|
| @id								| 0..1		| String	| Unique id of the condition.|
| @language							| 0..1		| String	| Language in which the condition is written.|
| Itineraries/Itinerary/Conditions/<br>Condition/Text		| 0..1 || Description of the condition.|
| Itineraries/Itinerary/Conditions/<br>Condition/Paragraph	| 0..n || List of Sentences and titles.|
| @title							| 0..1		| String	| Title content.|
| Itineraries/Itinerary/Conditions/<br>Condition/Paragraph/Sentence	| 0..n | String	| List of Sentences contents.|
| Itineraries/Itinerary/Journeys	| 1    		|			| Contains a list of Journeys.|
| Itineraries/Itinerary/Journeys/Journey					| 1..n    	|| Contains details of the Journeys.|
| @id								| 1 		| Integer	| Unique identifier of the Journey in scope.|
| @duration							| 0..1 		| Integer	| Duration of the Journey in minutes. |
| @familyFare						| 0..1 		| String	| Family fare name of the Journey.|
| @checkinStart						| 0..1 		| Date		| Checkin start date. Example: 2019-04-15T18:25:00|
| @checkinEnd						| 0..1 		| Date		| Checkin end date. Example: 2019-04-15T18:25:00|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments		| 1 || Contains a list of Segments associated to the Journey.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment | 1..n   || Contains details of the SegmentInfo.|
| @id								| 1 		| Integer	| Unique SegmentInfo identifier.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentInfo | 1 || Contains information of the Segment.|
| @id								| 1 		| Integer	| Unique identifier of the SegmentInfo.|
| @transportationId					| 1 		| String	| Unique Id of the transportation.|
| @operatingCarrier      			| 1 		| String	| Company which operates the transportation.|
| @marketingCarrier      			| 1 		| String	| Company which commercializes the transportation.|
| @departureDate         			| 1 		| Date		| Departure date. Example: 2019-04-15T18:25:00|
| @arrivalDate           			| 1 		| Date		| Arrival date. Example: 2019-04-15T18:25:00|
| @transportationType    			| 0..1 		| [Transport type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#transport-type)	| Transport type.|
| @transportationName    			| 0..1 		| String	| Name of the transportation.|
| @transportationCode				| 0..1		| String	| Code of the transportation.|
| @departureTerminal				| 0..1 		| String	| Departure terminal.|
| @arrivalTerminal       			| 0..1 		| String	| Arrival terminal.|
| @segmentDuration       			| 0..1 		| Integer	| Transport duration ( in minutes ).|
| @segmentStatus					| 0..1		| [Segment Status type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#status-segment-type)	| Segment status.|
| @planeType						| 0..1 		| String	| Plane type. Flights parameter.|
| @maxCheckinDate					| 0..1 		| Date		| Maximum date to make the check-in. Not filled from provider's response|
| @hasTechnicalStop					| 0..1		| Boolean	| If true, the segment has a technical stop.|
| @electronicTicket      			| 0..1 		| Boolean	| If true, the segment uses a electronic ticket.|
| @secureFlight          			| 0..1		| Boolean	| If true, the provider requires extra information of the passengers. Flights parameter.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/OriginLoc | 1     	|| Origin location.|
| @code                  			| 1 		| String	| Location code.|
| @type                  			| 0..1 		| [Location type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| @name								| 0..1 		| String	| Location full name.|
| @radius							| 0..1		| Integer	| Area radius from location.|
| @cityCode              			| 0..1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/OriginLoc/<br>AlternativeLocations	| 0..1		|| Contains a list of AlternativeLocations.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/OriginLoc/<br>AlternativeLocations/AlternativeLocation	| 1..n	|| Contains the information of the alternative location.|
| @code								| 1			| String	| Location code.|
| @cityCode        					| 0..1  	| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @name								| 0..1		| String	| Location long name.|
| @type								| 0..1 		| [Location type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/DestinationLoc | 1   || Destination location.|
| @code                  			| 1 		| String	| Location code.|
| @type								| 0..1 		| [Location type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| @name								| 0..1 		| String	| Location full name.|
| @radius							| 0..1		| Integer	| Area radius from location.|
| @cityCode              			| 0..1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/<br>DestinationLoc/AlternativeLocations	| 0..1		|| Contains a list of AlternativeLocations.
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/<br>DestinationLoc/AlternativeLocations/<br>AlternativeLocation	| 1..n	|| Contains the information of the alternative location.|
| @code								| 1			| String	| Location code.|
| @cityCode        					| 0..1  	| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @name								| 0..1		| String	| Location long name.|
| @type								| 0..1 		| [Location type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/TechnicalStops | 0..1 || Contains a list of TechnicalStops.|
| @totalTechnicalStops				| 1 		| Integer	| Total number of TechnicalStops.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/TechnicalStops/<br>TechnicalStop | 0..n || Contains the details of the TechnicalStop.|
| @location							| 1 		| String	| TechnicalStop location.|
| @stopDate							| 1 		| Date		| Approx. stop date and time. Example: 2019-04-15T18:25:00|
| @departureDate					| 1 		| Date		| Approx. departure date and time. Example: 2019-04-15T18:25:00|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses | 1 | | Contains a list of SegmentClasses.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses/<br>SegmentClass | 1..n || Contains details of the SegmentClass.|
| @cabinClass            			| 1 		| [Cabin Class type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#cabin-class-type)	| Cabin class of the seat|
| @paxRef               	 		| 1 		| Integer	| Passenger reference.|
| @fareType              			| 1 		| [Fare Class type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#fare-class-type)	| Fare type.|
| @class                 			| 0..1 		| String	| Fare class.|
| @fareBasis             			| 0..1 		| String	| Identifier of the fare.|
| @avail                 			| 0..1 		| Integer	| Available seats remaining for this class (In flights, the maximum is 9).|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses/<br>SegmentClass/Modifiable | 0..1 || Contains the information of the modifiable fare.|
| @modifiable                 		| 1 		| Boolean	| If true, the fare allows this modification.|
| @Description                 		| 0..1 		| String	| Modification description.|
| @amount                 			| 0..1 		| Decimal	| Modification amount.|
| @currency                 		| 0..1 		| String	| Modification currency.|
| @amountType                 		| 0..1 		| [Amount type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-type)	| Modification amount type.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses/<br>SegmentClass/CancellationPolicies | 0..1 || Contains a list of CancellationPolicies.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/SegmentClasses/<br>SegmentClass/CancellationPolicies/<br>CancellationPolicy | 1..n ||Contains details of the CancelationPolicy.	|
| @refundable                 		| 1 		| Boolean	| If true, the fare allows the refundation.|
| @fromDate                 		| 0..1 		| Date		| Date of the begining of the policy. Example: 2019-04-15T18:25:00|
| @amount                 			| 0..1 		| Decimal	| Policy amount.|
| @currency                 		| 0..1 		| String	| Policy currency.|
| @amountType                 		| 0..1 		| [Amount type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-type)	| Policy amount type|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/ReservationTokens | 0..1 |  | Specific attribute used for each provider.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/ReservationTokens/<br>Attribute | 1..n || Type of attribute.|
| @key								| 1 		| String	| Contains the keyword/ Id to identify a parameter.|
| @value							| 1 		| String	| Contains the value of the parameter.|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/CheckinInformation | 0..1 || Checkin information.|
| @openingTime						| 0..1 		| Date		| Checkin opening time. Example: 2019-04-15T18:25:00|
| @closingTime						| 0..1 		| Date		| Checkin closing time. Example: 2019-04-15T18:25:00|
| @estimatedCheckinTime				| 0..1 		| Date		| Estimated checkin time. Example: 2019-04-15T18:25:00|
| Itineraries/Itinerary/Journeys/Journey/<br>Segments/Segment/CheckinInformation/<br>Status | 0..1 || Status checkin information.|
| @isAvailable						| 0..1 		| Boolean	| If true, the cheking is available.|
| @direction						| 0..1 		| [Direction type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#direction-type)	| Direction of the journey about to checkin.|
| @status							| 0..1 		| [Checkin Status type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#status-segment-type)	| Status of the checkin.|
| Itineraries/Itinerary/AmountBreakdown  					| 1     	|| Breakdown of the fare amount.|
| @currency							| 1 		| String	| Currency code of the fare.|
| @totalAmount           			| 1 		| Decimal	| Total amount. with taxes and other charges included.|
| @notCommissionableAmount			| 0..1 		| Decimal	| Total amount that can not be commissioned.|
| @commission            			| 0..1 		| Decimal	| Commission.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakdowns | 0..1   || Contains a list of breakdown amounts ( taxes, mandatory charges.. ).|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakdowns/ChargeBreakdown | 1..n || Contains details of the BreakdownAmount.|
| @amount                			| 1    	 	| Decimal	| Charge amount.|
| @type                  			| 0..1 		| [Charge type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#charge-type)	| Charge type|
| @included							| 0..1		| Boolean	| If true, the charge is included to the total fare amount.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakdowns/ChargeBreakdown<br>/Concept | 0..1 || Contains details of the charge.|
| @id                    			| 0..1 		| String	| Unique id of the Concept.|
| @language              			| 0..1 		| String	| Language. ISO 3166-1 alpha-2 format lowercase.|
| @carrier              			| 0..1 		| String	| Carrier.|
| @code              				| 0..1 		| String	| Concept code.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakDowns/ChargeBreakdown<br>/Concept/Text | 0..1 | String | Remarks.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakDowns/ChargeBreakdown<br>/Concept/Paragraph | 0..n || Contains a list of Sentences and titles.|
| @title							| 0..1		| String	| Title.|
| Itineraries/Itinerary/AmountBreakdown/<br>ChargeBreakDowns/ChargeBreakdown/<br>Concept/Paragraph/Sentence | 0..n | String | Sentence.|
| Itineraries/Itinerary/AmountBreakdown/<br>PaxBreakdown	| 1    	|| Contains a list of breakdown amounts for each passenger ( ADT amount, etc. ).|
| Itineraries/Itinerary/AmountBreakdown/<br>PaxBreakdowns/PaxBreakdown | 1..n || Contains details of breakdown amounts for each passenger.|
| @paxType               			| 1 		| [Passenger type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)	| Passenger type.|
| @amount                			| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger.|
| @taxes                 			| 1 		| Decimal	| If they exist, taxes are applied for this passenger type.|
| @taxesDU                			| 0..1 		| Decimal	| DU taxes.|
| @fees                				| 0..1 		| Decimal	| Fees.|
| Itineraries/Itinerary/AmountBreakdown/<br>PaxBreakdowns/PaxBreakdown/<br>Taxes | 0..1 || Contains a list of Taxes.|
| Itineraries/Itinerary/AmountBreakdown/<br>PaxBreakdowns/PaxBreakdown/<br>Taxes/Tax | 1..n || Code and amount of each tax.|
| @code								| 1			| String	| Code.|
| @amount							| 1			| Decimal	| Amount.|
| Itineraries/Itinerary/PaxConfigurations					| 1     	|| Contains a list of PaxConfiguration.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration | 1..n || Contains details of PaxConfiguration.|
| @id                    			| 1 		| Integer	| Unique identifier of the PaxConfiguration.|
| @paxRef                			| 1 		| Integer	| Reference to the passenger Id from the request.|
| @paxType               			| 1 		| [Passenger type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)	| Passenger type based on the age of the passenger.|
| @age                   			| 0..1 		| Integer	| Age of the passenger.|
| @nationality						| 0..1 		| String	| Nationality of the passenger.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses | 0..1 || Applied discounts.|
| @resident              			| 0..1 		| [Resident Discount type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#resident-discount-type)	| Resident discount type|
| @largeFamily           			| 0..1 		| [Large Family Discount type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#large-family-discount-type)	| Family discount type.|
| @discountCardCode					| 0..1		| String	| Discount card code.|
| @discountCard						| 0..1		| [Discount Card type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#discount-card-type)	| Discount card type|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses/<br>DiscountCards	| 0..1	|| Contains a list of DiscountCards.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses/<br>DiscountCards/DiscountCard| 1..n	|| DiscountCard details.|
| @type								| 1			| [Discount Card type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#discount-card-type)	| Discount card type|
| @code								| 0..1		| String	| Discount card code.|
| @id								| 0..1		| String	| Unique identifier of discound card.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses/<br>PaxTypeCodes		| 0..1	|| Contains a list of PaxTypeCodes.|
| Itineraries/Itinerary/PaxConfigurations/<br>PaxConfiguration/AppliedBonuses/<br>PaxTypeCodes/PaxTypeCode	| 1..n	|| Contains the code type of the passenger.|
| @code								| 1			| String	| Code type of the passenger.|


### ValuationSupplements

This option is only shown when requested in Preferences node. The functionality is the same has SupplementsRQ.


| **Element**						| **Number**| **Type**	| **Description**																|
| --------------------------------- | --------- | ---------	| -----------------------------------------------------------------------------	|
| Supplements						| 0..1      |			| Supplements node in ValuationRS.|
| PaymentMethods                 	| 0..1    	|			| Contains a list of paymentMethods.|
| PaymentMethods/PaymentMethod 		| 1..n    	|			| Contains paymentMethod details.|
| @paymentType						| 1  		| [Supplement payment type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#supplement-payment-type)	| Payment Type|
| @cardType               			| 1  		| String	| Card type with a provider format.|
| PaymentMethods/PaymentMethod/<br>PaymentCharges			| 0..1      	|| Contains a list of Payment Charges.|
| PaymentMethods/PaymentMethod/<br>PaymentCharges/PaymentCharge | 1..n      || Charge applied to the Booking when this paymed method is used.|
| @fixAmount             			| 0..1 		| Decimal	| Total fixed amount.|
| @appliesFixAmount             	| 0..1 		| [Amount Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)	| The fixed amount application|
| @minFixAmount             		| 0..1 		| Decimal	| Minimal fixed amount.|
| @maxFixAmount             		| 0..1 		| Decimal	| Maximal fixed amount.|
| @minAmountPercentage             	| 0..1 		| Decimal	| Minimal percentage amount.|
| @maxAmountPercentage             	| 0..1 		| Decimal	| Maximal percentage amount.|
| @currency             			| 1 		| String	| Currency.|
| @percentage             			| 0..1 		| Decimal	| Total percentage amount.|
| @percentageApplied             	| 0..1 		| [Amount Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)	| The percentage amount application|
| BaggageTypes                 		| 0..1    	|			| Contains a list of Baggage information.|
| BaggageTypes/BaggageType			| 1..n    	|			| Baggage information.|
| @checkInType						| 1  		| [Checkin Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#checkin-type)		| Check-in type.|
| @appliesSegments        			| 1  		| [Segment Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#segment-applies-to-type)		| Segments in which is applied.|
| BaggageTypes/BaggageType/<br>References					| 0..1		||	References for the Baggage Type.|
| BaggageTypes/BaggageType/<br>References/SegmentReferences	| 0..1		||	Contains a list of segment references for the Baggage Type.|
| BaggageTypes/BaggageType/<br>References/SegmentReferences/<br>SegmentReference		| 1..n	||	Segment reference.|
| @itineraryRef						| 1 		| Integer	| Unique identifier of the Itinerary.|
| @journeyRef						| 1 		| Integer	| Unique identifier of the Journey.|
| @segmentRef						| 1 		| Integer	| Unique identifier of the Segment.|
| BaggageTypes/BaggageType/<br>References/PaxReferences		| 0..1	||	Contains a list of passenger references for the Baggage Type.|
| BaggageTypes/BaggageType/<br>References/PaxReferences/<br>PaxReference		| 1..n	||	Passenger reference.|
| @paxRef							| 1 		| String	| Reference to the passenger.|
| BaggageTypes/BaggageType/Baggage	| 1..n		|			| Details of the baggage.|
| @id                    			| 0..1 		| String	| Unique identifier of the Baggage.|
| @type                  			| 1 		| [Baggage Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#baggage-type)		| Type of baggage.|
| @quantity              			| 1 		| Integer	| Baggage quantity.|
| @maxWeightPerUnit					| 0..1 		| Integer	| Maximum weight of the baggage.| 
| @maxTotalWeight        			| 0..1 		| Integer	| Maximum weight of ALL the baggage.|
| @paymentInAirpot       			| 0..1 		| Boolean	| Determines whether the pay is in station.|
| @code								| 0..1 		| String	| Code of the Baggage.|
| @carrier               			| 0..1 		| String	| Carrier.|
| @needToken						| 0..1 		| Boolean	| Reserve token mandatory.|
| @reservationToken             	| 0..1 		| String	| Reserve token.|
| @description             			| 0..1 		| String	| Baggage description.|
| BaggageTypes/BaggageType/Baggage/<br>BaggageCharge		| 0..1 || Details of the baggage charge.|
| @fixAmount             			| 0..1 		| Decimal	| Total fixed amount.|
| @appliesFixAmount             	| 0..1 		| [Amount Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)	| The fixed amount application.|
| @minFixAmount             		| 0..1 		| Decimal	| Minimal fixed amount.|
| @maxFixAmount             		| 0..1 		| Decimal	| Maximal fixed amount.|
| @minAmountPercentage             	| 0..1 		| Decimal	| Minimal percentage amount.|
| @maxAmountPercentage             	| 0..1 		| Decimal	| Maximal percentage amount.|
| @currency             			| 1 		| String	| Currency.|
| @percentage             			| 0..1 		| Decimal	| Total percentage amount.|
| @percentageApplied             	| 0..1 		|  [Amount Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)	| The percentage amount application.|
| SpecialSupplements				| 0..1		|			| Contains a list of SpecialSupplements.|
| SpecialSupplements/SpecialSupplement						| 1..n	||	Contains information about the Special Supplement.|
| @id								| 0..1		| String	| Unique identifier of the supplement.|
| @code								| 0..1		| String	| Supplement code.|
| @height							| 0..1		| Integer	| Dimension of the supplement: height.|
| @width							| 0..1		| Integer	| Dimension of the supplement: width.|
| @length							| 0..1		| Integer	| Dimension of the supplement: length.|
| @weight							| 0..1		| Integer	| Dimension of the supplement: weight.|
| @quantity							| 0..1		| Integer	| Quantity of supplements.|
| @description						| 0..1		| String	| Description of the supplement|
| @carrier							| 0..1		| String	| Carrier selling the supplement.|
| @status							| 0..1		| [Special Supplement Status Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#special-supplement-status-type)		| Status of the supplement.|
| @needToken						| 0..1		| Boolean	| If true, the field @reservationToken should be filled.|
| @type								| 1			| [Special Supplement Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#special-supplement-type)	| Type of supplement.|
| @reservationToken					| 0..1		| String	| Reservation Token of the supplement.|
| @ownTransportation				| 0..1		| Boolean	| If true, the supplement includes own transportation cage.|
| SpecialSupplements/SpecialSupplement/<br>References		| 0..1	||	References for the Special Supplement.|
| SpecialSupplements/SpecialSupplement/<br>References/SegmentReferences		| 0..1	||	Contains a list of segment references for the Special Supplement.|
| SpecialSupplements/SpecialSupplement/<br>References/SegmentReferences/<br>SegmentReference		| 1..n	||	Segment reference.|
| @itineraryRef						| 1 		| Integer	| Unique identifier of the Itinerary.|
| @journeyRef						| 1 		| Integer	| Unique identifier of the Journey.|
| @segmentRef						| 1 		| Integer	| Unique identifier of the Segment.|
| SpecialSupplements/SpecialSupplement/<br>References/PaxReferences		| 0..1	||	Contains a list of passenger references for the Special Supplement.|
| SpecialSupplements/SpecialSupplement/<br>References/PaxReferences/PaxReference		| 1..n	||	Passenger reference.|
| @paxRef							| 1 		| String	| Reference to the passenger.|
| SpecialSupplements/SpecialSupplement/<br>SupplementCharge	| 0..1	||	Details of the special supplement charge.|
| @fixAmount             			| 0..1 		| Decimal	| Total fixed amount.|
| @appliesFixAmount					| 0..1 		|  [Amount Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)	| The fixes amount application|
| @minFixAmount             		| 0..1 		| Decimal	| Minimal fixed amount.|
| @maxFixAmount             		| 0..1 		| Decimal	| Maximal fixed amount.|
| @minAmountPercentage             	| 0..1 		| Decimal	| Minimal percentage amount.|
| @maxAmountPercentage             	| 0..1 		| Decimal	| Maximal percentage amount.|
| @currency             			| 1 		| String	| Currency.|
| @percentage             			| 0..1 		| Decimal	| Total percentage amount.|
| @percentageApplied             	| 0..1 		| [Amount Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)	| The percentage amount application.|
| Seating							| 0..1    	|			| Seating availability.|
| Seating/BlockRules				| 1    		|			| Contains a list of Block Rules.|
| Seating/BlockRules/BlockRule 		| 1..n    	|			| Block Rules.|
| Seating/BlockRules/BlockRule/References					| 1    		|| References for the Block Rule.|
| Seating/BlockRules/BlockRule/References/<br>BlockReferences		| 1	||	Contains a list of references to block elements.|
| Seating/BlockRules/BlockRule/References/<br>BlockReferences/BlockReference | 1..n || Block element reference.|
| @blockTypeRef						| 1  		|  [Block Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#block-type)	| Block type: CABIN (The entire cabin of the plane).|
| @blockRef							| 1  		| Integer	| Block reference.|
| Seating/BlockRules/BlockRule/References/<br>SegmentReferences		| 0..1	||	Contains a list of segment references for the Block Rule.|
| Seating/BlockRules/BlockRule/References/<br>SegmentReferences/SegmentReference		| 1..n	||	Segment reference.|
| @itineraryRef						| 1 		| Integer	| Unique identifier of the Itinerary.|
| @journeyRef						| 1 		| Integer	| Unique identifier of the Journey.|
| @segmentRef						| 1 		| Integer	| Unique identifier of the Segment.|
| Seating/BlockRules/BlockRule/References/<br>PaxReferences	| 0..1	||	Contains a list of passenger references for the Special Supplement.|
| Seating/BlockRules/BlockRule/References/<br>PaxReferences/PaxReference		| 1..n	||	Passenger reference.|
| @paxRef							| 1 		| String	| Reference to the passenger.|
| Seating/BlockRules/BlockRule/BlockPrice					| 0..1  	|| Price element.|
| Seating/BlockRules/BlockRule/BlockPrice/<br>Amount		| 0..1  	|| Amount by type.|
| @currency							| 1  		| String	| Currency code of the amount.|
| @amount                 			| 1  		| Decimal	| Amount.|
| @amountType             			| 0..1  	| [Amount type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-type)	| Block amount.|
| Seating/Blocks					| 1    		|			| Contains a list of seating blocks.|
| Seating/Blocks/Block				| 1..n    	|			| Seating details.|
| @type								| 1  		| [Block Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#block-type)	| Block type: CABIN (The entire cabin of the plane).|
| @id								| 1  		| Integer	| Unique id.|
| Seating/Blocks/Block/References/<br>SegmentReferences		| 1	||	Contains a list of segment references for the Block.|
| Seating/Blocks/Block/References/<br>SegmentReferences/SegmentReference		| 1..n	||	Segment reference.|
| @itineraryRef						| 1 		| Integer	| Unique identifier of the Itinerary.|
| @journeyRef						| 1 		| Integer	| Unique identifier of the Journey.|
| @segmentRef						| 1 		| Integer	| Unique identifier of the Segment.|
| Seating/Blocks/Block/Blocks		| 1    		|			| Contains a list of row blocks.|
| Seating/Blocks/Block/Blocks/Block | 1..n    	|			| Row block.|
| @type    							| 1  		| [Block Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#block-type)	| Block type: ROW.|
| @id     							| 1  		| Integer	| Unique row id.|
| @number							| 1  		| Integer	| Row number in the cabin.|
| Seating/Blocks/Block/Blocks/Block/<br>Blocks				| 1    	|| Contains a list of seat blocks.|
| Seating/Blocks/Block/Blocks/Block/<br>Blocks/Block		| 1..n  || Seat block.|
| @type								| 1  		| [Block Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#block-type)	| Block type: SEAT.|
| @id								| 1  		| Integer	| Unique seat id.|
| @number    						| 1  		| String	| Seat identifier.|
| @token    						| 0..1  	| String	| Reservation seat token.|
| Seating/Blocks/Block/Blocks/Block/<br>Blocks/Block/Availability | 0..1 || Availability of the seat.|
| @isAvailable						| 1  		| Boolean	| Indicates whether the seat is available.|
| Seating/Blocks/Block/Blocks/Block/<br>Blocks/Block/BlockAttributes | 0..1 || Contains a list of Seat attributes.|
| Seating/Blocks/Block/Blocks/Block/<br>Blocks/Block/BlockAttributes/<br>BlockAttribute | 1..n || Seat attribute.|
| @type                   			| 1  		| [Block Attribute Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#block-attribute-type)	| Block Attribute type|
| Conditions						| 0..1		|			| Contains a list of applied fare conditions.|
| Conditions/Condition				| 1..n		|			| Details of the condition.|
| @carrier							| 0..1		| String	| Carrier applying the condition.|
| @code								| 0..1		| String	| Code of the condition.|
| @id								| 0..1		| String	| Unique id of the condition.|
| @language							| 0..1		| String	| Language in which the condition is written.|
| @Text								| 0..1		| String	| Description of the condition.|
| Conditions/Condition/Paragraph	| 0..n		|			| List of Sentences and titles.|
| @title							| 0..1		| String	| Title content.|
| Conditions/Condition/Paragraph/Sentence					| 0..n | String	| List of Sentences contents.|
| SummarizedConditions				| 0..1		|			| Summarized applied fare conditions.|
| SummarizedConditions/FareRuleTypes| 0..1		|			| Contains a list of fare rules.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType		| 1..n || Fare rule details.|
| @id								| 1			| String	| Unique id of the fare rule.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/TicketingRules | 0..1 || Ticketing rules details.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/TicketingRules/<br>DatesTypes | 0..n || Contains a list of Date type elements.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/TicketingRules/<br>DatesTypes/DatesType | 1..n || Date details.|
| @type								| 0..1		| String	| Date type.|
| @date								| 1			| Date		| Ticketing date. Example: 2019-04-15T18:25:00|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/MinimumStayRules | 0..1 || Minimum stay rules details.|
| @location							| 1			| String	| Location concerning the minimum stay.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/MinimumStayRules/<br>DatesTypes | 0..n || Contains a list of Date type elements.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/MinimumStayRules/<br>DatesTypes/DatesType | 1..n || Date details.|
| @type								| 0..1		| String	| Date type.|
| @date								| 1			| Date		| Date. Example: 2019-04-15T18:25:00|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/MaximumStayRules | 0..1 || Maximum stay rules details.|
| @location							| 1			| String	| Location concerning the maximum stay.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/MaximumStayRules/<br>DatesTypes | 0..n || Contains a list of Date type elements.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/MaximumStayRules/<br>DatesTypes/DatesType | 1..n || Date details.|
| @type								| 0..1		| String	| Date type.|
| @date								| 1			| Date		| Date. Example: 2019-04-15T18:25:00|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/Penalty | 0..1 || Penaly rules details.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/Penalty/<br>DatesTypes | 0..n || Contains a list of Date type elements.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/Penalty/<br>DatesTypes/DatesType | 1..n || Date details.|
| @type								| 0..1		| String	| Date type.|
| @date								| 1			| Date		| Date. Example: 2019-04-15T18:25:00|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/Penalty/AmountTypes | 0..n || Contains a list of amount types.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/Penalty/AmountTypes/<br>AmountType | 1..n || Amount details.|
| @type								| 0..1		| String	| Date type.|
| @date								| 0..1		| Date		| Date. Example: 2019-04-15T18:25:00|
| @currency							| 0..1		| String	| Currency.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/Penalty/RestrictionTypes | 0..n || Contains a list of restriction types.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/Penalty/RestrictionTypes/<br>RestrictionType | 1..n || Restriction details.|
| @type								| 0..1		| String	| Restriction type.|
| @application						| 1			| Boolean	| If true, the restriction applies to the fare.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/ReissueRules | 0..1 || Reissue rules details.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/ReissueRules/<br>DatesTypes | 0..n || Contains a list of Date type elements.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/ReissueRules/<br>DatesTypes/DatesType | 1..n || Date details.|
| @type								| 0..1		| String	| Date type.|
| @date								| 1			| Date		| Date. Example: 2019-04-15T18:25:00|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/ReissueRules/AmountTypes | 0..n || Contains a list of amount types.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/ReissueRules/AmountTypes/<br>AmountType | 1..n || Amount details.|
| @type								| 0..1		| String	| Date type.|
| @date								| 0..1		| Date		| Date. Example: 2019-04-15T18:25:00|
| @currency							| 0..1		| String	| Currency.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/ReissueRules/RestrictionTypes | 0..n || Contains a list of restriction types.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/ReissueRules/RestrictionTypes/<br>RestrictionType | 1..n || Restriction details.|
| @type								| 0..1		| String	| Restriction type.|
| @application						| 1			| Boolean	| If true, the restriction applies to the fare.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/RefundRules| 0..1 || Refund rules details.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/RefundRules/<br>DatesTypes | 0..n || Contains a list of Date type elements.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/RefundRules/<br>DatesTypes/DatesType | 1..n || Date details.|
| @type								| 0..1		| String	| Date type.|
| @date								| 1			| Date		| Date. Example: 2019-04-15T18:25:00|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/RefundRules/AmountTypes | 0..n || Contains a list of amount types.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/RefundRules/AmountTypes/<br>AmountType | 1..n || Amount details.|
| @type								| 0..1		| String	| Date type.|
| @date								| 0..1		| Date		| Date. Example: 2019-04-15T18:25:00|
| @currency							| 0..1		| String	| Currency.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/RefundRules/RestrictionTypes | 0..n || Contains a list of restriction types.|
| SummarizedConditions/FareRuleTypes/<br>FareRuleType/RefundRules/RestrictionTypes/<br>RestrictionType | 1..n || Restriction details.|
| @type								| 0..1		| String	| Restriction type.|
| @application						| 1			| Boolean	| If true, the restriction applies to the fare.|
| SummarizedConditions/FareRuleApplicabilities				| 0..1 || Contains a list of fare rules aplicability.|
| SummarizedConditions/FareRuleApplicabilities/<br>FareRulesApplicability | 1..n || Contains a list of fare rules aplicability.|
| SummarizedConditions/FareRuleApplicabilities/<br>FareRulesApplicability/OriginDestinationIds | 0..1 |	| Contains a list of Origin Destination identificators.|
| SummarizedConditions/FareRuleApplicabilities/<br>FareRulesApplicability/OriginDestinationIds/<br>OriginDestinationId | 1..n || List of Origin and Destinations pairs involved in the fare rule.|
| @origin							| 1			| String	| Origin.|
| @destination						| 1			| String	| Destination.|
| SummarizedConditions/FareRuleApplicabilities/<br>FareRulesApplicability/PaxReferences | 0..1 || Contains a list of pasengers involved in the fare rules.|
| SummarizedConditions/FareRuleApplicabilities/<br>FareRulesApplicability/PaxReferences/<br>PaxReference| 1..n || List of references to pasengers related to the fare rule.|
| @paxRef							| 1			| String	| Reference to a specific pasenger.|
| SummarizedConditions/FareRuleApplicabilities/<br>FareRulesApplicability/FareRulesReferences | 0..1 || Contains a list of fare rules.|
| SummarizedConditions/FareRuleApplicabilities/<br>FareRulesApplicability/FareRulesReferences/<br>FareRulesReference| 1..n || List of references to fare rules.|
| @FareRulesRefType					| 1			| String	| Reference to a fare rule.|
| PaymentByInstalments						| 0..1		|			| Contains a list of Instalments.|
| PaymentByInstalments/PaymentByInstalment			| 1..n		|			| Instalment details.|
| @number							| 1			| Integer	| Number of instalments.|
| @currency							| 0..1		| String	| Currency.|
| PaymentByInstalments/PaymentByInstalment/FirstPaymentAmount					| 0..1 || First instalment amount.|
| PaymentByInstalments/PaymentByInstalment/InterestRate						| 0..1 || Interest rate.|
| PaymentByInstalments/PaymentByInstalment/<br>RemainingInstalmentAmount	| 0..1 || Remaining instalment amount.|
| PaymentByInstalments/PaymentByInstalment/<br>RemainingInstalmentTotalAmount | 0..1 || Remaining instalment total amount.|

### Possible Operations (Examples)

**Operation 1 - One itinerary request:**

ValuationRQ:

~~~xml
<ValuationRQ>
	<Preferences paymentMethods="false" baggageTypes="false" specialSupplements="false" extendedFareRules="false" summarizedFareRules="false" seating="false" pagoPlazos="false"/>
	<Itineraries>
		<Itinerary id="0" hasObFees="false" carrier="DY">
			<Conditions>
				<Condition id="PEN">
					<Text>TICKETS ARE NON-REFUNDABLE</Text>
				</Condition>
				<Condition id="LTD">
					<Text>LAST TKT DTE, 11DEC18, - SEE ADV PURCHASE</Text>
				</Condition>
			</Conditions>
			<Journeys>
				<Journey id="0" duration="0">
					<Segments>
						<Segment id="0">
							<SegmentInfo id="0" transportationId="D86770" transportationType="A" operatingCarrier="D8" marketingCarrier="D8" arrivalTerminal="2" departureDate="2018-12-18T07:25:00" arrivalDate="2018-12-18T08:50:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="73H" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
								<OriginLoc type="A" code="PMI" cityCode="false"/>
								<DestinationLoc type="A" code="MAD" cityCode="false"/>
							</SegmentInfo>
							<SegmentClasses>
								<SegmentClass cabinClass="Y" class="T" paxRef="0" fareBasis="TJIPPI" fareType="PUB" avail="9"/>
								<SegmentClass cabinClass="Y" class="T" paxRef="1" fareBasis="TJIPPI" fareType="PUB" avail="9"/>
								<SegmentClass cabinClass="Y" class="T" paxRef="2" fareBasis="TJIPPI" fareType="PUB" avail="9"/>
							</SegmentClasses>
							<ReservationToken>
								<Attribute key="LtdProv" value="111218"/>
								<Attribute key="Ltd" value="11/12/2018"/>
								<Attribute key="claseCabina" value="N"/>
								<Attribute key="breakPoint" value="Y"/>
								<Attribute key="fareType" value="PUB"/>
								<Attribute key="horaVal" value="2018-12-11T15:05:39.371"/>
							</ReservationToken>
						</Segment>
					</Segments>
				</Journey>
			</Journeys>
			<AmountBreakdown currency="EUR" totalAmount="98.23" nonCommissionableAmount="0" commission="-1">
				<ChargeBreakdowns/>
				<PaxBreakdowns>
					<PaxBreakdown paxType="ADT" amount="45.01" taxes="10.01" fees="0" duTax="0"/>
					<PaxBreakdown paxType="CHD" amount="45.01" taxes="10.01" fees="0" duTax="0"/>
					<PaxBreakdown paxType="INF" amount="8.21" taxes="8.21" fees="0" duTax="0"/>
				</PaxBreakdowns>
			</AmountBreakdown>
			<PaxConfigurations>
				<PaxConfiguration id="0" paxRef="0" age="30" paxType="ADT">
					<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
				</PaxConfiguration>
				<PaxConfiguration id="1" paxRef="1" age="8" paxType="CHD">
					<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
				</PaxConfiguration>
				<PaxConfiguration id="2" paxRef="2" age="1" paxType="INF">
					<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
				</PaxConfiguration>
			</PaxConfigurations>
			<VehicleConfigurations/>
			<Emissions/>
		</Itinerary>
	</Itineraries>
</ValuationRQ>
~~~

ValuationRS:

~~~xml
<ValuationRS>
	<Itineraries>
		<Itinerary id="0" hasObFees="false" carrier="DY">
			<Conditions>
				<Condition id="PEN">
					<Text>TICKETS ARE NON-REFUNDABLE</Text>
				</Condition>
				<Condition id="LTD">
					<Text>LAST TKT DTE, 11DEC18, - SEE ADV PURCHASE</Text>
				</Condition>
			</Conditions>
			<Journeys>
				<Journey id="0" duration="0">
					<Segments>
						<Segment id="0">
							<SegmentInfo id="0" transportationId="D86770" transportationType="A" operatingCarrier="D8" marketingCarrier="D8" arrivalTerminal="2" departureDate="2018-12-18T07:25:00" arrivalDate="2018-12-18T08:50:00" segmentDuration="0" maxCheckinDate="2018-12-11T00:00:00" planeType="73H" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
								<OriginLoc type="A" code="PMI" cityCode="false"/>
								<DestinationLoc type="A" code="MAD" cityCode="false"/>
							</SegmentInfo>
							<SegmentClasses>
								<SegmentClass cabinClass="Y" class="T" paxRef="0" fareBasis="TJIPPI" fareType="PUB"/>
								<SegmentClass cabinClass="Y" class="T" paxRef="1" fareBasis="TJIPPI" fareType="PUB"/>
								<SegmentClass cabinClass="Y" class="T" paxRef="2" fareBasis="TJIPPI" fareType="PUB"/>
							</SegmentClasses>
							<ReservationToken>
								<Attribute key="LtdProv" value="111218"/>
								<Attribute key="Ltd" value="11/12/2018"/>
								<Attribute key="claseCabina" value="N"/>
								<Attribute key="breakPoint" value="Y"/>
								<Attribute key="fareType" value="PUB"/>
								<Attribute key="horaVal" value="2018-12-11T15:05:39.371"/>
							</ReservationToken>
						</Segment>
					</Segments>
				</Journey>
			</Journeys>
			<AmountBreakdown currency="EUR" totalAmount="98.23" nonCommissionableAmount="0" commission="-1">
				<ChargeBreakdowns/>
				<PaxBreakdowns>
					<PaxBreakdown paxType="ADT" amount="45.01" taxes="10.01" fees="0" duTax="0"/>
					<PaxBreakdown paxType="CHD" amount="45.01" taxes="10.01" fees="0" duTax="0"/>
					<PaxBreakdown paxType="INF" amount="8.21" taxes="8.21" fees="0" duTax="0"/>
				</PaxBreakdowns>
			</AmountBreakdown>
			<PaxConfigurations>
				<PaxConfiguration id="0" paxRef="0" age="30" paxType="ADT">
					<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
				</PaxConfiguration>
				<PaxConfiguration id="1" paxRef="1" age="8" paxType="CHD">
					<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
				</PaxConfiguration>
				<PaxConfiguration id="2" paxRef="2" age="1" paxType="INF">
					<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
				</PaxConfiguration>
			</PaxConfigurations>
			<Emissions/>
		</Itinerary>
	</Itineraries>
</ValuationRS>
~~~