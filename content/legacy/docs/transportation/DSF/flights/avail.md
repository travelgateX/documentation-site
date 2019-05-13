---
title: Avail
keywords: transportation, data structure, flights, avail
search: Transportation - Flights - Data Structure - Avail
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/flights/avail
---



### Method Goals


This method aims to return all the available options for a given date
and itinerary. It does not filter different classes, times or fares. It
will always return all of the results returned by the provider.



### Request Format


The common part of an availability request is very straight forward. It
only requires the destination/s, the travelling dates, the paxes and the
indication of the trip type.



### Response Format


The response format will always be delivered in the node Transportation,
which will be organized by two main nodes: 

-   Segments:

A list with all of the Segments including details, returned by the
supplier, such as dates, number, etc.



-   Fares:

A list with all of the prices returned for each Segment in the above
list. Each Fare has a referenced SegmentReference inside the node
Option, to identify the Segment. A Fare will have one or more Segments
associated and every Segment will refer to at least one Option.

There will always be one PaxBreakdown per passenger type.

The price returned is "all inclusive". All fares, taxes and discounts
are already included in the total price.



### Remarks


This method **must** be called **before** the Valuation method.


### AvailabilityRQ Description


| **Element**				| **Number**| **Type**	| **Description**																			   |
| ------------------------- | --------- | --------- | -------------------------------------------------------------------------------------------- |
| AvailabilityRQ        	| 1      	|			| Root node.|
| TripType      			| 1  		|[Trip type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#trip-type)| Indicates the travel type|
| Journeys              	| 1      	|			| Contains a list of Journeys.|
| Journeys/Journey      	| 1..n    	|			| Contains the information about the requested Journey in the availability.|
| @id              			| 1  		| Integer	| Unique identifier of the Journey.|
| @departureDate   			| 1  		| String	| Departure date. Format: *dd/mm/yyyy*|
| @arrivalDate				| 1			| String	| Arrival date. Any hour if empty|
| @departureTime   			| 0..1  	| String	| Departure time. Format: *dd/mm/yyyy*|
| @arrivalTime				| 0..1		| String	| Arrival time. Any hour if empty|
| @action					| 0..1		|[Journey Action Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#journey-action-type)| Indicates the type of modification to be made in a reservation (works only for AvailabilityBookingModificationRQ)|
| Journeys/Journey/AlternativeDates					| 0..1		|| Contains a range of days (before/after) the departure of the journey.|
| @daysBefore				| 0..1		| Integer	| Range of days to travel before the departure of the journey.|
| @daysAfter				| 0..1		| Integer	| Range of days to travel after the departure of the journey.|
| Journeys/Journey/OriginLoc						| 1      	|| Origin location.|
| @code            			| 1  		| String	| Location code.|
| @cityCode        			| 1  		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @latitude					| 0..1		| String	| Indicates the latitude coordinades.|
| @longitude				| 0..1		| String	| Indicates the longitude coordinades.|
| @name						| 0..1		| String	| Location long name.|
| @radius					| 0..1		| Integer	| Area radius from location.|
| @type						| 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Journeys/Journey/OriginLoc/<br>AlternativeLocations						| 0..1	|| Contains a list of AlternativeLocations.|
| Journeys/Journey/OriginLoc/<br>AlternativeLocations/AlternativeLocation	| 1..n	|| Contains the information of the alternative location.|
| @code						| 1			| String	| Location code.|
| @cityCode        			| 1  		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @name						| 0..1		| String	| Location long name.|
| @type						| 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Journeys/Journey/DestinationLoc		| 1      	|| Destination location.|
| @code            			| 1  		| String	| Location code.|
| @cityCode        			| 1  		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @name						| 0..1		| String	| Location long name.|
| @radius					| 0..1		| Integer	| Area radius from location.|
| @type						| 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Journeys/Journey/DestinationLoc/<br>AlternativeLocations						| 0..1	|| Contains a list of AlternativeLocations.|
| Journeys/Journey/DestinationLoc/<br>AlternativeLocations/AlternativeLocation	| 1..n	|| Contains the information of the alternative location.|
| @code						| 1			| String	| Location code.|
| @cityCode        			| 1  		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @name						| 0..1		| String	| Location long name.|
| @type						| 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Passengers            	| 1      	|			| Contains a list of Passengers.|
| Passengers/Passenger  	| 1..n    	|			| Contains information of the Passenger.|
| @id              			| 1  		| Integer	| Unique identifier of the Passenger.|
| @age             			| 1  		| Integer	| Age of the Passenger.|
| Passengers/Passenger/Bonuses						| 0..1    	|| Possible discount or bonuses.|
| @resident        			| 0..1  	| [Resident Discount Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#resident-discount-type)	| Resident discount type|
| @largeFamily     			| 0..1  	| [Large Family Discount Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#large-family-discount-type)	| Family discount type|
| @discountCardCode			| 0..1		| String	| Discount card code.|
| @discountCard				| 0..1		| [Discount Card Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#discount-card-type)	| Discount card type |
| Passengers/Passenger/Bonuses/<br>DiscountCards	| 0..1	|| Contains a list of DiscountCards.|
| Passengers/Passenger/Bonuses/<br>DiscountCards/DiscountCard		| 1..n	|| DiscountCard details.|
| @type						| 1			| [Discount Card Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#discount-card-type)	| Discount card type|
| @code						| 0..1		| String	| Discount card code.|
| @id						| 0..1		| String	| Unique identifier of discound card.|
| Passengers/Passenger/Bonuses/<br>PaxTypeCodes		| 0..1	|| Contains a list of PaxTypeCodes.|
| Passengers/Passenger/Bonuses/<br>PaxTypeCodes/PaxTypeCode			| 1..n	|| Contains the code type of the passenger.|
| @code						| 1			| String	| Discounts by passenger type|
| Preferences           	| 0..1      |			| Availability Preferences.|
| @cabinClass      			| 0..1  	|  [Cabin Class Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#cabin-class-type)	| Preferred cabin class|
| @allowOverNight			| 0..1		| Boolean	| If true, allows to the provider to return flights with overnight scales.|
| @brandedFares				| 0..1		| Boolean	| If true, the fares will contain extra information.|
| @lowCostIncluded			| 0..1		| Boolean	| If true, lowcost options will also be requested.|
| @trainIncluded			| 0..1		| Boolean	| If true, train options will also be requested.|
| @lightAvail				| 0..1		| Boolean	| If true, light options will also be requested.|
| @airLine					| 0..1		| String	| If specified, the search will request only fares of this airline.|
| @onlyNonStop				| 0..1		| Boolean	| If true, only nonStop journeys will be requested.|
| @onlyTrain				| 0..1		| Boolean	| If true, only train journeys will be requested.|
| @cheapestFares			| 0..1		| Boolean	| If true, the search will be based on the cheapest fares.|
| Preferences/ConnexionCompanies    				| 0..1  || List of preferred companies.|
| Preferences/ConnexionCompanies/<br>ConnexionCompany      		| 1..n  || Preferred company.|
| @carrier         			| 1  		| String	| Airline code.|
| @mode            			| 1  		|  [Filter Mode type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#filter-mode-type)	| Filter mode. Allows to include or exclude companies|
| Preferences/ConnexionCompanies/<br>ConnexionCompany/Attributes	| 0..1	|| List of attributes.|
| Preferences/ConnexionCompanies/<br>ConnexionCompany/Attributes/Attribute	| 1..n	|| Additional information key-value.|
| @key						                        | 1			| String	| Attribute key.|
| @value					                        | 1			| String	| Attribute value.|
| Preferences/FareTypeGroups                        |0..1       || List of fare type group.|
| Preferences/FareTypeGroups/FareTypeGroup          |1..n       || The fare type group|
|@type                                              |1|String|The type of the fare group. Public, Private, Corporative. Must be provider codes.
|Preferences/FareTypeGroups/FareTypeGroup/Code      |0..n       | String| The fare type codes of this group of fare types|
|Preferences/FaresFamilies                          |0..1       ||Custom fare families|
|Preferences/FaresFamilies/FaresFamily              |1..n       ||List of custom fares family|
|@name                                              |1          |String     |Custom FareFamily's name|
|@ranking                                           |0..1       |FareFamily's ranking in the FareFamilies's list|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups|0..1||The criteria groups of custom FareFamily|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup|1..n||A criteria group|
|@logicalOperator                                   |0..1|[Logical Operator type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#logical-operator-type)|Logical operator applied between group criteria in FareFamily|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/Companies|0..1||List of carriers whom applies this criteria group|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/Companies/<br>Company|1..n||Carrier|
|@id                                                |1  |String     |Carrier id|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/FareTypes|0..1||List of criteria group's fare types|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/FareTypes/<br>FareType|1..n||A fare type|
|@value|1|String|FareType's identifier|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/CorporateCodes|0..1||List of criteria group's corporate codes|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/CorporateCodes/<br>CorporateCode|1..n||A corporate code|
|@value|1|String|Corporate code's identifier|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/Classes|0..1||List of criteria group's classes|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/Classes/<br>Class|1..n||A criteria group's class|
|@value|1|String|Class identifier|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/ExtendedParameters|0..1||List of criteria group's extended parameters|
|Preferences/FaresFamilies/FaresFamily/<br>CriteriaGroups/CriteriaGroup/ExtendedParameters/<br>ExtendedParameter|1..n||An extended parameter|
|@key|1|String| Parameter's key|
|@value|1|String| Parameter's value|


### AvailabilityRS Description


| **Element**					| **Number**| **Type**	| **Description** |																			   
| ----------------------------- | --------- | --------- | ----------------|
| AvailabilityRS              	| 1     	|			| Root node.|
| Transportation              	| 1     	|			| Contains all of the Segments and Fares.|
| @totalFares            		| 1 		| Integer	| Total number of Fares.|
| Transportation/Segments     	| 1     	|			| Contains a list of the Segments.|
| Transportation/Segments/Segment| 1..n    	| Contains the information of the segment.|
| @id                    		| 1 		| Integer	| Unique identifier of the segment.|
| @transportationId      		| 1 		| String	| Unique Id of the transportation.|
| @operatingCarrier      		| 1 		| String	| Company which operates the transportation.|
| @marketingCarrier      		| 1 		| String	| Company which commercializes the transportation.|
| @departureDate         		| 1 		| Date		| Departure date. Example: 2019-04-15T18:25:00|
| @arrivalDate           		| 1 		| Date		| Arrival date. Example: 2019-04-15T18:25:00|
| @transportationType    		| 0..1 		| [Transport type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#transport-type)	| Transport type|
| @transportationName    		| 0..1 		| String	| Name of the transportation.|
| @transportationCode			| 0..1		| String	| Code of the transportation.|
| @departureTerminal     		| 0..1 		| String	| Departure terminal.|
| @arrivalTerminal       		| 0..1 		| String	| Arrival terminal.|
| @segmentDuration       		| 0..1 		| Integer	| Transport duration ( in minutes ).|
| @segmentStatus				| 0..1		| [Status Segment type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#status-segment-type)	| Segment status|
| @planeType             		| 0..1 		| String	| Plane type. Flights parameter.|
| @maxCheckinDate        		| 0..1 		| String	| Maximum date to make the check-in. Not filled from provider's response |
| @hasTechnicalStop      		| 0..1 		| Boolean	| If true, the segment has a technical stop.|
| @electronicTicket      		| 0..1 		| Boolean	| If true, the segment uses a electronic ticket.| 
| @secureFlight          		| 0..1		| Boolean	| If true, the provider requires extra information of the passengers. Flights parameter.|
| Transportation/Segments/Segment/<br>OriginLoc			| 1 |   | Origin location.|
| @code                  		| 1 		| String	| Location code.|
| @type                  		| 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| @name							| 0..1 		| String	| Location full name.|
| @radius						| 0..1		| Integer	| Area radius from location.|
| @cityCode              		| 0..1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| Transportation/Segments/Segment/<br>OriginLoc/AlternativeLocations	| 0..1		|| Contains a list of AlternativeLocations.|
| Transportation/Segments/Segment/<br>OriginLoc/AlternativeLocations/<br>AlternativeLocation	| 1..n	|| Contains the information of the alternative location.|
| @code							| 1			| String	| Location code.|
| @cityCode        				| 0..1  	| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @name							| 0..1		| String	| Location long name.|
| @type							| 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location.|
| Transportation/Segments/Segment/<br>DestinationLoc	| 1   || Destination location.|
| @code                  		| 1 		| String	| Location code.|
| @type                  		| 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location.|
| @name							| 0..1 		| String	| Location full name.|
| @radius						| 0..1		| Integer	| Area radius from location.|
| @cityCode              		| 0..1 		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| Transportation/Segments/Segment/<br>DestinationLoc/AlternativeLocations	| 0..1		|| Contains a list of AlternativeLocations.|
| Transportation/Segments/Segment/<br>DestinationLoc/AlternativeLocations/<br>AlternativeLocation	| 1..n	|| Contains the information of the alternative location.|
| @code							| 1			| String	| Location code.|
| @cityCode        				| 0..1  	| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @name							| 0..1		| String	| Location long name.|
| @type							| 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Transportation/Segments/Segment/<br>TechnicalStops	| 0..1		|| Contains a list of TechnicalStops.|
| @totalTechnicalStops   		| 1 		| Integer	| Total number of TechnicalStops.|
| Transportation/Segments/Segment/<br>TechnicalStops/TechnicalStop	| 0..n || Contains the details of the TechnicalStop.|
| @location              		| 1 		| String	| TechnicalStop location|
| @stopDate              		| 1 		| Date		| Approx. stop date and time. Example: 2019-02-20T16:50:00|
| @departureDate         		| 1 		| Date		| Approx. departure date and time. Example: 2019-02-20T16:50:00|
| Transportation/Fares                       			| 1     	|| Contains a list of Fares.|
| Transportation/Fares/Fare                  			| 1..n    	|| Contains details of Fare.|
| @id                    		| 1 		| Integer	| Unique identifier of the Fare.|
| @providerCode          		| 1 		| String	| Provider code.|
| @fareType              		| 1 		| [Fare type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#fare-type)	| Fare type.|
| @familyFare            		| 0..1 		| String	| Family fare name of the Fare.|
| Transportation/Fares/Fare/HasObFees        			| 0..1 		| Boolean	| If true then there is an extra fee for using credit card.|
| Transportation/Fares/Fare/Conditions					| 0..1		|| Contains a list of Fare Conditions.|
| Transportation/Fares/Fare/Conditions/<br>Condition	| 1..n		|| Contains details of the Condition that applies to the condition.|
| @carrier						| 0..1		| String	| Carrier applying the condition.|
| @code							| 0..1		| String	| Code of the condition.|
| @id							| 0..1		| String	| Unique id of the condition.|
| @language						| 0..1		| String	| Language in which the condition is written.|
| @Text							| 0..1		| String	| Description of the condition.|
| Transportation/Fares/Fare/Conditions/<br>Condition/Paragraph	| 0..n || List of Sentences and titles.|
| @title						| 0..1		| String	| Title content.|
| Transportation/Fares/Fare/Conditions/<br>Condition/Paragraph/Sentence	| 0..n | String	| List of Sentences contents.|
| Transportation/Fares/Fare/Options          			| 1     	|| Contains a list of Fare Options.|
| Transportation/Fares/Fare/Options/Option   			| 1..n    	|| Contains details of the Fare Option.|
| @id                    		| 1 		| Integer	| Unique identifier of the Option.|
| @availJourneyRef       		| 1  		| Integer	| Reference id of the AvailabilityRQ Journey.|
| @numStopOver           		| 1 		| Integer	| Number of StopOvers. If -1, then we cannot know how many StopOvers via XML.|
| @carrier               		| 1 		| String	| Validating carrier.|
| @familyFare            		| 0..1 		| String	| Family fare name of the Option.|
| Transportation/Fares/Fare/Options/Option/<br>SegmentReferences | 1  	|| Contains a list of SegmentReferences.|
| Transportation/Fares/Fare/Options/Option/<br>SegmentReferences/SegmentReference | 1..n | | Contains details of the SegmentReference of each option.|
| @segmentRef            		| 1 		| Integer	| Reference of the Segment.|
| Transportation/Fares/Fare/Options/Option/<br>SegmentReferences/SegmentReference/<br>SegmentClasses | 1 | | Contains a list of SegmentClasses.|
| Transportation/Fares/Fare/Options/Option/<br>SegmentReferences/SegmentReference/<br>SegmentClasses/SegmentClass | 1..n | | Contains details of the SegmentClass.|
| @cabinClass            		| 1 		| [Cabin Class type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#cabin-class-type)	| Cabin class of the segment.|
| @paxRef               	 	| 1 		| Integer	| Passenger reference.|
| @fareType              		| 1 		| [Fare type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#fare-type)	| Fare type|
| @class                 		| 0..1 		| String	| Fare class.|
| @fareBasis             		| 0..1 		| String	| Identifier of the fare.|
| @avail                 		| 0..1 		| Integer	| Available seats remaining for this class (In flights, the maximum is 9).|
| Transportation/Fares/Fare/Options/Option/<br>SegmentReferences/SegmentReference/<br>ReservationTokens | 0..1 || Specific attribute used for each provider.|
| Transportation/Fares/Fare/Options/Option/<br>SegmentReferences/SegmentReference/<br>ReservationTokens/Attribute | 1..n || Type of attribute.|
| @key                   		| 1 		| String	| Contains the keyword/ Id to identify a parameter.|
| @value                 		| 1 		| String	| Contains the value of the parameter.|
| Transportation/Fares/Fare/Options/Option/<br>BaggageTypes | 0..1    	|| Contains a list of BaggageTypes.|
| Transportation/Fares/Fare/Options/Option/<br>BaggageTypes/BaggageType	| 1..n || Contains details of BaggageType.|
| @checkInType					| 1  		| [Checkin type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#checkin-type)	| Check-in type.|
| @appliesSegments        		| 1  		| [Segment Applies To type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#segment-applies-type)	| Segments in which is applied.|
| Transportation/Fares/Fare/Options/Option/<br>BaggageTypes/BaggageType/<br>References		| 0..1	||	References for the Baggage Type.|
| Transportation/Fares/Fare/Options/Option/<br>BaggageTypes/BaggageType/<br>References/SegmentReferences		| 0..1	||	Contains a list of segment references for the Baggage Type.|
| Transportation/Fares/Fare/Options/Option/<br>BaggageTypes/BaggageType/<br>References/SegmentReferences/<br>SegmentReference		| 1..n	||	Segment reference.|
| @itineraryRef					| 1 		| Integer	| Unique identifier of the Itinerary.|
| @journeyRef					| 1 		| Integer	| Unique identifier of the Journey.|
| @segmentRef					| 1 		| Integer	| Unique identifier of the Segment.|
| Transportation/Fares/Fare/Options/Option/<br>BaggageTypes/BaggageType/<br>References/PaxReferences		| 0..1	||	Contains a list of passenger references for the Baggage Type.|
| Transportation/Fares/Fare/Options/Option/<br>BaggageTypes/BaggageType/<br>References/PaxReferences/<br>PaxReference		| 1..n	||	Passenger reference.|
| @paxRef						| 1 		| String	| Reference to the passenger.|
| Transportation/Fares/Fare/Options/Option/<br>BaggageTypes/BaggageType/Baggage | 1..n || Details of the baggage.|
| @type                  		| 1 		| [Baggage Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#baggage-type)	| Baggage type|
| @quantity              		| 1 		| Integer	| Baggage quantity.|
| @id                    		| 0..1 		| String	| Unique identifier of the Baggage.|
| @maxWeightPerUnit      		| 0..1 		| Integer	| Maximum weight of the baggage.| 
| @maxTotalWeight        		| 0..1 		| Integer	| Maximum weight of ALL the baggage.|
| @paymentInAirpot       		| 0..1 		| Boolean	| Determines whether the pay is in station.|
| @code                  		| 0..1 		| String	| Code of the Baggage.|
| @carrier               		| 0..1 		| String	| Carrier.|
| @needToken             		| 0..1 		| Boolean	| Reserve token mandatory.|
| @reservationToken             | 0..1 		| String	| Reserve token.|
| @description             		| 0..1 		| String	| Baggage description.|
| Transportation/Fares/Fare/Options/Option/<br>BaggageTypes/BaggageType/Baggage/<br>BaggageCharge | 0..1 || Details of the baggage charge.|
| @currency             		| 1 		| String	| Currency.|
| @fixAmount             		| 0..1 		| Decimal	| Total fixed amount.|
| @appliesFixAmount             | 0..1 		| [Amount Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)	| Entity which the fixed amount is applied|
| @minFixAmount             	| 0..1 		| Decimal	| Minimal fixed amount.|
| @maxFixAmount             	| 0..1 		| Decimal	| Maximal fixed amount.|
| @minAmountPercentage          | 0..1 		| Decimal	| Minimal percentage amount.|
| @maxAmountPercentage          | 0..1 		| Decimal	| Maximal percentage amount.|
| @percentage             		| 0..1 		| Decimal	| Total percentage amount.|
| @percentageApplied             	| 0..1 		| [Amount Applies To type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)	| The percentage amount application.|
| Transportation/Fares/Fare/Options/Option/<br>SpecialSupplements	| 0..1	||	Contains a list of SpecialSupplements.|
| Transportation/Fares/Fare/Options/Option/<br>SpecialSupplements/SpecialSupplement		| 1..n	||	Contains information about the Special Supplement.|
| @type							| 1			| [Supplement Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#supplement-type)	| Type of supplement|
| @id							| 0..1		| String	| Unique identifier of the supplement.|
| @code							| 0..1		| String	| Supplement code.|
| @height						| 0..1		| Integer	| Dimension of the supplement: height.|
| @width						| 0..1		| Integer	| Dimension of the supplement: width.|
| @length						| 0..1		| Integer	| Dimension of the supplement: length.|
| @weight						| 0..1		| Integer	| Dimension of the supplement: weight.|
| @quantity						| 0..1		| Integer	| Quantity of supplements.|
| @description					| 0..1		| String	| Description of the supplement|
| @carrier						| 0..1		| String	| Carrier selling the supplement.|
| @status						| 0..1		| [Supplement Status Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#supplement-status-type)	| Status of the supplement.|
| @needToken					| 0..1		| Boolean	| If true, the field @reservationToken should be filled|
| @reservationToken				| 0..1		| String	| Reservation Token of the supplement.|
| @ownTransportation			| 0..1		| Boolean	| If true, the supplement includes own transportation cage.|
| Transportation/Fares/Fare/Options/Option/<br>SpecialSupplements/SpecialSupplement/<br>References		| 0..1	||	References for the Special Supplement.|
| Transportation/Fares/Fare/Options/Option/<br>SpecialSupplements/SpecialSupplement/<br>References/SegmentReferences		| 0..1	||	Contains a list of segment references for the Special Supplement.|
| Transportation/Fares/Fare/Options/Option/<br>SpecialSupplements/SpecialSupplement/<br>References/SegmentReferences/<br>SegmentReference		| 1..n	||	Segment reference.|
| @itineraryRef					| 1 		| Integer	| Unique identifier of the Itinerary.|
| @journeyRef					| 1 		| Integer	| Unique identifier of the Journey.|
| @segmentRef					| 1 		| Integer	| Unique identifier of the Segment.|
| Transportation/Fares/Fare/Options/Option/<br>SpecialSupplements/SpecialSupplement/<br>References/PaxReferences		| 0..1	||	Contains a list of passenger references for the Special Supplement.|
| Transportation/Fares/Fare/Options/Option/<br>SpecialSupplements/SpecialSupplement/<br>References/PaxReferences/PaxReference		| 1..n	||	Passenger reference.|
| @paxRef						| 1 		| String| Reference to the passenger.|
| Transportation/Fares/Fare/Options/Option/<br>SpecialSupplements/SpecialSupplement/<br>SupplementCharge		| 0..1	||	Details of the special supplement charge.|
| @currency             		| 1 		| String| Currency.|
| @fixAmount             		| 0..1 		| Decimal| Total fixed amount.|
| @appliesFixAmount             | 0..1 		| [Amount Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)| The fixed amount application|
| @minFixAmount             	| 0..1 		| Decimal| Minimal fixed amount.|
| @maxFixAmount             	| 0..1 		| Decimal| Maximal fixed amount.|
| @minAmountPercentage          | 0..1 		| Decimal| Minimal percentage amount.|
| @maxAmountPercentage          | 0..1 		| Decimal| Maximal percentage amount.|
| @percentage             		| 0..1 		| Decimal| Total percentage amount.|
| @percentageApplied            | 0..1 		| [Amount Applies To Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#amount-applies-to-type)| The percentage amount application|
| Transportation/Fares/Fare/<br>AmountBreakdown  		| 1     	|| Breakdown of the fare amount.|
| @currency              		| 1 		| String	| Currency code of the fare.|
| @totalAmount           		| 1 		| Decimal	| Total amount. with taxes and other charges included.|
| @notCommissionableAmount		| 0..1 		| Decimal	| Total amount that can not be commissioned.|
| @commission            		| 0..1 		| Decimal	| Commission.| 						|
| Transportation/Fares/Fare/<br>AmountBreakdown/ChargeBreakdowns | 0..1   || Contains a list of breakdown amounts ( taxes, mandatory charges.. ).|
| Transportation/Fares/Fare/<br>AmountBreakdown/ChargeBreakdowns/<br>ChargeBreakdown | 1..n || Contains details of the BreakdownAmount.|
| @amount                		| 1    	 	| Decimal	| Charge amount.|
| @type                  		| 0..1 		| [Charge Type.](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#charge-type)	| Type of charge|
| @included						| 0..1		| Boolean	| If true, the charge is included to the total fare amount.|
| Transportation/Fares/Fare/<br>AmountBreakdown/ChargeBreakdowns/<br>ChargeBreakdown/Concept | 0..1 | | Contains details of the charge.|
| @id                    		| 0..1 		| String	| Unique id of the Concept.|
| @language              		| 0..1 		| String	| Language. ISO 3166-1 alpha-2 format lowercase.|
| @carrier              		| 0..1 		| String	| Carrier.|
| @code              			| 0..1 		| String	| Concept code.|
| Transportation/Fares/Fare/<br>AmountBreakdown/ChargeBreakDowns/<br>ChargeBreakdown/Concept/Text		| 0..1 | String | Remarks.|
| Transportation/Fares/Fare/<br>AmountBreakdown/ChargeBreakDowns/<br>ChargeBreakdown/Concept/Paragraph	| 0..n || Contains a list of Sentences and titles.|
| @title						| 0..1		| String	| Title.|
| Transportation/Fares/Fare/<br>AmountBreakdown/ChargeBreakDowns/<br>ChargeBreakdown/Concept/Paragraph/<br>Sentence | 0..n | String | Sentence|
| Transportation/Fares/Fare/<br>AmountBreakdown/PaxBreakdown | 1    	|| Contains a list of breakdown amounts for each passenger ( ADT amount, etc. ).|
| Transportation/Fares/Fare/<br>AmountBreakdown/PaxBreakdowns/<br>PaxBreakdown | 1..n || Contains details of breakdown amounts for each passenger.|
| @paxType               		| 1 		| [Passenger Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)	| Passenger type|
| @amount                		| 1 		| Decimal	| Total amount, with taxes included, associated to the passenger.|
| @taxes                 		| 1 		| Decimal	| If they exist, taxes are applied for this passenger type.|
| @duTax                		| 0..1 		| Decimal	| DU taxes.|
| @fees                			| 0..1 		| Decimal	| Fees.|
| Transportation/Fares/Fare/<br>AmountBreakdown/PaxBreakdowns/<br>PaxBreakdown/Taxes | 0..1 || Contains a list of Taxes.|
| Transportation/Fares/Fare/<br>AmountBreakdown/PaxBreakdowns/<br>PaxBreakdown/Taxes/Tax | 1..n || Code and amount of each tax.|
| @code							| 1			| String	| Code.|
| @amount						| 1			| Decimal	| Amount.|
| Transportation/Fares/Fare/<br>PaxConfigurations		| 1     || Contains a list of PaxConfiguration.|
| Transportation/Fares/Fare/<br>PaxConfigurations/PaxConfiguration | 1..n || Contains details of PaxConfiguration.|
| @id                    		| 1 		| Integer	| Unique identifier of the PaxConfiguration.|
| @paxRef                		| 1 		| Integer	| Reference to the passenger Id from the request.|
| @paxType               		| 1 		| [Passenger Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)	| Passenger type based on the age of the passenger.|
| @age                   		| 0..1 		| Integer	| Age of the passenger.|
| @nationality                  | 0..1 		| String	| Nationality of the passenger.|
| Transportation/Fares/Fare/<br>PaxConfigurations/PaxConfiguration/<br>AppliedBonuses | 0..1 || Applied discounts.|
| @resident              		| 0..1 		| [Resident Discount Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#resident-discount-type)	| Resident discount type|
| @largeFamily           		| 0..1 		| [Large Family Discount Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#passenger-type)	| Family discount type|
| @discountCardCode				| 0..1		| String	| Discount card code.|
| @discountCard					| 0..1		| [Discount Card Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#discount-card-type)	| Discount card type|
| Transportation/Fares/Fare/<br>PaxConfigurations/PaxConfiguration/<br>AppliedBonuses/DiscountCards	| 0..1	|| Contains a list of DiscountCards.|
| Transportation/Fares/Fare/<br>PaxConfigurations/PaxConfiguration/<br>AppliedBonuses/DiscountCards/<br>DiscountCard| 1..n	|| DiscountCard details.|
| @type							| 1			| [Discount Card Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#discount-card-type)	| Discount card type|
| @code							| 0..1		| String	| Discount card code.|
| @id							| 0..1		| String	| Unique identifier of discound card.|
| Fares/Fare/PaxConfigurations<br>/PaxConfiguration/PaxConfiguration/<br>AppliedBonuses/PaxTypeCodes		| 0..1	|| Contains a list of PaxTypeCodes.|
| Transportation/Fares/Fare/<br>PaxConfigurations/PaxConfiguration/<br>AppliedBonuses/PaxTypeCodes/<br>PaxTypeCode	| 1..n	|| Contains the discount code of the passenger.|
| @code							| 1			| String	| Discounts by passenger type|

### Detailed description


**Total amount breakdown:**

The totalAmount from AmountBreakdown can be calculated by simply adding
the prices of each amount attribute from every PaxBreakdown.

Please note, that the amount as already had in consideration the taxes,
therefore, if the total price marks a 100€, and the taxes are 10€, then
the base price is 90€, like so:

  Pax Breakdown:

 Adult     |      Amount: 100€      |   tax: 10€

Total amount: 100€ Tax: 10€ Pax amount: 100€ - 10€ = 90€



**How to calculate a breakdown:**

Lets say for example we want to calculate the breakdown of the paxes,
then the amount will be the sum of all of the paxes price multiplied by
the number paxes.

For example, if the prices for each pax type are:

Paxes breakdown:                             

| Adult       |  Amount: 100€     |    tax: 10€  |
| Child       |  Amount: 50€      |    tax: 10€  |
| Infant      |  Amount: 10€      |    tax: 10€  |

And we want to do a booking for two adults, two kids and one baby, the
configuration of the paxes will be:


Paxes configuration:                        

| Adult    |    Attribute   |   Bonus  |
| Adult    |    Attribute   |   Bonus  |
| Child    |    Attribute   |   Bonus  |
| Child    |    Attribute   |   Bonus  |
| Infant   |    Attribute   |   Bonus  |

Therefore the total price will be:


Amount breakdown:

| Total  |  Amount: (DesgloseADT \* numADT) + (DesgloseCHD \* numCHD) + (DesgloseINF \* numINF) = **310€**



### Possible Operations (Examples)

**Operation 1 - One way request:**

Example: Search for 1 journey with 1 adult (ADT), 1 child (CHD) and 1 infant (INF).

AvailabilityRQ:

~~~xml
<AvailabilityRQ xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" tripType="OW">
	<timeoutMilliseconds>60000</timeoutMilliseconds>
	<source>
		<agencyCode/>
		<languageCode/>
	</source>
	<filterAuditData>
		<registerTransactions>true</registerTransactions>
	</filterAuditData>
	<optionsQuota>0</optionsQuota>
	<Configuration providerCode="AMD">
		<Credentials officeId="" user="" password="">
			<UrlGeneric/>
			<UrlSpecifics>
				<Attribute key="" value=""/>
			</UrlSpecifics>
		</Credentials>
		<Attributes>
			<Attribute key="" value=""/>
		</Attributes>
	</Configuration>
	<ClientConfiguration agency="" currencyCode="EUR"/>
	<Journeys>
		<Journey id="0" departureDate="26/04/2019" departureTime="" action="N">
			<OriginLoc type="A" code="PMI" cityCode="false"/>
			<DestinationLoc type="A" code="MAD" cityCode="false"/>
		</Journey>
	</Journeys>
	<Passengers>
		<Passenger id="0" age="30">
			<Bonuses resident="N" largeFamily="N" discountCard="N"/>
		</Passenger>
		<Passenger id="1" age="8">
			<Bonuses resident="N" largeFamily="N" discountCard="N"/>
		</Passenger>
		<Passenger id="2" age="1">
			<Bonuses resident="N" largeFamily="N" discountCard="N"/>
		</Passenger>
	</Passengers>
	<Preferences cabinClass="N" lowCostIncluded="false" onlyNonStop="false" onlyTrain="false"
		allowOverNight="false" trainIncluded="false" cheapestFares="false" brandedFares="false">
		<lightAvail>false</lightAvail>
	</Preferences>
</AvailabilityRQ>
~~~

AvailabilityRS:

~~~xml
<AvailabilityRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<auditData>
		<transactions>
			<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
			<RQ/>
			<RS/>
		</transactions>
		<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
		<processTimeMilliseconds>2434</processTimeMilliseconds>
	</auditData>
	<operationImplemented>true</operationImplemented>
	<ResponseStatus direction="OUTBOUND" tripType="OW" status="OK"/>
	<Transportation totalFares="3">
		<Segments>
			<Segment id="0" transportationId="D86772" transportationType="A" operatingCarrier="D8" marketingCarrier="D8" arrivalTerminal="2" departureDate="2019-04-26T21:40:00" arrivalDate="2019-04-26T23:05:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="73H" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="1" transportationId="IB3915" transportationType="A" operatingCarrier="I2" marketingCarrier="IB" arrivalTerminal="4" departureDate="2019-04-26T19:10:00" arrivalDate="2019-04-26T20:35:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="32A" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="2" transportationId="IB3921" transportationType="A" operatingCarrier="I2" marketingCarrier="IB" arrivalTerminal="4" departureDate="2019-04-26T21:25:00" arrivalDate="2019-04-26T22:50:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="321" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="3" transportationId="UX6012" transportationType="A" operatingCarrier="UX" marketingCarrier="UX" arrivalTerminal="2" departureDate="2019-04-26T08:00:00" arrivalDate="2019-04-26T09:25:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="73H" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="4" transportationId="UX6096" transportationType="A" operatingCarrier="UX" marketingCarrier="UX" arrivalTerminal="2" departureDate="2019-04-26T21:10:00" arrivalDate="2019-04-26T22:35:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="73H" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
		</Segments>
		<Fares>
			<Fare id="0" providerCode="AMD" fareType="OW">
				<Conditions>
					<Condition id="PEN">
						<Text>TICKETS ARE NON-REFUNDABLE</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 19FEB19, - SEE ADV PURCHASE</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="0" carrier="DY">
						<SegmentReferences>
							<SegmentReference segmentRef="0">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="P" paxRef="0" fareBasis="PJIPPI" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="P" paxRef="1" fareBasis="PJIPPI" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="P" paxRef="2" fareBasis="PJIPPI" fareType="PUB" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>

						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="0"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="2" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="76.62" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="33.25" taxes="11.25" fees="0" duTax="0"/>
						<PaxBreakdown paxType="CHD" amount="33.25" taxes="11.25" fees="0" duTax="0"/>
						<PaxBreakdown paxType="INF" amount="10.12" taxes="10.12" fees="0" duTax="0"/>
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
				<HasObFees>false</HasObFees>
			</Fare>
			<Fare id="1" providerCode="AMD" fareType="OW">
				<Conditions>
					<Condition id="PEN">
						<Text>TICKETS ARE NON-REFUNDABLE</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 20FEB19, - SEE ADV PURCHASE</Text>
					</Condition>
					<Condition id="SUR">
						<Text>FARE VALID FOR E TICKET ONLY</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="0" carrier="IB" familyFare="BASIC">
						<SegmentReferences>
							<SegmentReference segmentRef="1">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="O" paxRef="0" fareBasis="ODNOB3" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="O" paxRef="1" fareBasis="ODNOB3" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="O" paxRef="2" fareBasis="ODNOB3" fareType="PUB" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="1"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="1" availabilityJourneyRef="0" numStopOvers="0" carrier="IB" familyFare="BASIC">
						<SegmentReferences>
							<SegmentReference segmentRef="2">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="O" paxRef="0" fareBasis="ODNOB3" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="O" paxRef="1" fareBasis="ODNOB3" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="O" paxRef="2" fareBasis="ODNOB3" fareType="PUB" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="2"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="97.86" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="42.62" taxes="9.62" fees="0" duTax="0"/>
						<PaxBreakdown paxType="CHD" amount="42.62" taxes="9.62" fees="0" duTax="0"/>
						<PaxBreakdown paxType="INF" amount="12.62" taxes="9.62" fees="0" duTax="0"/>
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
				<HasObFees>false</HasObFees>
			</Fare>
			<Fare id="2" providerCode="AMD" fareType="OW">
				<Conditions>
					<Condition id="PEN">
						<Text>TICKETS ARE NON-REFUNDABLE</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 20FEB19, - SEE ADV PURCHASE</Text>
					</Condition>
					<Condition id="APM">
						<Text>PRIVATE RATES USED *F*</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="0" carrier="UX" familyFare="LITE">
						<SegmentReferences>
							<SegmentReference segmentRef="3">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="T" paxRef="0" fareBasis="TDOW5L" fareType="PRI" avail="9"/>
									<SegmentClass cabinClass="Y" class="T" paxRef="1" fareBasis="TDOW5L" fareType="PRI" avail="9"/>
									<SegmentClass cabinClass="Y" class="T" paxRef="2" fareBasis="TDOW5L" fareType="PRI" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
									<Attribute key="Ltd" value="20/02/2019"/>
									<Attribute key="claseCabina" value="N"/>
									<Attribute key="breakPoint" value="Y"/>
									<Attribute key="fareType" value="PRI"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="3"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="1" availabilityJourneyRef="0" numStopOvers="0" carrier="UX" familyFare="LITE">
						<SegmentReferences>
							<SegmentReference segmentRef="4">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="T" paxRef="0" fareBasis="TDOW5L" fareType="PRI" avail="9"/>
									<SegmentClass cabinClass="Y" class="T" paxRef="1" fareBasis="TDOW5L" fareType="PRI" avail="9"/>
									<SegmentClass cabinClass="Y" class="T" paxRef="2" fareBasis="TDOW5L" fareType="PRI" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
									<Attribute key="Ltd" value="20/02/2019"/>
									<Attribute key="claseCabina" value="N"/>
									<Attribute key="breakPoint" value="Y"/>
									<Attribute key="fareType" value="PRI"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="4"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="179.86" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="94.62" taxes="9.62" fees="0" duTax="0"/>
						<PaxBreakdown paxType="CHD" amount="66.62" taxes="9.62" fees="0" duTax="0"/>
						<PaxBreakdown paxType="INF" amount="18.62" taxes="9.62" fees="0" duTax="0"/>
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
				<HasObFees>false</HasObFees>
			</Fare>
		</Fares>
	</Transportation>
</AvailabilityRS>
~~~

**Operation 2 - Round trip request:**

Example: Search for 2 journyes, outbound destination = inbound origin,  with 2 adults (ADT).

AvailabilityRQ:

~~~xml
<AvailabilityRQ xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" tripType="RT">
	<timeoutMilliseconds>60000</timeoutMilliseconds>
	<source>
		<agencyCode/>
		<languageCode/>
	</source>
	<filterAuditData>
		<registerTransactions>true</registerTransactions>
	</filterAuditData>
	<optionsQuota>0</optionsQuota>
	<Configuration providerCode="AMD">
		<Credentials officeId="" user="" password="">
			<UrlGeneric/>
			<UrlSpecifics>
				<Attribute key="" value=""/>
			</UrlSpecifics>
		</Credentials>
		<Attributes>
			<Attribute key="" value=""/>
		</Attributes>
	</Configuration>
	<ClientConfiguration agency="" currencyCode="EUR"/>
	<Journeys>
		<Journey id="0" departureDate="26/04/2019" departureTime="" action="N">
			<OriginLoc type="A" code="PMI" cityCode="false"/>
			<DestinationLoc type="A" code="MAD" cityCode="false"/>
		</Journey>
		<Journey id="1" departureDate="03/05/2019" departureTime="" action="N">
			<OriginLoc type="A" code="MAD" cityCode="false"/>
			<DestinationLoc type="A" code="PMI" cityCode="false"/>
		</Journey>
	</Journeys>
	<Passengers>
		<Passenger id="0" age="30">
			<Bonuses resident="N" largeFamily="N" discountCard="N"/>
		</Passenger>
		<Passenger id="1" age="30">
			<Bonuses resident="N" largeFamily="N" discountCard="N"/>
		</Passenger>
	</Passengers>
	<Preferences cabinClass="N" lowCostIncluded="false" onlyNonStop="false" onlyTrain="false"
		allowOverNight="false" trainIncluded="false" cheapestFares="false" brandedFares="false">
		<lightAvail>false</lightAvail>
	</Preferences>
</AvailabilityRQ>
~~~

AvailabilityRS:

~~~xml
<AvailabilityRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<auditData>
		<transactions>
			<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
			<RQ/>
			<RS/>
		</transactions>
		<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
		<processTimeMilliseconds>4434</processTimeMilliseconds>
	</auditData>
	<operationImplemented>true</operationImplemented>
	<ResponseStatus direction="OUTBOUND" tripType="RT" status="OK"/>
	<Transportation totalFares="3">
		<Segments>
			<Segment id="0" transportationId="FR5431" transportationType="A" operatingCarrier="FR" marketingCarrier="FR" departureDate="2019-04-26T23:05:00" arrivalDate="2019-04-27T00:35:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="738" segmentStatus="HK" electronicTicket="false" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="1" transportationId="FR2052" transportationType="A" operatingCarrier="FR" marketingCarrier="FR" departureDate="2019-04-26T06:25:00" arrivalDate="2019-04-26T08:00:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="738" segmentStatus="HK" electronicTicket="false" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="2" transportationId="FR2054" transportationType="A" operatingCarrier="FR" marketingCarrier="FR" departureDate="2019-04-26T14:15:00" arrivalDate="2019-04-26T15:50:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="738" segmentStatus="HK" electronicTicket="false" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="3" transportationId="D86772" transportationType="A" operatingCarrier="D8" marketingCarrier="D8" arrivalTerminal="2" departureDate="2019-04-26T21:40:00" arrivalDate="2019-04-26T23:05:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="73H" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="4" transportationId="IB3915" transportationType="A" operatingCarrier="I2" marketingCarrier="IB" arrivalTerminal="4" departureDate="2019-04-26T19:10:00" arrivalDate="2019-04-26T20:35:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="32A" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="5" transportationId="IB3921" transportationType="A" operatingCarrier="I2" marketingCarrier="IB" arrivalTerminal="4" departureDate="2019-04-26T21:25:00" arrivalDate="2019-04-26T22:50:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="321" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="6" transportationId="FR5432" transportationType="A" operatingCarrier="FR" marketingCarrier="FR" departureDate="2019-05-03T19:00:00" arrivalDate="2019-05-03T20:25:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="738" segmentStatus="HK" electronicTicket="false" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="PMI" cityCode="false"/>
			</Segment>
			<Segment id="7" transportationId="FR5430" transportationType="A" operatingCarrier="FR" marketingCarrier="FR" departureDate="2019-05-03T21:00:00" arrivalDate="2019-05-03T22:30:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="738" segmentStatus="HK" electronicTicket="false" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="PMI" cityCode="false"/>
			</Segment>
			<Segment id="8" transportationId="FR2051" transportationType="A" operatingCarrier="FR" marketingCarrier="FR" departureDate="2019-05-03T08:35:00" arrivalDate="2019-05-03T10:10:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="738" segmentStatus="HK" electronicTicket="false" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="PMI" cityCode="false"/>
			</Segment>
			<Segment id="9" transportationId="FR2063" transportationType="A" operatingCarrier="FR" marketingCarrier="FR" departureDate="2019-05-03T14:00:00" arrivalDate="2019-05-03T15:35:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="738" segmentStatus="HK" electronicTicket="false" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="PMI" cityCode="false"/>
			</Segment>
			<Segment id="10" transportationId="FR2053" transportationType="A" operatingCarrier="FR" marketingCarrier="FR" departureDate="2019-05-03T16:25:00" arrivalDate="2019-05-03T18:00:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="738" segmentStatus="HK" electronicTicket="false" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="PMI" cityCode="false"/>
			</Segment>
			<Segment id="1" transportationId="FR2061" transportationType="A" operatingCarrier="FR" marketingCarrier="FR" departureDate="2019-05-03T19:45:00" arrivalDate="2019-05-03T21:20:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="738" segmentStatus="HK" electronicTicket="false" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="PMI" cityCode="false"/>
			</Segment>
			<Segment id="12" transportationId="D86771" transportationType="A" operatingCarrier="D8" marketingCarrier="D8" departureTerminal="2" departureDate="2019-05-03T07:00:00" arrivalDate="2019-05-03T08:20:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="73H" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="PMI" cityCode="false"/>
			</Segment>
			<Segment id="13" transportationId="IB3916" transportationType="A" operatingCarrier="I2" marketingCarrier="IB" departureTerminal="4" departureDate="2019-05-03T22:10:00" arrivalDate="2019-05-03T23:30:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="32A" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="PMI" cityCode="false"/>
			</Segment>
		</Segments>
		<Fares>
			<Fare id="0" providerCode="AMD" fareType="RT">
				<Conditions/>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="0" carrier="FR">
						<SegmentReferences>
							<SegmentReference segmentRef="0">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="R" paxRef="0" fareBasis="R" fareType="PUB" avail="4"/>
									<SegmentClass cabinClass="Y" class="R" paxRef="1" fareBasis="R" fareType="PUB" avail="4"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="0"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="1" availabilityJourneyRef="0" numStopOvers="0" carrier="FR">
						<SegmentReferences>
							<SegmentReference segmentRef="1">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="R" paxRef="0" fareBasis="R" fareType="PUB" avail="4"/>
									<SegmentClass cabinClass="Y" class="R" paxRef="1" fareBasis="R" fareType="PUB" avail="4"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="1"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="2" availabilityJourneyRef="0" numStopOvers="0" carrier="FR">
						<SegmentReferences>
							<SegmentReference segmentRef="2">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="R" paxRef="0" fareBasis="R" fareType="PUB" avail="4"/>
									<SegmentClass cabinClass="Y" class="R" paxRef="1" fareBasis="R" fareType="PUB" avail="4"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="2"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="3" availabilityJourneyRef="1" numStopOvers="0" carrier="FR">
						<SegmentReferences>
							<SegmentReference segmentRef="6">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="R" paxRef="0" fareBasis="R" fareType="PUB" avail="2"/>
									<SegmentClass cabinClass="Y" class="R" paxRef="1" fareBasis="R" fareType="PUB" avail="2"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="6"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="4" availabilityJourneyRef="1" numStopOvers="0" carrier="FR">
						<SegmentReferences>
							<SegmentReference segmentRef="7">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="R" paxRef="0" fareBasis="R" fareType="PUB" avail="2"/>
									<SegmentClass cabinClass="Y" class="R" paxRef="1" fareBasis="R" fareType="PUB" avail="2"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="7"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="5" availabilityJourneyRef="1" numStopOvers="0" carrier="FR">
						<SegmentReferences>
							<SegmentReference segmentRef="8">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="R" paxRef="0" fareBasis="R" fareType="PUB" avail="2"/>
									<SegmentClass cabinClass="Y" class="R" paxRef="1" fareBasis="R" fareType="PUB" avail="2"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="8"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="6" availabilityJourneyRef="1" numStopOvers="0" carrier="FR">
						<SegmentReferences>
							<SegmentReference segmentRef="9">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="R" paxRef="0" fareBasis="R" fareType="PUB" avail="2"/>
									<SegmentClass cabinClass="Y" class="R" paxRef="1" fareBasis="R" fareType="PUB" avail="2"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="9"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="7" availabilityJourneyRef="1" numStopOvers="0" carrier="FR">
						<SegmentReferences>
							<SegmentReference segmentRef="10">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="R" paxRef="0" fareBasis="R" fareType="PUB" avail="2"/>
									<SegmentClass cabinClass="Y" class="R" paxRef="1" fareBasis="R" fareType="PUB" avail="2"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="10"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="8" availabilityJourneyRef="1" numStopOvers="0" carrier="FR">
						<SegmentReferences>
							<SegmentReference segmentRef="11">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="R" paxRef="0" fareBasis="R" fareType="PUB" avail="2"/>
									<SegmentClass cabinClass="Y" class="R" paxRef="1" fareBasis="R" fareType="PUB" avail="2"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>

						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="11"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="90.36" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="45.18" taxes="0" fees="0" duTax="0"/>
					</PaxBreakdowns>
				</AmountBreakdown>
				<PaxConfigurations>
					<PaxConfiguration id="0" paxRef="0" age="30" paxType="ADT">
						<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
					</PaxConfiguration>
					<PaxConfiguration id="1" paxRef="1" age="30" paxType="ADT">
						<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
					</PaxConfiguration>
				</PaxConfigurations>
				<HasObFees>false</HasObFees>
			</Fare>
			<Fare id="1" providerCode="AMD" fareType="RT">
				<Conditions>
					<Condition id="PEN">
						<Text>TICKETS ARE NON-REFUNDABLE</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 19FEB19, - SEE ADV PURCHASE</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="0" carrier="DY">
						<SegmentReferences>
							<SegmentReference segmentRef="3">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="P" paxRef="0" fareBasis="PJIPPI" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="P" paxRef="1" fareBasis="PJIPPI" fareType="PUB" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="3"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="2" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="1" availabilityJourneyRef="1" numStopOvers="0" carrier="DY">
						<SegmentReferences>
							<SegmentReference segmentRef="12">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="X" paxRef="0" fareBasis="XJIPPI" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="X" paxRef="1" fareBasis="XJIPPI" fareType="PUB" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>

						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="12"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="2" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="144.98" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="72.49" taxes="33.49" fees="0" duTax="0"/>
					</PaxBreakdowns>
				</AmountBreakdown>
				<PaxConfigurations>
					<PaxConfiguration id="0" paxRef="0" age="30" paxType="ADT">
						<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
					</PaxConfiguration>
					<PaxConfiguration id="1" paxRef="1" age="30" paxType="ADT">
						<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
					</PaxConfiguration>
				</PaxConfigurations>
				<HasObFees>false</HasObFees>
			</Fare>
			<Fare id="2" providerCode="AMD" fareType="RT">
				<Conditions>
					<Condition id="PEN">
						<Text>TICKETS ARE NON-REFUNDABLE</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 20FEB19, - SEE ADV PURCHASE</Text>
					</Condition>
					<Condition id="SUR">
						<Text>FARE VALID FOR E TICKET ONLY</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="0" carrier="IB" familyFare="BASIC">
						<SegmentReferences>
							<SegmentReference segmentRef="4">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="O" paxRef="0" fareBasis="ODNNB3" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="O" paxRef="1" fareBasis="ODNNB3" fareType="PUB" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="4"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="1" availabilityJourneyRef="0" numStopOvers="0" carrier="IB" familyFare="BASIC">
						<SegmentReferences>
							<SegmentReference segmentRef="5">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="O" paxRef="0" fareBasis="ODNNB3" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="O" paxRef="1" fareBasis="ODNNB3" fareType="PUB" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="5"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="2" availabilityJourneyRef="1" numStopOvers="0" carrier="IB" familyFare="BASIC">
						<SegmentReferences>
							<SegmentReference segmentRef="13">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="Q" paxRef="0" fareBasis="QDNNB3" fareType="PUB" avail="6"/>
									<SegmentClass cabinClass="Y" class="Q" paxRef="1" fareBasis="QDNNB3" fareType="PUB" avail="6"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="13"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="221.88" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="110.94" taxes="29.94" fees="0" duTax="0"/>
					</PaxBreakdowns>
				</AmountBreakdown>
				<PaxConfigurations>
					<PaxConfiguration id="0" paxRef="0" age="30" paxType="ADT">
						<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
					</PaxConfiguration>
					<PaxConfiguration id="1" paxRef="1" age="30" paxType="ADT">
						<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
					</PaxConfiguration>
				</PaxConfigurations>
				<HasObFees>false</HasObFees>
			</Fare>
		</Fares>
	</Transportation>
</AvailabilityRS>
~~~

**Operation 3 - Resident or/and Large Family discounts:**

Example: Search for 2 journeys, with 2 adults (ADT) applying the resident and large family discounts. The discount will be applied to all passengers.

AvailabilityRQ:

~~~xml
<AvailabilityRQ xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" tripType="RT">
	<timeoutMilliseconds>60000</timeoutMilliseconds>
	<source>
		<agencyCode/>
		<languageCode/>
	</source>
	<filterAuditData>
		<registerTransactions>true</registerTransactions>
	</filterAuditData>
	<optionsQuota>0</optionsQuota>
	<Configuration providerCode="AMD">
		<Credentials officeId="" user="" password="">
			<UrlGeneric/>
			<UrlSpecifics>
				<Attribute key="" value=""/>
			</UrlSpecifics>
		</Credentials>
		<Attributes>
			<Attribute key="" value=""/>
		</Attributes>
	</Configuration>
	<ClientConfiguration agency="" currencyCode="EUR"/>
	<Journeys>
		<Journey id="0" departureDate="26/04/2019" departureTime="" action="N">
			<OriginLoc type="A" code="PMI" cityCode="false"/>
			<DestinationLoc type="A" code="MAD" cityCode="false"/>
		</Journey>
		<Journey id="1" departureDate="03/05/2019" departureTime="" action="N">
			<OriginLoc type="A" code="MAD" cityCode="false"/>
			<DestinationLoc type="A" code="PMI" cityCode="false"/>
		</Journey>
	</Journeys>
	<Passengers>
		<Passenger id="0" age="30">
			<Bonuses resident="BP" largeFamily="F1" discountCard="N"/>
		</Passenger>
		<Passenger id="1" age="30">
			<Bonuses resident="BP" largeFamily="F1" discountCard="N"/>
		</Passenger>
	</Passengers>
	<Preferences cabinClass="N" lowCostIncluded="false" onlyNonStop="false" onlyTrain="false" allowOverNight="false" trainIncluded="false" cheapestFares="false" brandedFares="false">
		<lightAvail>false</lightAvail>
	</Preferences>
</AvailabilityRQ>
~~~

AvailabilityRS:

~~~xml
<AvailabilityRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<auditData>
		<transactions>
			<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
			<RQ/>
			<RS/>
		</transactions>
		<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
		<processTimeMilliseconds>5404</processTimeMilliseconds>
	</auditData>
	<operationImplemented>true</operationImplemented>
	<ResponseStatus direction="OUTBOUND" tripType="RT" status="OK"/>
	<Transportation totalFares="2">
		<Segments>
			<Segment id="0" transportationId="UX6012" transportationType="A" operatingCarrier="UX" marketingCarrier="UX" arrivalTerminal="2" departureDate="2019-04-26T08:00:00" arrivalDate="2019-04-26T09:25:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="73H" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="1" transportationId="UX1702" transportationType="A" operatingCarrier="UX" marketingCarrier="UX" departureDate="2019-04-26T08:35:00" arrivalDate="2019-04-26T09:15:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="AT7" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="IBZ" cityCode="false"/>
			</Segment>
			<Segment id="2" transportationId="UX6024" transportationType="A" operatingCarrier="UX" marketingCarrier="UX" arrivalTerminal="2" departureDate="2019-04-26T14:50:00" arrivalDate="2019-04-26T16:05:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="E90" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="IBZ" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="3" transportationId="UX6031" transportationType="A" operatingCarrier="UX" marketingCarrier="UX" departureTerminal="2" departureDate="2019-05-03T08:30:00" arrivalDate="2019-05-03T09:55:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="E90" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="PMI" cityCode="false"/>
			</Segment>
		</Segments>
		<Fares>
			<Fare id="0" providerCode="AMD" fareType="RT">
				<Conditions>
					<Condition id="PEN">
						<Text>TICKETS ARE NON-REFUNDABLE</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 20FEB19, - SEE ADV PURCHASE</Text>
					</Condition>
					<Condition id="APM">
						<Text>PRIVATE RATES USED *F*</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="0" carrier="UX" familyFare="LITE">
						<SegmentReferences>
							<SegmentReference segmentRef="0">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="Q" paxRef="0" fareBasis="QDRT5L" fareType="PRI" avail="8"/>
									<SegmentClass cabinClass="Y" class="Q" paxRef="1" fareBasis="QDRT5L" fareType="PRI" avail="8"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="0"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="1" availabilityJourneyRef="1" numStopOvers="0" carrier="UX" familyFare="LITE">
						<SegmentReferences>
							<SegmentReference segmentRef="3">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="N" paxRef="0" fareBasis="NSUBRT5L" fareType="PRI" avail="9"/>
									<SegmentClass cabinClass="Y" class="N" paxRef="1" fareBasis="NSUBRT5L" fareType="PRI" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="3"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="101.08" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="50.54" taxes="29.94" fees="0" duTax="0"/>
					</PaxBreakdowns>
				</AmountBreakdown>
				<PaxConfigurations>
					<PaxConfiguration id="0" paxRef="0" age="30" paxType="ADT">
						<AppliedBonuses resident="BP" largeFamily="F1" discountCard="N"/>
					</PaxConfiguration>
					<PaxConfiguration id="1" paxRef="1" age="30" paxType="ADT">
						<AppliedBonuses resident="BP" largeFamily="F1" discountCard="N"/>
					</PaxConfiguration>
				</PaxConfigurations>
				<HasObFees>false</HasObFees>
			</Fare>
			<Fare id="1" providerCode="AMD" fareType="RT">
				<Conditions>
					<Condition id="PEN">
						<Text>TICKETS ARE NON-REFUNDABLE</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 20FEB19, - SEE ADV PURCHASE</Text>
					</Condition>
					<Condition id="APM">
						<Text>PRIVATE RATES USED *F*</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="1" carrier="UX" familyFare="ECONOMY">
						<SegmentReferences>
							<SegmentReference segmentRef="1">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="P" paxRef="0" fareBasis="PRT15L" fareType="PRI" avail="9"/>
									<SegmentClass cabinClass="Y" class="P" paxRef="1" fareBasis="PRT15L" fareType="PRI" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
							<SegmentReference segmentRef="2">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="P" paxRef="0" fareBasis="PRT15L" fareType="PRI" avail="9"/>
									<SegmentClass cabinClass="Y" class="P" paxRef="1" fareBasis="PRT15L" fareType="PRI" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="1"/>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="2"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="1" availabilityJourneyRef="1" numStopOvers="0" carrier="UX" familyFare="LITE">
						<SegmentReferences>
							<SegmentReference segmentRef="3">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="N" paxRef="0" fareBasis="NSUBRT5L" fareType="PRI" avail="9"/>
									<SegmentClass cabinClass="Y" class="N" paxRef="1" fareBasis="NSUBRT5L" fareType="PRI" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="3"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="102.94" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="51.47" taxes="28.67" fees="0" duTax="0"/>
					</PaxBreakdowns>
				</AmountBreakdown>
				<PaxConfigurations>
					<PaxConfiguration id="0" paxRef="0" age="30" paxType="ADT">
						<AppliedBonuses resident="BP" largeFamily="F1" discountCard="N"/>
					</PaxConfiguration>
					<PaxConfiguration id="1" paxRef="1" age="30" paxType="ADT">
						<AppliedBonuses resident="BP" largeFamily="F1" discountCard="N"/>
					</PaxConfiguration>
				</PaxConfigurations>
				<HasObFees>false</HasObFees>
			</Fare>
		</Fares>
	</Transportation>
</AvailabilityRS>
~~~

**Operation 4 - Passenger discount codes:**

Example: Search for 2 journeys with 2 adults (ADT) applying an 'IT' discount code to the passengers. The discount will be applied to all passengers.

AvailabilityRQ:

~~~xml
<AvailabilityRQ xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" tripType="RT">
	<timeoutMilliseconds>60000</timeoutMilliseconds>
	<source>
		<agencyCode/>
		<languageCode/>
	</source>
	<filterAuditData>
		<registerTransactions>true</registerTransactions>
	</filterAuditData>
	<optionsQuota>0</optionsQuota>
	<Configuration providerCode="AMD">
		<Credentials officeId="" user="" password="">
			<UrlGeneric/>
			<UrlSpecifics>
				<Attribute key="" value=""/>
			</UrlSpecifics>
		</Credentials>
		<Attributes>
			<Attribute key="" value=""/>
		</Attributes>
	</Configuration>
	<ClientConfiguration agency="" currencyCode="EUR"/>
	<Journeys>
		<Journey id="0" departureDate="26/04/2019" departureTime="" action="N">
			<OriginLoc type="A" code="VLC" cityCode="false"/>
			<DestinationLoc type="A" code="YYZ" cityCode="false"/>
		</Journey>
		<Journey id="1" departureDate="03/05/2019" departureTime="" action="N">
			<OriginLoc type="A" code="YYZ" cityCode="false"/>
			<DestinationLoc type="A" code="VLC" cityCode="false"/>
		</Journey>
	</Journeys>
	<Passengers>
		<Passenger id="0" age="30">
			<Bonuses resident="N" largeFamily="N" discountCard="N">
				<PaxTypeCodes>
					<PaxTypeCode code="IT"/>
				</PaxTypeCodes>
			</Bonuses>
		</Passenger>
		<Passenger id="1" age="30">
			<Bonuses resident="N" largeFamily="N" discountCard="N">
				<PaxTypeCodes>
					<PaxTypeCode code="IT"/>
				</PaxTypeCodes>
			</Bonuses>
		</Passenger>
	</Passengers>
	<Preferences cabinClass="N" lowCostIncluded="false" onlyNonStop="false" onlyTrain="false" allowOverNight="false" trainIncluded="false" cheapestFares="false" brandedFares="false">
		<lightAvail>false</lightAvail>
	</Preferences>
</AvailabilityRQ>
~~~

AvailabilityRS:

~~~xml
<AvailabilityRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<auditData>
		<transactions>
			<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
			<RQ/>
			<RS/>
		</transactions>
		<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
		<processTimeMilliseconds>10741</processTimeMilliseconds>
	</auditData>
	<operationImplemented>true</operationImplemented>
	<ResponseStatus direction="OUTBOUND" tripType="RT" status="OK"/>
	<Transportation totalFares="1">
		<Segments>
			<Segment id="0" transportationId="KL1502" transportationType="A" operatingCarrier="KL" marketingCarrier="KL" departureDate="2019-04-26T06:20:00" arrivalDate="2019-04-26T09:00:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="E90" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="VLC" cityCode="false"/>
				<DestinationLoc type="A" code="AMS" cityCode="false"/>
			</Segment>
			<Segment id="1" transportationId="KL695" transportationType="A" operatingCarrier="KL" marketingCarrier="KL" arrivalTerminal="3" departureDate="2019-04-26T17:55:00" arrivalDate="2019-04-26T19:50:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="74E" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="AMS" cityCode="false"/>
				<DestinationLoc type="A" code="YYZ" cityCode="false"/>
			</Segment>
			<Segment id="2" transportationId="KL1504" transportationType="A" operatingCarrier="KL" marketingCarrier="KL" departureDate="2019-04-26T17:15:00" arrivalDate="2019-04-26T19:55:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="E90" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="VLC" cityCode="false"/>
				<DestinationLoc type="A" code="AMS" cityCode="false"/>
			</Segment>
			<Segment id="3" transportationId="KL691" transportationType="A" operatingCarrier="KL" marketingCarrier="KL" arrivalTerminal="3" departureDate="2019-04-27T09:45:00" arrivalDate="2019-04-27T11:40:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="744" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="AMS" cityCode="false"/>
				<DestinationLoc type="A" code="YYZ" cityCode="false"/>
			</Segment>
			<Segment id="4" transportationId="DL9699" transportationType="A" operatingCarrier="KL" marketingCarrier="DL" departureTerminal="3" departureDate="2019-05-03T17:15:00" arrivalDate="2019-05-04T06:25:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="772" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="YYZ" cityCode="false"/>
				<DestinationLoc type="A" code="AMS" cityCode="false"/>
			</Segment>
			<Segment id="5" transportationId="DL9475" transportationType="A" operatingCarrier="KL" marketingCarrier="DL" departureDate="2019-05-04T16:40:00" arrivalDate="2019-05-04T19:05:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="73H" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="AMS" cityCode="false"/>
				<DestinationLoc type="A" code="VLC" cityCode="false"/>
			</Segment>
		</Segments>
		<Fares>
			<Fare id="0" providerCode="AMD" fareType="RT">
				<Conditions>
					<Condition id="PEN">
						<Text>PENALTY APPLIES</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 26APR19, - DATE OF ORIGIN</Text>
					</Condition>
					<Condition id="APM">
						<Text>NOT FARED AT PASSENGER TYPE REQUESTED *5*, AIRLINE MAY REQUIRE
							INCLUSIVE TOUR NUMBER ON TICKET</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="1" carrier="DL">
						<SegmentReferences>
							<SegmentReference segmentRef="0">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="L" paxRef="0" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
									<SegmentClass cabinClass="Y" class="L" paxRef="1" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="260419"/>
								</ReservationTokens>
							</SegmentReference>
							<SegmentReference segmentRef="1">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="T" paxRef="0" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
									<SegmentClass cabinClass="Y" class="T" paxRef="1" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="260419"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="0"/>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="1"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="1" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="1" availabilityJourneyRef="0" numStopOvers="1" carrier="DL">
						<SegmentReferences>
							<SegmentReference segmentRef="2">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="L" paxRef="0" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
									<SegmentClass cabinClass="Y" class="L" paxRef="1" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="260419"/>
								</ReservationTokens>
							</SegmentReference>
							<SegmentReference segmentRef="3">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="T" paxRef="0" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
									<SegmentClass cabinClass="Y" class="T" paxRef="1" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="260419"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="2"/>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="3"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="1" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="2" availabilityJourneyRef="1" numStopOvers="1" carrier="DL" familyFare="MAINCABIN">
						<SegmentReferences>
							<SegmentReference segmentRef="4">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="T" paxRef="0" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
									<SegmentClass cabinClass="Y" class="T" paxRef="1" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="260419"/>
								</ReservationTokens>
							</SegmentReference>
							<SegmentReference segmentRef="5">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="T" paxRef="0" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
									<SegmentClass cabinClass="Y" class="T" paxRef="1" fareBasis="TLTO0ES" fareType="NEGO" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="260419"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="4"/>
										<SegmentReference itineraryRef="0" journeyRef="1" segmentRef="5"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="1" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="1283.88" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="641.94" taxes="318.94" fees="0" duTax="0"/>
					</PaxBreakdowns>
				</AmountBreakdown>
				<PaxConfigurations>
					<PaxConfiguration id="0" paxRef="0" age="30" paxType="ADT">
						<AppliedBonuses resident="N" largeFamily="N" discountCard="N">
							<PaxTypeCodes>
								<PaxTypeCode code="IT"/>
							</PaxTypeCodes>
						</AppliedBonuses>
					</PaxConfiguration>
					<PaxConfiguration id="1" paxRef="1" age="30" paxType="ADT">
						<AppliedBonuses resident="N" largeFamily="N" discountCard="N">
							<PaxTypeCodes>
								<PaxTypeCode code="IT"/>
							</PaxTypeCodes>
						</AppliedBonuses>
					</PaxConfiguration>
				</PaxConfigurations>
				<HasObFees>false</HasObFees>
			</Fare>
		</Fares>
	</Transportation>
</AvailabilityRS>
~~~

**Operation 5 - INCLUDE/EXCLUDE airline filtering:**

Example: Search for 1 journey with 1 adult (ADT), filtering the search for an airline only (INCLUDED). You can choose to filter out an airline (EXCLUDED).

AvailabilityRQ:

~~~xml
<AvailabilityRQ xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" tripType="OW">
	<timeoutMilliseconds>60000</timeoutMilliseconds>
	<source>
		<agencyCode/>
		<languageCode/>
	</source>
	<filterAuditData>
		<registerTransactions>true</registerTransactions>
	</filterAuditData>
	<optionsQuota>0</optionsQuota>
	<Configuration providerCode="AMD">
		<Credentials officeId="" user="" password="">
			<UrlGeneric/>
			<UrlSpecifics>
				<Attribute key="" value=""/>
			</UrlSpecifics>
		</Credentials>
		<Attributes>
			<Attribute key="" value=""/>
		</Attributes>
	</Configuration>
	<ClientConfiguration agency="" currencyCode="EUR"/>
	<Journeys>
		<Journey id="0" departureDate="10/04/2019" departureTime="" action="N">
			<OriginLoc type="A" code="PMI" cityCode="false"/>
			<DestinationLoc type="A" code="BCN" cityCode="false"/>
		</Journey>
	</Journeys>
	<Passengers>
		<Passenger id="0" age="30">
			<Bonuses resident="N" largeFamily="N" discountCard="N"/>
		</Passenger>
		<Passenger id="1" age="8">
			<Bonuses resident="N" largeFamily="N" discountCard="N"/>
		</Passenger>
		<Passenger id="2" age="1">
			<Bonuses resident="N" largeFamily="N" discountCard="N"/>
		</Passenger>
	</Passengers>
	<Preferences cabinClass="N" lowCostIncluded="false" onlyNonStop="false" onlyTrain="false" allowOverNight="false" trainIncluded="false" cheapestFares="false" brandedFares="false">
		<ConnexionCompanies>
			<ConnexionCompany carrier="IB" mode="INCLUDED"/>
		</ConnexionCompanies>
		<lightAvail>false</lightAvail>
	</Preferences>
</AvailabilityRQ>
~~~

AvailabilityRS:

~~~xml
<AvailabilityRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<auditData>
		<transactions>
			<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
			<RQ/>
			<RS/>
		</transactions>
		<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
		<processTimeMilliseconds>5451</processTimeMilliseconds>
	</auditData>
	<operationImplemented>true</operationImplemented>
	<ResponseStatus direction="OUTBOUND" tripType="OW" status="OK"/>
	<Transportation totalFares="3">
		<Segments>
			<Segment id="0" transportationId="IB5593" transportationType="A" operatingCarrier="VY" marketingCarrier="IB" arrivalTerminal="1" departureDate="2019-04-10T13:15:00" arrivalDate="2019-04-10T14:10:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="320" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="BCN" cityCode="false"/>
			</Segment>
			<Segment id="1" transportationId="IB3921" transportationType="A" operatingCarrier="I2" marketingCarrier="IB" arrivalTerminal="4" departureDate="2019-04-10T21:25:00" arrivalDate="2019-04-10T22:50:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="321" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="PMI" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="2" transportationId="IB630" transportationType="A" operatingCarrier="IB" marketingCarrier="IB" departureTerminal="4" arrivalTerminal="1" departureDate="2019-04-11T06:30:00" arrivalDate="2019-04-11T07:45:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="32A" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="MAD" cityCode="false"/>
				<DestinationLoc type="A" code="BCN" cityCode="false"/>
			</Segment>
		</Segments>
		<Fares>
			<Fare id="1" providerCode="AMD" fareType="OW">
				<Conditions>
					<Condition id="PEN">
						<Text>TICKETS ARE NON-REFUNDABLE</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 20FEB19, - SEE ADV PURCHASE</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="0" carrier="IB" familyFare="OPTIMA">
						<SegmentReferences>
							<SegmentReference segmentRef="0">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="Q" paxRef="0" fareBasis="QOWNVY" fareType="PUB" avail="4"/>
									<SegmentClass cabinClass="Y" class="Q" paxRef="1" fareBasis="QOWNVY" fareType="PUB" avail="4"/>
									<SegmentClass cabinClass="Y" class="Q" paxRef="2" fareBasis="QOWNVY" fareType="PUB" avail="4"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="0"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="1" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="167.86" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="72.62" taxes="9.62" fees="0" duTax="0"/>
						<PaxBreakdown paxType="CHD" amount="72.62" taxes="9.62" fees="0" duTax="0"/>
						<PaxBreakdown paxType="INF" amount="22.62" taxes="9.62" fees="0" duTax="0"/>
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
				<HasObFees>false</HasObFees>
			</Fare>
			<Fare id="2" providerCode="AMD" fareType="OW">
				<Conditions>
					<Condition id="PEN">
						<Text>TICKETS ARE NON-REFUNDABLE</Text>
					</Condition>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 20FEB19, - SEE ADV PURCHASE</Text>
					</Condition>
					<Condition id="SUR">
						<Text>FARE VALID FOR E TICKET ONLY</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="1" carrier="IB" familyFare="BASIC">
						<SegmentReferences>
							<SegmentReference segmentRef="1">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="A" paxRef="0" fareBasis="AD7OB3" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="A" paxRef="1" fareBasis="AD7OB3" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="A" paxRef="2" fareBasis="AD7OB3" fareType="PUB" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
							<SegmentReference segmentRef="2">
								<SegmentClasses>
									<SegmentClass cabinClass="Y" class="O" paxRef="0" fareBasis="ODUUB4" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="O" paxRef="1" fareBasis="ODUUB4" fareType="PUB" avail="9"/>
									<SegmentClass cabinClass="Y" class="O" paxRef="2" fareBasis="ODUUB4" fareType="PUB" avail="9"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="200219"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="1"/>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="2"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="0" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="173.16" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="73.72" taxes="22.72" fees="0" duTax="0"/>
						<PaxBreakdown paxType="CHD" amount="73.72" taxes="22.72" fees="0" duTax="0"/>
						<PaxBreakdown paxType="INF" amount="25.72" taxes="22.72" fees="0" duTax="0"/>
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
				<HasObFees>false</HasObFees>
			</Fare>
		</Fares>
	</Transportation>
</AvailabilityRS>
~~~

**Operation 6 - Cabin Class filtering:**

Example: Search for 1 journey with 1 adult (ADT), filtering the search for those fares which have a concrete cabin class (for instance 'F' for first class).

AvailabilityRQ:

~~~xml
<AvailabilityRQ xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" tripType="OW">
	<timeoutMilliseconds>60000</timeoutMilliseconds>
	<source>
		<agencyCode/>
		<languageCode/>
	</source>
	<filterAuditData>
		<registerTransactions>true</registerTransactions>
	</filterAuditData>
	<optionsQuota>0</optionsQuota>
	<Configuration providerCode="AMD">
		<Credentials officeId="" user="" password="">
			<UrlGeneric/>
			<UrlSpecifics>
				<Attribute key="" value=""/>
			</UrlSpecifics>
		</Credentials>
		<Attributes>
			<Attribute key="" value=""/>
		</Attributes>
	</Configuration>
	<ClientConfiguration agency="" currencyCode="EUR"/>
	<Journeys>
		<Journey id="0" departureDate="10/04/2019" departureTime="" action="N">
			<OriginLoc type="A" code="JFK" cityCode="false"/>
			<DestinationLoc type="A" code="MAD" cityCode="false"/>
		</Journey>
	</Journeys>
	<Passengers>
		<Passenger id="0" age="30">
			<Bonuses resident="N" largeFamily="N" discountCard="N"/>
		</Passenger>
	</Passengers>
	<Preferences cabinClass="F" lowCostIncluded="false" onlyNonStop="false" onlyTrain="false" allowOverNight="false" trainIncluded="false" cheapestFares="false" brandedFares="false">
		<lightAvail>false</lightAvail>
	</Preferences>
</AvailabilityRQ>
~~~

AvailabilityRS:

~~~xml
<AvailabilityRS xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<auditData>
		<transactions>
			<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
			<RQ/>
			<RS/>
		</transactions>
		<timeStamp>0000-00-00T00:00:00.000000+01:00</timeStamp>
		<processTimeMilliseconds>4543</processTimeMilliseconds>
	</auditData>
	<operationImplemented>true</operationImplemented>
	<ResponseStatus direction="OUTBOUND" tripType="OW" status="OK"/>
	<Transportation totalFares="1">
		<Segments>
			<Segment id="0" transportationId="AA6151" transportationType="A" operatingCarrier="BA" marketingCarrier="AA" departureTerminal="B" arrivalTerminal="5" departureDate="2019-04-10T21:35:00" arrivalDate="2019-04-11T09:35:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="789" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="EWR" cityCode="false"/>
				<DestinationLoc type="A" code="LHR" cityCode="false"/>
			</Segment>
			<Segment id="1" transportationId="AA8863" transportationType="A" operatingCarrier="IB" marketingCarrier="AA" departureTerminal="5" arrivalTerminal="4" departureDate="2019-04-11T10:35:00" arrivalDate="2019-04-11T14:05:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="320" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="LHR" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="2" transportationId="AA8810" transportationType="A" operatingCarrier="IB" marketingCarrier="AA" departureTerminal="5" arrivalTerminal="4" departureDate="2019-04-11T11:30:00" arrivalDate="2019-04-11T15:00:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="320" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="LHR" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="3" transportationId="AA6280" transportationType="A" operatingCarrier="BA" marketingCarrier="AA" departureTerminal="5" arrivalTerminal="4S" departureDate="2019-04-11T13:20:00" arrivalDate="2019-04-11T16:45:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="777" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="LHR" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
			<Segment id="4" transportationId="AA6282" transportationType="A" operatingCarrier="BA" marketingCarrier="AA" departureTerminal="5" arrivalTerminal="4S" departureDate="2019-04-11T15:05:00" arrivalDate="2019-04-11T18:35:00" segmentDuration="0" maxCheckinDate="0001-01-01T00:00:00" planeType="320" segmentStatus="HK" electronicTicket="true" hasTechnicalStop="false" secureFlight="false">
				<OriginLoc type="A" code="LHR" cityCode="false"/>
				<DestinationLoc type="A" code="MAD" cityCode="false"/>
			</Segment>
		</Segments>
		<Fares>
			<Fare id="0" providerCode="AMD" fareType="OW">
				<Conditions>
					<Condition id="LTD">
						<Text>LAST TKT DTE, 19MAR19, - SEE ADV PURCHASE</Text>
					</Condition>
					<Condition id="APM">
						<Text>PRIVATE RATES USED *F*</Text>
					</Condition>
				</Conditions>
				<Options>
					<Option id="0" availabilityJourneyRef="0" numStopOvers="1" carrier="AA" familyFare="FFIRFL">
						<SegmentReferences>
							<SegmentReference segmentRef="0">
								<SegmentClasses>
									<SegmentClass cabinClass="F" class="A" paxRef="0" fareBasis="J1N0C9S1" fareType="PRI" avail="4"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190319"/>
								</ReservationTokens>
							</SegmentReference>
							<SegmentReference segmentRef="1">
								<SegmentClasses>
									<SegmentClass cabinClass="C" class="J" paxRef="0" fareBasis="J1N0C9S1" fareType="PRI" avail="7"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190319"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="0"/>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="1"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="3" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="1" availabilityJourneyRef="0" numStopOvers="1" carrier="AA" familyFare="FFIRFL">
						<SegmentReferences>
							<SegmentReference segmentRef="0">
								<SegmentClasses>
									<SegmentClass cabinClass="F" class="A" paxRef="0" fareBasis="J1N0C9S1" fareType="PRI" avail="4"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190319"/>
								</ReservationTokens>
							</SegmentReference>
							<SegmentReference segmentRef="2">
								<SegmentClasses>
									<SegmentClass cabinClass="C" class="J" paxRef="0" fareBasis="J1N0C9S1" fareType="PRI" avail="7"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190319"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="0"/>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="2"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="3" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="2" availabilityJourneyRef="0" numStopOvers="1" carrier="AA" familyFare="FFIRFL">
						<SegmentReferences>
							<SegmentReference segmentRef="0">
								<SegmentClasses>
									<SegmentClass cabinClass="F" class="A" paxRef="0" fareBasis="J1N0C9S1" fareType="PRI" avail="4"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190319"/>
								</ReservationTokens>
							</SegmentReference>
							<SegmentReference segmentRef="3">
								<SegmentClasses>
									<SegmentClass cabinClass="C" class="J" paxRef="0" fareBasis="J1N0C9S1" fareType="PRI" avail="7"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190319"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="0"/>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="3"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="3" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
					<Option id="3" availabilityJourneyRef="0" numStopOvers="1" carrier="AA" familyFare="FFIRFL">
						<SegmentReferences>
							<SegmentReference segmentRef="0">
								<SegmentClasses>
									<SegmentClass cabinClass="F" class="A" paxRef="0" fareBasis="J1N0C9S1" fareType="PRI" avail="4"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190319"/>
								</ReservationTokens>
							</SegmentReference>
							<SegmentReference segmentRef="4">
								<SegmentClasses>
									<SegmentClass cabinClass="C" class="J" paxRef="0" fareBasis="J1N0C9S1" fareType="PRI" avail="7"/>
								</SegmentClasses>
								<ReservationTokens>
									<Attribute key="LtdProv" value="190319"/>
								</ReservationTokens>
							</SegmentReference>
						</SegmentReferences>
						<BaggageTypes>
							<BaggageType checkinType="ONLINE" appliesSegments="REF">
								<References>
									<SegmentReferences>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="0"/>
										<SegmentReference itineraryRef="0" journeyRef="0" segmentRef="4"/>
									</SegmentReferences>
								</References>
								<Baggage type="BAG" quantity="3" maxWeightPerUnit="0" maxTotalWeight="0" paymentInAirport="false" needToken="false"/>
							</BaggageType>
						</BaggageTypes>
					</Option>
				</Options>
				<AmountBreakdown currency="EUR" totalAmount="6400.50" nonCommissionableAmount="0" commission="-1">
					<ChargeBreakdowns/>
					<PaxBreakdowns>
						<PaxBreakdown paxType="ADT" amount="6400.50" taxes="713.50" fees="0" duTax="0"/>
					</PaxBreakdowns>
				</AmountBreakdown>
				<PaxConfigurations>
					<PaxConfiguration id="0" paxRef="0" age="30" paxType="ADT">
						<AppliedBonuses resident="N" largeFamily="N" discountCard="N"/>
					</PaxConfiguration>
				</PaxConfigurations>
				<HasObFees>false</HasObFees>
			</Fare>
		</Fares>
	</Transportation>
</AvailabilityRS>
~~~
