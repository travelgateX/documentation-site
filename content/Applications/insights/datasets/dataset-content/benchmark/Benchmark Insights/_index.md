+++
title = "Insights Benchmark Dataset"
pagetitle = "Insights Benchmark Dataset"
description = "Understand Insights Benchmark Dataset"
icon = "fa-users" 
weight = 2
alwaysopen = false
+++


On this page, you will learn how the data is stored in Insights Benchmark Dataset and how to interpret the differents table fields.

# Overview

First of all, it's important to know that the benchmark is given by different period of time:

* Daily
* Monthly

and 3 levels of detail: 

* **General** for TravelgateX.
* By **destination**.
* By **seller** if your organization has a buyer profile. By **buyer** if your organization has a seller profile.


These three levels of detail are given by 6 tables, offering in that way all the combinations of detail. This dataset is updated daily.
From now, let's focus on a seller organization. The case of buyer organization is analogous.

The most specific level of detail is given per *buyer and city*. In there, the benchmark is calculated considering all suppliers in TravelgateX per each city and buyer, this means that you'll be able to know differents benchmarks for any of your buyers in a specific city. The table that contains that information is `benchmarking\_country\_city\_client\_(daily|monthly)\_seller`.

The next level of detailed is given per *buyer and country*. In there, the benchmark is calculated considering all suppliers in TravelgateX per each country and buyer, this means that you'll be able to know differents benchmarks for any of your buyers in a specific country. The table that contains that information is `benchmarking\_country\_client\_(daily|monthly)\_seller`.

The following level detail in given per *buyer*. In there, the benchmark is calculated considering all suppliers in TravelgateX , this means that you'll be able to know differents benchmarks for any of your buyers for the globaltmarket of TravelgateX. The table that contains that information is `benchmarking\_client\_(daily|monthly)\_seller`.

By the other hand, you can consult your benchmarks just per *city*. In there, the benchmark is calculated considering all suppliers in TravelgateX per each city. The table that contains that information is `benchmarking\_country\_city\_(daily|monthly)\_seller`.

The next level of detailed is given per *country*. In there, the benchmark is calculated considering all suppliers in TravelgateX per each country. The table that contains that information is `benchmarking\_country\_(daily|monthly)\_seller`.

Finally, the most general level of detail is given per *provider*. In there, the benchmark is calculated considering all suppliers in TravelgateX. The table that contains that information is `benchmarking\_(daily|monthly)\_seller`.

As a summary of above, the next table sum up the level of details for the 6 benchmark tables:

|                     |                                                         Buyer Information                                                           |                                                Not Buyer Information                                               |
|:-------------------:|:-----------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|
| **Destination**     |                          benchmarking\_country\_city\_client\_(daily\|monthly)\_seller                                      |  benchmarking\_country\_city\_(daily\\|monthly)\_seller                                                       |
|                     |                                   benchmarking\_country\_client\_(daily\|monthly)\_seller                                   | benchmarking\_country\_(daily\|monthly)\_seller                                                              |
| **Not Destination** |                                        benchmarking\_client\_(daily\|monthly)\_seller                                       |                                benchmarking\_(daily\|monthly)\_seller                               |

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
Let's consider the following row from the table `benchmarking\_country\_city\_client\_(daily\|monthly)\_seller`:


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

Let's consider the following row from the table  `benchmarking\_country\_city\_(daily\|monthly)\_seller`:


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

---

# Tables

Descriptions of each table and their correspondent fields are found below:


## benchmark\_country\_city\_client\_(daily|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of buyer, country and city.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_owner    (STRING).** Organization's name of the client.
* **provider\_owner (STRING).** Organization's name of the provider.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **zone\_2 (STRING).** Administrative second level zone E.g. Madrid city.
* **city (STRING).** Last level of destination.
* **country\_city\_client (STRING).** Concatenation of fields city, country and client.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, city, country, provider\_owner, client\_owner).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, city, country, client\_owner).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, city, country, client\_owner) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, city, country, client\_owner) of the total of sellers of TravelgateX.
* **availability\_best\_compset  (INTEGER).** Best availability value in the competitive set.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, city, country, provider\_owner, client\_owner).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, client\_owner).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, city, country, client\_owner) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, city, country, client\_owner) of the total of sellers of TravelgateX.
* **booking\_best\_compset  (INTEGER).** Best booking value in the competitive set.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, city, country, provider\_owner, client\_owner).
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, client\_owner).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, city, country, client\_owner) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, city, country, client\_owner) of the total of sellers of TravelgateX.
* **revenue\_best\_compset  (INTEGER).** Best revenue value in the competitive set.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **country\_name (STRING).** Country name of destination (English).
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key above (search_date, city, country, provider_id)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key above (seach_date, city, country, provider_id)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, city, country, provider\_owner)


