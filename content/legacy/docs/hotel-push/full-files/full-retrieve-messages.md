---
title: Full Retrieve Messages
keywords: hotel-push, full messages, full retrieve messages
search: Hotel-Push - FullFiles - Full Retrieve Messages
sidebar: mydoc_sidebar
permalink: /docs/hotel-push/full-files/full-retrieve-messages
---



### Full HotelRatePlanInventoryRetrieveRQ


~~~xml
    <s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:ns1 = "http://www.opentravel.org/OTA/2003/05" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <s:Header>
            <wsse:Security>
                <wsse:UsernameToken>
                    <wsse:Username>user</wsse:Username>
                    <wsse:Password>pass</wsse:Password>
                </wsse:UsernameToken>
            </wsse:Security>
        </s:Header>
        <s:Body>
            <ns:HotelRatePlanInventoryRetrieve>
                <ns:request Version = "0">
                    <ns1:POS>
                        <ns1:Source>
                            <ns1:RequestorID ID = "ProviderCode"/>
                            <ns1:BookingChannel>
                                <ns1:CompanyName Code = "ClientCode"/>
                            </ns1:BookingChannel>
                            <ns1:TPA_Extensions>
                                <ns1:Param key = "onlyActive" value = "0"/>
                            </ns1:TPA_Extensions>
                        </ns1:Source>
                    </ns1:POS>
                    <ns1:RatePlans>
                        <ns1:RatePlan>
                            <ns1:HotelRef HotelCode = "1"/>
                        </ns1:RatePlan>
                    </ns1:RatePlans>
                </ns:request>
            </ns:HotelRatePlanInventoryRetrieve>
        </s:Body>
    </s:Envelope>
~~~


### Full HotelRatePlanInventoryRetrieveRS



