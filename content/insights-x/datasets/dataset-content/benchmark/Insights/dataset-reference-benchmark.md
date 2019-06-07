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


## benchmark\_country\_city\_client\_(daily|weekly|monthly)\_seller
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
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, city, country, client\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, city, country, provider\_id, client\_id).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, client\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, city, country, provider\_id, client\_id).
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, client\_id).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, city, country, client\_id) of the total of sellers of TravelgateX.
* **revenue\_index (FLOAT).** Min-Max Normalization of the field revenue\_value.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **country\_name (STRING).** Country name of destination (English).
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key above (search_date, city, country, provider_id)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key above (seach_date, city, country, provider_id)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, city, country, provider\_id)


__Preview__


| client\_id   | provider\_id | country | city           | country\_city\_client         | search\_date             | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |         
|-------------|-------------|---------|----------------|-----------------------------|-------------------------|--------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------|-----------------|---------------|----------------|----------------------|----------------------|--------------------- |----------------------|----------------------|
| client 1    | provider 1  | ES      | Palma          | Palma,ES,client 1           | 2019-04-03 00:00:00 UTC | 13                 | 0.8889                  | 1                 | 6.625                | 1.0                | 0             | 0.0                | 3            | 1.5             | 0.0           | 0.0           | 0.0                | 3            | 381.9873        | 0.0           | 10             | Spain                | 250                  | 55                   | 120                  |
| client 2    | provider 2  | CL      | Santiago       | Santiago,CL,client 2        | 2019-04-03 00:00:00 UTC | 57                 | 0.8571                  | 2                 | 28.4286              | 0.8028             | 1             | 0.8571             | 2            | 3.5             | 0.1667        | 322.02        | 0.0532             | 2            | 3024.72         | 0.0562        | 8              | Chile                | 330                  | 33                   | 130                  |                  
| client 3    | provider 3  | AE      | Dubai          | Dubai,AE,client 3           | 2019-04-03 00:00:00 UTC | 97                 | 0.8462                  | 2                 | 47.0714              | 0.96               | 0             | 0.0                | 2            | 1.0             | 0.0           | 0.0           | 0.0                | 2            | 1333.491        | 0.0           | 14             | United Arab Emirates | 225                  | 21                   | 122                  |     


## benchmark\_country\_client\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of buyer and country.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_id (STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **country\_client (STRING).** Concatenation of fields country and client.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, country, provider\_id, client\_id).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, country, client\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, country, provider\_id, client\_id).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, client\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, country, client\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, country, provider\_id, client\_id).
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



| client\_id   | provider\_id | country | country\_client              | search\_date             | availability\_value  | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | country\_name         | availability\_tgx  | booking\_tgx         | revenue\_tgx         |         
|-------------|-------------|---------|-----------------------------|-------------------------|--------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------|-----------------|---------------|---------------|--------------------|--------------|-----------------|---------------|----------------|----------------------|--------------------- |----------------------|----------------------|----------------------|
| client 1    | provider 1  | ES      | ES,client 1                 | 2019-04-03 00:00:00 UTC | 13                 | 0.8889                  | 1                 | 6.625                | 1.0                | 0             | 0.0                | 3            | 1.5             | 0.0           | 0.0           | 0.0                | 3            | 381.9873        | 0.0           | 10             | Spain                | 250                  | 55                   | 120                  |
| client 2    | provider 2  | CL      | CL,client 2                 | 2019-04-03 00:00:00 UTC | 57                 | 0.8571                  | 2                 | 28.4286              | 0.8028             | 1             | 0.8571             | 2            | 3.5             | 0.1667        | 322.02        | 0.8571             | 2            | 3024.72         | 0.0562        | 8              | Chile                | 330                  | 33                   | 130                  |   
| client 3    | provider 3  | AE      | AE,client 3                 | 2019-04-03 00:00:00 UTC | 97                 | 0.8462                  | 2                 | 47.0714              | 0.96               | 0             | 0.0                | 2            | 1.0             | 0.0           | 0.0           | 0.0                | 2            | 1333.491        | 0.0           | 14             | United Arab Emirates | 225                  | 21                   | 122                  |  


## benchmark\_client\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of buyer.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **client\_id (STRING).** Client unique ID.
* **provider\_id (STRING).** Provider unique ID.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, provider\_id, client\_id).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, provider\_id, client\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, provider\_id, provider\_id, client\_id).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_id, client\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, provider\_id, client\_id).
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_id, client\_id).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, provider\_id, client\_id) of the total of sellers of TravelgateX.
* **revenue\_index (FLOAT).** Min-Max Normalization of the field revenue\_value.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key (search\_date, provider\_id, client\_id)
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the Key (seach\_date, provider\_id, client\_id)
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key (search\_date, provider\_id,client\_id)