__Preview__


| client\_owner   | provider\_owner   | country | zone_2                | city           | country\_city\_client       | search\_date            | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_best\_compset | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_best\_compset | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_best\_compset | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |
|-----------------|-------------------|---------|-----------------------|----------------|-----------------------------|-------------------------|---------------------|--------------------------|--------------------|-----------------------|-----------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|----------------------|----------------------|--------------------- |----------------------|
| client 1        | provider 1        | ES      | Illes Balears         | Palma          | Palma,ES,client 1           | 2019-04-03 00:00:00 UTC | 13                  | 0.8889                   | 1                  | 6.625                 | 13                          | 0              | 0.0                 | 3             | 1.5              | 6                      | 0.0            | 0.0                 | 3             | 381.9873         | 150                    | 10             | Spain                | 250                  | 55                   | 120                  |
| client 2        | provider 2        | CL      | Provincia de Santiago | Santiago       | Santiago,CL,client 2        | 2019-04-03 00:00:00 UTC | 57                  | 0.8571                   | 2                  | 28.4286               | 65                          | 1              | 0.8571              | 2             | 3.5              | 2                      | 322.02         | 0.0532              | 2             | 3024.72          | 145498                 | 8              | Chile                | 330                  | 33                   | 130                  |
| client 3        | provider 3        | AE      | Dubai                 | Jaddaf         | Jaddaf,AE,client 3          | 2019-04-03 00:00:00 UTC | 97                  | 0.8462                   | 2                  | 47.0714               | 250                         | 0              | 0.0                 | 2             | 1.0              | 5                      | 0.0            | 0.0                 | 2             | 1333.491         | 125                    | 14             | United Arab Emirates | 225                  | 21                   | 122                  |


## benchmark\_country\_client\_(daily|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of buyer and country.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_owner    (STRING).** Organization's name of the client.
* **provider\_owner (STRING).** Organization's name of the provider.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **country\_client (STRING).** Concatenation of fields country and client.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, country, provider\_owner, client\_owner).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, country, client\_owner).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, country, client\_owner) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, country, client\_owner) of the total of sellers of TravelgateX.
* **availability\_best\_compset  (INTEGER).** Best availability value in the competitive set.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, country, provider\_owner, client\_owner).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, client\_owner).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, country, client\_owner) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, country, client\_owner) of the total of sellers of TravelgateX.
* **booking\_best\_compset  (INTEGER).** Best booking value in the competitive set.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, country, provider\_owner, client\_owner).
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, client\_owner).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, country, client\_owner) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, country, client\_owner) of the total of sellers of TravelgateX.
* **revenue\_best\_compset  (INTEGER).** Best revenue value in the competitive set.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **country\_name (STRING).** Country name of destination (English).
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search\_date, country, provider\_owner)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach\_date, country, provider\_owner)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, country, provider\_owner)


__Preview__