~~~xml
    <s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:u = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <s:Header>
            <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <u:Timestamp u:Id = "_0">
                    <u:Created>2014-05-30T09:56:07.383Z</u:Created>
                    <u:Expires>2014-05-30T10:01:07.383Z</u:Expires>
                </u:Timestamp>
            </o:Security>
        </s:Header>
        <s:Body xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
            <HotelRatePlanInventoryRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
                <HotelRatePlanInventoryRetrieveResult Version = "0">
                    <Success xmlns = "http://www.opentravel.org/OTA/2003/05"/>
                    <RatePlans HotelCode = "1" HotelName = "Hotel Test Pruebas Travelgate " xmlns = "http://www.opentravel.org/OTA/2003/05">
                        <RatePlan CurrencyCode = "EUR" RatePlanCode = "SRATE3" RatePlanStatusType = "Active" Start = "2016-01-01" End = "2016-05-01">
                            <Rates>
                                <Rate>
                                    <AdditionalGuestAmounts>
                                        <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "0"/>
                                        <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "0"/>
                                        <AdditionalGuestAmount AgeQualifyingCode = "7" MaxAge = "0"/>
                                    </AdditionalGuestAmounts>
                                    <PaymentPolicies>
                                        <GuaranteePayment PaymentCode = "MerchantPayment"/>
                                    </PaymentPolicies>
                                    <MealsIncluded MealPlanCodes = "14"/>
                                </Rate>
                            </Rates>
                            <SellableProducts/>
                            <Commission Percent = "0.00"/>
                            <Description>
                                <Text>SRATE3</Text>
                            </Description>
                        </RatePlan>
                        <RatePlan CurrencyCode = "EUR" RatePlanCode = "SRATE" RatePlanStatusType = "Active" Duration = "0">
                            <BookingRules>
                                <BookingRule>
                                    <CancelPenalties>
                                        <CancelPenalty NonRefundable = "false">
                                            <Deadline OffsetTimeUnit = "Day" OffsetUnitMultiplier = "10" OffsetDropTime = "BeforeArrival"/>
                                            <AmountPercent NmbrOfNights = "2"/>
                                        </CancelPenalty>
                                    </CancelPenalties>
                                </BookingRule>
                                <BookingRule>
                                    <Viewerships>
                                        <Viewership>
                                            <LocationCodes LocationCodesInclusive = "true">
                                                <LocationCode CountryCode = "ES"/>
                                            </LocationCodes>
                                        </Viewership>
                                        <Viewership>
                                            <LocationCodes LocationCodesInclusive = "false"/>
                                        </Viewership>
                                    </Viewerships>
                                </BookingRule>
                            </BookingRules>
                            <Rates>
                                <Rate>
                                    <AdditionalGuestAmounts>
                                        <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "0"/>
                                        <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "0"/>
                                        <AdditionalGuestAmount AgeQualifyingCode = "7" MaxAge = "0"/>
                                    </AdditionalGuestAmounts>
                                    <PaymentPolicies>
                                        <GuaranteePayment PaymentCode = "DirectPayment">
                                            <AcceptedPayments>
                                                <AcceptedPayment>
                                                    <PaymentCard CardCode = "VI"/>
                                                </AcceptedPayment>
                                            </AcceptedPayments>
                                        </GuaranteePayment>
                                    </PaymentPolicies>
                                    <MealsIncluded MealPlanCodes = "14"/>
                                </Rate>
                            </Rates>
                            <SellableProducts>
                                <SellableProduct InvCode = "SROOM2" InvType = "ROOM" InvStatusType = "Active" InvTypeCode = "MYSROOM">
                                    <GuestRoom>
                                        <Quantities StandardNumBeds = "3"/>
                                        <Occupancy MinOccupancy = "3" MaxOccupancy = "3" AgeQualifyingCode = "10"/>
                                        <Room RoomType = "Standard" RoomTypeCode = "SROOM2" RoomID = "1"/>
                                        <Description>
                                            <Text>Standard</Text>
                                        </Description>
                                    </GuestRoom>
                                </SellableProduct>
                                <SellableProduct InvCode = "SROOM2" InvType = "ROOM" InvStatusType = "Active" InvTypeCode = "">
                                    <GuestRoom>
                                        <Quantities StandardNumBeds = "3"/>
                                        <Occupancy MinOccupancy = "4" MaxOccupancy = "4" AgeQualifyingCode = "10"/>
                                        <Room RoomType = "Standard" RoomTypeCode = "SROOM2" RoomID = "1"/>
                                        <Description>
                                            <Text>Standard</Text>
                                        </Description>
                                    </GuestRoom>
                                </SellableProduct>
                            </SellableProducts>
                            <Commission Percent = "0.00"/>
                            <Description>
                                <Text>Standard</Text>
                            </Description>
                        </RatePlan>
                        <RatePlan CurrencyCode = "EUR" RatePlanCode = "TI2" RatePlanStatusType = "Active" Duration = "0">
                            <Rates>
                                <Rate>
                                    <AdditionalGuestAmounts>
                                        <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "0"/>
                                        <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "0"/>
                                        <AdditionalGuestAmount AgeQualifyingCode = "7" MaxAge = "0"/>
                                    </AdditionalGuestAmounts>
                                    <PaymentPolicies>
                                        <GuaranteePayment PaymentCode = "MerchantPayment"/>
                                    </PaymentPolicies>
                                    <MealsIncluded MealPlanCodes = "1"/>
                                </Rate>
                            </Rates>
                            <SellableProducts/>
                            <Commission Percent = "0.00"/>
                            <Description>
                                <Text>Todo Incluido</Text>
                            </Description>
                        </RatePlan>
                        <RatePlan RatePlanCode = "DRVTEST" RatePlanStatusType = "Active" BaseRatePlanCode = "SRATE" Start = "2015-12-01" End = "2015-12-31">
                            <BookingRules>
                                <BookingRule>
                                    <CancelPenalties>
                                        <CancelPenalty NonRefundable = "false">
                                            <Deadline OffsetTimeUnit = "Day" OffsetUnitMultiplier = "10" OffsetDropTime = "BeforeArrival"/>
                                            <AmountPercent NmbrOfNights = "2"/>
                                        </CancelPenalty>
                                    </CancelPenalties>
                                </BookingRule>
                                <BookingRule>
                                    <Viewerships>
                                        <Viewership>
                                            <LocationCodes LocationCodesInclusive = "true">
                                                <LocationCode CountryCode = "ES"/>
                                            </LocationCodes>
                                        </Viewership>
                                        <Viewership>
                                            <LocationCodes LocationCodesInclusive = "false"/>
                                        </Viewership>
                                    </Viewerships>
                                </BookingRule>
                            </BookingRules>
                            <Description>
                                <Text>DerivedRate Test</Text>
                            </Description>
                        </RatePlan>
                        <RatePlan CurrencyCode = "EUR" RatePlanCode = "SRATE2" RatePlanStatusType = "Active">
                            <Rates>
                                <Rate>
                                    <AdditionalGuestAmounts>
                                        <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "0"/>
                                        <AdditionalGuestAmount AgeQualifyingCode = "8" MaxAge = "0"/>
                                        <AdditionalGuestAmount AgeQualifyingCode = "7" MaxAge = "0"/>
                                    </AdditionalGuestAmounts>
                                    <PaymentPolicies>
                                        <GuaranteePayment PaymentCode = "MerchantPayment"/>
                                    </PaymentPolicies>
                                    <MealsIncluded MealPlanCodes = "14"/>
                                </Rate>
                            </Rates>
                            <SellableProducts>
                                <SellableProduct InvCode = "STD" InvType = "ROOM" InvStatusType = "Deactivated" InvTypeCode = "">
                                    <GuestRoom>
                                        <Quantities StandardNumBeds = "2"/>
                                        <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                                        <Room RoomType = "Standard" RoomTypeCode = "STD" RoomID = "1"/>
                                        <Description>
                                            <Text>Standard</Text>
                                        </Description>
                                    </GuestRoom>
                                </SellableProduct>
                            </SellableProducts>
                            <Commission Percent = "0.00"/>
                            <Description>
                                <Text>TestRate</Text>
                            </Description>
                        </RatePlan>
                        <RatePlan RatePlanCode = "DRVT" RatePlanStatusType = "Active" BaseRatePlanCode = "SRATE2"> 
                            <SellableProducts>
                                <SellableProduct InvCode = "TRP" InvType = "ROOM" InvStatusType = "Active">
                                    <GuestRoom>
                                        <Quantities StandardNumBeds = "3"/>
                                        <Occupancy MinOccupancy = "3" MaxOccupancy = "3" AgeQualifyingCode = "10"/>
                                        <Room RoomTypeCode = "TRP" RoomID = "44"/>
                                        <Description>
                                            <Text>Triple</Text>
                                        </Description>
                                    </GuestRoom>
                                </SellableProduct>
                                <SellableProduct InvCode = "TRP" InvType = "ROOM" InvStatusType = "Active">
                                    <GuestRoom>
                                        <Quantities StandardNumBeds = "3"/>
                                        <Occupancy MinOccupancy = "4" MaxOccupancy = "4" AgeQualifyingCode = "10"/>
                                        <Room RoomTypeCode = "TRP" RoomID = "44"/>
                                        <Description>
                                            <Text>Triple</Text>
                                        </Description>
                                    </GuestRoom>
                                </SellableProduct>
                                <SellableProduct InvCode = "TRP" InvType = "ROOM" InvStatusType = "Active">
                                    <GuestRoom>
                                        <Quantities StandardNumBeds = "3"/>
                                        <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "10"/>
                                        <Occupancy MinOccupancy = "2" MaxOccupancy = "2" AgeQualifyingCode = "8"/>
                                        <Room RoomTypeCode = "TRP" RoomID = "44"/>
                                        <Description>
                                            <Text>Triple</Text>
                                        </Description>
                                    </GuestRoom>
                                </SellableProduct>
                            </SellableProducts>
                            <Description>
                                <Text>Derivada Test</Text>
                            </Description>
                        </RatePlan>
                        <RatePlan RatePlanCode = "DRV2" RatePlanStatusType = "Active" BaseRatePlanCode = "SRATE2">
                            <BookingRules>
                                <BookingRule>
                                    <CancelPenalties>
                                        <CancelPenalty NonRefundable = "false">
                                            <Deadline OffsetTimeUnit = "Day" OffsetUnitMultiplier = "10" OffsetDropTime = "BeforeArrival"/>
                                            <AmountPercent Amount = "20.00"/>
                                        </CancelPenalty>
                                    </CancelPenalties>
                                </BookingRule>
                            </BookingRules>
                            <Description>
                                <Text>Derivada Prueba</Text>
                            </Description>
                        </RatePlan>
                        <RatePlan RatePlanCode = "DRV" RatePlanStatusType = "Deactivated" BaseRatePlanCode = "SRATE">
                            <BookingRules>
                                <BookingRule>
                                    <CancelPenalties>
                                        <CancelPenalty NonRefundable = "true"/>
                                    </CancelPenalties>
                                </BookingRule>
                                <BookingRule>
                                    <Viewerships>
                                        <Viewership>
                                            <LocationCodes LocationCodesInclusive = "true">
                                                <LocationCode CountryCode = "ES"/>
                                            </LocationCodes>
                                        </Viewership>
                                        <Viewership>
                                            <LocationCodes LocationCodesInclusive = "false"/>
                                        </Viewership>
                                    </Viewerships>
                                </BookingRule>
                            </BookingRules>
                            <Description>
                                <Text>TarifaDerivada</Text>
                            </Description>
                        </RatePlan>
                    </RatePlans>
                </HotelRatePlanInventoryRetrieveResult>
            </HotelRatePlanInventoryRetrieveResponse>
        </s:Body>
    </s:Envelope>
