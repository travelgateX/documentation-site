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
There is no limit with the hotel codes, the new aggregator will split to each supplier the maximum hotels allowed in different batches in order to request to the supplier all the hotels.

### Which are the possible filters in the Search Request? 
Right now the only option is by hotel code. In the future will be possible to request by Destination or by Geocode.

The main search methods will be:
- Hotel code
- Destination (Coming soon)
- Geocode (Coming soon)

### It is possible to use GIATA codes? 
Yes, It is possible request availability  using GIATA codes, first of all you need to provide us your GIATA credentials in order to set up your Apikey. After that you will be able to request using GIATA codes, receive the availability response with GIATA codes, etc…

### Can I get Daily-prices in Search Response?
It will depend if the supplier offer the information. In case that the information is returned by the supplier, you will find it through Roomprice string-->PriceBreakdown.

## Quote

### All the suppliers block the allotments?
No, not all the suppliers block the room in the Quote step. If the supplier blocks the room you will have 30 minutes to complete the booking, if not, you will have to re-launch Quote 30 minutes after the last request, normally just before HotelBook request.
You will find this information on the static configuration of each supplier in the tag "AllowBlockOption"