| client\_owner   | provider\_owner   | country | country\_client             | search\_date            | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_best\_compset | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_best\_compset | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_best\_compset | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |
|-----------------|-------------------|---------|-----------------------------|-------------------------|---------------------|--------------------------|--------------------|-----------------------|-----------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|----------------------|----------------------|--------------------- |----------------------|
| client 1        | provider 1        | ES      | ES,client 1                 | 2019-04-03 00:00:00 UTC | 13                  | 0.8889                   | 1                  | 6.625                 | 13                          | 0              | 0.0                 | 3             | 1.5              | 6                      | 0.0            | 0.0                 | 3             | 381.9873         | 150                    | 10             | Spain                | 250                  | 55                   | 120                  |
| client 2        | provider 2        | CL      | CL,client 2                 | 2019-04-03 00:00:00 UTC | 57                  | 0.8571                   | 2                  | 28.4286               | 65                          | 1              | 0.8571              | 2             | 3.5              | 2                      | 322.02         | 0.0532              | 2             | 3024.72          | 145498                 | 8              | Chile                | 330                  | 33                   | 130                  |
| client 3        | provider 3        | AE      | AE,client 3                 | 2019-04-03 00:00:00 UTC | 97                  | 0.8462                   | 2                  | 47.0714               | 250                         | 0              | 0.0                 | 2             | 1.0              | 5                      | 0.0            | 0.0                 | 2             | 1333.491         | 125                    | 14             | United Arab Emirates | 225                  | 21                   | 122                  |




## benchmark\_client\_(daily|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of buyer.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_owner    (STRING).** Organization's name of the client.
* **provider\_owner (STRING).** Organization's name of the provider.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, provider\_owner, client\_owner).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, provider\_owner, client\_owner).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, provider\_owner, client\_owner) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, provider\_owner, client\_owner) of the total of sellers of TravelgateX.
* **availability\_best\_compset  (INTEGER).** Best availability value in the competitive set.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, provider\_owner, provider\_owner, client\_owner).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_owner, client\_owner).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, provider\_owner, client\_owner) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, provider\_owner, client\_owner) of the total of sellers of TravelgateX.
* **booking\_best\_compset  (INTEGER).** Best booking value in the competitive set.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, provider\_owner, client\_owner).
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_owner, client\_owner).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, provider\_owner, client\_owner) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, provider\_owner, client\_owner) of the total of sellers of TravelgateX.
* **revenue\_best\_compset  (INTEGER).** Best revenue value in the competitive set.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search\_date, provider\_owner, client\_owner)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach\_date, provider\_owner, client\_owner)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, provider\_owner,client\_owner)

__Preview__


| client\_owner   | provider\_owner   | search\_date            | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_best\_compset | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_best\_compset | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_best\_compset | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |
|-----------------|-------------------|-------------------------|---------------------|--------------------------|--------------------|-----------------------|-----------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|----------------------|----------------------|--------------------- |----------------------|
| client 1        | provider 1        | 2019-04-03 00:00:00 UTC | 13                  | 0.8889                   | 1                  | 6.625                 | 13                          | 0              | 0.0                 | 3             | 1.5              | 6                      | 0.0            | 0.0                 | 3             | 381.9873         | 150                    | 10             | Spain                | 250                  | 55                   | 120                  |
| client 2        | provider 2        | 2019-04-03 00:00:00 UTC | 57                  | 0.8571                   | 2                  | 28.4286               | 65                          | 1              | 0.8571              | 2             | 3.5              | 2                      | 322.02         | 0.0532              | 2             | 3024.72          | 145498                 | 8              | Chile                | 330                  | 33                   | 130                  |
| client 3        | provider 3        | 2019-04-03 00:00:00 UTC | 97                  | 0.8462                   | 2                  | 47.0714               | 250                         | 0              | 0.0                 | 2             | 1.0              | 5                      | 0.0            | 0.0                 | 2             | 1333.491         | 125                    | 14             | United Arab Emirates | 225                  | 21                   | 122                  |


## benchmark\_country\_city\_(daily|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of country and city.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__Fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **provider\_owner (STRING).** Organization's name of the provider.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **city (STRING).** Last level of destination.
* **country\_city (STRING).** Concatenation of fields city and country.
* **zone\_2 (STRING).** Administrative second level zone E.g. Madrid city.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, city, country, provider\_owner).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, city, country, provider\_owner).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, city, country, provider\_owner) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, city, country , provider\_owner)of the total of sellers of TravelgateX.
* **availability\_best\_compset  (INTEGER).** Best availability value in the competitive set.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, city, country, provider\_owner).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, provider\_owner).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, city, country, provider\_owner) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, city, country, provider\_owner) of the total of sellers of TravelgateX.
* **booking\_best\_compset  (INTEGER).** Best booking value in the competitive set.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, city, country, provider\_owner).
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, provider\_owner).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, city, country, provider\_owner) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, city, country, provider\_owner) of the total of sellers of TravelgateX.
* **revenue\_best\_compset  (INTEGER).** Best revenue value in the competitive set.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **country\_name (STRING).** Country name of destination (English).
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search\_date, city, country, provider\_owner)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach\_date, city, country, provider\_owner)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, city, country, provider\_owner)

