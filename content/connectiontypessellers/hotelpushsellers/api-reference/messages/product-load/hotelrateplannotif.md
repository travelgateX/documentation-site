+++
title = "HotelRatePlanNotif"
pagetitle = "HotelRatePlanNotif"
description = "HotelRatePlanNotif message"
icon = "fa-upload" 
weight = 3
alwaysopen = false
isDirectory = false
+++


Providers will send a HotelRatePlanNotifRQ message to push Rate Plans to sellers. TGX will process the data and respond with an error code if needed or success if everything is correct.



## HotelRatePlanNotifRQ


**Example for a RatePlan**


~~~xml
    <HotelRatePlanNotif>
      <request>
        <POS>
          <Source>
            <RequestorID ID = "Provider1"/>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"/>
            </BookingChannel>
          </Source>
        </POS>
        <RatePlans HotelCode = "HOT123">
          <RatePlan RatePlanCode = "TAR321" CurrencyCode = "EUR">
            <Rates>
              <Rate Start = "2007-04-01" End = "2007-12-31">
                <BaseByGuestAmts>
                  <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax = "100.00"/>
                  <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax = "130.00"/>
                  <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax = "195.00"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "8"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "20.00" AgeQualifyingCode = "8"/>
                </AdditionalGuestAmounts>
              </Rate>
            </Rates>
            <SellableProducts>
              <SellableProduct InvCode = "43" InvType = "ROOM"/>
            </SellableProducts>
            <Supplements>
              <Supplement Start = "2007-04-01" End = "2007-12-31" AgeQualifyingCode = "10" Amount = "20.00" InvCode = "1" SupplementType = "Board"/>
              <Supplement Start = "2007-04-01" End = "2007-12-31" AgeQualifyingCode = "8" Amount = "10.00" InvCode = "1" SupplementType = "Board"/>
            </Supplements>
          </RatePlan>
          <RatePlan RatePlanCode = "TAR333" CurrencyCode = "EUR" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-04-01" End = "2013-12-31">
                <BaseByGuestAmts>
                  <BaseByGuestAmt Type = "25" AmountAfterTax = "150.00"/>
                </BaseByGuestAmts>
              </Rate>
            </Rates>
            <SellableProducts>
              <SellableProduct InvCode = "43" InvType = "ROOM"/>
            </SellableProducts>
            <Supplements>
              <Supplement Start = "2013-04-01" End = "2013-12-31" AgeQualifyingCode = "10" Amount = "20.00" InvCode = "1" SupplementType = "Board"/>
              <Supplement Start = "2013-04-01" End = "2013-12-31" AgeQualifyingCode = "8" Amount = "10.00" InvCode = "1" SupplementType = "Board"/>
            </Supplements>
          </RatePlan>
          <RatePlan RatePlanCode = "TAR333" CurrencyCode = "EUR" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2013-04-01" End = "2013-12-31">
                <BaseByGuestAmts>
                  <BaseByGuestAmt Type = "14" Code = "2-0-0" AmountAfterTax = "150.00"/>
                  <BaseByGuestAmt Type = "14" Code = "3-0-0" AmountAfterTax = "180.00"/>
                </BaseByGuestAmts>
              </Rate>
            </Rates>
            <SellableProducts>
              <SellableProduct InvCode = "43" InvType = "ROOM"/>
            </SellableProducts>
            <Supplements>
              <Supplement Start = "2013-04-01" End = "2013-12-31" AgeQualifyingCode = "10" Amount = "20.00" InvCode = "1" SupplementType = "Board"/>
              <Supplement Start = "2013-04-01" End = "2013-12-31" AgeQualifyingCode = "8" Amount = "10.00" InvCode = "1" SupplementType = "Board"/>
            </Supplements>
          </RatePlan>
          <RatePlan RatePlanCode = "TAR333" CurrencyCode = "EUR" RatePlanStatusType = "Deactivated">
            <Rates>
              <Rate Start = "2014-01-01" End = "2014-02-01">
                <BaseByGuestAmts>
                  <BaseByGuestAmt Type = "25" AmountAfterTax = "150.00"/>
                  <BaseByGuestAmt Type = "14" Code = "2-0-0" AmountAfterTax = "150.00"/>
                  <BaseByGuestAmt Type = "14" Code = "3-0-0" AmountAfterTax = "180.00"/>
                  <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax = "100.00"/>
                  <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax = "130.00"/>
                  <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax = "195.00"/>
                </BaseByGuestAmts>
                <AdditionalGuestAmounts>
                  <AdditionalGuestAmount MaxAdditionalGuests = "1" Percent = "40.00" AgeQualifyingCode = "8"/>
                  <AdditionalGuestAmount MaxAdditionalGuests = "2" Percent = "20.00" AgeQualifyingCode = "8"/>
                </AdditionalGuestAmounts>
              </Rate>
            </Rates>
            <SellableProducts>
              <SellableProduct InvCode = "43" InvType = "ROOM"/>
            </SellableProducts>
            <Supplements>
              <Supplement Start = "2014-01-01" End = "2014-02-01" AgeQualifyingCode = "10" Amount = "20.00" InvCode = "1" SupplementType = "Board"/>
              <Supplement Start = "2014-01-01" End = "2014-02-01" AgeQualifyingCode = "8" Amount = "10.00" InvCode = "1" SupplementType = "Board"/>
            </Supplements>
          </RatePlan>
        </RatePlans>
      </request>
    </HotelRatePlanNotif>
