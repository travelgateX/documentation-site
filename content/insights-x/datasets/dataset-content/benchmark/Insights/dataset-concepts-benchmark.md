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
How to interpret the information of the differents benchmark tables.
 
### Overview
On this page, you will learn how to interpret the differents fields of benchmark table.



First of all, it's important to know that the benchmark is given by 3 period of time:

* Daily
* Weekly (starts on monday)

* Monthly

and 3 levels of detail: 

* **General** for TravelgateX.
* By **destination**.
* By **seller** if your organization has a buyer profile. By **buyer** if your organization has a seller profile.


These three levels of detail are given by 6 tables, offering in that way all the combinations of detail.

From now, let's focus on a seller organization. The case of buyer organization is analogous.

The most specific level of detail is given per *buyer and city*. In there, the benchmark is calculated considering all suppliers in TravelgateX per each city and buyer, this means that you'll be able to know differents benchmarks for any of your buyers in a specific city. The table that contains that information is `benchmarking\_country\_city\_client\_(daily|weekly|monthly)\_seller`.

The next level of detailed is given per *buyer and country*. In there, the benchmark is calculated considering all suppliers in TravelgateX per each country and buyer, this means that you'll be able to know differents benchmarks for any of your buyers in a specific country. The table that contains that information is `benchmarking\_country\_client\_(daily|weekly|monthly)\_seller`.

The following level detail in given per *buyer*. In there, the benchmark is calculated considering all suppliers in TravelgateX , this means that you'll be able to know differents benchmarks for any of your buyers for the globaltmarket of TravelgateX. The table that contains that information is `benchmarking\_client\_(daily|weekly|monthly)\_seller`.

By the other hand, you can consult your benchmarks just per *city*. In there, the benchmark is calculated considering all suppliers in TravelgateX per each city. The table that contains that information is `benchmarking\_country\_city\_(daily|weekly|monthly)\_seller`.

The next level of detailed is given per *country*. In there, the benchmark is calculated considering all suppliers in TravelgateX per each country. The table that contains that information is `benchmarking\_country\_(daily|weekly|monthly)\_seller`.

Finally, the most general level of detail is given per *provider*. In there, the benchmark is calculated considering all suppliers in TravelgateX. The table that contains that information is `benchmarking\_(daily|weekly|monthly)\_seller`.

As a summary of above, the next table sum up the level of details for the 6 benchmark tables:

|                     |                                                         Buyer Information                                                           |                                                Not Buyer Information                                               |
|:-------------------:|:-----------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|
| **Destination**     |                          benchmarking\_country\_city\_client\_(daily\|weekly\|monthly)\_seller                                      |  benchmarking\_country\_city\_(daily\|weekly\|monthly)\_seller                                                       |
|                     |                                   benchmarking\_country\_client\_(daily\|weekly\|monthly)\_seller                                   | benchmarking\_country\_(daily\|weekly\|monthly)\_seller                                                              |
| **Not Destination** |                                        benchmarking\_client\_(daily\|weekly\|monthly)\_seller                                       |                                benchmarking\_(daily\|weekly\|monthly)\_seller                               |

Next, we'll explain how to interpret the differents fields of the table.

### Interpretation 
The bechmark table analyses the total of uniques searches per hotel returning availability, the total of confirmed bookings  and the total revenue net in euros. These analisys is made by different metrics:

 * The real value:
    + Total of differents hotels returning availabitity: **availabitity\_value**
    + Total of bookings: **booking\_value**
    + Total of revenue: **revenue\_value**
 * The total for TravelgateX:
    + Total of differents hotels returning availabitity:  **availability\_tgx** 
    + Total of bookings: **booking\_tgx**
    + Total of revenue: **revenue\_tgx**
 * What percentage of suppliers are above than me:
    + Percentage of total of providers that are worse than me in availables hotels  **availability\_percentile**
    + Percentage of total of providers that are worse than me in bookings: **booking\_percentile**
    + Percentage of total of providers that are worse than me in revenue net: **revenue\_percentile**
 * Position of ranking:
    + Position of the ranking by availables hotels considering all sellers in TravelgateX: **availability\_rank**
    + Position of the ranking by my bookings considering all sellers in TravelgateX: **booking\_rank**
    + Position of the ranking by revenue net considering all sellers in TravelgateX: **revenue\_rank**
 * Average per seller (competitive set):
    + Average of all the availables hotels per seller: **availability\_compset**
    + Average of all the bookings per seller: **booking\_compset**
    + Average of all the revenue net per seller: **revenue\_compset**
 * The value of the best seller:
    + Returning availables hotels: **availability\_best\_compset**
    + In bookings: **booking\_best\_compset**
    + In revenue net: **revenue\_best\_compset**

### Examples 
Let's consider the following row from the table `benchmarking\_country\_city\_client\_(daily\|weekly\|monthly)\_seller`:


| client\_id | provider\_id | country | zone\_2       | city  | country\_city\_client | search\_date            | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_best\_compset | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_best\_compset | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_best\_compset | total\_provider | country\_name | availability\_tgx | booking\_tgx | revenue\_tgx |
|------------|--------------|---------|---------------|-------|-----------------------|-------------------------|---------------------|--------------------------|--------------------|-----------------------|-----------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|---------------------|---------------|------------------|------------------------|-----------------|---------------|-------------------|--------------|--------------|
| client 1   | provider 1   | ES      | Illes Balears | Palma | ES,Palma,client 1     | 2019-04-03 00:00:00 UTC | 130                 | 0.8889                   | 1                  | 12.625                | 130                         | 3              | 0.7674              | 3             | 1.426            | 15                     | 2104.72        | 0.8163              | 2             | 620.36           | 2513.5                 | 8               | Spain         | 60000             | 20           | 3600         |