__Preview__



| provider\_owner   | country | zone_2                | city           | country\_city       | search\_date            | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_best\_compset | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_best\_compset | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_best\_compset | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |
|-------------------|---------|-----------------------|----------------|---------------------|-------------------------|---------------------|--------------------------|--------------------|-----------------------|-----------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|----------------------|----------------------|--------------------- |----------------------|
| provider 1        | ES      | Illes Balears         | Palma          | Palma,ES            | 2019-04-03 00:00:00 UTC | 13                  | 0.8889                   | 1                  | 6.625                 | 13                          | 0              | 0.0                 | 3             | 1.5              | 6                      | 0.0            | 0.0                 | 3             | 381.9873         | 150                    | 10             | Spain                | 250                  | 55                   | 120                  |
| provider 2        | CL      | Provincia de Santiago | Santiago       | Santiago,CL         | 2019-04-03 00:00:00 UTC | 57                  | 0.8571                   | 2                  | 28.4286               | 65                          | 1              | 0.8571              | 2             | 3.5              | 2                      | 322.02         | 0.0532              | 2             | 3024.72          | 145498                 | 8              | Chile                | 330                  | 33                   | 130                  |
| provider 3        | AE      | Dubai                 | Jaddaf         | Jaddaf,AE           | 2019-04-03 00:00:00 UTC | 97                  | 0.8462                   | 2                  | 47.0714               | 250                         | 0              | 0.0                 | 2             | 1.0              | 5                      | 0.0            | 0.0                 | 2             | 1333.491         | 125                    | 14             | United Arab Emirates | 225                  | 21                   | 122                  |


## benchmark\_country\_(daily|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of country.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **provider\_owner (STRING).** Organization's name of the provider.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, country, provider\_owner).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, country, provider\_owner).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, country, provider\_owner) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, country, provider\_owner) of the total of sellers of TravelgateX.
* **availability\_best\_compset  (INTEGER).** Best availability value in the competitive set.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, country, provider\_owner), provider\_owner.
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, provider\_owner).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, country, provider\_owner) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, country, provider\_owner) of the total of sellers of TravelgateX.
* **booking\_best\_compset  (INTEGER).** Best booking value in the competitive set.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, country, provider\_owner), provider\_owner.
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, provider\_owner).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, country, provider\_owner) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, country, provider\_owner) of the total of sellers of TravelgateX.
* **revenue\_best\_compset  (INTEGER).** Best revenue value in the competitive set.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **country\_name (STRING).** Country name of destination (English).
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search\_date, country, provider\_owner)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach\_date, country, provider\_owner)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, country, provider\_owner)

__Preview__


| provider\_owner   | country | search\_date            | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_best\_compset | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_best\_compset | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_best\_compset | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |
|-------------------|---------|-------------------------|---------------------|--------------------------|--------------------|-----------------------|-----------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|----------------------|----------------------|--------------------- |----------------------|
| provider 1        | ES      | 2019-04-03 00:00:00 UTC | 13                  | 0.8889                   | 1                  | 6.625                 | 13                          | 0              | 0.0                 | 3             | 1.5              | 6                      | 0.0            | 0.0                 | 3             | 381.9873         | 150                    | 10             | Spain                | 250                  | 55                   | 120                  |
| provider 2        | CL      | 2019-04-03 00:00:00 UTC | 57                  | 0.8571                   | 2                  | 28.4286               | 65                          | 1              | 0.8571              | 2             | 3.5              | 2                      | 322.02         | 0.0532              | 2             | 3024.72          | 145498                 | 8              | Chile                | 330                  | 33                   | 130                  |
| provider 3        | AE      | 2019-04-03 00:00:00 UTC | 97                  | 0.8462                   | 2                  | 47.0714               | 250                         | 0              | 0.0                 | 2             | 1.0              | 5                      | 0.0            | 0.0                 | 2             | 1333.491         | 125                    | 14             | United Arab Emirates | 225                  | 21                   | 122                  |


