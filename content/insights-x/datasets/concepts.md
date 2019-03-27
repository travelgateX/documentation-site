+++
title = "Concepts"
pagetitle = "Concepts"
description = "Learn about how to interpret the information in our datasets"
icon = "fa-question-circle"
weight = 6
alwaysopen = false
+++




On this page you will learn how to interpret the information in our datasets.

## Benchmark
How to interpret the information of the table _daily\_benchmarking\_seller_.
 
### Overview
On this page, you will learn how to interpret the differents fields of benchmark table.

First of all, it's important to know that the table is organised in three levels of detail:
 * City
 * Country 
 * Provider

The most specific level of detail is given per city. In there, the benchmark is calculated considering all suppliers in TravelgateX per each city.

The next level of detailed is given per country. In there, the benchmark is calculated considering all suppliers in TravelgateX per each country. This information is supplied in the fields that ends by "\_country". 

Finally, the most general level of detail is given per provider. In there, the benchmark is calculated considering all suppliers in TravelgateX. This information is supplied in the fields that ends by "\_provider".

Let's see a subset of an example table:

| provider_id | country | city              | city_country          | search_date             | search_ok_net | search_ok_net_country | search_ok_net_provider | 
|-------------|---------|-------------------|-----------------------|-------------------------|---------------|-----------------------|------------------------|
| provider 1         | ES      | Palma | Palma,ES | 2019-03-19 00:00:00 UTC | 5 | 20 | 30 |
| provider 1         | ES      | Madrid     | Madrid,ES     | 2019-03-19 00:00:00 UTC | 15 | 20 |30
| provider 1         | PT    | Sintra    | Sintra,PT    | 2019-03-19 00:00:00:00 UTC |  10 | 10 |30

It means that 'provider_1' has returned 5 differents hotels with availabilty in Palma, and 15 differents hotels in Madrid. Accordingly, 'provider_1' has returned 20 differents hotels with availability in country ES  and 10 differents hotels with availability in country PT. In consequence this provider has returned 30 differents hotels with availability, for the date 2019-03-19 00:00:00 UTC.

Next, we'll explain how to interpret the differents fields of the table.  Taking into account that the fields are repeated by each level of detail, we'll focus  on the fields by city level.


### Interpretation 
The bechmark table analyses the total of uniques searches per hotel returning availability, the total of confirmed bookings  and the total revenue net in euros. These analisys is made by different metrics:

 * The real value:
    + Total of differents hotels returning availabitity: **search_ok_net**
    + Total of bookings: **booking_ok_net**
    + Total of revenue: **tot_amount_booking_net**
 * The percentage over total of providers:
     + Percentatge over total of differents hotels returning availabitity: **perc_search_ok_net**
    + Percentatge over total of bookings: **perc_booking_ok_net**
    + Percentatge over total of revenue: **perc_tot_amount_booking_net**
 * What percentage of suppliers are above than me:
    + Percentage of total of providers that are worse than me in availables hotels  **percentile_search_ok_net**
    + Percentage of total of providers that are worse than me in bookings: **percentile_booking_ok_net**
    + Percentage of total of providers that are worse than me in revenue net: **percentile_tot_amount_booking_net**
 * Position of ranking:
    + Position of the ranking by availables hotels considering all sellers in TravelgateX: **rank_search_ok_net**
    + Position of the ranking by my bookings considering all sellers in TravelgateX: **rank_booking_ok_net**
    + Position of the ranking by revenue net considering all sellers in TravelgateX: **rank_tot_amount_booking_net**
 * Average per seller (competitive set):
    + Average of all the availables hotels per seller: **avg_search_ok_net**
    + Average of all the bookings per seller: **avg_booking_ok_net**
    + Average of all the revenue net per seller: **avg_tot_amount_booking_net**
 * How far or how close I'm from the best/worst seller. For values near zero, you're close to the worst seller. For values near one, you're close to the best seller:
    + Returning availables hotels: **index_norm_search_ok_net**
    + In bookings: **index_norm_booking_ok_net**
    + In revenue net: **index_norm_tot_amount_booking_net**

Let's consider the following row:

| provider_id | country | city              | city_country          | search_date             | search_ok_net | perc_search_ok_net  | percentile_search_ok_net | rank_search_ok_net | avg_search_ok_net  | index_norm_search_ok_net | booking_ok_net | perc_booking_ok_net | percentile_booking_ok_net | rank_booking_ok_net | avg_booking_ok_net | index_norm_booking_ok_net | tot_amount_booking_net | perc_tot_amount_booking_net | percentile_tot_amount_booking_net | rank_tot_amount_booking_net | avg_tot_amount_booking_net | index_norm_tot_amount_booking_net|
|-------------|---------|-------------------|-----------------------|-------------------------|---------------|---------------------|--------------------------|--------------------|--------------------|--------------------------|----------------|---------------------|---------------------------|---------------------|--------------------|---------------------------|------------------------|-----------------------------|-----------------------------------|-----------------------------|----------------------------|--------------------------------|
| provider 1         | ES   | Palma | Palma, ES | 2019-03-19 00:00:00 UTC | 1000            | 0.01  | 96.3                     | 3.0                | 27.58   | 0.9        | 10              | 0.1                 | 100                       | 1                 | 2  | 100                       | 2000                      | 0.3                         | 98.3                               | 2.0                        | 150           | 0.98                            |

Let's see what we can say for the 'provider_1' at 2019-03-19 00:00:00 UTC in **availability**:
* Has returned 1000 diferents hotels availables in Palma.
* This 1000 diferents hotels are the 1% of the total the differents hotels availables in Palma [^note1]. 
* The provider is above de 96.3% providers operating in Palma.
* This provider is the third returning availability in Palma.
* The average of hotels availables per provider in Palma is 27.58.
* The value of my index is 0.9, so I'm quite near from the best seller.

[^note1]: Taking into account that the hotels between providers do not have to be different.

Let's see what we can say for the 'provider_1' at 2019-03-19 00:00:00 UTC in **bookings**:
* Has had 10 bookings Palma.
* This 10 bookings are the 10% of the total of bookings in Palma.
* The seller is above de 100% providers operating in Palma (so it's the best).
* This seller is the first in bookability in Palma.
* The average of bookings in Palma per seller is 2.
* The value of my index is 100, so I'm the best seller in bookability in Palma.

Let's see what we can say for the 'provider_1' at 2019-03-19 00:00:00 UTC in **revenue**:
* The bookings with net price in Palma have been sold for 2000€.
* This revenue is the 30% of the total of revenue in Palma for all the bookings with net price.
* The seller is above de 98.3% providers operating in Palma.
* This seller is the second in revenue in Palma.
* The average of revenue in Palma per seller is 150€.
* The value of my index is 0.9, so I'm close to the seller with largest revenue in Palma.