---
title: Full Notify Messages
keywords: hotel-push, full messages, full notify messages
search: Hotel-Push - FullFiles - Full Notify Messages
sidebar: mydoc_sidebar
permalink: /docs/hotel-push/full-files/full-notif-messages
---



### Full HotelRatePlanNotifRQ



~~~xml
<s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:ns1 = "http://www.opentravel.org/OTA/2003/05">
   <s:Header>
      <wsse:Security>
      	<wsse:UsernameToken>
     		<wsse:Username>user</wsse:Username>
      		<wsse:Password>pass</wsse:Password>
      	</wsse:UsernameToken>
      </wsse:Security>
    </s:Header>
    <s:Body>
      <ns:HotelRatePlanNotif>
       	<ns:request Version = "0">
       		<ns1:POS>
       		<ns1:Source>
       			<ns1:RequestorID ID = "ProviderCode"/>
   	        <ns1:BookingChannel>
		        <ns1:CompanyName Code = "Clientcode"/>
       		</ns1:BookingChannel>
       		</ns1:Source>
       		</ns1:POS>
       		<ns1:RatePlans HotelCode = "1">
       		<ns1:RatePlan RatePlanCode = "SRATE" CurrencyCode = "EUR" RatePlanStatusType = "Active">
       		<ns1:Rates>
       		<ns1:Rate Start = "2014-08-01" End = "2014-08-31">
		    <ns1:BaseByGuestAmts>
	<ns1:BaseByGuestAmt Type = "25" AmountAfterTax = "150.00"/>
		    </ns1:BaseByGuestAmts>
	</ns1:Rate>
	</ns1:Rates>
	<ns1:SellableProducts>
	<ns1:SellableProduct InvCode = "SROOM2" InvType = "ROOM"/>
	</ns1:SellableProducts>
	</ns1:RatePlan>
	<ns1:RatePlan RatePlanCode = "SRATE" CurrencyCode = "EUR" RatePlanStatusType = "Deactivated">
	<ns1:Rates>
	<ns1:Rate Start = "2014-09-01" End = "2014-09-30">
	<ns1:BaseByGuestAmts>
	<ns1:BaseByGuestAmt Type = "25" AmountAfterTax = "150.00"/>
		    </ns1:BaseByGuestAmts>
	</ns1:Rate>
    </ns1:Rates>
    <ns1:SellableProducts>
	<ns1:SellableProduct InvCode = "SROOM2" InvType = "ROOM"/>
    </ns1:SellableProducts>
</ns1:RatePlan>
    </ns1:RatePlans>
</ns:request>
    </ns:HotelRatePlanNotif>
</s:Body>
</s:Envelope>
~~~


### Full HotelRatePlanNotifRS



~~~xml
    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
       <s:Header>
          <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
             <u:Timestamp u:Id="_0">
                <u:Created>2014-05-21T14:55:45.472Z</u:Created>
                <u:Expires>2014-05-21T15:00:45.472Z</u:Expires>
             </u:Timestamp>
          </o:Security>
       </s:Header>
       <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <HotelRatePlanNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanNotifResult Version="0" TransactionIdentifier="f8a51718-4688-44ee-bc78-65b085cbd3ab">
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelRatePlanNotifResult>
          </HotelRatePlanNotifResponse>
       </s:Body>
    </s:Envelope>
~~~


### Full HotelAvailNotifRQ



~~~xml
    <s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:u = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <s:Header>
            <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <o:UsernameToken u:Id = "uuid-d740d5c0-ebc5-45c7-bd74-62b20c963d85-7">
                    <o:Username>user</o:Username>
                    <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">pass</o:Password>
                </o:UsernameToken>
            </o:Security>
        </s:Header>
        <s:Body xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
            <HotelAvailNotif xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
                <request Version = "0">
                    <POS xmlns = "http://www.opentravel.org/OTA/2003/05">
                        <Source>
                            <RequestorID ID = "ProviderCode"/>
                            <BookingChannel>
                                <CompanyName Code = "ClientCode"/>
                            </BookingChannel>
                        </Source>
                    </POS>
                    <AvailStatusMessages HotelCode = "1" xmlns = "http://www.opentravel.org/OTA/2003/05">
                        <AvailStatusMessage>
                            <StatusApplicationControl
                                Sun = "true"
                                Sat = "true"
                                Fri = "true"
                                Thur = "true"
                                Weds = "true"
                                Tue = "true"
                                Mon = "true"
                                RatePlanCode = "DRV"
                                Start = "2014-07-01"
                                End = "2014-07-31"/>
                            <LengthsOfStay ArrivalDateBased = "false">
                                <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MinLOS"/>
                                <LengthOfStay Time = "3" TimeUnit = "Day" MinMaxMessageType = "MaxLOS"/>
                            </LengthsOfStay>
                            <RestrictionStatus MinAdvancedBookingOffset = "5"/>
                        </AvailStatusMessage>
                        <AvailStatusMessage BookingLimit = "9">
                            <StatusApplicationControl
                                Sun = "true"
                                Sat = "true"
                                Fri = "true"
                                Thur = "true"
                                Weds = "true"
                                Tue = "true"
                                Mon = "true"
                                RatePlanCode = "SRATE"
                                InvCode = "SROOM2"
                                InvType = "ROOM"
                                Start = "2014-07-01"
                                End = "2014-07-31"/>
                            <RestrictionStatus MinAdvancedBookingOffset = "3" MaxAdvancedBookingOffset = "50"/>
                        </AvailStatusMessage>
                    </AvailStatusMessages>
                </request>
            </HotelAvailNotif>
        </s:Body>
    </s:Envelope>
~~~


### Full HotelAvailNotifRS



~~~xml
    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
       <s:Header>
          <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
             <u:Timestamp u:Id="_0">
                <u:Created>2014-05-21T15:00:36.910Z</u:Created>
                <u:Expires>2014-05-21T15:05:36.910Z</u:Expires>
             </u:Timestamp>
          </o:Security>
       </s:Header>
       <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <HotelAvailNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelAvailNotifResult Version="0" TransactionIdentifier="b312c77b-4af3-4ef0-85c4-7f90aba031e0">
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelAvailNotifResult>
          </HotelAvailNotifResponse>
       </s:Body>
    </s:Envelope>
~~~

