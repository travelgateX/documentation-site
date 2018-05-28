+++
title = "Frequendly Asked Questions"
pagetitle = ""
description = "Common questions regarding HotelX"
weight = 3
alwaysopen = false
+++

## Search

### Do I have access to all the hotels in the test environment?
No, we use a test supplier, so there is a limited number of hotels in the data base to be used.

### Which are the languages allowed in the new aggregator?
The new aggregator allows each language, it will depend from each supplier.

### How many hotels code are allowed to request at the same time?
We recommend a maximum of 200 hotels, the new aggregator will split to each supplier the maximum hotels allowed in different batches in order to request to the supplier all the hotels. Please take note: The current formula and rate limit are subject to change.

### Which are the possible filters in the Search Request? 
Right now the only option is by hotel code. In the future will be possible to request by Destination or by Geocode.

The main search methods will be:
- Hotel code
- Destination (Coming soon)
- Geocode (Coming soon)

### It is possible to use GIATA codes? 
Yes, It is possible request availability  using GIATA codes, first of all you need to provide us your GIATA credentials in order to set up your Apikey. After that you will be able to request using GIATA codes, receive the availability response with GIATA codes, etc…

### How can I get the names of the countries?
The response of the hotelX query contains location.country in ISO standard format.

### Can I get Daily-prices in Search Response?
It will depend if the supplier offer the information. In case that the information is returned by the supplier, you will find it through Roomprice string-->PriceBreakdown.
 
### What happen if I request availability with a currency that the supplier doesn´t have it?
For these cases you will have two options:
- Apply the exchange rates using a pluggin (this pluggin contains the exchange rates previously loaded by you)
- Don´t apply any exchange rate and you will receive the supplier´s currency.

### How is the response time of the different providers managed in the aggregator mode?
HotelX will return information from all the suppliers at the same time, once all the responses have been obtained by them. The requests that have timed out, will be signaled by a warning in the response.

### In aggregator mode is it possible to set a time out for each provider?
No, the time out will be applied to all providers, using the parameter setting: timeout


