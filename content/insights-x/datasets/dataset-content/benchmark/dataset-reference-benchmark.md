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

Data is stored in multiple tables depending on the kind of info that wants to be queried and depending on the level of aggregation:

* Daily   (agregation stored every day)
* Weekly  (aggregation stored in the first monday of every week)
* Monthly (aggregation stored in the first day of the month)

The fields and explanation of tables are based on seller organization. The case of buyer organization is analogous.
Descriptions of each table and their correspondent fields are found below:


## benchmarking\_country\_city\_client\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of buyer, country and city.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_id (STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **city (STRING).** Last level of destination.
* **country\_city\_client (STRING).** Concatenation of fields city, country and client.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, city, country, provider\_id, client\_id).
* **availability\_percentage (FLOAT).** Percentage of unique hotels available for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, city, country, client\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, city, country, provider\_id, client\_id).
* **booking\_percentage (FLOAT).** Percentage of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, client\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, city, country, provider\_id, client\_id).
* **revenue\_percentage (FLOAT).** Percentage of net amount in EUR of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, client\_id).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **revenue\_index (FLOAT).** Min-Max Normalization of the field revenue\_value.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **country\_name (STRING).** Country name of destination (English).
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search_date, city, country, provider_id)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach_date, city, country, provider_id)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, city, country, provider\_id)


__Preview__


| client\_id   | provider\_id | country | city           | country\_city\_client         | search\_date             | availability\_value | availability\_percentage | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentage | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value | revenue\_percentage | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |         
|-------------|-------------|---------|----------------|-----------------------------|-------------------------|--------------------|-------------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|----------------------|----------------------|--------------------- |----------------------|----------------------|
| client 1    | provider 1  | ES      | Palma          | Palma,ES,client 1           | 2019-04-03 00:00:00 UTC | 13                 | 0.2453                  | 0.8889                  | 1                 | 6.625                | 1.0                | 0             | 0.0                | 0.0                | 3            | 1.5             | 0.0           | 0.0           | 0.0                | 0.0                | 3            | 381.9873        | 0.0           | 10             | Spain                | 250                  | 55                   | 120                  |
| client 2    | provider 2  | CL      | Santiago       | Santiago,CL,client 2        | 2019-04-03 00:00:00 UTC | 57                 | 0.2864                  | 0.8571                  | 2                 | 28.4286              | 0.8028             | 1             | 0.1429             | 0.8571             | 2            | 3.5             | 0.1667        | 322.02        | 0.0532             | 0.8571             | 2            | 3024.72         | 0.0562        | 8              | Chile                | 330                  | 33                   | 130                  |                  
| client 3    | provider 3  | AE      | Dubai          | Dubai,AE,client 3           | 2019-04-03 00:00:00 UTC | 97                 | 0.1472                  | 0.8462                  | 2                 | 47.0714              | 0.96               | 0             | 0.0                | 0.0                | 2            | 1.0             | 0.0           | 0.0           | 0.0                | 0.0                | 2            | 1333.491        | 0.0           | 14             | United Arab Emirates | 225                  | 21                   | 122                  |     


## benchmarking\_country\_client\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of buyer and country.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_id (STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **country\_client (STRING).** Concatenation of fields country and client.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, country, provider\_id, client\_id).
* **availability\_percentage (FLOAT).** Percentage of unique hotels available for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, country, client\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, country, provider\_id, client\_id).
* **booking\_percentage (FLOAT).** Percentage of confirmed bookings for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, client\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, country, provider\_id, client\_id).
* **revenue\_percentage (FLOAT).** Percentage of net amount in EUR of confirmed bookings for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, client\_id).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **revenue\_index (FLOAT).** Min-Max Normalization of the field revenue\_value.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **country\_name (STRING).** Country name of destination (English).
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search\_date, country, provider\_id)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach\_date, country, provider\_id)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, country, provider\_id)


__Preview__



