---
title: Enum
keywords: transportation, data structure, flights, enum
search: Transportation - Flights - Data Structure - Enum
sidebar: mydoc_sidebar
permalink: /docs/transportation/enum
---

# Enumerate description


### Resident discount type
| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| N | None |
| BP | Balearic Islands resident flying to mainland |
| BI | Balearic Islands resident flying to another balearic island |
| DC | Canarian Islands resident flying to another Canarian Island |
| RC | Canarian Islands resident flying to mainland |
| RM | Ceuta/Melilla resident |
| STR | Italian resident  discount |
| ELB | Italian resident Elba |
| SDG | Italian resident Sardegna |
| SLC | Italian resident Sicily |
| RE | Ceuta |

### Charge type 

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| TAX  | Tax  |
| CARD  | Card  |
| BAGGAGE  | Baggage  |
| CHECKIN  | Checkin  |
| CARRIER_CHARGES  | Carrier charges  |
| DU_TAX  | DU Taxes  |
| BASE_AMOUNT  | Base import  |
| DISCOUNT  | Discount  |
| VEHICLE  | Vehicle  |
| BANKING_CHARGES  | Bank charges  |
| CURRENCY_CONVERSION_CHARGES  | Currency conversion charges  |
| VEHICLE_FEE  | Vehicle fee  |
| FEE  | Fee  |
| SEAT  | Seat  |
| SUPPLEMENT  | Supplement  |
| TRAVELCARD  | Travel card  |
| PET  | Pet  |
| PET_FEE  | Pet fee  |
| INSURANCE  | Insurance  |
| FAST_TRACK  | Fast Track  |
| PRIORITY_BOARDING  | Priority Boarding  |
| BLOCK_FARE  | Fare lock |
| SPECIAL_ASSISTANCE  | Special assistance  |
| PENALTY  | Penalty  |

### Block Attribute Type 

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| OVER_WING | Over wing seat|
| MIDDLE  | Middle seat |
| AISLE  | Aisle seat  |
| WINDOW  | Window seat  |
| COMPARTMENT  | Compartment |
| LAVATORY | Lavatory |
| LUGGAGE | Luggage seat |
| PHONE | Phone seat |
| POWER | Power |
| TABLE | Table |
| EXITROW | Emergency exit |
| FEETBLOCKED | Feet blocked seat |
| NO_CHILD | No childs allowed seat |
| NO_INFANT | No infants allowed seat |
| XL_SEAT | XL seat |
| RESTRICTED | Seat with some kind of restriction |
| HANDICAP | Special seat for handicap people |
| QUIET | Quiet seat |
| GROUPS | Groups seat |
| NO_PET | No pets allowed seat |
| BULKHEAD | Bulk head seat |
| BLOCKED | Blocked seat |
| UNKNOWN | Unknown characterstic |
| LAST_OFF | Last off |

### Refund type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| ALL | Fare and taxes will be refunded |
| FARE | Only fare will be refunded |
| TAXES | Only taxes will be refunded |
| AUTO | GDS automatic ticket change |
| PARTIAL | Partial refund. Not all journeys |

### Refund process type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| INFO | Informative refund operation |
| PROCESS | Efective refund operation |

### Refund amount type

| **Possible Values**	| **Description**	 |
| --------------------- | ------------------ |
| OTHER | Other refund amount  |
| TAX | Tax amount |
| FLOWN | For partial refund when some segment is already flown |
| PENALTY | Penalty amount|

### Passenger type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| ADT | Adult  |
| CHD | Child |
| INF | Infant|

### Direction type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| DEPARTURE | Outbound  |
| RETURN | Inbound |
| DEPARTURE_RETURN | Outbound and Inbound|

##### Response Status type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| OK | No error found |
| ERR | An error has been ocurred. Ex: No results found, validation error, integration error, provider error, etc|
| TIMEOUT | Deprecated |

### Trip type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| RT | Round Trip. Outbound and inbound with same origin and destination |
| OW | One Way. Outbound|
| OJ | Open Jaw. Outbound and inbound with diferent origin or destination|
| CT | Cicle Trip. Round trip with multiple destinations|

### Locator type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| PROVIDER |  Provider's locator|
| ISSUING | Issue's locator|
| CARRIER | Carrier's locator|
| SERVICE | Service's locator|
| REFUND | Refund's locator|
| CHECKIN | CheckIn's locator|

### Amount Type 

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| N                     | None |
| AMOUNT                | the value is the amount|
| FEE                   | the value is a service fee|
| TOTAL                 | the value is the total amount |
| PERCENTUAL            | the value is a percentage|

### Payment Type 

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| N                     | None |
| CASH                  | the total amount will be charged to the agency|
| CARD                  | the payment will be done with card|

### Issue Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| AIR                   |Passenger tickets  |
| EXTRA                 |Ancillaries (bags, seats, etc.) |
| ALL                   |Both |

### Journey Action Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| N                     |None |
| KF					|Keep flights and fares  |
| K						|Keep flights |
| C						|Change journey |
| A						|Add journey|
| R						|Remove journey|

### Location Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| A                     |Airport |
| S						|Station  |
| P						|Port|

