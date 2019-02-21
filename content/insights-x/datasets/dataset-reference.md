+++
title = "Reference"
pagetitle = "Dataset Reference"
description = "Learn about how the information is stored in our datasets"
icon = "fa-book"
weight = 2
alwaysopen = false
+++

On this page you will learn how the data is stored in Datasets.

# Tables

Data is stored in multiple tables depending on the kind of info that wants to be queried.
Descriptions of each table and their correspondent fields are found below:

## insights\_daily\_(buyer|seller)
This table contains info from searches, quotes and bookings aggregated by day.

__fields__

* client\_id    (STRING). Client unique ID.
* provider\_id (STRING). Provider unique ID.
* cache	(BOOLEAN). It indicates if the source of request was the client or Speed-X to load info in cache (0=Client, 1=Speed-X).
* search\_date (TIMESTAMP). Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* check\_in (TIMESTAMP). Check in date in UTC (format: YYYY-MM-DD hh:mm:ss).
* nights (NUMBER). Length of stay.
* market (STRING). Source market of paxes (ISO 3166-1 alpha-2).
* num\_rooms (NUMBER). Quantity of rooms.
* adults (NUMBER). Quantity of paxes older than 12 years (12 is not included).
* children (NUMBER). Quantity of paxes between 2 and 12 (both included).
* infants (NUMBER). Quantity of paxes younger than 2 years (2 is not included).
* search\_ok (NUMBER). Quantity of searches that returned any available hotel for above key (search_date, check_in...).
* search\_nok (NUMBER). Quantity of searches that didn't return any available hotels for above key.
* quote\_ok (NUMBER). Quantity of quotes that returned a correct result for above key.
* quote\_nok (NUMBER). Quantity of quotes that returned a wrong result for above key.
* booking\_ok\_net (NUMBER). Quantity of confirmed bookings for above key where we have the net amount in EUR.
* booking\_ok\_unknown (NUMBER). Quantity of confirmed bookings for above key where we have the amount in EUR but it may have applied commissions.
* booking\_nok (NUMBER). Quantity of failed bookings for above key.
* min_amount_booking_net (NUMBER). Net amount of cheapest booking for above key.
* max_amount_booking_net (NUMBER). Net amount of most expensive booking for above key.
* tot_amount_booking_net (NUMBER). Total net amount of confirmed bookings for above key.
* min_amount_booking_net (NUMBER). Amount of cheapest booking for above key when we don't know if any commission is applied.
* max_amount_booking_net (NUMBER). Amount of most expensive booking for above key when we don't know if any commission is applied.
* tot_amount_booking_net (NUMBER). Total amount of confirmed bookings for above key when we don't know if any commission is applied.
* hotels (STRUCT). Repeated field that contains info about hotels for above key.
    * code (STRING). Hotel unique ID.
    * search\_ok\_net (NUMBER). Quantity of searches with available options for above key and hotel with net price available.
    * search\_ok\_unknown (NUMBER). Quantity of searches with available options for above key and hotel with a price where we don't know if any commission is applied.
    * search\_nok (NUMBER). Quantity of searches without available options for above key and hotel.
    * min\_amount\_search\_net (NUMBER). Net amount of cheapest option for that hotel.
    * max\_amount\_search\_net (NUMBER). Net amount of most expensive option for that hotel.
    * tot\_amount\_search\_net (NUMBER). Total net amount of searches for that hotel.
    * min\_amount\_search\_unknown (NUMBER). Amount of cheapest option for that hotel (Commission not available). 
    * max\_amount\_search\_unknown (NUMBER). Amount of most expensive option for that hotel (Commission not available). 
    * tot\_amount\_search\_unknown (NUMBER). Total amount of searches for that hotel (Commission not available).
    * quote\_ok\_net (NUMBER). Quantity of quotes for above key and hotel with net price available.
    * quote\_ok\_unknown (NUMBER). Quantity of quotes for above key and hotel with a price where we don't know if any commission is applied.
    * quote\_nok (NUMBER). Quantity of failed quotes for above key and hotel.
    * min\_amount\_quote\_net (NUMBER). Net amount of cheapest quote for that hotel.
    * max\_amount\_quote\_net (NUMBER). Net amount of most expensive quote for that hotel.
    * tot\_amount\_quote\_net (NUMBER). Total net amount of quotes for that hotel.
    * min\_amount\_quote\_unknown (NUMBER). Amount of cheapest quote for that hotel (Commission not available). 
    * max\_amount\_quote\_unknown (NUMBER). Amount of most expensive quote for that hotel (Commission not available). 
    * tot\_amount\_quote\_unknown (NUMBER). Total amount of quotes for that hotel (Commission not available).
    * booking\_ok\_net (NUMBER). Quantity of bookings for above key and hotel with net price available.
    * booking\_ok\_unknown (NUMBER). Quantity of bookings for above key and hotel with a price where we don't know if any commission is applied.
    * booking\_nok (NUMBER). Quantity of failed bookings for above key and hotel.
    * min\_amount\_booking\_net (NUMBER). Net amount of cheapest booking for that hotel.
    * max\_amount\_booking\_net (NUMBER). Net amount of most expensive booking for that hotel.
    * tot\_amount\_booking\_net (NUMBER). Total net amount of booking for that hotel.
    * min\_amount\_booking\_unknown (NUMBER). Amount of cheapest booking for that hotel (Commission not available). 
    * max\_amount\_booking\_unknown (NUMBER). Amount of most expensive booking for that hotel (Commission not available). 
    * tot\_amount\_booking\_unknown (NUMBER). Total amount of booking for that hotel (Commission not available).

