+++
title = "FAQs"
pagetitle = "HotelX Frequendly Asked Questions"
description = "Do you have specific questions about HotelX? Check out the FAQs"
icon = "fa-question-circle"
weight = 1
alwaysopen = false
tags = ["faq"]
+++

## Hotels in test
**Do I have access to all the hotels in the test environment?**

No, we use a test supplier, so there is a limited number of hotels in the data base to be used.

## Languages allowed
**Which are the languages allowed in HotelX?**

The new aggregator allows each language, it will depend from each supplier.

## Maxium hotels code
**How many hotels code are allowed to request at the same time?**

We recommend a maximum of 200 hotels, the new aggregator will split to each supplier the maximum hotels allowed in different batches in order to request to the supplier all the hotels. Please take note: The current formula and rate limit are subject to change.

## Search request filters
**Which are the possible filters in the Search Request?**

Right now the only option is by hotel code. In the future will be possible to request by Destination or by Geocode.

The main search methods will be:
- Hotel code
- Destination (Coming soon)
- Geocode (Coming soon)

## GIATA codes
**It is possible to use GIATA codes?**

Yes, It is possible request availability  using GIATA codes, first of all you need to provide us your GIATA credentials in order to set up your Apikey. After that you will be able to request using GIATA codes, receive the availability response with GIATA codes, etc…

## Country names
**How can I get the names of the countries?**

The response of the hotelX query contains location.country in ISO standard format.

## Daily-prices
**Can I get Daily-prices in Search Response?**

It will depend if the supplier offer the information. In case that the information is returned by the supplier, you will find it through Roomprice string-->PriceBreakdown.

## Currency not supported 
**What happen if I request availability with a currency that the supplier doesn´t have it?**

For these cases you will have two options:
- Apply the exchange rates using a pluggin (this pluggin contains the exchange rates previously loaded by you)
- Don´t apply any exchange rate and you will receive the supplier´s currency.

## Cancellation costs
**Is it possible to perform a cancellation as a query to just retrieve the cancellation costs, but not to cancel the booked item itself?**

You will be able to check the booking information (cancel policies included) with the [`HotelBooking`](/travelgatex/reference/objects/hotelbooking) query.

## Response time
**How is the response time of the different providers managed in the aggregator mode?**

HotelX will return information from all the suppliers at the same time, once all the responses have been obtained by them. The requests that have timed out, will be signaled by a warning in the response.

## Time out
**In aggregator mode is it possible to set a time out for each provider?**

No, the time out will be applied to all providers, using the parameter setting: timeout.

## Content
**How to Manage HotelX Content?**

HotelX allows you to do two types of Queries:

* **Search to a HotelCode level**: in order to receive the information of a specific HotelCode(s), you should introduce the HotelCode(s) of your query:

```json
{
  "criteria": {
    "access": "yourAccess",
    "hotelCodes":["A159", "B357", "C568"]
  }
}
```

* **Search the complete HotelList from a supplier’s access**: in order to receive the complete hotel list from a supplier’s access, you should introduce the number of hotels you want to receive in the response of the query. Since the hotel list includes a large amount of hotels, it is divided into several batches, each one of a different number of hotels. In this case, the minimum size you can request is 100, and the max. is 10000.

```json
{
  "criteria": {
    "access": "yourAccess",
    "maxSize": 500
  }
}
```
[More info on HotelX content.](/hotelx/concepts/content/)
