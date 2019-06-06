+++
title = "Reference"
pagetitle = "Insights Dataset Reference"
description = "Learn about how the information is stored in our insights dataset"
icon = "fa-book"
weight = 2
alwaysopen = false
+++

On this page you will learn how the data is stored in Insights Dataset.

# Tables

Data is stored in multiple tables depending on the kind of info that wants to be queried and depending on the level of aggregation:

* Daily   (agregation stored every day)
* Weekly  (aggregation stored in the first monday of every week)
* Monthly (aggregation stored in the first day of the month)


Descriptions of each table and their correspondent fields are found below:

## insights\_(daily|weekly|monthly)\_(buyer|seller)
This table contains info from searches, quotes, bookings and revenue aggregated per buyer, seller, search date, check in date, nights, market, number of rooms, quantity of paxes and hotel by day|week|month. 

__fields__

* **client\_id    (STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **cache	(BOOLEAN).** It indicates if the source of request was the client or Speed-X to load info in cache (0=Client, 1=Speed-X).
* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **check\_in (TIMESTAMP).** Check in date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **nights (NUMBER).** Length of stay.
* **market (STRING).** Source market of paxes (ISO 3166-1 alpha-2).
* **num\_rooms (NUMBER).** Quantity of rooms.
* **adults (NUMBER).** Quantity of paxes older than 12 years (12 is not included).
* **children (NUMBER).** Quantity of paxes between 2 and 12 (both included).
* **infants (NUMBER).** Quantity of paxes younger than 2 years (2 is not included).
* **search\_ok (NUMBER).** Quantity of searches that returned any available hotel for above key (search_date, check_in...).
* **search\_nok (NUMBER).** Quantity of searches that didn't return any available hotels for above key.
* **quote\_ok (NUMBER).** Quantity of quotes that returned a correct result for above key.
* **quote\_nok (NUMBER).** Quantity of quotes that returned a wrong result for above key.
* **booking\_ok\_net (NUMBER).** Quantity of confirmed bookings for above key where we have the net amount in EUR.
* **booking\_ok\_unknown (NUMBER).** Quantity of confirmed bookings for above key where we have the amount in EUR but it may have applied commissions.
* **booking\_nok (NUMBER).** Quantity of failed bookings for above key.
* **min_amount_booking_net (NUMBER).** Net amount of cheapest booking for above key.
* **max_amount_booking_net (NUMBER).** Net amount of most expensive booking for above key.
* **tot_amount_booking_net (NUMBER).** Total net amount of confirmed bookings for above key.
* **min_amount_booking_unknown (NUMBER).** Amount of cheapest booking for above key when we don't know if any commission is applied.
* **max_amount_booking_unknown (NUMBER).** Amount of most expensive booking for above key when we don't know if any commission is applied.
* **tot_amount_booking_unknown (NUMBER).** Total amount of confirmed bookings for above key when we don't know if any commission is applied.
* **hotels (STRUCT).** Repeated field that contains info about hotels for above key.
    * **code (STRING).** Hotel unique ID.
    * **search\_ok\_net (NUMBER).** Quantity of searches with available options for above key and hotel with net price available.
    * **search\_ok\_unknown (NUMBER).** Quantity of searches with available options for above key and hotel with a price where we don't know if any commission is applied.
    * **search\_nok (NUMBER).** Quantity of searches without available options for above key and hotel.
    * **min\_amount\_search\_net (NUMBER).** Net amount of cheapest option for that hotel.
    * **max\_amount\_search\_net (NUMBER).** Net amount of most expensive option for that hotel.
    * **tot\_amount\_search\_net (NUMBER).** Total net amount of searches for that hotel.
    * **min\_amount\_search\_unknown (NUMBER).** Amount of cheapest option for that hotel (Commission not available).
    * **max\_amount\_search\_unknown (NUMBER).** Amount of most expensive option for that hotel (Commission not available).
    * **tot\_amount\_search\_unknown (NUMBER).** Total amount of searches for that hotel (Commission not available).
    * **quote\_ok\_net (NUMBER).** Quantity of quotes for above key and hotel with net price available.
    * **quote\_ok\_unknown (NUMBER).** Quantity of quotes for above key and hotel with a price where we don't know if any commission is applied.
    * **quote\_nok (NUMBER).** Quantity of failed quotes for above key and hotel.
    * **min\_amount\_quote\_net (NUMBER).** Net amount of cheapest quote for that hotel.
    * **max\_amount\_quote\_net (NUMBER).** Net amount of most expensive quote for that hotel.
    * **tot\_amount\_quote\_net (NUMBER).** Total net amount of quotes for that hotel.
    * **min\_amount\_quote\_unknown (NUMBER).** Amount of cheapest quote for that hotel (Commission not available).
    * **max\_amount\_quote\_unknown (NUMBER).** Amount of most expensive quote for that hotel (Commission not available).
    * **tot\_amount\_quote\_unknown (NUMBER).** Total amount of quotes for that hotel (Commission not available).
    * **booking\_ok\_net (NUMBER).** Quantity of bookings for above key and hotel with net price available.
    * **booking\_ok\_unknown (NUMBER).** Quantity of bookings for above key and hotel with a price where we don't know if any commission is applied.
    * **booking\_nok (NUMBER).** Quantity of failed bookings for above key and hotel.
    * **min\_amount\_booking\_net (NUMBER).** Net amount of cheapest booking for that hotel.
    * **max\_amount\_booking\_net (NUMBER).** Net amount of most expensive booking for that hotel.
    * **tot\_amount\_booking\_net (NUMBER).** Total net amount of booking for that hotel.
    * **min\_amount\_booking\_unknown (NUMBER).** Amount of cheapest booking for that hotel (Commission not available).
    * **max\_amount\_booking\_unknown (NUMBER).** Amount of most expensive booking for that hotel (Commission not available).
    * **tot\_amount\_booking\_unknown (NUMBER).** Total amount of booking for that hotel (Commission not available).

__Preview__ 

| client\_id | provider\_id | cache | search\_date | check\_in | nights | nationality | num\_rooms | adults | children | infants | search\_ok | search\_nok | quote\_ok | quote\_nok | booking\_ok\_net | booking\_ok\_unknow | booking\_nok | min\_amount\_booking\_net | max\_amount\_booking\_net | tot\_amount\_booking\_net | min\_amount\_booking\_unknown | max\_amount\_booking\_unknown | tot\_amount\_booking\_unknown | hotels.code | hotels.search\_ok\_net | hotels.search\_ok\_unknown | hotels.search\_nok | hotels.quote\_ok\_net | hotels.quote\_ok\_unknown | hotels.quote\_nok | hotels.booking\_ok\_net | hotels.booking\_ok\_unknown | hotels.booking\_nok | hotels.min\_amount\_search\_net | hotels.max\_amount\_search\_net | hotels.tot\_amount\_search\_net | hotels.min\_amount\_search\_unknown | hotels.max\_amount\_search\_unknown | hotels.tot\_amount\_search\_unknown | hotels.min\_amount\_quote\_net | hotels.max\_amount\_quote\_net | hotels.tot\_amount\_quote\_net | hotels.min\_amount\_quote\_unknown | hotels.max\_amount\_quote\_unknown | hotels.tot\_amount\_quote\_unknown | hotels.min\_amount\_booking\_net | hotels.max\_amount\_booking\_net | hotels.tot\_amount\_booking\_net | hotels.min\_amount\_booking\_unknown | hotels.max\_amount\_booking\_unknown | hotels.tot\_amount\_booking\_unknown
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| client A | provider X | false | 2019-01-13 00:00:00 UTC | 2019-02-13 00:00:00 UTC | 4 | SE | 1 | 1 | _null_ | _null_ | 13 | 11 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | 641443 | 13 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | | | 551568 | _null_ | 11 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| client B | provider Y | false | 2019-01-13 00:00:00 UTC | 2019-01-18 00:00:00 UTC | 2 | CN | 1 | 2 | _null_ | _null_ | 6 | 1 | 3 | _null_ | 1 | _null_ | _null_ | 398.84 |398.84 |398.84 | _null_ | _null_ | _null_ | 299 | _null_ | _null_ | 1 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | | | 927 | 5 | _null_ |_null_ | 3 |_null_ |_null_ | 1 | _null_ | _null_ | 198.84 | 598.84 | 2393.04 | _null_ | _null_ | _null_ | 198.84 | 598.84 | 1196.52 | _null_ | _null_ | _null_ | 398.84 |398.84 |398.84 | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | | | 203 | _null_ | 1 | _null_ | _null_ | _null_ | _null_ | _null_ |_null_ | _null_ | _null_ | _null_ | _null_ | 2548.26 | 2548.26 | 2548.26 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |

## insights\_agg\_(daily|weekly|monthly)\_(buyer|seller)
This table contains info similar to _insights\_daily\_(buyer|seller)_ but with a bigger aggregation. The fields _check\_in_, _adults_, _children_ and _infants_ have disapeared.

__fields__

* **client\_id    (STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **cache	(BOOLEAN).** It indicates if the source of request was the client or Speed-X to load info in cache (0=Client, 1=Speed-X).
* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **__booking_window__ (NUMBER).** It is an enumeration to describe how far away is the check-in date.
    * __1__ = Last second (0-1 day).
    * __2__ = Last minute (2-3 days).
    * __3__ = About 1 week (4-7 days).
    * __4__ = About 2 weeks (8-14 days).
    * __5__ = About 1 month (15-30 days)
    * __6__ = About 2 months (31-60 days).
    * __7__ = About 3 months (61-90 days).
    * __8__ = More than 3 months (90+ days).
* **nights (NUMBER).** Length of stay.
* **market (STRING).** Source market of paxes (ISO 3166-1 alpha-2).
* **num\_rooms (NUMBER).** Quantity of rooms.
* **__pax_type__ (NUMBER).** It is an enumeration to describe a combination of paxes (adults + children + infants).
    * __1__ = Solo (Adults = 1, children = 0 and infants = 0).
    * __2__ = Couple (Adults = 2, children = 0 and infants = 0).
    * __3__ = Family (Adults = 2, children + infants > 0).
    * __4__ = Group (Adults > 2).
    * __5__ = Other.
* **search\_ok (NUMBER).** Quantity of searches that returned any available hotel for above key (search_date, check_in...).
* **search\_nok (NUMBER).** Quantity of searches that didn't return any available hotels for above key.
* **quote\_ok (NUMBER).** Quantity of quotes that returned a correct result for above key.
* **quote\_nok (NUMBER).** Quantity of quotes that returned a wrong result for above key.
* **booking\_ok\_net (NUMBER).** Quantity of confirmed bookings for above key where we have the net amount in EUR.
* **booking\_ok\_unknown (NUMBER).** Quantity of confirmed bookings for above key where we have the amount in EUR but it may have applied commissions.
* **booking\_nok (NUMBER).** Quantity of failed bookings for above key.
* **min_amount_booking_net (NUMBER).** Net amount of cheapest booking for above key.
* **max_amount_booking_net (NUMBER).** Net amount of most expensive booking for above key.
* **tot_amount_booking_net (NUMBER).** Total net amount of confirmed bookings for above key.
* **min_amount_booking_unknown (NUMBER).** Amount of cheapest booking for above key when we don't know if any commission is applied.
* **max_amount_booking_unknown (NUMBER).** Amount of most expensive booking for above key when we don't know if any commission is applied.
* **tot_amount_booking_unknown (NUMBER).** Total amount of confirmed bookings for above key when we don't know if any commission is applied.
* **hotels (STRUCT).** Repeated field that contains info about hotels for above key.
    * **code (STRING).** Hotel unique ID.
    * **search\_ok\_net (NUMBER).** Quantity of searches with available options for above key and hotel with net price available.
    * **search\_ok\_unknown (NUMBER).** Quantity of searches with available options for above key and hotel with a price where we don't know if any commission is applied.
    * **search\_nok (NUMBER).** Quantity of searches without available options for above key and hotel.
    * **min\_amount\_search\_net (NUMBER).** Net amount of cheapest option for that hotel.
    * **max\_amount\_search\_net (NUMBER).** Net amount of most expensive option for that hotel.
    * **tot\_amount\_search\_net (NUMBER).** Total net amount of searches for that hotel.
    * **min\_amount\_search\_unknown (NUMBER).** Amount of cheapest option for that hotel (Commission not available).
    * **max\_amount\_search\_unknown (NUMBER).** Amount of most expensive option for that hotel (Commission not available).
    * **tot\_amount\_search\_unknown (NUMBER).** Total amount of searches for that hotel (Commission not available).
    * **quote\_ok\_net (NUMBER).** Quantity of quotes for above key and hotel with net price available.
    * **quote\_ok\_unknown (NUMBER).** Quantity of quotes for above key and hotel with a price where we don't know if any commission is applied.
    * **quote\_nok (NUMBER).** Quantity of failed quotes for above key and hotel.
    * **min\_amount\_quote\_net (NUMBER).** Net amount of cheapest quote for that hotel.
    * **max\_amount\_quote\_net (NUMBER).** Net amount of most expensive quote for that hotel.
    * **tot\_amount\_quote\_net (NUMBER).** Total net amount of quotes for that hotel.
    * **min\_amount\_quote\_unknown (NUMBER).** Amount of cheapest quote for that hotel (Commission not available).
    * **max\_amount\_quote\_unknown (NUMBER).** Amount of most expensive quote for that hotel (Commission not available).
    * **tot\_amount\_quote\_unknown (NUMBER).** Total amount of quotes for that hotel (Commission not available).
    * **booking\_ok\_net (NUMBER).** Quantity of bookings for above key and hotel with net price available.
    * **booking\_ok\_unknown (NUMBER).** Quantity of bookings for above key and hotel with a price where we don't know if any commission is applied.
    * **booking\_nok (NUMBER).** Quantity of failed bookings for above key and hotel.
    * **min\_amount\_booking\_net (NUMBER).** Net amount of cheapest booking for that hotel.
    * **max\_amount\_booking\_net (NUMBER).** Net amount of most expensive booking for that hotel.
    * **tot\_amount\_booking\_net (NUMBER).** Total net amount of booking for that hotel.
    * **min\_amount\_booking\_unknown (NUMBER).** Amount of cheapest booking for that hotel (Commission not available).
    * **max\_amount\_booking\_unknown (NUMBER).** Amount of most expensive booking for that hotel (Commission not available).
    * **tot\_amount\_booking\_unknown (NUMBER).** Total amount of booking for that hotel (Commission not available).

__Preview__ 

| client\_id | provider\_id | cache | search\_date | booking\_window | nights | nationality | num\_rooms | pax\_type | search\_ok | search\_nok | quote\_ok | quote\_nok | booking\_ok\_net | booking\_ok\_unknow | booking\_nok | min\_amount\_booking\_net | max\_amount\_booking\_net | tot\_amount\_booking\_net | min\_amount\_booking\_unknown | max\_amount\_booking\_unknown | tot\_amount\_booking\_unknown | hotels.code | hotels.search\_ok\_net | hotels.search\_ok\_unknown | hotels.search\_nok | hotels.quote\_ok\_net | hotels.quote\_ok\_unknown | hotels.quote\_nok | hotels.booking\_ok\_net | hotels.booking\_ok\_unknown | hotels.booking\_nok | hotels.min\_amount\_search\_net | hotels.max\_amount\_search\_net | hotels.tot\_amount\_search\_net | hotels.min\_amount\_search\_unknown | hotels.max\_amount\_search\_unknown | hotels.tot\_amount\_search\_unknown | hotels.min\_amount\_quote\_net | hotels.max\_amount\_quote\_net | hotels.tot\_amount\_quote\_net | hotels.min\_amount\_quote\_unknown | hotels.max\_amount\_quote\_unknown | hotels.tot\_amount\_quote\_unknown | hotels.min\_amount\_booking\_net | hotels.max\_amount\_booking\_net | hotels.tot\_amount\_booking\_net | hotels.min\_amount\_booking\_unknown | hotels.max\_amount\_booking\_unknown | hotels.tot\_amount\_booking\_unknown |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| client A | provider X | false | 2019-01-13 00:00:00 UTC | 3 | 4 | SE | 1 | 1 | 13 | 11 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | 641443 | 13 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | 551568 | _null_ | 11 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| client B | provider Y | false | 2019-01-13 00:00:00 UTC | 3 | 2 | CN | 1 | 2 | 6 | 1 | 3 | _null_ | 1 | _null_ | _null_ | 398.84 |398.84 |398.84 | _null_ | _null_ | _null_ | 299 | _null_ | _null_ | 1 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | 927 | 5 | _null_ |_null_ | 3 |_null_ |_null_ | 1 | _null_ | _null_ | 198.84 | 598.84 | 2393.04 | _null_ | _null_ | _null_ | 198.84 | 598.84 | 1196.52 | _null_ | _null_ | _null_ | 398.84 |398.84 |398.84 | _null_ | _null_ | _null_ |
| | | | | | | | | | | | | | | | | | | | | | | 203 | _null_ | 1 | _null_ | _null_ | _null_ | _null_ | _null_ |_null_ | _null_ | _null_ | _null_ | _null_ | 2548.26 | 2548.26 | 2548.26 | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ | _null_ |

## effective\_bookings\_(buyer|seller)
This table contains specific information about bookings done and their current status (Ok or cancelled).

__fields__

* **session\_id (STRING).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_id (STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **username (STRING).* User ID in provider's system.
* **booking\_date (TIMESTAMP).** Booking date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **checkin\_date (TIMESTAMP).** Checkin date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **amount (NUMBER).** Amount of booking in EUR.
* **commission (NUMBER).**  Possible values for the commission:
	* -1 = not specified
	* 0 = net price
	* X = Percentatge of the commission applied to the amount.
* **cancel\_date (TIMESTAMP).** Cancel date in UTC (format: YYYY-MM-DD hh:mm:ss) if the booking was cancelled else will be empty.
* **market (STRING).** Source market of paxes (ISO 3166-1 alpha-2).
* **market\_name (STRING).** Source market's name.
* **num\_room (NUMBER).** Quantity of rooms booked.
* **nights (NUMBER).** Length of stay.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **zone\_1 (STRING).** Main zone of destination.
* **zone\_2 (STRING).** Secondary zone of destination.
* **city (STRING).** Last level of destination.
* **hotel\_code (STRING).** Hotel's code in provider's portfolio.
* **hotel\_name (STRING).** Hotel's name in provider's portfolio.
* **adults (NUMBER).** Quantity of paxes older than 12 years (12 is not included).
* **children (NUMBER).** Quantity of paxes between 2 and 12 (both included).
* **infants (NUMBER).** Quantity of paxes younger than 2 years (2 is not included).


__Preview__

| session\_id | client\_id | provider\_id | booking\_date | checkin\_date | amount | cancel\_date | market | market\_name | num\_room | nights | country | zone\_1 | zone\_2 | city | hotel\_code | hotel\_name |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 123456789012 | client 1 | provider 1 | 2018-03-28 12:21:18 UTC | 2018-05-28 12:00:00 UTC | 244.72 | _null_ | IT | Italy | 1 | 3 | US | Utah | Garfield County | Panguitch | 123 | Hotel Test |

## daily\_portfolio\_seller
This table is used to know which hotels over supplier's portfolio are being queried by the clients. This can be helpful to know which percentage over portfolio is mapped by the client.

__fields__

* **client\_id	(STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **username (STRING).* User ID in provider's system.
* **hotel (STRING).** Hotel unique ID.
* **hotel\_name\_portfolio (STRING).** Hotel name.
* **country (STRING).** Hotel Country Code (ISO Alpha-2 code).
* **zone\_1 (STRING).** Main zone of destination.
* **zone\_2 (STRING).** Secondary zone of destination.
* **city (STRING).** Last level of destination.
* **status**. It is an enumeration to describe the status of the hotel.
    * 0 = Hotel code queried but it doesn't appear in provider's portfolio. It can be due to a wrong mapping in client's system.
    * 1 = Hotel code not queried but it appears in provider's portfolio. It can be due to a mismapping in the client's system.
    * 2 = Hotel code queried and it appears in provider's portfolio.
	* 3 = Hotel code queried but don't appears in TravelgateX system. It can be due to a out-of-date provider hotels information.
* **search\_ok (NUMBER).** Quantity of searches that returned any available hotel for above key (search_date, check_in, client\_id, provider\_id, username, hotel, country, zone\_1,zone\_2, city and status).
* **search\_nok (NUMBER).** Quantity of searches that didn't return any available hotels for above key.
* **quote\_ok (NUMBER).** Quantity of quotes that returned a correct result for above key.
* **quote\_nok (NUMBER).** Quantity of quotes that returned a wrong result for above key.
* **booking\_ok (NUMBER).** Quantity of confirmed bookings.
* **booking\_nok (NUMBER).** Quantity of failed bookings for above key.	
* **cancel\_ok (NUMBER).** Quantity of confirmed cancellations.
* **cancel\_nok (NUMBER).** Quantity of failed cancellations for above key.	
* **revenue_net (NUMBER).** Total net amount of confirmed bookings for above key.
* **revenue_unknown (NUMBER).** Total amount of confirmed bookings for above key when we don't know if any commission is applied.
	
	
__Preview__

| client_id | provider_id | username   | hotel_name           | country | zone_1             | zone_2  | city                 | hotel_code | status | search_ok | search_nok | quote_ok | quote_nok | booking_ok | booking_nok | cancel_ok | cancel_nok | revenue_net | revenue_unknown |
|-----------|-------------|------------|----------------------|---------|--------------------|---------|----------------------|------------|--------|-----------|------------|----------|-----------|------------|-------------|-----------|------------|-------------|-----------------|
| Client 1  | Provider 1  | 1464534881 | Residence Bologna    | CZ      | Hlavni mesto Praha | Praha 1 | Stare Mesto          | 336629     | 2      | 9805      | 3896       | 10       |           | 1          |             | 1         |            | 354.1       |                 |
| Client 2  | Provider 2  | 132965     | Hotel Guaparo Suites | VE      | Estado Carabobo    |         | Urbanizacion Guaparo | 814595     | 1      |           |            |          |           |            |             |           |            |             |                 |
| Client 3  | Provider 3  | 14644046   |                      |         |                    |         |                      | 2363330    | 0      |           | 4          |          |           |            |             |           |            |             |                 |