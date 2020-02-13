+++
title = "Query Hotel-X Report"
pagetitle = "Hotel-X - Query"
description = "How to query about your hotel-x content mapping"
icon = "fa-book"
weight = 3
alwaysopen = false
isDirectory = false
+++

This page shows you how to query Hotel-X content mapping using Insights-X API.

Access to https://insights.travelgatex.com/

# Request Format

The request input is formed by 2 mandatory inputs: requestDate, mappingReport and 3 optional input: supplierCode_in, clientCode_in and accessCode_in. Next, the possible values for each input:

* **requestDate:** Range of dates when the searches were done. 
    * **gte** Searches done after this date. (YYYY-MM-DD).
    * **lte** Searches done before this date. (YYYY-MM-DD).    

* **mappingReport:** Type of report that will be requested. Next, the possible values:
    * **BOARD**
    * **ROOM**
    * **ROOM_HOTEL**
    * **RATE**

* **supplierCode_in:** List of suppliers.
* **clientCode_in:** List of clients.
* **accessCode_in:** List of accesses.

## Example:
~~~json
{
  hotelXMappingReport(
    where: {
      requestDate: { gte: "2020-02-04", lte: "2020-02-04" }
      mappingReport: BOARD
    }
  ) {
    data {
      url
    }
  }
}

~~~
Include authorization header with your bearer.
~~~json
{
 "Authorization" :"Bearer fjaiwogpyaioguafb3u90nuqwafaganuql"
}

~~~

# Response Format

Results are given by a csv file with an url from Google Cloud Storage.

## Example:
~~~json
{
  "data": {
    "hotelXMappingReport": {
      "data": {
        "url": "https://storage.cloud.google.com/report-availability/45782.csv"
      }
    }
  }
}

~~~

# File Format

The file contains next 6 columns:

* **supplier** Supplier code. 
* **context** Context code of map. 
* **src_code** Suppliers code. 
* **dst_code** Context code. This column will be empty when src_code wasn't found in mapping file.
* **last_hit** Date of last appearance. 
* **hits** Quantity of times that code was mapped. 

## Example:

| supplier | context | src\_code | dst\_code  | last\_hit   | hits |
| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |
| SUP1 | CTX | full | FB | 2020-02-04 | 24565 |
| SUP1 | CTX | extra |  | 2020-02-03 | 284 |
| SUP2 | CTX | half\_board | HB | 2020-02-02 | 2155 |
| SUP2 | CTX | all\_inclusive | AI | 2020-02-04 | 27 |