__Preview__


| client\_id    | provider\_id | search\_date             | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value      | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | availability\_tgx | booking\_tgx | revenue\_tgx |
|--------------|-------------|-------------------------|--------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------|-----------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|------------------|-------------|-------------|
| client 1     | provider 1  | 2019-04-03 00:00:00 UTC | 281                | 0.8696                  | 4                 | 303.5                | 0.061              | 45            | 0.9565             | 2            | 20.0            | 0.2679        | 28569.807281150093 | 0.9565             | 2            | 15114.587       | 0.2831        | 24             | 7284             | 300         | 166260      |
| client 2     | provider 2  | 2019-04-03 00:00:00 UTC | 3373               | 0.381                   | 14                | 20290.8571           | 0.0299             | 23            | 0.619              | 8            | 28.5263         | 0.1597        | 11466.54830430146  | 0.7619             | 6            | 14475.2945      | 0.1503        | 22             | 426108           | 542         | 217129      |
| client 3     | provider 3  | 2019-04-03 00:00:00 UTC | 1729               | 0.4375                  | 10                | 8388.8125            | 0.0199             | 14            | 0.5625             | 8            | 17.9375         | 0.2642        | 8989.779999999999  | 0.6875             | 6            | 11616.4348      | 0.2632        | 17             | 134221           | 287         | 151014      |


## benchmark\_country\_city\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of country and city.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **provider\_id (STRING).** Provider unique ID.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **city (STRING).** Last level of destination.
* **country\_city (STRING).** Concatenation of fields city and country.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, city, country, provider\_id).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, city, country, provider\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, city, country , provider\_id)of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, city, country, provider\_id).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, city, country, provider\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, city, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, city, country, provider\_id).
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


| provider\_id | country | city   | country\_city | search\_date             | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value      | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | country\_name   | availability\_tgx | booking\_tgx | revenue\_tgx |
|-------------|---------|--------|--------------|-------------------------|--------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------|-----------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|----------------|------------------|-------------|-------------|
| provider 1  | GB      | London | London,GB    | 2019-04-03 00:00:00 UTC | 67                 | 0.9706                  | 2                 | 28.4921              | 0.971              | 31            | 1.0                | 1            | 4.6667          | 1.0           | 13454.129570238987 | 1.0                | 1            | 3278.689        | 1.0           | 69             | United Kingdom | 1795             | 70          | 29508       |
| provider 2  | CZ      | Prague | Prague,CZ    | 2019-04-03 00:00:00 UTC | 108                | 0.8                     | 13                | 63.1304              | 0.6034             | 11            | 0.9867             | 1            | 3.0476          | 1.0           | 3157.33            | 0.9867             | 2            | 1096.9739       | 0.921         | 76             | Czech Republic | 4356             | 64          | 20843       |
| provider 3  | CZ      | Prague | Prague,CZ    | 2019-04-03 00:00:00 UTC | 179                | 0.9733                  | 1                 | 63.1304              | 1.0                | 11            | 0.9867             | 1            | 3.0476          | 1.0           | 3428.2791823675784 | 1.0                | 1            | 1096.9739       | 1.0           | 76             | Czech Republic | 4356             | 64          | 20843       |


## benchmark\_country\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace at specific level of country.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **provider\_id (STRING).** Provider unique ID.
* **country (STRING).** Country of destination (ISO 3166-1 alpha-2).
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, country, provider\_id).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, country, provider\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, country, provider\_id), provider\_id.
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, country, provider\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, country, provider\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, country, provider\_id), provider\_id.
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


| provider\_id | country | search\_date             | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value      | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | country\_name | availability\_tgx | booking\_tgx | revenue\_tgx |
|-------------|---------|-------------------------|--------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------|-----------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|--------------|------------------|-------------|-------------|
|  provider 1 | CU      | 2019-04-03 00:00:00 UTC | 111                | 0.629                   | 23                | 98.1731              | 0.3502             | 11            | 0.9839             | 2            | 6.0476          | 0.1774        | 15634.101013693758 | 0.9839             | 2            | 4431.1882       | 0.3929        | 63             | Cuba         | 5105             | 127         | 84193       |
|  provider 2 | CN      | 2019-04-03 00:00:00 UTC | 3302               | 0.9688                  | 3                 | 744.4259             | 0.9618             | 12            | 0.9844             | 2            | 4.8             | 0.5           | 5080.809816230813  | 0.9688             | 3            | 2572.4229       | 0.4133        | 65             | China        | 40199            | 72          | 28297       |
|  provider 3 | CN      | 2019-04-03 00:00:00 UTC | 1639               | 0.8594                  | 10                | 744.4259             | 0.4774             | 11            | 0.9688             | 3            | 4.8             | 0.4583        | 5247.645802952161  | 0.9844             | 2            | 2572.4229       | 0.4269        | 65             | China        | 40199            | 72          | 28297       |