| client\_id   | provider\_id | country | country\_client              | search\_date             | availability\_value | availability\_percentage | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentage | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value | revenue\_percentage | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |         
|-------------|-------------|---------|-----------------------------|-------------------------|--------------------|-------------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|----------------------|--------------------- |----------------------|----------------------|----------------------|
| client 1    | provider 1  | ES      | ES,client 1                 | 2019-04-03 00:00:00 UTC | 13                 | 0.2453                  | 0.8889                  | 1                 | 6.625                | 1.0                | 0             | 0.0                | 0.0                | 3            | 1.5             | 0.0           | 0.0           | 0.0                | 0.0                | 3            | 381.9873        | 0.0           | 10             | Spain                | 250                  | 55                   | 120                  |
| client 2    | provider 2  | CL      | CL,client 2                 | 2019-04-03 00:00:00 UTC | 57                 | 0.2864                  | 0.8571                  | 2                 | 28.4286              | 0.8028             | 1             | 0.1429             | 0.8571             | 2            | 3.5             | 0.1667        | 322.02        | 0.0532             | 0.8571             | 2            | 3024.72         | 0.0562        | 8              | Chile                | 330                  | 33                   | 130                  |   
| client 3    | provider 3  | AE      | AE,client 3                 | 2019-04-03 00:00:00 UTC | 97                 | 0.1472                  | 0.8462                  | 2                 | 47.0714              | 0.96               | 0             | 0.0                | 0.0                | 2            | 1.0             | 0.0           | 0.0           | 0.0                | 0.0                | 2            | 1333.491        | 0.0           | 14             | United Arab Emirates | 225                  | 21                   | 122                  |  


## benchmarking\_client\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of buyer.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_id (STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, provider\_id, client\_id).
* **availability\_percentage (FLOAT).** Percentage of unique hotels available for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, provider\_id, client\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, provider\_id, provider\_id, client\_id).
* **booking\_percentage (FLOAT).** Percentage of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_id, client\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, provider\_id, client\_id).
* **revenue\_percentage (FLOAT).** Percentage of net amount in EUR of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_id, client\_id).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **revenue\_index (FLOAT).** Min-Max Normalization of the field revenue\_value.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search\_date, provider\_id, client\_id)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach\_date, provider\_id, client\_id)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, provider\_id,client\_id)

__Preview__


| client\_id  | provider\_id | search\_date            | availability\_value | availability\_percentage | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentage | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value | revenue\_percentage | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | availability\_tgx  | booking\_tgx         | revenue\_tgx         |         
|-------------|--------------|-------------------------|---------------------|-------------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|----------------------|----------------------|----------------------|
| client 1    | provider 1   | 2019-04-03 00:00:00 UTC | 13                  | 0.2453                  | 0.8889                  | 1                 | 6.625                | 1.0                | 0             | 0.0                | 0.0                | 3            | 1.5             | 0.0           | 0.0           | 0.0                | 0.0                | 3            | 381.9873        | 0.0           | 10             |
| client 2    | provider 2   | 2019-04-03 00:00:00 UTC | 57                  | 0.2864                  | 0.8571                  | 2                 | 28.4286              | 0.8028             | 1             | 0.1429             | 0.8571             | 2            | 3.5             | 0.1667        | 322.02        | 0.0532             | 0.8571             | 2            | 3024.72         | 0.0562        | 8              |
| client 3    | provider 3   | 2019-04-03 00:00:00 UTC | 97                  | 0.1472                  | 0.8462                  | 2                 | 47.0714              | 0.96               | 0             | 0.0                | 0.0                | 2            | 1.0             | 0.0           | 0.0           | 0.0                | 0.0                | 2            | 1333.491        | 0.0           | 14             | 225                  | 21                   | 122                  |  



## benchmarking\_country\_city\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of country and city.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **provider\_id (STRING).** Provider unique ID.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **city (STRING).** Last level of destination.
* **country\_city (STRING).** Concatenation of fields city and country.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, city, country, provider\_id).
* **availability\_percentage (FLOAT).** Percentage of unique hotels available for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, city, country, provider\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, city, country , provider\_id)of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, city, country, provider\_id).
* **booking\_percentage (FLOAT).** Percentage of confirmed bookings for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, provider\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, city, country, provider\_id).
* **revenue\_percentage (FLOAT).** Percentage of net amount in EUR of confirmed bookings for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, provider\_id).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_index (FLOAT).** Min-Max Normalization of the field revenue\_value.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **country\_name (STRING).** Country name of destination (English).
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search\_date, city, country, provider\_id)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach\_date, city, country, provider\_id)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, city, country, provider\_id)

__Preview__


