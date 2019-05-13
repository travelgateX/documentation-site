---
title: Frequently Asked Questions
keywords: intro
search: Hotel - FAQ
sidebar: mydoc_sidebar
permalink: /docs/hotel/FAQ
---

**How many suppliers can I request in one method?**

One supplier per request. The only exception is in Availability, where you can request one or more suppliers.




**What is the workflow for hotel reservation?**

Our workflow has three mandatory steps: Availability (avail), Valuation and Reservation, always in this order.




**How can I identify which supplier is which in Availability method?**

By using the field ID in the request. For example:

 **In the request:**

~~~xml
<!--First supplier-->
<ns:code>TEST</ns:code>
<ns:id>1</ns:id>
~~~
~~~xml
<!--Second supplier-->
<ns:code>TEST2</ns:code>
<ns:id>2</ns:id>
~~~

 **In the response:**

~~~xml
<!--Response first supplier-->
<refId>1</refId>
~~~
~~~xml
<!--Response Second supplier-->
<refId>2</refId>
~~~



**What does PVP mean?**

PVP is public sale price in Spanish and it means the price you shoud sell the hotel to your customer. If it's binding, you must sell at least at this price, not less. More info below.




**How does the price work and how should I interpret the value in the field "commission"?**

Every option has a price and every price indicates the currency, the amount, if it is binding and the commission.

*Binding*: If binding is set as true, then the client cannot sell the product provided by the supplier for a lower price. If it's set as false, the client can sell the product for a lower price.

*Commission*:

 - Commission = 0: the price returned is a net price.
 - Commission = -1: the supplier has not supplied the sale price nor the commission. This information is obtained by signing a contract with the supplier.
 - Commission is greater than 0: X = % of the commission that is applied to the amount

  Please click on [Avail](/docs/hotel/DSF/Avail) for detailed examples.




**What is a static download and what is it for?**

It´s all the information we download from a supplier so we have it ready for access when requested. For example: lists of  hotels, destinations, detailed information of hotels, mealplans. 




**In the tag "RequiredAllPassenger", is specifying the names of the children necessary?**

If the value of "RequiredAllPassengers" is true in the static data, then yes, it is necessary.




**What is the difference between push & pull connections?**

As far as connecting to a client, there is no difference for you. Both types of connection use the same hotel API (pull). Our system converts the push connection into a pull one. 




**How can I request a new Integration with another supplier?**

Please contact your chosen supplier, negotiate a commercial contract with them and then fill in this [form](http://goo.gl/forms/WTGcUo3ztdOtlx8U2). We'll do the rest!


**Can I split the rooms inside an `<option>` node and book each room separately?**

The `<option>` node was created with the goal of guaranteeing that all rooms contained inside the option are bookable. If you need to book separate rooms, you must send us separate avail requests, one per room.

**How many timeouts are there in XMLTravelgate?**

There are two types of timeout - a general timeout and a supplier's time out. The first refers to the request itself and the latter to the request sent to each supplier. The general timeout is the sum of the supplier's timeout and our timeout and is defined in the body of the soap message. The supplier's timeout is defined within the message rqXML and should be slightly less than the whole timeout, a difference of 300 milliseconds is sufficient. Please see [hub quotas](/docs/hub/quotas) for more information.