__Preview__ 

| client\_id | provider\_id | cache | search\_date | check\_in | nights | nationality | num\_rooms | adults | children | infants | search\_ok | search\_nok | quote\_ok | quote\_nok | booking\_ok\_net | booking\_ok\_unknow | booking\_nok | min\_amount\_booking\_net | max\_amount\_booking\_net | tot\_amount\_booking\_net | min\_amount\_booking\_unknown | max\_amount\_booking\_unknown | tot\_amount\_booking\_unknown | hotels.code | hotels.search\_ok\_net | hotels.search\_ok\_unknown | hotels.search\_nok | hotels.quote\_ok\_net | hotels.quote\_ok\_unknown | hotels.quote\_nok | hotels.booking\_ok\_net | hotels.booking\_ok\_unknown | hotels.booking\_nok | hotels.min\_amount\_search\_net | hotels.max\_amount\_search\_net | hotels.tot\_amount\_search\_net | hotels.min\_amount\_search\_unknown | hotels.max\_amount\_search\_unknown | hotels.tot\_amount\_search\_unknown | hotels.min\_amount\_quote\_net | hotels.max\_amount\_quote\_net | hotels.tot\_amount\_quote\_net | hotels.min\_amount\_quote\_unknown | hotels.max\_amount\_quote\_unknown | hotels.tot\_amount\_quote\_unknown | hotels.min\_amount\_booking\_net | hotels.max\_amount\_booking\_net | hotels.tot\_amount\_booking\_net | hotels.min\_amount\_booking\_unknown | hotels.max\_amount\_booking\_unknown | hotels.tot\_amount\_booking\_unknown
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| client A | provider X | false | 2019-01-13 00:00:00 UTC | 2019-02-13 00:00:00 UTC | 4 | SE | 1 | 1 | _null_ | _null_ | 13 | 11 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | 641443 | 13 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | | | 551568 | _null_ | 11 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| client B | provider Y | false | 2019-01-13 00:00:00 UTC | 2019-01-18 00:00:00 UTC | 2 | CN | 1 | 2 | _null_ | _null_ | 6 | 1 | 3 | _null_ | 1 | _null_ | _null_ | 398.84 |398.84 |398.84 | _null_ | _null_ | _null_ | 299 | _null_ | _null_ | 1 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | | | 927 | 5 | _null_ |_null_ | 3 |_null_ |_null_ | 1 | _null_ | _null_ | 198.84 | 598.84 | 2393.04 | _null_ | _null_ | _null_ | 198.84 | 598.84 | 1196.52 | _null_ | _null_ | _null_ | 398.84 |398.84 |398.84 | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | | | 203 | _null_ | 1 | _null_ | _null_ | _null_ | _null_ | _null_ |_null_ | _null_ | _null_ | _null_ | _null_ | 2548.26 | 2548.26 | 2548.26 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |

## insights\_agg\_daily\_(buyer|seller)
This table contains info similar to _insights\_daily\_(buyer|seller)_ but with a bigger aggregation. The fields _check\_in_, _adults_, _children_ and _infants_ have dissapeared.

__fields__

* client\_id    (STRING). Client unique ID.
* provider\_id (STRING). Provider unique ID.
* cache	(BOOLEAN). It indicates if the source of request was the client or Speed-X to load info in cache (0=Client, 1=Speed-X).
* search\_date (TIMESTAMP). Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* __booking_window__ (NUMBER). It is an enumeration to describe how far away is the check-in date.
    * __1__ = Last second (0-1 day).
    * __2__ = Last minute (2-3 days).
    * __3__ = About 1 week (4-7 days).
    * __4__ = About 2 weeks (8-14 days).
    * __5__ = About 1 month (15-30 days)
    * __6__ = About 2 months (31-60 days).
    * __7__ = About 3 months (61-90 days).
    * __8__ = More than 3 months (90+ days).
* nights (NUMBER). Length of stay.
* market (STRING). Source market of paxes (ISO 3166-1 alpha-2).
* num\_rooms (NUMBER). Quantity of rooms.
* __pax_type__ (NUMBER). It is an enumeration to describe a combination of paxes (adults + children + infants).
    * __1__ = Solo (Adults = 1, children = 0 and infants = 0).
    * __2__ = Couple (Adults = 2, children = 0 and infants = 0).
    * __3__ = Family (Adults = 2, children + infants > 0).
    * __4__ = Group (Adults > 2).
    * __5__ = Other.