~~~


### Full HotelRatePlanRetrieveRQ



~~~xml
    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:ns1="http://www.opentravel.org/OTA/2003/05" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <s:Header>
            <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <o:UsernameToken>
                    <o:Username>user</o:Username>
                    <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">pass</o:Password>
                </o:UsernameToken>
            </o:Security>
        </s:Header>
       <s:Body>
          <ns:HotelRatePlanRetrieve>
             <ns:request Version="0">
                <ns1:POS>
                   <ns1:Source>
                      <ns1:RequestorID ID="ProviderCode"/>
                      <ns1:BookingChannel>
                         <ns1:CompanyName Code="ClientCode"/>
                      </ns1:BookingChannel>
                      <ns1:TPA_Extensions>
                      <Param key="onlyActive" value="0" />
                      </ns1:TPA_Extensions>
                   </ns1:Source>
                </ns1:POS>
               <ns1:RatePlans>
                   <ns1:RatePlan>
                <ns1:DateRange Start="2014-07-12" End="2014-07-14"/>
                    <ns1:HotelRef HotelCode="1" />
                   </ns1:RatePlan>
                </ns1:RatePlans>
             </ns:request>
          </ns:HotelRatePlanRetrieve>
       </s:Body>
    </s:Envelope>
~~~


### Full HotelRatePlanRetrieveRS



