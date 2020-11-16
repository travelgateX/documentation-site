+++
title = "HotelRatePlanRetrieve"
pagetitle = "HotelRatePlanRetrieve"
description = "HotelRatePlanRetrieve message"
icon = "fa-download" 
weight = 4
alwaysopen = false
isDirectory = false
+++


Providers will send a HotelRatePlanRetrieveRQ message to retrieve a complete break down of Rate Plans. TGX will return a break down of hotel / Rate Plans / rooms.



## HotelRatePlanRetrieveRQ



**Xml Exmaple**



~~~xml 
    <HotelRatePlanRetrieve>
      <request>
        <POS>
          <Source>
            <RequestorID ID="Provider1" />
            <BookingChannel > 
              <CompanyName Code="ClientTravelAgency1"/>
            </BookingChannel>
            <TPA_Extensions>
              <Param key = "onlyActive" value = "0"/>
            </TPA_Extensions>
          </Source>
        </POS>
        <RatePlans>
          <RatePlan>
            <DateRange Start="2013-12-20" End="2013-12-25"/>
            <RatePlanCandidates>
              <RatePlanCandidate RatePlanCode="BAR"></RatePlanCandidate>
            </RatePlanCandidates>
            <HotelRef HotelCode="12" />
          </RatePlan>
        </RatePlans>
      </request>
    </HotelRatePlanRetrieve>
~~~


| **Element**			| **Number**	| **Type**	| **Description**					|
| ----------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| HotelRatePlanRetrieve/request	| 1      	|		| Root Node.						|
| POS/Source/TPA_Extensions	| 0..1    	|		| Optional, empty only active RatePlans/Rooms will be received. |
| Param            		| 1       	|		|							|
| @key        			| 1  		| String	| onlyActive.						|
| @value      			| 1  		| String	| 1 - You will receive all active RatePlans/Rooms data. 0 - Active and deactivated RatePlans/Rooms will be received. (Same case than wihout TPA_Extensions node). |
| RatePlans/RatePlan/DateRange	| 1      	|		| Contains date filter.					|
| @Start      			| 1  		| Date		| Start date to search rates. 				|
| @End        			| 1  		| Date		| End date to search rates.				|
| RatePlans/RatePlan/HotelRef	| 1      	| 		| Contains hotel filter.				|
| @HotelCode  			| 1  		| String	| Hotel date to search rates.				|
| RatePlans/RatePlan/RatePlanCandidates/RatePlanCandidate | 0..1 |  | Contains rate filter.             		|
| @RatePlanCode			| 1  		| String	| Rate Plan Code to search rates.			|



## HotelRatePlanRetrieveRS


**Example for a Rate Plan**


~~~xml
    <HotelRatePlanRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelRatePlanRetrieveResult Version = "0">
        <RatePlans HotelCode = "12" xmlns = "http://www.opentravel.org/OTA/2003/05">
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Active">
            <Rates>
              <Rate Start = "2013-12-20" End = "2013-12-20">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" NumberOfGuests = "3"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-20" End = "2013-12-20" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-20" End = "2013-12-20" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Active">
            <Rates>
              <Rate Start = "2013-12-21" End = "2013-12-21">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" NumberOfGuests = "3"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-21" End = "2013-12-21" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-21" End = "2013-12-21" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-22" End = "2013-12-22">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" NumberOfGuests = "3"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-22" End = "2013-12-22" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-22" End = "2013-12-22" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-23" End = "2013-12-23">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" NumberOfGuests = "3"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-23" End = "2013-12-23" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-23" End = "2013-12-23" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-24" End = "2013-12-24">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" Type = "25"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-24" End = "2013-12-24" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-24" End = "2013-12-24" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-25" End = "2013-12-25">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" Type = "25"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" AgeQualifyingCode = "8" Amount = "40.00" CurrencyCode = "EUR"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" AgeQualifyingCode = "8" Amount = "20.00" CurrencyCode = "EUR"/>
                </AdditionalGuestAmounts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-25" End = "2013-12-25" AgeQualifyingCode = "10" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12"/>
              <Supplement Start = "2013-12-25" End = "2013-12-25" AgeQualifyingCode = "8" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
          <RatePlan RatePlanType = "11" RatePlanCode = "LOWCOST" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-12-25" End = "2013-12-25">
                <BaseByGuestAmts>
                  <BaseByGuestAmt AmountAfterTax = "300.00" CurrencyCode = "EUR" Type = "14" Code = "2-0-0"/>
                  <BaseByGuestAmt AmountAfterTax = "330.00" CurrencyCode = "EUR" Type = "14" Code = "2-1-0"/>
                </BaseByGuestAmts>
                <MealsIncluded MealPlanCodes = "7"/>
              </Rate>
            </Rates>
            <Supplements>
              <Supplement Start = "2013-12-25" End = "2013-12-25" CurrencyCode = "EUR" Amount = "35.00" SupplementType = "Board" InvCode = "12" ChargeTypeCode = "2-0-0"/>
              <Supplement Start = "2013-12-25" End = "2013-12-25" CurrencyCode = "EUR" Amount = "20.00" SupplementType = "Board" InvCode = "12" ChargeTypeCode = "3-0-0"/>
            </Supplements>
            <SellableProducts>
              <SellableProduct InvCode = "JUN_1" InvType = "ROOM" InvStatusType = "Active"/>
            </SellableProducts>
            <Commission Percent = "15.00"/>
          </RatePlan>
        </RatePlans>
      </HotelRatePlanRetrieveResult>
    </HotelRatePlanRetrieveResponse>
~~~


We get the Rate Plan with code **BAR** for the Hotel ID **12** for the date range **2013-12-20 - 2013-12-25**. In this case, the rate plan with code  **LOWCOST** has two rooms associated with it, you will receive a Rate Plan for each day-room-rate plan configuration.


**Example for a ***Derived*** RatePlan**

~~~xml
    <HotelRatePlanRetrieveResponse xmlns = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
      <HotelRatePlanRetrieveResult Version = "0">
        <RatePlans HotelCode = "1" xmlns = "http://www.opentravel.org/OTA/2003/05">
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Active">
            <Rates>
              <Rate Start = "2014-07-01" End = "2014-07-01"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Active">
            <Rates>
              <Rate Start = "2014-07-02" End = "2014-07-02"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2014-07-03" End = "2014-07-03"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2014-07-04" End = "2014-07-04"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
          <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" AdjustedPercentage = "10.00" AdjustUpIndicator = "false" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2014-07-05" End = "2014-07-05"/>
            </Rates>
            <Description>
              <Text>TarifaDerivada</Text>
            </Description>
          </RatePlan>
        </RatePlans>
      </HotelRatePlanRetrieveResult>
    </HotelRatePlanRetrieveResponse>
~~~ 


For a derived rate you will not receive the rooms associated with it. **The rooms associated with a derived rate are defined at setup level and must be associated with the base Rate Plan too.**
