+++
title= "Connectivity"
keywords= "connectivity, supplier, hotel"
search= "Hotel - supplier"
sidebar= "mydoc_sidebar"
permalink = "/docs/hotel/supplier/connectivity"
weight = 3
+++

For connectivities we will use a POST request to the suppliers system. 

The headers we will use to send the POST request are:

| **Key**                | **Value**                   |
| ------------------------- | --------------------------- |
| Content-Type  | text/xml; charset=utf-8      |
| Accept  | application/xml      |
| Accept-Encoding | gzip      |
| Connection | Keep-Alive      |

The different methods from our API can be sent to 1 unique endpoint or to different enpoints. These endpoints will be set in the [configuration](/connectiontypessellers/hotelpullsellers/how-to-guides/configuration/) TravelgateX receives from the buyer in each request. Endpoints have to be **https** for **Reservation**, **Cancel**, **ReservationRead** and **ReservationList**, for **other request** they can be **http or https**.

### Correlation endpoints

In this table you can find relation between TravelgateX's API method and the enpoint we will get from the configuration received to send this request:

| **API Method**                | **Configuration Parameter Used**                   |
| ------------------------- | --------------------------- |
| All requests  | UrlGeneric      |

We expect to receive always a 200 http status. If there is an error in the response it should be notified in the [ApplicationError tag](/connectiontypessellers/hotelpullsellers/how-to-guides/errors/).