~~~xml
    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
       <s:Header>
          <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
             <u:Timestamp u:Id="_0">
                <u:Created>2014-05-29T16:10:24.204Z</u:Created>
                <u:Expires>2014-05-29T16:15:24.204Z</u:Expires>
             </u:Timestamp>
          </o:Security>
       </s:Header>
       <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <HotelRatePlanRetrieveResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanRetrieveResult Version="0">
                <RatePlans HotelCode="1" xmlns="http://www.opentravel.org/OTA/2003/05">
                   <RatePlan RatePlanCode="DRV" RatePlanStatusType="Active" BaseRatePlanCode="SRATE" AdjustedPercentage="10.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-12" End="2014-07-12"/>
                      </Rates>
                      <Description>
                         <Text>TarifaDerivada</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV" RatePlanStatusType="Active" BaseRatePlanCode="SRATE" AdjustedPercentage="10.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-13" End="2014-07-13"/>
                      </Rates>
                      <Description>
                         <Text>TarifaDerivada</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV" RatePlanStatusType="Active" BaseRatePlanCode="SRATE" AdjustedPercentage="10.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-14" End="2014-07-14"/>
                      </Rates>
                      <Description>
                         <Text>TarifaDerivada</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV2" RatePlanStatusType="Active" BaseRatePlanCode="SRATE2" AdjustedPercentage="15.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-12" End="2014-07-12"/>
                      </Rates>
                      <Description>
                         <Text>Derivada Prueba</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV2" RatePlanStatusType="Active" BaseRatePlanCode="SRATE2" AdjustedPercentage="15.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-13" End="2014-07-13"/>
                      </Rates>
                      <Description>
                         <Text>Derivada Prueba</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan RatePlanCode="DRV2" RatePlanStatusType="Active" BaseRatePlanCode="SRATE2" AdjustedPercentage="15.00" AdjustUpIndicator="false">
                      <Rates>
                         <Rate Start="2014-07-14" End="2014-07-14"/>
                      </Rates>
                      <Description>
                         <Text>Derivada Prueba</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE" RatePlanStatusType="Deactivated">
                      <Rates>
                         <Rate Start="2014-07-12" End="2014-07-12">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="150.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <Supplements>
                         <Supplement AgeQualifyingCode="10" CurrencyCode="EUR" Amount="10.00" Start="2014-07-12" End="2014-07-12" SupplementType="Board" InvCode="8"/>
                      </Supplements>
                      <SellableProducts>
                         <SellableProduct InvCode="SROOM2" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>Standard</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-13" End="2014-07-13">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="150.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <Supplements>
                         <Supplement AgeQualifyingCode="10" CurrencyCode="EUR" Amount="10.00" Start="2014-07-13" End="2014-07-13" SupplementType="Board" InvCode="8"/>
                      </Supplements>
                      <SellableProducts>
                         <SellableProduct InvCode="SROOM2" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>Standard</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-14" End="2014-07-14">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="150.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <Supplements>
                         <Supplement AgeQualifyingCode="10" CurrencyCode="EUR" Amount="10.00" Start="2014-07-14" End="2014-07-14" SupplementType="Board" InvCode="8"/>
                      </Supplements>
                      <SellableProducts>
                         <SellableProduct InvCode="SROOM2" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>Standard</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE2" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-12" End="2014-07-12">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="100.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <SellableProducts>
                         <SellableProduct InvCode="STD" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>TestRate</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE2" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-13" End="2014-07-13">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="100.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <SellableProducts>
                         <SellableProduct InvCode="STD" InvType="ROOM" InvStatusType="Active"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>TestRate</Text>
                      </Description>
                   </RatePlan>
                   <RatePlan CurrencyCode="EUR" RatePlanCode="SRATE2" RatePlanStatusType="Active">
                      <Rates>
                         <Rate Start="2014-07-14" End="2014-07-14">
                            <BaseByGuestAmts>
                               <BaseByGuestAmt AmountAfterTax="100.00" Type="25"/>
                            </BaseByGuestAmts>
                            <MealsIncluded MealPlanCodes="14"/>
                         </Rate>
                      </Rates>
                      <SellableProducts>
                         <SellableProduct InvCode="STD" InvType="ROOM"/>
                      </SellableProducts>
                      <Commission/>
                      <Description>
                         <Text>TestRate</Text>
                      </Description>
                   </RatePlan>
                </RatePlans>
             </HotelRatePlanRetrieveResult>
          </HotelRatePlanRetrieveResponse>
       </s:Body>
    </s:Envelope>
