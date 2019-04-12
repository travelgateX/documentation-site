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
How to interpret the information of the different benchmark tables.
 
### Overview
On this page, you will learn how to interpret the different fields of benchmark table.



First of all, it is important to know that the benchmark is given by 3 periods of time:

* Daily
* Weekly (starts on Monday)
* Monthly

and 3 levels of detail: 

* **General** for TravelgateX.
* By **Destination**.
* By **Seller** if your Organization has a Buyer profile. By **Buyer** if your organization has a Seller profile.


These three levels of detail are displayed in 6 tables, hence offering all the combinations.

From now, we will focus on a seller organization. The case of buyer organization is analogous.

The most specific level of detail is given per *buyer and city*. Here, the benchmark is calculated considering all suppliers in TravelgateX per each city and buyer, this means that you will be able to know different benchmarks for any of your buyers in a specific city. The table that contains that information is `benchmarking\_country\_city\_client\_(daily|weekly|monthly)\_seller`.

The next level of detail is given per *buyer and country*. Here, the benchmark is calculated considering all suppliers in TravelgateX per each country and buyer, this means that you will be able to know different benchmarks for any of your buyers in a specific country. The table that contains that information is `benchmarking\_country\_client\_(daily|weekly|monthly)\_seller`.

The following level of detail in given per *buyer*. Here, the benchmark is calculated considering all suppliers in TravelgateX, this means that you will be able to know different benchmarks for any of your buyers in the globaltmarket of TravelgateX. The table that contains that information is `benchmarking\_client\_(daily|weekly|monthly)\_seller`.

On the other hand, you can check your benchmarks just per *city*. Here, the benchmark is calculated considering all suppliers in TravelgateX per each city. The table that contains that information is `benchmarking\_country\_city\_(daily|weekly|monthly)\_seller`.

The next level of detail is given per *country*. Here, the benchmark is calculated considering all suppliers in TravelgateX per each country. The table that contains that information is `benchmarking\_country\_(daily|weekly|monthly)\_seller`.

Finally, the most general level of detail is given per *provider*. Here, the benchmark is calculated considering all suppliers in TravelgateX. The table that contains that information is `benchmarking\_(daily|weekly|monthly)\_seller`.

As a summary of the information displayed above, the next table sums up the levels of detail for the 6 benchmark tables:

|                     |                                                         Buyer Information                                                         |                                                Not Buyer Information                                               |
|:-------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|
| **Destination**     |                          benchmarking\_country\_city\_client\_(daily\|weekly\|monthly)\_seller                                      |  benchmarking\_country\_city\_(daily\|weekly\|monthly)\_seller                                                       |
|                     |                                   benchmarking\_country\_client\_(daily\|weekly\|monthly)\_seller                                   | benchmarking\_country\_(daily\|weekly\|monthly)\_seller                                                              |
| **Not Destination** |                                        benchmarking\_client\_(daily\|weekly\|monthly)\_seller                                       |                                benchmarking\_(daily\|weekly\|monthly)\_seller                               |

Next, we will explain how to interpret the different fields of the table.

### Interpretation 
The benchmark table analyses the total of unique searches per hotel returning availability, the total of confirmed bookings and the total revenue net in euros. These analysis is made by different metrics:

 * The real value:
    + Total of different hotels returning availability: **availability\_value**
    + Total of bookings: **booking\_value**
    + Total of revenue: **revenue\_value**
 * The percentage over total of providers:
    + Percentage over total of different hotels returning availability:  **availability\_percentage** 
    + Percentage over total of bookings: **booking\_percentage**
    + Percentage over total of revenue: **revenue\_percentage**
 * What percentage of suppliers are above me:
    + Percentage of total of providers that are worse than me in available hotels  **availability\_percentile**
    + Percentage of total of providers that are worse than me in bookings: **booking\_percentile**
    + Percentage of total of providers that are worse than me in revenue net: **revenue\_percentile**
 * Position of ranking:
    + Position of the ranking by available hotels considering all sellers in TravelgateX: **availability\_rank**
    + Position of the ranking by my bookings considering all sellers in TravelgateX: **booking\_rank**
    + Position of the ranking by revenue net considering all sellers in TravelgateX: **revenue\_rank**
 * Average per seller (competitive set):
    + Average of all the available hotels per seller: **availability\_compset**
    + Average of all the bookings per seller: **booking\_compset**
    + Average of all the revenue net per seller: **revenue\_compset**
 * How far or how close I am from the best/worst seller. For values near zero, you are close to the worst seller. For values near one, you are close to the best seller:
    + Returning available hotels: **availability\_index**
    + In bookings: **booking\_index**
    + In revenue net: **revenue\_index**

### Examples 
Let's consider the following row from the table `benchmarking\_country\_city\_client\_(daily\|weekly\|monthly)\_seller`:

| client\_id   | provider\_id | country | city           | country\_city\_client         | search\_date             | availability\_value | availability\_percentage | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentage | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value | revenue\_percentage | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | country\_name         |
|-------------|-------------|---------|----------------|-----------------------------|-------------------------|--------------------|-------------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|----------------------|
| client 1    | provider 1  | ES      | Palma          | Palma,ES,client 1           | 2019-04-03 00:00:00 UTC | 130                 | 0.2453                  | 0.8889                  | 1                 | 12.625                | 1.0                | 3            | 0.1463             | 0.7674       | 3        | 1.426             | 0.8571             | 2104.72            | 0.2643         | 0.8163       | 2       |   620.36   |     0.9126   | 8      |Spain |

Let's see what we can say about the provider 1 at 2019-04-03 00:00:00 UTC in **availability** for client 1:

* It has returned 130 diferents hotels available in Palma to client 1.
* These 130 diferent hotels are the 24.53% of the total from the different hotels available in Palma that has requested client 1 [^note1] . 
* The provider is above the 89.89% of providers in Palma of client 1.
* This provider is the first in returning availability in Palma for client 1. Here, that is a point, because the provider is first in the ranking but the percentile is not 100%. That's why there is another provider retuning the same numbers of hotels available.
* The average of hotels available per provider in Palma for client 1 is 12.25.
* The value of the index is 1, so provider 1 is the best seller for client 1 or there is no another seller returning more available hotels.

[^note1]: Taking into account that the hotels between providers do not have to be different.

Let's see what we can say about provider 1 at 2019-04-03 00:00:00 UTC in **bookings** for client 1:

* Client 1 has booked 3 hotels in Palma to provider 1.
* These 3 bookings are the 14.63% of the total of bookings in Palma for client 1.
* The seller is above the 76.74% of providers operating in Palma for client 1.
* This seller is the third in bookability in Palma for client 1.
* The average of bookings in Palma per seller for client 1 is 1.426.
* The value of the index is 0.8571, so provider 1 is not so far from the first seller in bookability in Palma for client 1.

Let's see what we can say for provider 1 at 2019-04-03 00:00:00 UTC in **revenue** for client 1:

* The bookings with net price in Palma have been sold for 2104.72€ to client 1.
* This revenue is the 26.43% of the total of revenue in Palma for all the bookings with net price for client 1.
* The seller is above the 81.63% of providers operating in Palma for client 1.
* This seller is the second in revenue in Palma for client 1.
* The average of revenue in Palma per seller is 620.36€ for client 1.
* The value of the index is 0.9126, so provider 1 is close to the seller with the largest revenue in Palma for client 1.

The benchmarks have been calculated comparing provider 1 with other 8 providers.

Let's consider the following row from the table  `benchmarking\_country\_city\_(daily\|weekly\|monthly)\_seller`:


| provider_id | country | city            | country_city       | search_date             | availability_value | availability_percentage | availability_percentile | availability_rank | availability_compset | availability_index | booking_value | booking_percentage | booking_percentile | booking_rank | booking_compset | booking_index | revenue_value | revenue_percentage | revenue_percentile | revenue_rank | revenue_compset | revenue_index | total_provider | country_name |
|-------------|---------|-----------------|--------------------|-------------------------|--------------------|-------------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|--------------|
| provider 1  | CU      | La Habana Vieja | La Habana Vieja,CU | 2019-04-03 00:00:00 UTC | 20                 | 0.0495                  | 1.0                     | 1                 | 9.3953               | 1.0                | 2             | 0.1176             | 0.902              | 2            | 1.8889          | 0.5           | 676.95        | 0.1207             | 0.9412             | 4            | 701.0125        | 0.4076        | 52             | Cuba         |


Let's see what we can say about provider 1 at 2019-04-03 00:00:00 UTC in **availability**:

* It has returned 20 diferent hotels available in La Habana Vieja.
* These 20 diferent hotels are the 4.95% of the total for the different hotels available in La Habana Vieja [^note1] . 
* The provider is above the 100% of providers in La Habana Vieja (so it is the best).
* This provider is the first in returning availability in La Habana Vieja.
* The average of hotels available per provider in La Habana Vieja is 9.3953.
* The value of the index is 1, so it is the best seller.


Let's see what we can say about provider 1 at 2019-04-03 00:00:00 UTC in **bookings**:

* It has had 2 bookings in La Habana Vieja.
* These 2 bookings are the 11.76% of the total of bookings in La Habana Vieja.
* The seller is above the 90.72% of providers operating in La Habana Vieja.
* This seller is the second in bookability in La Habana Vieja.
* The average of bookings in La Habana Vieja per seller is 1.8889.
* The value of the index is 0.5, so provider 1 has sold half of the bookings in comparison to the best seller in bookability in La Habana Vieja.

Let's see what we can say about provider 1 at 2019-04-03 00:00:00 UTC in **revenue**:

* The bookings with net price in La Habana Vieja have been sold for 676.95€.
* This revenue is the 12.07% of the total of revenue in La Habana Vieja for all the bookings with net price.
* The seller is above the 94.12% providers operating in La Habana Vieja.
* This seller is the fourth in revenue in La Habana Vieja.
* The average of revenue in La Habana Vieja per seller is 701.0125€.
* The value of the index is 0.4076 so I'm far to the seller with the largest revenue in La Habana Vieja.

The benchmarks have been calculated comparing provider 1 to other 52 providers.