* search\_ok (NUMBER). Quantity of searches that returned any available hotel for above key (search_date, check_in...).
* search\_nok (NUMBER). Quantity of searches that didn't return any available hotels for above key.
* quote\_ok (NUMBER). Quantity of quotes that returned a correct result for above key.
* quote\_nok (NUMBER). Quantity of quotes that returned a wrong result for above key.
* booking\_ok\_net (NUMBER). Quantity of confirmed bookings for above key where we have the net amount in EUR.
* booking\_ok\_unknown (NUMBER). Quantity of confirmed bookings for above key where we have the amount in EUR but it may have applied commissions.
* booking\_nok (NUMBER). Quantity of failed bookings for above key.
* min_amount_booking_net (NUMBER). Net amount of cheapest booking for above key.
* max_amount_booking_net (NUMBER). Net amount of most expensive booking for above key.
* tot_amount_booking_net (NUMBER). Total net amount of confirmed bookings for above key.
* min_amount_booking_net (NUMBER). Amount of cheapest booking for above key when we don't know if any commission is applied.
* max_amount_booking_net (NUMBER). Amount of most expensive booking for above key when we don't know if any commission is applied.
* tot_amount_booking_net (NUMBER). Total amount of confirmed bookings for above key when we don't know if any commission is applied.
* hotels (STRUCT). Repeated field that contains info about hotels for above key.
    * code (STRING). Hotel unique ID.
    * search\_ok\_net (NUMBER). Quantity of searches with available options for above key and hotel with net price available.
    * search\_ok\_unknown (NUMBER). Quantity of searches with available options for above key and hotel with a price where we don't know if any commission is applied.
    * search\_nok (NUMBER). Quantity of searches without available options for above key and hotel.
    * min\_amount\_search\_net (NUMBER). Net amount of cheapest option for that hotel.
    * max\_amount\_search\_net (NUMBER). Net amount of most expensive option for that hotel.
    * tot\_amount\_search\_net (NUMBER). Total net amount of searches for that hotel.
    * min\_amount\_search\_unknown (NUMBER). Amount of cheapest option for that hotel (Commission not available). 
    * max\_amount\_search\_unknown (NUMBER). Amount of most expensive option for that hotel (Commission not available). 
    * tot\_amount\_search\_unknown (NUMBER). Total amount of searches for that hotel (Commission not available).
    * quote\_ok\_net (NUMBER). Quantity of quotes for above key and hotel with net price available.
    * quote\_ok\_unknown (NUMBER). Quantity of quotes for above key and hotel with a price where we don't know if any commission is applied.
    * quote\_nok (NUMBER). Quantity of failed quotes for above key and hotel.
    * min\_amount\_quote\_net (NUMBER). Net amount of cheapest quote for that hotel.
    * max\_amount\_quote\_net (NUMBER). Net amount of most expensive quote for that hotel.
    * tot\_amount\_quote\_net (NUMBER). Total net amount of quotes for that hotel.
    * min\_amount\_quote\_unknown (NUMBER). Amount of cheapest quote for that hotel (Commission not available). 
    * max\_amount\_quote\_unknown (NUMBER). Amount of most expensive quote for that hotel (Commission not available). 
    * tot\_amount\_quote\_unknown (NUMBER). Total amount of quotes for that hotel (Commission not available).
    * booking\_ok\_net (NUMBER). Quantity of bookings for above key and hotel with net price available.
    * booking\_ok\_unknown (NUMBER). Quantity of bookings for above key and hotel with a price where we don't know if any commission is applied.
    * booking\_nok (NUMBER). Quantity of failed bookings for above key and hotel.
    * min\_amount\_booking\_net (NUMBER). Net amount of cheapest booking for that hotel.
    * max\_amount\_booking\_net (NUMBER). Net amount of most expensive booking for that hotel.
    * tot\_amount\_booking\_net (NUMBER). Total net amount of booking for that hotel.
    * min\_amount\_booking\_unknown (NUMBER). Amount of cheapest booking for that hotel (Commission not available). 
    * max\_amount\_booking\_unknown (NUMBER). Amount of most expensive booking for that hotel (Commission not available). 
    * tot\_amount\_booking\_unknown (NUMBER). Total amount of booking for that hotel (Commission not available).

__Preview__ 

| client\_id | provider\_id | cache | search\_date | booking\_window | nights | nationality | num\_rooms | pax\_type | search\_ok | search\_nok | quote\_ok | quote\_nok | booking\_ok\_net | booking\_ok\_unknow | booking\_nok | min\_amount\_booking\_net | max\_amount\_booking\_net | tot\_amount\_booking\_net | min\_amount\_booking\_unknown | max\_amount\_booking\_unknown | tot\_amount\_booking\_unknown | hotels.code | hotels.search\_ok\_net | hotels.search\_ok\_unknown | hotels.search\_nok | hotels.quote\_ok\_net | hotels.quote\_ok\_unknown | hotels.quote\_nok | hotels.booking\_ok\_net | hotels.booking\_ok\_unknown | hotels.booking\_nok | hotels.min\_amount\_search\_net | hotels.max\_amount\_search\_net | hotels.tot\_amount\_search\_net | hotels.min\_amount\_search\_unknown | hotels.max\_amount\_search\_unknown | hotels.tot\_amount\_search\_unknown | hotels.min\_amount\_quote\_net | hotels.max\_amount\_quote\_net | hotels.tot\_amount\_quote\_net | hotels.min\_amount\_quote\_unknown | hotels.max\_amount\_quote\_unknown | hotels.tot\_amount\_quote\_unknown | hotels.min\_amount\_booking\_net | hotels.max\_amount\_booking\_net | hotels.tot\_amount\_booking\_net | hotels.min\_amount\_booking\_unknown | hotels.max\_amount\_booking\_unknown | hotels.tot\_amount\_booking\_unknown
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| client A | provider X | false | 2019-01-13 00:00:00 UTC | 3 | 4 | SE | 1 | 1 | 13 | 11 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | 641443 | 13 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | 551568 | _null_ | 11 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| client B | provider Y | false | 2019-01-13 00:00:00 UTC | 3 | 2 | CN | 1 | 2 | 6 | 1 | 3 | _null_ | 1 | _null_ | _null_ | 398.84 |398.84 |398.84 | _null_ | _null_ | _null_ | 299 | _null_ | _null_ | 1 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | 927 | 5 | _null_ |_null_ | 3 |_null_ |_null_ | 1 | _null_ | _null_ | 198.84 | 598.84 | 2393.04 | _null_ | _null_ | _null_ | 198.84 | 598.84 | 1196.52 | _null_ | _null_ | _null_ | 398.84 |398.84 |398.84 | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | 203 | _null_ | 1 | _null_ | _null_ | _null_ | _null_ | _null_ |_null_ | _null_ | _null_ | _null_ | _null_ | 2548.26 | 2548.26 | 2548.26 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |

## effective\_bookings\_(buyer|seller)
This table contains specific information about bookings done and their current status (Ok or cancelled).

__fields__
* session\_id (STRING). Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* client\_id (STRING). Client unique ID.
* provider\_id (STRING). Provider unique ID.
* booking\_date (TIMESTAMP). Booking date in UTC (format: YYYY-MM-DD hh:mm:ss).
* checkin\_date (TIMESTAMP). Checkin date in UTC (format: YYYY-MM-DD hh:mm:ss).
* amount (NUMBER). Amount of booking in EUR.
* cancel\_date (TIMESTAMP). Cancel date in UTC (format: YYYY-MM-DD hh:mm:ss) if the booking was cancelled else will be empty.
* market (STRING). Source market of paxes (ISO 3166-1 alpha-2).
* market\_name (STRING). Source market's name.
* num\_room (NUMBER). Quantity of rooms booked.
* nights (NUMBER). Length of stay.
* country (STRING). Country of destination (ISO 3166-1 alpha-2).
* zone\_1 (STRING). Main zone of destination.
* zone\_2 (STRING). Secondary zone of destination.
* city (STRING). Last level of destination.
* hotel\_code (STRING). Hotel's code in provider's portfolio.
* hotel\_name (STRING). Hotel's name in provider's portfolio.

**Preview**
| session\_id | client\_id | provider\_id | booking\_date | checkin\_date | amount | cancel\_date | market | market\_name | num\_room | nights | country | zone\_1 | zone\_2 | city | hotel\_code | hotel\_name |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 12345678-1234-1234-1234-123456789012 | client 1 | provider 1 | 2018-03-28 12:21:18 UTC | 2018-05-28 12:00:00 UTC | 244.72 | _null_ | IT | Italy | 1 | 3 | US | Utah | Garfield County | Panguitch | 123 | Hotel Test |

## daily\_portfolio\_seller
This table is used to know which hotels over supplier's portfolio are being queried by the clients. This can be helpful to know which percentage over portfolio is mapped by the client.

__fields__

* client\_id	(STRING). Client unique ID.
* provider\_id (STRING). Provider unique ID.
* hotel (STRING). Hotel unique ID.
* hotel\_name\_portfolio (STRING). Hotel name.
* hotel\_country\_portfolio (STRING). Hotel Country Code (ISO Alpha-2 code)
* status. It is an enumeration to describe the status of the hotel.
    * 0 = Hotel code queried but it doesn't appear in provider's portfolio. It can be due to a wrong mapping in client's system.
    * 1 = Hotel code not queried but it appears in provider's portfolio. It can be due to a mismapping in the client's system.
    * 2 = Hotel code queried and it appears in provider's portfolio.

**Preview**

| client\_id | provider\_id | hotel | hotel\_name\_portfolio | hotel\_country\_portfolio | status |
| :---- | :---- | :---- | :---- | :---- | :---- |
| client A | provider X | 1 | hotel\_1 | ES | 1 | 
| client A | provider X | 2 | hotel\_2 | IT | 2 | 
| client A | provider X | V | _null_ | _null_ | 0 | 
| client B | provider Y | 1 | hotel\_1 | FR | 1 | 

