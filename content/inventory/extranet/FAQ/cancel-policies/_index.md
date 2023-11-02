+++
title = "Cancel Policies"
pagetitle = "How to load cancellation policies different cancel policies"
description = "Know how the load different cancellation policies by rate and date"
icon = "fa-window-close"
weight = 3
alwaysopen = false
isDirectory=false
+++

In the [Setup section](https://docs.travelgatex.com/inventory/extranet/load-product/setup/) you are able to add cancel policies when you create your rates. You will be able to add as many policies as you need. All that is necessary is to indicate the days in advance before the arrival date, the type and the value of the policy.

Let's clarify these options with a few examples:

1. [Refundable policy](#refundable-policy)
    * [Nigths and Percentage](#nigths-and-percentage)
    * [Import and Percentage](#import-and-percentage)
2. [Non-Refundable policy](#non-refundable-policy)
3. [No-Show policy](#no-show-policy)

</br>

## Refundable policy

Here you can see some examples of different refundable cancel policies:

### Nigths and Percentage

![Inventory Cancel Policies](./../../../images/web/inventory_cancelpolicy1.png "Inventory Cancel Policies")

</br>

Based on the screenshot above you can determine that:

* 5 days before the arrival date, the cancellation penalty will be of one night (the cost is the average price for all nights prices included in the reservation).
* 3 days before the arrival date, the cancellation penalty will be 50% of the total amount of the booking.
* 1 day before the arrival date, the cancellation penalty will be 100% of the total amount of the booking.
* If the cancellation is done prior to the 5 days before the arrival date, there will not be cancellation penalty at all.

</br>

### Import and Percentage

![Inventory Cancel Policies](./../../../images/web/inventory_cancelpolicy2.png "Inventory Cancel Policies")

</br>

* 1000 days before the arrival date, the cancellation penalty will be 10% of the total amount. Technically, this means that if you cancel there will always be a penalty.
* 20 days before the arrival date, the cancellation penalty will be 50 € (or the kind of currency applied to the rate).
* 2 days before the arrival date, the cancellation penalty will be 80% of the total amount.


## Non-Refundable policy

![Inventory Cancel Policies](./../../../images/web/inventory_cancelpolicy4.png "Inventory Cancel Policies")

</br>

There is no cancellation penalty, the total amount of the reservation is charged no matter when is cancelled. 


## No-Show policy


![Inventory Cancel Policies](./../../../images/web/inventory_cancelpolicy3.png "Inventory Cancel Policies")

</br>

* 3 days before the arrival date, the cancellation penalty will be of one night (the cost is the average price for all nights prices included in the reservation).
* 0 days before the arrival (if the customer doesn't appear the check-in day) the cancellation penalty will be the 121% of the reservation, that means the total booking import plus a charge for not showing.





</br>
</br>
</br>

{{% alert theme="info" %}} If you want to delete any cancellation policy previously added, you just have to click the recycle bin icon on the right
side of the cancellation policy.. {{% /alert %}}


{{%custom-children%}}
