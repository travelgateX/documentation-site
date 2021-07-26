+++
title = "Overview"
pagetitle = "Overview of Hotel Pull Sellers API"
description = "Develop our API and connect your system to the markeplace"
keywords = "intro"
search = "Overview of API"
sidebar = "mydoc_sidebar"
icon = "fa-info-circle"
weight = 1
+++

**Overview of API**

Travelgate-X offers the possibility for you to integrate our API and start selling to our portfolio of Buyers just as quick as you can finish the development!
When you integrate our API, your system will be able to receive Travelgate's methods and you will be ready to sell!  

To be able to explain exactly how this connectivity works we will define 3 concepts:

- Buyer: system sending requests to obtain the product (availability) with the purpose of booking.
- TGX (TravelgateX): system connecting a buyer to a seller.
- Seller: supplier of hotel product that will be bought by a buyer.

A Buyer's request (for example an availability) can be explained in 6 steps:

1- A buyer sends a request in TGX's API format to TGX.

2- TGX receives the request from the buyer, checks if it has the correct format and it sends it to the supplier's endpoint, but with the same TGX API structure. **The request is not modified**.

3- Seller receives the request from TGX system in TGX API.

4- Seller has to build the response following TGX API and send it back to TGX.

5- TGX receives the response and returns it to the buyer. **The response is not modified**.

6- Buyer receives the response in TGX's format.


The seller has to be able to receive requests for TravelgateX's API [methods](/hotelpullsellers/methods/messages/). In every request there is a [configuration](/hotelpullsellers/how-to-guides/configuration/) element with the credential information.

This connectivity will be by POST method, you can find more information at our [suppliers connectivity page](/hotelpullsellers/how-to-guides/connectivity/)

You can find a brief definition of the methods to implement, and if they are mandatory for the connectivity or not, in our [Data Structure page](/hotelpullsellers/methods/data-structure/).

Also, it is highly recommended to have a look at our [booking flow](/hotelpullsellers/how-to-guides/booking-flow/) to understand exactly how the clients will work with the connectivity.
