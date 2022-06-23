+++
title = "Hotel Rates Benchmark Dataset"
pagetitle = "Hotel Rates Benchmark Dataset"
description = "Understand Hotel Rates Benchmark Dataset"
icon = "fa-tag" 
weight = 3
alwaysopen = false
+++

On this page you will learn how the data is stored in Benchmark Hotel Rates Dataset and how to interpret the differents table fields.

# Overview

The data used corresponds to the search and book transactions for the last 30 days that meet the following criteria:ç

* Check-in dates by week, starting current week and up to 6 months.
* Requests for 1 room and 2 adults.
* Hotels have been mapped against at least another Seller in TravelgateX.

Price is per night in euros (€) and only from net transactions. Total search and book requests with net prices are also included in the report, both your organization's requests and those to your competitors.

{{% alert theme="info" %}}All prices shown correspond to the minimum price that has been returned for the same hotel and specific market + week of check-in, so in the vast majority of cases you are comparing your most basic rate to the most basic rate of your competitors.{{% /alert %}}

{{% alert theme="warning" %}}Please note that the data provided in this report depends on the results obtained from hotel mapping, where it is possible that an incorrect mapping statement was made or that not all possible hotel mappings were considered.{{% /alert %}}

This dataset is updated weekly.


</br>


# Tables

Descriptions of each table and their correspondent fields are found below:


## hotel\_rates\_weekly\_seller
This table contains the total of searches (with net and unknown commission) and ok bookings requests and the minimum price for search and booking requests for my organization and all my competitive set (compset). The metrics are aggregated by check in week, market source, hotel and destination of the hotel.


__Fields__

* **checkin_week (TIMESTAMP).** Week by check-in date in UTC (format: YYYY-MM-DD hh:mm:ss). Date shown corresponds to Monday day.
* **market (STRING).** Source market code (ISO 3166-2).
* **hotel\_code (STRING).** Own hotel code.
* **hotel\_name    (STRING).** Own hotel name.
* **search\_ok\_net (NUMBER).** Quantity of searches with available options and net price.
* **search\_ok\_net\_compset (NUMBER).** Quantity of searches with available options and net price in the competitive set.
* **search\_ok\_unknown (NUMBER).** Quantity of searches with available options and unknown price type.
* **search\_ok\_unknown\_compset (NUMBER).** Quantity of searches with available options and unknown price type. in the competitive set.
* **search\_nok (NUMBER).** Quantity of searches without available options.
* **search\_nok\_compset (NUMBER).** Quantity of searches without available options in the competitive set.
* **min\_amount\_search\_net (FLOAT).** Minimum price in euros (€) returned in searches requests for the above conditions. 
* **min\_amount\_search\_net\_compset (FLOAT).** Minimum price in euros (€) returned in searches requests for the above conditions in the competitive set.
* **booking\_ok (NUMBER).** Quantity of bookings with net price.
* **booking\_ok\_compset (NUMBER).** Quantity of bookings with net price in the competitive set.
* **min\_amount\_booking\_net (FLOAT).** Minimum price in euros (€) returned in bookings requests for the above conditions. 
* **min\_amount\_booking\_net\_compset (FLOAT).** Minimum price in euros (€) returned in bookings requests for the above conditions in the competitive set.
* **country (STRING).** Country destination code (ISO 3166-2).
* **zone_1 (STRING).** Administrative first level zone. E.g. Comunidad de Madrid
* **zone_2 (STRING).** Administrative second level zone E.g. Madrid city


__Preview__


| checkin_week | market | hotel_code | hotel_name | search_ok_net | search_ok_net_compset | search_ok_unknown | search_ok_unknown_compset | min_amount_search_net |  min_amount_search_net_compset | booking_ok | booking_ok_compset | min_amount_booking_net | min_amount_booking_net_compset | country | zone_1 | zone_2 |
|--------------|--------|------------|----------- |---------------|-----------------------|-------------------|---------------------------|-----------------------|------------------------------|------------|--------------------|------------------------|--------------------------------|---------|--------|--------|
| 2022-07-11 00:00:00 UTC  | IT     | 12345       | Hotel Faro & Beach Club | 358    | 450                   | 20                | 35                        | 53,3                  | 48,2                          | 23         | 39                 | 55,90                  | 54,22                          | SP      | Comunidad de Madrid    | Madrid city         | 
| 2022-07-11 00:00:00 UTC  | SP     | 54321       | Hilton Sandton          | 852    | 421                   | 28                | 25                        | 102,75                  | 109,20                          | 23         | 39                 | 105,42                  | 103,18                           | ZA      | Gauteng         | City of Johannesburg Metropolitan Municipality | 