### Special Supplement Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| MISCELANEOUS |  |
| SEAT |  |
| MEAL |  |
| PET |  |
| LOUNGE |  |
| BAGGAGE |  |
| CANOE |  |
| BIKE |  |
| TRAILER |  |
| INSURANCE |  |
| PRIORITY_BOARDING |  |
| FAST_TRACK | |
| FARE_LOCK | |
| SPECIAL_ASSISTANCE | |

### Discount card type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| N | None |
| CHILD |  |
| YOUNG | |
| GET_AWAY | |
| SENIOR | |
| THALYS_CORPORATE | |
| FORFAIT_LYS | |
| ABO_FREQUENCE_1ST_AND_2ND | |
| ABO_FORFAIT_1ST_AND_2ND | |
| BAHN_CARD_REDUCTION | |
| BAHN_CARD_25 | |
| SWITZERLAND_50 | |
| SWITZERLAND_100 | |
| AIR_ARMY | |
| EARTH_ARMY | |
| NAVAL_ARMY | |
| CIVIL_GUARD | |
| FREQUENT_FLYER | |
| CARTA_ARGENTO | |
| CARTA_FRECCIA | |
| UK_ANNUAL_GOLD | |
| UK_CHILD_DISABILITY | |
| UK_DISABILITY | |
| UK_FAMILY_FRIENDS | |
| UK_GROUPSAVE3 | |
| UK_GROUPSAVE4 | |
| UK_HM_ARMED_FORCES | |
| UK_JOBCENTRE_PLUS | |
| UK_NETWORK | |
| UK_SENIOR | |
| UK_TWO_TOGETHER | |
| UK_YOUTH | |
| UK_GROUPSAVE | |

### Transport Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| A                     |Flight |
| T						|Train  |
| B						|Bus|
| F						|Ferry|
| S						|Surface|

### Cabin Class Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| N                     |Unspecified |
| Y						|Tourist |
| C						|Business|
| F						|First|
| CA					|Cabin|
| YP					|Tourist Plus|

### Title Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| MR                        ||
| MRS					    ||
| CHD						||
| INF						||

### Document Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| NATIONAL_ID                        ||
| PASSPORT					    ||
| RESIDENT_ID						||
| FOREIGN_PASSPORT						||
| BIRTH_NOTIFICATION        ||

### Access Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| WEB                        |Web|
| WS					    |Web Service|

### Ticket Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| PAPER                        ||
| ETICKET					    ||
| EXTRA					    ||

### Ticket Status Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| OPEN                          ||
| CONFIRMED					    ||
| VOIDED					    ||
| REFUNDED                      ||

### Amount Applies To Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| BY_RESERVATION                          |Amount applies per reservation|
| BY_PASSENGER					    |Amount applies per passenger|
| BY_SEGMENT					    |Amount applies per each|
| BASE_FARE                      |Amount applies to base fare|
| TAXES         |Amount applies to taxes|
| FOR_ADT |Amount applies per adult|
| FOR_CHD |Amount applies per child|
| FOR_INF |Amount applies per infant|

### Checkin Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| ONLINE                        |The checkin must be done online|
| AIRPORT					    |The checkin must be done in the airport|

### Segment Applies To Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| ALL                           |Applies to all segments|
| OUTBOUND					    |Applies only to outbound segments|
|INBOUND                        |Applies only to inbound segments|
|REF                            |Applies only to referentiated segments|

### Supplement Payment Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| CREDIT_CARD                           ||
| ELECTRONIC_BANKING					    ||

### Filter Mode Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| INCLUDED                           ||
| EXCLUDED                          ||

### Optional Element Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| RM                           |Remark|
| SSR                          |Special Service Request|
| OSI                          |Other Service Information|

### Fare Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| PUB                           |Public fare|
| PRI                           |Private fare|
| NEGO                          |Negotiated fare|
| CORP                          |Corporate fare|

### Block Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| CABIN                           ||
| ROW                           ||
| SEAT                              ||
| UPPERCABIN                         |Upper deck in double-deck aircraft|

### Logical Operator Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| NONE                           ||
| AND                         ||
| OR                              ||

### Verified Resident Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| N                           |None|
| CHECKED                     |Spanish Resident SARA Verification passed|
| NOT_CHECKED                 |Spanish Resident SARA Verification failed|

### Spanish Discount Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| RESIDENT                           ||
| LARGE_FAMILY                     |Spanish Resident SARA Verification passed|

### Checkin Status Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| UNDEFINED||
| IN_PROGRESS                    ||
| ERROR||
| COMPLETE||
| UNCONFIRMED||

### Large Family Discount Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| N||
| F1|General Large Family|
| F2|Special Large Family|

### Segment Status Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| HK| Okey|
| TK|Change of programation|
| UC|Unconfirmed|
| UN|Unable|
| NO|No action taken|
| UD|Undefined|

### Baggage Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| BAG| |
| BIKE||
| WHEELCHAIR||
| SKIS||
| BABY_TROLLEY||
| HAND_BAGGAGE||

### Special Supplement Status Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| N| Unknown|
| INC| Included|
| CHA|Chargeable|
| NOF|Not offered|

### Reservation Status Type

| **Possible Values**	| **Description**	|
| --------------------- | ------------------ |
| CONFIRMED| Booking confirmed|
| CANCELLED| Booking cancelled|
| ON_REQUEST|Booking on request|
| ON_HOLD|Booking in hold|
| ON_HOLD_CANCELLED|Booking on hold cancelled|