~~~


### Full HotelAvailRetrieveRQ



~~~xml
    <s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:u = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <s:Header>
            <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <o:UsernameToken u:Id = "uuid-db9d4b91-f832-4fdf-a2f7-0ebf54af3b77-1">
                    <o:Username>user</o:Username>
                    <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">pass</o:Password>
                </o:UsernameToken>
            </o:Security>
        </s:Header>
        <s:Body xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
            <HotelAvailRetrieve xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
                <request Version = "0">
                    <POS xmlns = "http://www.opentravel.org/OTA/2003/05">
                        <Source>
                            <RequestorID ID = "ProviderCode"/>
                            <BookingChannel>
                                <CompanyName Code = "ClientCode"/>
                            </BookingChannel>
                            <TPA_Extensions>
                                <Param key="onlyActive" value="0" />
                            </TPA_Extensions>
                        </Source>
                    </POS>
                    <HotelAvailRequests xmlns = "http://www.opentravel.org/OTA/2003/05">
                        <HotelAvailRequest>
                            <DateRange Start = "2014-07-01" End = "2014-07-31"/>
                            <HotelRef HotelCode = "1"/>
                        </HotelAvailRequest>
                    </HotelAvailRequests>
                </request>
            </HotelAvailRetrieve>
        </s:Body>
    </s:Envelope>
~~~


### Full HotelAvailRetrieveRS



~~~xml
    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
       <s:Header>
          <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
             <u:Timestamp u:Id="_0">
                <u:Created>2014-05-21T16:09:11.031Z</u:Created>
                <u:Expires>2014-05-21T16:14:11.031Z</u:Expires>
             </u:Timestamp>
          </o:Security>
       </s:Header>
       <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <HotelAvailRetrieveResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelAvailRetrieveResult Version="0">
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
                <AvailStatusMessages HotelCode="1" xmlns="http://www.opentravel.org/OTA/2003/05">
                   <AvailStatusMessage>
                      <StatusApplicationControl Start="2014-07-01" End="2014-07-31" RatePlanCode="DRV" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true"/>
                      <LengthsOfStay ArrivalDateBased="false">
                         <LengthOfStay Time="3" TimeUnit="Day" MinMaxMessageType="MinLOS"/>
                         <LengthOfStay Time="3" TimeUnit="Day" MinMaxMessageType="MaxLOS"/>
                      </LengthsOfStay>
                      <RestrictionStatus MinAdvancedBookingOffset="5"/>
                   </AvailStatusMessage>
                   <AvailStatusMessage BookingLimit="9">
                      <StatusApplicationControl Start="2014-07-01" End="2014-07-31" RatePlanCode="SRATE" InvCode="SROOM2" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true"/>
                      <RestrictionStatus Status="Open" SellThroughOpenIndicator="false" MaxAdvancedBookingOffset="50" MinAdvancedBookingOffset="3"/>
                   </AvailStatusMessage>
                </AvailStatusMessages>
             </HotelAvailRetrieveResult>
          </HotelAvailRetrieveResponse>
       </s:Body>
    </s:Envelope>
~~~