Let's see what we can say about the provider 1 at 2019-04-03 00:00:00 UTC in **availability** for the client 1:

* Has returned 130 diferents hotels availables in Palma to client 1 [^note1] .
* The total of differents hotels availables in Palma requested by the client 1 is 60000 [^note1] .
* The provider is above de 89.89% of providers in Palma of client 1.
* This provider is the first returning availability in Palma for client 1. Here, that's a point, because the provider is first in the ranking but the percentile is not 100%. That's why there is another provider retuning the same numbers of hotels availables.
* The average of hotels availables per provider in Palma for client 1 is 12.25.
* The provider in TGX that has obtained the most available hotels has obtained a total of 130 availables hotels, so provider 1 is the best seller for the client 1 or there is not another seller returning more availables hotels.

[^note1]: Taking into account that the hotels between providers do not have to be different.

Let's see what we can say about the provider 1 at 2019-04-03 00:00:00 UTC in **bookings** for the client 1:

* Client 1 has booked 3 hotels in Palma to provider 1.
* The total of bookings in Palma for the client 1 is 20.
* The seller is above the 76.74% providers operating in Palma for the client 1.
* This seller is the third in bookability in Palma for the client 1.
* The average of bookings in Palma per seller for the client 1 is 1.426.
* The provider in TGX that has obtained the most bookings has obtained a total of 15 bookings, so provider 1 is not so far of the first seller in bookability in Palma for the client 1.

Let's see what we can say for the provider 1 at 2019-04-03 00:00:00 UTC in **revenue** for the client 1:

* The bookings with net price in Palma have been sold for 2104.72€ to client 1.
* The total of revenue in Palma for all the bookings with net price  for the client 1 is 3600€.
* The seller is above de 81.63% providers operating in Palma for the client 1.
* This seller is the second in revenue in Palma for the client 1.
* The average of revenue in Palma per seller is 620.36€  for the client 1.
* The provider in TGX that has obtained the most revenue has obtained 2513.5€, so provider 1 is close to the seller with largest revenue in Palma for the client 1.

The benchmarks have been calculated comparing provider 1 with other 8 providers.

Let's consider the following row from the table  `benchmarking\_country\_city\_(daily\|weekly\|monthly)\_seller`:


| provider\_id | country | city            | country\_city   | search\_date            | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_best\_compset | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_best\_compset | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_best\_compset | total\_provider | country\_name | availability\_tgx | booking\_tgx | revenue\_tgx |
|--------------|---------|-----------------|-----------------|-------------------------|---------------------|--------------------------|--------------------|-----------------------|-----------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|---------------------|---------------|------------------|------------------------|-----------------|---------------|-------------------|--------------|--------------|
| provider 1   | CU      | La Habana Vieja | La Habana Vieja | 2019-04-03 00:00:00 UTC | 20                  | 1.0                      | 1                  | 9.3953                | 20                          | 2              | 0.902               | 2             | 1.8889           | 4                      | 676.95         | 0.9412              | 4             | 701.0125         | 1612.7                 | 52              | Cuba          | 60000             | 20           | 3600         |


Let's see what we can say about the provider 1 at 2019-04-03 00:00:00 UTC in **availability**:

* Has returned 20 diferents hotels availables in La Habana Vieja [^note1] . 
* The total the differents hotels availables in La Habana Vieja is  60000 [^note1] .
* The provider is above de 100% of providers in La Habana Vieja (so it's the best).
* This provider is the first returning availability in La Habana Vieja.
* The average of hotels availables per provider in La Habana Vieja is 9.3953.
* The provider in TGX that has obtained the most available hotels has obtained a total of 20 availables hotels, so  is the best seller.


Let's see what we can say about the provider 1 at 2019-04-03 00:00:00 UTC in **bookings**:

* Has have 2 bookings in La Habana Vieja.
* The total of bookings in La Habana Vieja is 20.
* The seller is above the 90.72% providers operating in La Habana Vieja.
* This seller is the second in bookability in La Habana Vieja.
* The average of bookings in La Habana Vieja per seller is 1.8889.
* The provider in TGX that has obtained the most bookings has obtained a total of 4 bookings, so provider 1 has sold the half of bookings than the best seller in bookability in La Habana Vieja.

Let's see what we can say for the provider 1 at 2019-04-03 00:00:00 UTC in **revenue**:

* The bookings with net price in La Habana Vieja have been sold for 676.95€.
* The total of revenue in La Habana Vieja for all the bookings with net price is 3600€.
* The seller is above de 94.12% providers operating in La Habana Vieja.
* This seller is the fourth in revenue in La Habana Vieja.
* The average of revenue in La Habana Vieja per seller is 701.0125€.
* The provider in TGX that has obtained the most revenue has obtained 1612.7€, so provider1 is far to the seller with largest revenue in La Habana Vieja.

The benchmarks have been calculated comparing provider 1 with other 52 providers.
