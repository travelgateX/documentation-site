+++
title = "HotelResNotif"
pagetitle = "HotelResNotif"
description = "HotelResNotif message"
icon = "fa-bell" 
weight = 2
alwaysopen = false
isDirectory = false
+++


Only implemented if the Channel Manager allows reservation delivery. 

During the booking process, we will send a HotelResNotifRQ message to the Channel to inform about the reservations. The Channel Manager will process the booking information and will inform us of the reservation status. TGX will process the response from the Channel's system and will proceed with the reservation process, returning the status to the seller.

If the Channel has the booking locator of the reservation, they can send it in the HotelResNotifRS. This locator will be sent to the sellers in the TGX API response.

Note that if the reservation fails into the Channel Manager's system , it will be considered NOK and we will inform the seller with an error.

## HotelResNotifRQ

**Example for MerchantPayment**

~~~xml
    <OTA_HotelResRS xmlns:xsd = "http://www.w3.org/2001/XMLSchema" xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" ResResponseType = "Committed" xmlns = "http://www.opentravel.org/OTA/2003/05">
      <HotelReservations>
        <HotelReservation CreateDateTime = "2018-08-01T09:07:28.5074165Z" ResStatus = "Confirmed">
          <RoomStays>
            <RoomStay>
              <RoomTypes>
                <RoomType RoomTypeCode = "STD" RoomID = "1">
                  <RoomDescription>
                    <Text>Standard</Text>
                  </RoomDescription>
                </RoomType>
              </RoomTypes>
              <RatePlans>
                <RatePlan RatePlanCode = "BAR" PriceViewableInd = "false">
                  <RatePlanDescription>
                    <Text>Best Available Rate</Text>
                  </RatePlanDescription>
                  <Commission Percent = "20"/>
                  <Guarantee PaymentCode = "MerchantPayment"/>
                </RatePlan>
              </RatePlans>
              <RoomRates>
                <RoomRate BookingCode = "1|30#30|1|2018-08-17|5|488654|38644|3|0|0" EffectiveDate = "2018-08-17" ExpireDate = "2018-08-22" RoomTypeCode = "STD" InvBlockCode = "3" NumberOfUnits = "37" RatePlanCode = "BAR" RoomID = "1">
                  <Rates>
                    <Rate EffectiveDate = "2018-08-17" ExpireDate = "2018-08-18">
                      <Base AmountBeforeTax = "201.37" AmountAfterTax = "201.37" CurrencyCode = "EUR" Type = "25"/>
                      <CancelPolicies>
                        <CancelPenalty PolicyCode = "c25b8026-5ca2-49ce-b62c-fe0b4945de01"/>
                      </CancelPolicies>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-18" ExpireDate = "2018-08-19">
                      <Base AmountBeforeTax = "219.19" AmountAfterTax = "219.19" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-19" ExpireDate = "2018-08-20">
                      <Base AmountBeforeTax = "130.09" AmountAfterTax = "130.09" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-20" ExpireDate = "2018-08-21">
                      <Base AmountBeforeTax = "156.82" AmountAfterTax = "156.82" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                    <Rate EffectiveDate = "2018-08-21" ExpireDate = "2018-08-22">
                      <Base AmountBeforeTax = "165.73" AmountAfterTax = "165.73" CurrencyCode = "EUR" Type = "25"/>
                    </Rate>
                  </Rates>
                  <Total AmountBeforeTax = "873.20" AmountAfterTax = "873.20" CurrencyCode = "EUR"/>
                </RoomRate>
              </RoomRates>
              <CancelPenalties>
                <CancelPenalty PolicyCode = "c25b8026-5ca2-49ce-b62c-fe0b4945de01" NonRefundable = "false">
                  <Deadline AbsoluteDeadline = "2018-08-16" OffsetTimeUnit = "Day" OffsetUnitMultiplier = "1" OffsetDropTime = "BeforeArrival"/>
                  <AmountPercent NmbrOfNights = "1" CurrencyCode = "EUR"/>
                </CancelPenalty>
              </CancelPenalties>
              <BasicPropertyInfo HotelCode = "1" HotelName = "Test Hotel"/>
              <Comments>
                <Comment>
                  <Text>Customer comments...</Text>
                </Comment>
              </Comments>
              <ServiceRPHs>
                <ServiceRPH RPH = "1"/>
                <ServiceRPH RPH = "2"/>
              </ServiceRPHs>
            </RoomStay>
          </RoomStays>
          <ResGuests>
            <ResGuest ResGuestRPH = "1" AgeQualifyingCode = "10">
              <Profiles>
                <ProfileInfo>
                  <Profile>
                    <Customer>
                      <PersonName>
                        <NamePrefix>Mr</NamePrefix>
                        <GivenName>John</GivenName>
                        <Surname>Doe</Surname>
                      </PersonName>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
              <GuestCounts>
                <GuestCount Age = "30"/>
              </GuestCounts>
            </ResGuest>
            <ResGuest ResGuestRPH = "2" AgeQualifyingCode = "10">
              <Profiles>
                <ProfileInfo>
                  <Profile>
                    <Customer>
                      <PersonName>
                        <NamePrefix>Mr</NamePrefix>
                        <GivenName>xxxxxxx</GivenName>
                        <Surname>xxxxxx</Surname>
                      </PersonName>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
              <GuestCounts>
                <GuestCount Age = "30"/>
              </GuestCounts>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <Guarantee PaymentCode = "MerchantPayment"/>
            <Total AmountBeforeTax = "873.20" AmountAfterTax = "873.20" CurrencyCode = "EUR"/>
            <HotelReservationIDs>
              <HotelReservationID ResID_Value = "**clientLocator**" ResID_SourceContext = "Client"/>
              <HotelReservationID ResID_Value = "**internalLocator**" ResID_SourceContext = "Internal"/>
            </HotelReservationIDs>
            <Profiles>
              <ProfileInfo>
                <Profile>
                  <Customer>
                    <PersonName>
                      <NamePrefix>Mr</NamePrefix>
                      <GivenName>xxxxxx</GivenName>
                      <Surname>xxxxx</Surname>
                    </PersonName>
                    <Telephone PhoneTechType = "1" PhoneNumber = "900000000"/>
                    <Email EmailType = "1">"***agency_email@agency.com***"</Email>
                    <Address Type = "1">
                      <AddressLine>Address</AddressLine>
                      <CityName>Address</CityName>
                      <PostalCode>07121</PostalCode>
                      <CountryName>ES</CountryName>
                    </Address>
                  </Customer>
                </Profile>
              </ProfileInfo>
            </Profiles>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
      <Success/>
    </OTA_HotelResRS>