## benchmark\_(daily|weekly|monthly)\_seller
This table contains different benchmarks of your organization for the TravelgateX marketplace.
The benchmarks are based on the total of differents and availables hotels that have been requested, the total of bookings and the total amount of net revenue of the bookings.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss).
* **provider\_id (STRING).** Provider unique ID.
* **availability\_value (NUMBER).** Quantity of unique hotels available for key (search\_date, provider\_id).
* **availability\_percentile (FLOAT).** Value of percentile of unique hotels availables of all the sellers of TravelgateX for key (search\_date, provider\_id).
* **availability\_rank (NUMBER).** Position of the ranking of unique hotels availables for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **availability\_compset (FLOAT).** Average of unique hotels available for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **availability\_index (FLOAT).** Min-Max Normalization of the field availability\_value.
* **booking\_value (NUMBER).** Quantity of confirmed bookings for key (search\_date, provider\_id).
* **booking\_percentile (FLOAT).** Value of percentile of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_id).
* **booking\_rank (NUMBER).** Position of the ranking of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **booking\_compset (FLOAT).** Average of quantity of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **booking\_index (FLOAT).** Min-Max Normalization of the field booking\_value.
* **revenue\_value (FLOAT).** Total net amount in EUR of confirmed bookings for  key (search\_date, provider\_id).
* **revenue\_percentile (FLOAT).** Value of percentile of net amount in EUR of confirmed bookings of all the sellers of TravelgateX  for key (search\_date, provider\_id).
* **revenue\_rank (NUMBER).** Position of the ranking of net amount in EUR of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_compset (FLOAT).** Average of net amount in EUR of confirmed bookings for key (search\_date, provider\_id) of the total of sellers of TravelgateX.
* **revenue\_index (FLOAT).** Min-Max Normalization of the field revenue\_value.
* **total\_provider (STRING).** Total of suppliers that have been considered for the benchmarking.
* **availability\_tgx (NUMBER).** - Quantity of unique hotels available in TravelgateX for key above.
* **booking\_tgx (NUMBER).** - Quantity of confirmed bookings in TravelgateX for the key above.
* **revenue\_tgx (NUMBER).** - Total net amount in EUR of confirmed bookings in TravelgateX for the key above.


__Preview__


| provider\_id | search\_date             | availability\_value | availability\_percentile | availability\_rank | availability\_compset | availability\_index | booking\_value | booking\_percentile | booking\_rank | booking\_compset | booking\_index | revenue\_value      | revenue\_percentile | revenue\_rank | revenue\_compset | revenue\_index | total\_provider | availability\_tgx | booking\_tgx | revenue\_tgx |
|-------------|-------------------------|--------------------|-------------------------|-------------------|----------------------|--------------------|---------------|--------------------|--------------|-----------------|---------------|--------------------|--------------------|--------------|-----------------|---------------|----------------|------------------|-------------|-------------|
|provider 1   | 2019-04-03 00:00:00 UTC | 2944               | 0.7314                  | 77                | 11463.625            | 0.0119             | 29            | 0.7385             | 65           | 103.508         | 0.0065        | 29590.885648230473 | 0.8551             | 42           | 58299.9138      | 0.0131        | 284            | 2934688          | 19356       | 8336888     |
|provider 2   | 2019-04-03 00:00:00 UTC | 6680               | 0.7915                  | 60                | 11463.625            | 0.0271             | 19            | 0.689              | 73           | 103.508         | 0.0043        | 8789.47669647448   | 0.742              | 74           | 58299.9138      | 0.0039        | 284            | 2934688          | 19356       | 8336888     |
|provider 3   | 2019-04-03 00:00:00 UTC | 3130               | 0.735                   | 76                | 11463.625            | 0.0127             | 12            | 0.6113             | 80           | 103.508         | 0.0027        | 8151.5             | 0.735              | 76           | 58299.9138      | 0.0036        | 284            | 2934688          | 19356       | 8336888     |