~~~


**Example for a Derived RatePlan**


~~~xml
    <HotelRatePlanNotif>
      <request Version = "0">
        <POS>
          <Source>
            <RequestorID ID = "Provider1"></RequestorID>
            <BookingChannel>
              <CompanyName Code = "ClientTravelAgency1"></CompanyName>
            </BookingChannel>
          </Source>
        </POS>
        <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" RatePlanStatusType = "Active">
          <Rates>
            <Rate Start = "2014-07-01" End = "2014-07-31" AdjustedPercentage = "10" AdjustUpIndicator = "0"></Rate>
          </Rates>
        </RatePlan>
        <RatePlan RatePlanCode = "DRV" BaseRatePlanCode = "SRATE" RatePlanStatusType = "Deactivated">
          <Rates>
            <Rate Start = "2014-08-01" End = "2014-08-31" AdjustedPercentage = "10" AdjustUpIndicator = "0"></Rate>
          </Rates>
        </RatePlan>
      </request>
    </HotelRatePlanNotif>
~~~


| **Element**				| **Number** | **Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| HotelRatePlanNotif/request		| 1 	     |		| Root Node.						|
| RatePlans			   	| 1   	     |		|							|
| @HotelCode				| 1	     | String	| Hotel code whose information is provided by the method. |
| RatePlans/RatePlan			| 1..n	     |		| Present if rate exists.				|
| @RatePlanCode				| 1	     | String	| Rate code.						|
| @RatePlanStatusType			| 0..1	     | String	| Active or Deactivated (You can save prices with initial status deactivated if you want). If this attribute is missing, the price is saved as active. This is only valid for derived rates, the prices for a base rate always are saved as active. This attribute does not deactivate the rate.|
| @BaseRatePlanCode			| 0..1	     | String	| Rate code of the base RatePlan. Only used for derived rates. |
| @CurrencyCode				| 0..1	     | String	| ISO Currency (EUR). Not used for derived rates.	|
| RatePlans/RatePlan/Rates/Rate		| 1	     |		|							|
| @Start 				| 1	     | Date	| Start date of rate.					|
| @End   				| 1	     | Date	| End date of rate.					|
| @AdjustedPercentage			| 0..1	     | Decimal	| The percentage off the base rate plan amount used to determine the price of this derived rate plan. Only used for derived rates. |
| @AdjustedAmount			| 0..1	     | Decimal	| The amount which should be added to the base rate plan to determine the price of this derived rate plan. Only used for derived rates. |
| @AdjustUpIndicator			| 0..1	     | Boolean	| When true, the adjusted amount or adjusted percentage is added to the amount specified for the base rate plan to determine the derived rate amount. When false, the adjusted amount or adjusted percentage is subtracted from the amount specified for the base rate plan to determine the derived rate amount. Only used for derived rates. |
| RatePlans/RatePlan/Rates/Rate/BaseByGuestAmts | 0..1 | | Different types of price can come in the same BaseByGuestAmts element.	|							
| RatePlans/RatePlan/Rates/Rate/BaseByGuestAmts/BaseByGuestAmt | 1..n |	|						|
| @AmountAfterTax			| 1	     | Decimal	| Total amount for @NumberOfGuests indicated by day. This amount doesn't include fees, however include taxes.	|
| @NumberOfGuests			| 0..1	     | Integer	| Number of passengers. If @NumberOfGuests is not informed then @Type must be specified. The maximum @NumberOfGuests is the standard occupancy of the room. |
| @Type  				| 0..1	     | Integer	| Amounts per Room or per Occupancy. If @Type=25 the price is per room. If @Type=14 price is per occupancy, @Code is mandatory and @NumberOfGuests and AdditionalGuestAmounts are not allowed. |
| @Code  				| 0..1	     | String	| Mandatory if @Type=14. The occupancy code is defined by AdultNumber-ChildNumber-InfantNumber. @Code for an occupancy of 2 adults, 1 child and 0 babies would be "2-1-0". |
| .../Rate/AdditionalGuestAmounts	| 0..1 | | Not used for derived rates.				|
| .../AdditionalGuestAmounts/AdditionalGuestAmount | 1..n | | Price and information about the additional pax (children, infants or extra adults). |
| @MaxAdditionalGuests			| 1	    | Integer	| Number of additional pax, one node for each additional pax, int the above example has one for first child, and one for second. |
| @Type  				| 0..1	    | String	| OTA AmountDeterminationType. If not specified then the price is a supplement, if @Type is Exclusive then the the price is absolute. |
| @AgeQualifyingCode			| 1	    | Integer	| (10 - Adult,8 - Child,7 - Infant).			|
| @Amount				| 0..1	    | Decimal	| Price for each additional pax.			|
| @Percent				| 0..1	    | Decimal	| Percent for each additional pax.			|
| RatePlans/Supplements			| 0..1	    | 		|  Present if supplements by board exists. Not used for derived rates. |
| RatePlans/Supplements/Supplement	| 1..n	    |		|							|
| @Start 				| 1	    | Date	| Start date of this supplement.			|
| @End   				| 1	    | Date	| End date of this supplement.				|
| @AgeQualifyingCode			| 0..1	    | Integer	| Age qualifyingCode which affects this supplement (10 - Adult,8 - Child,7 - Infant). Not allowed if charging board supplement by occupancy. |
| @Amount				| 1	    | Decimal	| Amount of supplement.					|
| @SupplementType			| 1	    | String	| (Board).						|
| @InvCode				| 1	    | String	| OTA MPT Code if @SupplementType is Board. 		|
| RatePlans/RatePlan/SellableProducts	| 0..1	    |		| List of sellable products. Null for derived rates. 	|
| RatePlans/SellableProducts/SellableProduct | 1..n |		|							|
| @InvCode				| 1	    | String	| Sellable Product Code.				|
| @InvType				| 1	    | String	| Sellable product type (ROOM).				|