~~~


**Example for VCC Payment**

~~~xml
    <OTA_HotelResRS>
      <HotelReservations>
        <HotelReservation CreateDateTime = "2018-08-01T08:44:18.7584388Z" ResStatus = "Confirmed">
          ..
          <ResGlobalInfo>
            <Guarantee PaymentCode = "DirectPayment">
              <GuaranteesAccepted>
                <GuaranteeAccepted>
                  <PaymentCard ExpireDate = "0614" CardCode = "VI">
                    <CardHolderName>John Smith</CardHolderName>
                    <CardNumber>
                      <PlainText>4321432143214327</PlainText>
                    </CardNumber>
                    <SeriesCode>
                      <PlainText>123</PlainText>
                    </SeriesCode>
                  </PaymentCard>
                </GuaranteeAccepted>
              </GuaranteesAccepted>
            </Guarantee>
            ..
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResRS>
~~~

**Example for VCC Payment with URL**

~~~xml
    <OTA_HotelResRS>
      <HotelReservations>
        <HotelReservation CreateDateTime = "2018-08-01T08:44:18.7584388Z" ResStatus = "Confirmed">
          ..
          <ResGlobalInfo>
            <Guarantee PaymentCode = "DirectPayment">
              <GuaranteesAccepted>
                <GuaranteeAccepted>
                  <PaymentCard>
                    <TPA_Extensions>
                      <Param key = "URL" value = "http://www.exampleUrl.com/"/>
                    </TPA_Extensions>
                  </PaymentCard>
                </GuaranteeAccepted>
              </GuaranteesAccepted>
            </Guarantee>
            ..
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResRS>
~~~


| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_HotelResRS		| 1     	|		| Root Node.					|
| OTA_HotelResRS/Success	| 0..1    	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| OTA_HotelResRS/HotelReservations | 0..1   	|		| Node containing the reservation.		|
| HotelReservations/HotelReservation	| 1     	|		| Node containing information about the reservation.|
| @ResStatus				| 1 		| String	| Status of the reservation. The possible status value is: 'Confirmed'|
| @CreateDateTime			| 1 		| DateTime	| Date and time when the reservation was made.	|
| HotelReservation/RoomStays		| 1     	|		| Node containing the RoomStays of the reservation.|
| RoomStays/RoomStay			| 1..n    	|		| Node containing RoomStay information.		|
| RoomStay/RoomTypes			| 1     	|		| Node containing information about rooms.	|
| RoomTypes/RoomType			| 1     	|		| Node containing information about one room.   |
| @RoomTypeCode				| 1 		| String	| Room code.					|
| @RoomID				| 1 		| String	|Id of the room.				|
| RoomType/RoomDescription		| 1     	|		| Node containing the description of the room.	|
| RoomDescription/Text 			| 1 		| String	| Description of the room.			|
| RoomStay/RatePlans			| 1     	|		| Node containing information about RatePlans.	|
| RatePlans/RatePlan			| 1     	|		| Node containing information about one RatePlan.|
| @RatePlanCode				| 1     	|		| RatePlan code.				|
| RatePlan/RatePlanDescription		| 1     	|		| Node containing information the RatePlan description one RatePlan. |
| RatePlanDescription/Text		| 1 		| String	| Description of the RatePlan.			|
| RatePlan/Commission			| 1     	|		| Node containing the commission of the RatePlan.|
| Percent      				| 1 		| Decimal	| Commission of the RatePlane. 			|
| RoomStay/RoomRates			| 1     	|		| Node containing information about RoomRates.	|
| RoomRates/RoomRate			| 1     	|		| Node containing information about one RoomRate.|
| @EffectiveDate			| 1 		| Date		| Effective date when the RoomRate start applying.|
| @ExpireDate				| 1 		| Date		| Expire date when the RoomRate ends applying. Check out night minus 1. |
| @RoomTypeCode				| 1 		| String	| Code of the Room.				|
| @InvBlockCode				| 1 		| String	| Inventary block code.				|
| @RatePlanCode				| 1 		| String	| Code of the RatePlan.				|
| RoomRate/Rates			| 1     	|		| Node containing information about the rates.	|
| Rates/Rate    			| 1     	|		| Node containing information about one rate.	|
| @EffectiveDate			| 1 		| Date		| Effective date when the Rate start applying.	|
| @ExpireDate				| 1 		| Date		| Expire date when the Rate ends applying.	|
| Rate/Base    				| 1     	|		| Node containing core information about the rate.|
| @AmountBeforeTax			| 0..1		| Decimal	| Amount before tax of the rate.		|
| @AmountAfterTax			| 1 		| Decimal	| Amount after tax of the rate.			|
| @CurrencyCode				| 1 		| String  	| Currency code of the rate.			|
| Rate/CancelPolicies			| 1     	|		| Node containing information about cancel policies which are applied to the rate. |
| CancelPolicies/CancelPenalty		| 0..n   	|		| Node containing information about one cancel penalty. |
| @PolicyCode				| 1 		| String  	| Policy code of the cancel penalty.		|
| RoomRate/Total			| 1     	|		| Node containing information about the total price of the RoomRate. |
| @AmountBeforeTax			| 0..1		| Decimal	| Amount before tax of the RoomRate.		|
| @AmountAfterTax			| 1 		| Decimal	| Amount after tax of the RoomRate.		|
| @CurrencyCode				| 1 		| String	| Currency code of the RoomRate.		|
| RoomStay/CancelPenalties		| 1     	|		| Node containing all cancel penalties of the RoomStay. |
| CancelPenalties/CancelPenalty		| 0..n    	|		| Node containing information about one cancel penalty. |
| @PolicyCode				| 1 		| String	| Policy code of the cancel penalty.		|
| @NonRefundable			| 1 		| Boolean	| Indicates whether the Rate is refundable or not. |
| CancelPenalty/Deadline		| 0..n    	|		| Node containing information about the deadline of the cancel penalty. |
| @AbsoluteDeadline			| 1 		| DateTime	| Indicates when the absolute deadline.		|
| @OffsetTimeUnit			| 1 		| String	| Time unit of the offset for the absolute deadline.|
| @OffsetUnitMultiplier			| 1 		| Integer	| Number of time units of offset for the absolute ege deadline. |
| @OffsetDropTime			| 1 		| String	| Indicates when the deadline is applied.	|
| CancelPenalty/AmountPercent		| 0..n    	|		| Amount of the cancel penalty.			|
| @Percent				| 1 		| String	| Percent of the total charged as a cancel penalty amount. Percent or NmbrOfNights must be present. |
| @NmbrOfNights				| 1 		| String	| Number of nights charged as a cancel penalty amount. |
| @CurrencyCode				| 1 		| String	| Currency code of the cancel penalty amount.	|
| RoomStay/BasicPropertyInfo		| 1     	|		| Node containing basic information of the property.|
| RoomStay/Comments		| 0..1     	|		| Node containing information of the customer comments.|
| Comments/Comment		| 1..n     	| String	| Customer comment text|
| Comment/Text		| 1     	|		| Node containing information about one customer comment|
| RoomStay/ServiceRPHs			| 1     	|		| Node containing information of the guests of the room. |
| ServiceRPHs/ServiceRPH		| 1..n    	|		| Node containing information of a guest of the room.|
| @RPH    				| 1 		| String	| Code of a guest of the room. Match with @ResGuestRPH at the ResGuests node. |
| HotelCode    				| 1 		| Integer	| Hotel code.					|
| HotelName    				| 1 		| String	| Hotel name.					|
| HotelReservation/ResGuests		| 1     	|		| Node containing all reservation guests.	|
| ResGuests/ResGuest			| 1..n    	|		| Node containing information about one of the guests. |
| ResGuest/ResGuest			| 1..n    	|		| Node containing information about one of the guests. |
| @ResGuestRPH				| 1 		| Integer	| RPH of the guest.				|
| @AgeQualifyingCode			| 1 		| Integer	| Age qualifying code of the guest.		|
| ResGuest/Profiles			| 1     	|		| Node containing information about the profiles of the guest. |
| Profiles/ProfileInfo			| 1     	|		| Node containing information about the profile of the guest. |
| ProfileInfo/Customer			| 1     	|		| Node containing customer information of the guest. |
| Customer/PersonName			| 1     	|		| Node containing the person name of the guest.	|
| PersonName/NamePrefix			| 1 		| String	| Prefix/Traitement name of the guest.		|
| PersonName/GivenName			| 1 		| String	| Given name of the guest.			|
| PersonName/Surname			| 1 		| String	| Surname of the guest.				|
| ResGuest/GuestCounts			| 1     	|		| Node containing quantity informations for the guest. |
| GuestCounts/GuestCount		| 1     	|		| Node containing quantity information for the guest.|
| @Age    				| 1 		| Integer	| Age of the guest. 				|
| ResGlobalInfo				| 1     	|		| Node containing general information about the reservation. |
| ResGlobalInfo/Total			| 1     	|		| Node containing the total price.		|
| @AmountBeforeTax			| 0..1		| Decimal	| Amount before tax of the Reservation. 	|
| @AmountAfterTax			| 1 		| Decimal	| Amount after tax of the Reservation.		|
| @CurrencyCode				| 1 		| String	| Currency code of the Reservation. 		|
| ResGlobalInfo/Guarantee		| 0..1    	|		| Node containing the Guarantee provided with the reservation. |
| @PaymentCode				| 1     	|		| Contains the payment method accepted by the rate.  See Payment Type Codes list in section 7.6.3. |
| Guarantee/GuaranteesAccepted		| 0..1    	|		| Node containing the Guarantee provided with the reservation. |
| GuaranteesAccepted/GuaranteeAccepted	| 1     	|		| Node that contains the booking payment details accepted. |
| GuaranteeAccepted/PaymentCard		| 1     	|		| Node that contains the credit card accepted. The credit card information can be a URL with the information(in TPA_Extension tag) or the details in the PaymentCard tags and attributes. |
| @CardCode				| 1 		| String	| Contains the credit card code. See Credit Card Codes list in section 7.6.4. |
| @ExpireDate				| 0..1		| String	| This is the expiry date of the credit card used for deposit/prepayment. Format MMyy. |
| PaymentCard/CardHolderName		| 0..1		| String	| PaymentCard / CardHolderName.			|
| PaymentCard/CardNumber/PlainText	| 0..1		| String	| This is actual number of the credit card used for deposit/prepayment. |
| PaymentCard/SeriesCode/PlainText	| 0..1		| String	| The SeriesCode attribute is used (Optionally) for the security number of the card. |
| PaymentCard/TPA_Extensions		| 0..1    	|		| Optional, contains credit card URL.		|
| Param        				| 1      	|		|						|
| @key    				| 1 		| String	| URL.						|
| @value  				| 1 		| String	| URL where the Credit card details are stored. |
| ResGlobalInfo/HotelReservationIDs	| 1     	|		| Node containing the ids of the reservation.	|
| HotelReservationIDs/HotelReservationID | 2     	|		| Node containing information of one reservation id. |
| @ResIDValue				| 1 		| String	| Value of the id.				|
| @ResIDSourceContext			| 1 		| String	| Id context.					|
| ResGlobalInfo/Profiles		| 1     	|		| Node containing information about the profiles of the reservation. |
| Profiles/ProfileInfo			| 1     	|		| Node containing information about the profile of the reservation. |
| ProfileInfo/Profile			| 1     	|		| Node containing information about the profile of the reservation. |
| Profile/Customer			| 1     	|		| Node containing information about the customer of the reservation. The customer of the reservation  can be or not a pax of the reservation. If it's a pax will be present in ResGuests node. |
| Customer/PersonName			| 1     	|		| Node containing the person name of the customer of the reservation. |
| PersonName/NamePrefix			| 1 		| String	| Name prefix of the customer.			|
| PersonName/GivenName			| 1 		| String	| Given name of the customer.			|
| PersonName/Surname			| 1 		| String	| Surname of the customer.			|
| Customer/Telephone			| 1     	|		| Node containing information about the telephone of the customer. |
| @PhoneTechType			| 1 		| String	| Phone technology type.			|
| @PhoneNumber				| 1 		| String	| Phone number.					|
| @FormattedInd				| 1 		| String	| Indicates whether associated data is formatted or not. |
| @DefaultInd				| 1 		| String	| When true, indicates a default value should be used. |
| Customer/Email			| 1     	|		| Node containing information about the email of the customer. |
| @DefaultInd				| 1 		| String	| When true, indicates a default value should be used. |
| @EmailType				| 1 		| String	| Indicates the type of the email.		|
| Value        				| 1 		| String	| Email of the customer.			|
| Customer/Address			| 1     	|		| Node containing information about the address of the customer. |
| Address/AddressLine			| 1 		| String	| Address of the customer.			|
| Address/CityName			| 1 		| String	| City name.					|
| Address/PostalCode			| 1 		| String	| Postal code.					|
| Address/StateProv			| 1 		| String	| Node containing information about the state or the province of the customer. |
| @StateCode				| 1 		| String	| State code.					|
| Value        				| 1 		| String	| State or province name.			|
| Address/CountryName			| 1 		| String	| Country name.					|
| @Code   				| 1 		| String	| Country code.					|
| Value        				| 1 		| String	| Country name.					|