## daily\_stats
This table contains transactional info (response status, response time...) of requests between clients and providers.

__fields__

* st\_date (TIMESTAMP) Search date in UTC (format: YYYY-MM-DD hh:mm:ss)
* client\_id (STRING) Client unique ID
* provider\_id (STRING) Provider unique ID
* speed (BOOLEAN). It indicates if the source of request was the client or Speed-X to load info in cache (0=Client, 1=Speed-X).
* avail\_ok (NUMBER). Quantity of searches with available results.
* avail\_nok_results (NUMBER). Quantity of searches without available results.
* avail\_nok_provider (NUMBER). Quantity of searches with generic error from provider.
* avail\_nok_bad_request (NUMBER). Quantity of searches with error due a wrong request.
* avail\_nok_integration (NUMBER). Quantity of searches with error due a failure in the connector.
* avail\_nok_communication (NUMBER). Quantity of searches with error due a timeout.
* avail\_nok_others (NUMBER). Quantity of searches with errors different to those above.
* avail\_time (NUMBER). Total response time (in milliseconds) for all searches.
* quote\_ok (NUMBER). Quantity of quotes with available results.
* quote\_nok_results (NUMBER). Quantity of quotes without available results.
* quote\_nok_provider (NUMBER). Quantity of quotes with generic error from provider.
* quote\_nok_bad_request. Quantity of quotes with error due to a wrong request.
* quote\_nok_integration. Quantity of quotes with error due a failure in the connector.
* quote\_nok_communication (NUMBER). Quantity of quotes with error due to a timeout.
* quote\_nok_others (NUMBER). Quantity of quotes with errors different to those above.
* quote\_time (NUMBER). Total response time (in milliseconds) for all quotes.
* book\_ok (NUMBER). Quantity of correct bookings.
* book\_nok (NUMBER). Quantity of bookings with an error.
* book\_time (NUMBER. Total response time (in milliseconds) for bookings.
* cancel\_ok (NUMBER). Quantity of correct cancellations.
* cancel\_nok (NUMBER). Quantity of cancellations with an error.
* cancel\_time (NUMBER). Total response time (in milliseconds) for cancellations.
* other\_ok (NUMBER). Quantity of transactions that cannot be included in one of above groups and that didn't get an error.
* other\_nok (NUMBER). Quantity of other transactions with an error.
* other\_time (NUMBER). Total response time (in milliseconds) for other transactions.

**Preview**

| st\_date | client\_id | provider\_id | speed | avail\_ok | avail\_nok_results | avail\_nok_provider | avail\_nok_bad_request | avail\_nok_integration | avail\_nok_communication | avail\_nok_others | avail\_time | quote\_ok | quote\_nok_results | quote\_nok_provider | quote\_nok_bad_request | quote\_nok_integration | quote\_nok_communication | quote\_nok_others | quote\_time | book\_ok | book\_nok | book\_time | cancel\_ok | cancel\_nok | cancel\_time | other\_ok | other\_nok | other\_time  |
| :-------------------------------------- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 2018-03-28 12:00:00 UTC | client 1 | provider 1 | false | 372408 | 159272 | 571 | 30093 | 0 | 40 | 0 | 206883360 | 182 | 0 | 0 | 0 | 0 | 0 | 0 | 38166 | 3 | 0 | 31848 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2018-03-28 12:00:00 UTC | client 1 | provider 2 | false | 50 | 10 | 0 | 0 | 0 | 0 | 0 | 48754 | 419 | 6 | 0 | 0 | 0 | 4 | 0 | 374301 | 5 | 0 | 41257 | 1 | 0 | 6080 | 172 | 0 | 5116 |
| 2018-03-28 12:00:00 UTC | client 2 | provider 1 | false | 548214 | 0 | 577 | 0 | 714 | 0 | 0 | 47457579 | 3719 | 32 | 0 | 0 | 0 | 0 | 0 | 327425 | 18 | 0 | 81757 | 6 | 4 | 31803 | 230 | 0 | 42614 |