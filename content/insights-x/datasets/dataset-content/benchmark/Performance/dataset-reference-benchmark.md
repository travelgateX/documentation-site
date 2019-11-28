+++
title = "Reference"
pagetitle = "Benchmark Dataset Reference"
description = "Learn about how the information is stored in our benchmark dataset"
icon = "fa-book"
weight = 2
alwaysopen = false
+++

On this page you will learn how the data is stored in Benchmark Dataset.

# Tables

Descriptions of each table and their correspondent fields are found below:


## performance\_(daily|weekly|monthly)\_(seller|buyer)
This table contains the total of ok and nok searches, quotes, bookings and cancellation requests and responses times for the buyer|seller and for TravelgateX. The buyers|sellers that aren't connected are aggregated in "others" for the seller case and "OTHERS" for the buyers case.


__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_id (STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **client\_owner    (STRING).** Organization's name of the client.
* **provider\_owner (STRING).** Organization's name of the provider.
* **search\_ok (NUMBER).** Quantity of searches with searchable results.
* **search\_ok_tgx (NUMBER).** Quantity of searches with searchable results for TravelgateX.
* **search\_nok(NUMBER).** Quantity of searches with errors.
* **search\_nok_tgx (NUMBER).** Quantity of searches with errors for TravelgateX.
* **search\_time (NUMBER).** Total response time (in milliseconds) for all searches.
* **search\_time_tgx (NUMBER).** Total response time (in milliseconds) for all searches for TravelgateX.
* **quote\_ok (NUMBER).** Quantity of quotes with searchable results.
* **quote\_ok_tgx (NUMBER).** Quantity of quotes with searchable results for TravelgateX.
* **quote\_nok (NUMBER).** Quantity of quotes with errors.
* **quote\_nok_tgx (NUMBER).** Quantity of quotes with errors for TravelgateX.
* **quote\_time (NUMBER).** Total response time (in milliseconds) for all quotes.
* **quote\_time_tgx (NUMBER).** Total response time (in milliseconds) for all quotes for TravelgateX.
* **booking\_ok (NUMBER).** Quantity of correct bookings.
* **booking\_ok_tgx (NUMBER).** Quantity of correct bookings for TravelgateX.
* **booking\_nok (NUMBER).** Quantity of bookings with an error.
* **booking\_nok_tgx (NUMBER).** Quantity of bookings with an error for TravelgateX.
* **booking\_time (NUMBER.** Total response time (in milliseconds) for bookings.
* **booking\_time_tgx (NUMBER.** Total response time (in milliseconds) for bookings for TravelgateX.
* **cancel\_ok (NUMBER).** Quantity of correct cancellations.
* **cancel\_ok_tgx (NUMBER).** Quantity of correct cancellations for TravelgateX.
* **cancel\_nok (NUMBER).** Quantity of cancellations with an error.
* **cancel\_nok_tgx (NUMBER).** Quantity of cancellations with an error for TravelgateX.
* **cancel\_time (NUMBER).** Total response time (in milliseconds) for cancellations.
* **cancel\_time_tgx (NUMBER).** Total response time (in milliseconds) for cancellations for TravelgateX.

__Preview__


| search_date             | provider_id | client_id      | provider_owner  | client_owner   | search_ok | search_ok_tgx | search_nok | search_nok_tgx | search_time | search_time_tgx | quote_ok | quote_ok_tgx | quote_nok | quote_nok_tgx | quote_time | quote_time_tgx | booking_ok | booking_ok_tgx | booking_nok | booking_nok_tgx | booking_time | booking_time_tgx | cancel_ok | cancel_ok_tgx | cancel_nok | cancel_nok_tgx | cancel_time | cancel_time_tgx |
|-------------------------|-------------|----------------|-----------------|----------------|-----------|---------------|------------|----------------|-------------|-----------------|----------|--------------|-----------|---------------|------------|----------------|------------|----------------|-------------|-----------------|--------------|------------------|-----------|---------------|------------|----------------|-------------|-----------------|
| 2019-05-31 00:00:00 UTC | Provider 1  | Client 1       | Org Name 1      | Org Name 1     | 2739      | 2739          | 5435       | 5435           | 15143760    | 15143760        | 19       | 19           | 0         | 0             | 54151      | 54151          | 2          | 2              | 1           | 1               | 31747        | 31747            | 0         | 0             | 0          | 0              | 0           | 0               |
| 2019-05-31 00:00:00 UTC | Provider 2  | Client 2       | Org Name 2      | Org Name 2     | 22631     | 1079375       | 4964       | 669086         | 2308465     | 256855044       | 1694     | 7708         | 0         | 80            | 157269     | 3539127        | 8          | 18             | 1           | 1               | 5441         | 15815            | 1         | 7             | 0          | 0              | 625         | 5925            |
| 2019-05-31 00:00:00 UTC | Provider 3  | Client 3       | Org Name 3      | Org Name 3     | 131116    | 192822        | 68270      | 106039         | 581904466   | 1168506957      | 6386     | 8220         | 1232      | 1511          | 32997644   | 41012522       | 93         | 193            | 1           | 1               | 3468668      | 7259187          | 32        | 40            | 0          | 0              | 334721      | 399424          |