## HotelResNotifRS


Success Response

~~~xml
    <OTA_HotelResNotifRS xmlns = "http://www.opentravel.org/OTA/2003/05" Timestamp = "2018-09-12T23:09:08+03:00">
      <HotelReservations>
        <HotelReservation ResStatus = "Confirmed">
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Value = "**providerLocator**" ResID_SourceContext = "Provider"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
      <Success/>
    </OTA_HotelResNotifRS>
~~~


Error Response

~~~xml
    <OTA_HotelResNotifRS xmlns = "http://www.opentravel.org/OTA/2003/05" Timestamp = "2018-09-12T23:09:08+03:00">
      <Errors>
        <Error ShortText = "Confirmation error" Code = "50">Hotel doesn't exist</Error>
      </Errors>
    </OTA_HotelResNotifRS>
~~~

| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| OTA_HotelResNotifRS		| 1     	|		| Root Node.					|
| OTA_HotelResNotifRS/Success	| 0..1    	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| OTA_HotelResNotifRS/Errors	| 0..1    	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| Errors/Error	| 1..n    	|		| Node containing the errors.|
| @ResIDValue_				| 1 		| String	| Value of the id.				|
| OTA_HotelResNotifRS/HotelReservations | 0..1   	|		| Node containing the reservation. Only needed if locator is provided.		|
| HotelReservations/HotelReservation	| 1     	|		| Node containing information about the reservation.|
| @ResStatus				| 1 		| String	| Status of the reservation. The possible status value is: 'Confirmed'|
| ResGlobalInfo				| 1     	|		| Node containing general information about the reservation. |
| ResGlobalInfo/HotelReservationIDs	| 1     	|		| Node containing the ids of the reservation.	|
| HotelReservationIDs/HotelReservationID | 2     	|		| Node containing information of one reservation id. |
| @ResIDValue				| 1 		| String	| Value of the id.				|
| @ResIDSourceContext			| 1 		| String	| Id context.					|


## Authentication and Headers

Our system send these messages without SOAP envelop, directly the OTA_HotelResRS, as POST request with the following headers:

```
  Content-Type: application/xml; charset=utf-8
  Authorization: Basic XXXXXXXXXXXXXXXXX
```

[Here](https://en.wikipedia.org/wiki/Basic_access_authentication) you can find what is Basic authentication
