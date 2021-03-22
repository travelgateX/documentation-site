+++
title = "Rate: Availability and Price load"
pagetitle = "Rate: Availability and Price load"
description = "Load allotment, availability conditions and prices to your rates"
icon = "fa-tag"
weight = 1
alwaysopen = false
isDirectory=false
+++

# Rate

First, you will need to select the client and the Channel Manager in order to keep on the process of loading conditions. Afterwards, you should indicate the hotel to which you want to load availability conditions or prices. Finally, in the `Choose your Load` field, select `Rates`. Once the rate is specified in the selectable, you will have to choose if you want to load prices or conditions using the `Load Type` field. 

- [Load availability/allotment](#how-to-load-availability)
- [Load prices](#how-to-load-prices)


## How to load Availability

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

### How to load Prices

To load price you should select `Price` in the load type field.

![Inventory-X Manual Load Rate](./../../../../images/web/inventory_manualload_rate.png "Inventory-X Manual Load Rate")

This form allows you to load the 3 different types of price and extra passengers and meal plan supplements.

* **From - To:** Date range when the price will be applied.
* **Applicable Days of Week:** Days of week that will apply the price in the previous date range.
* **All Rooms:** Rooms that will apply the prices. In case the checkbox is not selected, it will appear a new field that will allow you to select the rooms that you want to apply the prices.
* **Price Type**: Inventory-X system allows three different types of price: 
    * [Price per Room](#price-per-room)
    * [Price per Standard Occupancy](#price-per-standard-occupancy)
    * [Price per Occupancy](#price-per-occupancy)

</br>

### Price per Room

Price per room allows you to load a price for the whole room and the option to add occupancy and meal plan supplements. 

![Inventory-X Manual Load Rate](./../../../../images/web/inventory_manualload_priceperroom.png "Inventory-X Manual Load Rate")

If you want a unique price for the whole room and you don't use occupancy supplements, tyou can load your price in the `Room Price` field. That way, no matter the occupancy uses your room has, the final price will be the one indicated in the `Room Price` field.

For example, if you load 100€ in `Room Price` and your room in the SetUp has allowed several uses (as 1 adult, 2 adults, 3 adults, 2 adults and 1 child and more), the price will be still 100€.

#### Occupancy supplements

In case you want to add supplements by pax you have to bear in mind the standard occupancy indicated in the SetUp. For example, a *Double Room* with standard occupancy 2 and multiple occupancy uses works as follows:

All occupancies uses **equal and below** the room standard occupancy will have the price loaded in the `Room Price` field:

* **1 adult (1-0-0):** 100€ *(room price)*
* **2 adults (2-0-0):** 100€ *(room price)*

If the room allows occupancies uses **above** the standard occupancy you can control the price for these extra passengers using the `Occupancy Supplements` option. You will be able to add different supplements by adult, child and baby. The supplement type defines the way the calculation is done: 

* **Amount:** This price is the amount added to the average price per pax calculated by the system. If the price per room is 100€ and the first extra adult has an **amount** supplement, the final price in our example for different occupancies will be:

    * **1 adult (1-0-0):** 100€ *(room price)*
    * **2 adults (2-0-0):** 100€ *(room price)*
    * **1 adult and 1 child (1-1-0):** 100€ *(room price)*
    * **3 adults (3-0-0):** 100€ *(room price)* + 50€ *(average price per pax: room price / standard occupancy, 100/2)* + 50€ *(adult amount supplement)* = 200€
    * **2 adults and 1 child (2-1-0):**  100€ *(room price)* + 0€ *(child exclusive supplement)* = 100€

* **Percent:** This price is the percent obtained from the room price. If the price per room is 100€ and the first extra adult has a **percent** supplement, the final price in our example for different occupancies will be:

   * **1 adult (1-0-0):** 100€ *(room price)*
    * **2 adults (2-0-0):** 100€ *(room price)*
    * **1 adult and 1 child (1-1-0):** 100€ *(room price)*
    * **3 adults (3-0-0):** 100€ *(room price)* + 50€ *(50% of 100€)* = 150€
    * **2 adults and 1 child (2-1-0):**  100€ *(room price)* + 0€ *(child exclusive supplement)* = 100€

* **Exclusive:** This price is absolute. If the price per room is 100€ and the first extra adult has an **exclusive** supplement, the final price in our example for different occupancies will be:
    * **1 adult (1-0-0):** 100€ (room price)
    * **2 adults (2-0-0):** 100€ (room price)
    * **1 adult and 1 child (1-1-0):** 100€ (room price)
    * **3 adults (3-0-0):** 100€ (room price) + 50€ (adult exclusive supplement) = 150€
    * **2 adults and 1 child (2-1-0):**  100€ (room price) + 0€ (child exclusive supplement) = 100€


#### Meal plan supplements

In the SetUp section you have specified a unique meal plan for your rate, but here you will be able to load meal plan supplements if you want. These supplements are able to be indicated by pax type: adult, child or baby. You should indicate the pax type, the meal plan and the amount to be added to the final price. 

{{% alert theme="info" %}} If you want to load a meal plan supplement by free, you should load it with a price of 0. {{% /alert %}}

</br>

### Price per Standard Occupancy

Price per standard occupancy allows you to load price for all occupancy uses under or equal to the standard occupancy and the option to add occupancy and meal plan supplements. 

Please, bear in mind that the prices here are calculated using the room standard occupancy and that all passangers under this value will be treated as an adult, so occupancies with children under the standard occupancy will have the same price as only adults with the same pax count. That means that, in order to calculate the final amount it is always necessary for the paxes to reach the number of adults indicated by the standard occupancy.

For example, if the room standard occupancy is 2 and our occupancy use is 1 adult and 2 children (1-2-0), the first two passengers will be treated as adults and the remaining will be treated as what they actually are, in this case as a child. In this example, the occupancy use of 1 adult and 2 children (1-2-0) will be treated as 2 adults and 1 child (2-1-0).

Let's check some examples to know how prices are calculated for different occupancy uses. First, we'll check the standard occupancy and uses from our *Double Room* set in the SetUp section:

![Inventory-X Manual Load Rate](./../../../../images/web/inventory_manualload_priceperstandardoccupancy1.png "Inventory-X Manual Load Rate")

In this case, our standard occupancy is 2 adults, but the room allows different occupancy uses as 3 adults, 1 adult, 2 adults and 1 child, 2 adults and 1 baby...

If we load price for this room using price per standard occupancy we will be able to load price for all occupancies under or equal the standard occupancy: 

![Inventory-X Manual Load Rate](./../../../../images/web/inventory_manualload_priceperstandardoccupancy2.png "Inventory-X Manual Load Rate")

If we load 50€ for 1 adult and 100€ for 2 adults, let's check how all occupancy uses will be cost:

* **1 adult (1-0-0):** 50€ (occupancy below the standard occupancy and price loaded specific for this case use).
* **2 adults (2-0-0):** 100€ (occupancy equal to the standard occupancy and price loaded specific for this case use).
* **1 adult and 1 child (1-1-0):** 100€. Children and babies are trated as adult until the standard occupancy is fulfilled, so in this case we have 1 adult + 1 child converted as an adult because we need to have 2 adults (standard occupancy), that way the price will be the one loaded for two adults.
* **1 adult and 2 children (1-2-0):** 100€ (for two adults) + 25€ (child supplement) = 125€. Children and babies are trated as adult until the standard occupancy is fulfilled, so in this case we have 1 adult + 1 child converted as an adult + 1 child, that way the price will be the one loaded for two adults and the price for the first extra child.
* **3 adults (3-0-0):**  100€ (for two adults) + 30€ (adult supplement) = 130€. In this case, all paxes are adults, as the standard occupancy is 2, we use that price and we and the supplement for the third adult. 

{{% alert theme="warning" %}} All prices for occupancy uses below and equal to the room standard occupancy must be loaded ir order to return availability to the buyers. If for example, price for 1 adult is not loaded, there won't be availability response for that occupancy use. {{% /alert %}}


{{% alert theme="info" %}} Check the [occupancy supplements sections](#ocuppancy-supplements) explained before to know how different types of supplements work. {{% /alert %}}

</br>

### Price per Occupancy

Price per occupancy allows you to load exactly the amount for each occupancy use that your room allows. In this case, our system doesn´t do any calculation and we don't use the standard occupancy, only the occupancy uses. 

![Inventory-X Manual Load Rate](./../../../../images/web/inventory_manualload_priceperoccupancy.png "Inventory-X Manual Load Rate")

As you can indicate an specific amount for each occupancy, it doesn't make sense to have occupancy supplements, but you will be able to load [meal plan supplements](#meal-plan-supplements) explained before. 

{{%custom-children%}}