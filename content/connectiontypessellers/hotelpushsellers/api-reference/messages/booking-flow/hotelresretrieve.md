+++
title = "HotelResRetrieve"
pagetitle = "HotelResRetrieve"
description = "HotelResRetrieve message"
icon = "fa-retweet"
weight = 1
alwaysopen = false
isDirectory = false
+++



Providers will send a HotelResRetrieveRQ message to retrieve a list of a seller's reservations.



## HotelResRetrieveRQ



**XML Example**



~~~xml
    <HotelResRetrieve>
      <request>
        <POS>
          <Source>
            <RequestorID ID = "Provider1"/>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"/>
            </BookingChannel>
          </Source>
        </POS>
        <UniqueID ID = "123456" ID_Context = "Client"/> 
        <ReadRequests>
          <HotelReadRequest HotelCode="1608">
            <SelectionCriteria Start="2013-11-25" End="2013-11-28" DateType="DepartureDate"/>
          </HotelReadRequest>
          <HotelReadRequest>
            <SelectionCriteria Start = "2015-12-23" End = "2015-12-28" DateType = "ArrivalDate"/> 
          </HotelReadRequest>
        </ReadRequests>
      </request>
    </HotelResRetrieve>
~~~


| **Element**			| **Number**	| **Type**	| **Description**					|
| ----------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| HotelResRetrieve/request	| 1          	|		| Root Node.						|
| UniqueID         		| 0..1       	|		| If present filter by UniqueID content.		|
| @ID         			| 1    		| String	| Booking ID.						|
| @IDContext  			| 1    		| String	| (Client, Provider, Internal).  			|
| ReadRequests     		| 0..1       	|		| If present filter by its content.			|
| ReadRequests/HotelReadRequest	| 1..n       	|		| Node containing the read request data.		|
| @HotelCode  			| 0..1 		| String	| Hotel code.    					|
| HotelReadRequest/SelectionCriteria | 1        |		|							|
| @Start      			| 1    		| DateTime	| Start date to search bookings. DateTime Format is yyyy-MM-ddThh:mm:ss Date must be in UTC. |
| @End        			| 1    		| DateTime	| End date to search bookings. DateTime Format is yyyy-MM-ddThh:mm:ss Date must be in UTC. |
| @DateType   			| 1    		| String	| (ArrivalDate, CreateDate, DepartureDate, LastUpdateDate). |



## HotelResRetrieveRS



