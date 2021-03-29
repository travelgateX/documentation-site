+++
title = "HotelAvailRetrieve"
pagetitle = "HotelAvailRetrieve"
description = "HotelAvailRetrieve message"
icon = "fa-download" 
weight = 2
alwaysopen = false
isDirectory = false
+++


Providers will send a HotelAvailRetrieveRQ message to retrieve a complete break down of availability. TGX will return a break down of hotel / rate plans / rooms.



## HotelAvailRetrieveRQ



**XML Example**



~~~xml
    <HotelAvailRetrieve>
      <request>
        <POS>
          <Source>
            <RequestorID ID = "Provider1"></RequestorID>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"/>
            </BookingChannel>
            <TPA_Extensions>
              <Param key = "onlyActive" value = "0"/>
            </TPA_Extensions>
          </Source>
        </POS>
        <HotelAvailRequests>
          <HotelAvailRequest>
            <DateRange Start = "2013-12-20" End = "2013-12-25"/>
            <HotelRef HotelCode = "12"/>
            <RatePlanCandidates>
              <RatePlanCandidate RatePlanCode = "BAR"></RatePlanCandidate>
            </RatePlanCandidates>
          </HotelAvailRequest>
        </HotelAvailRequests>
      </request>
    </HotelAvailRetrieve>
~~~



| **Element**			| **Number**	| **Type**	| **Description**					|
| ----------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| POS/Source/TPA_Extensions 	| 0..1 		| 		| Optional, empty only active RatePlans/Rooms will be recieved. |
| Param 			| 1 		| 		|							|
| @key 				| 1 		| String 	| onlyActive.						|
| @value			| 1 		| String 	| 1 - You will recieve all active RatePlans/Rooms data. 0 - Active and deactivated RatePlans/Rooms will be recieved. (Same case than wihout TPA_Extensions node). |
| HotelAvailRetrieve/request/HotelAvailRequests/HotelAvailRequest | 1 |	| Root Node.					|
| DateRange 			| 1 		| 		| Contains date filter.					|
| @Start 			| 1 		| Date 		| Start date to search rates.				|
| @End 				| 1 		| Date 		| End date to search rates.				|
| HotelRef 			| 1 		| 		| Contains hotel filter.				|
| @HotelCode 			| 1 		| String 	| Hotel date to search rates.				|
| RatePlanCandidates 		| 0..1 		| 		| If exists, contains rate filter.			|
| RatePlanCandidates/RatePlanCandidate | 1..n 	| 		|							|
| @RatePlanCode 		| 1 		| String 	| Rate Plan Code to search rates.			 1



## HotelAvailRetrieveRS


**Example for a RatePlan**


~~~xml
    <HotelAvailRetrieveResponse>
      <HotelAvailRetrieveResult>
        <Success/>
        <AvailStatusMessages HotelCode = "12">
          <AvailStatusMessage BookingLimit = "9" BookingSold = "0">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-25" RatePlanCode = "BAR" InvCode = "APT" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "2" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "8" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Status = "Open" SellThroughOpenIndicator = "false" MinAdvancedBookingOffset = "5"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12" BookingSold = "2">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-21" RatePlanCode = "LOWCOST" InvCode = "JUN_1" InvType = "ROOM" Mon = "false" Tue = "false" Weds = "false" Thur = "false" Fri = "true" Sat = "true" Sun = "false"/>
            <RestrictionStatus Restriction = "Master" Status = "Close"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12" BookingSold = "2">
            <StatusApplicationControl Start = "2013-12-22" End = "2013-12-25" RatePlanCode = "LOWCOST" InvCode = "JUN_1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "false" Sat = "false" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "9" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Status = "Close" Restriction = "Arrival"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12" BookingSold = "2">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-25" RatePlanCode = "LOWCOST" InvCode = "STD1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "false">
              <LengthOfStay Time = "1" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "2" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Status = "Open" SellThroughOpenIndicator = "false" MinAdvancedBookingOffset = "6" MaxAdvancedBookingOffset = "999"/>
          </AvailStatusMessage>
          <AvailStatusMessage>
            <StatusApplicationControl Start = "2013-12-26" End = "2013-12-27" RatePlanCode = "LOWCOST" InvCode = "STD1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <RestrictionStatus Status = "Open" SellThroughOpenIndicator = "false" MaxAdvancedBookingOffset = "2"/>
          </AvailStatusMessage>
        </AvailStatusMessages>
      </HotelAvailRetrieveResult>
    </HotelAvailRetrieveResponse>
