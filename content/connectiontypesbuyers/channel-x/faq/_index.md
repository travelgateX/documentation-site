+++
title = "FAQ"
pagetitle = "FAQ"
description = "Frequently asked questions"
weight = 3
icon="fa-users"
alwaysopen = false
isDirectory = false
+++

## Generic

**What is the timezone displayed in the messages?**\
Time zone is always UTC.

**HotelRatePlanInventoryNotif, HotelRatePlanNotif and HotelAVailNotif all include another message called "Derived". What is a Derived rate and what is its purpose?**\
A derived rate is a rate that has derived from its base rate, but you can change its condition so that you can present it as a discounted rate or some sort of offer.
In the derived rate message you will also see a RateBasePlanCode. This is used to show the code of the parent rate of the Derived Rate.

**What is LocationCodesInclusive used for?**\
If set as true, this means that you are able to sell the hotel only for specific markets based on the value of "CountryCode". If set as false, you will not be able ot sell the hotel for the markets indicated in the "CountryCode".

**There are currency codes displayed on both HotelRatePlanInventoryNotif and HotelRatePlanNotif. Is it possible for the currency to be different between these two messages?**\
The channel will receive an error if they try to introduce different currencies in these fields. It is not allowed to have different values for the currency in these fields.

**Could the system send overlapped dates between "End" in one load and "Start" in a new? (Ex. 1st load is for Start = 1 Aug | End = 31 Aug and 2nd load is for Start 31 Aug | End 30 Sept).**\
Yes, it is possible, but it is not common. When this happens, the last product loaded will be the one to be applied. In case they were loaded in the same request, the order goes from top to bottom, and the lowest line containing the overlapping date will be the one that is applied.

**Suppose one ARI sent by Travelgate contained multiple rate plans and then a few of them may not be in the right format (i.e. rate plan name missing, etc.). What happens in this case?**\
If there is an error at the time the product is pushed into your system, you need to return an error. You have to process the whole request correctly. As for the error description, it is up to you.

## FullCopy
**What is *FullCopy* for?**\
It is a tool that allows to make a *Full Product* copy of the selected hotels inside *InventoryX* system. 

**How do I know whether it is a *Delta* or a *Full Copy***
- If you get an **HotelRatePlanInventoryNotif** call with an element 

```xml
<TPA_Extensions xmlns = "http://www.opentravel.org/OTA/2003/05">
    <Attribute key = "HotelNotifType" value = "FullCopy"/>
</TPA_Extensions>
```
- Full Copy will send a lot more information than a simple Delta

**What happens if a rate is deleted, does Travelgate inform us of this in the Full Copy?**\
Not in Full Copy. When a Full Copy is run after a rate has been deleted, you will only receive the information that is currently loaded in the system. You will be notified of a rate being removed by a Delta instead of a Full Copy after its removal.

## Inventory
**For HotelRatePlanInventoryNotif, what does the 'RatePlanNotifType' (New, Delta and Remove) stand for?**\
Rates can be created/deleted/modified. The status New means that it's a rate that has been created (a new rate), the status Delta is for a rate that has been modified and the status Removed is for a deleted rate.

**In HotelRatePlanInventoryNotif, what does CancelPenalty Start and End dates represent?**\
Start and End dates in this instance show the range of dates in which these cancellation policies are going to be applied. The start and end days are included in the cancellation policy range.

**What does the "RatePlan Duration" atrribute in HotelRatePlanInventoryNotif mean?**\
Duration is no longer being used and will be removed from the documentation.

**From the HotelRatePlanInventoryNotif, can you set `<RatePlanStatusType = Deactivated>` for specific periods? It also contains a start and end for rate plan attribute as well.**\
This is used to deactivate a rate. The deactivation can either be for an indefinite amount of time, of a specific time frame, and the date range (start and end) indicates this range.

**If your RatePlanInventory ARI provided `<MealsIncluded MealPlanCodes = "??"/>`, then the Supplement attribute will be present, is this correct? And, is it possible for it to show up when Mealplancode is 'Room Only'?**\
The RatePlanInventory informs of what the base MealPlan for this rate is (Room only, Bed and Breakfast, All Inclusive, etc). A base rate cannot have more than one MealPlan. The Supplement is not indicated here, it is indicated in the RatePlanNotif. The MealPlanCode displayed in MealsIncluded is the push system code for the meal plans which can be found in the code list in the static infomration.

## Avail
**What does "LengthsOfStay ArrivalDateBased" mean? What's different between the true and false values?**\
If this is set as true, the type of Min/Max LOS is on arrival for that specific day. For this type, the values for Min/Max LOS on arrival, only apply if it is applied to the check-in day. If this is set as false, it's a normal Min/Max LOS.

**Does TravelgateX have a default maxmimum nights restriction (Ex. max 30 days) if your HotelAvailNotif does not provide max LOS information for that rate?**\
TravelgateX does not have any restriction on default maximum nights.

**What does Master/ArrivalClose/DepartureClose mean?**\
The Closed On Arrival means that the check-in day cannot be the same day as the one that has Closed On Arrival applied to it, but this day can be inside the Availability search range. The Closed On Departure means that the check-out day cannot be the same day as the one that has Closed On Departure applied, but this day can be in the Availability search range. Closed Master means that the hotel is closed that day. The Closed Master means that in the indicated dates, none of the days can be a check-in day, check-out day or a day inside the range of the search.

## Prices
**For the standard occupancy calculation, should the data from `<Quantities StandardNumBeds>` or `<BaseByGuestAmt NumberOfGuests>` be consumed?**\
The first part indicates the StandardOccupancy number (value). The second indicates the format in which prices are returned when they are loaded by price. 


**Both tax 'ChargeFrequency' and 'ChargeUnit' are optional bits of information. So, what happens if they are not returned in a push message we send you? Do you need to re-calculate the price from HotelRatePlanNotif (if have tax elements are returned), or are you able to assume AmountAfterTax is the final price?**\
If these elements are not returned, then a fixed amount will be returned as a tax if you have set it up in the SetUp part of the extranet and depending on the type of tax you have set up. You always have to calculate the price that is returned in this tag with the tax.

**Example - suppose you set up an additional tax (i.e. per pax and per night), should we add up or subtract it from AmountAfterTax attribute?**\
The AmountAfterTax attribute inside the RatePlanNotify does not include the taxes you will set up (it might include any taxes the channel has loaded on their end if they have done so). The AmountAfterTax at the time of booking (the Reservation RS logs) will include the taxes indicated by you.

**Referring to the RatePlan message, there are `<Supplement>`. Understanding price is for meal basis, should you require calculation to add with `<AmountAfterTax>`, the purpose of this is an extra cost for supplement in case there are `<AdditionalGuest>` applied.**\
The Supplement tag is for MealPlans, not for additional paxes. The price indicated in there, shows the price of the supplement.

**What happens if more than one price type is loaded for the same day/range of days and for the same room/rooms?**\
All price types can be loaded at the same time (or at different times without overwriting). This isn't usually the case and almost never is there more than 1 price type loaded at a time. If all price types are loaded at the same time, or only two are loaded at the same time, at the time of the Availability search the price that is returned is the cheapest one.

{{%custom-children%}}

