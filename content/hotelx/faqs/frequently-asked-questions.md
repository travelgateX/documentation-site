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

No, we use a test supplier, so there is a limited number of hotels in the database to be used.

## Languages allowed
**Which are the languages allowed in HotelX?**

The new aggregator allows every language, it will depend from each supplier.

## Maximum hotels code
**How many hotels code are allowed to be requested at the same time?**

We recommend a maximum of 200 hotels, the new aggregator will split them for each supplier into different batches in order to request all the hotels. Please take note: The current formula and rate limit are subject to change.

## Client Nationality
**Are there any restrictions to the client's nationality?**

It depends on the supplier

**Does the client's nationality affect the price? - For instance, same Search criteria with different client nationality**

Yes, nationality and market might affect the price of the option, depending on the supplier.

## Age Range of Children - Infants
**How can we differentiate a child from an infant? What is the age range of each of them?**

Each supplier has their own restrictions, so it will depend on each supplier.


## Search request filters
**What is the function of an accessCode?**

Every time you activate a supplier, you receive an access code. This access code is used to differentiate between suppliers and also to filter between the same supplier's different credentials and configurations.

**Which are the possible filters in the Search Request?**

Right now, you can search by hotel code and by destination. In the future, it will be possible to request by Geocode.

The main search methods will be:

* Hotel code
* Destination
* Geocode (Coming soon)

## GIATA codes
**It is possible to use GIATA codes?**

Yes, it is possible to request availability  using GIATA codes. First of all, you wil need to provide us your GIATA credentials in order to set up your Apikey. After that, you will be able to request using GIATA codes, receive the availability responses with GIATA codes, etc.

## Country names
**How can I get the names of the countries?**

The response of the HotelX Query contains location.country in ISO standard format.

## Daily-prices
**Can I get Daily-prices in Search Response?**

It will depend if the supplier offers the information. In case that the information is returned by the supplier, you will find it through the Roomprice string-->PriceBreakdown.

## Currency in Search Requests
**Is it necessary to include the currency attribute in your Search Request?**

In these cases, you will have two options:

* If you don't include any currency, then the settings' default currency configuration will be used
* If you don't configure a currency conversion plugin, then default supplier currency is returned. Some suppliers accept currency parameter and others will return their currency depending on your account as client with them.

## Currency not supported 
**What happen if I request availability with a currency that the supplier doesn´t accept?**

In these cases, you will have two options:

* Applying the exchange rates using a plugin (this pluggin contains the exchange rates previously loaded by you)
* Not applying any exchange rate and you will receive the supplier´s currency.

## Cancellation costs
**Is it possible to perform a cancellation as a query to just retrieve the cancellation costs, but not to cancel the booked item itself?**

You will be able to check the booking information (cancel policies included) with the [`HotelBooking`](/travelgatex/reference/objects/hotelbooking) query.

## Response time
**How is the response time of the different providers managed in the aggregator mode?**

HotelX will return the information from all the suppliers at the same time, once all the responses have been obtained by them. As for the requests that have timed out, they will be signaled by a warning in the response.

## Time out
**In aggregator mode, is it possible to set a time out for each provider?**

No, the time out will be applied to all providers, using the parameter setting: timeout.

## Content
**How to Manage HotelX Content**

HotelX allows two types of Queries:

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