~~~


**Example for a ***Derived*** RatePlan**


~~~xml
    <HotelAvailRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelAvailRetrieveResult Version = "0">
        <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
        <AvailStatusMessages HotelCode = "1" xmlns = "http://www.opentravel.org/OTA/2003/05">
          <AvailStatusMessage>
            <StatusApplicationControl Start = "2014-07-01" End = "2014-07-31" RatePlanCode = "DRV" Mon = "true" Tue = "true" Weds = "true" Thur = "true" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "false">
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus MinAdvancedBookingOffset = "5"/>
          </AvailStatusMessage>
        </AvailStatusMessages>
      </HotelAvailRetrieveResult>
    </HotelAvailRetrieveResponse>
~~~


| **Element**			| **Number**	| **Type**	| **Description**					|
| ----------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| HotelAvailRetrieveResponse/HotelAvailRetrieveResult | 1 |	| Root Node.						|
| Success    			| 0..1   	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. | 
| AvailStatusMessages		| 0..1   	|		| Present when success.					|
| @HotelCode			| 1		| String	| Hotel code whose information is provided by the method. |
| AvailStatusMessages/AvailStatusMessage | 0..n |		| 							|
| @BookingLimit			| 0..1		| Integer	| Identifies the number of available rooms per Room & RatePlan for the indicated dates. Not mandatory when the @Status is Close or is a derived rate. |
| @BookingSold			| 0..1		| Integer	| Identifies the number of sold rooms per Room & RatePlan for the indicated dates. This value is reset when a new BookingLimit is charged by an HotelAvailNotif request. Not mandatory when the @Status is Close or is a derived rate. |
| AvailStatusMessages/AvailStatusMessage/StatusApplicationControl | 1 |	 |						|
| @Start			| 1		| Date		| Start date.						|
| @End				| 1 		| Date		| End date.						|
| @RatePlanCode			| 1		| String	| Rate Plan Code.					|
| @InvCode			| 0..1		| String	| Room Code. Null for derived rates.  			|
| @InvType			| 0..1		| String	| Product type (ROOM). Null for derived rates.  	|
| @Mon  			| 1 		| Boolean	| Indicates whether the AvailStatusMessage data applies to Mondays. |
| @Tue  			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Tuesdays. |
| @Weds 			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Wednesdays. |
| @Thur 			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Thursdays. |
| @Fri  			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Fridays. |
| @Sat  			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Saturdays. |
| @Sun  			| 1		| Boolean	| Indicates whether the AvailStatusMessage data applies to Sundays. |
| AvailStatusMessages/AvailStatusMessage/LengthsOfStay | 0..1 | |							|
| @ArrivalDateBased		| 0..1		| Boolean	| When its true, the minimum and maximum stay is checked ONLY the first day of the availability, when false or not indicated, the minimum and maximum stay is checked all the availability days. |
| AvailStatusMessages/AvailStatusMessage/LengthsOfStay/LengthOfStay | 1..2 | | 						|
| @Time 			| 1		| Integer	| Indicates the number of @TimeUnit for this stay.	|
| @TimeUnit			| 1		| String	| Day.							|
| @MinMaxMessageType		| 1		| String	| (MinLOS, MaxLOS) Indicates the minimum or maximum stay for his AvailStatusMessage. |
| AvailStatusMessages/AvailStatusMessage/RestrictionStatus | 0..1 | |			 				|
| @Status			| 1		| String	| (Open, Close).					|
| @Restriction			| 0..1		| String	| Master. This is the master availability. If master availability is ‘Closed’, the product is not bookable if any of the stay dates includes one of the dates specified by the Application Control element. If master availability is ‘Open’, additional restrictions on arrival and departure may be placed (Master, Arrival, Departure). |
| @MinAdvancedBookingOffset	| 0..1		| Integer	| Minimum number of days before the check-in date aftere which the product is not available to be booked. This restriction is usually used to offer discounts on early bookings. |
| @MaxAdvancedBookingOffset	| 0..1		| Integer	| Maximum number of days before the check-in date after which the product is not available to be booked. This restriction is usually used to offer last minute discounts on unsold inventory. |
| @SellThroughOpenIndicator	| 0..1		| Boolean	| When @Status is open, in this element you can indicate this room or room/ratePlan can be sold without limit (like BookingLimit=MaxInteger). Null for derived rates. |
