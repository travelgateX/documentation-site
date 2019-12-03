+++
title = "FAQ"
pagetitle = "FAQ"
description = "Frequently asked questions"
icon = "fa-question-circle"
alwaysopen = false
weight = 4
+++

# Inventory-X FAQ

**What is standard occupancy?**

Standard occupancy is the standard number of Adult paxes of the room. For example, if the standard occupancy is 2. And the following is loaded...

~~~xml
<BaseByGuestAmts>
   <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax="50.00"/>
   <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
</BaseByGuestAmts>
~~~

... The price of two paxes will be 100, and the price for one pax will
be 50. Note that prices for pax under the standard occupancy must be specified and prices for babies under the standard occupancy will be 0. 

Standard occupancy is used for calculating prices above it:

For example, if the standard occupancy is 2. And the following is loaded...


~~~xml
<BaseByGuestAmts>
   <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
   </BaseByGuestAmts>
   <AdditionalGuestAmounts>
   <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "50.00" AgeQualifyingCode = "10"/>
</AdditionalGuestAmounts>
~~~ 

... The price for one pax will be 50, this is 100/2.  The price of two paxes will be 100 but the price for three paxes will be 200 (100 + (50 + 50)). There are more details in the section Notify Messages.



**What is MaxAdditionalGuests in AdditionalGuestAmount?**

MaxAdditionalGuests is not the maximum number of additional guests but the number of additional guest for which the price is loaded.



**How to open and close sales correctly?**

In our system we've three booleans to control restrictions:

-   MasterOpen
-   ArrivalOpen
-   DepartureOpen



When all booleans are true a booking is allowed in the specified day.

When MasterOpen is false bookings are not allowed in the specified day.

When ArrivalOpen is false bookings are not allowed if the arrival date in the hotel is the specified day.

When DepartureOpen is false bookings are not allowed if the departure date from the hotel is the specified day.

To control these three values when you are notifying availability you have RestrictionStatus/Status and RestrictionStatus/Restriction. Status indicates whether the action to do is Open or Close. Then the restriction indicates which of the internal booleans will be set. If a restriction is not present, all booleans are set. For example:

If you want to sell a product, the first needed thing to do is Open all bits. This is possible by doing the following:

Send Status=Open, without Restriction.

Then values will be:

MasterOpen = true

ArrivalOpen = true

DepartureOpen = true

Then, if you don't want paxes with arrival at the specified day, you must Close Arrival. This is possible by doing the following:

Send Status=Close, Restriction=Arrival.

Then values will be:

MasterOpen = true

ArrivalOpen = false

DepartureOpen = true

Then, if you don't want any bookings with departure at the specified day, you must Close Departure. This is possible by doing the following:

Send Status=Close, Restriction=Departure.

Then values will be:

MasterOpen = true

ArrivalOpen = false

DepartureOpen = false

Finally, if you want to allow allow all kinds of bookings again, you must Open all bits again. This is possible by doing the following:

Send Status=Open, without Restriction.

Then values will be:

MasterOpen = true

ArrivalOpen = true

DepartureOpen = true



**Why AgeQualifyingCode is specified in supplements?**

In our system it is possible to load different supplements for each kind of pax (Baby, Child or Adult).
