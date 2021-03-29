+++
title = "FAQ"
keywords = "intro"
search = "Hotel - FAQ"
sidebar = "mydoc_sidebar"
permalink = "/docs/hotel/FAQ"
weight = 4
+++

**What is the workflow for hotel reservation?**

Our workflow has three mandatory steps: Availability (avail), Valuation and Reservation, always in this order. See [Booking Flow](/hotelpullsellers/how-to-guides/booking-flow/) page.



**What does PVP mean?**

PVP is public sale price in Spanish and it means the price you shoud sell the hotel to your customer. If it's binding, you must sell at least at this price, not less. More info below.




**How does the price work and how should I interpret the value in the field "commission"?**

Every option has a price and every price indicates the currency, the amount, if it is binding and the commission.

*Binding*: If binding is set as true, then the client cannot sell the product provided by the supplier for a lower price. If it's set as false, the client can sell the product for a lower price.

*Commission*:

 - Commission = 0: the price returned is a net price.
 - Commission = -1: the supplier has not supplied the sale price nor the commission. This information is obtained by signing a contract with the supplier.
 - Commission is greater than 0: X = % of the commission that is applied to the amount

  Please click on [Avail](/hotelpullsellers/methods/messages/booking-flow-methods/avail/) for detailed examples.




**What is a static download and what is it for?**

It´s all the information we download from a supplier so we have it ready for access when requested. For example: lists of  hotels, destinations, detailed information of hotels, mealplans. 




**In the tag "RequiredAllPassenger", is specifying the names of the children necessary?**

If the value of "RequiredAllPassengers" is true in the static data, then yes, it is necessary.




**What is the difference between push & pull connections?**

As far as connecting to a client, there is no difference for you. Both types of connection use the same hotel API (pull). Our system converts the push connection into a pull one. 



**Can I split the rooms inside an `<option>` node and book each room separately?**

The `<option>` node was created with the goal of guaranteeing that all rooms contained inside the option are bookable. If you need to book separate rooms, you must send us separate avail requests, one per room.