</br>

# ***Important information:***

* You must always load only *one* price type per message/notif. If you send different price type in the same message, our system will only use and load one with the following criteria: price by occupancy, price by guest/standard occupancy, price per room. If you send different price type for the same day in different messages, only the newest one would be loaded.
* The prices under the standard occupancy are ALWAYS loaded with **BaseByGuestAmts**.
* Children and babies are not allowed in ``BaseByGuestAmts``. Children and babies must always be defined in AdditionalGuestAmounts.
* The possible Type values in the AdditionalGuestAmount tag are **Exclusive** and **not specified**.
    * If there's **no value specified** then the price is a relative and it's added to the price of the current pax.
    * If the value is **"Exclusive"** then the price is absolute and it's the total price of the current pax.
* If NumberOfGuests is not specified in tag ``BaseByGuestAmt`` then ``Type="25"`` (price per room) or ``Type="14"`` (price per occupancy) must be specified. If ``Type="25"`` only one tag ``BaseByGuestAmt`` is allowed.
* If the price is per room then all ``AdditionalGuestAmount`` must be relative.
* If the price is per occupancy then ``Type`` should be ``14`` and ``Code`` should be specified. 
* The occupancy code is defined by AdultNumber-ChildNumber-InfantNumber, for an occupancy of 2 adults, 1 child and 0 babies should be "2-1-0". In the examples, the room uses are specified using = AdultNumber - ChildNumber - InfantNumber.