~~~xml
    <HotelResRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/client/2012/10">
      <HotelResRetrieveResult Version = "0">
        <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
        <HotelReservations xmlns = "http://www.opentravel.org/OTA/2003/05">
          <HotelReservation ResStatus = "Confirmed" CreateDateTime = "2013-09-01T11:09:57.5387811Z">
            <RoomStays>
              <RoomStay>
                <RoomTypes>
                  <RoomType RoomTypeCode = "STD1" RoomID = "1">
                    <RoomDescription>
                      <Text>Standard</Text>
                    </RoomDescription>
                  </RoomType>
                </RoomTypes>
                <RatePlans>
                  <RatePlan RatePlanCode = "BAR">
                    <RatePlanDescription>
                      <Text>Best Available Rate</Text>
                    </RatePlanDescription>
                    <Commission Percent = "15.00"/>
                  </RatePlan>
                </RatePlans>
                <RoomRates>
                  <RoomRate BookingCode="1|30#30|12|2013-09-03|13|4510741|4510747|3|0|0" EffectiveDate = "2013-09-03" ExpireDate = "2013-09-07" RoomTypeCode = "STD1" InvBlockCode = "7" NumberOfUnits="5" RatePlanCode = "BAR" RoomID = "1">
                    <Rates>
                      <Rate EffectiveDate = "2013-09-03" ExpireDate = "2013-09-07">
                        <Base AmountBeforeTax = "200.00" AmountAfterTax = "200.00" CurrencyCode = "EUR"/>
                        <CancelPolicies>
                          <CancelPenalty PolicyCode = "0912f3bc-40cc-4566-a5d7-0d2833ab62de"/>
                          <CancelPenalty PolicyCode = "cd4aa15e-82e4-420a-937e-63e802ba352a"/>
                        </CancelPolicies>
                      </Rate>
                    </Rates>
                    <Total AmountBeforeTax = "200.00" AmountAfterTax = "200.00" CurrencyCode = "EUR"/>
                  </RoomRate>
                </RoomRates>
                <CancelPenalties>
                  <CancelPenalty PolicyCode = "0912f3bc-40cc-4566-a5d7-0d2833ab62de" NonRefundable = "false">
                    <Deadline AbsoluteDeadline = "2013-08-29" OffsetTimeUnit = "Day" OffsetUnitMultiplier = "5" OffsetDropTime = "BeforeArrival"/>
                    <AmountPercent Percent = "15.00" CurrencyCode = "EUR"/>
                  </CancelPenalty>
                  <CancelPenalty PolicyCode = "cd4aa15e-82e4-420a-937e-63e802ba352a" NonRefundable = "false">
                    <Deadline AbsoluteDeadline = "2013-08-31" OffsetTimeUnit = "Day" OffsetUnitMultiplier = "3" OffsetDropTime = "BeforeArrival"/>
                    <AmountPercent NmbrOfNights = "2" CurrencyCode = "EUR"/>
                  </CancelPenalty>
                </CancelPenalties>
                <BasicPropertyInfo HotelCode = "12" HotelName = "Adagio City Aparthotel Annecy Centre"/>
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
                          <GivenName>Test11</GivenName>
                          <Surname>TestAp11</Surname>
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
                          <GivenName>Test22</GivenName>
                          <Surname>TestAp22</Surname>
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
              <Total AmountBeforeTax = "200.00" AmountAfterTax = "200.00" CurrencyCode = "USD"/>
              <Guarantee PaymentCode = "MerchantPayment"/>
              <HotelReservationIDs>
                <HotelReservationID ResID_Value = "123456" ResID_SourceContext = "Client"/>
                <HotelReservationID ResID_Value = "124" ResID_SourceContext = "Internal"/>
                <HotelReservationID ResID_Value = "115137" ResID_SourceContext = "Provider"/>
              </HotelReservationIDs>
              <Profiles>
                <ProfileInfo>
                  <Profile>
                    <Customer>
                      <PersonName>
                        <NamePrefix>Mr</NamePrefix>
                        <GivenName>Test12</GivenName>
                        <Surname>TestAp12</Surname>
                      </PersonName>
                      <Telephone PhoneTechType = "1" PhoneNumber = "1212121212" FormattedInd = "false" DefaultInd = "true"/>
                      <Email DefaultInd = "true" EmailType = "1">test@yourdomain.com</Email>
                      <Address Type = "1">
                        <AddressLine>B-15, Sector-57</AddressLine>
                        <CityName>NOIDA</CityName>
                        <PostalCode>201301</PostalCode>
                        <StateProv StateCode = "UP">Uttar Pradesh</StateProv>
                        <CountryName Code = "IN">INDIA</CountryName>
                      </Address>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGlobalInfo>
          </HotelReservation>
        </HotelReservations>
      </HotelResRetrieveResult>
    </HotelResRetrieveResponse>
~~~


| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| HotelResRetrieveResponse		| 1     	|		| Root Node.					|
| HotelResRetrieveResponse/HotelResRetrieveResult | 1   |		| Contains the result of reservation retrieve.	|
| HotelResRetrieveResult/Success	| 0..1    	|		| Should only be present if it was a successful response. The Errors node should not be present if the Success node is present. |
| HotelResRetrieveResult/HotelReservations | 0..1   	|		| Node containing the reservation.		|
| HotelReservations/HotelReservation	| 1     	|		| Node containing information about the reservation.|
| @ResStatus				| 1 		| String	| Status of the reservation. Possible status are: 'Confirmed', 'Requested' and 'Cancelled'. |
| @CreateDateTime			| 1 		| DateTime	| Date and time when the reservation was made.	|
| @LastModifyDateTime			| 0..1		| DateTime	| Date and time when the reservation was modified. Should only be present if the reservation status is 'Cancelled'. |
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
| @BookingCode				| 1 		| String	| TravelgateX internal data. Do not use.				|
| @EffectiveDate			| 1 		| Date		| Effective date when the RoomRate start applying.|
| @ExpireDate				| 1 		| Date		| Expire date when the RoomRate ends applying. Check out night minus 1. |
| @RoomTypeCode				| 1 		| String	| Code of the Room.				|
| @InvBlockCode				| 1 		| String	| Inventary block code.				|
| @RatePlanCode				| 1 		| String	| Code of the RatePlan.				|
| @RoomID				    | 1 		| String	|Id of the room.				|
| @NumberOfUnits			| 1 		| String	|Number of rooms available for this room type.				|
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
| @ResIDValue_				| 1 		| String	| Value of the id.				|
| @ResIDSourceContext_			| 1 		| String	| Id context.					|
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



**Example Guarantee object with credit card details**

~~~xml
    <Guarantee PaymentCode="DirectPayment">
      <GuaranteesAccepted>
        <GuaranteeAccepted>
          <PaymentCard ExpireDate="0614" CardCode ="VI">
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
~~~


**Example Guarantee object with URL for credit card details**

~~~xml
    <Guarantee PaymentCode="DirectPayment">
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
~~~
