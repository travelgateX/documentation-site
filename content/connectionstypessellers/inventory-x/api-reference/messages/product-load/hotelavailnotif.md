+++
title = "HotelAvailNotif"
pagetitle = "HotelAvailNotif"
description = "HotelAvailNotif message"
icon = "fa-upload" 
weight = 1
alwaysopen = false
isDirectory = false
+++



Providers will send a HotelAvailNotifRQ message to push availabilities for seller. TGX will process the data and respond with an error code if needed or success if everything is correct.



## HotelAvailNotifRQ


**Example for a RatePlan**


~~~xml
    <HotelAvailNotif>
      <request>
        <POS>
          <Source>
            <RequestorID ID = "Provider1"></RequestorID>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"></CompanyName>
            </BookingChannel>
          </Source>
        </POS>
        <AvailStatusMessages HotelCode = "12">
          <AvailStatusMessage BookingLimit = "9">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-25" RatePlanCode = "BAR" InvCode = "APT" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "2" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "8" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Status = "Open" SellThroughOpenIndicator = "false" MinAdvancedBookingOffset = "5"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-21" RatePlanCode = "LOWCOST" InvCode = "JUN_1" InvType = "ROOM" Mon = "false" Tue = "false" Weds = "false" Thur = "false" Fri = "true" Sat = "true" Sun = "false"/>
            <RestrictionStatus Restriction = "Master" Status = "Close"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "12">
            <StatusApplicationControl Start = "2013-12-22" End = "2013-12-25" RatePlanCode = "LOWCOST" InvCode = "JUN_1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "false" Sat = "false" Sun = "true"/>
            <RestrictionStatus Status = "Close" Restriction = "Arrival"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "7">
            <StatusApplicationControl Start = "2013-12-20" End = "2013-12-25" RatePlanCode = "LOWCOST" InvCode = "STD1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "9" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus SellThroughOpenIndicator = "true" MinAdvancedBookingOffset = "6"/>
          </AvailStatusMessage>
          <AvailStatusMessage BookingLimit = "5">
            <StatusApplicationControl Start = "2013-12-26" End = "2013-12-27" InvCode = "STD1" InvType = "ROOM" Mon = "true" Tue = "true" Weds = "true" Thur = "false" Fri = "true" Sat = "true" Sun = "true"/>
          </AvailStatusMessage>
        </AvailStatusMessages>
      </request>
    </HotelAvailNotif>
~~~


**Example for a ***Derived*** RatePlan**


~~~xml
    <HotelAvailNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <request Version = "0">
        <POS xmlns = "http://www.opentravel.org/OTA/2003/05">
          <Source>
            <RequestorID ID = "Provider1"></RequestorID>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"></CompanyName>
            </BookingChannel>
          </Source>
        </POS>
        <AvailStatusMessages HotelCode = "1" xmlns = "http://www.opentravel.org/OTA/2003/05">
          <AvailStatusMessage>
            <StatusApplicationControl Sun = "true" Sat = "true" Fri = "true" Thur = "true" Weds = "true" Tue = "true" Mon = "true" RatePlanCode = "DRV" Start = "2014-07-01" End = "2014-07-31"/>
            <LengthsOfStay ArrivalDateBased = "false">
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus MinAdvancedBookingOffset = "5"/>
          </AvailStatusMessage>
          <AvailStatusMessage>
            <StatusApplicationControl Sun = "true" Sat = "true" Fri = "true" Thur = "true" Weds = "true" Tue = "true" Mon = "true" RatePlanCode = "DRV" Start = "2014-08-01" End = "2014-08-15"/>
            <LengthsOfStay ArrivalDateBased = "true">
              <LengthOfStay Time = "5" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
              <LengthOfStay Time = "10" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
            </LengthsOfStay>
            <RestrictionStatus Restriction="Master" Status="Close" />
          </AvailStatusMessage>
        </AvailStatusMessages>
      </request>
    </HotelAvailNotif>
