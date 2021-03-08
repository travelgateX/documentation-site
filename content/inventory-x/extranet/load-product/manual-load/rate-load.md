+++
title = "Rate: Availability and Price load"
pagetitle = "Rate: Availability and Price load"
description = "Load allotment, availability conditions and prices to your rates"
icon = "fa-tag"
weight = 1
alwaysopen = false
isDirectory=false
+++

## Rate

First, you will need to select the client and the Channel Manager in order to keep on the process of loading conditions. Afterwards, you should indicate the hotel to which you want to load availability conditions or prices. Finally, in the `Choose your Load` field, select `Rates`. Once the rate is specified in the selectable, you will have to choose if you want to load prices or conditions using the `Load Type` field. 

### How to load Availability

To load availability you should select `Availability`.

![Inventory-X Manual Load Rate](./../../../../images/web/inventory_manualload_rate.png "Inventory-X Manual Load Rate")

The new panel allows you to indicate the date range, rooms, allotment (number of rooms available) and conditions to be applied. Once you have introduced the data you want to apply, clicking ``Load Rate`` will save the changes. Doing this will overwrite the first loaded data for those dates, if any was loaded before.

* **From - To:** Date range when the conditions will be applied.
* **Applicable Days of Week:** Days of week that will apply the condition in the previous date range.
* **All Rooms:** Rooms that will apply the conditions. In case the checkbox is not selected, it will appear a new field that will allow you to select the rooms that you want to apply the availability conditions.
* **Free sales:** Sign of free sales: there is no limit in the number of rooms to be sell. If you check "On" you will apply the free sales condition, if you check "Off" you will delete a free sales if it was previously load and if you check *unspecified* you won't apply any change (on/off) in the free sales condition. 
* **Close On Arrival:** Stop sales on arrival date: in the date range specified before is not possible to do a check-in. If you check "On" you will apply the close on arrival condition, if you check "Off" you will delete a close on arrival condition if it was previously load and if you check *unspecified* you won't apply any change (on/off) in the close on arrival condition.
* **Close On Departure:** Stop sales on departure date: in the date range specified before is not possible to do a check-out. If you check "On" you will apply the close on departure condition, if you check "Off" you will delete a close on departure condition if it was previously load and if you check *unspecified* you won't apply any change (on/off) in the close on departure condition.
* **Close Master:** Stop sales: in the date range specified before is not possible to stay, so the client will not receive availability for any stay that include those days.  If you check "On" you will apply the close master condition, if you check "Off" you will delete a close master condition if it was previously load and if you check *unspecified* you won't apply any change (on/off) in the close master condition.
* **Min LOS on Stay:** Minimum stay length of nights for this rate and rooms to be available. 
* **Max LOS on Stay:** Maximum stay length of nights for this rate and rooms to be available. 
* **Min LOS on Arrival**: Minimum stay length of nights for this rate and rooms to be available. Only depending on the arrival date.
* **Max LOS on Arrival**: Maximum stay length of nights for this rate and rooms to be available. Only depending on the arrival date.
* **Min Release:** Minimum number of days before the check-in date for which the product will be available to be booked.
* **Max Release:** Maximum number of days before the check-in date for which the product will be available to be booked.

### How to load Price

To load price you should select `Price` in the load type field.

![Inventory-X Manual Load Rate](./../../../../images/web/inventory_manualload_rate.png "Inventory-X Manual Load Rate")

This form allows you to load the 3 different types of price and extra passengers and meal plan supplements.

* **From - To:** Date range when the price will be applied.
* **Applicable Days of Week:** Days of week that will apply the price in the previous date range.
* **All Rooms:** Rooms that will apply the prices. In case the checkbox is not selected, it will appear a new field that will allow you to select the rooms that you want to apply the prices.
* **Price Type**: Inventory-X system allows three different types of price: 

#### Price per Room

Price per room allows you to load a price for the whole room and the option to add occupancy and meal plan supplements. 

![Inventory-X Manual Load Rate](./../../../../images/web/inventory_manualload_priceperroom.png "Inventory-X Manual Load Rate")

All occupancies equal and below the room standard occupancy will have the price loaded in the `Room Price` field. If your room allows occupancies above the standard occupancy you can control the price for these extra passengers using the `Occupancy Supplements` option. You will be able to add different supplements by adult, child and baby and the supplement calculation can be done in multiple ways: 

* **Amount:** This price is the amount added to the average price per pax calculated by the system. If the price per room is 100€ and the first extra adult has a amount supplement, the final price in our example for different occupancies will be:

    * **1 adult:** 100€ *(room price)*
    * **2 adults:** 100€ *(room price)*
    * **1 adult and 1 child:** 100€ *(room price)*
    * **3 adults:** 100€ *(room price)* + 50€ *(average price per pax: room price / standard occupancy, 100/2)* + 50€ *(adult amount supplement)* = 200€
    * **2 adults and 1 child:**  100€ *(room price)* + 0€ *(child exclusive supplement)* = 100€

* **Percent:** This price is the percent obtained from the room price. If the price per room is 100€ and the first extra adult has a percent supplement, the final price in our example for different occupancies will be:

   * **1 adult:** 100€ *(room price)*
    * **2 adults:** 100€ *(room price)*
    * **1 adult and 1 child:** 100€ *(room price)*
    * **3 adults:** 100€ *(room price)* + 50€ *(50% of 100€)* = 150€
    * **2 adults and 1 child:**  100€ *(room price)* + 0€ *(child exclusive supplement)* = 100€

* **Exclusive:** This price is absolute. If the price per room is 100€ and the first extra adult has a exclusive supplement, the final price in our example for different occupancies will be:
    * **1 adult:** 100€ (room price)
    * **2 adults:** 100€ (room price)
    * **1 adult and 1 child:** 100€ (room price)
    * **3 adults:** 100€ (room price) + 50€ (adult exclusive supplement) = 150€
    * **2 adults and 1 child:**  100€ (room price) + 0€ (child exclusive supplement) = 100€

{{%custom-children%}}