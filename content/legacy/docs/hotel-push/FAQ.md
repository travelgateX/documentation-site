---
title: FAQ
keywords: hotel-push, faq
search: Hotel-Push - FAQ
sidebar: mydoc_sidebar
permalink: /docs/hotel-push/FAQ
---



**What is standard occupancy?**

Standard occupancy is the standard number of adults paxes of the room.

Standard occupancy is used to calculate prices under it:

For example, if the standard occupancy is 2. And it’s loaded...

~~~xml
<BaseByGuestAmts>
   <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
</BaseByGuestAmts>
~~~

... The price of two paxes will be 100, and the price for one pax will
be 50.

Standard occupancy is used to calculate prices above it:

For example, if the standard occupancy is 2. And it’s loaded...


~~~xml
<BaseByGuestAmts>
   <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>
   </BaseByGuestAmts>
   <AdditionalGuestAmounts>
   <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "50.00" AgeQualifyingCode = "10"/>
</AdditionalGuestAmounts>
~~~ 

... The price of two paxes will be 100, but the price of three paxes
will be 250



**What is MaxAdditionalGuests in AdditionalGuestAmount?**

MaxAdditionalGuests is not the maximum number of additional guests. It’s
just the number of additional guests for which the price is loaded.



**How to open and close sales correctly?**

In our system we've three booleans to control restrictions:

-   MasterOpen
-   ArrivalOpen
-   DepartureOpen



When all booleans are true a booking it's allowed in the specified day.

When MasterOpen is false bookings are not allowed in the specified day.

When ArrivalOpen is false bookings are not allowed if the arrival date
to the hotel is the specified day.

When DepartureOpen is false bookings are not allowed if the departure
date from the hotel is the specified day.

To control these three values when you are notifying availability you
have RestrictionStatus/Status and RestrictionStatus/Restriction. Status
indicates the action to do Open or Close. Then the restriction indicates
which of the internal booleans are set. If restriction is not present
all booleans are set. For example:

If you want to sell a product. The first needed thing to do is Open all
bits. This is possible doing:

Send Status=Open, without Restriction.

Then values will be:

MasterOpen = true

ArrivalOpen = true

DepartureOpen = true

Then, if you don't want paxes with arrival at the specified day, you
must Close Arrival. This is possible doing:

Send Status=Close, Restriction=Arrival.

Then values will be:

MasterOpen = true

ArrivalOpen = false

DepartureOpen = true

Then, if you don't want any booking with departure at the specified day,
you must Close Departure. This is possible doing:

Send Status=Close, Restriction=Departure.

Then values will be:

MasterOpen = true

ArrivalOpen = false

DepartureOpen = false

Finally, if you want to allow allow any kinds of bookings again, you
must Open all bits again. This is possible doing:

Send Status=Open, without Restriction.

Then values will be:

MasterOpen = true

ArrivalOpen = true

DepartureOpen = true



**Why AgeQualifyingCode is specified in supplements?**

In our system it’s possible to load different supplements for each kind
of pax (Baby, Child or Adult).



XML Travelgate - Edificio Europa, Local 1, bajos - ParcBIT, Palma de
Mallorca, Baleares +34 871 968 181   

[http://www.xmltravelgate.com](http://www.xmltravelgate.com)    

Free URL shortener_by XML Travelgate 	    Copyright 2014
