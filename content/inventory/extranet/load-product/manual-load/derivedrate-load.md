+++
title = "Derived Rate: Availability and Price load"
pagetitle = "Derived Rate: Availability and Price load"
description = "Load availability conditions and supplements or discounts to your derived rates"
icon = "fa-tags"
weight = 2
alwaysopen = false
isDirectory=false
+++

## Derived Rate

After selecting the client, the Channel Manager and the hotel you will be able to select in the `Choose your Load` field, the `Derived Rates` option. Finally, indicate the base rate and the derived rate you want to load or update.

## How to load availability and supplements/discounts

In the following panel you will be able to load all conditions for your derived rates.

![Inventory-X Load Derived Rate](./../../../../images/web/inventory_load_derivedrate.png "Inventory-X Load Derived Rate")

</br>

* **From - To:** Date range when the conditions will be applied.
* **Applicable Days of Week:** Days of week that will apply the condition in the previous date range.
* **Close On Arrival:** Stop sales on arrival date: in the date range specified before is not possible to do a check-in. If you check "On" you will apply the close on arrival condition, if you check "Off" you will delete a close on arrival condition if it was previously load and if you check *unspecified* you won't apply any change (on/off) in the close on arrival condition.
* **Close On Departure:** Stop sales on departure date: in the date range specified before is not possible to do a check-out. If you check "On" you will apply the close on departure condition, if you check "Off" you will delete a close on departure condition if it was previously load and if you check *unspecified* you won't apply any change (on/off) in the close on departure condition.
* **Close Master:** Stop sales: in the date range specified before is not possible to stay, so the client will not receive availability for any stay that include those days.  If you check "On" you will apply the close master condition, if you check "Off" you will delete a close master condition if it was previously load and if you check *unspecified* you won't apply any change (on/off) in the close master condition.
* **Type adjust amount:** You will be able to select a specific amount or percent to be a supplement or discount. 
* **Adjust amount**: Numeric amount. *This should have a minus symbol if the amount is a discount.*
* **Min LOS on Stay:** Minimum stay length of nights for this rate and rooms to be available. 
* **Max LOS on Stay:** Maximum stay length of nights for this rate and rooms to be available. 
* **Min LOS on Arrival**: Minimum stay length of nights for this rate and rooms to be available. Only depending on the arrival date.
* **Max LOS on Arrival**: Maximum stay length of nights for this rate and rooms to be available. Only depending on the arrival date.
* **Min Release:** Minimum number of days before the check-in date for which the product will be available to be booked.
* **Max Release:** Maximum number of days before the check-in date for which the product will be available to be booked.
* **Meal Plan Supplements:** Option to add multiple meal plan supplements by pax type (adult, child or baby). Select the pax type, the meal plan and the amount per pax that will be added.

{{% alert theme="error" %}} Please, remember that a Derived Rate shares the allotment with its base rate, that's why you can't load and specific allotment for a derived rate. {{% /alert %}}

{{% alert theme="info" %}} Check our See [FAQ](https://docs.travelgatex.com/inventory/extranet/faq/discount-supplement/) for a complete example on how to create a full discount/supplement using Derived Rates. {{% /alert %}}

{{%custom-children%}}