| provider\_id | country | city           | country\_city       | search\_date             | availability\_value | availability\_percentage | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentage | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value | revenue\_percentage | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |    
|-------------|---------|----------------|--------------------|-------------------------|--------------------|-------------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|----------------------|----------------------|----------------------|----------------------|
| provider 1  | ES      | Palma          | Palma,ES           | 2019-04-03 00:00:00 UTC | 13                 | 0.2453                  | 0.8889                  | 1                 | 6.625                | 1.0                | 0             | 0.0                | 0.0                | 3            | 1.5             | 0.0           | 0.0           | 0.0                | 0.0                | 3            | 381.9873        | 0.0           | 10             | Spain                |
| provider 2  | CL      | Santiago       | Santiago,CL        | 2019-04-03 00:00:00 UTC | 57                 | 0.2864                  | 0.8571                  | 2                 | 28.4286              | 0.8028             | 1             | 0.1429             | 0.8571             | 2            | 3.5             | 0.1667        | 322.02        | 0.0532             | 0.8571             | 2            | 3024.72         | 0.0562        | 8              | Chile                |
| provider 3  | AE      | Dubai          | Dubai,AE           | 2019-04-03 00:00:00 UTC | 97                 | 0.1472                  | 0.8462                  | 2                 | 47.0714              | 0.96               | 0             | 0.0                | 0.0                | 2            | 1.0             | 0.0           | 0.0           | 0.0                | 0.0                | 2            | 1333.491        | 0.0           | 14             | United Arab Emirates | 225                  | 21                   | 122                  |  



## benchmarking\_country\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of country.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **provider\_id (STRING).** Provider unique ID.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, country, provider\_id).
* **availability\_percentage (FLOAT).** Percentage of unique hotels available for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, country, provider\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, country, provider\_id), provider\_id.
* **booking\_percentage (FLOAT).** Percentage of confirmed bookings for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, provider\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, country, provider\_id), provider\_id.
* **revenue\_percentage (FLOAT).** Percentage of net amount in EUR of confirmed bookings for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, provider\_id).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_index (FLOAT).** Min-Max Normalization of the field revenue\_value.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **country\_name (STRING).** Country name of destination (English).
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search\_date, country, provider\_id)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach\_date, country, provider\_id)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, country, provider\_id)

__Preview__


| provider\_id | country | search\_date             | availability\_value | availability\_percentage | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentage | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value | revenue\_percentage | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | country\_name         |
|-------------|---------|-------------------------|--------------------|-------------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|----------------------|
| provider 1  | ES      | 2019-04-03 00:00:00 UTC | 13                 | 0.2453                  | 0.8889                  | 1                 | 6.625                | 1.0                | 0             | 0.0                | 0.0                | 3            | 1.5             | 0.0           | 0.0           | 0.0                | 0.0                | 3            | 381.9873        | 0.0           | 10             | Spain                |
| provider 2  | CL      | 2019-04-03 00:00:00 UTC | 57                 | 0.2864                  | 0.8571                  | 2                 | 28.4286              | 0.8028             | 1             | 0.1429             | 0.8571             | 2            | 3.5             | 0.1667        | 322.02        | 0.0532             | 0.8571             | 2            | 3024.72         | 0.0562        | 8              | Chile                |
| provider 3  | AE      | 2019-04-03 00:00:00 UTC | 97                 | 0.1472                  | 0.8462                  | 2                 | 47.0714              | 0.96               | 0             | 0.0                | 0.0                | 2            | 1.0             | 0.0           | 0.0           | 0.0                | 0.0                | 2            | 1333.491        | 0.0           | 14             | United Arab Emirates 


## benchmarking\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **provider\_id (STRING).** Provider unique ID.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, provider\_id).
* **availability\_percentage (FLOAT).** Percentage of unique hotels available for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, provider\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, provider\_id).
* **booking\_percentage (FLOAT).** Percentage of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, provider\_id).
* **revenue\_percentage (FLOAT).** Percentage of net amount in EUR of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_id).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_index (FLOAT).** Min-Max Normalization of the field revenue\_value.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.

__Preview__


| provider\_id | search\_date             | availability\_value | availability\_percentage | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentage | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value | revenue\_percentage | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider |
|-------------|-------------------------|--------------------|-------------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|
| provider 1  | 2019-04-03 00:00:00 UTC | 13                 | 0.2453                  | 0.8889                  | 1                 | 6.625                | 1.0                | 0             | 0.0                | 0.0                | 3            | 1.5             | 0.0           | 0.0           | 0.0                | 0.0                | 3            | 381.9873        | 0.0           | 10             |
| provider 2  | 2019-04-03 00:00:00 UTC | 57                 | 0.2864                  | 0.8571                  | 2                 | 28.4286              | 0.8028             | 1             | 0.1429             | 0.8571             | 2            | 3.5             | 0.1667        | 322.02        | 0.0532             | 0.8571             | 2            | 3024.72         | 0.0562        | 8              |
| provider 3  | 2019-04-03 00:00:00 UTC | 97                 | 0.1472                  | 0.8462                  | 2                 | 47.0714              | 0.96               | 0             | 0.0                | 0.0                | 2            | 1.0             | 0.0           | 0.0           | 0.0                | 0.0                | 2            | 1333.491        | 0.0           | 14             |