## benchmark\_(daily|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **provider\_owner (STRING).** Organization's name of the provider.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, provider\_owner).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, provider\_owner).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, provider\_owner) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, provider\_owner) of the total of sellers of TravelgateX.
* **availability\_best\_compset  (INTEGER).** Best availability value in the competitive set.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, provider\_owner).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_owner).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, provider\_owner) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, provider\_owner) of the total of sellers of TravelgateX.
* **booking\_best\_compset  (INTEGER).** Best booking value in the competitive set.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, provider\_owner).
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_owner).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, provider\_owner) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, provider\_owner) of the total of sellers of TravelgateX.
* **revenue\_best\_compset  (INTEGER).** Best revenue value in the competitive set.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key above.
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the key above.
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key above.


__Preview__


| provider\_owner   | search\_date            | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_best\_compset | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_best\_compset | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_best\_compset | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |
|-------------------|-------------------------|---------------------|--------------------------|--------------------|-----------------------|-----------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|---------------------|---------------|------------------|------------------------|----------------|----------------------|----------------------|--------------------- |----------------------|
| provider 1        | 2019-04-03 00:00:00 UTC | 13                  | 0.8889                   | 1                  | 6.625                 | 13                          | 0              | 0.0                 | 3             | 1.5              | 6                      | 0.0            | 0.0                 | 3             | 381.9873         | 150                    | 10             | Spain                | 250                  | 55                   | 120                  |
| provider 2        | 2019-04-03 00:00:00 UTC | 57                  | 0.8571                   | 2                  | 28.4286               | 65                          | 1              | 0.8571              | 2             | 3.5              | 2                      | 322.02         | 0.0532              | 2             | 3024.72          | 145498                 | 8              | Chile                | 330                  | 33                   | 130                  |
| provider 3        | 2019-04-03 00:00:00 UTC | 97                  | 0.8462                   | 2                  | 47.0714               | 250                         | 0              | 0.0                 | 2             | 1.0              | 5                      | 0.0            | 0.0                 | 2             | 1333.491         | 125                    | 14             | United Arab Emirates | 225                  | 21                   | 122                  |



## benchmark\_market\_city\_bw\_(daily|monthly)\_(buyer|seller)
This table contains info from searches, quotes, bookings and revenue aggregated per search date, booking window, market, and location (country + Administrative Zone 1 + Administrative Zone 2 + City) by day|month of your organization and all buyers|sellers of TravelgateX. 


__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **__booking_window__ (NUMBER).** It is a division to describe how far away is the check-in date.
    * Last second (0-1 day).
    * Last minute (2-3 days).
    * About 1 week (4-7 days).
    * About 2 weeks (8-14 days).
    * About 1 month (15-30 days)
    * About 2 months (31-60 days).
    * About 3 months (61-90 days).
    * More than 3 months (90+ days).