## **Notify amounts by Guests (Standard Occupancy):**

Case 1:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0.

We only load the price for the standard occupancy.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>  
~~~


There is no price for one adult, so it won't be available.

The price for two adults will be 100 = 2*(100/2).



Case 2:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0.

We load the price for the standard occupancy and the price for 1 Adult.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax="100.00"/>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="130.00"/>
    </BaseByGuestAmts>
~~~

The price for one Adult will be 100 = 100.

The price for two adults will be 130 = 2*(130/2).



Case 3:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0.

We load the price for the standard occupancy and the price for 1 additional
Adult Type default.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10"/>
    </AdditionalGuestAmounts>
~~~


There is no price for one Adult, so it won't be available.

The price for two Adults will be 100 = 2*(100/2).

The price for three Adults will be 190 = (100/2) + (100/2) + ((100/2) + (40).



Case 4:

Standard occupancy = 2

Room uses = 1-0-0, 2-0-0, 3-0-0

We load the price for the standard occupancy and the price for 1 additional
Adult Type Exclusive.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10" Type="Exclusive"/>
    </AdditionalGuestAmounts>
~~~


There is no price for one Adult, so it won't be available.

The price for two Adults will be 100 = 2*(100/2).

The price for three Adults will be 140 = (100/2) + (100/2) + 40.



Case 5:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 1-1-0.

We load the price for the standard occupancy and the price for 1 additional
Child (AgeQualifyingCode = "8") Type default.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>
~~~


There is no price for one Adult, so it won't be available.

The price for two Adults will be 100 = 2*(100/2).

The price for one Adult and one Child will be 100 = 2*(100/2). All pax
under the standard occupancy are considered as Adults.



Case 5.1:

standard occupancy = 2.

room uses = 1-0-0, 2-0-0, 1-0-1.

NOTE: The same samples with children are valid for babies specifying
AgeQualifyingCode = "7".

We load the price for the standard occupancy and the price for 1 additional Baby
(AgeQualifyingCode = "7") Type default.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "7" />
    </AdditionalGuestAmounts>
~~~


There is no price for one Adult, so it won't be available.

The price for two Adults will be 100 = 2*(100/2).

The price for one Adult and one Child will be 100 = 2*(100/2). All pax
under the standard occupancy are considered as adults.



Case 6:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 2-1-0.

We load the price for the standard occupancy and the price for 1 additional
Child Type default negative price


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-40.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>
~~~


There is no price for one Adult, so it won't be available.

The price for two Adults will be 100 = 2*(100/2)

The price for one Adult and one Child will be 60 = 2*(100/2) +
((100/2) -40).



Case 7:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0.

We load the price for the standard occupancy and the price for 1 additional Adult and the price for 2 additional Adults.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "-15.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
~~~


There is no price for one Adult, so it won't be available.

The price for two Adults will be 100 = 2*(100/2).

The price for three Adults will be 160 = (100/2) + (100/2) + ((100/2) +
10).

The price for four Adults will be 195 = (100/2) + (100/2) + ((100/2) +
10) + ((100/2) - 15).



Case 8:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0.

We load the price for the standard occupancy and the price for each
additional Adult (Without specifying MaxAdditionalGuests).


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
~~~


There is no price for one Adult, so it won't be available.

The price for two Adults will be 100 = 2*(100/2).

The price for three Adults will be 140 = (100/2) + (100/2) +
((100/2) -10).

The price for four Adults will be 180 = (100/2) + (100/2) +
((100/2) -10) + ((100/2) - 10).



Case 9:

Standard occupancy = 3.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0, 5-0-0.

We load the price for the standard occupancy and the price for 1 additional
Adult and the price for 2 additional adults.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax="150.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "15.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
~~~


There is no price for one Adult, so it won't be available.

There is no price for two Adults, so it won't be available.

The price for three Adults will be 150 = 3*(150/3).

The price for four Adults will be 190 = (150/3) + (150/3) + (150/3) +
((150/3) - 10).

The price for five Adults will be 255 = (150/3) + (150/3) + (150/3) +
((150/3) - 10) + ((150/3) + 15).



## **Notify amounts with price per room and additional guests**

Case 1:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 1-1-0.

We load the price per room Type="25".


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
~~~


The price for one Adult will be 100.

The price for two Adults will be 100.

The price for one Adult and one Child will be 100.



Case 2:

Standard occupancy = 2.

Room uses = 1-0-0, 2-0-0, 3-0-0, 1-1-0, 3-1-0.

We load the price per room but also the price for 1 additional Adult and
the price for 1 additional child.

~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "8" />
    </AdditionalGuestAmounts>
~~~


The price for one Adult will be 100.

The price for two Adults will be 100.

The price for three Adults will be 170 = 100 + (100/2 + 20).

The price for one Adult and one Child will be 100.

The price for three Adults and one Child will be 230 = 100 + (100/2 + 20) + (100/2 + 10).



Case 3:

Standard occupancy = 3.

Room uses = 1-0-0, 2-0-0, 3-0-0, 4-0-0.

We load the price per room but also the price for 1 additional Adult.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "25" AmountAfterTax="120.00"/>
    </BaseByGuestAmts>
    <AdditionalGuestAmounts>
        <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />
    </AdditionalGuestAmounts>
~~~


The price for one Adult will be 120.

The price for two Adults will be 120.

The price for three Adults will be 120.

The price for four Adults will be 180 = 120 + (120/3 + 20).



## **Notify amounts by Occupancy:**

Case 1:

Room uses = 1-0-0, 2-0-0, 3-0-0.

We only load price occupancy = 2 Adults, 0 child and 0 baby.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "14" AmountAfterTax="100.00" Code = "2-0-0"/>
    </BaseByGuestAmts> 
~~~


Room will not be available for 1 or 3 Adults.

The price of 2 Adults, 0 child and 0 baby will be 100.



Case 2:

Room uses = 2-1-0, 2-0-1.

We load price occupancy = 2 Adults, 1 child and 0 baby; and for
occupancy = 2 Adults, 0 child and 1 baby.


~~~xml
    <BaseByGuestAmts>
        <BaseByGuestAmt Type = "14" AmountAfterTax="95.00" Code = "2-1-0"/>
        <BaseByGuestAmt Type = "14" AmountAfterTax="80.00" Code = "2-0-1"/>
    </BaseByGuestAmts>  
~~~


The price for 2 Adults, 1 child and 0 baby will be 95.

The price for 2 Adults, 0 child and 1 baby will be 80.



## HotelRatePlanNotifRS


Success Response


~~~xml
    <HotelRatePlanNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
             <HotelRatePlanNotifResult>
                <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>
             </HotelRatePlanNotifResult>
    </HotelRatePlanNotifResponse>
~~~


Error Response


~~~xml
    <HotelRatePlanNotifResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">
         <HotelRatePlanNotifResult>
            <Errors xmlns="http://www.opentravel.org/OTA/2003/05">
               <Error ShortText="Incomplete AdditionalGuestAmount values" Code="7"/>
            </Errors>
         </HotelRatePlanNotifResult>
      </HotelRatePlanNotifResponse>
~~~