~~~


| **Element**				| **Number** | **Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| HotelAvailNotif/request		| 1  	     |		| Root Node.						|
| AvailStatusMessages			| 1   	     |		|							|
| @HotelCode				| 1	     | String	| Hotel code whose information is provided by the method. |
| AvailStatusMessages/AvailStatusMessage | 1..n	     |		|							|
| @BookingLimit				| 0..1	     | Integer	| Identifies the number of available rooms per Room & RatePlan for the indicated dates. Not mandatory when the @Status is Close. Not used for derived rates. |
| AvailStatusMessages/AvailStatusMessage/StatusApplicationControl | 1 |	 |						|
| @Start				| 1	     | Date	| Start date.						|
| @End  				| 1	     | Date	| End date.						|
| @RatePlanCode				| 1	     | String	| Rate Plan Code.  |
| @InvCode				| 0..1	     | String	| Room Code. Not used for derived rates.		|
| @InvType				| 0..1	     | String	| Product type (ROOM). Not used for derived rates.	|
| @Mon  				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Mondays. |
| @Tue  				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Tuesdays. |
| @Weds 				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Wednesdays. |
| @Thur 				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Thursdays. |
| @Fri  				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Fridays. |
| @Sat  				| 1	     | Boolean	| Indicates whether the AvailStatusMessage data applies to Saturdays. |
| @Sun  				| 1          | Boolean	| Indicates whether the AvailStatusMessage data applies to Sundays. |
| AvailStatusMessages/AvailStatusMessage/LengthsOfStay | 0..1 |	|							|
| @ArrivalDateBased			| 0..1	     | Boolean	| When its true, the minimum and maximum stay is checked ONLY the first day of the availability, when false or not indicated, the minimum and maximum stay is checked all the availability days. If both values are needed two AvailStatusMessage must be send. |
| AvailStatusMessages/AvailStatusMessage/LengthsOfStay/LengthOfStay | 1..2 | |						|
| @Time 				| 1	     | Integer	| Indicates the number of @TimeUnit for this stay.	|
| @TimeUnit				| 1	     | String	| Day.							|
| @MinMaxMessageType			| 1	     | String	| (MinLOS, MaxLOS) Indicates the minimum or maximum stay for his AvailStatusMessage. |
| AvailStatusMessages/AvailStatusMessage/RestrictionStatus | 0..1 |  |							|
| @Status				| 0..1	     | String	| (Open, Close).		|
| @Restriction				| 0..1	     | String	| Master. This is the master availability. If master availability is ‘Closed’, the product is not bookable if any of the stay dates includes one of the dates specified by the Application Control element. If master availability is ‘Open’, additional restrictions on arrival and departure may be placed (Master, Arrival, Departure). |
| @MinAdvancedBookingOffset		| 0..1	     | Integer	| Minimum number of days before the check-in date after which the product is not available to be booked. This restriction is usually used to offer discounts on early bookings. |
| @MaxAdvancedBookingOffset		| 0..1	     | Integer	| Maximum number of days before the check-in date after which the product is not available to be booked. This restriction is usually used to offer last minute discounts on unsold inventory. |
| @SellThroughOpenIndicator		| 0..1	     | Boolean	| When @Status is open, in this element you can indicate this room or room/ratePlan can be sold without limit(like BookingLimit=MaxInteger). Not used for derived rates. |



## HotelAvailNotifRS


Success Response


~~~xml
    <HotelAvailNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelAvailNotifResult>
        <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
      </HotelAvailNotifResult>
    </HotelAvailNotifResponse>
~~~


Error Response


~~~xml
    <HotelAvailNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelAvailNotifResult>
        <Errors xmlns="http://www.opentravel.org/OTA/2003/05">
          <Error ShortText="AvailStatusMessages not found" Code="2"/>
        </Errors>
      </HotelAvailNotifResult>
    </HotelAvailNotifResponse>
~~~