* **market (STRING).** Source market name. E.g. Spain
* **country (STRING).** Country destination name. E.g. Spain
* **zone_1 (STRING).** Administrative first level zone. E.g. Comunidad de Madrid
* **zone_2 (STRING).** Administrative second level zone E.g. Madrid city
* **city (STRING).** City name. If the city is big enough this level shows the neighbourghood. E.G. Chamberí
* **search\_ok\_net (NUMBER).** Quantity of searches with available options for above key (search\_date, booking\_window, market, country, zone\_1, zone\_2, city) with net price available for your organization.
* **search\_ok\_unknown (NUMBER).** Quantity of searches with available options for above key with a price where we don't know if any commission is applied for your organization.
* **search\_nok (NUMBER).** Quantity of searches without available options for above for your organization.
* **tot\_amount\_search\_net (NUMBER).** Total net amount of searches for above key for your organization.
* **booking\_ok\_net (NUMBER).** Quantity of bookings for above key with net price available for your organization.
* **booking\_ok\_unknown (NUMBER).** Quantity of bookings for above key with a price where we don't know if any commission is applied for your organization.
* **tot\_amount\_booking\_net (NUMBER).** Total net amount of booking for above key for your organization.
* **nights\_rooms\_search\_ok\_net (NUMBER).** It is the product of the length of stay, the number of rooms requested and the field search\_ok\_net.
* **nights\_rooms\_booking\_ok\_net (NUMBER).** It is the product of the length of stay, the number of rooms requested and the field booking\_ok\_net.
* **search\_ok\_net\_tgx (NUMBER).** Quantity of searches with available options for above key (search\_date, booking\_window, market, country, zone\_1, zone\_2, city) with net price available for all buyers|suppliers of TravelgateX.
* **search\_ok\_unknown\_tgx (NUMBER).** Quantity of searches with available options for above key with a price where we don't know if any commission is applied for all buyers|suppliers of TravelgateX.
* **search\_nok\_tgx (NUMBER).** Quantity of searches without available options for above for all buyers|suppliers of TravelgateX.
* **tot\_amount\_search\_net\_tgx (NUMBER).** Total net amount of searches for above key for all buyers|suppliers of TravelgateX.
* **booking\_ok\_net\_tgx (NUMBER).** Quantity of bookings for above key with net price available for all buyers|suppliers of TravelgateX.
* **booking\_ok\_unknown\_tgx (NUMBER).** Quantity of bookings for above key with a price where we don't know if any commission is applied for all buyers|suppliers of TravelgateX.
* **tot\_amount\_booking\_net\_tgx (NUMBER).** Total net amount of booking for above key for all buyers|suppliers of TravelgateX.
* **nights\_rooms\_search\_ok\_net\_tgx (NUMBER).** It is the product of the length of stay, the number of rooms requested and the field search\_ok\_net.
* **nights\_rooms\_booking\_ok\_net\_tgx (NUMBER).** It is the product of the length of stay, the number of rooms requested and the field booking\_ok\_net.


__Preview__ 


| booking\_window              | search\_date             | market  | country | zone\_1           | zone\_2  | city        | search\_ok\_net | search\_ok\_unknown | search\_nok | booking\_ok\_net | booking\_ok\_unknown | tot\_amount\_booking\_net | tot\_amount\_search\_net | nights\_rooms\_search\_ok\_net | nights\_rooms\_booking\_ok\_net | search\_ok\_net\_tgx | search\_ok\_unknown\_tgx | search\_nok\_tgx | booking\_ok\_net\_tgx | booking\_ok\_unknown\_tgx | tot\_amount\_booking\_net\_tgx | tot\_amount\_search\_net\_tgx | nights\_rooms\_search\_ok\_net\_tgx | nights\_rooms\_booking\_ok\_net\_tgx |
|-----------------------------|-------------------------|---------|---------|------------------|---------|-------------|---------------|-------------------|------------|----------------|--------------------|------------------------|-----------------------|----------------------------|-----------------------------|-------------------|-----------------------|----------------|--------------------|------------------------|----------------------------|---------------------------|--------------------------------|---------------------------------|
| 15-30 days (about 1 month)  | 2019-09-02 00:00:00 UTC | Spain   | Spain   | Andalucia        | Almeria | Las Marinas | 0             | 0                 | 0          | 0              | 0                  | 0.0                    | 0.0                   | 0                          | 0                           | 423137            | 11442                 | 1000767        | 24                 |                        | 8408.09                    | 2.4921782818564382E8      | 1842919                        | 109                             |
| 2-3 days (last minute)      | 2019-09-02 00:00:00 UTC | Bahrain | Turkey  | Mugla            | Bodrum  | Guembet     | 14            | 0                 | 54         | 1              | 0                  | 1359.27                | 19616.02432           | 196                        | 14                          | 99                |                       | 1148           | 1                  |                        | 1359.27                    | 129696.2713370888         | 1386                           | 14                              |
| 31-60 days (about 2 months) | 2019-09-02 00:00:00 UTC | Romania | Malta   | Saint Paul's Bay |         | Qawra       | 13            | 0                 | 56         | 1              | 0                  | 523.0786               | 10688.083528          | 91                         | 8                           | 2548              | 30                    | 2818           | 1                  |                        | 523.0786                   | 1786575.898334005         | 11019                          | 8                               |

{{%custom-children%}}
